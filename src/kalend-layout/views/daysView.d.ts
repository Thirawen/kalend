import { CALENDAR_VIEW, Config } from '../index';
import { DateTime } from 'luxon';
export declare const getDaysViewLayout: (events: any, calendarDays: DateTime[], config: Config, width: number, selectedView: CALENDAR_VIEW, isMobile?: boolean) => {
    normalPositions: any;
    headerPositions: any;
};
