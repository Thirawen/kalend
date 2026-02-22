export enum CALENDAR_VIEW {
    AGENDA = "agenda",
    WEEK = "week",
    DAY = "day",
    THREE_DAYS = "threeDays",
    MONTH = "month"
}
export interface CalendarEvent {
    id: any;
    startAt: string;
    endAt: string;
    timezoneStartAt: string;
    timezoneEndAt: string;
    summary: string;
    color: string;
    internalID?: string;
    [key: string]: any;
}
interface NewEventClickData {
    event: any;
    day: Date;
    hour: number;
    startAt?: string;
    endAt?: string;
    view: CALENDAR_VIEW;
}
interface PageChangeData {
    rangeFrom: string;
    rangeTo: string;
    direction: string;
}
type OnPageChangeFunc = (data: PageChangeData) => void;
type ShowMoreMonthFunc = (data: CalendarEvent[]) => void;
type OnSelectViewFunc = (view: CALENDAR_VIEW) => void;
type OnEventClickFunc = (data: CalendarEvent, e: any) => void;
type OnEventDragFinishFunc = (prevEvent: CalendarEvent, updatedEvent: CalendarEvent, events: any, resetPosition?: any) => void;
type OnNewEventClickFunc = (data: NewEventClickData, e: any) => void;
interface Style {
    primaryColor: string;
    baseColor: string;
    inverseBaseColor: string;
}
interface ColorItems {
    primaryColor: string;
}
interface Colors {
    dark: ColorItems;
    light: ColorItems;
}
export const CalendarView: typeof CALENDAR_VIEW;
export type OnEventClickData = CalendarEvent;
export type OnNewEventClickData = NewEventClickData;
export type OnPageChangeData = PageChangeData;
export type OnSelectViewData = CALENDAR_VIEW;
export type ShowMoreMonthData = CalendarEvent[];
export type OnEventDragFinish = OnEventDragFinishFunc;
export interface KalendProps {
    initialDate?: string;
    initialView?: CALENDAR_VIEW;
    selectedView?: CALENDAR_VIEW;
    disabledViews?: CALENDAR_VIEW[];
    events?: any;
    isDark?: boolean;
    hourHeight?: number;
    onNewEventClick?: OnNewEventClickFunc;
    onEventClick?: OnEventClickFunc;
    onSelectView?: OnSelectViewFunc;
    showMoreMonth?: ShowMoreMonthFunc;
    onPageChange?: OnPageChangeFunc;
    onEventDragFinish?: OnEventDragFinishFunc;
    draggingDisabledConditions?: {
        [key: string]: boolean | string | number;
    };
    isNewEventOpen?: boolean;
    onStateChange?: any;
    disableMobileDropdown?: boolean;
    timezone?: string;
    weekDayStart?: string;
    timeFormat?: string;
    calendarIDsHidden?: string[];
    children?: any;
    language?: string;
    customLanguage?: any;
    eventLayouts?: any;
    kalendRef?: any;
    style?: Style;
    focusHour?: number;
    showTimeLine?: boolean;
    showWeekNumbers?: boolean;
    colors?: Colors;
    autoScroll?: boolean;
    disabledDragging?: boolean;
    testMode?: boolean;
}
declare const Kalend: (props: KalendProps) => any;
export default Kalend;

//# sourceMappingURL=index.d.ts.map
