import React from 'react';
import PropTypes from 'prop-types';
import {StyledFormWrapper, StyledInput} from "./style";

const Input = ({ type, placeholder, value, width, }) => {
    return (
        <StyledFormWrapper className={[width].join(' ')}>
            <StyledInput
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </StyledFormWrapper>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string,
}

Input.defaultProps = {
    type: 'text',
    placeholder: '입력해주세요',
    value: '',
    width: 'wx300',
}

export default Input;