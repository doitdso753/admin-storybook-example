import React from 'react';

import CheckBox from './CheckBox';

export default {
    title: 'Example/CheckBox',
    component: CheckBox,
    argTypes: {
    },
};

const Template = (args) => <CheckBox {...args} />;

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


export const AllChecked = Template.bind({});
AllChecked.args = {
    name: 'colors',
    isAllChecked: true,
    list: [
        { label: 'RED', value: '#ffb598', checked: true },
        { label: 'ORANGE', value: '#ffdcaa' },
        { label: 'PURPLE', value: '#d7beff' },
        { label: 'CYAN', value: '#c7f5ed' },
        { label: 'BLUE', value: '#c2dbff' },
    ],
};
