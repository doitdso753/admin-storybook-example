import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {StyledFormWrapper, StyledInput, StyledInputBtn, StyledInputLimit} from "./style";

const getByte = str => str
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce((prev, c) => (prev + ((c === 10) ? 2 : ((c >> 7) ? 2 : 1))), 0);

const Input = ({
    styleType,
    type,
    placeholder,
    width,
    limitType,
    limit,
}) => {
    const [value, setValue] = useState('');
    const [valueLength, setValueLength] = useState(0);

    const handleInputValue = (e) => {
        if (limit > 0) {
            // κΈμ μ ν
            if (limitType === 'byte') {
                if (getByte(e.target.value) > limit) return;
                setValueLength(getByte(e.target.value));
            }
            else {
                if (e.target.value.length > limit) return;
                setValueLength(e.target.value.length);
            }
        }

        setValue(e.target.value);
    }

    return (
        <StyledFormWrapper
            className={[width].join(' ')}
            styleType={styleType}
        >
            <StyledInput
                type={type}
                styleType={styleType}
                placeholder={placeholder}
                value={value}
                limitType={limitType}
                limit={limit}
                width={width}
                onChange={handleInputValue}
            />
            {styleType === 'btn' && <StyledInputBtn />}
            {styleType === 'limit' && <StyledInputLimit>( <em>{valueLength}</em> / {limit} )</StyledInputLimit>}
        </StyledFormWrapper>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    styleType: PropTypes.oneOf(['default', 'btn', 'limit']),
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string,
    limitType: PropTypes.oneOf(['byte', 'length']),    // byte, length
    limit: PropTypes.number,
}

Input.defaultProps = {
    type: 'text',
    styleType: 'default',
    placeholder: 'μλ ₯ν΄μ£ΌμΈμ',
    value: '',
    width: 'wx300',
    limitType: 'length',
    limit: 0,
}

export default Input;