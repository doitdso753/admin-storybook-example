import React from 'react';

import SelectBox, { Option } from './SelectBox';

export default {
    title: 'Example/SelectBox',
    component: SelectBox,
    argTypes: {
    },
};

const Template = (args) => <SelectBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'example',
    children: (
        <>
            <Option value="1">셀렉트 1</Option>
            <Option value="2">셀렉트 2</Option>
            <Option value="3">셀렉트 3</Option>
            <Option value="4">셀렉트 4</Option>
        </>
    )
};

