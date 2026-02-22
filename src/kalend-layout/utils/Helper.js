"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToCalendarDays = exports.mapEventsToDate = exports.formatToDateKey = void 0;
const luxon_1 = require("luxon");
const LuxonHelper_1 = require("./LuxonHelper");
// TODO should add timezone?
const formatToDateKey = (date, timezone) => date.setZone(timezone || 'Europe/Berlin').toFormat('dd-MM-yyyy');
exports.formatToDateKey = formatToDateKey;
const mapEventsToDate = (events, timezone) => {
    const result = {};
    if (!events || events.length === 0) {
        return result;
    }
    events === null || events === void 0 ? void 0 : events.forEach((event) => {
        const startDate = (0, LuxonHelper_1.parseToDateTime)(event.startAt, event.timezoneStartAt || timezone);
        const key = (0, exports.formatToDateKey)(startDate);
        if (result[key]) {
            result[key] = [...result[key], ...[event]];
        }
        else {
            result[key] = [event];
        }
    });
    return result;
};
exports.mapEventsToDate = mapEventsToDate;
const parseToCalendarDays = (calendarDays) => {
    if (typeof calendarDays[0] === 'string') {
        return calendarDays.map((item) => luxon_1.DateTime.fromISO(item));
    }
    return calendarDays;
};
exports.parseToCalendarDays = parseToCalendarDays;
