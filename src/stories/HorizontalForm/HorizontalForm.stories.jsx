import React from 'react';

import HorizontalForm from './HorizontalForm';
import { StyledHelp } from "./style";

export default {
    title: 'Example/HorizontalForm',
    component: HorizontalForm,
    argTypes: {
    },
};

const Template = (args) => <HorizontalForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    titleList: [
        '텍스트 상자',
        '목록 상자',
        '입력 영역',
    ],
    contentList: [
        '텍스트 내용',
        '목록 내용',
        <div><StyledHelp>도움말</StyledHelp> 입력영역</div>,
    ],
};

export const Line = Template.bind({});
Line.args = {
    tableType: 'line',
    titleList: [
        '텍스트 상자',
        '목록 상자',
        '입력 영역',
    ],
    contentList: [
        '텍스트 내용',
        '목록 내용',
        <div><StyledHelp>도움말</StyledHelp> 입력영역</div>,
    ],
};