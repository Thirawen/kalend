# Changelog

## 0.9.5
- Update kalend-layout package - fixed wrong entry

## 0.9.4
- Fixed loading month view

## 0.9.3
- Refactored initial layout and resizing events

## 0.9.2
- Fixed another index import, remove JSX type from main Kalend func

## 0.9.1
- Fixed index imports

## 0.9.0
- Added support to change primary colors

## 0.8.0
- Added support to replace built in header with custom components

## 0.7.5
- Fixed changing date in header after switching views

## 0.7.4
- Fixed error on resize
- Fixed recalculating event positions after resize event

## 0.7.3
- Fixed loading events with kalend-layout

## 0.7.2
- Better detection for touch devices
- Refactored overflowing events modal in month view

## 0.7.1
- Fix for overflowing events in month view
- Removed i18next from dependencies

## 0.7.0
- performance improvements
- support for server side calculations
- breaking change: events prop accepts simple array of events now

## 0.6.5
- added possible fix for missing height after init
- added russian translation

## 0.6.4
- fixed width layout issue in days view

## 0.6.3
- fixed date range in callback onPageChange

## 0.6.2
- fixed event propagation after dragging calendar events
- added original event to callback for dragging finish

## 0.6.0
- refactor month events, fixed displaying multi day events
- add modal for overflowing month events
- add localizations
- disabled dragging for touch events

## 0.5.0
- add option to change time format to 12 hours (AM/PM) or 24 hours
- add filtering events by calendarID
- fix calculating event after dragging when hourHeight wasn't default value 

## 0.4.0
- add option to set Sunday as start of the week

## 0.3.0
- add dragging events in month view

## 0.2.2
- fix missing and flickering lines in week view
- events styling improvements
- fix hidden time in events

## 0.2.1
- fix all day events positions
- fix shrinking not overlapping events

## 0.2.0
- support for dragging events in week/days view
- re-rendering event changes should be smoother
- bug fixes

## 0.1.3
- fix style for initial month view
- sort agenda events

## 0.1.2
- fix calendar days calculations
- fix dropdown hover style

## 0.1.1
- add parcel integration

## 0.1.0
- new agenda list view

## 0.0.4
- hide dropdown icon when no options are available
- add validation to check if css file is imported

## 0.0.3
- add prefix to all classnames to prevent conflicts
- fix bug with timezone in events
- fix resetting view with today button
- add default system timezone and option for timezone prop

## 0.0.2
- move node-sass to dev dependancy
- move all styles to one css file
- support for Next.js
