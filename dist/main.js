var $cw6c3$luxon = require("luxon");
var $cw6c3$swchelperscjs_object_spreadcjs = require("@swc/helpers/cjs/_object_spread.cjs");
var $cw6c3$swchelperscjs_object_spread_propscjs = require("@swc/helpers/cjs/_object_spread_props.cjs");
var $cw6c3$reactjsxruntime = require("react/jsx-runtime");
var $cw6c3$react = require("react");
var $cw6c3$swchelperscjs_object_without_propertiescjs = require("@swc/helpers/cjs/_object_without_properties.cjs");
var $cw6c3$color = require("color");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire3f35"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire3f35"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("gZtZM", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jhaH7 = parcelRequire("jhaH7");

var $aY1FP = parcelRequire("aY1FP");

var $9VRyO = parcelRequire("9VRyO");

var $gbILw = parcelRequire("gbILw");

var $j0Eyr = parcelRequire("j0Eyr");

var $7tQs8 = parcelRequire("7tQs8");

var $l4ibA = parcelRequire("l4ibA");

var $br2ry = parcelRequire("br2ry");
module.exports.default = (data)=>{
    return new Promise((resolve)=>{
        if (data) {
            (0, $br2ry.validateInput)(data);
            const { events: events, width: width, config: config, height: height, isMobile: isMobile, selectedView: selectedView } = data;
            // parse to calendar days if dates are ISO string
            const calendarDays = (0, $l4ibA.parseToCalendarDays)(data.calendarDays);
            // calculate layout for different views
            if (selectedView === $jhaH7.CALENDAR_VIEW.MONTH) {
                const monthPositions = (0, $7tQs8.getMonthViewLayout)(events, width, calendarDays, config, (0, $j0Eyr.getMaxEventsVisible)(height));
                resolve(Object.assign(Object.assign({
                    selectedView: $jhaH7.CALENDAR_VIEW.MONTH
                }, monthPositions), {
                    calendarDays: calendarDays,
                    overflowingEvents: monthPositions.overflowingEvents
                }));
            } else if ((0, $aY1FP.checkIfIsDaysView)(selectedView)) {
                const result = (0, $gbILw.getDaysViewLayout)(events, calendarDays, config, width, selectedView, isMobile);
                resolve({
                    selectedView: selectedView,
                    headerPositions: result.headerPositions.positions,
                    headerOffsetTop: result.headerPositions.headerOffsetTop,
                    calendarDays: calendarDays,
                    normalPositions: result.normalPositions
                });
            } else if (selectedView === $jhaH7.CALENDAR_VIEW.AGENDA) {
                const agendaEvents = (0, $9VRyO.getAgendaView)(events, config);
                resolve({
                    events: agendaEvents,
                    selectedView: $jhaH7.CALENDAR_VIEW.AGENDA
                });
            }
        }
    });
};

});
parcelRegister("jhaH7", function(module, exports) {
"use strict";
var $e087e6924b79a1c0$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.TIME_FORMAT = module.exports.WEEKDAY_START = module.exports.CALENDAR_NAVIGATION_DIRECTION = module.exports.EVENT_TYPE = module.exports.CALENDAR_VIEW = void 0;

const $e087e6924b79a1c0$var$main_1 = $e087e6924b79a1c0$var$__importDefault((parcelRequire("gZtZM")));
var $e087e6924b79a1c0$var$CALENDAR_VIEW;
(function(CALENDAR_VIEW) {
    CALENDAR_VIEW["AGENDA"] = "agenda";
    CALENDAR_VIEW["WEEK"] = "week";
    CALENDAR_VIEW["DAY"] = "day";
    CALENDAR_VIEW["THREE_DAYS"] = "threeDays";
    CALENDAR_VIEW["MONTH"] = "month";
})($e087e6924b79a1c0$var$CALENDAR_VIEW = module.exports.CALENDAR_VIEW || (module.exports.CALENDAR_VIEW = {}));
var $e087e6924b79a1c0$var$EVENT_TYPE;
(function(EVENT_TYPE) {
    EVENT_TYPE["NORMAL"] = "normal";
    EVENT_TYPE["MONTH"] = "month";
    EVENT_TYPE["AGENDA"] = "agenda";
    EVENT_TYPE["HEADER"] = "header";
    EVENT_TYPE["SHOW_MORE_MONTH"] = "showMoreMonth";
})($e087e6924b79a1c0$var$EVENT_TYPE = module.exports.EVENT_TYPE || (module.exports.EVENT_TYPE = {}));
var $e087e6924b79a1c0$var$CALENDAR_NAVIGATION_DIRECTION;
(function(CALENDAR_NAVIGATION_DIRECTION) {
    CALENDAR_NAVIGATION_DIRECTION["FORWARD"] = "forward";
    CALENDAR_NAVIGATION_DIRECTION["BACKWARDS"] = "backwards";
    CALENDAR_NAVIGATION_DIRECTION["TODAY"] = "today";
})($e087e6924b79a1c0$var$CALENDAR_NAVIGATION_DIRECTION = module.exports.CALENDAR_NAVIGATION_DIRECTION || (module.exports.CALENDAR_NAVIGATION_DIRECTION = {}));
var $e087e6924b79a1c0$var$WEEKDAY_START;
(function(WEEKDAY_START) {
    WEEKDAY_START["MONDAY"] = "MONDAY";
    WEEKDAY_START["SUNDAY"] = "SUNDAY";
    WEEKDAY_START["UNKNOWN"] = "UNKNOWN";
})($e087e6924b79a1c0$var$WEEKDAY_START = module.exports.WEEKDAY_START || (module.exports.WEEKDAY_START = {}));
var $e087e6924b79a1c0$var$TIME_FORMAT;
(function(TIME_FORMAT) {
    TIME_FORMAT["H_24"] = "24";
    TIME_FORMAT["H_12"] = "12";
})($e087e6924b79a1c0$var$TIME_FORMAT = module.exports.TIME_FORMAT || (module.exports.TIME_FORMAT = {}));
module.exports.default = $e087e6924b79a1c0$var$main_1.default;

});

parcelRegister("aY1FP", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.checkIfIsDaysView = module.exports.getRowLayout = module.exports.DEFAULT_ROW_LAYOUT_RESULT = void 0;

var $jhaH7 = parcelRequire("jhaH7");

var $bHm26 = parcelRequire("bHm26");

var $l4ibA = parcelRequire("l4ibA");
/**
 * Find free slot in day column where to put event
 * @param indexes
 * @param maxEventsVisible
 */ const $7fc0ce54b4096a57$var$findFreeSlot = (indexes, maxEventsVisible)=>{
    let freeIndex;
    if (!maxEventsVisible || maxEventsVisible <= 0) return -999;
    for(let i = 0; i < maxEventsVisible + 1; i++)if (indexes.length === 0 || !indexes.includes(i)) {
        freeIndex = i;
        return freeIndex;
    }
    return -1;
};
const $7fc0ce54b4096a57$var$addEventToResult = (usedIDs, event, takenIndexes, offsetTopIndex, width, headerOffsetTop, tableSpace, dayIndex, result, isHeaderEvents)=>{
    usedIDs.push(`${event.id}_${event.internalID}`);
    if (event.daySpawns) event.daySpawns.forEach((daySpawn)=>{
        if (takenIndexes[daySpawn]) takenIndexes[daySpawn] = [
            ...takenIndexes[daySpawn],
            offsetTopIndex
        ];
        else takenIndexes[daySpawn] = [
            offsetTopIndex
        ];
    });
    else if (takenIndexes[event.originDate]) takenIndexes[event.originDate] = [
        ...takenIndexes[event.originDate],
        offsetTopIndex
    ];
    else takenIndexes[event.originDate] = [
        offsetTopIndex
    ];
    // spawn width across all days
    const eventWidth = event.daySpawns ? width * event.daySpawns.length : width;
    const eventOffsetTop = 20 * offsetTopIndex;
    if (isHeaderEvents && eventOffsetTop > headerOffsetTop) headerOffsetTop = eventOffsetTop;
    const data = {
        event: event,
        width: Math.round(eventWidth - tableSpace),
        offsetLeft: dayIndex * width + 2,
        offsetTop: (0, $bHm26.getEventHeight)(isHeaderEvents) * offsetTopIndex + offsetTopIndex,
        height: (0, $bHm26.getEventHeight)(isHeaderEvents),
        zIndex: 2
    };
    result.push(data);
    return {
        headerOffsetTop: headerOffsetTop,
        takenIndexes: takenIndexes
    };
};
module.exports.DEFAULT_ROW_LAYOUT_RESULT = {
    positions: [],
    overflowingEvents: [],
    headerOffsetTop: 0
};
const $7fc0ce54b4096a57$var$addToOverflowingEvents = (event, date, overflowingEvents)=>{
    if (overflowingEvents[date]) overflowingEvents[date] = [
        ...overflowingEvents[date],
        event
    ];
    else overflowingEvents[date] = [
        event
    ];
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
 */ const $7fc0ce54b4096a57$var$getRowLayout = (events, width, calendarDays, timezone, maxEventsVisible, isHeaderEvents, overflowingEvents)=>{
    // store biggest offset top for day view header events
    let headerOffsetTop = 0;
    const tableSpace = width / 100 * $bHm26.EVENT_TABLE_DELIMITER_SPACE;
    const result = [];
    if (!events) return module.exports.DEFAULT_ROW_LAYOUT_RESULT;
    // prevent adding duplicates from multi-day clones
    const usedIDs = [];
    // store taken indexes under date key
    let takenIndexes = {};
    const calendarDaysDateKey = calendarDays.map((day)=>(0, $l4ibA.formatToDateKey)(day, timezone));
    calendarDays.forEach((day, dayIndex)=>{
        const dateKey = (0, $l4ibA.formatToDateKey)(day, timezone);
        // get only events for this day
        const dayEvents = events[dateKey];
        let eventRealIndex = 0; // use basic index for events with free slots
        if (dayEvents) dayEvents.forEach((event)=>{
            const takenSlots = takenIndexes[event.originDate];
            // find free slot
            let offsetTopIndex = takenSlots ? $7fc0ce54b4096a57$var$findFreeSlot(takenSlots, maxEventsVisible) : eventRealIndex;
            if (!usedIDs.includes(event.id)) {
                //
                if (!maxEventsVisible || maxEventsVisible <= 0 || eventRealIndex >= maxEventsVisible || offsetTopIndex >= maxEventsVisible) offsetTopIndex = -999;
                eventRealIndex += 1;
                // check for overflowing events
                if (offsetTopIndex === -1 && overflowingEvents) {
                    // save all clones to overflown array
                    if (event.daySpawns) event.daySpawns.forEach((daySpawn)=>{
                        var _a, _b;
                        // check if we can fit spawn to column
                        const takenSlotsSpawn = takenIndexes[daySpawn];
                        // find free slot
                        offsetTopIndex = takenSlotsSpawn ? $7fc0ce54b4096a57$var$findFreeSlot(takenSlotsSpawn, maxEventsVisible) : 0; // we can use 0 top index as either next day wasn't
                        // iterated yet or takenSlotsSpawn exists for that column
                        if (offsetTopIndex <= -1 && overflowingEvents) $7fc0ce54b4096a57$var$addToOverflowingEvents(event, daySpawn, overflowingEvents);
                        else {
                            const eventAddResult = $7fc0ce54b4096a57$var$addEventToResult(usedIDs, Object.assign(Object.assign({}, event), {
                                originDate: daySpawn,
                                daySpawns: (_a = event.daySpawns) === null || _a === void 0 ? void 0 : _a.slice((_b = event.daySpawns) === null || _b === void 0 ? void 0 : _b.indexOf(daySpawn))
                            }), takenIndexes, offsetTopIndex, width, headerOffsetTop, tableSpace, // adjust date index for daySpawn
                            calendarDaysDateKey.indexOf(daySpawn), result, isHeaderEvents);
                            headerOffsetTop = eventAddResult.headerOffsetTop;
                            takenIndexes = eventAddResult.takenIndexes;
                        }
                    });
                    else $7fc0ce54b4096a57$var$addToOverflowingEvents(event, event.originDate, overflowingEvents);
                } else if (offsetTopIndex === -999) {
                    if (event.daySpawns) event.daySpawns.forEach((daySpawn)=>{
                        $7fc0ce54b4096a57$var$addToOverflowingEvents(event, daySpawn, overflowingEvents);
                    });
                    else $7fc0ce54b4096a57$var$addToOverflowingEvents(event, event.originDate, overflowingEvents);
                } else {
                    const eventAddResult = $7fc0ce54b4096a57$var$addEventToResult(usedIDs, event, takenIndexes, offsetTopIndex, width, headerOffsetTop, tableSpace, dayIndex, result, isHeaderEvents);
                    headerOffsetTop = eventAddResult.headerOffsetTop;
                    takenIndexes = eventAddResult.takenIndexes;
                }
            }
        });
    });
    return {
        positions: result,
        overflowingEvents: overflowingEvents,
        headerOffsetTop: headerOffsetTop
    };
};
module.exports.getRowLayout = $7fc0ce54b4096a57$var$getRowLayout;
const $7fc0ce54b4096a57$var$checkIfIsDaysView = (view)=>{
    return view === $jhaH7.CALENDAR_VIEW.WEEK || view === $jhaH7.CALENDAR_VIEW.DAY || view === $jhaH7.CALENDAR_VIEW.THREE_DAYS;
};
module.exports.checkIfIsDaysView = $7fc0ce54b4096a57$var$checkIfIsDaysView;

});
parcelRegister("bHm26", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getEventHeight = module.exports.HEADER_EVENT_HEIGHT = module.exports.MONTH_EVENT_HEIGHT = module.exports.SEVEN_DAYS = module.exports.THREE_DAYS = module.exports.ONE_DAY = module.exports.SHOW_TIME_THRESHOLD = module.exports.SCROLLBAR_WIDTH = module.exports.EVENT_MIN_HEIGHT = module.exports.CALENDAR_OFFSET_LEFT = module.exports.UTC_TIMEZONE = module.exports.FLOATING_DATETIME = module.exports.EVENT_TABLE_DELIMITER_SPACE = void 0;
// constants
module.exports.EVENT_TABLE_DELIMITER_SPACE = 8;
module.exports.FLOATING_DATETIME = 'floating'; // fixed datetime without timezone
module.exports.UTC_TIMEZONE = 'UTC';
module.exports.CALENDAR_OFFSET_LEFT = 40;
module.exports.EVENT_MIN_HEIGHT = 8;
module.exports.SCROLLBAR_WIDTH = 15;
module.exports.SHOW_TIME_THRESHOLD = 60;
module.exports.ONE_DAY = 1;
module.exports.THREE_DAYS = 3;
module.exports.SEVEN_DAYS = 7;
module.exports.MONTH_EVENT_HEIGHT = 17;
module.exports.HEADER_EVENT_HEIGHT = 20;
const $8844cd25d574af00$var$getEventHeight = (isHeaderEvents)=>{
    if (isHeaderEvents) return module.exports.HEADER_EVENT_HEIGHT;
    return module.exports.MONTH_EVENT_HEIGHT;
};
module.exports.getEventHeight = $8844cd25d574af00$var$getEventHeight;

});

parcelRegister("l4ibA", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.parseToCalendarDays = module.exports.mapEventsToDate = module.exports.formatToDateKey = void 0;


var $dp468 = parcelRequire("dp468");
// TODO should add timezone?
const $f568140d1e82f525$var$formatToDateKey = (date, timezone)=>date.setZone(timezone || 'Europe/Berlin').toFormat('dd-MM-yyyy');
module.exports.formatToDateKey = $f568140d1e82f525$var$formatToDateKey;
const $f568140d1e82f525$var$mapEventsToDate = (events, timezone)=>{
    const result = {};
    if (!events || events.length === 0) return result;
    events === null || events === void 0 || events.forEach((event)=>{
        const startDate = (0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt || timezone);
        const key = (0, module.exports.formatToDateKey)(startDate);
        if (result[key]) result[key] = [
            ...result[key],
            event
        ];
        else result[key] = [
            event
        ];
    });
    return result;
};
module.exports.mapEventsToDate = $f568140d1e82f525$var$mapEventsToDate;
const $f568140d1e82f525$var$parseToCalendarDays = (calendarDays)=>{
    if (typeof calendarDays[0] === 'string') return calendarDays.map((item)=>$cw6c3$luxon.DateTime.fromISO(item));
    return calendarDays;
};
module.exports.parseToCalendarDays = $f568140d1e82f525$var$parseToCalendarDays;

});
parcelRegister("dp468", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.parseToDateTime = module.exports.LuxonHelper = void 0;


var $bHm26 = parcelRequire("bHm26");
module.exports.LuxonHelper = {
    isSameDay: (dateA, dateB)=>{
        return dateA.year === dateB.year && dateA.month === dateB.month && dateA.day === dateB.day;
    },
    differenceInDays: (start, end)=>{
        const diffInDaysObj = end.diff(start, 'hours').toObject();
        const diffInHours = diffInDaysObj.hours;
        if (diffInHours) {
            if (diffInHours < 24) return 0;
            else if (diffInHours === 24) return 1;
            else return Number((diffInHours / 24).toFixed(0));
        }
        return 0;
    }
};
const $9c20c9ea4f54bf00$var$parseToDateTime = (// @ts-ignore
date, zone, deviceTimezone)=>{
    const dateString = typeof date === 'string' ? date : date.toString();
    const isFloatingDatetime = zone === $bHm26.FLOATING_DATETIME;
    // Adjust date with timezone so when converted to UTC it represents correct value with fixed time
    if (isFloatingDatetime) {
        // @ts-ignore
        const dateFloating = $cw6c3$luxon.DateTime.fromISO(dateString, {
            zone: $bHm26.UTC_TIMEZONE
        });
        return dateFloating.toUTC();
    }
    // @ts-ignore
    const thisDate = $cw6c3$luxon.DateTime.fromISO(dateString);
    if (!zone) {
        // Adjust datetime to device timezone
        if (deviceTimezone) return thisDate.setZone(deviceTimezone);
        else return thisDate;
    }
    return thisDate.setZone(zone);
};
module.exports.parseToDateTime = $9c20c9ea4f54bf00$var$parseToDateTime;

});



parcelRegister("9VRyO", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getAgendaView = void 0;

var $dp468 = parcelRequire("dp468");

var $l4ibA = parcelRequire("l4ibA");

var $58toD = parcelRequire("58toD");
const $73b2fbefbe0f2315$var$prepareMultiDayEvents = (events, config)=>{
    const preparedEvents = {};
    events.forEach((event)=>{
        const { dateTimeStart: dateTimeStart, dateTimeEnd: dateTimeEnd } = (0, $58toD.getEventDateTime)(event, config);
        // check if is multi-day
        const isSameDay = $dp468.LuxonHelper.isSameDay(dateTimeStart, dateTimeEnd);
        // origin date to determine when event starts in each row
        let originDate = (0, $l4ibA.formatToDateKey)(dateTimeStart);
        // handle multi-day
        if (!isSameDay) {
            const diffInDays = $dp468.LuxonHelper.differenceInDays(dateTimeStart, dateTimeEnd);
            // need to store each occurrence
            let daySpawns = [];
            // flag if events continue in next row
            // split daySpawns and adjust originDate
            for(let i = 0; i <= diffInDays; i++){
                const refDate = dateTimeStart.plus({
                    days: i
                });
                const dateKey = (0, $l4ibA.formatToDateKey)(refDate, config.timezone);
                // store each day in multi-day event range
                daySpawns.push(dateKey);
                const eventClone = Object.assign(Object.assign({}, event), {
                    startAt: refDate.toString(),
                    summary: `${event.summary} ${i + 1}/${diffInDays + 1}`,
                    originDate: originDate,
                    daysAfter: diffInDays - i
                });
                eventClone.daySpawns = daySpawns;
                if (!preparedEvents[originDate]) preparedEvents[originDate] = [
                    eventClone
                ];
                else preparedEvents[originDate] = [
                    ...preparedEvents[originDate],
                    eventClone
                ];
                daySpawns = [];
                originDate = (0, $l4ibA.formatToDateKey)(refDate.plus({
                    days: 1
                }));
            }
        } else {
            // single day event
            const dateKey = (0, $l4ibA.formatToDateKey)((0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt || config.timezone));
            event.originDate = originDate;
            if (!preparedEvents[dateKey]) preparedEvents[dateKey] = [
                event
            ];
            else preparedEvents[dateKey] = [
                ...preparedEvents[dateKey],
                event
            ];
        }
    });
    return preparedEvents;
};
const $73b2fbefbe0f2315$var$getAgendaView = (events, config)=>{
    const preparedEvents = $73b2fbefbe0f2315$var$prepareMultiDayEvents(events, config);
    return preparedEvents;
};
module.exports.getAgendaView = $73b2fbefbe0f2315$var$getAgendaView;

});
parcelRegister("58toD", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getEventDateTime = module.exports.getCorrectWidth = module.exports.getDaysNum = void 0;

var $jhaH7 = parcelRequire("jhaH7");

var $bHm26 = parcelRequire("bHm26");

var $dp468 = parcelRequire("dp468");
const $3bd480948e898c6d$var$getDaysNum = (calendarView)=>{
    switch(calendarView){
        case $jhaH7.CALENDAR_VIEW.WEEK:
            return $bHm26.SEVEN_DAYS;
        case $jhaH7.CALENDAR_VIEW.THREE_DAYS:
            return $bHm26.THREE_DAYS;
        case $jhaH7.CALENDAR_VIEW.DAY:
            return $bHm26.ONE_DAY;
        default:
            return $bHm26.SEVEN_DAYS;
    }
};
module.exports.getDaysNum = $3bd480948e898c6d$var$getDaysNum;
const $3bd480948e898c6d$var$getCorrectWidth = (width, isMobile, selectedView)=>{
    if (selectedView === $jhaH7.CALENDAR_VIEW.WEEK || selectedView === $jhaH7.CALENDAR_VIEW.DAY || selectedView === $jhaH7.CALENDAR_VIEW.THREE_DAYS) {
        if (isMobile) return width;
        else return width - $bHm26.SCROLLBAR_WIDTH;
    }
    return width;
};
module.exports.getCorrectWidth = $3bd480948e898c6d$var$getCorrectWidth;
const $3bd480948e898c6d$var$getEventDateTime = (event, config)=>{
    const dateTimeStart = (0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt || config.timezone);
    const dateTimeEnd = (0, $dp468.parseToDateTime)(event.endAt, event.timezoneStartAt || config.timezone);
    return {
        dateTimeStart: dateTimeStart,
        dateTimeEnd: dateTimeEnd
    };
};
module.exports.getEventDateTime = $3bd480948e898c6d$var$getEventDateTime;

});


parcelRegister("gbILw", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getDaysViewLayout = void 0;

var $jhaH7 = parcelRequire("jhaH7");

var $bHm26 = parcelRequire("bHm26");

var $dp468 = parcelRequire("dp468");

var $bx6fc = parcelRequire("bx6fc");

var $l4ibA = parcelRequire("l4ibA");

var $58toD = parcelRequire("58toD");

var $DZadr = parcelRequire("DZadr");
const $bc9065eeafab43e7$var$checkOverlappingYCoordinates = (item, refFirstCoordinate, refLastCoordinate)=>{
    if (item.offsetTop > refFirstCoordinate && item.offsetTop < refLastCoordinate || refLastCoordinate > item.offsetTop && refLastCoordinate < item.offsetTop || refFirstCoordinate > item.offsetTop && refFirstCoordinate < item.itemLastCoordinate || item.offsetTop < refFirstCoordinate && item.itemLastCoordinate > refLastCoordinate || // starting at same time
    item.offsetTop === refFirstCoordinate) return true;
    return false;
};
const $bc9065eeafab43e7$var$calculateNormalEventPositions = (events, baseWidth, config, selectedView, dateKey)=>{
    const result = [];
    if (!events) return result;
    const tableWidth = baseWidth / (0, $58toD.getDaysNum)(selectedView);
    const tableSpace = tableWidth / 100 * $bHm26.EVENT_TABLE_DELIMITER_SPACE;
    // sort by event start
    let sortedEvents = events.sort((a, b)=>{
        return a.startAt.localeCompare(b.startAt);
    });
    // add offset top and height
    // TODO can be moved to any iteration before to optimize more
    sortedEvents = sortedEvents.map((event)=>{
        const offsetTop = // @ts-ignore
        (0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt, config.timezone).diff((0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt, config.timezone).set({
            hour: 0,
            minute: 0,
            second: 0
        }), 'minutes').toObject().minutes / (60 / config.hourHeight); // adjust based on hour column height
        const eventHeight = // @ts-ignore
        (0, $dp468.parseToDateTime)(event.endAt, event.timezoneStartAt).diff((0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt), 'minutes').toObject().minutes / (60 / config.hourHeight); // adjust based on hour column height
        return {
            event: event,
            offsetTop: offsetTop,
            eventHeight: eventHeight,
            itemLastCoordinate: offsetTop + eventHeight
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
    sortedEvents.forEach((item)=>{
        if (isFirst) {
            currentGroup.push(item);
            if (sortedEvents.length === 1) {
                layoutGroups.push(currentGroup);
                currentGroup = [];
            }
            groupFirstCoordinate = item.offsetTop;
            groupLastCoordinate = item.itemLastCoordinate;
            isFirst = false;
        } else {
            // check if next event is inside current group coordinates
            const isOverlapping = $bc9065eeafab43e7$var$checkOverlappingYCoordinates(item, groupFirstCoordinate, groupLastCoordinate);
            // add to group
            if (isOverlapping) {
                currentGroup.push(item);
                // TODO this should never occur because of sorting
                if (item.offsetTop > groupFirstCoordinate) groupFirstCoordinate = item.offsetTop;
                if (item.itemLastCoordinate > groupLastCoordinate) groupLastCoordinate = item.itemLastCoordinate;
            } else {
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
        if (currentGroup.length > 0) layoutGroups.push(currentGroup);
    }
    // now adjust layout for each event
    layoutGroups.forEach((groups)=>{
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
        groups.forEach((groupItem, index)=>{
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
                dateKey: dateKey,
                event: eventResult,
                height: groupItem.eventHeight < $bHm26.EVENT_MIN_HEIGHT ? $bHm26.EVENT_MIN_HEIGHT : groupItem.eventHeight,
                width: isFullWidth ? eventWidth - tableSpace : eventWidth,
                // some padding
                offsetLeft: offsetLeft > 0 ? offsetLeft - tableSpace : offsetLeft,
                offsetTop: groupItem.offsetTop,
                zIndex: 2 + index,
                meta: {
                    isFullWidth: eventWidth === 1,
                    showTime: eventWidth >= $bHm26.SHOW_TIME_THRESHOLD && groupItem.eventHeight >= $bHm26.SHOW_TIME_THRESHOLD,
                    centerText: groupItem.eventHeight <= $bHm26.SHOW_TIME_THRESHOLD
                }
            });
        });
    });
    return result;
};
const $bc9065eeafab43e7$var$calculateDaysViewLayout = (calendarDays, events, baseWidth, config, selectedView)=>{
    const result = {};
    calendarDays.forEach((calendarDay)=>{
        const formattedDayString = (0, $l4ibA.formatToDateKey)(calendarDay, config.timezone);
        const dayEvents = events[formattedDayString];
        const positions = $bc9065eeafab43e7$var$calculateNormalEventPositions(dayEvents, baseWidth, config, selectedView, formattedDayString);
        result[formattedDayString] = positions;
    });
    return result;
};
const $bc9065eeafab43e7$var$getDaysViewLayout = (events, calendarDays, config, width, selectedView, isMobile)=>{
    // add allDay flag to events
    const eventsParsed = (0, $DZadr.parseAllDayEventsArray)(events, config.timezone);
    // filter to header and normal events
    const headerEvents = {};
    const headerEventsTemp = [];
    const normalEvents = {};
    eventsParsed.forEach((event)=>{
        const { dateTimeStart: dateTimeStart, dateTimeEnd: dateTimeEnd } = (0, $58toD.getEventDateTime)(event, config);
        const key = (0, $l4ibA.formatToDateKey)(dateTimeStart, config.timezone);
        // need to store each occurrence
        const daySpawns = [];
        if (event.allDay) {
            headerEventsTemp.push(event);
            if (headerEvents[key]) headerEvents[key] = [
                ...headerEvents[key],
                event
            ];
            else headerEvents[key] = [
                event
            ];
        } else {
            // check if start and end on different days
            const isSameDay = $dp468.LuxonHelper.isSameDay(dateTimeStart, dateTimeEnd);
            // origin date to determine when event starts in each row
            let originDate = (0, $l4ibA.formatToDateKey)(dateTimeStart);
            // handle multi-day
            if (!isSameDay) for(let i = 0; i <= 1; i++){
                const refDate = dateTimeStart.plus({
                    days: i
                });
                originDate = (0, $l4ibA.formatToDateKey)(refDate);
                const dateKey = (0, $l4ibA.formatToDateKey)(refDate, config.timezone);
                // store each day in multi-day event range
                daySpawns.push(dateKey);
                const eventClone = Object.assign(Object.assign({}, event), {
                    originDate: originDate,
                    daysAfter: 1 - i,
                    original: {
                        startAt: event.startAt,
                        endAt: event.endAt
                    },
                    startAt: i === 1 ? (0, $dp468.parseToDateTime)(event.endAt, event.timezoneStartAt, config.timezone).set({
                        hour: 0,
                        minute: 0,
                        second: 0
                    }).toUTC().toString() : event.startAt,
                    endAt: i === 0 ? (0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt, config.timezone).set({
                        hour: 23,
                        minute: 59,
                        second: 59
                    }).toUTC().toString() : event.endAt
                });
                eventClone.daySpawns = daySpawns;
                if (!normalEvents[originDate]) normalEvents[originDate] = [
                    eventClone
                ];
                else normalEvents[originDate] = [
                    ...normalEvents[originDate],
                    eventClone
                ];
            }
            else if (normalEvents[key]) normalEvents[key] = [
                ...normalEvents[key],
                event
            ];
            else normalEvents[key] = [
                event
            ];
        }
    });
    const headerPositions = (0, $bx6fc.calculatePositionForHeaderEvents)(headerEventsTemp, (0, $58toD.getCorrectWidth)(width, isMobile || false, $jhaH7.CALENDAR_VIEW.WEEK), calendarDays, config, selectedView);
    // TODO filter header and normal events before
    const normalPositions = $bc9065eeafab43e7$var$calculateDaysViewLayout(calendarDays, normalEvents, (0, $58toD.getCorrectWidth)(width, isMobile || false, $jhaH7.CALENDAR_VIEW.WEEK), config, selectedView);
    return {
        normalPositions: normalPositions,
        headerPositions: headerPositions
    };
};
module.exports.getDaysViewLayout = $bc9065eeafab43e7$var$getDaysViewLayout;

});
parcelRegister("bx6fc", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.calculatePositionForHeaderEvents = void 0;

var $l4ibA = parcelRequire("l4ibA");

var $58toD = parcelRequire("58toD");

var $aY1FP = parcelRequire("aY1FP");

var $7tQs8 = parcelRequire("7tQs8");
const $86579eb7b1ced181$var$calculatePositionForHeaderEvents = (events, width, calendarDays, config, selectedView)=>{
    if (!events) return [
        []
    ];
    const breakPointDate = (0, $l4ibA.formatToDateKey)(calendarDays[calendarDays.length - 1], config.timezone);
    const preparedEvents = (0, $7tQs8.prepareMultiDayEvents)(events, config, breakPointDate, selectedView);
    const rowResult = (0, $aY1FP.getRowLayout)(preparedEvents, width / (0, $58toD.getDaysNum)(selectedView), calendarDays, config.timezone, 150, true);
    return rowResult;
};
module.exports.calculatePositionForHeaderEvents = $86579eb7b1ced181$var$calculatePositionForHeaderEvents;

});
parcelRegister("7tQs8", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getMonthViewLayout = module.exports.prepareMultiDayEvents = void 0;

var $jhaH7 = parcelRequire("jhaH7");

var $aY1FP = parcelRequire("aY1FP");

var $dp468 = parcelRequire("dp468");

var $l4ibA = parcelRequire("l4ibA");

var $58toD = parcelRequire("58toD");

var $j0Eyr = parcelRequire("j0Eyr");
const $5723edd8f4bcab6c$var$prepareMultiDayEvents = (events, config, breakPointDate, view)=>{
    const preparedEvents = {};
    events.forEach((event)=>{
        const { dateTimeStart: dateTimeStart, dateTimeEnd: dateTimeEnd } = (0, $58toD.getEventDateTime)(event, config);
        // check if is multi-day
        const isSameDay = $dp468.LuxonHelper.isSameDay(dateTimeStart, dateTimeEnd);
        // origin date to determine when event starts in each row
        let originDate = (0, $l4ibA.formatToDateKey)(dateTimeStart);
        // handle multi-day
        if (!isSameDay) {
            const diffInDays = $dp468.LuxonHelper.differenceInDays(dateTimeStart, dateTimeEnd);
            // need to store each occurrence
            let daySpawns = [];
            // flag if events continue in next row
            // split daySpawns and adjust originDate
            for(let i = 0; i <= diffInDays; i++){
                const refDate = dateTimeStart.plus({
                    days: i
                });
                const dateKey = (0, $l4ibA.formatToDateKey)(refDate, config.timezone);
                // store each day in multi-day event range
                daySpawns.push(dateKey);
                // break events spawned across multiple rows
                const dateOfWeek = refDate.weekday;
                const weekDayBreakPoint = config.weekDayStart === $jhaH7.WEEKDAY_START.MONDAY ? 7 : 1;
                if (dateOfWeek === weekDayBreakPoint || i === diffInDays || view === $jhaH7.CALENDAR_VIEW.DAY) {
                    const eventClone = Object.assign(Object.assign({}, event), {
                        originDate: originDate,
                        daysAfter: diffInDays - i
                    });
                    eventClone.daySpawns = daySpawns;
                    if (view === $jhaH7.CALENDAR_VIEW.DAY) {
                        if (!preparedEvents[dateKey]) preparedEvents[dateKey] = [
                            eventClone
                        ];
                        else preparedEvents[dateKey] = [
                            ...preparedEvents[dateKey],
                            eventClone
                        ];
                    } else if (!preparedEvents[originDate]) preparedEvents[originDate] = [
                        eventClone
                    ];
                    else preparedEvents[originDate] = [
                        ...preparedEvents[originDate],
                        eventClone
                    ];
                    daySpawns = [];
                }
                if ((breakPointDate && breakPointDate === dateKey || dateOfWeek === weekDayBreakPoint) && i < diffInDays) originDate = (0, $l4ibA.formatToDateKey)(refDate.plus({
                    days: 1
                }));
            }
        } else {
            // single day event
            const dateKey = (0, $l4ibA.formatToDateKey)((0, $dp468.parseToDateTime)(event.startAt, event.timezoneStartAt || config.timezone));
            event.originDate = originDate;
            if (!preparedEvents[dateKey]) preparedEvents[dateKey] = [
                event
            ];
            else preparedEvents[dateKey] = [
                ...preparedEvents[dateKey],
                event
            ];
        }
    });
    return preparedEvents;
};
module.exports.prepareMultiDayEvents = $5723edd8f4bcab6c$var$prepareMultiDayEvents;
const $5723edd8f4bcab6c$var$getMonthViewLayout = (events, width, calendarDays, config, maxEventsVisible, isHeaderEvents)=>{
    const result = [];
    // split calendar days to rows
    const calendarDaysRows = (0, $j0Eyr.getMonthRows)(calendarDays);
    // Group all events by date key
    // Clone multi-day events to all dates in its range (start from first
    // calendar day and end in last calendar day
    if (!events) return $aY1FP.DEFAULT_ROW_LAYOUT_RESULT;
    const preparedEvents = (0, module.exports.prepareMultiDayEvents)(events, config);
    // store max offset top to adjust height of header events parent element
    let headerOffsetTop = 0;
    let overflowingEvents = {};
    // get layout for each row
    calendarDaysRows.forEach((row)=>{
        const rowResult = (0, $aY1FP.getRowLayout)(preparedEvents, width / 7, row, config.timezone, maxEventsVisible, isHeaderEvents, overflowingEvents);
        // store only max value
        if (rowResult.headerOffsetTop > headerOffsetTop) headerOffsetTop = rowResult.headerOffsetTop;
        result.push(rowResult.positions);
        overflowingEvents = rowResult.overflowingEvents;
    });
    return {
        positions: result,
        overflowingEvents: overflowingEvents,
        headerOffsetTop: headerOffsetTop
    };
};
module.exports.getMonthViewLayout = $5723edd8f4bcab6c$var$getMonthViewLayout;

});
parcelRegister("j0Eyr", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getMonthRows = module.exports.getMaxEventsVisible = void 0;
/**
 * Get how many events can fit in one day column in month view
 * @param height
 */ const $dd6d79b338c87ef3$var$getMaxEventsVisible = (height)=>{
    const baseHeight = parseInt((height / 6 - 22).toString());
    // number of events
    const baseFit = (baseHeight - 15) / 17;
    // number of events with offset top
    const baseFitWithOffset = (baseHeight - 15) / (17 + baseFit);
    const result = parseInt(baseFitWithOffset.toString());
    return result;
};
module.exports.getMaxEventsVisible = $dd6d79b338c87ef3$var$getMaxEventsVisible;
/**
 * Get row of days in month view
 * @param calendarDays
 */ const $dd6d79b338c87ef3$var$getMonthRows = (calendarDays)=>{
    const calendarDaysRows = [];
    let tempArray = [];
    calendarDays.forEach((item, i)=>{
        const index = i + 1;
        if (index % 7 === 0) {
            tempArray.push(item); // TODO REMOVE
            calendarDaysRows.push(tempArray);
            tempArray = [];
        } else tempArray.push(item);
    });
    return calendarDaysRows;
};
module.exports.getMonthRows = $dd6d79b338c87ef3$var$getMonthRows;

});



parcelRegister("DZadr", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.parseAllDayEventsArray = module.exports.parseAllDayEvents = module.exports.parseAllDayEvent = void 0;

var $dp468 = parcelRequire("dp468");

var $l4ibA = parcelRequire("l4ibA");

var $58toD = parcelRequire("58toD");
const $0783167becaacacc$var$parseAllDayEvent = (event, timezone)=>{
    const { dateTimeStart: dateTimeStart, dateTimeEnd: dateTimeEnd } = (0, $58toD.getEventDateTime)(event, {
        timezone: timezone
    });
    return Object.assign(Object.assign({}, event), {
        allDay: event.allDay || $dp468.LuxonHelper.differenceInDays(dateTimeStart, dateTimeEnd) > 0
    });
};
module.exports.parseAllDayEvent = $0783167becaacacc$var$parseAllDayEvent;
const $0783167becaacacc$var$parseAllDayEvents = (events, timezone)=>{
    const result = {};
    if (!events) return {};
    Object.entries(events).forEach((keyValue)=>{
        const eventsItems = keyValue[1];
        eventsItems.forEach((item)=>{
            const dateKey = (0, $l4ibA.formatToDateKey)((0, $dp468.parseToDateTime)(item.startAt, item.timezoneStartAt || timezone));
            if (result[dateKey]) result[dateKey] = [
                ...result[dateKey],
                (0, module.exports.parseAllDayEvent)(item, timezone)
            ];
            else result[dateKey] = [
                (0, module.exports.parseAllDayEvent)(item, timezone)
            ];
        });
    });
    return result;
};
module.exports.parseAllDayEvents = $0783167becaacacc$var$parseAllDayEvents;
const $0783167becaacacc$var$parseAllDayEventsArray = (events, timezone)=>{
    const result = [];
    if (!events) return [];
    events.forEach((item)=>{
        result.push((0, module.exports.parseAllDayEvent)(item, timezone));
    });
    return result;
};
module.exports.parseAllDayEventsArray = $0783167becaacacc$var$parseAllDayEventsArray;

});


parcelRegister("br2ry", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateInput = void 0;
const $85341c8bf76d809a$var$validateInput = (data)=>{
    if (!Array.isArray(data === null || data === void 0 ? void 0 : data.events)) throw Error('Events must be array');
};
module.exports.validateInput = $85341c8bf76d809a$var$validateInput;

});



$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "CalendarView", function () { return $3f7b2fe5d2c34f8f$export$b573856c46cc9357; });
$parcel$export(module.exports, "default", function () { return $3f7b2fe5d2c34f8f$export$2e2bcd8739ae039; });



var $e4750b0ebeed8e48$export$ec9758e21af63072 = /*#__PURE__*/ function(CALENDAR_VIEW) {
    CALENDAR_VIEW["AGENDA"] = "agenda";
    CALENDAR_VIEW["WEEK"] = "week";
    CALENDAR_VIEW["DAY"] = "day";
    CALENDAR_VIEW["THREE_DAYS"] = "threeDays";
    CALENDAR_VIEW["MONTH"] = "month";
    return CALENDAR_VIEW;
}({});
var $e4750b0ebeed8e48$export$76a2e4c433c23bb9 = /*#__PURE__*/ function(EVENT_TYPE) {
    EVENT_TYPE["NORMAL"] = "normal";
    EVENT_TYPE["MONTH"] = "month";
    EVENT_TYPE["AGENDA"] = "agenda";
    EVENT_TYPE["HEADER"] = "header";
    EVENT_TYPE["SHOW_MORE_MONTH"] = "showMoreMonth";
    return EVENT_TYPE;
}({});
var $e4750b0ebeed8e48$export$c2bed76d77ee7287 = /*#__PURE__*/ function(CALENDAR_NAVIGATION_DIRECTION) {
    CALENDAR_NAVIGATION_DIRECTION["FORWARD"] = "forward";
    CALENDAR_NAVIGATION_DIRECTION["BACKWARDS"] = "backwards";
    CALENDAR_NAVIGATION_DIRECTION["TODAY"] = "today";
    return CALENDAR_NAVIGATION_DIRECTION;
}({});
var $e4750b0ebeed8e48$export$5a05f7ffc0500403 = /*#__PURE__*/ function(WEEKDAY_START) {
    WEEKDAY_START["MONDAY"] = "MONDAY";
    WEEKDAY_START["SUNDAY"] = "SUNDAY";
    WEEKDAY_START["UNKNOWN"] = "UNKNOWN";
    return WEEKDAY_START;
}({});
var $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8 = /*#__PURE__*/ function(TIME_FORMAT) {
    TIME_FORMAT["H_24"] = "12";
    TIME_FORMAT["H_12"] = "12";
    return TIME_FORMAT;
}({});




const $078907888c55a58c$var$getCalendarView = (value)=>{
    if (value.toLowerCase() === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY.toLowerCase()) return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY;
    if (value.toLowerCase() === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS.toLowerCase()) return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS;
    if (value.toLowerCase() === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK.toLowerCase()) return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK;
    if (value.toLowerCase() === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH.toLowerCase()) return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH;
    if (value.toLowerCase() === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA.toLowerCase()) return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA;
    return null;
};
const $078907888c55a58c$export$45855e0dd982478b = (props)=>{
    // Validate views
    if (props.disabledViews) {
        // throw error if all views are disabled
        if (props.disabledViews.length === Object.values((0, $e4750b0ebeed8e48$export$ec9758e21af63072)).length) throw Error('[Kalend]: At least one calendar view has to be enabled');
    }
    // validate initial view
    if (props.initialView) {
        const initialView = $078907888c55a58c$var$getCalendarView(props.initialView.toString());
        if (!initialView) throw Error(`[Kalend]: Initial view "${props.initialView}" is not valid`);
    }
    // validate weekDayStart
    if (props.weekDayStart && props.weekDayStart !== 'Monday' && props.weekDayStart !== 'Sunday') throw Error(`[Kalend]: invalid weekDayStart prop "${props.weekDayStart}". Set either Monday or Sunday`);
    // validate timeFormat
    if (props.timeFormat) {
        if (props.timeFormat !== (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24.toString() && props.timeFormat !== (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12.toString()) props.timeFormat, (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24.toString(), (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12.toString();
    }
};
const $078907888c55a58c$export$fbb8247b2e46a70a = (testMode)=>{
    if (testMode) return;
    const el = document.querySelector('.Kalend__Calendar__root');
    if (el) {
        if (window.getComputedStyle(el).display !== 'flex') throw Error(`[Kalend]: CSS file not imported.
         Reason: You probably forgot to import css file in your app as
         import 'kalend/dist/styles/index.css';

         Valid usage:
         import Kalend from 'kalend';
         import 'kalend/dist/styles/index.css';`);
    }
};













const $88a08af890f49243$export$eae15a231de23f4a = 25;
const $88a08af890f49243$export$fd6e3e2f92ae10fd = 1;
const $88a08af890f49243$export$c1af425794ec7f44 = 5;
const $88a08af890f49243$export$b4e2ba6756dec2c = 8;
const $88a08af890f49243$export$25973911efc96b71 = 40;
const $88a08af890f49243$export$447c5938f45c45a5 = 40;
const $88a08af890f49243$export$1c9a1263a0d343f4 = 40;
const $88a08af890f49243$export$81f0fddb54debad3 = 60;
const $88a08af890f49243$export$27633cf363057263 = 25;
const $88a08af890f49243$export$4b16cd32b50218c6 = 14;
const $88a08af890f49243$export$9a6bb2acef5e644a = 15;
const $88a08af890f49243$export$418e7590fd81e209 = [
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
];



/**
 * Calculate normal event positions for one day
 * @param daysNum
 * @param events
 * @param baseWidth
 * @param isDark
 * @param defaultTimezone
 */ 



/* tslint:disable:no-magic-numbers */ 





//
// Support for local datetime, timezones and floating times
//
const $28306200f69a6328$var$FLOATING_DATETIME = 'floating'; // fixed datetime without timezone
const $28306200f69a6328$var$UTC_TIMEZONE = 'UTC';
const $28306200f69a6328$export$64d4bb1347f411e8 = (date, zone, deviceTimezone)=>{
    const dateString = typeof date === 'string' ? date : date.toString();
    const isFloatingDatetime = zone === $28306200f69a6328$var$FLOATING_DATETIME;
    // Adjust date with timezone so when converted to UTC it represents correct value with fixed time
    if (isFloatingDatetime) {
        const dateFloating = (0, $cw6c3$luxon.DateTime).fromISO(dateString, {
            zone: $28306200f69a6328$var$UTC_TIMEZONE
        });
        return dateFloating.toUTC().toISO();
    }
    const thisDate = (0, $cw6c3$luxon.DateTime).fromISO(dateString);
    // Adjust datetime to device timezone
    if (deviceTimezone) {
        const dateConvert = thisDate.setZone(zone);
        return dateConvert.setZone(deviceTimezone).toString();
    }
    return thisDate.setZone(zone).toString();
};
const $28306200f69a6328$export$6c2618c4afcf6cfb = (date, zone, deviceTimezone)=>{
    const dateString = typeof date === 'string' ? date : date.toString();
    const isFloatingDatetime = zone === $28306200f69a6328$var$FLOATING_DATETIME;
    // Adjust date with timezone so when converted to UTC it represents correct value with fixed time
    if (isFloatingDatetime) {
        const dateFloating = (0, $cw6c3$luxon.DateTime).fromISO(dateString, {
            zone: $28306200f69a6328$var$UTC_TIMEZONE
        });
        return dateFloating.toUTC();
    }
    const thisDate = (0, $cw6c3$luxon.DateTime).fromISO(dateString);
    if (!zone) {
        // Adjust datetime to device timezone
        if (deviceTimezone) return thisDate.setZone(deviceTimezone);
        else return thisDate;
    }
    return thisDate.setZone(zone);
};


const $bf7b38bce41ca3dd$export$b7a9dbebc395fc65 = (className, isDark)=>{
    if (isDark) return `${className}-dark`;
    return className;
};
const $bf7b38bce41ca3dd$export$5f81845c2fa0b381 = (className, isMobile)=>{
    return isMobile ? `${className}-mobile` : className;
};
const $bf7b38bce41ca3dd$export$cf733e3bd5432c08 = (className, isMobile, isDark)=>{
    let classNameParsed = className;
    classNameParsed = isMobile ? `${classNameParsed}-mobile` : classNameParsed;
    classNameParsed = isDark ? `${classNameParsed}-dark` : classNameParsed;
    return classNameParsed;
};
const $bf7b38bce41ca3dd$export$f5a7c490b6f9fbc4 = (dateObj)=>dateObj.isValid ? dateObj.toFormat('dd-MM-yyyy') : (0, $cw6c3$luxon.DateTime).fromISO(dateObj).toFormat('dd-MM-yyyy');
const $bf7b38bce41ca3dd$export$6a8d31c8b7f17aa5 = (dateObj)=>dateObj.toFormat('dd-MM-yyyy');
const $bf7b38bce41ca3dd$export$76c69f043295405f = (calendarView, showWeekNumbers)=>{
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH && showWeekNumbers) return 30;
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS || calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY || calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK) return 0, $88a08af890f49243$export$447c5938f45c45a5;
    return 0;
};
const $bf7b38bce41ca3dd$export$4be7a748c9766cf9 = (array)=>array[0];
const $bf7b38bce41ca3dd$export$126fc096895fc6f5 = (array)=>array[array.length - 1];
const $bf7b38bce41ca3dd$export$3643189503061f69 = (date)=>date.set({
        hour: 0,
        minute: 0,
        second: 0
    }).toUTC().toString();
const $bf7b38bce41ca3dd$export$a7827c78319dafc9 = (date)=>date.set({
        hour: 23,
        minute: 59,
        second: 59
    }).toUTC().toString();
const $bf7b38bce41ca3dd$export$23783ea7bfe28abd = (item)=>{
    if (!item) return false;
    return(// @ts-ignore
    (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(item.endAt, item.timezoneStartAt).diff((0, $28306200f69a6328$export$6c2618c4afcf6cfb)(item.startAt, item.timezoneStartAt), 'days').toObject().days > 1);
};
const $bf7b38bce41ca3dd$export$205aaf06acb1c5fc = (calendarView, translations)=>{
    switch(calendarView){
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA:
            return translations['buttons']['agenda'];
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY:
            return translations['buttons']['day'];
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS:
            return translations['buttons']['threeDays'];
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK:
            return translations['buttons']['week'];
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH:
            return translations['buttons']['month'];
        default:
            return '';
    }
};
const $bf7b38bce41ca3dd$export$e3e4ea182aca355e = (calendarView)=>{
    switch(calendarView){
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA:
            return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY:
            return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS:
            return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK:
            return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH:
            return (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH;
        default:
            return '';
    }
};
const $bf7b38bce41ca3dd$export$6d0e4c4a8ffb9c2b = (events)=>{
    let result = [];
    if (!events) return result;
    Object.entries(events).forEach((keyValue)=>{
        const eventsItems = keyValue[1];
        result = [
            ...result,
            ...eventsItems
        ];
    });
    return result;
};
const $bf7b38bce41ca3dd$export$3d836550a1b0c60b = (events, timezone)=>{
    const result = {};
    events === null || events === void 0 ? void 0 : events.forEach((item)=>{
        const dateKey = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(item.startAt, item.timezoneStartAt || timezone).toFormat('dd-MM-yyyy');
        if (result[dateKey]) result[dateKey] = [
            ...result[dateKey],
            ...[
                item
            ]
        ];
        else result[dateKey] = [
            item
        ];
    });
    return result;
};
const $bf7b38bce41ca3dd$export$b32ccbc1ca23891 = (width, isMobile, selectedView)=>{
    if (selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK || selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY || selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS) {
        if (isMobile && ('ontouchstart' in window || window.navigator.maxTouchPoints)) return width;
        else return width - (0, $88a08af890f49243$export$9a6bb2acef5e644a);
    }
    return width;
};
const $bf7b38bce41ca3dd$export$d9b78e6f3f437c1f = (timeFormat)=>{
    const result = [];
    if (timeFormat === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24) {
        for(let i = 12; i < 24; i++)if (i < 10) result.push(`0${i}`);
        else result.push(String(i));
    } else if (timeFormat === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12) for(let i = 0; i < 24; i++){
        if (i < 12) result.push(`${i} AM`);
        else if (i === 12) result.push(`${i} PM`);
        else if (i === 24) result.push(`24 PM`);
        else result.push(`${i - 12} PM`);
    }
    return result;
};
const $bf7b38bce41ca3dd$export$7b553a398ff09de5 = (draggingDisabledConditions, event)=>{
    if (!draggingDisabledConditions) return true;
    let result = true;
    Object.entries(draggingDisabledConditions).forEach(([key, value])=>{
        if (event[key]) {
            if (event[key] === value) {
                result = false;
                return false;
            }
        }
    });
    return result;
};
const $bf7b38bce41ca3dd$export$a18c89cbd24170ff = (date)=>{
    if (!date) return false;
    const currentDate = (0, $cw6c3$luxon.DateTime).now();
    return date.month === currentDate.month && date.year === currentDate.year;
};



//
// Support for local datetime, timezones and floating times
//
const $d49542164c9bae14$var$FLOATING_DATETIME = 'floating'; // fixed datetime without timezone
const $d49542164c9bae14$var$UTC_TIMEZONE = 'UTC';
const $d49542164c9bae14$export$9e6a8e9ca52f6a3d = "yyyy-MM-dd HH:mm:ss 'Z'";
const $d49542164c9bae14$export$b7b5db2aa6555cc1 = 'd. MMM, HH:mm';
const $d49542164c9bae14$export$45c85543ba71221d = 'd. MMMM';
const $d49542164c9bae14$export$c4e1e4e065ff5bd8 = 'HH:mm';
const $d49542164c9bae14$export$2fd089738c9b03fb = 'd. MMMM (EEEEEE)';
const $d49542164c9bae14$export$4679370298bfc65 = 'cccc';
const $d49542164c9bae14$export$1be242b518527e80 = 'ccc';
const $d49542164c9bae14$export$884cf35d3975e8b9 = 'EEEEEE';
const $d49542164c9bae14$export$7c233a6f2ca6f19e = 'd. MMMM yyyy';
const $d49542164c9bae14$export$74b2237eca26435b = 'dd-MM-yyyy';
const $d49542164c9bae14$export$64d4bb1347f411e8 = (date, zone, deviceTimezone)=>{
    const dateString = typeof date === 'string' ? date : date.toString();
    const isFloatingDatetime = zone === $d49542164c9bae14$var$FLOATING_DATETIME;
    // Adjust date with timezone so when converted to UTC it represents correct value with fixed time
    if (isFloatingDatetime) {
        const dateFloating = (0, $cw6c3$luxon.DateTime).fromISO(dateString, {
            zone: $d49542164c9bae14$var$UTC_TIMEZONE
        });
        return dateFloating.toUTC().toISO();
    }
    const thisDate = (0, $cw6c3$luxon.DateTime).fromISO(dateString);
    // Adjust datetime to device timezone
    if (deviceTimezone) {
        const dateConvert = thisDate.setZone(zone);
        return dateConvert.setZone(deviceTimezone).toString();
    }
    return thisDate.setZone(zone).toString();
};
const $d49542164c9bae14$var$LuxonHelper = {
    parseToDateTime: (date)=>typeof date === 'string' ? (0, $cw6c3$luxon.DateTime).fromISO(date) : date,
    getLastDayOfMonth: (date)=>{
        const daysInMonth = date.daysInMonth;
        return date.set({
            day: daysInMonth
        });
    },
    getFirstDayOfMonth: (date)=>date.set({
            day: 1
        }),
    isSameDay: (dateA, dateB)=>{
        return dateA.year === dateB.year && dateA.month === dateB.month && dateA.day === dateB.day;
    },
    isBefore: (dateA, dateB)=>(0, $cw6c3$luxon.DateTime).fromISO(dateB).valueOf() - (0, $cw6c3$luxon.DateTime).fromISO(dateA).valueOf() > 0,
    isBeforeInDateTime: (dateA, dateB)=>dateB.valueOf() - dateA.valueOf() > 0,
    isBeforeAny: (dateA, dateB)=>{
        const dateADateTime = $d49542164c9bae14$var$LuxonHelper.parseToDateTime(dateA);
        const dateBDateTime = $d49542164c9bae14$var$LuxonHelper.parseToDateTime(dateB);
        return dateBDateTime.valueOf() - dateADateTime.valueOf() > 0;
    },
    isToday: (dateA)=>{
        const todayDate = (0, $cw6c3$luxon.DateTime).local();
        return dateA.day === todayDate.day && dateA.month === todayDate.month && dateA.year === todayDate.year;
    },
    isTodayOrInFuture: (dateA)=>{
        const todayDate = (0, $cw6c3$luxon.DateTime).local();
        return dateA.day >= todayDate.day && dateA.month >= todayDate.month && dateA.year >= todayDate.year;
    },
    parseToString: (date)=>{
        if (typeof date !== 'string') {
            if (date.isValid) return date.toUTC().toString();
        }
        return date.toString();
    },
    toUtcString: (date)=>(0, $cw6c3$luxon.DateTime).fromISO(date).toUTC().toISO(),
    toUtc: (date)=>date.toUTC().toISO(),
    setTimezone: (dateString, timezone)=>(0, $cw6c3$luxon.DateTime).fromISO(dateString).setZone(timezone).toString(),
    toHumanDate: (dateString)=>(0, $cw6c3$luxon.DateTime).fromISO(dateString).toFormat('d LLL yyyy hh:mm')
};
var $d49542164c9bae14$export$2e2bcd8739ae039 = $d49542164c9bae14$var$LuxonHelper;


const $1500da26cef85c66$var$ONE_DAY = 1;
const $1500da26cef85c66$var$THREE_DAYS = 3;
const $1500da26cef85c66$var$SEVEN_DAYS = 7;
const $1500da26cef85c66$export$b314e84a21bd4b5f = (stringDate)=>stringDate.slice(0, stringDate.indexOf('T'));
const $1500da26cef85c66$export$a6181a60b480c9a4 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
];
const $1500da26cef85c66$export$418e7590fd81e209 = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
];
const $1500da26cef85c66$export$b1af3e61661bd3b2 = {
    red: {
        dark: '#ef9a9a',
        light: '#e53935'
    },
    pink: {
        dark: '#f48fb1',
        light: '#d81b60'
    },
    purple: {
        dark: '#ce93d8',
        light: '#8e24aa'
    },
    'deep purple': {
        dark: '#b39ddb',
        light: '#5e35b1'
    },
    indigo: {
        dark: '#9fa8da',
        light: '#3949ab'
    },
    blue: {
        dark: '#90caf9',
        light: '#1e88e5'
    },
    'light blue': {
        dark: '#81d4fa',
        light: '#039be5'
    },
    cyan: {
        dark: '#80deea',
        light: '#00acc1'
    },
    teal: {
        dark: '#80cbc4',
        light: '#00897b'
    },
    green: {
        dark: '#a5d6a7',
        light: '#43a047'
    },
    'light green': {
        dark: '#c5e1a5',
        light: '#7cb342'
    },
    yellow: {
        dark: '#fff59d',
        light: '#fdd835'
    },
    amber: {
        dark: '#ffe082',
        light: '#ffb300'
    },
    orange: {
        dark: '#EA8709',
        light: '#EA8709'
    },
    'deep orange': {
        dark: '#ffab91',
        light: '#f4511e'
    },
    brown: {
        dark: '#bcaaa4',
        light: '#6d4c41'
    },
    'blue grey': {
        dark: '#b0bec5',
        light: '#546e7a'
    }
};
const $1500da26cef85c66$export$2d5ed1e6bc597003 = (colorString, isDark)=>$1500da26cef85c66$export$b1af3e61661bd3b2[colorString] ? $1500da26cef85c66$export$b1af3e61661bd3b2[colorString][isDark ? 'dark' : 'light'] : colorString;
const $1500da26cef85c66$export$933d53aed74a6ef0 = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
];
const $1500da26cef85c66$export$88e7cb308ec58e48 = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
const $1500da26cef85c66$export$737cca9a4f8febb7 = (date)=>{
    return date;
};
const $1500da26cef85c66$var$calculateMondayStartWeekDay = (date, calendarView)=>{
    const days = [];
    const dayInWeek = date.weekday;
    const startDate = date.minus({
        days: dayInWeek - 1
    });
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH) {
        if (dayInWeek === 1) {
            for(let i = 6; i > 0; i--)days.push(date.minus({
                days: i
            }));
            days.push(date);
        } else {
            days.push(startDate);
            for(let i = 1; i < 7; i++)days.push(startDate.plus({
                days: i
            }));
        }
    } else for(let i = 0; i < 7; i++)days.push(startDate.plus({
        days: i
    }));
    return days;
};
const $1500da26cef85c66$var$calculateSundayStartWeekDay = (date, calendarView)=>{
    const days = [];
    const dayInWeek = date.weekday;
    const startDate = dayInWeek === 7 ? date.plus({
        days: dayInWeek - 7
    }) : date.minus({
        days: dayInWeek
    });
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH) {
        if (dayInWeek === 7) {
            for(let i = 6; i > 0; i--)days.push(date.minus({
                days: i
            }));
            days.push(date);
        } else {
            days.push(startDate);
            for(let i = 1; i < 7; i++)days.push(startDate.plus({
                days: i
            }));
        }
    } else for(let i = 0; i < 7; i++)days.push(startDate.plus({
        days: i
    }));
    return days;
};
const $1500da26cef85c66$export$69ac73875782844e = (date, calendarView, weekDayStart, setSelectedDate)=>{
    // Set state
    if (setSelectedDate && calendarView !== (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH) setSelectedDate(date);
    if (weekDayStart === (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).MONDAY) return $1500da26cef85c66$var$calculateMondayStartWeekDay(date, calendarView);
    else return $1500da26cef85c66$var$calculateSundayStartWeekDay(date, calendarView);
};
const $1500da26cef85c66$export$b34cdd4783897766 = (date, setSelectedDate, isGoingForward)=>{
    const days = [];
    if (isGoingForward === null || isGoingForward === undefined) for(let i = 0; i <= 2; i++)days.push(date.plus({
        days: i
    }));
    else if (isGoingForward) for(let i = 1; i <= 3; i++)days.push(date.plus({
        days: i
    }));
    else for(let i = 3; i > 0; i--)days.push(date.minus({
        days: i
    }));
    // Set state
    if (setSelectedDate) setSelectedDate(days[1]);
    return days;
};
const $1500da26cef85c66$export$f16d393a3268e3f3 = (calendarView)=>{
    switch(calendarView){
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK:
            return $1500da26cef85c66$var$SEVEN_DAYS;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS:
            return $1500da26cef85c66$var$THREE_DAYS;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY:
            return $1500da26cef85c66$var$ONE_DAY;
        default:
            return $1500da26cef85c66$var$SEVEN_DAYS;
    }
};
const $1500da26cef85c66$var$getOneDay = (date, setSelectedDate)=>{
    const refDate = $1500da26cef85c66$export$737cca9a4f8febb7(date);
    // Set state
    if (setSelectedDate) setSelectedDate(refDate);
    return [
        refDate
    ];
};
const $1500da26cef85c66$export$f82b43a5dad4749 = (refDate)=>{
    const firstDayInMonth = (0, $d49542164c9bae14$export$2e2bcd8739ae039).getFirstDayOfMonth(refDate);
    const daysInMonth = refDate.daysInMonth;
    const monthDays = [];
    // Add missing days to month view
    for(let i = 0; i < daysInMonth; i += 1){
        const day = firstDayInMonth.plus({
            days: i
        });
        monthDays.push(day);
    }
    return monthDays;
};
const $1500da26cef85c66$export$be98daea68e5bd4 = (date, weekDayStart)=>{
    const FIVE_WEEKS_DAYS_COUNT = 36;
    // Get reference date for calculating new month
    // Get first week of current month
    const firstDayOfCurrentMonth = (0, $d49542164c9bae14$export$2e2bcd8739ae039).getFirstDayOfMonth(date);
    const firstWeekOfCurrentMonth = $1500da26cef85c66$export$69ac73875782844e(firstDayOfCurrentMonth, (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK, weekDayStart, undefined);
    const monthDays = firstWeekOfCurrentMonth;
    // Add missing days to month view
    for(let i = 1; i < FIVE_WEEKS_DAYS_COUNT; i += 1){
        const day = firstWeekOfCurrentMonth[6].plus({
            days: i
        });
        monthDays.push(day);
    }
    return monthDays;
};
const $1500da26cef85c66$export$4b1bd9c645c26ec4 = (date, setSelectedDate)=>{
    const monthDays = $1500da26cef85c66$export$f82b43a5dad4749(date);
    // Set state
    if (setSelectedDate) setSelectedDate(monthDays[15]);
    return monthDays;
};
const $1500da26cef85c66$export$214c174a056fc56f = (date, setSelectedDate, weekDayStart)=>{
    const monthDays = $1500da26cef85c66$export$be98daea68e5bd4(date, weekDayStart);
    // Set state
    if (setSelectedDate) setSelectedDate(monthDays[15]);
    return monthDays;
};
const $1500da26cef85c66$export$431753531f5fca31 = (item)=>typeof item === 'string' ? (0, $cw6c3$luxon.DateTime).fromISO(item) : item;
const $1500da26cef85c66$export$89694f4f8cea7fb = (item)=>typeof item === 'string' ? item : item.toString();
const $1500da26cef85c66$export$8abac2236d14a91f = (oldIndex, newIndex)=>oldIndex === 0 && newIndex === 1 || oldIndex === 1 && newIndex === 2 || oldIndex === 2 && newIndex === 0;
const $1500da26cef85c66$export$77c6031193b02723 = (calendarView)=>{
    switch(calendarView){
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH:
            return 15;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA:
            return 15;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK:
            return 2;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS:
            return 0;
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY:
            return 0;
        default:
            return 2;
    }
};
const $1500da26cef85c66$export$e75d169fad6edf5f = (calendarView, date, weekDayStart, setSelectedDate)=>{
    switch(calendarView){
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK:
            return $1500da26cef85c66$export$69ac73875782844e(date, calendarView, weekDayStart, setSelectedDate);
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS:
            return $1500da26cef85c66$export$b34cdd4783897766(date, setSelectedDate);
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY:
            return $1500da26cef85c66$var$getOneDay(date, setSelectedDate);
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH:
            return $1500da26cef85c66$export$214c174a056fc56f(date, setSelectedDate, weekDayStart);
        case (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA:
            return $1500da26cef85c66$export$4b1bd9c645c26ec4(date, setSelectedDate);
        default:
            return $1500da26cef85c66$export$69ac73875782844e(date, calendarView, setSelectedDate);
    }
};
const $1500da26cef85c66$var$getReferenceDate = (direction, calendarView, calendarDays)=>{
    if (direction === (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).TODAY) return (0, $cw6c3$luxon.DateTime).now();
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS) {
        if (direction === (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).FORWARD) return (0, $bf7b38bce41ca3dd$export$126fc096895fc6f5)(calendarDays).plus({
            days: 1
        });
        else return (0, $bf7b38bce41ca3dd$export$4be7a748c9766cf9)(calendarDays).minus({
            days: 3
        });
    }
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK || calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY) {
        if (direction === (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).FORWARD) return (0, $bf7b38bce41ca3dd$export$126fc096895fc6f5)(calendarDays).plus({
            days: 1
        });
        else return (0, $bf7b38bce41ca3dd$export$4be7a748c9766cf9)(calendarDays).minus({
            days: 1
        });
    }
    if (calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH || calendarView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA) {
        if (direction === (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).FORWARD) return calendarDays[15].plus({
            months: 1
        });
        else return calendarDays[15].minus({
            months: 1
        });
    }
    return (0, $cw6c3$luxon.DateTime).now();
};
const $1500da26cef85c66$export$20dc9138dd5b1a6a = (direction, calendarDays, calendarView, setSelectedDate, weekDayStart)=>{
    return $1500da26cef85c66$export$e75d169fad6edf5f(calendarView, $1500da26cef85c66$var$getReferenceDate(direction, calendarView, calendarDays), weekDayStart, setSelectedDate);
};
const $1500da26cef85c66$export$fef151b94550e9f5 = (calendarDays)=>{
    var _calendarDays_, _calendarDays__set, _calendarDays_1;
    return {
        rangeFrom: calendarDays === null || calendarDays === void 0 ? void 0 : (_calendarDays_ = calendarDays[0]) === null || _calendarDays_ === void 0 ? void 0 : _calendarDays_.set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }).toUTC().toString(),
        rangeTo: calendarDays === null || calendarDays === void 0 ? void 0 : (_calendarDays_1 = calendarDays[(calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays.length) - 1]) === null || _calendarDays_1 === void 0 ? void 0 : (_calendarDays__set = _calendarDays_1.set({
            hour: 23,
            minute: 59,
            second: 59,
            millisecond: 59
        })) === null || _calendarDays__set === void 0 ? void 0 : _calendarDays__set.toUTC().toString()
    };
};



const $585762b051d85803$export$c212dd23f1f0a1e3 = (eventA, eventB, timezone)=>{
    const startAtFirst = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(eventA.startAt, eventA.timezoneStartAt, timezone);
    const endAtFirst = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(eventA.endAt, eventA.timezoneStartAt, timezone);
    const startAtSecond = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(eventB.startAt, eventB.timezoneStartAt, timezone);
    const endAtSecond = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(eventB.endAt, eventB.timezoneStartAt, timezone);
    return (0, $cw6c3$luxon.Interval).fromDateTimes(startAtFirst, endAtFirst).overlaps((0, $cw6c3$luxon.Interval).fromDateTimes(startAtSecond, endAtSecond));
};
const $585762b051d85803$var$adjustForMinimalHeight = (eventA, eventB, hourHeight)=>{
    const result = {
        eventA: (0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, eventA),
        eventB: (0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, eventB)
    };
    const eventADiff = // @ts-ignore
    (0, $cw6c3$luxon.DateTime).fromISO(eventA.endAt).diff((0, $cw6c3$luxon.DateTime).fromISO(eventA.startAt)).toObject().minutes / (60 / hourHeight);
    const eventBDiff = // @ts-ignore
    (0, $cw6c3$luxon.DateTime).fromISO(eventB.endAt).diff((0, $cw6c3$luxon.DateTime).fromISO(eventB.startAt)).toObject().minutes / (60 / hourHeight);
    if (eventADiff < (0, $88a08af890f49243$export$eae15a231de23f4a)) result.eventA.endAt = (0, $cw6c3$luxon.DateTime).fromISO(result.eventA.endAt).plus({
        minutes: (0, $88a08af890f49243$export$eae15a231de23f4a) - eventADiff
    }).toString();
    if (eventBDiff < (0, $88a08af890f49243$export$eae15a231de23f4a)) result.eventB.endAt = (0, $cw6c3$luxon.DateTime).fromISO(result.eventB.endAt).plus({
        minutes: (0, $88a08af890f49243$export$eae15a231de23f4a) - eventBDiff
    }).toString();
    return result;
};
const $585762b051d85803$export$75fe04c694e7ab2e = (events, calendarIDsHidden)=>{
    if (!calendarIDsHidden || calendarIDsHidden.length === 0) return events;
    return events.filter((item)=>{
        if (item.calendarID) {
            if (calendarIDsHidden === null || calendarIDsHidden === void 0 ? void 0 : calendarIDsHidden.includes(item.calendarID)) return false;
            else return item;
        }
        return item;
    });
};
const $585762b051d85803$export$6a8cd07afb93412f = (events, baseWidth, config, selectedView, dateKey)=>{
    const result = [];
    let offsetCount = []; //Store every event id of overlapping items
    let offsetCountFinal; //Sort events by id number
    const tableWidth = baseWidth / (0, $1500da26cef85c66$export$f16d393a3268e3f3)(selectedView);
    const tableSpace = tableWidth / 100 * (0, $88a08af890f49243$export$b4e2ba6756dec2c);
    if (events) {
        const eventsData = events;
        // Filter all day events and multi day events
        eventsData.filter((item)=>!item.allDay).map((event)=>{
            let width = 1; //Full width
            let offsetLeft = 0;
            // Compare events
            eventsData.forEach((item2)=>{
                if (event.id !== item2.id && !item2.allDay) {
                    // adjust events to have at least minimal height to check
                    // overlapping
                    const { eventA: eventA, eventB: eventB } = $585762b051d85803$var$adjustForMinimalHeight(event, item2, config.hourHeight);
                    if ($585762b051d85803$export$c212dd23f1f0a1e3(eventA, eventB, config.timezone) && !eventB.allDay) {
                        width = width + 1; //add width for every overlapping item
                        offsetCount.push(item2.id); // set offset for positioning
                        offsetCount.push(event.id); // set offset for positioning
                    }
                }
            });
            const offsetTop = // @ts-ignore
            (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.startAt, event.timezoneStartAt, config.timezone).diff((0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.startAt, event.timezoneStartAt, config.timezone).set({
                hour: 0,
                minute: 0,
                second: 0
            }), 'minutes').toObject().minutes / (60 / config.hourHeight); // adjust based on hour column height
            const eventHeight = // @ts-ignore
            (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.endAt, event.timezoneStartAt).diff((0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.startAt, event.timezoneStartAt), 'minutes').toObject().minutes / (60 / config.hourHeight); // adjust based on hour column height
            const eventWidth = tableWidth / width;
            //sort items for proper calculations of offset by id
            // prevent different order in loop
            if (offsetCount.length > 0) offsetCountFinal = offsetCount.sort();
            if (offsetCountFinal) offsetLeft = eventWidth * offsetCountFinal.indexOf(event.id); //count offset
            //event.left
            // Current status: events is displayed in wrong place
            offsetCount = [];
            offsetCountFinal = '';
            result.push({
                dateKey: dateKey,
                event: event,
                height: eventHeight < (0, $88a08af890f49243$export$eae15a231de23f4a) ? (0, $88a08af890f49243$export$eae15a231de23f4a) : eventHeight,
                width: eventWidth,
                offsetLeft: offsetLeft,
                offsetTop: offsetTop,
                zIndex: 2,
                meta: {
                    isFullWidth: width === 1,
                    showTime: eventWidth >= (0, $88a08af890f49243$export$81f0fddb54debad3) && eventHeight >= (0, $88a08af890f49243$export$81f0fddb54debad3),
                    centerText: eventHeight <= (0, $88a08af890f49243$export$81f0fddb54debad3)
                }
            });
        });
    }
    const partialResult = result.map((item)=>{
        var _item_meta;
        // full event width
        if ((_item_meta = item.meta) === null || _item_meta === void 0 ? void 0 : _item_meta.isFullWidth) return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, item), {
            width: Math.round(item.width - tableSpace)
        });
        else if (item.offsetLeft > 0) return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, item), {
            width: Math.round(item.width),
            offsetLeft: item.offsetLeft - tableSpace,
            zIndex: item.zIndex ? item.zIndex + 2 : 2
        });
        else return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, item), {
            width: Math.round(item.width)
        });
    });
    return partialResult;
};
const $585762b051d85803$export$2edf4a4fedf73d36 = (calendarDays, events, baseWidth, config, selectedView)=>{
    const result = {};
    calendarDays.forEach((calendarDay)=>{
        const formattedDayString = calendarDay.toFormat('dd-MM-yyyy');
        const dayEvents = events[formattedDayString];
        const groupedPositions = {};
        const positions = $585762b051d85803$export$6a8cd07afb93412f(dayEvents, baseWidth, config, selectedView, formattedDayString);
        positions.forEach((item)=>{
            if (groupedPositions[item.event.id]) groupedPositions[item.event.id] = item;
            else groupedPositions[item.event.id] = item;
        });
        result[formattedDayString] = groupedPositions;
    });
    return result;
};
const $585762b051d85803$export$f917769c218c90fd = (event, day, timezone)=>{
    const dateStart = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.startAt, event.timezoneStartAt || timezone);
    const dateEnd = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.endAt, event.timezoneStartAt || timezone);
    const dayTruncated = (0, $1500da26cef85c66$export$431753531f5fca31)(day).set({
        hour: 0,
        minute: 0,
        millisecond: 0,
        second: 0
    }).toMillis();
    const eventStartTruncated = dateStart.set({
        hour: 0,
        minute: 0,
        millisecond: 0,
        second: 0
    }).toMillis();
    const eventEndTruncated = dateEnd.set({
        hour: 0,
        minute: 0,
        millisecond: 0,
        second: 0
    }).toMillis();
    // fix wrong positioning when external all day event ends in next day
    if (event.externalID) return dayTruncated >= eventStartTruncated && dayTruncated < eventEndTruncated;
    else return dayTruncated >= eventStartTruncated && dayTruncated <= eventEndTruncated;
};
const $585762b051d85803$export$3a6eb9efca632dee = (event, days, timezone)=>{
    let hasMatch = false;
    for (const day of days)if ($585762b051d85803$export$f917769c218c90fd(event, day, timezone)) {
        hasMatch = true;
        return true;
    // return false;
    }
    return hasMatch;
};



// eslint-disable-next-line @typescript-eslint/no-empty-function
const $3886b97a1526edd3$var$emptyFunction = ()=>{};
const $3886b97a1526edd3$var$parseTimeFormat = (timeFormatValue)=>{
    if (timeFormatValue) {
        if (timeFormatValue.toLowerCase() === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24.toString().toLowerCase()) return (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24;
        else if (timeFormatValue.toLowerCase() === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12.toString().toLowerCase()) return (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12;
    }
};
const $3886b97a1526edd3$var$parseWeekDayStart = (weekDayStartValue)=>{
    if (weekDayStartValue) {
        if (weekDayStartValue.toLowerCase() === (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).MONDAY.toLowerCase()) return (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).MONDAY;
        else if (weekDayStartValue.toLowerCase() === (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).SUNDAY.toLowerCase()) return (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).SUNDAY;
    }
};
const $3886b97a1526edd3$var$parseHourHeight = (hourHeightOrigin)=>{
    const remainder = hourHeightOrigin % 4;
    if (remainder === 0) return hourHeightOrigin;
    const result = hourHeightOrigin - remainder;
    return result >= 10 ? result : (0, $88a08af890f49243$export$1c9a1263a0d343f4);
};
const $3886b97a1526edd3$export$45a69314cf48a3eb = (props)=>{
    return {
        hourHeight: props.hourHeight ? $3886b97a1526edd3$var$parseHourHeight(props.hourHeight) : (0, $88a08af890f49243$export$1c9a1263a0d343f4),
        timeFormat: $3886b97a1526edd3$var$parseTimeFormat(props.timeFormat) || (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24,
        timezone: props.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        weekDayStart: $3886b97a1526edd3$var$parseWeekDayStart(props.weekDayStart) || (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).MONDAY,
        isDark: props.isDark || false,
        disableMobileDropdown: props.disableMobileDropdown || false,
        disabledViews: props.disabledViews,
        calendarIDsHidden: props.calendarIDsHidden || null,
        hasExternalLayout: props.eventLayouts !== undefined,
        focusHour: props.focusHour || null,
        showTimeLine: props.showTimeLine || false,
        autoScroll: props.autoScroll || false,
        disabledDragging: props.disabledDragging || false
    };
};
const $3886b97a1526edd3$export$96e2a2f386b0b376 = (props)=>{
    return {
        onEventDragFinish: props.onEventDragFinish || undefined,
        onPageChange: props.onPageChange || undefined,
        onSelectView: props.onSelectView || undefined,
        onEventClick: props.onEventClick || $3886b97a1526edd3$var$emptyFunction,
        onNewEventClick: props.onNewEventClick || $3886b97a1526edd3$var$emptyFunction,
        showMoreMonth: props.showMoreMonth || $3886b97a1526edd3$var$emptyFunction,
        onStateChange: props.onStateChange || undefined
    };
};
const $3886b97a1526edd3$var$ConfigLayer = (props)=>{
    var _props_calendarIDsHidden;
    const [isReady, setIsReady] = (0, $cw6c3$react.useState)(false);
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const initFromProps = ()=>{
        const config = $3886b97a1526edd3$export$45a69314cf48a3eb(props);
        const callbacks = $3886b97a1526edd3$export$96e2a2f386b0b376(props);
        setContext('config', config);
        if (props.colors) setContext('colors', props.colors);
        setContext('callbacks', callbacks);
        setContext('isDark', props.isDark || false);
        setContext('selectedView', props.selectedView || props.initialView || (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK);
        setContext('selectedDate', props.initialDate ? (0, $cw6c3$luxon.DateTime).fromISO(props.initialDate) : (0, $cw6c3$luxon.DateTime).now());
        setContext('isNewEventOpen', true);
        if (props.style) setContext('style', props.style);
        setContext('showWeekNumbers', props.showWeekNumbers || false);
        if (props.draggingDisabledConditions) setContext('draggingDisabledConditions', props.draggingDisabledConditions);
        setIsReady(true);
    };
    (0, $cw6c3$react.useEffect)(()=>{
        initFromProps();
        setIsReady(true);
    }, []);
    (0, $cw6c3$react.useEffect)(()=>{
        setContext('isNewEventOpen', props.isNewEventOpen);
    }, [
        props.isNewEventOpen
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        initFromProps();
    }, [
        props.timeFormat,
        props.timezone,
        props.showWeekNumbers,
        // props.disabledViews, // keeps re-rendering without any change
        props.isDark,
        props.disableMobileDropdown
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        const newConfig = (0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, store.config);
        if (props.hourHeight) newConfig.hourHeight = $3886b97a1526edd3$var$parseHourHeight(props.hourHeight);
        setContext('config', newConfig);
    }, [
        props.hourHeight
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        const eventsFiltered = (0, $585762b051d85803$export$75fe04c694e7ab2e)(props.events, props.calendarIDsHidden);
        setContext('events', eventsFiltered);
    }, [
        JSON.stringify(props.calendarIDsHidden),
        (_props_calendarIDsHidden = props.calendarIDsHidden) === null || _props_calendarIDsHidden === void 0 ? void 0 : _props_calendarIDsHidden.length
    ]);
    return isReady ? props.children : null;
};
var $3886b97a1526edd3$export$2e2bcd8739ae039 = $3886b97a1526edd3$var$ConfigLayer;



// tslint:disable-next-line:cyclomatic-complexity


const $e7acfb653c6fbfca$var$Reducer = (state, action)=>{
    switch(action.type){
        case 'initialView':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                initialView: action.payload
            });
        case 'selectedView':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                selectedView: action.payload
            });
        case 'draggingDisabledConditions':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                draggingDisabledConditions: action.payload
            });
        case 'isMobile':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                isMobile: action.payload
            });
        case 'isDark':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                isDark: action.payload
            });
        case 'isNewEventOpen':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                isNewEventOpen: action.payload
            });
        case 'showWeekNumbers':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                showWeekNumbers: action.payload
            });
        case 'translations':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                translations: action.payload
            });
        case 'style':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                style: action.payload
            });
        case 'direction':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                direction: action.payload
            });
        case 'daysViewLayout':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                daysViewLayout: action.payload
            });
        case 'config':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                config: action.payload
            });
        case 'colors':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                colors: action.payload
            });
        case 'headerLayout':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                headerLayout: action.payload
            });
        case 'monthLayout':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                monthLayout: action.payload
            });
        case 'monthOverflowEvents':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                monthOverflowEvents: action.payload
            });
        case 'showMoreEvents':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                showMoreEvents: action.payload
            });
        case 'layoutUpdateSequence':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                layoutUpdateSequence: action.payload
            });
        case 'events':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                events: action.payload
            });
        case 'selectedDate':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                selectedDate: action.payload
            });
        case 'calendarDays':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                calendarDays: action.payload
            });
        case 'isLoading':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                isLoading: action.payload
            });
        case 'rawWidth':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                rawWidth: action.payload
            });
        case 'width':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                width: action.payload
            });
        case 'height':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                height: action.payload
            });
        case 'callbacks':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                callbacks: action.payload
            });
        case 'headerEventRowsCount':
            return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
                headerEventRowsCount: action.payload
            });
        default:
            return state;
    }
};
var $e7acfb653c6fbfca$export$2e2bcd8739ae039 = $e7acfb653c6fbfca$var$Reducer;


var $073ad6afefbd1c74$exports = {};
$073ad6afefbd1c74$exports = JSON.parse("{\"buttons\":{\"today\":\"Today\",\"agenda\":\"Agenda\",\"day\":\"Day\",\"threeDays\":\"3 Days\",\"week\":\"Week\",\"month\":\"Month\",\"showMore\":\"More\"},\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"weekDays\":{\"Mon\":\"Mon\",\"Tue\":\"Tue\",\"Wed\":\"Wed\",\"Thu\":\"Thu\",\"Fri\":\"Fri\",\"Sat\":\"Sat\",\"Sun\":\"Sun\"},\"weekShort\":\"W\"}");


const $65553fbba1d6d65b$export$841858b892ce1f4c = /*#__PURE__*/ (0, $cw6c3$react.createContext)({});
const $65553fbba1d6d65b$var$StoreProvider = (_param)=>{
    var { children: children } = _param, props = (0, $cw6c3$swchelperscjs_object_without_propertiescjs._)(_param, [
        "children"
    ]);
    const initialContext = {
        isLoading: false,
        headerEventRowsCount: 0,
        initialView: null,
        selectedView: null,
        selectedDate: (0, $cw6c3$luxon.DateTime).now(),
        calendarDays: [],
        width: 0,
        rawWidth: 0,
        height: 0,
        isMobile: false,
        events: {},
        daysViewLayout: null,
        headerLayout: null,
        monthLayout: null,
        monthOverflowEvents: null,
        showMoreEvents: null,
        showWeekNumbers: false,
        layoutUpdateSequence: 1,
        config: (0, $3886b97a1526edd3$export$45a69314cf48a3eb)(props),
        callbacks: (0, $3886b97a1526edd3$export$96e2a2f386b0b376)({}),
        direction: (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).TODAY,
        translations: (0, (/*@__PURE__*/$parcel$interopDefault($073ad6afefbd1c74$exports))),
        isNewEventOpen: false,
        draggingDisabledConditions: null,
        isDark: false,
        style: {
            primaryColor: '#ec407a',
            baseColor: '#424242FF',
            inverseBaseColor: '#E5E5E5FF'
        },
        colors: {
            light: {
                primaryColor: '#ec407a'
            },
            dark: {
                primaryColor: '#f48fb1'
            }
        }
    };
    const [store, dispatch] = (0, $cw6c3$react.useReducer)((0, $e7acfb653c6fbfca$export$2e2bcd8739ae039), initialContext);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)($65553fbba1d6d65b$export$841858b892ce1f4c.Provider, {
        value: [
            store,
            dispatch
        ],
        children: children
    });
};
var $65553fbba1d6d65b$export$2e2bcd8739ae039 = $65553fbba1d6d65b$var$StoreProvider;
























const $ecf585202d453fcb$var$DateWeekDay = (props)=>{
    const { width: width, day: day } = props;
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { selectedView: selectedView, callbacks: callbacks } = store;
    const isDayToday = (0, $d49542164c9bae14$export$2e2bcd8739ae039).isToday(day);
    const isMonthView = selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH;
    const isAgendaView = selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA;
    const isInPast = isMonthView && !day.hasSame((0, $cw6c3$luxon.DateTime).now(), 'month');
    const navigateToDay = (e)=>{
        if (props.setViewChanged) {
            e.preventDefault();
            e.stopPropagation();
            props.setViewChanged((0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY);
            setContext('selectedDate', day);
            setContext('calendarDays', [
                day
            ]);
        }
    };
    const handleNewEventClick = (event)=>{
        if (callbacks.onNewEventClick) callbacks.onNewEventClick({
            day: day.toJSDate(),
            hour: day.toUTC().hour,
            startAt: day === null || day === void 0 ? void 0 : day.setZone(store.config.timezone).startOf('day').toUTC().toString(),
            endAt: day === null || day === void 0 ? void 0 : day.setZone(store.config.timezone).endOf('day').toUTC().toString(),
            event: event,
            view: selectedView
        }, event);
    };
    const getBackgroundColor = ()=>{
        if (!store.isDark) {
            if (isDayToday) return store.colors.light.primaryColor;
        } else {
            if (isDayToday) return store.colors.dark.primaryColor;
        }
    };
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__CalendarHeaderDates__col',
        style: {
            width: width
        },
        onClick: handleNewEventClick,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
            className: `${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__CalendarHeaderDates__circle${isMonthView ? '-small' : ''}`, store.isDark)} ${isDayToday ? 'Kalend__CalendarHeaderDates__primary' : ''} ${isAgendaView ? isDayToday ? 'Kalend__CalendarHeaderDates__agenda-primary' : 'Kalend__CalendarHeaderDates__agenda' : ''}`,
            onClick: navigateToDay,
            style: {
                backgroundColor: getBackgroundColor(),
                cursor: props.setViewChanged ? 'pointer' : 'normal'
            },
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                className: `Kalend__text Kalend__CalendarHeaderDates__text ${selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH ? 'Kalend__CalendarHeaderDates__text-size-small' : ''} ${isDayToday ? (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__color-text-base', !store.isDark) : (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__color-text-base${isInPast ? '-grayed' : ''}`, store.isDark)}`,
                children: day.day
            })
        })
    });
};
var $ecf585202d453fcb$export$2e2bcd8739ae039 = $ecf585202d453fcb$var$DateWeekDay;






const $0689dc746d054cae$var$DayOfWeekText = (props)=>{
    const { width: width, day: day } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { translations: translations } = store;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__CalendarHeaderWeekDays__col',
        style: {
            width: width
        },
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__text Kalend__CalendarHeaderWeekDays__text', store.isDark),
            children: translations['weekDays'][`${day.toFormat('EEE')}`]
        })
    });
};
var $0689dc746d054cae$export$2e2bcd8739ae039 = $0689dc746d054cae$var$DayOfWeekText;











var $bHm26 = parcelRequire("bHm26");




const $df4cda54b7466b02$export$ff41551cf384acef = (calendarDays, event, xShiftIndexRef)=>{
    const originalStartAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.startAt);
    const originalEndAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.endAt);
    const newDay = calendarDays.map((calendarDay)=>calendarDay)[xShiftIndexRef.current];
    const diffInMinutes = originalEndAtDateTime.diff(originalStartAtDateTime, 'minutes').toObject().minutes;
    const newStartAt = originalStartAtDateTime.set({
        year: newDay.year,
        day: newDay.day,
        month: newDay.month,
        hour: originalStartAtDateTime.hour,
        minute: originalStartAtDateTime.minute
    });
    // set correct endAt
    const newEndAt = newStartAt.plus({
        minutes: diffInMinutes
    });
    return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, event), {
        startAt: newStartAt.toUTC().toString(),
        endAt: newEndAt.toUTC().toString()
    });
};
const $df4cda54b7466b02$export$1fc19a5181516448 = (e, columnWidth, width, xShiftIndexRef, offsetLeftRef, eventWasChangedRef, setState)=>{
    var _e_nativeEvent_touches, _e_nativeEvent;
    const tableElement = document.querySelector('.Kalend__Calendar__table');
    const tableElementRect = tableElement.getBoundingClientRect();
    const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
    // set basic coordinates from movement
    let x;
    // handle touch movement
    if (touches) x = touches.clientX - tableElementRect.x;
    else // calculate x coordinates while following mouse move
    x = e.clientX - tableElementRect.x - (0, $88a08af890f49243$export$447c5938f45c45a5);
    // prevent free dragging across columns with simple recalculation for
    const columnShift = Math.floor(x / columnWidth);
    const xTable = e.clientX - tableElementRect.x; //- CALENDAR_OFFSET_LEFT;
    const columnShiftTable = Math.round(xTable / columnWidth);
    if (columnShiftTable * columnWidth >= width || xTable < 0 || xTable < columnWidth / 2) return;
    // prevent event overflowing on last day
    // TODO reset back after moving left again
    xShiftIndexRef.current = columnShift;
    setState('offsetLeft', columnShift * columnWidth + 1); // add 1 because 0
    // was not working
    eventWasChangedRef.current = true;
    offsetLeftRef.current = x;
};





const $e5a736e77c82a8d5$export$dd76bfaf05a6a47a = (calendarDays, yShiftIndexRef, xShiftIndexRef, event)=>{
    // get new date from x, y coordinates
    // split calendarDays by rows
    const rowCalendarDays = [];
    let tempArray = [];
    calendarDays.forEach((calendarDay)=>{
        if (tempArray.length === 7 || rowCalendarDays.length === 5 && tempArray.length === 6) {
            tempArray.push(calendarDay);
            rowCalendarDays.push(tempArray);
            tempArray = [];
        }
        tempArray.push(calendarDay);
    });
    // get correct row by y coordinate
    const matchingRow = rowCalendarDays[yShiftIndexRef.current];
    // get day by x coordinate
    const matchingDay = matchingRow[xShiftIndexRef.current];
    const originalStartAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.startAt);
    const originalEndAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.endAt);
    const diffInMinutes = originalEndAtDateTime.diff(originalStartAtDateTime, 'minutes').toObject().minutes;
    const newStartAt = originalStartAtDateTime.set({
        year: matchingDay.year,
        day: matchingDay.day,
        month: matchingDay.month,
        hour: originalStartAtDateTime.hour,
        minute: originalStartAtDateTime.minute
    });
    // set correct endAt
    const newEndAt = newStartAt.plus({
        minutes: diffInMinutes
    });
    return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, event), {
        startAt: newStartAt.toUTC().toString(),
        endAt: newEndAt.toUTC().toString()
    });
};
const $e5a736e77c82a8d5$export$dc270e2350d64c2 = (e, height, draggingRef, day, columnWidth, width, xShiftIndexRef, yShiftIndexRef, eventWasChangedRef, offsetLeftRef, offsetTopRef, setState, index)=>{
    var _e_nativeEvent_touches, _e_nativeEvent;
    const columnHeight = height / 6;
    if (!draggingRef.current) return;
    if (!day) return;
    const tableElement = document.querySelector('.Kalend__Calendar__table');
    const tableElementRect = tableElement.getBoundingClientRect();
    const xTable = e.clientX - tableElementRect.x;
    const yTable = e.clientY - tableElementRect.y;
    // Get column element for day, where event is placed
    const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
    // set basic coordinates from movement
    let x;
    let y;
    // handle touch movement
    if (touches) {
        x = touches.clientX - tableElementRect.x;
        y = touches.clientY - tableElementRect.y;
    } else {
        // calculate x coordinates while following mouse move
        x = e.clientX - tableElementRect.x;
        y = e.clientY - tableElementRect.y;
    }
    const yReal = yTable - index * columnHeight;
    // prevent free dragging across columns with simple recalculation for
    const columnShiftX = Math.floor(x / columnWidth);
    const columnShiftY = Math.floor(yReal / columnHeight);
    const columnShiftXParsed = parseInt((xTable / columnWidth).toString());
    const columnShiftYParsed = parseInt((yTable / columnHeight).toString());
    const columnShiftTableX = Math.round(xTable / columnWidth);
    if (columnShiftTableX * columnWidth >= width || xTable < 0 || columnShiftY * columnHeight >= height || yTable < 0 || y >= height) return;
    xShiftIndexRef.current = columnShiftXParsed;
    yShiftIndexRef.current = columnShiftYParsed;
    setState('offsetLeft', columnShiftX * columnWidth + 1);
    setState('offsetTop', columnShiftY * columnHeight);
    eventWasChangedRef.current = true;
    offsetLeftRef.current = x;
    offsetTopRef.current = y;
};





const $082d0c87d15d5b42$export$a53075e16597084a = (calendarDays, yShiftIndexRef, xShiftIndexRef, event)=>{
    // get new date from x, y coordinates
    // split calendarDays by rows
    const rowCalendarDays = [];
    let tempArray = [];
    calendarDays.forEach((calendarDay)=>{
        if (tempArray.length === 7 || rowCalendarDays.length === 5 && tempArray.length === 6) {
            tempArray.push(calendarDay);
            rowCalendarDays.push(tempArray);
            tempArray = [];
        }
        tempArray.push(calendarDay);
    });
    // get correct row by y coordinate
    const matchingRow = rowCalendarDays[yShiftIndexRef.current];
    // get day by x coordinate
    const matchingDay = matchingRow[xShiftIndexRef.current];
    const originalStartAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.startAt);
    const originalEndAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.endAt);
    const diffInMinutes = originalEndAtDateTime.diff(originalStartAtDateTime, 'minutes').toObject().minutes;
    const newStartAt = originalStartAtDateTime.set({
        year: matchingDay.year,
        day: matchingDay.day,
        month: matchingDay.month,
        hour: originalStartAtDateTime.hour,
        minute: originalStartAtDateTime.minute
    });
    // set correct endAt
    const newEndAt = newStartAt.plus({
        minutes: diffInMinutes
    });
    return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, event), {
        startAt: newStartAt.toUTC().toString(),
        endAt: newEndAt.toUTC().toString()
    });
};
const $082d0c87d15d5b42$export$286c3aed0632f6fd = (e, height, draggingRef, day, width, xShiftIndexRef, yShiftIndexRef, eventWasChangedRef, offsetLeftRef, offsetTopRef, setState)=>{
    var _e_nativeEvent_touches, _e_nativeEvent;
    const columnHeight = height / 6;
    if (!draggingRef.current) return;
    if (!day) return;
    const tableElement = document.querySelector('.Kalend__Calendar__table');
    const tableElementRect = tableElement.getBoundingClientRect();
    const columnWidth = tableElementRect.width / 7;
    const xTable = e.clientX - tableElementRect.x;
    const yTable = e.clientY - tableElementRect.y;
    // Get column element for day, where event is placed
    const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
    // set basic coordinates from movement
    let x;
    let y;
    // handle touch movement
    if (touches) {
        x = touches.clientX - tableElementRect.x;
        y = touches.clientY - tableElementRect.y;
    } else {
        // calculate x coordinates while following mouse move
        x = e.clientX; // - tableElementRect.x +
        y = e.clientY; //- tableElementRect.y + tableElementRect.left;
    }
    const columnShiftXParsed = parseInt((xTable / columnWidth).toString());
    const columnShiftYParsed = parseInt((yTable / columnHeight).toString());
    setState('width', tableElementRect.width / 7);
    // restrict dragging outside main table
    if (y <= tableElementRect.top || y > tableElementRect.top + tableElementRect.height || x <= tableElementRect.left || x > tableElementRect.width + tableElementRect.left) return;
    xShiftIndexRef.current = columnShiftXParsed;
    yShiftIndexRef.current = columnShiftYParsed;
    setState('offsetLeft', x);
    setState('offsetTop', y);
    eventWasChangedRef.current = true;
    offsetLeftRef.current = x;
    offsetTopRef.current = y;
};













const $79dca703cc699b4f$export$38477230a29207e3 = ()=>{
    return {
        offsetLeft: 0,
        offsetTop: 0,
        width: '90%',
        height: (0, $88a08af890f49243$export$4b16cd32b50218c6),
        zIndex: 1,
        border: 'none',
        meta: {
            showTime: false,
            isFullWidth: true,
            centerText: true
        }
    };
};
const $79dca703cc699b4f$export$2b35b885b699e674 = {
    dragging: false,
    initialTop: 0,
    initialLeft: 0,
    offsetTop: null,
    offsetLeft: null,
    xPosition: 0,
    eventHasChanged: false,
    width: null,
    height: null,
    zIndex: 2,
    border: '',
    meta: {},
    isDragging: false,
    endAt: undefined
};
const $79dca703cc699b4f$export$633076c346814fbe = (type, day, event, store, setLayout, index)=>{
    const { daysViewLayout: daysViewLayout, headerLayout: headerLayout, monthLayout: monthLayout } = store;
    if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL && day) {
        var _daysViewLayout_formattedDayString;
        const formattedDayString = (0, $bf7b38bce41ca3dd$export$6a8d31c8b7f17aa5)(day);
        const eventLayoutValue = (_daysViewLayout_formattedDayString = daysViewLayout[formattedDayString]) === null || _daysViewLayout_formattedDayString === void 0 ? void 0 : _daysViewLayout_formattedDayString[event.id];
        if (eventLayoutValue) setLayout(eventLayoutValue);
    } else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).HEADER) {
        if (store.headerLayout) {
            const headerLayoutValue = headerLayout[event.id];
            if (headerLayoutValue) setLayout(headerLayoutValue);
        }
    } else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).MONTH) {
        if (store.monthLayout && index !== undefined) {
            var _monthLayout_index;
            const monthLayoutValue = monthLayout === null || monthLayout === void 0 ? void 0 : (_monthLayout_index = monthLayout[index]) === null || _monthLayout_index === void 0 ? void 0 : _monthLayout_index[event.id];
            if (monthLayoutValue) setLayout(monthLayoutValue);
        }
    } else setLayout($79dca703cc699b4f$export$38477230a29207e3());
};
const $79dca703cc699b4f$export$6da1c85d7de31b61 = (e)=>{
    var _e_nativeEvent_touches, _e_nativeEvent;
    const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
    return !!touches;
};










const $1a47dae3ce368d80$var$CurrentHourLine = ()=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { config: config, colors: colors } = store;
    const currentTime = (0, $cw6c3$luxon.DateTime).now();
    const wrapperStyle = {
        top: currentTime.hour >= 12 ? currentTime.hour * config.hourHeight + currentTime.minute / 60 * config.hourHeight - 864 : 0
    };
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        style: wrapperStyle,
        className: 'Kalend__CurrentHourLine',
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__CurrentHourLine__circle', store.isDark),
                style: {
                    background: store.isDark ? colors.dark.primaryColor : colors.light.primaryColor
                }
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    background: store.isDark ? colors.dark.primaryColor : colors.light.primaryColor
                },
                className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__CurrentHourLine__line', store.isDark)
            })
        ]
    });
};
var $1a47dae3ce368d80$export$2e2bcd8739ae039 = $1a47dae3ce368d80$var$CurrentHourLine;




const $17d79b7922eec8b8$var$renderEvents = (dataset, day)=>{
    return dataset.map((eventRaw)=>{
        const item = eventRaw.event;
        return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b852c5f3008abacb$export$2e2bcd8739ae039), {
            item: eventRaw,
            type: (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL,
            meta: item.meta,
            day: day
        }, `${item.id}${item.internalID ? item.internalID : ''}`);
    });
};
const $17d79b7922eec8b8$export$5c851bc642d7e5b8 = 4;
const $17d79b7922eec8b8$export$4f0cc7427b5c4255 = (value, day, config)=>{
    let stringValue = String(value);
    stringValue = stringValue.includes('.') ? stringValue : `${stringValue}.0`;
    const [hourStart, minuteStart] = stringValue.split('.');
    return day.set({
        hour: Number(hourStart),
        minute: Number(`0.${minuteStart}`) * 60,
        second: 0,
        millisecond: 0
    }).setZone(config.timezone);
};
const $17d79b7922eec8b8$export$51e2b98d4ac03ddd = (config)=>Number((config.hourHeight / $17d79b7922eec8b8$export$5c851bc642d7e5b8).toFixed(0));
const $17d79b7922eec8b8$var$DaysViewOneDay = (props)=>{
    var _store_daysViewLayout;
    const { day: day, index: index, data: data } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { width: width, selectedView: selectedView, config: config, callbacks: callbacks, isNewEventOpen: isNewEventOpen } = store;
    const { onNewEventClick: onNewEventClick } = callbacks;
    const { isDark: isDark, hourHeight: hourHeight } = config;
    const [offsetTop, setOffsetTop] = (0, $cw6c3$react.useState)(null);
    const [offsetTopEnd, setOffsetTopEnd] = (0, $cw6c3$react.useState)(null);
    const startAt = (0, $cw6c3$react.useRef)(null);
    const endAt = (0, $cw6c3$react.useRef)(null);
    const [startAtState, setStartAt] = (0, $cw6c3$react.useState)(null);
    const [endAtState, setEndAt] = (0, $cw6c3$react.useState)(null);
    // const [isDraggingNewEvent, setIsDraggingNewEvent] = useState(false);
    const newEventStartOffset = (0, $cw6c3$react.useRef)(null);
    const newEventEndOffset = (0, $cw6c3$react.useRef)(null);
    const startAtRef = (0, $cw6c3$react.useRef)(null);
    const isDraggingRef = (0, $cw6c3$react.useRef)(null);
    const isUpdating = (0, $cw6c3$react.useRef)(false);
    const style = {
        position: 'absolute',
        top: offsetTop,
        height: offsetTopEnd - offsetTop,
        background: 'transparent',
        width: '0%',
        zIndex: -1,
        borderRadius: 8,
        opacity: 0
    };
    const handleEventClickInternal = (event)=>{
        if (isDraggingRef.current || isUpdating.current) return;
        if (onNewEventClick) {
            var _startAtOnClick_toUTC;
            const rect = event.target.getBoundingClientRect();
            const y = event.clientY - rect.top;
            const startAtOnClick = $17d79b7922eec8b8$export$4f0cc7427b5c4255(Number((y / hourHeight).toFixed(0)), day, config);
            if (!(startAtOnClick === null || startAtOnClick === void 0 ? void 0 : (_startAtOnClick_toUTC = startAtOnClick.toUTC()) === null || _startAtOnClick_toUTC === void 0 ? void 0 : _startAtOnClick_toUTC.toString())) return;
            const endAtOnClick = startAtOnClick.plus({
                hour: 1
            });
            // Get hour from click event
            const hour = y / hourHeight;
            onNewEventClick({
                day: day.toJSDate(),
                hour: hour,
                startAt: startAtOnClick === null || startAtOnClick === void 0 ? void 0 : startAtOnClick.toUTC().toString(),
                endAt: endAtOnClick === null || endAtOnClick === void 0 ? void 0 : endAtOnClick.toUTC().toString(),
                event: event,
                view: selectedView
            }, event);
        }
    };
    const onMove = (e)=>{
        var _e_nativeEvent_touches, _e_nativeEvent;
        isDraggingRef.current = true;
        // setIsDraggingNewEvent(true);
        e.preventDefault();
        e.stopPropagation();
        if ((0, $79dca703cc699b4f$export$6da1c85d7de31b61)(e)) return;
        // Get column element for day, where event is placed
        const dayElement = document.getElementById(`Kalend__day__${day.toString()}`);
        const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
        const dayElementRect = dayElement.getBoundingClientRect();
        let y;
        // handle touch movement
        if (touches) y = touches.clientY - dayElementRect.top;
        else // handle mouse movement
        y = e.clientY - dayElementRect.top;
        // initial dragging
        if (newEventStartOffset.current === null) {
            const yString = (y / $17d79b7922eec8b8$export$51e2b98d4ac03ddd(config)).toFixed(0).split('.');
            const yValue = Number(yString[0]) * $17d79b7922eec8b8$export$51e2b98d4ac03ddd(config);
            setOffsetTop(yValue);
            const startAtValue = $17d79b7922eec8b8$export$4f0cc7427b5c4255(yValue / hourHeight, day, config);
            startAtRef.current = startAtValue;
            startAt.current = startAtValue;
            setStartAt(startAtValue);
            setOffsetTop(yValue);
            setOffsetTopEnd(yValue);
            newEventStartOffset.current = yValue;
            newEventEndOffset.current = yValue;
            startAtRef.current = startAtValue;
            endAt.current = startAtValue;
            setEndAt(startAtValue);
            return;
        }
        // handle dragging up
        if (newEventStartOffset.current && y < newEventStartOffset.current) {
            const yString = (y / $17d79b7922eec8b8$export$51e2b98d4ac03ddd(config)).toFixed(0).split('.');
            const yValue = Number(yString[0]) * $17d79b7922eec8b8$export$51e2b98d4ac03ddd(config);
            setOffsetTop(yValue);
            const startAtValue = $17d79b7922eec8b8$export$4f0cc7427b5c4255(yValue / hourHeight, day, config);
            startAtRef.current = startAtValue;
            startAt.current = startAtValue;
            setStartAt(startAtValue);
            return;
        }
        // handle dragging down
        const yString = (y / $17d79b7922eec8b8$export$51e2b98d4ac03ddd(config)).toFixed(0).split('.');
        const yValue = Number(yString[0]) * $17d79b7922eec8b8$export$51e2b98d4ac03ddd(config);
        setOffsetTopEnd(yValue);
        const endAtValue = $17d79b7922eec8b8$export$4f0cc7427b5c4255(yValue / hourHeight, day, config);
        endAt.current = endAtValue;
        setEndAt(endAtValue);
    };
    /**
   * Cancel dragging event
   * remove listeners clean long click timeout and reset state
   * @param event
   */ const onMouseUp = (event)=>{
        event.stopPropagation();
        event.preventDefault();
        // clean listeners
        document.removeEventListener('mouseup', onMouseUp, true);
        document.removeEventListener('mousemove', onMove, true);
        const targetClass = event.target.className;
        // prevent propagating when clicking on event due to listeners
        if (targetClass.indexOf('Kalend__Event') !== -1) return;
        if (!isDraggingRef.current) {
            handleEventClickInternal(event);
            return;
        }
        // correct layout with actual value from endAt date
        if (endAt) {
            const correctedValue = (endAt.hour + endAt.minute / 60) * hourHeight;
            newEventEndOffset.current = correctedValue;
            setOffsetTopEnd(correctedValue);
        }
        if (isUpdating.current) return;
        if (onNewEventClick && isDraggingRef.current) {
            var _startAt_current_toUTC, _startAt_current, _startAt_current1, _endAt_current;
            const startValue = offsetTop / hourHeight;
            isUpdating.current = true;
            if (!(startAt === null || startAt === void 0 ? void 0 : (_startAt_current = startAt.current) === null || _startAt_current === void 0 ? void 0 : (_startAt_current_toUTC = _startAt_current.toUTC()) === null || _startAt_current_toUTC === void 0 ? void 0 : _startAt_current_toUTC.toString())) {
                isDraggingRef.current = false;
                isUpdating.current = false;
                return;
            }
            onNewEventClick({
                day: day.toJSDate(),
                hour: startValue,
                event: event,
                startAt: (_startAt_current1 = startAt.current) === null || _startAt_current1 === void 0 ? void 0 : _startAt_current1.toUTC().toString(),
                endAt: (_endAt_current = endAt.current) === null || _endAt_current === void 0 ? void 0 : _endAt_current.toUTC().toString(),
                view: selectedView
            }, event);
        }
        isDraggingRef.current = false;
        isUpdating.current = false;
    };
    /**
   * Start event dragging on long press/touch
   * Set listeners
   * @param e
   */ const onMouseDownLong = (e)=>{
        if ((0, $79dca703cc699b4f$export$6da1c85d7de31b61)(e)) return;
        e.preventDefault();
        e.stopPropagation();
        if (e.button !== 0) return;
        document.addEventListener('mousemove', onMove, true);
        document.addEventListener('mouseup', onMouseUp, true);
    };
    /**
   * Initial long press click/touch on event
   * @param e
   */ const onMouseDown = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        // if (isDraggingRef.current) {
        //   onMouseUp(e);
        //   return;
        // }
        onMouseDownLong(e);
    };
    const oneDayStyle = {
        width: width / (0, $1500da26cef85c66$export$f16d393a3268e3f3)(selectedView),
        height: hourHeight * 12
    };
    const isToday = (0, $d49542164c9bae14$export$2e2bcd8739ae039).isToday(day);
    const isFirstDay = index === 0;
    const dataForDay = data;
    const dateNow = (0, $cw6c3$luxon.DateTime).local();
    const nowPosition = dateNow.diff((0, $cw6c3$luxon.DateTime).local().set({
        hour: 0,
        minute: 0,
        second: 0
    }), 'minutes').toObject().minutes / (60 / hourHeight);
    (0, $cw6c3$react.useEffect)(()=>{
        if (!store.config.autoScroll) return;
        if (isToday) {
            const elements = document.querySelectorAll('.calendar-body__wrapper');
            for (const element of elements)element.scrollTo({
                top: nowPosition - 40,
                behavior: 'smooth'
            });
        }
    }, []);
    const handleCloseNewEventDrag = (e)=>{
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setOffsetTopEnd(null);
        setOffsetTop(null);
        // setIsDraggingNewEvent(false);
        isDraggingRef.current = false;
        newEventStartOffset.current = null;
        newEventEndOffset.current = null;
        startAt.current = null;
        endAt.current = null;
        setStartAt(null);
        setEndAt(null);
        isUpdating.current = false;
    };
    (0, $cw6c3$react.useEffect)(()=>{
        if (!isNewEventOpen) handleCloseNewEventDrag();
    }, [
        isNewEventOpen
    ]);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        id: `Kalend__day__${day.toString()}`,
        style: oneDayStyle,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        // onTouchStart={onMouseDown}
        // onTouchMove={onMove}
        // onTouchEnd={onMouseUp}
        className: !isFirstDay ? (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__DayViewOneDay', isDark) : 'Kalend__DayViewOneDay',
        children: [
            isToday && config.showTimeLine ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1a47dae3ce368d80$export$2e2bcd8739ae039), {}) : null,
            ((_store_daysViewLayout = store.daysViewLayout) === null || _store_daysViewLayout === void 0 ? void 0 : _store_daysViewLayout[(0, $bf7b38bce41ca3dd$export$6a8d31c8b7f17aa5)(day)]) && dataForDay && dataForDay.length > 0 ? $17d79b7922eec8b8$var$renderEvents(dataForDay, day) : null,
            isDraggingRef.current ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 8
                },
                onClick: handleCloseNewEventDrag
            }) : null,
            isDraggingRef.current ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: style,
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
                    style: {
                        paddingTop: 4,
                        paddingLeft: 4,
                        fontSize: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                            style: {
                                color: 'white'
                            },
                            children: "New event"
                        }),
                        /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("p", {
                            style: {
                                color: 'white'
                            },
                            children: [
                                startAtState ? startAtState.toFormat('HH:mm') : '',
                                " -",
                                ' ',
                                endAtState ? endAtState.toFormat('HH:mm') : ''
                            ]
                        })
                    ]
                })
            }) : null
        ]
    }, day.toString());
};
var $17d79b7922eec8b8$export$2e2bcd8739ae039 = $17d79b7922eec8b8$var$DaysViewOneDay;


const $b65920b85a89468f$export$8b07b20d06dbc3c2 = (offsetTopValue, offsetLeftValue, xShiftIndexRef, event, hourHeight)=>{
    const originalStartAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.startAt);
    const originalEndAtDateTime = (0, $cw6c3$luxon.DateTime).fromISO(event.endAt);
    let goingForward = false;
    if (offsetLeftValue >= 0) goingForward = true;
    else goingForward = false;
    let newDay;
    if (goingForward) newDay = originalStartAtDateTime.plus({
        days: xShiftIndexRef.current
    });
    else newDay = originalStartAtDateTime.minus({
        days: Math.abs(xShiftIndexRef.current)
    });
    const diffInMinutes = originalEndAtDateTime.diff(originalStartAtDateTime, 'minutes').toObject().minutes;
    const minutesOffset = offsetTopValue / hourHeight * 60;
    // add minutes calculated from new offset top
    const newStartAt = originalStartAtDateTime.set({
        year: newDay.year,
        day: newDay.day,
        month: newDay.month,
        hour: 0,
        minute: 0
    }).plus({
        minutes: minutesOffset
    });
    // set correct endAt
    const newEndAt = newStartAt.plus({
        minutes: diffInMinutes
    });
    return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, event), {
        startAt: newStartAt.toUTC().toString(),
        endAt: newEndAt.toUTC().toString()
    });
};
const $b65920b85a89468f$export$8c6a352b48fd8d92 = (e, draggingRef, day, columnWidth, width, eventWasChangedRef, xShiftIndexRef, offsetLeftRef, offsetTopRef, setState)=>{
    var _e_nativeEvent_touches, _e_nativeEvent;
    if (!draggingRef.current) return;
    if (!day) return;
    const tableElement = document.querySelector('.Kalend__Calendar__table');
    const tableElementRect = tableElement.getBoundingClientRect();
    // Get column element for day, where event is placed
    const dayElement = document.getElementById(`Kalend__day__${day.toString()}`);
    if (!dayElement) return;
    const dayElementRect = dayElement.getBoundingClientRect();
    const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
    // set basic coordinates from movement
    let x;
    let y;
    // handle touch movement
    if (touches) {
        x = touches.clientX - dayElementRect.x;
        y = touches.clientY - dayElementRect.top;
    } else {
        // handle mouse movement
        // calculate x and y coordinates while following mouse move
        x = e.clientX - dayElementRect.x;
        y = e.clientY - dayElementRect.top;
    }
    // prevent free dragging across columns with simple recalculation for
    const columnShift = Math.floor(x / columnWidth);
    const xTable = e.clientX - tableElementRect.x;
    const columnShiftTable = Math.round(xTable / columnWidth);
    // restrict draggable space for timetable
    if (y < 0) return;
    eventWasChangedRef.current = true;
    setState('offsetTop', y - (0, $88a08af890f49243$export$eae15a231de23f4a));
    offsetTopRef.current = y - (0, $88a08af890f49243$export$eae15a231de23f4a);
    // prevent overflowing on x-axis
    if (columnShiftTable * columnWidth >= width || xTable - (0, $88a08af890f49243$export$447c5938f45c45a5) < 0) return;
    xShiftIndexRef.current = columnShift;
    setState('offsetLeft', columnShift * columnWidth);
    offsetLeftRef.current = x;
};
const $b65920b85a89468f$export$a8520376571bd6a0 = (e, endAtRef, day, config, offsetTop, height, setState)=>{
    var _e_nativeEvent_touches, _e_nativeEvent;
    if (!day) return;
    // Get column element for day, where event is placed
    const dayElement = document.getElementById(`Kalend__day__${day.toString()}`);
    if (!dayElement) return;
    const dayElementRect = dayElement.getBoundingClientRect();
    const touches = (_e_nativeEvent = e.nativeEvent) === null || _e_nativeEvent === void 0 ? void 0 : (_e_nativeEvent_touches = _e_nativeEvent.touches) === null || _e_nativeEvent_touches === void 0 ? void 0 : _e_nativeEvent_touches[0];
    // set basic coordinates from movement
    let y;
    // handle touch movement
    if (touches) y = touches.clientY - dayElementRect.top;
    else // handle mouse movement
    y = e.clientY - dayElementRect.top;
    // restrict draggable space for timetable
    if (y < 0) return;
    const yString = (y / (0, $17d79b7922eec8b8$export$51e2b98d4ac03ddd)(config)).toFixed(0).split('.');
    const yValue = Number(yString[0]) * (0, $17d79b7922eec8b8$export$51e2b98d4ac03ddd)(config);
    const endAtValue = (0, $17d79b7922eec8b8$export$4f0cc7427b5c4255)(yValue / config.hourHeight, day, config);
    setState('height', Number(((y - offsetTop) / 15).toFixed(0)) * 15);
    setState('endAt', endAtValue);
    endAtRef.current = endAtValue.toUTC().toString();
};




const $d936bbeb8e3b329f$export$fd46f924699b0eb4 = (prevEvent, eventToUpdate, store, setContext, type, onEventDragFinish, resetPosition)=>{
    const events = store.events;
    const result = events === null || events === void 0 ? void 0 : events.map((item)=>{
        if (item.id === eventToUpdate.id) return eventToUpdate;
        else return item;
    });
    // return updated data with callback
    if (onEventDragFinish) onEventDragFinish(prevEvent, eventToUpdate, result, resetPosition);
};






let $f7dc25aaa4235907$var$timeout;
const $f7dc25aaa4235907$var$ButtonBase = (props)=>{
    const { id: id, onClick: onClick, text: text, className: className, style: style, children: children, propagation: propagation, disabled: disabled, onClickFromParent: onClickFromParent, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseMove: onMouseMove, onTouchEnd: onTouchEnd, isDark: isDark } = props;
    const buttonRef = (0, $cw6c3$react.useRef)(null);
    const [isPressed, setIsPressed] = (0, $cw6c3$react.useState)(false);
    const [spanStyle, setSpanStyle] = (0, $cw6c3$react.useState)({});
    const onButtonClick = (e)=>{
        if (e.target.parentNode.parentNode.parentNode.style.backgroundColor == 'rgb(229, 57, 53)' || e.target.parentNode.parentNode.style.backgroundColor == 'rgb(229, 57, 53)' || e.target.className == 'Kalend__text Kalend__header_calendar_button-text' || e.target.className == 'Kalend__button Kalend__ButtonBase-border Kalend__ButtonBase') {
            onClick(e);
            if (onClickFromParent) onClickFromParent();
        }
    };
    const animateRipple = (event)=>{
        const button = buttonRef.current;
        if (!button) return;
        const rect = button.getBoundingClientRect();
        const oneSide = button.clientWidth > button.clientHeight ? button.clientWidth : button.clientHeight;
        const touches = event.touches ? event.touches[0] : undefined;
        let clickLeft;
        let clickTop;
        if (touches) {
            clickLeft = touches.clientX - rect.left - oneSide;
            clickTop = touches.clientY - rect.top - oneSide;
        } else {
            clickLeft = event.clientX;
            clickTop = event.clientY;
        }
        const style = {
            width: `${oneSide * 2}px`,
            height: `${oneSide * 2}px`,
            left: `${clickLeft}px`,
            top: `${clickTop}px`
        };
        setSpanStyle(style);
        setIsPressed(true);
    };
    const onTouchStart = (e)=>{
        if (!propagation) e.stopPropagation();
        if (props.onTouchStart) props.onTouchStart(e);
        if (isPressed) setIsPressed(false);
        $f7dc25aaa4235907$var$timeout = setTimeout(()=>{
            animateRipple(e);
        }, 100);
    };
    // Clear timeout for ripple effect
    const onTouchMove = (e)=>{
        if (!propagation) e.stopPropagation();
        if (props.onTouchMove) props.onTouchMove(e);
        clearTimeout($f7dc25aaa4235907$var$timeout);
    };
    const buttonText = text ? text : '';
    const buttonClassName = className ? `Kalend__button ${className} ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__ButtonBase', isDark)}` : `Kalend__button ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__ButtonBase', isDark)}`;
    if (id) return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("a", {
        id: id,
        ref: buttonRef,
        onClick: onButtonClick,
        //onTouchMove={onTouchMove}
        //onTouchStart={onTouchStart}
        //onTouchEnd={onTouchEnd}
        //onMouseDown={onMouseDown}
        //onMouseUp={onMouseUp}
        //onMouseMove={onMouseMove}
        // onTouchStart={handleTouchStart}
        // onMouseLeave={handleTouchOff}
        // onTouchEnd={handleTouchOff}
        // onTouchEndCapture={handleTouchCancel}
        className: buttonClassName,
        style: style,
        href: '/planning/book?id=' + id,
        children: [
            children ? children : buttonText,
            isPressed && !disabled ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("span", {
                style: spanStyle,
                className: 'Kalend__ButtonBase__animation'
            }) : null
        ]
    });
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("button", {
        id: id,
        ref: buttonRef,
        onClick: onButtonClick,
        onTouchMove: onTouchMove,
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onMouseMove: onMouseMove,
        // onTouchStart={handleTouchStart}
        // onMouseLeave={handleTouchOff}
        // onTouchEnd={handleTouchOff}
        // onTouchEndCapture={handleTouchCancel}
        className: buttonClassName,
        style: style,
        children: [
            children ? children : buttonText,
            isPressed && !disabled ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("span", {
                style: spanStyle,
                className: 'Kalend__ButtonBase__animation'
            }) : null
        ]
    });
};
var $f7dc25aaa4235907$export$2e2bcd8739ae039 = $f7dc25aaa4235907$var$ButtonBase;








const $c9cc80fc017c328a$export$a7416569151781bc = (value, className, style)=>{
    let array = value.split('</br>');
    //if (newValueString.indexOf('\\n') !== -1) {
    //  newValueString = newValueString.replace(/\\n/g, ' ');
    //}
    //if (newValueString.indexOf('\\;') !== -1) {
    //  newValueString = newValueString.replace(/\\;/g, ';');
    //}
    //if (newValueString.indexOf('\\,') !== -1) {
    //  newValueString = newValueString.replace(/\\,/g, ',');
    //}
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                className: className,
                style: style,
                children: array[0]
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                className: className,
                style: style,
                children: array[1]
            })
        ]
    });
};


const $8304c40ecd0ca62c$var$parseFontSize = (height)=>{
    if (height < 10) return 7;
    else if (height < 15) return 9;
    else if (height < 20) return 11;
    else return 13;
};
const $8304c40ecd0ca62c$var$EventSummary = (props)=>{
    var _event_style;
    const { isDark: isDark, summary: summary, type: type, isDarkColor: isDarkColor, event: event, height: height } = props;
    const style = {
        color: ((_event_style = event.style) === null || _event_style === void 0 ? void 0 : _event_style.color) ? event.style.color : 'inherit'
    };
    if (height) {
        style.fontSize = $8304c40ecd0ca62c$var$parseFontSize(height);
        // adjust for smaller event container
        if (height <= 20) {
            style.paddingTop = 0;
            style.lineHeight = 'normal';
            style.height = '100%';
            style.padding = '0px 0px 6px 4px !important';
        }
    }
    return (0, $c9cc80fc017c328a$export$a7416569151781bc)(summary, ` Kalend__text ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__Event__summary', isDark)} ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__Event__summary__type-${type}`, isDark)} ${isDarkColor ? 'Kalend__text-light' : 'Kalend__text-dark'}`, style);
};
var $8304c40ecd0ca62c$export$2e2bcd8739ae039 = $8304c40ecd0ca62c$var$EventSummary;








const $5293df8efc30aa85$var$TIME_FORMAT_PATTERN = 'HH:mm';
const $5293df8efc30aa85$var$TIME_H_12_FORMAT_PATTERN = 'hh:mm a';
const $5293df8efc30aa85$var$parseTimeFormat = (day, timeFormat)=>{
    if (timeFormat === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24) return day.toFormat($5293df8efc30aa85$var$TIME_FORMAT_PATTERN);
    else return day.toFormat($5293df8efc30aa85$var$TIME_H_12_FORMAT_PATTERN);
};
const $5293df8efc30aa85$var$formatEventTimeV2 = (event, timeFormat, timezone, endAtState)=>{
    const { startAt: startAt, endAt: endAt, timezoneStartAt: timezoneStartAt } = event;
    const startAtDateTime = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(startAt, timezoneStartAt, timezone);
    const endAtDateTime = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(endAtState || endAt, timezoneStartAt, timezone);
    return {
        start: $5293df8efc30aa85$var$parseTimeFormat(startAtDateTime, timeFormat),
        end: $5293df8efc30aa85$var$parseTimeFormat(endAtDateTime, timeFormat)
    };
};
const $5293df8efc30aa85$var$normalTime = (timeFormat, event, timezone, type, isDark, endAt, isDarkColor)=>{
    var _event_style;
    const timeV2 = $5293df8efc30aa85$var$formatEventTimeV2(event, timeFormat, timezone, endAt);
    const style = {
        color: ((_event_style = event.style) === null || _event_style === void 0 ? void 0 : _event_style.color) ? event.style.color : 'inherit'
    };
    return timeFormat === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12 ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("p", {
        className: `Kalend__text ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__Event__time__type-${type}`, isDark)} Kalend__Event__time ${isDarkColor ? 'Kalend__text-light' : 'Kalend__text-dark'}`,
        style: style,
        children: [
            timeV2.start,
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("br", {}),
            timeV2.end
        ]
    }) : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("p", {
        className: `Kalend__text ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__Event__time__type-${type}`, isDark)} Kalend__Event__time ${isDarkColor ? 'Kalend__text-light' : 'Kalend__text-dark'}`,
        style: style,
        children: [
            timeV2.start,
            " - ",
            timeV2.end
        ]
    });
};
const $5293df8efc30aa85$var$EventTime = (props)=>{
    var _event_style;
    const { isDark: isDark, event: event, type: type, endAt: endAt, isDarkColor: isDarkColor } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { config: config, isMobile: isMobile } = store;
    const { timezone: timezone, timeFormat: timeFormat } = config;
    const style = {
        color: ((_event_style = event.style) === null || _event_style === void 0 ? void 0 : _event_style.color) ? event.style.color : 'inherit'
    };
    return type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).AGENDA && event.allDay ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                className: `Kalend__text ${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__Event__time__type-${type}`, isDark)} Kalend__Event__time ${isDarkColor ? 'Kalend__text-light' : 'Kalend__text-dark'}`,
                style: style,
                children: "All day"
            }),
            !isMobile ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                style: {
                    color: 'transparent',
                    padding: 0,
                    margin: 0,
                    fontSize: '0.8em'
                },
                children: "123 12"
            }) : null
        ]
    }) : $5293df8efc30aa85$var$normalTime(timeFormat, event, timezone, type, isDark, endAt, isDarkColor);
};
var $5293df8efc30aa85$export$2e2bcd8739ae039 = $5293df8efc30aa85$var$EventTime;


const $82d351ff4940fae4$var$EventAgenda = (props)=>{
    const { isDark: isDark, event: event, type: type } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isMobile: isMobile } = store;
    return !isMobile ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: 'Kalend__EventAgenda__container',
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $5293df8efc30aa85$export$2e2bcd8739ae039), {
                isDark: isDark,
                event: event,
                type: type,
                isDarkColor: isDark
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    style: {
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: event.color,
                        marginLeft: 8,
                        marginRight: 8,
                        filter: isDark ? 'saturate(60%) brightness(120%)' : 'none'
                    }
                })
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $8304c40ecd0ca62c$export$2e2bcd8739ae039), {
                summary: event.summary,
                isDark: isDark,
                type: type,
                isDarkColor: isDark,
                event: event
            })
        ]
    }) : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: 'Kalend__EventAgenda__container',
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    width: 8,
                    height: 55,
                    borderRadius: 4,
                    background: event.color,
                    filter: isDark ? 'saturate(60%) brightness(120%)' : 'none'
                }
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $8304c40ecd0ca62c$export$2e2bcd8739ae039), {
                        summary: event.summary,
                        isDark: isDark,
                        type: type,
                        isDarkColor: isDark,
                        event: event
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $5293df8efc30aa85$export$2e2bcd8739ae039), {
                        isDark: isDark,
                        event: event,
                        type: type,
                        isDarkColor: isDark
                    })
                ]
            })
        ]
    });
};
var $82d351ff4940fae4$export$2e2bcd8739ae039 = $82d351ff4940fae4$var$EventAgenda;




const $e4c1f2269414489f$var$EventMonth = (props)=>{
    const { isDark: isDark, event: event, type: type, isDarkColor: isDarkColor } = props;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $8304c40ecd0ca62c$export$2e2bcd8739ae039), {
        summary: event.summary,
        isDark: isDark,
        type: type,
        isDarkColor: isDarkColor,
        event: event
    });
};
var $e4c1f2269414489f$export$2e2bcd8739ae039 = $e4c1f2269414489f$var$EventMonth;






const $05400c9842705755$var$EventNormal = (props)=>{
    const { isDark: isDark, event: event, type: type, meta: meta, endAt: endAt, isDarkColor: isDarkColor, height: height } = props;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '-webkit-fill-available'
        },
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $8304c40ecd0ca62c$export$2e2bcd8739ae039), {
                summary: event.summary,
                isDark: isDark,
                type: type,
                isDarkColor: isDarkColor,
                event: event,
                height: height
            }),
            (meta === null || meta === void 0 ? void 0 : meta.showTime) ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $5293df8efc30aa85$export$2e2bcd8739ae039), {
                isDark: isDark,
                event: event,
                type: (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL,
                endAt: endAt,
                isDarkColor: isDarkColor
            }) : null
        ]
    });
};
var $05400c9842705755$export$2e2bcd8739ae039 = $05400c9842705755$var$EventNormal;




const $66c3795c5fc7507d$var$StateReducer = (state, action)=>{
    // Replace whole state
    if (!action.payload) return (0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state, action);
    const { stateName: stateName, type: type, data: data } = action.payload;
    type;
    return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, state), {
        [stateName]: data
    });
};
var $66c3795c5fc7507d$export$2e2bcd8739ae039 = $66c3795c5fc7507d$var$StateReducer;


// ref to cancel timout
let $b852c5f3008abacb$var$timeoutRef;
const $b852c5f3008abacb$var$parseAdditionalEventStyle = (event)=>{
    if (event.style) return event.style;
    return {};
};
const $b852c5f3008abacb$export$7027e19dcb369b2d = (colorString)=>{
    try {
        const color = (0, ($parcel$interopDefault($cw6c3$color)))(colorString);
        return color.isDark();
    } catch (e) {
        return false;
    }
};
const $b852c5f3008abacb$var$EventButton = (props)=>{
    const { item: item, type: type, day: day = (0, $cw6c3$luxon.DateTime).now(), index: index } = props;
    const { event: event } = item;
    const { startAt: startAt, endAt: endAt } = event;
    const [state, dispatchState] = (0, $cw6c3$react.useReducer)((0, $66c3795c5fc7507d$export$2e2bcd8739ae039), (0, $79dca703cc699b4f$export$2b35b885b699e674));
    const setState = (stateName, data)=>{
        const payload = {
            stateName: stateName,
            data: data
        };
        dispatchState({
            state: state,
            payload: payload
        });
    };
    // store values as refs to access them in event listener
    const offsetTopRef = (0, $cw6c3$react.useRef)(state.offsetTop);
    const offsetLeftRef = (0, $cw6c3$react.useRef)(state.offsetLeft);
    const xShiftIndexRef = (0, $cw6c3$react.useRef)(0);
    const yShiftIndexRef = (0, $cw6c3$react.useRef)(0);
    const draggingRef = (0, $cw6c3$react.useRef)(false);
    const isResizing = (0, $cw6c3$react.useRef)(false);
    const eventWasChangedRef = (0, $cw6c3$react.useRef)(false);
    const endAtRef = (0, $cw6c3$react.useRef)(null);
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { width: width, calendarDays: calendarDays, config: config, callbacks: callbacks, height: height, draggingDisabledConditions: draggingDisabledConditions } = store;
    const { hourHeight: hourHeight, isDark: isDark } = config;
    const { onEventClick: onEventClick, onEventDragFinish: onEventDragFinish } = callbacks;
    const columnWidth = width / (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).MONTH ? 7 : calendarDays.length);
    const eventColor = event.color ? (0, $1500da26cef85c66$export$2d5ed1e6bc597003)(event.color, isDark) : 'indigo';
    const getPosition = ()=>{
        if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).AGENDA) return 'relative';
        else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).SHOW_MORE_MONTH && !draggingRef.current) return 'relative';
        else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).SHOW_MORE_MONTH) return 'fixed';
        else return 'absolute';
    };
    const isDarkColor = $b852c5f3008abacb$export$7027e19dcb369b2d(eventColor);
    const style = (0, $cw6c3$swchelperscjs_object_spreadcjs._)({
        position: getPosition(),
        height: state.height !== null ? state.height : item.height || (0, $bHm26.MONTH_EVENT_HEIGHT),
        width: state.width !== null ? state.width : item.width || '100%',
        top: state.offsetTop !== null ? state.offsetTop - 864 : item.offsetTop,
        left: state.offsetLeft !== null ? state.offsetLeft : item.offsetLeft,
        zIndex: state.zIndex || item.zIndex,
        border: isDark ? 'solid 1px #1d1f26' : 'solid 1px white',
        // border: state.zIndex > 2 ? `solid 1px white` : `solid 1px ${eventColor}`,
        backgroundColor: eventColor,
        visibility: 'visible',
        color: isDarkColor ? 'white' : 'black'
    }, $b852c5f3008abacb$var$parseAdditionalEventStyle(item.event));
    const handleEventClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (draggingRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            draggingRef.current = false;
            return;
        }
        if (onEventClick) onEventClick(event, e);
    };
    const setLayout = (layout)=>{
        setState('initialTop', layout.offsetTop);
        setState('initialLeft', layout.offsetLeft);
        setState('offsetTop', layout.offsetTop);
        setState('offsetLeft', layout.offsetLeft);
        setState('drawingY', layout.offsetTop);
        setState('startAt', startAt);
        setState('width', layout.width);
        setState('height', layout.height);
        setState('zIndex', layout.zIndex);
        setState('border', layout.border);
        setState('meta', layout.meta);
    };
    (0, $cw6c3$react.useEffect)(()=>{
        setLayout(item);
        setState('endAt', endAt);
    }, []);
    const initMove = ()=>{
        if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).AGENDA) return;
        if (!draggingRef.current) draggingRef.current = true;
        if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL) {
            setState('width', columnWidth - (0, $88a08af890f49243$export$b4e2ba6756dec2c));
            setState('offsetLeft', 0);
        }
    };
    const onResize = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if ((0, $79dca703cc699b4f$export$6da1c85d7de31b61)(e) || config.disabledDragging) return;
        isResizing.current = true;
        (0, $b65920b85a89468f$export$a8520376571bd6a0)(e, endAtRef, day, config, state.offsetTop, state.height, setState);
    };
    const onMove = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if ((0, $79dca703cc699b4f$export$6da1c85d7de31b61)(e)) return;
        switch(type){
            case (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL:
                (0, $b65920b85a89468f$export$8c6a352b48fd8d92)(e, draggingRef, day, columnWidth, width, eventWasChangedRef, xShiftIndexRef, offsetLeftRef, offsetTopRef, setState);
                break;
            case (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).HEADER:
                (0, $df4cda54b7466b02$export$1fc19a5181516448)(e, columnWidth, width, xShiftIndexRef, offsetLeftRef, eventWasChangedRef, setState);
                break;
            case (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).MONTH:
                (0, $e5a736e77c82a8d5$export$dc270e2350d64c2)(e, height, draggingRef, day, columnWidth, width, xShiftIndexRef, yShiftIndexRef, eventWasChangedRef, offsetLeftRef, offsetTopRef, setState, index || 0);
                break;
            case (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).SHOW_MORE_MONTH:
                (0, $082d0c87d15d5b42$export$286c3aed0632f6fd)(e, height, draggingRef, day, width, xShiftIndexRef, yShiftIndexRef, eventWasChangedRef, offsetLeftRef, offsetTopRef, setState);
                break;
            default:
                return;
        }
    };
    const onMouseUpResize = (e)=>{
        // clean listeners
        document.removeEventListener('mouseup', onMouseUpResize, true);
        document.removeEventListener('mousemove', onResize, true);
        // add data to callback
        if (onEventDragFinish) {
            if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL) {
                var _store_events;
                const updatedEvent = (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, event), {
                    endAt: endAtRef.current || state.endAt
                });
                const result = (_store_events = store.events) === null || _store_events === void 0 ? void 0 : _store_events.map((item)=>{
                    if (item.id === updatedEvent.id) return updatedEvent;
                    else return item;
                });
                onEventDragFinish(event, updatedEvent, result);
            }
        }
        endAtRef.current = null;
        isResizing.current = false;
        e.preventDefault();
        e.stopPropagation();
    };
    /**
   * Cancel dragging event
   * remove listeners clean long click timeout and reset state
   * @param e
   */ const onMouseUp = (e)=>{
        // clean listeners
        document.removeEventListener('mouseup', onMouseUp, true);
        document.removeEventListener('mousemove', onMove, true);
        // clear timeout
        clearTimeout($b852c5f3008abacb$var$timeoutRef);
        if (!eventWasChangedRef.current) {
            setState('offsetLeft', state.offsetLeft);
            setState('width', state.width);
            setState('isDragging', false);
            draggingRef.current = false;
            return;
        }
        eventWasChangedRef.current = false;
        if (!draggingRef.current) return;
        setTimeout(()=>{
            draggingRef.current = false;
            setState('isDragging', false);
        }, 100);
        // add data to callback
        if (onEventDragFinish || config.hasExternalLayout) {
            let newEvent = null;
            if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL) newEvent = (0, $b65920b85a89468f$export$8b07b20d06dbc3c2)(offsetTopRef.current, offsetLeftRef.current, xShiftIndexRef, event, hourHeight);
            else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).HEADER) newEvent = (0, $df4cda54b7466b02$export$ff41551cf384acef)(calendarDays, event, xShiftIndexRef);
            else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).MONTH) newEvent = (0, $e5a736e77c82a8d5$export$dd76bfaf05a6a47a)(calendarDays, yShiftIndexRef, xShiftIndexRef, event);
            else if (type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).SHOW_MORE_MONTH) newEvent = (0, $082d0c87d15d5b42$export$a53075e16597084a)(calendarDays, yShiftIndexRef, xShiftIndexRef, event);
            if (newEvent) (0, $d936bbeb8e3b329f$export$fd46f924699b0eb4)(event, newEvent, store, setContext, type, onEventDragFinish, ()=>{
                setLayout(item);
            });
        }
        e.preventDefault();
        e.stopPropagation();
    };
    const onMouseDownResize = (e)=>{
        if ((0, $79dca703cc699b4f$export$6da1c85d7de31b61)(e) || !onEventDragFinish) return;
        const isDraggable = (0, $bf7b38bce41ca3dd$export$7b553a398ff09de5)(draggingDisabledConditions, event);
        if (!isDraggable) return;
        e.preventDefault();
        e.stopPropagation();
        isResizing.current = true;
        if (e.button !== 0) return;
        document.addEventListener('mousemove', onResize, true);
        document.addEventListener('mouseup', onMouseUpResize, true);
    };
    /**
   * Start event dragging on long press/touch
   * Set listeners
   * @param e
   */ const onMouseDownLong = (e)=>{
        if ((0, $79dca703cc699b4f$export$6da1c85d7de31b61)(e)) return;
        const isDraggable = (0, $bf7b38bce41ca3dd$export$7b553a398ff09de5)(draggingDisabledConditions, event);
        if (!isDraggable || config.disabledDragging) return;
        setState('isDragging', true);
        draggingRef.current = true;
        e.preventDefault();
        e.stopPropagation();
        if (e.button !== 0) return;
        document.addEventListener('mousemove', onMove, true);
        document.addEventListener('mouseup', onMouseUp, true);
        // set temp state while dragging
        initMove();
    };
    /**
   * Initial long press click/touch on event
   * @param e
   */ const onMouseDown = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (isResizing.current) return;
        // add timeout to differentiate from normal clicks
        $b852c5f3008abacb$var$timeoutRef = setTimeout(()=>{
            onMouseDownLong(e);
        }, 120);
    };
    return type !== (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).AGENDA ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $f7dc25aaa4235907$export$2e2bcd8739ae039), {
        id: event.id,
        isDark: isDark,
        style: style,
        className: `${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__Event-${type}`, store.isDark)} ${state.isDragging ? 'Kalend__EventButton__elevation' : ''}`,
        onClick: handleEventClick,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        children: [
            type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).MONTH || type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).HEADER || type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).SHOW_MORE_MONTH ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $e4c1f2269414489f$export$2e2bcd8739ae039), {
                event: event,
                isDark: isDark,
                type: type,
                isDarkColor: isDarkColor
            }) : null,
            type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $05400c9842705755$export$2e2bcd8739ae039), {
                event: event,
                isDark: isDark,
                type: type,
                meta: item.meta,
                endAt: state.endAt,
                isDarkColor: isDarkColor,
                height: item.height
            }) : null,
            isResizing.current ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__EventButton__resizing_wrapper',
                onClick: ()=>{
                    isResizing.current = false;
                }
            }) : null,
            type === (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).NORMAL ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    height: 5,
                    width: '100%',
                    background: 'transparent',
                    zIndex: isResizing.current ? 999 : 9,
                    cursor: 'n-resize'
                },
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    isResizing.current = true;
                },
                onMouseDown: onMouseDownResize,
                onMouseUp: onMouseUpResize
            }) : null
        ]
    }) : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f7dc25aaa4235907$export$2e2bcd8739ae039), {
        id: event.id,
        isDark: false,
        className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__Event-${type}`, isDark),
        onClick: handleEventClick,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $82d351ff4940fae4$export$2e2bcd8739ae039), {
            event: event,
            isDark: isDark,
            type: type
        })
    });
};
var $b852c5f3008abacb$export$2e2bcd8739ae039 = $b852c5f3008abacb$var$EventButton;


const $86ca9f6752cc056e$var$renderEvents = (events, timezone)=>{
    if (!events || events.length === 0) return [];
    const allDayEvents = [];
    const normalEvents = [];
    events === null || events === void 0 ? void 0 : events.forEach((item)=>{
        if (item.allDay) allDayEvents.push(item);
        else normalEvents.push(item);
    });
    let sortedEvents = normalEvents === null || normalEvents === void 0 ? void 0 : normalEvents.sort((a, b)=>{
        return (0, $cw6c3$luxon.DateTime).fromISO(a.startAt).setZone(a.timezoneStartAt || timezone).toMillis() - (0, $cw6c3$luxon.DateTime).fromISO(b.startAt).setZone(b.timezoneStartAt || timezone).toMillis();
    });
    sortedEvents = [
        ...allDayEvents,
        ...sortedEvents
    ];
    return sortedEvents.map((event)=>{
        return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b852c5f3008abacb$export$2e2bcd8739ae039), {
            item: {
                event: event
            },
            type: (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).AGENDA
        }, `${event.id}${event.internalID ? event.internalID : ''}`);
    });
};
const $86ca9f6752cc056e$var$AgendaDayRow = (props)=>{
    const { day: day, events: events, scrollToThis: scrollToThis } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const dayEvents = $86ca9f6752cc056e$var$renderEvents(events, store.config.timezone);
    (0, $cw6c3$react.useEffect)(()=>{
        if (!store.config.autoScroll) return;
        if (scrollToThis) {
            const element = document.getElementById(day.toString());
            if (element) element.scrollIntoView();
        }
    }, []);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__AgendaDayRow__container', store.isDark),
        id: day.toString(),
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
                className: 'Kalend__AgendaDayRow__container-day',
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $0689dc746d054cae$export$2e2bcd8739ae039), {
                        day: day,
                        width: 50
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $ecf585202d453fcb$export$2e2bcd8739ae039), {
                        width: 50,
                        day: day
                    })
                ]
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__AgendaDayRow__events',
                children: dayEvents
            })
        ]
    });
};
var $86ca9f6752cc056e$export$2e2bcd8739ae039 = $86ca9f6752cc056e$var$AgendaDayRow;



var $jhaH7 = parcelRequire("jhaH7");

const $ae9d5d34ac1cc52f$var$renderAgendaEvents = (events, calendarDays)=>{
    let scrollToSet = false;
    return calendarDays.map((calendarDay)=>{
        const hasEvents = !!events[calendarDay.toFormat((0, $d49542164c9bae14$export$74b2237eca26435b))];
        let scrollToThis = false;
        if (hasEvents) {
            if (!scrollToSet && (0, $d49542164c9bae14$export$2e2bcd8739ae039).isTodayOrInFuture(calendarDay)) {
                scrollToSet = true;
                scrollToThis = true;
            }
            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $86ca9f6752cc056e$export$2e2bcd8739ae039), {
                scrollToThis: scrollToThis,
                day: calendarDay,
                events: events[calendarDay.toFormat((0, $d49542164c9bae14$export$74b2237eca26435b))]
            }, calendarDay.toString());
        }
    });
};
const $ae9d5d34ac1cc52f$var$AgendaView = (props)=>{
    const { events: events, eventLayouts: eventLayouts } = props;
    const [wasInit, setWasInit] = (0, $cw6c3$react.useState)(false);
    const [calendarContent, setCalendarContent] = (0, $cw6c3$react.useState)(null);
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { calendarDays: calendarDays, width: width, height: height } = store;
    const hasExternalLayout = eventLayouts !== undefined;
    (0, $cw6c3$react.useEffect)(()=>{
        if (!hasExternalLayout) {
            (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
                events: events,
                selectedView: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA,
                height: height,
                width: width,
                calendarDays: [],
                config: store.config
            }).then((res)=>{
                setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
                const content = $ae9d5d34ac1cc52f$var$renderAgendaEvents(res.events, calendarDays);
                setCalendarContent(content);
            });
            setWasInit(true);
        }
    }, [
        calendarDays[0]
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        // don't need to call this immediately
        if (wasInit) {
            if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
                events: events,
                selectedView: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA,
                height: height,
                width: width,
                calendarDays: [],
                config: store.config
            }).then((res)=>{
                setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
                const content = $ae9d5d34ac1cc52f$var$renderAgendaEvents(res.events, calendarDays);
                setCalendarContent(content);
            });
        }
    }, [
        JSON.stringify(events)
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        if (hasExternalLayout && (0, $bf7b38bce41ca3dd$export$e3e4ea182aca355e)(props.eventLayouts.selectedView) === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA) {
            var _props_eventLayouts;
            setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
            const content = $ae9d5d34ac1cc52f$var$renderAgendaEvents((_props_eventLayouts = props.eventLayouts) === null || _props_eventLayouts === void 0 ? void 0 : _props_eventLayouts.events, calendarDays);
            setCalendarContent(content);
        }
    }, [
        JSON.stringify(props.eventLayouts)
    ]);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__Agenda__container',
        style: {
            height: '100%'
        },
        children: calendarContent
    });
};
var $ae9d5d34ac1cc52f$export$2e2bcd8739ae039 = $ae9d5d34ac1cc52f$var$AgendaView;






// The MIT License (MIT)
//
// Copyright (c) 2018 Akveo.
//
//     Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const $cea2a6b325f4edcd$var$CalendarIcon = (props)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: props.className,
        fill: props.fill,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("g", {
            "data-name": "Layer 2",
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("g", {
                "data-name": "calendar",
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("rect", {
                        width: "24",
                        height: "24",
                        opacity: "0"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("path", {
                        d: "M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("circle", {
                        cx: "8",
                        cy: "16",
                        r: "1"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("path", {
                        d: "M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"
                    })
                ]
            })
        })
    });
var $cea2a6b325f4edcd$export$2e2bcd8739ae039 = $cea2a6b325f4edcd$var$CalendarIcon;



const $de758c447aa9231a$var$ChevronDown = (props)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: props.className,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("g", {
            "data-name": "Layer 2",
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("g", {
                "data-name": "chevron-down",
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("rect", {
                        width: "24",
                        height: "24",
                        opacity: "0"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("path", {
                        d: "M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"
                    })
                ]
            })
        })
    });
var $de758c447aa9231a$export$2e2bcd8739ae039 = $de758c447aa9231a$var$ChevronDown;



const $2764ed95df1a4c11$var$ChevronLeft = (props)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: props.className,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("g", {
            "data-name": "Layer 2",
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("g", {
                "data-name": "chevron-left",
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("rect", {
                        width: "24",
                        height: "24",
                        transform: "rotate(90 12 12)",
                        opacity: "0"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("path", {
                        d: "M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"
                    })
                ]
            })
        })
    });
var $2764ed95df1a4c11$export$2e2bcd8739ae039 = $2764ed95df1a4c11$var$ChevronLeft;



const $ddaf3c6577962ab4$var$ChevronRight = (props)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: props.className,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("g", {
            "data-name": "Layer 2",
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("g", {
                "data-name": "chevron-right",
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("rect", {
                        width: "24",
                        height: "24",
                        transform: "rotate(-90 12 12)",
                        opacity: "0"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("path", {
                        d: "M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"
                    })
                ]
            })
        })
    });
var $ddaf3c6577962ab4$export$2e2bcd8739ae039 = $ddaf3c6577962ab4$var$ChevronRight;



const $e5981d21af543faf$var$MenuIcon = (props)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("g", {
            "data-name": "Layer 2",
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("g", {
                "data-name": "more-vertical",
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("rect", {
                        width: "24",
                        height: "24",
                        transform: "rotate(-90 12 12)",
                        opacity: "0"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "2"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("circle", {
                        cx: "12",
                        cy: "5",
                        r: "2"
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("circle", {
                        cx: "12",
                        cy: "19",
                        r: "2"
                    })
                ]
            })
        })
    });
var $e5981d21af543faf$export$2e2bcd8739ae039 = $e5981d21af543faf$var$MenuIcon;


const $1c7a61445362ebf7$export$a9676248d3e54baf = {
    ChevronDown: $de758c447aa9231a$export$2e2bcd8739ae039,
    ChevronLeft: $2764ed95df1a4c11$export$2e2bcd8739ae039,
    ChevronRight: $ddaf3c6577962ab4$export$2e2bcd8739ae039,
    Calendar: $cea2a6b325f4edcd$export$2e2bcd8739ae039,
    More: $e5981d21af543faf$export$2e2bcd8739ae039
};





const $63103f0ef67d319d$export$3d0db7ed812b6b3f = (calendarDays, calendarView, direction, weekDayStart, dispatchContext)=>{
    const setSelectedDate = (date)=>{
        if (dispatchContext) dispatchContext('selectedDate', date);
    };
    const newCalendarDays = (0, $1500da26cef85c66$export$20dc9138dd5b1a6a)(direction, calendarDays, calendarView, setSelectedDate, weekDayStart);
    if (dispatchContext) dispatchContext('calendarDays', newCalendarDays);
    return newCalendarDays;
// dispatchContext(
//   'selectedDate',
//   newCalendarDays[chooseSelectedDateIndex(calendarView)]
// );
};
const $63103f0ef67d319d$export$28b655052872eb26 = async (selectedView, setContext, weekDayStart, dateNow = (0, $cw6c3$luxon.DateTime).now())=>{
    $63103f0ef67d319d$export$3d0db7ed812b6b3f([
        dateNow
    ], selectedView, (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).TODAY, weekDayStart, setContext);
};





// eslint-disable-next-line @typescript-eslint/no-use-before-define



const $224cea852abf103b$var$ButtonIcon = (props)=>{
    const [isPressed, setIsPressed] = (0, $cw6c3$react.useState)(false);
    const { children: children, onClick: onClick, size: size, disabled: disabled, isDark: isDark, iconSize: iconSize, noActive: noActive, backdropClassName: backdropClassName, style: style } = props;
    const handleTouchStart = ()=>setIsPressed(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleTouchOff = (e)=>setIsPressed(false);
    const containerClassName = !size ? 'Kalend__ButtonIcon__container' : `Kalend__ButtonIcon__container-${size}`;
    const backdropClassNameString = backdropClassName ? backdropClassName : 'Kalend__ButtonIcon__backdrop';
    const buttonClassName = noActive ? `${disabled ? 'Kalend__ButtonIcon__disabled ' : ''}Kalend__ButtonIcon-inactive` : `${disabled ? 'Kalend__ButtonIcon__disabled ' : ''}Kalend__ButtonIcon`;
    const IconElement = /*#__PURE__*/ (0, ($parcel$interopDefault($cw6c3$react))).cloneElement(children, {
        className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(`Kalend__ButtonIcon__svg${iconSize ? `-${iconSize}` : '-normal'}`, isDark)
    });
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: containerClassName,
        style: style,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("button", {
            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)(buttonClassName, isDark),
            onClick: onClick,
            disabled: disabled,
            onTouchStart: handleTouchStart,
            onTouchEnd: handleTouchOff,
            children: [
                IconElement,
                isPressed ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    className: backdropClassNameString
                }) : null
            ]
        })
    });
};
var $224cea852abf103b$export$2e2bcd8739ae039 = $224cea852abf103b$var$ButtonIcon;















const $6188babcb8da6286$var$HeaderCalendarButton = (props)=>{
    const { buttonData: buttonData, setViewChanged: setViewChanged, handleClose: handleClose, isForcedMobile: isForcedMobile } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isDark: isDark, selectedView: selectedView, isMobile: isMobile } = store;
    const isSelected = buttonData.value === selectedView;
    const buttonClassName = `Kalend__header_calendar_button${isSelected ? '-selected' : ''}`;
    const textClassName = `Kalend__text Kalend__header_calendar_button-text${isSelected ? '-selected' : ''}`;
    const navigateFunction = ()=>{
        if (handleClose) handleClose();
        setViewChanged(buttonData.value);
    };
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f7dc25aaa4235907$export$2e2bcd8739ae039), {
        className: (0, $bf7b38bce41ca3dd$export$cf733e3bd5432c08)(buttonClassName, isMobile || isForcedMobile, isDark),
        isDark: isDark,
        onClick: navigateFunction,
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
            className: (0, $bf7b38bce41ca3dd$export$cf733e3bd5432c08)(textClassName, isMobile, isDark),
            children: buttonData.label
        })
    });
};
const $6188babcb8da6286$export$72c130881ba16236 = (disabledViews)=>{
    if (!disabledViews || disabledViews && (disabledViews === null || disabledViews === void 0 ? void 0 : disabledViews.length) + 1 !== Object.values((0, $e4750b0ebeed8e48$export$ec9758e21af63072)).length) return false;
    return true;
};
/**
 * Buttons for switching calendar view in desktop layout
 * @constructor
 */ const $6188babcb8da6286$var$HeaderCalendarButtons = (props)=>{
    const { setViewChanged: setViewChanged, handleClose: handleClose, isForcedMobile: isForcedMobile } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isDark: isDark, isMobile: isMobile, translations: translations, config: config } = store;
    const { disabledViews: disabledViews } = config;
    return $6188babcb8da6286$export$72c130881ba16236(disabledViews) ? null : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: (0, $bf7b38bce41ca3dd$export$cf733e3bd5432c08)('Kalend__header_calendar_buttons__container', !!(isMobile || isForcedMobile), isDark),
        children: [
            !(disabledViews === null || disabledViews === void 0 ? void 0 : disabledViews.includes((0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA)) ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)($6188babcb8da6286$var$HeaderCalendarButton, {
                buttonData: {
                    label: translations['buttons']['agenda'],
                    value: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA
                },
                setViewChanged: setViewChanged,
                handleClose: handleClose,
                isForcedMobile: isForcedMobile
            }) : null,
            !(disabledViews === null || disabledViews === void 0 ? void 0 : disabledViews.includes((0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY)) ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)($6188babcb8da6286$var$HeaderCalendarButton, {
                buttonData: {
                    label: translations['buttons']['day'],
                    value: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY
                },
                setViewChanged: setViewChanged,
                handleClose: handleClose,
                isForcedMobile: isForcedMobile
            }) : null,
            !(disabledViews === null || disabledViews === void 0 ? void 0 : disabledViews.includes((0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS)) ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)($6188babcb8da6286$var$HeaderCalendarButton, {
                buttonData: {
                    label: translations['buttons']['threeDays'],
                    value: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS
                },
                setViewChanged: setViewChanged,
                handleClose: handleClose,
                isForcedMobile: isForcedMobile
            }) : null,
            !(disabledViews === null || disabledViews === void 0 ? void 0 : disabledViews.includes((0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK)) ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)($6188babcb8da6286$var$HeaderCalendarButton, {
                buttonData: {
                    label: translations['buttons']['week'],
                    value: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK
                },
                setViewChanged: setViewChanged,
                handleClose: handleClose,
                isForcedMobile: isForcedMobile
            }) : null,
            !(disabledViews === null || disabledViews === void 0 ? void 0 : disabledViews.includes((0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH)) ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)($6188babcb8da6286$var$HeaderCalendarButton, {
                buttonData: {
                    label: translations['buttons']['month'],
                    value: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH
                },
                setViewChanged: setViewChanged,
                handleClose: handleClose,
                isForcedMobile: isForcedMobile
            }) : null
        ]
    });
};
var $6188babcb8da6286$export$2e2bcd8739ae039 = $6188babcb8da6286$var$HeaderCalendarButtons;


const $95f304efc96ef4c9$var$CalendarViewDropdown = (props)=>{
    const { setViewChanged: setViewChanged } = props;
    const [isOpen, setOpen] = (0, $cw6c3$react.useState)(false);
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { config: config, isMobile: isMobile, selectedView: selectedView, translations: translations } = store;
    const { isDark: isDark, disabledViews: disabledViews, disableMobileDropdown: disableMobileDropdown } = config;
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const preventDefault = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    return isMobile && (disableMobileDropdown || (0, $6188babcb8da6286$export$72c130881ba16236)(disabledViews)) || (0, $6188babcb8da6286$export$72c130881ba16236)(disabledViews) ? null : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $cw6c3$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
            className: 'Kalend__CalendarViewDropdown__wrapper',
            children: [
                isMobile ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $224cea852abf103b$export$2e2bcd8739ae039), {
                    isDark: isDark,
                    onClick: handleOpen,
                    children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1c7a61445362ebf7$export$a9676248d3e54baf).More, {
                        className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('icon-svg', isDark)
                    })
                }, 'calendar') : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f7dc25aaa4235907$export$2e2bcd8739ae039), {
                    isDark: isDark,
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__ButtonBase-border', isDark),
                    onClick: handleOpen,
                    text: (0, $bf7b38bce41ca3dd$export$205aaf06acb1c5fc)(selectedView, translations)
                }),
                isOpen ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    className: 'Kalend__CalendarViewDropdown__backdrop',
                    onClick: handleClose
                }) : null,
                isOpen ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__CalendarViewDropdown__container', isDark),
                    children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                        className: 'Kalend__CalendarViewDropdown__container-content',
                        onClick: preventDefault,
                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $6188babcb8da6286$export$2e2bcd8739ae039), {
                            disabledViews: disabledViews,
                            setViewChanged: setViewChanged,
                            handleClose: handleClose,
                            isForcedMobile: true
                        })
                    })
                }) : null
            ]
        })
    });
};
var $95f304efc96ef4c9$export$2e2bcd8739ae039 = $95f304efc96ef4c9$var$CalendarViewDropdown;





const $d2b46716a1f3a2a1$var$DesktopLayout = (props)=>{
    const { children: children } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isMobile: isMobile } = store;
    return !isMobile ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__DesktopLayout',
        children: children
    }) : null;
};
var $d2b46716a1f3a2a1$export$2e2bcd8739ae039 = $d2b46716a1f3a2a1$var$DesktopLayout;







/**
 * Calendar title in header in month date format
 * @param props
 * @constructor
 */ const $e8a58db0b7f8e0e1$var$HeaderCalendarTitle = (props)=>{
    const { title: title } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isDark: isDark, isMobile: isMobile } = store;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: (0, $bf7b38bce41ca3dd$export$cf733e3bd5432c08)(`Kalend__HeaderCalendarTitle__container`, isMobile),
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
            className: (0, $bf7b38bce41ca3dd$export$cf733e3bd5432c08)('Kalend__text Kalend__HeaderCalendarTitle', isMobile, isDark),
            children: title
        })
    });
};
var $e8a58db0b7f8e0e1$export$2e2bcd8739ae039 = $e8a58db0b7f8e0e1$var$HeaderCalendarTitle;





const $60dd5ae4676e5d2e$var$MobileLayout = (props)=>{
    const { children: children, style: style } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isMobile: isMobile } = store;
    return isMobile ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__MobileLayout',
        style: style,
        children: children
    }) : null;
};
var $60dd5ae4676e5d2e$export$2e2bcd8739ae039 = $60dd5ae4676e5d2e$var$MobileLayout;


/**
 * Title with calendar navigation buttons for desktop layout
 * @param props
 * @constructor
 */ const $21db0de5ba63f204$var$CalendarDesktopNavigation = (props)=>{
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { config: config, calendarDays: calendarDays, selectedView: selectedView, selectedDate: selectedDate, isMobile: isMobile, width: width, translations: translations } = store;
    const { weekDayStart: weekDayStart, isDark: isDark } = config;
    const [isFullNavigationHidden, setIsFullNavigationHidden] = (0, $cw6c3$react.useState)(true);
    const titleDate = (0, $cw6c3$luxon.DateTime).fromISO(selectedDate);
    const title = `${translations['months'][`${titleDate.toFormat('MMMM').toLowerCase()}`]} ${titleDate.toFormat('yyyy')}`;
    const navigateBackwards = async ()=>{
        setContext('calendarContent', null);
        setContext('direction', (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).BACKWARDS);
        (0, $63103f0ef67d319d$export$3d0db7ed812b6b3f)(calendarDays, selectedView, (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).BACKWARDS, weekDayStart, setContext);
    };
    const navigateForward = async ()=>{
        setContext('calendarContent', null);
        setContext('direction', (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).FORWARD);
        (0, $63103f0ef67d319d$export$3d0db7ed812b6b3f)(calendarDays, selectedView, (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).FORWARD, weekDayStart, setContext);
    };
    const navigateToTodayDate = async ()=>{
        setContext('calendarContent', null);
        setContext('direction', (0, $e4750b0ebeed8e48$export$c2bed76d77ee7287).TODAY);
        await (0, $63103f0ef67d319d$export$28b655052872eb26)(selectedView, setContext, weekDayStart, (0, $cw6c3$luxon.DateTime).now());
    };
    // handle showing  full desktop navigation panel or dropdown for
    // different screen size
    (0, $cw6c3$react.useEffect)(()=>{
        const element = document.querySelector((0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('.Kalend__CalendarDesktopNavigation__container', isDark));
        if (element) {
            if (element) {
                if (element.getBoundingClientRect().width <= 950) setIsFullNavigationHidden(true);
                else setIsFullNavigationHidden(false);
            }
        }
    }, [
        width
    ]);
    // add funcs to ref
    (0, $cw6c3$react.useEffect)(()=>{
        if (props.kalendRef) props.kalendRef.current = {
            navigateToTodayDate: navigateToTodayDate,
            navigateForward: navigateForward,
            navigateBackwards: navigateBackwards
        };
    }, []);
    (0, $cw6c3$react.useEffect)(()=>{
        if (props.kalendRef) props.kalendRef.current = {
            navigateToTodayDate: navigateToTodayDate,
            navigateForward: navigateForward,
            navigateBackwards: navigateBackwards
        };
    }, [
        selectedView,
        calendarDays[0].toString()
    ]);
    return props.kalendRef ? null : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: (0, $bf7b38bce41ca3dd$export$cf733e3bd5432c08)('Kalend__CalendarDesktopNavigation__container', isMobile, isDark),
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    width: isMobile ? '100%' : 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $d2b46716a1f3a2a1$export$2e2bcd8739ae039), {
                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                            className: 'Kalend__CalendarDesktopNavigation__buttons',
                            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f7dc25aaa4235907$export$2e2bcd8739ae039), {
                                        className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__ButtonBase-border', isDark),
                                        isDark: isDark,
                                        onClick: navigateToTodayDate,
                                        children: translations['buttons']['today']
                                    }),
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $224cea852abf103b$export$2e2bcd8739ae039), {
                                        isDark: isDark,
                                        onClick: navigateBackwards,
                                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1c7a61445362ebf7$export$a9676248d3e54baf).ChevronLeft, {
                                            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__icon-svg', isDark)
                                        })
                                    }, 'left'),
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $224cea852abf103b$export$2e2bcd8739ae039), {
                                        isDark: isDark,
                                        onClick: navigateForward,
                                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1c7a61445362ebf7$export$a9676248d3e54baf).ChevronRight, {
                                            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__icon-svg', isDark)
                                        })
                                    }, 'right')
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $e8a58db0b7f8e0e1$export$2e2bcd8739ae039), {
                        title: title
                    }),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $60dd5ae4676e5d2e$export$2e2bcd8739ae039), {
                        style: {
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                            className: 'Kalend__CalendarDesktopNavigation__buttons',
                            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $224cea852abf103b$export$2e2bcd8739ae039), {
                                        isDark: isDark,
                                        onClick: navigateBackwards,
                                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1c7a61445362ebf7$export$a9676248d3e54baf).ChevronLeft, {
                                            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__icon-svg', isDark)
                                        })
                                    }, 'left'),
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $224cea852abf103b$export$2e2bcd8739ae039), {
                                        isDark: isDark,
                                        onClick: navigateForward,
                                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1c7a61445362ebf7$export$a9676248d3e54baf).ChevronRight, {
                                            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__icon-svg', isDark)
                                        })
                                    }, 'right'),
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $224cea852abf103b$export$2e2bcd8739ae039), {
                                        isDark: isDark,
                                        onClick: navigateToTodayDate,
                                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $1c7a61445362ebf7$export$a9676248d3e54baf).Calendar, {
                                            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__icon-svg', isDark)
                                        })
                                    }, 'calendar'),
                                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $95f304efc96ef4c9$export$2e2bcd8739ae039), {
                                        disabledViews: props.disabledViews,
                                        setViewChanged: props.setViewChanged,
                                        disableMobileDropdown: props.disableMobileDropdown
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    marginRight: 12,
                    justifyContent: 'flex-end',
                    flex: 'auto'
                },
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $d2b46716a1f3a2a1$export$2e2bcd8739ae039), {
                    children: isFullNavigationHidden ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $95f304efc96ef4c9$export$2e2bcd8739ae039), {
                        disabledViews: props.disabledViews,
                        setViewChanged: props.setViewChanged,
                        disableMobileDropdown: props.disableMobileDropdown
                    }) : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $6188babcb8da6286$export$2e2bcd8739ae039), {
                        disabledViews: props.disabledViews,
                        setViewChanged: props.setViewChanged
                    })
                })
            })
        ]
    });
};
var $21db0de5ba63f204$export$2e2bcd8739ae039 = $21db0de5ba63f204$var$CalendarDesktopNavigation;











const $9a525da4604d3f07$var$CalendarHeaderColText = (props)=>{
    const { children: children } = props;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__CalendarHeaderColText__container',
        children: children
    });
};
var $9a525da4604d3f07$export$2e2bcd8739ae039 = $9a525da4604d3f07$var$CalendarHeaderColText;











const $2a3380b4418c18d4$var$CalendarHeaderCol = (props)=>{
    const { children: children } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isDark: isDark, selectedView: selectedView } = store;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: `${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__CalendarHeaderCol', isDark)}${selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH ? '-month' : ''}`,
        children: children
    });
};
var $2a3380b4418c18d4$export$2e2bcd8739ae039 = $2a3380b4418c18d4$var$CalendarHeaderCol;




/**
 * Get numeric representation of days
 *
 * @param props
 * @constructor
 */ const $0c3afbe9f694dbf0$var$CalendarHeaderDates = (props)=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { width: width, isMobile: isMobile, selectedView: selectedView } = store;
    const { daysNum: daysNum, calendarDays: calendarDays } = props;
    const colWidth = (0, $bf7b38bce41ca3dd$export$b32ccbc1ca23891)(width, isMobile, selectedView) / daysNum;
    const renderNumericDays = ()=>calendarDays.map((calendarDay)=>{
            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $ecf585202d453fcb$export$2e2bcd8739ae039), {
                width: colWidth,
                day: calendarDay,
                setViewChanged: props.setViewChanged
            }, calendarDay.toString());
        });
    const numericDays = renderNumericDays();
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $2a3380b4418c18d4$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $9a525da4604d3f07$export$2e2bcd8739ae039), {
            children: numericDays
        })
    });
};
var $0c3afbe9f694dbf0$export$2e2bcd8739ae039 = $0c3afbe9f694dbf0$var$CalendarHeaderDates;









/**
 * Render text representation of days
 *
 * @param props
 * @constructor
 */ const $386a7bec00aa15a1$var$CalendarHeaderWeekDays = (props)=>{
    const { daysNum: daysNum, days: days } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { width: width, selectedView: selectedView, isMobile: isMobile, config: config, translations: translations } = store;
    const { weekDayStart: weekDayStart } = config;
    const isMonthView = selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH;
    const colWidth = isMonthView ? width / daysNum : (0, $bf7b38bce41ca3dd$export$b32ccbc1ca23891)(width, isMobile, selectedView) / daysNum;
    const weekDays = weekDayStart === (0, $e4750b0ebeed8e48$export$5a05f7ffc0500403).SUNDAY ? (0, $1500da26cef85c66$export$88e7cb308ec58e48) : (0, $1500da26cef85c66$export$933d53aed74a6ef0);
    const renderDaysText = ()=>{
        const dayTextColumnWidth = {
            width: colWidth
        };
        if (isMonthView) return weekDays.map((day)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__CalendarHeaderWeekDays__col',
                style: dayTextColumnWidth,
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__text Kalend__CalendarHeaderWeekDays__text', store.isDark),
                    children: translations['weekDays'][`${day}`]
                })
            }, day));
        return days.map((calendarDay)=>/*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $0689dc746d054cae$export$2e2bcd8739ae039), {
                day: calendarDay,
                width: colWidth
            }, calendarDay.toString()));
    };
    const namesForDays = renderDaysText();
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__CalendarHeaderWeekDays__wrapper',
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
            className: 'Kalend__CalendarHeaderWeekDays__container',
            children: namesForDays
        })
    });
};
var $386a7bec00aa15a1$export$2e2bcd8739ae039 = $386a7bec00aa15a1$var$CalendarHeaderWeekDays;







const $a214409a8fa5f760$var$CalendarHeaderWrapper = (props)=>{
    const { children: children, isMonthView: isMonthView } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { width: width, rawWidth: rawWidth, isDark: isDark, showWeekNumbers: showWeekNumbers } = store;
    const headerStyle = {
        paddingLeft: isMonthView ? showWeekNumbers ? 30 : 0 : (0, $88a08af890f49243$export$447c5938f45c45a5),
        width: isMonthView && !showWeekNumbers ? rawWidth : width
    };
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__CalendarHeaderCol', isDark),
        style: headerStyle,
        children: children
    });
};
var $a214409a8fa5f760$export$2e2bcd8739ae039 = $a214409a8fa5f760$var$CalendarHeaderWrapper;


const $2d4e959c42b07254$var$CalendarHeaderDays = (props)=>{
    const { isMonthView: isMonthView } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { calendarDays: calendarDays, selectedDate: selectedDate, selectedView: selectedView, showWeekNumbers: showWeekNumbers, translations: translations } = store;
    const daysNum = isMonthView ? 7 : calendarDays.length;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $a214409a8fa5f760$export$2e2bcd8739ae039), {
        isMonthView: isMonthView,
        children: [
            !isMonthView && selectedView !== (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA && showWeekNumbers ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    position: 'absolute',
                    left: 8
                },
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("p", {
                    className: 'Kalend__WeekNumbersCol__text-weekdays',
                    children: [
                        translations['weekShort'],
                        selectedDate.weekNumber
                    ]
                })
            }) : null,
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $9a525da4604d3f07$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $386a7bec00aa15a1$export$2e2bcd8739ae039), {
                    daysNum: daysNum,
                    days: calendarDays
                })
            }),
            !isMonthView ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $9a525da4604d3f07$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $0c3afbe9f694dbf0$export$2e2bcd8739ae039), {
                    calendarDays: calendarDays,
                    daysNum: daysNum,
                    setViewChanged: props.setViewChanged
                })
            }) : null
        ]
    });
};
var $2d4e959c42b07254$export$2e2bcd8739ae039 = $2d4e959c42b07254$var$CalendarHeaderDays;








const $89f45f2bf33757e0$var$CalendarHeaderEvents = ()=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { selectedView: selectedView, width: width, calendarDays: calendarDays } = store;
    const renderEvents = (data, sequence)=>{
        return data === null || data === void 0 ? void 0 : data.map((item)=>{
            // const item: any = keyValue[1];
            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b852c5f3008abacb$export$2e2bcd8739ae039), {
                item: item,
                type: (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).HEADER
            }, `${item.event.id}${item.event.internalID ? item.event.internalID : ''}` + sequence);
        });
    };
    const column = width / (0, $1500da26cef85c66$export$f16d393a3268e3f3)(selectedView);
    const colWidthStyle = {
        width: column
    };
    const daysNumbers = calendarDays.map((calendarDay)=>{
        return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
            className: 'Kalend__CalendarHeaderEvents__col-wrapper',
            style: colWidthStyle
        }, calendarDay.toString());
    });
    const [headerEvents, setHeaderEvents] = (0, $cw6c3$react.useState)(null);
    const headerStyle = {
        // paddingLeft: CALENDAR_OFFSET_LEFT,
        height: store.headerEventRowsCount + 20
    };
    // useEffect(() => {
    //   // setTimeout(() => {
    //   setContext('height', getHeight());
    //   // }, 600);
    // }, [store.headerEventRowsCount]);
    // useEffect(() => {
    //   // set animation
    //   setAnimation('Kalend__CalendarHeaderEvents_animationExpand');
    //   // clean animation
    //   setTimeout(() => {
    //     setAnimation('');
    //   }, 600);
    // }, [store.headerEventRowsCount]);
    (0, $cw6c3$react.useEffect)(()=>{
        const headerEventsRaw = renderEvents(store.headerLayout, store.layoutUpdateSequence + 1);
        setHeaderEvents(headerEventsRaw);
    }, [
        JSON.stringify(store.headerLayout)
    ]);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: `Kalend__CalendarHeaderEvents__container`,
        style: headerStyle,
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__CalendarHeaderEvents__row',
                children: daysNumbers
            }),
            headerEvents
        ]
    });
};
var $89f45f2bf33757e0$export$2e2bcd8739ae039 = $89f45f2bf33757e0$var$CalendarHeaderEvents;


const $58f20473f1f0067a$var$CalendarHeader = (props)=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { isDark: isDark, width: width, selectedView: selectedView } = store;
    const isDayView = selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY;
    const isMonthView = selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH;
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: `Kalend__CalendarHeader${!isMonthView ? '-tall' : ''}${isDayView ? '-day' : ''}${isMonthView ? '-small' : ''}${isDark ? '-dark' : ''}`,
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $2d4e959c42b07254$export$2e2bcd8739ae039), {
                width: width,
                isMonthView: isMonthView,
                setViewChanged: props.setViewChanged
            }),
            !isMonthView && store.headerLayout && store.headerLayout.length ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $89f45f2bf33757e0$export$2e2bcd8739ae039), {}) : null
        ]
    });
};
var $58f20473f1f0067a$export$2e2bcd8739ae039 = $58f20473f1f0067a$var$CalendarHeader;







const $f89b7b16d8022e68$var$CalendarTableLayoutLayer = (props)=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { calendarDays: calendarDays, selectedView: selectedView, callbacks: callbacks, config: config, width: width, direction: direction } = store;
    const [isMounted, setIsMounted] = (0, $cw6c3$react.useState)(false);
    (0, $cw6c3$react.useEffect)(()=>{
        const rootEl = document.querySelector('.Kalend__Calendar__table');
        if (rootEl) setIsMounted(true);
    }, [
        document.querySelector('.Kalend__Calendar__table')
    ]);
    // Expose basic state to outside
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (callbacks.onStateChange && isMounted) {
            const data = {
                selectedView: selectedView,
                calendarDays: calendarDays,
                range: (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, (0, $1500da26cef85c66$export$fef151b94550e9f5)(calendarDays)), {
                    direction: direction
                }),
                width: width,
                config: config,
                isMobile: store.isMobile,
                height: store.height,
                selectedDate: store.selectedDate.toUTC().toString()
            };
            callbacks.onStateChange(data);
        }
    }, [
        selectedView,
        JSON.stringify(calendarDays),
        width,
        JSON.stringify(config),
        store.isMobile,
        isMounted,
        direction
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        if (callbacks.onStateChange && isMounted) {
            const data = {
                selectedView: selectedView,
                calendarDays: calendarDays,
                range: (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, (0, $1500da26cef85c66$export$fef151b94550e9f5)(calendarDays)), {
                    direction: direction
                }),
                width: width,
                config: config,
                isMobile: store.isMobile,
                height: store.height,
                selectedDate: store.selectedDate.toUTC().toString()
            };
            callbacks.onStateChange(data);
        }
    }, []);
    return isMounted ? props.children : null;
};
var $f89b7b16d8022e68$export$2e2bcd8739ae039 = $f89b7b16d8022e68$var$CalendarTableLayoutLayer;















const $db9a28e0bd6328b4$var$getOffsetTop = (hour, format, hourHeight, isAfter12)=>{
    if (format === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_24) return (parseInt(hour) - 12) * hourHeight - 4;
    if (format === (0, $e4750b0ebeed8e48$export$c4e1e4e065ff5bd8).H_12 && !isAfter12) return parseInt(hour) * hourHeight - 4;
    else return (parseInt(hour) + 12) * hourHeight - 4;
};
const $db9a28e0bd6328b4$var$renderHours = (width, hourHeight, isDark, timeFormat)=>{
    let isAfter12 = false;
    return (0, $bf7b38bce41ca3dd$export$d9b78e6f3f437c1f)(timeFormat).map((hour)=>{
        if (hour === '1 PM') isAfter12 = true;
        return hour === '00' || hour === '24' || hour === '0 AM' || hour === '24 PM' ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
            className: 'Kalend__CalendarBodyHours__container',
            style: {
                minHeight: hourHeight
            }
        }, hour) : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
            className: 'Kalend__CalendarBodyHours__container',
            style: {
                minHeight: hourHeight
            },
            children: [
                /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__text Kalend__CalendarBodyHours__text', isDark),
                    style: {
                        top: $db9a28e0bd6328b4$var$getOffsetTop(hour, timeFormat, hourHeight, isAfter12),
                        left: 10
                    },
                    children: hour
                }),
                /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__text Kalend__CalendarBodyHours__line', isDark),
                    style: {
                        width: width - (0, $88a08af890f49243$export$447c5938f45c45a5)
                    }
                })
            ]
        }, hour);
    });
};
const $db9a28e0bd6328b4$var$CalendarBodyHours = ()=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { width: width, config: config, isDark: isDark, height: height } = store;
    const { hourHeight: hourHeight, timeFormat: timeFormat } = config;
    const hours = $db9a28e0bd6328b4$var$renderHours(width, hourHeight, isDark, timeFormat);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__CalendarBodyHours__wrapper',
        style: {
            height: height
        },
        children: hours
    });
};
var $db9a28e0bd6328b4$export$2e2bcd8739ae039 = $db9a28e0bd6328b4$var$CalendarBodyHours;









const $b867b3e906676344$var$renderVerticalLines = (calendarDays, width, height, hourHeight, isDark, isMobile, selectedView)=>{
    const columnWidth = (0, $bf7b38bce41ca3dd$export$b32ccbc1ca23891)(width, isMobile, selectedView) / calendarDays.length;
    return calendarDays.map((calendarDay, index)=>{
        const style = {
            left: columnWidth * index + (selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH ? 0 : (0, $88a08af890f49243$export$447c5938f45c45a5)),
            height: hourHeight * 12
        };
        if (index > 0) return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
            style: style,
            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__DaysViewVerticalLine__line', isDark)
        }, index);
    });
};
const $b867b3e906676344$var$DaysViewVerticalLines = ()=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { calendarDays: calendarDays, width: width, isDark: isDark, height: height, config: config, isMobile: isMobile, selectedView: selectedView } = store;
    const verticalLines = $b867b3e906676344$var$renderVerticalLines(selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH ? calendarDays.slice(0, 7) : calendarDays, width, height, config.hourHeight, isDark, isMobile, selectedView);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $cw6c3$reactjsxruntime.Fragment), {
        children: verticalLines
    });
};
var $b867b3e906676344$export$2e2bcd8739ae039 = $b867b3e906676344$var$DaysViewVerticalLines;



var $jhaH7 = parcelRequire("jhaH7");
const $be26fc4a0d3aa4a6$var$renderOneDay = (calendarDays, events, sequence)=>{
    return calendarDays.map((calendarDay, index)=>{
        const formattedDayString = (0, $bf7b38bce41ca3dd$export$6a8d31c8b7f17aa5)(calendarDay);
        return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $17d79b7922eec8b8$export$2e2bcd8739ae039), {
            day: calendarDay,
            index: index,
            data: events ? events[formattedDayString] : []
        }, formattedDayString + sequence);
    });
};
const $be26fc4a0d3aa4a6$var$DaysViewTable = (props)=>{
    const { events: events } = props;
    const [wasInit, setWasInit] = (0, $cw6c3$react.useState)(false);
    const [calendarContent, setCalendarContent] = (0, $cw6c3$react.useState)(null);
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { isMobile: isMobile, calendarDays: calendarDays, width: width, selectedView: selectedView, height: height, config: config } = store;
    const style = {
        paddingLeft: (0, $88a08af890f49243$export$447c5938f45c45a5),
        // width: '100%',
        height: '100%'
    };
    const adjustScrollPosition = ()=>{
        const currentElement = document.getElementById(`Kalend__timetable`);
        const shift = config.focusHour ? config.focusHour : (0, $cw6c3$luxon.DateTime).now().hour;
        currentElement.scrollTop = shift * config.hourHeight - config.hourHeight;
    };
    (0, $cw6c3$react.useEffect)(()=>{
        if (!store.config.autoScroll) return;
        adjustScrollPosition();
    }, []);
    const hasExternalLayout = props.eventLayouts !== undefined;
    // recalculate event positions on calendarDays change
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (wasInit) {
            if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
                events: events,
                width: width,
                height: height,
                calendarDays: calendarDays,
                config: store.config,
                isMobile: isMobile,
                selectedView: selectedView
            }).then((res)=>{
                setContext('headerLayout', res.headerPositions);
                setContext('headerEventRowsCount', res.headerOffsetTop);
                setContext('daysViewLayout', res.normalPositions);
                setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
                const days = $be26fc4a0d3aa4a6$var$renderOneDay(store.calendarDays, res.normalPositions, store.layoutUpdateSequence + 1);
                setCalendarContent(days);
            });
        }
    }, [
        calendarDays[0],
        selectedView
    ]);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (wasInit) {
            if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
                events: events,
                width: width,
                height: height,
                calendarDays: calendarDays,
                config: store.config,
                isMobile: isMobile,
                selectedView: selectedView
            }).then((res)=>{
                setContext('headerLayout', res.headerPositions);
                setContext('headerEventRowsCount', res.headerOffsetTop);
                setContext('daysViewLayout', res.normalPositions);
                setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
                const days = $be26fc4a0d3aa4a6$var$renderOneDay(store.calendarDays, res.normalPositions, store.layoutUpdateSequence + 1);
                setCalendarContent(days);
            });
        }
    }, [
        width
    ]);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
            events: events,
            width: width,
            height: height,
            calendarDays: calendarDays,
            config: store.config,
            isMobile: isMobile,
            selectedView: selectedView
        }).then((res)=>{
            setContext('headerLayout', res.headerPositions);
            setContext('headerEventRowsCount', res.headerOffsetTop);
            setContext('daysViewLayout', res.normalPositions);
            setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
            const days = $be26fc4a0d3aa4a6$var$renderOneDay(store.calendarDays, res.normalPositions, store.layoutUpdateSequence + 1);
            setCalendarContent(days);
        });
    }, [
        JSON.stringify(events)
    ]);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
            events: events,
            width: width,
            height: height,
            calendarDays: calendarDays,
            config: store.config,
            isMobile: isMobile,
            selectedView: selectedView
        }).then((res)=>{
            setContext('headerLayout', res.headerPositions);
            setContext('headerEventRowsCount', res.headerOffsetTop);
            setContext('daysViewLayout', res.normalPositions);
            setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
            const days = $be26fc4a0d3aa4a6$var$renderOneDay(store.calendarDays, res.normalPositions, store.layoutUpdateSequence + 1);
            setCalendarContent(days);
        });
    }, [
        config.hourHeight
    ]);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
            events: events,
            width: width,
            height: height,
            calendarDays: calendarDays,
            config: store.config,
            isMobile: isMobile,
            selectedView: selectedView
        }).then((res)=>{
            setContext('headerLayout', res.headerPositions);
            setContext('headerEventRowsCount', res.headerOffsetTop);
            setContext('daysViewLayout', res.normalPositions);
            setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
            const days = $be26fc4a0d3aa4a6$var$renderOneDay(store.calendarDays, res.normalPositions, store.layoutUpdateSequence + 1);
            setCalendarContent(days);
        });
        setWasInit(true);
    }, []);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (hasExternalLayout && (0, $bf7b38bce41ca3dd$export$e3e4ea182aca355e)(props.eventLayouts.selectedView) === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK) {
            setContext('headerLayout', props.eventLayouts.headerPositions);
            setContext('headerEventRowsCount', props.eventLayouts.headerOffsetTop);
            setContext('daysViewLayout', props.eventLayouts.normalPositions);
            setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
            const days = $be26fc4a0d3aa4a6$var$renderOneDay(store.calendarDays, props.eventLayouts.normalPositions, store.layoutUpdateSequence + 1);
            setCalendarContent(days);
        }
    }, [
        props.eventLayouts,
        JSON.stringify(props.eventLayouts)
    ]);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        style: style,
        className: 'Kalend__CalendarBody',
        id: `Kalend__timetable`,
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $db9a28e0bd6328b4$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b867b3e906676344$export$2e2bcd8739ae039), {}),
            calendarContent
        ]
    });
};
var $be26fc4a0d3aa4a6$export$2e2bcd8739ae039 = $be26fc4a0d3aa4a6$var$DaysViewTable;



















const $c57d36d3233524f5$export$ca41440b93b2a001 = (event, timezone)=>{
    return (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, event), {
        startAt: (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.startAt, event.timezoneStartAt || timezone).set({
            hour: 0,
            minute: 0,
            second: 1
        }).toString(),
        endAt: (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.endAt, event.timezoneStartAt || timezone).set({
            hour: 23,
            minute: 59,
            second: 59
        }).toString()
    });
};
const $c57d36d3233524f5$export$ebf0f5b49a0a9e59 = (events, width, calendarDays, timezone, setContext)=>{
    var // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _Object_entries;
    // TODO prefilter only relevant events
    // TODO remove used events from main array
    // const formattedDayString: string = formatTimestampToDate(day);
    //
    // const dataForDay: any = events ? events[formattedDayString] : [];
    //
    // const headerEvents: any = renderEvents(calendarBodyWidth, dataForDay);
    //
    // compare each event and find those which can be placed next to each
    // other and are not overlapping
    // form them to row
    const tableSpace = (width + (0, $88a08af890f49243$export$447c5938f45c45a5)) / 100 * (0, $88a08af890f49243$export$b4e2ba6756dec2c);
    const result = [];
    const usedEvents = [];
    // filter only header events
    const headerEventsFiltered = [];
    if (!events) return [
        []
    ];
    (_Object_entries = Object.entries(events)) === null || _Object_entries === void 0 ? void 0 : _Object_entries.map(([key, items])=>{
        // @ts-ignore
        items.forEach((item)=>{
            // filter only relevant events
            if (item.allDay || (0, $bf7b38bce41ca3dd$export$23783ea7bfe28abd)(item)) {
                const isInRange = (0, $585762b051d85803$export$3a6eb9efca632dee)(item, calendarDays, timezone);
                if (isInRange) // correct position when external event ends in next day
                headerEventsFiltered.push(item);
            }
        });
    });
    // find all matching events to fit in one row
    headerEventsFiltered === null || headerEventsFiltered === void 0 ? void 0 : headerEventsFiltered.forEach((event)=>{
        const eventPositionResult = [];
        // check if event was used already
        // skip iteration if event was already resolved
        if (usedEvents.includes(event.id)) return true;
        // set event to row
        const rowWithNotOverlappingEvents = [
            event
        ];
        usedEvents.push(event.id);
        // compare to rest of the events
        headerEventsFiltered.forEach((eventToCompare)=>{
            // check if event was used already
            // skip iteration if event was already resolved
            if (usedEvents.includes(eventToCompare.id)) return true;
            // don't compare to self // maybe remove?
            if (event.id === eventToCompare.id) return true;
            // check if events are not overlapping
            const isOverlapping = (0, $585762b051d85803$export$c212dd23f1f0a1e3)($c57d36d3233524f5$export$ca41440b93b2a001(event, timezone), $c57d36d3233524f5$export$ca41440b93b2a001(eventToCompare, timezone), timezone);
            // found not overlapping matching event
            if (!isOverlapping) {
                let isMatchingAll = true;
                // compare match with other stored events for same row
                rowWithNotOverlappingEvents.forEach((itemFromRow)=>{
                    const isOverlappingAll = (0, $585762b051d85803$export$c212dd23f1f0a1e3)($c57d36d3233524f5$export$ca41440b93b2a001(itemFromRow, timezone), $c57d36d3233524f5$export$ca41440b93b2a001(eventToCompare, timezone), timezone);
                    // prevent merging if only one conflict exists
                    if (isOverlappingAll) isMatchingAll = false;
                });
                if (isMatchingAll) {
                    // store compared event in used array and add to row
                    usedEvents.push(eventToCompare.id);
                    rowWithNotOverlappingEvents.push(eventToCompare);
                }
            }
        });
        // now we have row with only not overlapping events
        // sort events in row by start date
        const sortedResult = rowWithNotOverlappingEvents.sort((a, b)=>(0, $cw6c3$luxon.DateTime).fromISO(a.startAt).toMillis() - (0, $cw6c3$luxon.DateTime).fromISO(b.startAt).toMillis());
        // place events accordingly in row next to each other
        sortedResult.forEach((item)=>{
            let offset = 0;
            let eventWidth = 0;
            let hasMatchingDay = false;
            calendarDays.forEach((day)=>{
                if ((0, $585762b051d85803$export$f917769c218c90fd)(item, day, timezone)) {
                    // set base offset only for first item
                    eventWidth += width;
                    hasMatchingDay = true;
                }
                // increment offset only till we have matching day
                if (!hasMatchingDay) offset += width;
            });
            // create event position data
            const eventPositionData = {
                event: item,
                width: Math.round(eventWidth - tableSpace),
                offsetLeft: offset + (0, $88a08af890f49243$export$447c5938f45c45a5),
                offsetTop: 0,
                height: 20,
                zIndex: 2
            };
            eventPositionResult.push(eventPositionData);
        });
        // save row to result
        result.push(eventPositionResult);
    });
    const formattedResult = {};
    result.forEach((events, index)=>{
        events.forEach((item)=>{
            formattedResult[item.event.id] = (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, item), {
                offsetTop: index * 26
            });
        });
    });
    if (setContext) setContext('headerEventRowsCount', result.length);
    return formattedResult;
};


const $0491e7111fa05a9f$var$formatOverflowingEvents = (events, timezone)=>{
    const result = {};
    if (!events || events.length === 0) return null;
    events.forEach((event)=>{
        const dateTimeStartAt = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.startAt, event.timezoneStartAt || timezone);
        const dateTimeEndAt = (0, $28306200f69a6328$export$6c2618c4afcf6cfb)(event.endAt, event.timezoneStartAt || timezone);
        // get each day for multi day events
        // @ts-ignore
        const differenceInDays = dateTimeEndAt.diff(dateTimeStartAt).days;
        for(let i = 0; i <= differenceInDays; i++){
            const dateKey = (0, $bf7b38bce41ca3dd$export$6a8d31c8b7f17aa5)(dateTimeStartAt.plus({
                days: i
            }));
            if (!result[dateKey]) result[dateKey] = [
                event
            ];
            else result[dateKey] = [
                ...result[dateKey],
                event
            ];
        }
    });
    return result;
};
const $0491e7111fa05a9f$export$89831913a243f8ab = (calendarDays)=>{
    const calendarDaysRows = [];
    let tempArray = [];
    calendarDays.forEach((item, i)=>{
        const index = i + 1;
        if (index % 7 === 0) {
            tempArray.push(item);
            calendarDaysRows.push(tempArray);
            tempArray = [];
        } else tempArray.push(item);
    });
    return calendarDaysRows;
};
const $0491e7111fa05a9f$export$d27f846d3c4971c6 = (events)=>{
    return events.sort((a, b)=>{
        const diffA = (0, $cw6c3$luxon.DateTime).fromISO(a.endAt).toMillis() - (0, $cw6c3$luxon.DateTime).fromISO(a.startAt).toMillis();
        const diffB = (0, $cw6c3$luxon.DateTime).fromISO(b.endAt).toMillis() - (0, $cw6c3$luxon.DateTime).fromISO(b.startAt).toMillis();
        if (diffB > diffA) return 1;
        else if (diffB < diffA) return -1;
        return 0;
    });
};
const $0491e7111fa05a9f$var$getMonthRowPosition = (events, width, calendarDays, timezone, maxEventsVisible)=>{
    var // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _Object_entries;
    const overflowEvents = [];
    const tableSpace = width / 100 * (0, $88a08af890f49243$export$b4e2ba6756dec2c);
    const result = [];
    const usedEvents = [];
    // filter only header events
    const eventsFiltered = [];
    if (!events) return {
        positions: [],
        overflowingEvents: []
    };
    (_Object_entries = Object.entries(events)) === null || _Object_entries === void 0 ? void 0 : _Object_entries.map(([key, items])=>{
        // @ts-ignore
        items.forEach((item)=>{
            // filter only relevant events
            const isInRange = (0, $585762b051d85803$export$3a6eb9efca632dee)(item, calendarDays, timezone);
            if (isInRange) // correct position when external event ends in next day
            eventsFiltered.push(item);
        });
    });
    // sort by length to fit more items in limited space
    const sortedByLength = $0491e7111fa05a9f$export$d27f846d3c4971c6(eventsFiltered);
    // find all matching events to fit in one row
    sortedByLength === null || sortedByLength === void 0 ? void 0 : sortedByLength.forEach((event)=>{
        const eventPositionResult = [];
        // check if event was used already
        // skip iteration if event was already resolved
        if (usedEvents.includes(event.id)) return true;
        // set event to row
        const rowWithNotOverlappingEvents = [
            event
        ];
        usedEvents.push(event.id);
        // compare to rest of the events
        sortedByLength.forEach((eventToCompare)=>{
            // check if event was used already
            // skip iteration if event was already resolved
            if (usedEvents.includes(eventToCompare.id)) return true;
            // don't compare to self // maybe remove?
            if (event.id === eventToCompare.id) return true;
            // check if events are not overlapping
            const isOverlapping = (0, $585762b051d85803$export$c212dd23f1f0a1e3)((0, $c57d36d3233524f5$export$ca41440b93b2a001)(event, timezone), (0, $c57d36d3233524f5$export$ca41440b93b2a001)(eventToCompare, timezone), timezone);
            // found not overlapping matching event
            if (!isOverlapping) {
                let isMatchingAll = true;
                // compare match with other stored events for same row
                rowWithNotOverlappingEvents.forEach((itemFromRow)=>{
                    const isOverlappingAll = (0, $585762b051d85803$export$c212dd23f1f0a1e3)((0, $c57d36d3233524f5$export$ca41440b93b2a001)(itemFromRow, timezone), (0, $c57d36d3233524f5$export$ca41440b93b2a001)(eventToCompare, timezone), timezone);
                    // prevent merging if only one conflict exists
                    if (isOverlappingAll) isMatchingAll = false;
                });
                if (isMatchingAll) {
                    // store compared event in used array and add to row
                    usedEvents.push(eventToCompare.id);
                    rowWithNotOverlappingEvents.push(eventToCompare);
                }
            }
        });
        // now we have row with only not overlapping events
        // sort events in row by duration to fit more events in row
        // const sortedResult: CalendarEvent[] = rowWithNotOverlappingEvents.sort(
        //   (a, b) =>
        //     DateTime.fromISO(a.endAt).toMillis() -
        //     DateTime.fromISO(a.startAt).toMillis() -
        //     (DateTime.fromISO(b.endAt).toMillis() -
        //       DateTime.fromISO(b.startAt).toMillis())
        // );
        // const sortedResult = sortByLength(rowWithNotOverlappingEvents);
        // place events accordingly in row next to each other
        rowWithNotOverlappingEvents.forEach((item)=>{
            let offset = 0;
            let eventWidth = 0;
            let hasMatchingDay = false;
            calendarDays.forEach((day)=>{
                if ((0, $585762b051d85803$export$f917769c218c90fd)(item, day, timezone)) {
                    // set base offset only for first item
                    eventWidth += width;
                    hasMatchingDay = true;
                }
                // increment offset only till we have matching day
                if (!hasMatchingDay) offset += width;
            });
            const isOverflowing = result.length > maxEventsVisible;
            if (!isOverflowing) {
                // create event position data
                const eventPositionData = {
                    event: item,
                    width: Math.round(eventWidth - tableSpace),
                    offsetLeft: offset,
                    offsetTop: 0,
                    height: 20,
                    zIndex: 2
                };
                eventPositionResult.push(eventPositionData);
            } else overflowEvents.push(item);
        });
        // save row to result
        result.push(eventPositionResult);
    });
    const formattedResult = {};
    result.forEach((events, index)=>{
        events.forEach((item)=>{
            formattedResult[item.event.id] = (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, item), {
                offsetTop: index * 25
            });
        });
    });
    return {
        positions: formattedResult,
        overflowingEvents: overflowEvents
    };
};
const $0491e7111fa05a9f$export$ac592545eadc1037 = (events, width, calendarDays, config, maxEventsVisible, // eslint-disable-next-line @typescript-eslint/no-unused-vars
setContext)=>{
    const result = [];
    let overflowingEvents = [];
    // TODO prefilter events for each row
    // split calendar days to rows
    const calendarDaysRows = $0491e7111fa05a9f$export$89831913a243f8ab(calendarDays);
    // get layout for each row
    calendarDaysRows.forEach((row)=>{
        const rowResult = $0491e7111fa05a9f$var$getMonthRowPosition(events, width / 7, row, config.timezone, maxEventsVisible);
        result.push(rowResult.positions);
        overflowingEvents = [
            ...overflowingEvents,
            ...rowResult.overflowingEvents
        ];
    });
    //
    // setContext(
    //   'monthOverflowEvents',
    //   formatOverflowingEvents(overflowingEvents, config.timezone)
    // );
    return {
        result: result,
        overflowingEvents: $0491e7111fa05a9f$var$formatOverflowingEvents(overflowingEvents, config.timezone)
    };
};






var $jhaH7 = parcelRequire("jhaH7");


















const $b1f96b393fd4bbd3$var$Dropdown = (props)=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { translations: translations, height: height } = store;
    const [isVisible, setVisible] = (0, $cw6c3$react.useState)(false);
    const [layout, setLayout] = (0, $cw6c3$react.useState)({
        x: null,
        y: null
    });
    const handleClick = (e)=>{
        const { x: x, y: y } = e.nativeEvent;
        setLayout({
            x: x,
            y: y
        });
        setVisible(true);
    };
    const getStyle = ()=>{
        if (layout.x) return {
            left: layout.x,
            top: layout.y,
            maxWidth: 300,
            maxHeight: height - 24,
            minWidth: 120,
            height: 'auto',
            overflowX: 'hidden',
            overflowY: 'auto'
        };
    };
    // Correct layout
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (isVisible) {
            const element = document.getElementById('Kalend__Dropdown__container');
            if (element) {
                let newX = layout.x;
                let newY = layout.y;
                if (element.offsetHeight + layout.y > window.innerHeight) newY = layout.y - element.offsetHeight;
                if (element.offsetWidth + layout.x > window.innerWidth) newX = layout.x - element.offsetWidth;
                setLayout({
                    x: newX,
                    y: newY
                });
            }
        }
    }, [
        isVisible,
        document.getElementsByClassName('Kalend__Dropdown__container')
    ]);
    const style = getStyle();
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f7dc25aaa4235907$export$2e2bcd8739ae039), {
                className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__Monthview_Event', store.isDark),
                style: {
                    width: props.width,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 20
                },
                onClick: handleClick,
                isDark: store.isDark,
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("p", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__text', !store.isDark),
                    style: {
                        fontSize: 11
                    },
                    children: translations['buttons']['showMore']
                })
            }),
            isVisible ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__Dropdown__backdrop',
                onClick: ()=>setVisible(false),
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__Dropdown__container', store.isDark),
                    id: "Kalend__Dropdown__container",
                    style: style,
                    children: props.children
                })
            }) : null
        ]
    });
};
var $b1f96b393fd4bbd3$export$2e2bcd8739ae039 = $b1f96b393fd4bbd3$var$Dropdown;



const $05ef8620e2e948fa$var$MonthViewButtonMore = (props)=>{
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { width: width, monthOverflowEvents: monthOverflowEvents } = store;
    const { calendarDays: calendarDays } = props;
    const colWidth = width / 7;
    const handleClick = (day, events)=>{
        setContext('showMoreEvents', {
            day: day,
            events: events
        });
    };
    const renderShowMoreButtons = ()=>{
        if (!monthOverflowEvents || !calendarDays || calendarDays.length === 0) return [];
        return calendarDays.map((calendarDay)=>{
            const dateKey = (0, $bf7b38bce41ca3dd$export$6a8d31c8b7f17aa5)(calendarDay);
            const events = monthOverflowEvents[dateKey];
            if (events) return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b1f96b393fd4bbd3$export$2e2bcd8739ae039), {
                onClick: ()=>handleClick(calendarDay, events),
                width: colWidth,
                day: calendarDay,
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("h6", {
                            className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__MonthView_more_title', store.isDark),
                            children: calendarDay.toFormat('dd. MMM')
                        }),
                        events === null || events === void 0 ? void 0 : events.map((event)=>{
                            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b852c5f3008abacb$export$2e2bcd8739ae039), {
                                item: {
                                    event: event
                                },
                                type: (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).SHOW_MORE_MONTH
                            }, `${event.id}${event.internalID ? event.internalID : ''}`);
                        })
                    ]
                })
            }, calendarDay.toString());
            else return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                style: {
                    width: colWidth,
                    visibility: 'hidden'
                }
            }, calendarDay.toString());
        });
    };
    const showMoreButtons = renderShowMoreButtons();
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 1,
            left: 0
        },
        children: showMoreButtons
    });
};
var $05ef8620e2e948fa$export$2e2bcd8739ae039 = $05ef8620e2e948fa$var$MonthViewButtonMore;


const $c4cfd121d9d256dd$var$MonthWeekRow = (props)=>{
    const { days: days, index: index, itemRows: itemRows } = props;
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const { monthLayout: monthLayout } = store;
    const renderEvents = (data, i)=>{
        if (!data || !(data === null || data === void 0 ? void 0 : data[i])) return [];
        return itemRows.map((item)=>{
            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b852c5f3008abacb$export$2e2bcd8739ae039), {
                item: (0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, item),
                meta: item.meta,
                type: (0, $e4750b0ebeed8e48$export$76a2e4c433c23bb9).MONTH,
                index: i
            }, `${item.event.id}${item.event.internalID ? item.event.internalID : ''}`);
        });
    };
    const events = renderEvents(monthLayout, index);
    // const style: { maxHeight: number } = { maxHeight: height / 6 - 30 };
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: `${(0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__MonthWeekRow__container', store.isDark)} ${index > 4 ? '--no-border' : ''}`,
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__MonthWeekRow__day',
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $0c3afbe9f694dbf0$export$2e2bcd8739ae039), {
                    calendarDays: days,
                    daysNum: 7,
                    setViewChanged: props.setViewChanged
                })
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__MonthWeekRow__container-events',
                children: events
            }),
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $05ef8620e2e948fa$export$2e2bcd8739ae039), {
                calendarDays: days
            })
        ]
    });
};
var $c4cfd121d9d256dd$export$2e2bcd8739ae039 = $c4cfd121d9d256dd$var$MonthWeekRow;


const $4e630ae36e00686b$var$renderOneRow = (days, eventRows, sequence, setViewChanged)=>{
    const rows = (0, $0491e7111fa05a9f$export$89831913a243f8ab)(days);
    return rows.map((row, index)=>{
        return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $c4cfd121d9d256dd$export$2e2bcd8739ae039), {
            days: row,
            index: index,
            itemRows: eventRows ? eventRows[index] : [],
            sequence: sequence,
            setViewChanged: setViewChanged
        }, row[0].toString() + sequence);
    });
};
const $4e630ae36e00686b$var$MonthView = (props)=>{
    const [wasInit, setWasInit] = (0, $cw6c3$react.useState)(false);
    const [calendarContent, setCalendarContent] = (0, $cw6c3$react.useState)(null);
    const { events: events } = props;
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { rawWidth: rawWidth, width: width, calendarDays: calendarDays, height: height, showWeekNumbers: showWeekNumbers } = store;
    const style = {
        width: showWeekNumbers ? width : rawWidth,
        height: '100%'
    };
    const hasExternalLayout = props.eventLayouts !== undefined;
    (0, $cw6c3$react.useEffect)(()=>{
        if (height !== 0) {
            if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
                events: events,
                width: showWeekNumbers ? width : rawWidth,
                height: height,
                calendarDays: calendarDays,
                config: store.config,
                selectedView: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH
            }).then((res)=>{
                setWasInit(true);
                setContext('monthLayout', res.positions);
                setContext('monthOverflowEvents', res.overflowingEvents);
                setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
                const content = $4e630ae36e00686b$var$renderOneRow(calendarDays, res.positions, store.layoutUpdateSequence, props.setViewChanged);
                setCalendarContent(content);
            });
        }
    }, [
        height,
        rawWidth
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        if (wasInit && height !== 0) {
            if (!hasExternalLayout) (0, (/*@__PURE__*/$parcel$interopDefault($jhaH7)))({
                events: events,
                width: showWeekNumbers ? width : rawWidth,
                height: height,
                calendarDays: calendarDays,
                config: store.config,
                selectedView: (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH
            }).then((res)=>{
                setContext('monthLayout', res.positions);
                setContext('monthOverflowEvents', res.overflowingEvents);
                setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
                const content = $4e630ae36e00686b$var$renderOneRow(calendarDays, res.positions, store.layoutUpdateSequence, props.setViewChanged);
                setCalendarContent(content);
            });
        }
    }, [
        calendarDays[0],
        JSON.stringify(events)
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        if (hasExternalLayout && (0, $bf7b38bce41ca3dd$export$e3e4ea182aca355e)(props.eventLayouts.selectedView) === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH) {
            setContext('monthLayout', props.eventLayouts.positions);
            setContext('monthOverflowEvents', props.eventLayouts.overflowingEvents);
            setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
            const content = $4e630ae36e00686b$var$renderOneRow(calendarDays, props.eventLayouts.positions, store.layoutUpdateSequence, props.setViewChanged);
            setCalendarContent(content);
        }
    }, [
        JSON.stringify(props.eventLayouts)
    ]);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
        className: 'Kalend__MonthView__container',
        style: style,
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $b867b3e906676344$export$2e2bcd8739ae039), {}),
            calendarContent
        ]
    });
};
var $4e630ae36e00686b$export$2e2bcd8739ae039 = $4e630ae36e00686b$var$MonthView;





const $7b4ef3e16846642d$var$renderCols = (calendarDays, translations)=>{
    return calendarDays.map((item, index)=>{
        if (index % 7 === 0 && index < 35) {
            const weekNum = item.weekNumber;
            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__WeekNumbersCol__container',
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("p", {
                    className: 'Kalend__WeekNumbersCol__text',
                    children: [
                        translations['weekShort'],
                        weekNum
                    ]
                })
            }, item.toString());
        } else if (index % 7 === 0 && index >= 35) {
            const weekNum = item.weekNumber;
            return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__WeekNumbersCol__container--no-border',
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("p", {
                    className: 'Kalend__WeekNumbersCol__text',
                    children: [
                        translations['weekShort'],
                        weekNum
                    ]
                })
            }, item.toString());
        }
    });
};
const $7b4ef3e16846642d$var$WeekNumbersCol = ()=>{
    const [store] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const cols = $7b4ef3e16846642d$var$renderCols(store.calendarDays, store.translations);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__WeekNumbersCol__wrapper',
        children: cols
    });
};
var $7b4ef3e16846642d$export$2e2bcd8739ae039 = $7b4ef3e16846642d$var$WeekNumbersCol;


const $2c06f9532bb9aaf9$var$Calendar = (props)=>{
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { selectedDate: selectedDate, calendarDays: calendarDays, selectedView: selectedView, callbacks: callbacks, config: config, width: width } = store;
    const [prevView, setPrevView] = (0, $cw6c3$react.useState)('');
    const [viewChanged, setViewChanged] = (0, $cw6c3$react.useState)(null);
    (0, $cw6c3$react.useEffect)(()=>{
        const initialDate = props.initialDate ? (0, $cw6c3$luxon.DateTime).fromISO(props.initialDate) : (0, $cw6c3$luxon.DateTime).now();
        setContext('selectedDate', initialDate);
        if (selectedView) {
            const calendarDaysInitial = (0, $1500da26cef85c66$export$e75d169fad6edf5f)(selectedView, initialDate, config.weekDayStart);
            setContext('calendarDays', calendarDaysInitial);
        }
    }, []);
    (0, $cw6c3$react.useEffect)(()=>{
        const viewChangedValue = props.selectedView || viewChanged;
        // if (props.selectedView && props.selectedView === selectedView) {
        //   return;
        // }
        if (prevView === viewChangedValue) return;
        if (!viewChangedValue) return;
        if (callbacks.onSelectView) callbacks.onSelectView(viewChangedValue);
        setContext('calendarDays', calendarDays[0]);
        setContext('selectedView', viewChangedValue);
        // use either passed value or internal state
        const setSelectedDate = (date)=>{
            setContext('selectedDate', date);
        };
        const calendarDaysNew = (0, $1500da26cef85c66$export$e75d169fad6edf5f)(viewChangedValue, selectedDate && (0, $bf7b38bce41ca3dd$export$a18c89cbd24170ff)(selectedDate) ? selectedDate : selectedDate || props.initialDate || (0, $cw6c3$luxon.DateTime).now(), config.weekDayStart, setSelectedDate);
        setContext('calendarDays', calendarDaysNew);
        setContext('layoutUpdateSequence', store.layoutUpdateSequence + 1);
        setPrevView(viewChangedValue);
        setViewChanged(null);
    }, [
        viewChanged,
        props.selectedView
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        const selectedViewValue = props.selectedView || selectedView;
        if (prevView === selectedViewValue) return;
        if (selectedViewValue && selectedViewValue !== prevView) {
            setContext('calendarDays', calendarDays[0]);
            setContext('selectedView', selectedViewValue);
            setPrevView(selectedViewValue);
            const setSelectedDate = (date)=>setContext('selectedDate', date);
            const calendarDaysNew = (0, $1500da26cef85c66$export$e75d169fad6edf5f)(selectedViewValue, selectedDate || props.initialDate || (0, $cw6c3$luxon.DateTime).now(), config.weekDayStart, setSelectedDate);
            setContext('calendarDays', calendarDaysNew);
        }
    }, [
        selectedView
    ]);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        setContext('events', props.events);
    }, [
        JSON.stringify(props.events)
    ]);
    (0, $cw6c3$react.useLayoutEffect)(()=>{
        if (callbacks.onPageChange && calendarDays && calendarDays[0] && calendarDays.length > 0) callbacks.onPageChange((0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, (0, $1500da26cef85c66$export$fef151b94550e9f5)(calendarDays)), {
            direction: store.direction
        }));
    }, [
        selectedView,
        calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays[0],
        calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays[(calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays.length) - 1]
    ]);
    return selectedView && (calendarDays === null || calendarDays === void 0 ? void 0 : calendarDays.length) > 0 && selectedDate && width ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $21db0de5ba63f204$export$2e2bcd8739ae039), {
                setViewChanged: setViewChanged,
                kalendRef: props.kalendRef
            }),
            selectedView !== (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA && selectedView !== (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $58f20473f1f0067a$export$2e2bcd8739ae039), {
                setViewChanged: setViewChanged
            }) : null,
            selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).MONTH ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $cw6c3$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $58f20473f1f0067a$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            height: '100%'
                        },
                        children: [
                            store.showWeekNumbers ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $7b4ef3e16846642d$export$2e2bcd8739ae039), {}) : null,
                            /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                                className: 'Kalend__Calendar__table',
                                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__Calendar__table-surface', store.isDark),
                                    children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f89b7b16d8022e68$export$2e2bcd8739ae039), {
                                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $4e630ae36e00686b$export$2e2bcd8739ae039), {
                                            events: props.events ? props.events : [],
                                            eventLayouts: props.eventLayouts,
                                            setViewChanged: setViewChanged
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                className: 'Kalend__Calendar__table',
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
                    className: (0, $bf7b38bce41ca3dd$export$b7a9dbebc395fc65)('Kalend__Calendar__table-surface', store.isDark),
                    children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsxs)((0, $f89b7b16d8022e68$export$2e2bcd8739ae039), {
                        children: [
                            selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).DAY || selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).THREE_DAYS || selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).WEEK ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $be26fc4a0d3aa4a6$export$2e2bcd8739ae039), {
                                events: props.events ? props.events : [],
                                eventLayouts: props.eventLayouts
                            }) : null,
                            selectedView === (0, $e4750b0ebeed8e48$export$ec9758e21af63072).AGENDA ? /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $ae9d5d34ac1cc52f$export$2e2bcd8739ae039), {
                                events: props.events ? props.events : [],
                                eventLayouts: props.eventLayouts
                            }) : null
                        ]
                    })
                })
            })
        ]
    }) : null;
};
var $2c06f9532bb9aaf9$export$2e2bcd8739ae039 = $2c06f9532bb9aaf9$var$Calendar;






const $f101c73fee185a96$var$DimensionsLayoutLayer = (props)=>{
    var _document, _document1;
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { selectedView: selectedView, headerEventRowsCount: headerEventRowsCount, showWeekNumbers: showWeekNumbers } = store;
    (0, $cw6c3$react.useEffect)(()=>{
        var _document;
        const el = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.Kalend__Calendar__root');
        if (!el) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            const entryRect = entries[0].contentRect;
            const width = entryRect.width;
            if (width < 750) setContext('isMobile', true);
            else setContext('isMobile', false);
            setContext('rawWidth', entryRect.width);
            setContext('width', entryRect.width - (0, $bf7b38bce41ca3dd$export$76c69f043295405f)(selectedView, showWeekNumbers));
        });
        resizeObserver.observe(el);
    }, [
        (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.Kalend__Calendar__root'),
        selectedView
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        var _document;
        const el = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.Kalend__Calendar__root');
        if (!el) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            const entryRect = entries[0].contentRect;
            const width = entryRect.width;
            if (width < 750) setContext('isMobile', true);
            else setContext('isMobile', false);
            setContext('rawWidth', entryRect.width);
            setContext('width', entryRect.width - (0, $bf7b38bce41ca3dd$export$76c69f043295405f)(selectedView, showWeekNumbers));
        });
        resizeObserver.observe(el);
    }, []);
    (0, $cw6c3$react.useEffect)(()=>{
        var _document;
        const el = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.Kalend__Calendar__table');
        if (!el) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            const entryRect = entries[0].contentRect;
            setContext('height', entryRect.height);
        });
        resizeObserver.observe(el);
    }, [
        (_document1 = document) === null || _document1 === void 0 ? void 0 : _document1.querySelector('.Kalend__Calendar__table'),
        selectedView,
        headerEventRowsCount
    ]);
    (0, $cw6c3$react.useEffect)(()=>{
        var _document;
        const el = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.Kalend__Calendar__table');
        if (!el) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            const entryRect = entries[0].contentRect;
            setContext('height', entryRect.height);
        });
        resizeObserver.observe(el);
    }, []);
    return props.children;
};
var $f101c73fee185a96$export$2e2bcd8739ae039 = $f101c73fee185a96$var$DimensionsLayoutLayer;




var $4f8fac8212b1a05e$exports = {};
$4f8fac8212b1a05e$exports = JSON.parse('{"buttons":{"today":"Heute","agenda":"Agenda","day":"Tag","threeDays":"3 Tage","week":"Woche","month":"Monat","showMore":"Mehr"},"months":{"january":"Januar","february":"Februar","march":"M\xe4rz","april":"April","may":"Mai","june":"Juni","july":"Juli","august":"August","september":"September","october":"Oktober","november":"November","december":"Dezember"},"weekDays":{"Mon":"Mo","Tue":"Di","Wed":"Mi","Thu":"Do","Fri":"Fr","Sat":"Sa","Sun":"So"},"weekShort":"W"}');



var $9ac065e100f212f5$exports = {};
$9ac065e100f212f5$exports = JSON.parse('{"buttons":{"today":"Hoy","agenda":"Diario","day":"D\xeda","threeDays":"3 D\xedas","week":"Semana","month":"Mes","showMore":"M\xe1s"},"months":{"january":"Enero","february":"Febrero","march":"Marzo","april":"Abril","may":"Mayo","june":"Junio","july":"Julio","august":"Agosto","september":"Septiembre","october":"Octubre","november":"Noviembre","december":"Diciembre"},"weekDays":{"Mon":"Lun","Tue":"Mar","Wed":"Mi\xe9","Thu":"Jue","Fri":"Vie","Sat":"S\xe1b","Sun":"Dom"},"weekShort":"S"}');


var $8afa7629b855c8cd$exports = {};
$8afa7629b855c8cd$exports = JSON.parse('{"buttons":{"today":"Aujourd","agenda":"Jour","day":"Journ\xe9e","threeDays":"3 Jours","week":"Semaine","month":"Mois","showMore":"Plus"},"months":{"january":"Janvier","february":"F\xe9vrier","march":"Mars","april":"Avril","may":"Mai","june":"Juin","july":"Juillet","august":"Ao\xfbt","september":"Septembre","october":"Octobre","november":"Novembre","december":"D\xe9cembre"},"weekDays":{"Mon":"Lun","Tue":"Mar","Wed":"Mer","Thu":"Jeu","Fri":"Ven","Sat":"Sam","Sun":"Dim"},"weekShort":"S"}');


var $a1d28ad4f425ad6f$exports = {};
$a1d28ad4f425ad6f$exports = JSON.parse('{"buttons":{"today":"Hoje","agenda":"Agenda","day":"Dia","threeDays":"3 Dias","week":"Semana","month":"M\xeas","showMore":"Mais"},"months":{"january":"Janeiro","february":"Fevereiro","march":"Mar\xe7o","april":"Abril","may":"Maio","june":"Junho","july":"Julho","august":"Agosto","september":"Setembro","october":"Outubro","november":"Novembro","december":"Dezembro"},"weekDays":{"Mon":"Seg","Tue":"Ter","Wed":"Quar","Thu":"Qui","Fri":"Sex","Sat":"Sab","Sun":"Dom"},"weekShort":"S"}');


var $8d153bee865ba9a1$exports = {};
$8d153bee865ba9a1$exports = JSON.parse('{"buttons":{"today":"\u0421\u0435\u0433\u043E\u0434\u043D\u044F","agenda":"\u0410\u0433\u0435\u043D\u0434\u0430","day":"\u0414\u0435\u043D\u044C","threeDays":"3 \u0434\u043D\u044F","week":"\u041D\u0435\u0434\u0435\u043B\u044F","month":"\u041C\u0435\u0441\u044F\u0446","showMore":"\u0415\u0449\u0435..."},"months":{"january":"\u042F\u043D\u0432\u0430\u0440\u044C","february":"\u0424\u0435\u0432\u0440\u0430\u043B\u044C","march":"\u041C\u0430\u0440\u0442","april":"\u0410\u043F\u0440\u0435\u043B\u044C","may":"\u041C\u0430\u0439","june":"\u0418\u044E\u043D\u044C","july":"\u0418\u044E\u043B\u044C","august":"\u0410\u0432\u0433\u0443\u0441\u0442","september":"\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C","october":"\u041E\u043A\u0442\u044F\u0431\u0440\u044C","november":"\u041D\u043E\u044F\u0431\u0440\u044C","december":"\u0414\u0435\u043A\u0430\u0431\u0440\u044C"},"weekDays":{"Mon":"\u041F\u043D","Tue":"\u0412\u0442","Wed":"\u0421\u0440","Thu":"\u0427\u0442","Fri":"\u041F\u0442","Sat":"\u0421\u0431","Sun":"\u0412\u0441"},"weekShort":"\u041D"}');


var $6d7cb4bf3385b3b5$exports = {};
$6d7cb4bf3385b3b5$exports = JSON.parse('{"buttons":{"today":"\u4ECA\u5929","agenda":"\u8BAE\u7A0B","day":"\u65E5","threeDays":"3\u5929","week":"\u661F\u671F","month":"\u6708","showMore":"\u663E\u793A\u66F4\u591A"},"months":{"january":"\u4E00\u6708","february":"\u4E8C\u6708","march":"\u4E09\u6708","april":"\u56DB\u6708","may":"\u53EF\u80FD","june":"\u516D\u6708","july":"\u4E03\u6708","august":"\u516B\u6708","september":"\u4E5D\u6708","october":"\u5341\u6708","november":"\u5341\u4E00\u6708","december":"\u5341\u4E8C\u6708"},"weekDays":{"Mon":"\u5468\u4E00","Tue":"\u5468\u4E8C","Wed":"\u5468\u4E09","Thu":"\u5468\u56DB","Fri":"\u661F\u671F\u4E94","Sat":"\u5468\u516D","Sun":"\u661F\u671F\u65E5"},"weekShort":"\u661F\u671F"}');


const $36362bd2dc53dd73$var$getKnownLanguage = (language)=>{
    switch(language){
        case 'en':
            return 0, (/*@__PURE__*/$parcel$interopDefault($073ad6afefbd1c74$exports));
        case 'de':
            return 0, (/*@__PURE__*/$parcel$interopDefault($4f8fac8212b1a05e$exports));
        case 'es':
            return 0, (/*@__PURE__*/$parcel$interopDefault($9ac065e100f212f5$exports));
        case 'fr':
            return 0, (/*@__PURE__*/$parcel$interopDefault($8afa7629b855c8cd$exports));
        case 'ptBR':
            return 0, (/*@__PURE__*/$parcel$interopDefault($a1d28ad4f425ad6f$exports));
        case 'ru':
            return 0, (/*@__PURE__*/$parcel$interopDefault($8d153bee865ba9a1$exports));
        case 'zh':
            return 0, (/*@__PURE__*/$parcel$interopDefault($6d7cb4bf3385b3b5$exports));
        default:
            return 'en';
    }
};
const $36362bd2dc53dd73$var$LanguageLayer = (props)=>{
    const { language: language, customLanguage: customLanguage } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [store, dispatch] = (0, $cw6c3$react.useContext)((0, $65553fbba1d6d65b$export$841858b892ce1f4c));
    const setContext = (type, payload)=>{
        dispatch({
            type: type,
            payload: payload
        });
    };
    const { translations: translations } = store;
    (0, $cw6c3$react.useEffect)(()=>{
        if (customLanguage) setContext('translations', customLanguage);
        else if (language) setContext('translations', $36362bd2dc53dd73$var$getKnownLanguage(language));
    }, []);
    (0, $cw6c3$react.useEffect)(()=>{
        if (customLanguage) setContext('translations', customLanguage);
        else if (language) setContext('translations', $36362bd2dc53dd73$var$getKnownLanguage(language));
    }, [
        customLanguage,
        language
    ]);
    return translations ? props.children : null;
};
var $36362bd2dc53dd73$export$2e2bcd8739ae039 = $36362bd2dc53dd73$var$LanguageLayer;



const $7d02895a6af4de33$var$RootLayoutLayer = (props)=>{
    const [isMounted, setIsMounted] = (0, $cw6c3$react.useState)(false);
    (0, $cw6c3$react.useEffect)(()=>{
        const rootEl = document.querySelector('.Kalend__Calendar__root');
        if (rootEl) setIsMounted(true);
    }, [
        document.querySelector('.Kalend__Calendar__root')
    ]);
    return isMounted ? props.children : null;
};
var $7d02895a6af4de33$export$2e2bcd8739ae039 = $7d02895a6af4de33$var$RootLayoutLayer;



const $3f7b2fe5d2c34f8f$export$b573856c46cc9357 = (0, $e4750b0ebeed8e48$export$ec9758e21af63072);
// use any as JSX was causing errors for some cases
const $3f7b2fe5d2c34f8f$var$Kalend = (props)=>{
    // basic validation
    (0, $cw6c3$react.useEffect)(()=>{
        (0, $078907888c55a58c$export$45855e0dd982478b)(props);
        (0, $078907888c55a58c$export$fbb8247b2e46a70a)(props.testMode);
    }, []);
    return /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)("div", {
        className: 'Kalend__Calendar__root Kalend__main',
        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $65553fbba1d6d65b$export$2e2bcd8739ae039), (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, props), {
            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $36362bd2dc53dd73$export$2e2bcd8739ae039), {
                language: props.language || 'en',
                customLanguage: props.customLanguage,
                children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $7d02895a6af4de33$export$2e2bcd8739ae039), {
                    children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $3886b97a1526edd3$export$2e2bcd8739ae039), (0, $cw6c3$swchelperscjs_object_spread_propscjs._)((0, $cw6c3$swchelperscjs_object_spreadcjs._)({}, props), {
                        children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $f101c73fee185a96$export$2e2bcd8739ae039), {
                            children: /*#__PURE__*/ (0, $cw6c3$reactjsxruntime.jsx)((0, $2c06f9532bb9aaf9$export$2e2bcd8739ae039), {
                                kalendRef: props.kalendRef,
                                events: props.events,
                                eventLayouts: props.eventLayouts,
                                selectedView: props.selectedView,
                                initialDate: props.initialDate
                            })
                        })
                    }))
                })
            })
        }))
    });
};
var $3f7b2fe5d2c34f8f$export$2e2bcd8739ae039 = $3f7b2fe5d2c34f8f$var$Kalend;


//# sourceMappingURL=main.js.map
