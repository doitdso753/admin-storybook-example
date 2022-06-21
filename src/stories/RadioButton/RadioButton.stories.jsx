import React from 'react';

import RadioButton from './RadioButton';

export default {
    title: 'Example/RadioButton',
    component: RadioButton,
    argTypes: {
    },
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'colors',
    list: [
        { label: 'RED', value: '#ffb598', checked: true },
        { label: 'ORANGE', value: '#ffdcaa' },
        { label: 'PURPLE', value: '#d7beff' },
        { label: 'CYAN', value: '#c7f5ed' },
        { label: 'BLUE', value: '#c2dbff' },
    ],
};