import React from 'react';

import Input from './Input';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
    },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: '입력해주세요.',
    limitType: 'byte',
    limit: 10,
};

export const Icon = Template.bind({});
Icon.args = {
    styleType: 'btn',
    placeholder: '입력해주세요.',
};

export const LimitView = Template.bind({});
LimitView.args = {
    styleType: 'limit',
    placeholder: '입력해주세요.',
    limitType: 'byte',
    limit: 10,
};

