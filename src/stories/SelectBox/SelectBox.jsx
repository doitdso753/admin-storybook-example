import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {StyledFormWrapper, StyledSelectBox} from "./style";
import Option from './Option';

export { Option };

const SelectBox = ({
    name,
    width,
    disabled,
    children,
}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        // const { name, onChange } = this.props;
        // if (onChange) {
        //     onChange(name, e.target.value);
        // }
    }

    return (
        <StyledFormWrapper className={[width].join(' ')}>
            <StyledSelectBox
                name={name}
                disabled={disabled}
                onChange={handleChange}
                value={value}
            >
                {React.Children.map(children, child => React.cloneElement(child, { disabled }))}
            </StyledSelectBox>
        </StyledFormWrapper>
    )
}

SelectBox.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.element,
}

SelectBox.defaultProps = {
    value: '',
    width: 'wx300',
}

export default SelectBox;