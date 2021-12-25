import { CALENDAR_VIEW } from '../common/enums';
import {
  Callbacks,
  Config,
  EventLayout,
  ShowMoreEvents,
} from '../common/interface';
import { DateTime } from 'luxon';
import { createCallbacks, createConfig } from '../layers/ConfigLayer';
import { createContext, useReducer } from 'react';
import Reducer from './reducer';

export interface Store {
  isLoading: boolean;
  headerEventRowsCount: number;
  initialView: CALENDAR_VIEW | null;
  selectedView: CALENDAR_VIEW | null;
  selectedDate: DateTime;
  calendarDays: DateTime[];
  width: number;
  height: number;
  isMobile: boolean;
  events: any;
  // layouts
  daysViewLayout: EventLayout | null;
  headerLayout: EventLayout | null;
  monthLayout: EventLayout[] | null;
  monthOverflowEvents: any;
  layoutUpdateSequence: number;
  config: Config;
  callbacks: Callbacks;
  showMoreEvents: ShowMoreEvents | null;
}

export const Context: any = createContext({});

const StoreProvider = ({ children }: any) => {
  const initialContext: Store = {
    isLoading: false,
    headerEventRowsCount: 0,
    initialView: null,
    selectedView: null,
    selectedDate: DateTime.now(),
    calendarDays: [],
    width: 0,
    height: 0,
    isMobile: false,
    events: {},
    daysViewLayout: null,
    headerLayout: null,
    monthLayout: null,
    monthOverflowEvents: null,
    showMoreEvents: null,
    layoutUpdateSequence: 1,
    config: createConfig({}),
    callbacks: createCallbacks({}),
  };

  const [store, dispatch] = useReducer(Reducer, initialContext);

  return (
    <Context.Provider value={[store, dispatch]}>{children}</Context.Provider>
  );
};

export default StoreProvider;
