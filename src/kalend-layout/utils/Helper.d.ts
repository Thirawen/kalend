import { CalendarEvent } from '../index';
import { DateTime } from 'luxon';
export declare const formatToDateKey: (date: DateTime, timezone?: string) => string;
export declare const mapEventsToDate: (events: CalendarEvent[], timezone: string) => any;
export declare const parseToCalendarDays: (calendarDays: DateTime[] | string[]) => DateTime[];
