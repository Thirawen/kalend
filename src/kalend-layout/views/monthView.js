"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthViewLayout = exports.prepareMultiDayEvents = void 0;
const index_1 = require("../index");
const commonHelper_1 = require("../utils/commonHelper");
const LuxonHelper_1 = require("../utils/LuxonHelper");
const Helper_1 = require("../utils/Helper");
const KalendHelper_1 = require("../utils/KalendHelper");
const monthViewHelper_1 = require("../utils/monthViewHelper");
const prepareMultiDayEvents = (events, config, breakPointDate, view) => {
    const preparedEvents = {};
    events.forEach((event) => {
        const { dateTimeStart, dateTimeEnd } = (0, KalendHelper_1.getEventDateTime)(event, config);
        // check if is multi-day
        const isSameDay = LuxonHelper_1.LuxonHelper.isSameDay(dateTimeStart, dateTimeEnd);
        // origin date to determine when event starts in each row
        let originDate = (0, Helper_1.formatToDateKey)(dateTimeStart);
        // handle multi-day
        if (!isSameDay) {
            const diffInDays = LuxonHelper_1.LuxonHelper.differenceInDays(dateTimeStart, dateTimeEnd);
            // need to store each occurrence
            let daySpawns = [];
            // flag if events continue in next row
            // split daySpawns and adjust originDate
            for (let i = 0; i <= diffInDays; i++) {
                const refDate = dateTimeStart.plus({ days: i });
                const dateKey = (0, Helper_1.formatToDateKey)(refDate, config.timezone);
                // store each day in multi-day event range
                daySpawns.push(dateKey);
                // break events spawned across multiple rows
                const dateOfWeek = refDate.weekday;
                const weekDayBreakPoint = config.weekDayStart === index_1.WEEKDAY_START.MONDAY ? 7 : 1;
                if (dateOfWeek === weekDayBreakPoint ||
                    i === diffInDays ||
                    view === index_1.CALENDAR_VIEW.DAY) {
                    const eventClone = Object.assign(Object.assign({}, event), { originDate, daysAfter: diffInDays - i });
                    eventClone.daySpawns = daySpawns;
                    if (view === index_1.CALENDAR_VIEW.DAY) {
                        if (!preparedEvents[dateKey]) {
                            preparedEvents[dateKey] = [eventClone];
                        }
                        else {
                            preparedEvents[dateKey] = [
                                ...preparedEvents[dateKey],
                                ...[eventClone],
                            ];
                        }
                    }
                    else {
                        if (!preparedEvents[originDate]) {
                            preparedEvents[originDate] = [eventClone];
                        }
                        else {
                            preparedEvents[originDate] = [
                                ...preparedEvents[originDate],
                                ...[eventClone],
                            ];
                        }
                    }
                    daySpawns = [];
                }
                if (((breakPointDate && breakPointDate === dateKey) ||
                    dateOfWeek === weekDayBreakPoint) &&
                    i < diffInDays) {
                    originDate = (0, Helper_1.formatToDateKey)(refDate.plus({ days: 1 }));
                }
            }
        }
        else {
            // single day event
            const dateKey = (0, Helper_1.formatToDateKey)((0, LuxonHelper_1.parseToDateTime)(event.startAt, event.timezoneStartAt || config.timezone));
            event.originDate = originDate;
            if (!preparedEvents[dateKey]) {
                preparedEvents[dateKey] = [event];
            }
            else {
                preparedEvents[dateKey] = [...preparedEvents[dateKey], ...[event]];
            }
        }
    });
    return preparedEvents;
};
exports.prepareMultiDayEvents = prepareMultiDayEvents;
const getMonthViewLayout = (events, width, calendarDays, config, maxEventsVisible, isHeaderEvents) => {
    const result = [];
    // split calendar days to rows
    const calendarDaysRows = (0, monthViewHelper_1.getMonthRows)(calendarDays);
    // Group all events by date key
    // Clone multi-day events to all dates in its range (start from first
    // calendar day and end in last calendar day
    if (!events) {
        return commonHelper_1.DEFAULT_ROW_LAYOUT_RESULT;
    }
    const preparedEvents = (0, exports.prepareMultiDayEvents)(events, config);
    // store max offset top to adjust height of header events parent element
    let headerOffsetTop = 0;
    let overflowingEvents = {};
    // get layout for each row
    calendarDaysRows.forEach((row) => {
        const rowResult = (0, commonHelper_1.getRowLayout)(preparedEvents, width / 7, row, config.timezone, maxEventsVisible, isHeaderEvents, overflowingEvents);
        // store only max value
        if (rowResult.headerOffsetTop > headerOffsetTop) {
            headerOffsetTop = rowResult.headerOffsetTop;
        }
        result.push(rowResult.positions);
        overflowingEvents = rowResult.overflowingEvents;
    });
    return {
        positions: result,
        overflowingEvents,
        headerOffsetTop,
    };
};
exports.getMonthViewLayout = getMonthViewLayout;
