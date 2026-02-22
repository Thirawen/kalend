import { CALENDAR_VIEW, CalendarEvent, EventLayoutData } from '../index';
import { DateTime } from 'luxon';
export interface RowLayoutResult {
    positions: EventLayoutData[];
    overflowingEvents: CalendarEvent[];
    headerOffsetTop: number;
}
export declare const DEFAULT_ROW_LAYOUT_RESULT: {
    positions: never[];
    overflowingEvents: never[];
    headerOffsetTop: number;
};
/**
 * Use for month view and header events
 * @param events
 * @param width
 * @param calendarDays
 * @param timezone
 * @param maxEventsVisible
 * @param isHeaderEvents
 * @param overflowingEvents
 */
export declare const getRowLayout: (events: any, width: number, calendarDays: DateTime[], timezone: string, maxEventsVisible: number, isHeaderEvents?: boolean, overflowingEvents?: any) => RowLayoutResult;
export declare const checkIfIsDaysView: (view: CALENDAR_VIEW) => boolean;
