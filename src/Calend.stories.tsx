import { CALENDAR_VIEW } from 'kalend-layout';
import { Meta, Story } from '@storybook/react';
import Kalend, { KalendProps } from './index';

export default {
  title: 'Kalend',
  component: Kalend,
} as Meta;

const Template: Story<KalendProps> = (args) => (
  <div style={{ height: '100vh' }}>
    <Kalend {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  initialView: CALENDAR_VIEW.MONTH,
  // @ts-ignore
  events: {},
  // eslint-disable-next-line no-console
  onNewEventClick: console.log,
  // eslint-disable-next-line no-console
  onEventClick: console.log,
};
