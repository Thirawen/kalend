# Kalend - calendar component for React

Support for:

- day view
- three days view
- week view
- month view
- agenda list view


### LIVE DEMO: https://demo.kalend.org

### Storybook: https://storybook.kalend.org

#

![Alt text](screenshot.png?raw=true 'Title')

#

If given interface and controls is not enough for you, you can use callbacks to access internal state and expand functionality to your ui.

If you have any suggestion, feel free to open discussion or contact me directly at hello@nibdo.com

# Install

    npm i kalend

# Example

    import Kalend, { CalendarView } from 'kalend' // import component
    import 'kalend/dist/styles/index.css'; // import styles

        <Kalend
          onEventClick={onEventClick}
          onNewEventClick={onNewEventClick}
          events={[]}
          initialDate={new Date().toISOString()}
          hourHeight={60}
          initialView={CalendarView.WEEK}
          disabledViews={[CalendarView.DAY]}
          onSelectView={onSelectView}
          selectedView={selectedView}
          onPageChange={onPageChange}
          timeFormat={'24'}
          weekDayStart={'Monday'}
          calendarIDsHidden={['work']}
          language={'en'}
        />

# Props

| prop                    | type                                          | default            | options            | required | desc                                                                            |
|-------------------------|-----------------------------------------------|--------------------|--------------------|----------|---------------------------------------------------------------------------------|
| `initialDate`           | `string`                                      |                    |                    | false    | starting date for calendar                                                      |
| `initialView`           | `CalendarView - day, three days, week, month` | CALENDAR_VIEW.WEEK |                    | true     | starts in calendar view                                                         |
| `selectedView`          | `CalendarView`                                |                    |                    | false    | selected view for control outside of the component                              |
| `disabledViews`         | `CalendarView[]`                              |                    |                    | false    | disable views you don't need                                                    |
| `hourHeight`            | `number`                                      | 40                 |                    | false    | height for one hour column in px                                                |
| `events`                | see example below                             | []                 |                    | true     | events for calendar                                                             |
| `onNewEventClick`       | `callback func`                               |                    |                    | false    | callback for clicking on calendar table to create new event                     |
| `onEventClick`          | `callback func`                               |                    |                    | false    | callback for clicking on event                                                  |
| `onSelectView`          | `callback func`                               |                    |                    | false    | callback for view change event                                                  |
| `onPageChange`          | `callback func`                               |                    |                    | false    | callback for navigating through calendar pages                                  |
| `showMoreMonth`         | `callback func`                               |                    |                    | false    | callback for accessing events which didn't fit in month view                    |
| `disableMobileDropdown` | `boolean`                                     | false              |                    | false    | disable button for triggering mobile dropdown with views                        |
| `timezone`              | `string`                                      | system timezone    |                    | false    | IANA timezone format, if not provided, system timezone will be used             |
| `weekDayStart`          | `string`                                      | Monday             | Monday or Sunday   | false    | starting date for week                                                          |
| `timeFormat`            | `string`                                      | 24                 | 24 or 12           | false    | time format - 24 hours or 12 hours AM/PM                                        |
| `calendarIDsHidden`     | `string[]`                                    |                    |                    | false    | ids in array will be used to filter all events with matchin calendarID property |
| `language`              | `string`                                      | en                 | en, de, es, fr, zh | false    | translate texts to different languages                                          |
| `customLanguage`        | `json`                                        |                  |  | false    | import your own translation                                                     |
# Usage

### Events

Before passing events to calendar, adjust data to this format:
Date key has to be in dd-MM-yyyy format

    const events = {
        '01-11-2021': [
            {
            id: 1,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
            calendarID: 'work'
            }
        ],
        '21-11-2021': [
            {
            id: 2,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
            }
        ]
    }

Group events array under day when they occur and pass starting and ending date in ISO string format in UTC timezone.

According to your needs, you can set timezone for each event and also set default timezone with "timezone" prop in IANA format.
If you don't provide timezone prop, your system default timezone will be used.

You can keep other event properties, those will be ignored.

## Callbacks

Create functions and handle data from callback in your application

If you want access to type of callback data, you can import them like this

    import Kalend, {
        OnEventClickData,
        OnNewEventClickData,
        ShowMoreMonthData,
        OnPageChangeData,
        OnSelectViewData
    } from 'kalend';

### onNewEventClick

Passing data for creating new event

    type OnNewEventClickData {
        event: CalendarEvent;
        day: Date;
        hour: number;
    }

    const onNewEventClick = (data: OnNewEventClickData) => {
        // do something
    };

### onEventClick

Passing data after clicking on existing event

    type OnEventClickData {
        startAt: string;
        endAt: string;
        timezoneStartAt?: string;
        timezoneEndAt?: string;
        summary: string;
        color: string;
        [key: string]: any;
    }

    const onEventClick = (data: OnEventClickData) => {
        // do something
    };

### onSelectView

Access current selected view if you want to handle state in your app

    const handleSelectView = (view: OnSelectViewData) => {
        // do something
    }

### onPageChange

Callback to handle actions after page change (going back and forth)

    const onPageChange = (data: OnPageChangeData) => {
        // do something
    }

### showMoreMonth

Callback returns array of CalendarEvent which did not fit inside day column in month view

    const showMoreMonth = (data: ShowMoreMonthData) => {
        // do something
    }

### onEventDragFinish

    const onEventDragFinish: OnEventDragFinish = (
    prevEvent: CalendarEvent,
    updatedEvent: CalendarEvent,
    events: any
    ) => {
        // if you want just update whole state, you can just set events
        setState(events);
        // OR you can handle logic for updating inside your app with access to "updatedEvent" and "prevEvent"

    };

# Localization

Support for languages:
- english (en)
- deutsch (de)
- spanish (es)
- french (fr)
- chinese (zh)

Usage:
Pass prop language to Kalend 
```
<Kalend
...
language={'de'}
/>
```
You can include your own translation with prop customLanguage. Create json locale file and import it to Kalend

```
import cz from 'cz.json'

<Kalend
...
language={'customLanguage'}
customLanguage={cz}
/>
```

# Development

## Storybook Support

Storybook is used for visualization while improving Calend. It can be used by running `npm run storybook` from the root of the project. Not all controls are fully supported so far.
