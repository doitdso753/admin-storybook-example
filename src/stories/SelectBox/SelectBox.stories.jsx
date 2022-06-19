import React from 'react';

import SelectBox from './SelectBox';

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
            <option value="1">셀렉트 1</option>
            <option value="2">셀렉트 2</option>
            <option value="3">셀렉트 3</option>
            <option value="4">셀렉트 4</option>
        </>
    )
};

