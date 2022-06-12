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
    // primary: true,
    // label: 'Button',
};

