"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const commonHelper_1 = require("../utils/commonHelper");
const agendaView_1 = require("./agendaView");
const daysView_1 = require("./daysView");
const monthViewHelper_1 = require("../utils/monthViewHelper");
const monthView_1 = require("./monthView");
const Helper_1 = require("../utils/Helper");
const validator_1 = require("../utils/validator");
exports.default = (data) => {
    return new Promise((resolve) => {
        if (data) {
            (0, validator_1.validateInput)(data);
            const { events, width, config, height, isMobile, selectedView } = data;
            // parse to calendar days if dates are ISO string
            const calendarDays = (0, Helper_1.parseToCalendarDays)(data.calendarDays);
            // calculate layout for different views
            if (selectedView === index_1.CALENDAR_VIEW.MONTH) {
                const monthPositions = (0, monthView_1.getMonthViewLayout)(events, width, calendarDays, config, (0, monthViewHelper_1.getMaxEventsVisible)(height));
                resolve(Object.assign(Object.assign({ selectedView: index_1.CALENDAR_VIEW.MONTH }, monthPositions), { calendarDays, overflowingEvents: monthPositions.overflowingEvents }));
            }
            else if ((0, commonHelper_1.checkIfIsDaysView)(selectedView)) {
                const result = (0, daysView_1.getDaysViewLayout)(events, calendarDays, config, width, selectedView, isMobile);
                resolve({
                    selectedView,
                    headerPositions: result.headerPositions.positions,
                    headerOffsetTop: result.headerPositions.headerOffsetTop,
                    calendarDays,
                    normalPositions: result.normalPositions,
                });
            }
            else if (selectedView === index_1.CALENDAR_VIEW.AGENDA) {
                const agendaEvents = (0, agendaView_1.getAgendaView)(events, config);
                resolve({
                    events: agendaEvents,
                    selectedView: index_1.CALENDAR_VIEW.AGENDA,
                });
            }
        }
    });
};
