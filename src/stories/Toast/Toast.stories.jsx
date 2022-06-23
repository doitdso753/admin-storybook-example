import React from 'react';
import Toast from './Toast';

export default {
    title: 'Example/Toast',
    component: Toast,
    argTypes: {
    },
};

const Template = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: '고객문의 답변저장 완료',
    date: '2022.07.12 10:00:53',
    totalCnt: 10,
    // failCnt: 2,
    // successCnt: 8,
};