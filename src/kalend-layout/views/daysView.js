"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysViewLayout = void 0;
const index_1 = require("../index");
const constants_1 = require("../constants");
const LuxonHelper_1 = require("../utils/LuxonHelper");
const headerViewHelper_1 = require("../utils/headerViewHelper");
const Helper_1 = require("../utils/Helper");
const KalendHelper_1 = require("../utils/KalendHelper");
const allDayEvents_1 = require("../utils/allDayEvents");
const checkOverlappingYCoordinates = (item, refFirstCoordinate, refLastCoordinate) => {
    if ((item.offsetTop > refFirstCoordinate &&
        item.offsetTop < refLastCoordinate) ||
        (refLastCoordinate > item.offsetTop &&
            refLastCoordinate < item.offsetTop) ||
        (refFirstCoordinate > item.offsetTop &&
            refFirstCoordinate < item.itemLastCoordinate) ||
        (item.offsetTop < refFirstCoordinate &&
            item.itemLastCoordinate > refLastCoordinate) ||
        // starting at same time
        item.offsetTop === refFirstCoordinate) {
        return true;
    }
    return false;
};
const calculateNormalEventPositions = (events, baseWidth, config, selectedView, dateKey) => {
    const result = [];
    if (!events) {
        return result;
    }
    const tableWidth = baseWidth / (0, KalendHelper_1.getDaysNum)(selectedView);
    const tableSpace = (tableWidth / 100) * constants_1.EVENT_TABLE_DELIMITER_SPACE;
    // sort by event start
    let sortedEvents = events.sort((a, b) => {
        return a.startAt.localeCompare(b.startAt);
    });
    // add offset top and height
    // TODO can be moved to any iteration before to optimize more
    sortedEvents = sortedEvents.map((event) => {
        const offsetTop = 
        // @ts-ignore
        (0, LuxonHelper_1.parseToDateTime)(event.startAt, event.timezoneStartAt, config.timezone)
            .diff((0, LuxonHelper_1.parseToDateTime)(event.startAt, event.timezoneStartAt, config.timezone).set({
            hour: 0,
            minute: 0,
            second: 0,
        }), 'minutes')
            .toObject().minutes /
            (60 / config.hourHeight); // adjust based on hour column height
        const eventHeight = 
        // @ts-ignore
        (0, LuxonHelper_1.parseToDateTime)(event.endAt, event.timezoneStartAt)
            .diff((0, LuxonHelper_1.parseToDateTime)(event.startAt, event.timezoneStartAt), 'minutes')
            .toObject().minutes /
            (60 / config.hourHeight); // adjust based on hour column height
        return {
            event,
            offsetTop,
            eventHeight,
            itemLastCoordinate: offsetTop + eventHeight,
        };
    });
    const layoutGroups = [];
    // now calculate layout for each overlapping group
    let currentGroup = [];
    let isFirst = true;
    let groupFirstCoordinate = 0;
    let groupLastCoordinate = 0;
    let currentGroupID = 0;
    const usedGroupIDs = [];
    sortedEvents.forEach((item) => {
        if (isFirst) {
            currentGroup.push(item);
            if (sortedEvents.length === 1) {
                layoutGroups.push(currentGroup);
                currentGroup = [];
            }
            groupFirstCoordinate = item.offsetTop;
            groupLastCoordinate = item.itemLastCoordinate;
            isFirst = false;
        }
        else {
            // check if next event is inside current group coordinates
            const isOverlapping = checkOverlappingYCoordinates(item, groupFirstCoordinate, groupLastCoordinate);
            // add to group
            if (isOverlapping) {
                currentGroup.push(item);
                // TODO this should never occur because of sorting
                if (item.offsetTop > groupFirstCoordinate) {
                    groupFirstCoordinate = item.offsetTop;
                }
                if (item.itemLastCoordinate > groupLastCoordinate) {
                    groupLastCoordinate = item.itemLastCoordinate;
                }
            }
            else {
                // we have new group of events
                // store previous group
                layoutGroups.push(currentGroup);
                usedGroupIDs.push(String(currentGroupID));
                currentGroupID += 1;
                currentGroup = [];
                currentGroup.push(item);
                groupFirstCoordinate = item.offsetTop;
                groupLastCoordinate = item.itemLastCoordinate;
            }
        }
    });
    if (!usedGroupIDs.includes(String(currentGroupID))) {
        if (currentGroup.length > 0) {
            layoutGroups.push(currentGroup);
        }
    }
    // now adjust layout for each event
    layoutGroups.forEach((groups) => {
        const count = groups.length;
        const eventWidth = tableWidth / count;
        //
        // const partialResult: any[] = result.map((item: any) => {
        //   // full event width
        //   if (item.meta?.isFullWidth) {
        //     return {
        //       ...item,
        //       width: Math.round(item.width - tableSpace), // add some padding,
        //     };
        //   } else if (item.offsetLeft > 0) {
        //     return {
        //       ...item,
        //       width: Math.round(item.width),
        //       offsetLeft: item.offsetLeft - tableSpace,
        //       zIndex: item.zIndex ? item.zIndex + 2 : 2,
        //     };
        //   } else {
        //     return { ...item, width: Math.round(item.width) };
        //   }
        // });
        groups.forEach((groupItem, index) => {
            const isFullWidth = eventWidth === tableWidth;
            const offsetLeft = eventWidth * index;
            // bring back original dates after calculations
            const eventResult = Object.assign({}, groupItem.event);
            if (eventResult.original) {
                eventResult.startAt = eventResult.original.startAt;
                eventResult.endAt = eventResult.original.endAt;
                delete eventResult.original;
            }
            result.push({
                dateKey,
                event: eventResult,
                height: groupItem.eventHeight < constants_1.EVENT_MIN_HEIGHT
                    ? constants_1.EVENT_MIN_HEIGHT
                    : groupItem.eventHeight,
                width: isFullWidth ? eventWidth - tableSpace : eventWidth,
                // some padding
                offsetLeft: offsetLeft > 0 ? offsetLeft - tableSpace : offsetLeft,
                offsetTop: groupItem.offsetTop,
                zIndex: 2 + index,
                meta: {
                    isFullWidth: eventWidth === 1,
                    showTime: eventWidth >= constants_1.SHOW_TIME_THRESHOLD &&
                        groupItem.eventHeight >= constants_1.SHOW_TIME_THRESHOLD,
                    centerText: groupItem.eventHeight <= constants_1.SHOW_TIME_THRESHOLD,
                },
            });
        });
    });
    return result;
};
const calculateDaysViewLayout = (calendarDays, events, baseWidth, config, selectedView) => {
    const result = {};
    calendarDays.forEach((calendarDay) => {
        const formattedDayString = (0, Helper_1.formatToDateKey)(calendarDay, config.timezone);
        const dayEvents = events[formattedDayString];
        const positions = calculateNormalEventPositions(dayEvents, baseWidth, config, selectedView, formattedDayString);
        result[formattedDayString] = positions;
    });
    return result;
};
const getDaysViewLayout = (events, calendarDays, config, width, selectedView, isMobile) => {
    // add allDay flag to events
    const eventsParsed = (0, allDayEvents_1.parseAllDayEventsArray)(events, config.timezone);
    // filter to header and normal events
    const headerEvents = {};
    const headerEventsTemp = [];
    const normalEvents = {};
    eventsParsed.forEach((event) => {
        const { dateTimeStart, dateTimeEnd } = (0, KalendHelper_1.getEventDateTime)(event, config);
        const key = (0, Helper_1.formatToDateKey)(dateTimeStart, config.timezone);
        // need to store each occurrence
        const daySpawns = [];
        if (event.allDay) {
            headerEventsTemp.push(event);
            if (headerEvents[key]) {
                headerEvents[key] = [...headerEvents[key], ...[event]];
            }
            else {
                headerEvents[key] = [event];
            }
        }
        else {
            // check if start and end on different days
            const isSameDay = LuxonHelper_1.LuxonHelper.isSameDay(dateTimeStart, dateTimeEnd);
            // origin date to determine when event starts in each row
            let originDate = (0, Helper_1.formatToDateKey)(dateTimeStart);
            // handle multi-day
            if (!isSameDay) {
                for (let i = 0; i <= 1; i++) {
                    const refDate = dateTimeStart.plus({ days: i });
                    originDate = (0, Helper_1.formatToDateKey)(refDate);
                    const dateKey = (0, Helper_1.formatToDateKey)(refDate, config.timezone);
                    // store each day in multi-day event range
                    daySpawns.push(dateKey);
                    const eventClone = Object.assign(Object.assign({}, event), { originDate, daysAfter: 1 - i, original: {
                            startAt: event.startAt,
                            endAt: event.endAt,
                        }, startAt: i === 1
                            ? (0, LuxonHelper_1.parseToDateTime)(event.endAt, event.timezoneStartAt, config.timezone)
                                .set({ hour: 0, minute: 0, second: 0 })
                                .toUTC()
                                .toString()
                            : event.startAt, endAt: i === 0
                            ? (0, LuxonHelper_1.parseToDateTime)(event.startAt, event.timezoneStartAt, config.timezone)
                                .set({ hour: 23, minute: 59, second: 59 })
                                .toUTC()
                                .toString()
                            : event.endAt });
                    eventClone.daySpawns = daySpawns;
                    if (!normalEvents[originDate]) {
                        normalEvents[originDate] = [eventClone];
                    }
                    else {
                        normalEvents[originDate] = [
                            ...normalEvents[originDate],
                            ...[eventClone],
                        ];
                    }
                }
            }
            else if (normalEvents[key]) {
                normalEvents[key] = [...normalEvents[key], ...[event]];
            }
            else {
                normalEvents[key] = [event];
            }
        }
    });
    const headerPositions = (0, headerViewHelper_1.calculatePositionForHeaderEvents)(headerEventsTemp, (0, KalendHelper_1.getCorrectWidth)(width, isMobile || false, index_1.CALENDAR_VIEW.WEEK), calendarDays, config, selectedView);
    // TODO filter header and normal events before
    const normalPositions = calculateDaysViewLayout(calendarDays, normalEvents, (0, KalendHelper_1.getCorrectWidth)(width, isMobile || false, index_1.CALENDAR_VIEW.WEEK), config, selectedView);
    return { normalPositions, headerPositions };
};
exports.getDaysViewLayout = getDaysViewLayout;
