import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {{{component}}} from '.';

export default {
  title: 'TEMPLATE/{{{component}}}',
  component: {{{component}}},
} as ComponentMeta<typeof {{{component}}}>;

const Template: ComponentStory<typeof {{{component}}}> = (args) => <{{{component}}} {...args} />;

export const StringArgs = Template.bind({});
StringArgs.args = {
  title: 'Title',
  content: 'Content'
};
