import { useContext, useEffect, useReducer, useRef } from 'react';

import { CalendarEvent, EventLayout, EventStyle } from '../../common/interface';
import { Context } from '../../context/store';
import { DateTime } from 'luxon';
import {
  EVENT_MIN_HEIGHT,
  EVENT_TABLE_DELIMITER_SPACE,
} from '../../common/constants';
import { EVENT_TYPE } from '../../common/enums';
import { EventButtonProps } from './EventButton.props';
import { calculateHeaderAfterDrag, onMoveHeader } from './utils/draggingHeader';
import {
  calculateMonthEventAfterDrag,
  onMoveMonthEvent,
} from './utils/draggingMonth';
import {
  calculateNewTimeWeekDay,
  onMoveNormalEvent,
} from './utils/draggingWeek';
import {
  eventButtonInitialState,
  initEventButtonPosition,
} from './EventButton.utils';
import { formatDateTimeToString } from '../../utils/common';
import { onFinishDraggingInternal } from './utils/draggingGeneral';
import { parseEventColor } from '../../utils/calendarDays';
import ButtonBase from '../buttonBase/ButtonBase';
import EventAgenda from './eventAgenda/EventAgenda';
import EventMonth from './eventMonth/EventMonth';
import EventNormal from './eventNormal/EventNormal';
import stateReducer from '../../utils/stateReducer';

// ref to cancel timout
let timeoutRef: any;

const EventButton = (props: EventButtonProps) => {
  const {
    event,
    type,
    handleEventClick,
    day = DateTime.now(),
    onEventDragFinish,
  } = props;
  const { startAt } = event;

  const [state, dispatchState]: any = useReducer(
    stateReducer,
    eventButtonInitialState
  );
  const setState = (stateName: string, data: any): void => {
    const payload: any = { stateName, data };
    dispatchState({ state, payload });
  };

  const [store, dispatch] = useContext(Context);
  const setContext = (type: string, payload: any) => {
    dispatch({ type, payload });
  };

  const {
    isDark,
    width,
    calendarDays,
    hourHeight,
    selectedView,
    daysViewLayout,
    height,
  } = store;

  const columnWidth: number =
    width / (selectedView === EVENT_TYPE.MONTH ? 7 : calendarDays.length);
  const eventColor: string = parseEventColor(event.color as string, isDark);

  const isLoaded: boolean = state.width !== 0 && state.height > 0;
  const style: EventStyle = {
    position:
      type === EVENT_TYPE.MONTH || type === EVENT_TYPE.AGENDA
        ? 'relative'
        : 'absolute',
    height: state.height || EVENT_MIN_HEIGHT,
    width: state.width,
    top: state.offsetTop,
    left: state.offsetLeft,
    zIndex: state.zIndex,
    border: state.zIndex > 2 ? `solid 1px white` : `solid 1px ${eventColor}`,
    backgroundColor: eventColor,
    visibility: isLoaded ? 'visible' : 'hidden',
    // alignItems: meta?.centerText ? 'center' : 'inherit',
  };

  const onEventClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    handleEventClick(event);
  };

  const setLayout = (layout: EventLayout) => {
    setState('initialTop', layout.offsetTop);
    setState('initialLeft', layout.offsetLeft);
    setState('offsetTop', layout.offsetTop);
    setState('offsetLeft', layout.offsetLeft);
    setState('drawingY', layout.offsetTop);
    setState('startAt', startAt);
    setState('width', layout.width);
    setState('height', layout.height);
    setState('zIndex', layout.zIndex);
    setState('border', layout.border);
    setState('meta', layout.meta);
  };

  useEffect(() => {
    initEventButtonPosition(type, props.day, event, store, setLayout);
  }, []);

  useEffect(() => {
    initEventButtonPosition(type, props.day, event, store, setLayout);
  }, [
    daysViewLayout?.[formatDateTimeToString(props.day || DateTime.now())]?.[
      event.id
    ],
  ]);

  useEffect(() => {
    initEventButtonPosition(type, props.day, event, store, setLayout);
  }, [store.layoutUpdateSequence]);

  // store values as refs to access them in event listener
  const offsetTopRef = useRef(state.offsetTop);
  const offsetLeftRef = useRef(state.offsetLeft);
  const xShiftIndexRef = useRef(0);
  const yShiftIndexRef = useRef(0);
  const draggingRef = useRef(false);
  const eventWasChangedRef = useRef(false);

  const initMove = () => {
    if (type === EVENT_TYPE.AGENDA) {
      return;
    }

    if (!draggingRef.current) {
      draggingRef.current = true;
    }

    if (type === EVENT_TYPE.NORMAL) {
      setState('offsetLeft', 0);
      setState('width', columnWidth - EVENT_TABLE_DELIMITER_SPACE);
    }
  };

  const onMove = (e: any) => {
    switch (type) {
      case EVENT_TYPE.NORMAL:
        onMoveNormalEvent(
          e,
          draggingRef,
          day,
          columnWidth,
          width,
          eventWasChangedRef,
          xShiftIndexRef,
          offsetLeftRef,
          offsetTopRef,
          setState
        );
        break;
      case EVENT_TYPE.HEADER:
        onMoveHeader(
          e,
          columnWidth,
          width,
          xShiftIndexRef,
          offsetLeftRef,
          eventWasChangedRef,
          setState
        );
        break;
      case EVENT_TYPE.MONTH:
        onMoveMonthEvent(
          e,
          height,
          draggingRef,
          day,
          columnWidth,
          width,
          xShiftIndexRef,
          yShiftIndexRef,
          eventWasChangedRef,
          offsetLeftRef,
          offsetTopRef,
          setState
        );
        break;
      default:
        return;
    }
  };

  /**
   * Cancel dragging event
   * remove listeners clean long click timeout and reset state
   * @param e
   */
  const onMouseUp = (e: any) => {
    // clean listeners
    document.removeEventListener('mouseup', onMouseUp, true);
    document.removeEventListener('mousemove', onMove, true);

    // clear timeout
    clearTimeout(timeoutRef);

    if (!eventWasChangedRef.current) {
      setState('offsetLeft', state.offsetLeft);
      setState('width', state.width);
      draggingRef.current = false;

      return;
    }

    eventWasChangedRef.current = false;

    if (!draggingRef.current) {
      return;
    }

    draggingRef.current = false;

    // add data to callback
    if (onEventDragFinish) {
      let newEvent: CalendarEvent | null = null;
      if (type === EVENT_TYPE.NORMAL) {
        newEvent = calculateNewTimeWeekDay(
          offsetTopRef.current,
          offsetLeftRef.current,
          xShiftIndexRef,
          event,
          hourHeight
        );
      } else if (type === EVENT_TYPE.HEADER) {
        newEvent = calculateHeaderAfterDrag(
          calendarDays,
          event,
          xShiftIndexRef
        );
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
      } else if (type === EVENT_TYPE.MONTH) {
        newEvent = calculateMonthEventAfterDrag(
          calendarDays,
          yShiftIndexRef,
          xShiftIndexRef,
          event
        );
      }

      if (newEvent) {
        onFinishDraggingInternal(
          newEvent,
          store,
          setContext,
          type,
          onEventDragFinish
        );
      }
    }

    e.preventDefault();
    e.stopPropagation();
  };

  /**
   * Start event dragging on long press/touch
   * Set listeners
   * @param e
   */
  const onMouseDownLong = (e: any) => {
    draggingRef.current = true;

    e.preventDefault();
    e.stopPropagation();

    if (e.button !== 0) return;
    document.addEventListener('mousemove', onMove, true);
    document.addEventListener('mouseup', onMouseUp, true);

    // set temp state while dragging
    initMove();
  };

  /**
   * Initial long press click/touch on event
   * @param e
   */
  const onMouseDown = (e: any) => {
    // add timeout to differentiate from normal clicks
    timeoutRef = setTimeout(() => {
      onMouseDownLong(e);
    }, 120);
  };

  return (
    <ButtonBase
      id={event.id}
      isDark={isDark}
      style={style}
      className={`Kalend__Event-${type} ${
        draggingRef.current ? 'Kalend__EventButton__elevation' : ''
      } ${store.layoutUpdateSequence === 1 ? 'Kalend__Event__animate' : ''}`}
      onClick={onEventClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchMove={onMove}
      onTouchEnd={onMouseUp}
    >
      {type === EVENT_TYPE.MONTH || type === EVENT_TYPE.HEADER ? (
        <EventMonth event={event} isDark={isDark} type={type} />
      ) : null}
      {type === EVENT_TYPE.NORMAL ? (
        <EventNormal
          event={event}
          isDark={isDark}
          type={type}
          meta={state.meta}
        />
      ) : null}
      {type === EVENT_TYPE.AGENDA ? (
        <EventAgenda event={event} isDark={isDark} type={type} />
      ) : null}
    </ButtonBase>
  );
};

export default EventButton;
