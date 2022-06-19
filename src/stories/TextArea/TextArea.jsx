import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {StyledFormWrapper, StyledTextarea, StyledInputLimit} from "./style";

const getByte = str => str
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce((prev, c) => (prev + ((c === 10) ? 2 : ((c >> 7) ? 2 : 1))), 0);

const TextArea = ({
    styleType,
    placeholder,
    width,
    height,
    limitType,
    limit,
}) => {
    const [value, setValue] = useState('');
    const [valueLength, setValueLength] = useState(0);

    const handleInputValue = (e) => {
        if (limit > 0) {
            // 글자 제한
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
            className={[width, height].join(' ')}
            styleType={styleType}
        >
            <StyledTextarea
                styleType={styleType}
                placeholder={placeholder}
                value={value}
                limitType={limitType}
                limit={limit}
                width={width}
                onChange={handleInputValue}
            />
            {styleType === 'limit' && <StyledInputLimit>( <em>{valueLength}</em> / {limit} )</StyledInputLimit>}
        </StyledFormWrapper>
    )
}

TextArea.propTypes = {
    styleType: PropTypes.oneOf(['default', 'limit']),
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    limitType: PropTypes.oneOf(['byte', 'length']),    // byte, length
    limit: PropTypes.number,
}

TextArea.defaultProps = {
    styleType: 'default',
    placeholder: '입력해주세요',
    value: '',
    width: 'wx300',
    height: 'hx100',
    limitType: 'length',
    limit: 0,
}

export default TextArea;