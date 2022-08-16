import { AgendaDayRowProps } from './AgendaDayRow.props';
import { CalendarEvent } from '../../../common/interface';
import { DateTime, Duration } from 'luxon';
import { Meta, Story } from '@storybook/react';
import { faker } from '@faker-js/faker';
import AgendaDayRow from './AgendaDayRow';


const generateCalendarEvents = (
  numberOfEvents: number
): { day: DateTime; events: CalendarEvent[] } => {
  const events = [];
  const day = DateTime.now().toUTC();
  for (let index = 0; index < numberOfEvents; index++) {
    const start = day.plus(
      Duration.fromObject({
        hours: faker.datatype.number({ min: 1, max: 6 }),
        minutes: faker.datatype.number(60),
      })
    );

    const end = day.plus(
      Duration.fromObject({
        hours: faker.datatype.number({ min: 6, max: 12 }),
        minutes: faker.datatype.number(60),
      })
    );

    const event: CalendarEvent = {
      id: faker.datatype.number(),
      startAt: start.toUTC().toISO(),
      timezoneStartAt: '',
      endAt: end.toUTC().toISO(),
      timezoneEndAt: '',
      summary: faker.lorem.sentence(12),
      color: faker.internet.color(0, 0, 0),
    };
    events.push(event);
  }
  return { day, events };
};

export default {
  title: 'Components/AgendaView/AgendaDayRow',
  component: AgendaDayRow,
} as Meta;

const Template: Story<AgendaDayRowProps> = (args) => <AgendaDayRow {...args} />;

export const Primary = Template.bind({});
const { day, events } = generateCalendarEvents(5);
Primary.args = {
  day,
  events,
  // eslint-disable-next-line no-console
  // handleEventClick: (data: CalendarEvent) => console.log(data),
};
