"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToDateTime = exports.LuxonHelper = void 0;
const luxon_1 = require("luxon");
const constants_1 = require("../constants");
exports.LuxonHelper = {
    isSameDay: (dateA, dateB) => {
        return (dateA.year === dateB.year &&
            dateA.month === dateB.month &&
            dateA.day === dateB.day);
    },
    differenceInDays: (start, end) => {
        const diffInDaysObj = end
            .diff(start, 'hours')
            .toObject();
        const diffInHours = diffInDaysObj.hours;
        if (diffInHours) {
            if (diffInHours < 24) {
                return 0;
            }
            else if (diffInHours === 24) {
                return 1;
            }
            else {
                return Number((diffInHours / 24).toFixed(0));
            }
        }
        return 0;
    },
};
const parseToDateTime = (
// @ts-ignore
date, zone, deviceTimezone
// @ts-ignore
) => {
    const dateString = typeof date === 'string' ? date : date.toString();
    const isFloatingDatetime = zone === constants_1.FLOATING_DATETIME;
    // Adjust date with timezone so when converted to UTC it represents correct value with fixed time
    if (isFloatingDatetime) {
        // @ts-ignore
        const dateFloating = luxon_1.DateTime.fromISO(dateString, {
            zone: constants_1.UTC_TIMEZONE,
        });
        return dateFloating.toUTC();
    }
    // @ts-ignore
    const thisDate = luxon_1.DateTime.fromISO(dateString);
    if (!zone) {
        // Adjust datetime to device timezone
        if (deviceTimezone) {
            return thisDate.setZone(deviceTimezone);
        }
        else {
            return thisDate;
        }
    }
    return thisDate.setZone(zone);
};
exports.parseToDateTime = parseToDateTime;
