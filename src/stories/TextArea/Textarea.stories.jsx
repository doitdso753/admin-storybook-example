import React from 'react';

import TextArea from './TextArea';

export default {
    title: 'Example/TextArea',
    component: TextArea,
    argTypes: {
    },
};

const Template = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: '입력해주세요.',
};

export const LimitView = Template.bind({});
LimitView.args = {
    styleType: 'limit',
    placeholder: '입력해주세요.',
    limitType: 'byte',
    limit: 100,
};

