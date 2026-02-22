import { CALENDAR_VIEW, Config } from '../index';
import { RowLayoutResult } from '../utils/commonHelper';
import { DateTime } from 'luxon';
export declare const prepareMultiDayEvents: (events: any, config: Config, breakPointDate?: string, view?: CALENDAR_VIEW) => any;
export declare const getMonthViewLayout: (events: any, width: number, calendarDays: DateTime[], config: Config, maxEventsVisible: number, isHeaderEvents?: boolean) => RowLayoutResult;
