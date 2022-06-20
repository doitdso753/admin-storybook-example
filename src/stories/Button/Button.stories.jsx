import React from 'react';

import Button from './Button';
import {
    StyledButton,
    StyledButtonWrapper,
    StyledFileButton,
    StyledFileWrapper,
    StyledMinusButton,
    StyledPlusButton
} from "./style";

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    children: '기본 버튼'
};

export const White = Template.bind({});
White.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'white',
    children: '화이트 버튼'
};

export const Blue = Template.bind({});
Blue.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'blue',
    children: '블루 버튼'
};

export const BlueLine = Template.bind({});
BlueLine.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'blue',
    styleType: 'line',
    children: '블루라인 버튼'
};

export const Orange = Template.bind({});
Orange.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'orange',
    children: '오렌지 버튼'
};

export const OrangeLine = Template.bind({});
OrangeLine.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'orange',
    styleType: 'line',
    children: '오렌지라인 버튼'
};

export const Gray = Template.bind({});
Gray.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'gray',
    children: '그레이 버튼'
};

export const GrayLine = Template.bind({});
GrayLine.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'gray',
    styleType: 'line',
    children: '그레이라인 버튼'
};

export const Green = Template.bind({});
Green.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'green',
    children: '그린 버튼'
};

export const GreenLine = Template.bind({});
GreenLine.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    color: 'green',
    styleType: 'line',
    children: '그린라인 버튼'
};

export const Disabled = Template.bind({});
Disabled.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    disabled: true,
    children: 'Disabled 버튼'
};

const CenterTemplate = (args) => (
    <StyledButtonWrapper>
        <Button {...args} />
        <Button {...args} />
        <Button {...args} />
    </StyledButtonWrapper>
);
export const Center = CenterTemplate.bind({});
Center.args = {
    handleClick: () => {
        alert('Button Clicked!!')
    },
    btnCount: 3,
    styleType: 'block',
    children: '센터 버튼',
};

const PlusTemplate = (args) => <StyledPlusButton {...args} />
export const Plus = PlusTemplate.bind({});
Plus.args = {
};

const MinusTemplate = (args) => <StyledMinusButton {...args} />
export const Minus = MinusTemplate.bind({});
Minus.args = {
};


const FileTemplate = (args) => (
    <StyledButton {...args} />
)
export const InputFile = FileTemplate.bind({});
InputFile.args = {
    children: (
        <label>
            <input
                type="file"
                name=""
                id=""
                accept="image/jpg, image/png, image/jpeg" />
            찾아보기
        </label>
    )
};

