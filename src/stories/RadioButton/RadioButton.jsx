import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {StyledFormWrapper, StyledLabel, StyledRadioButton} from "./style";

const RadioButton = ({
    list,
    name,
}) => {
    const [checkedData, setCheckedData] = useState({});
    if  (!list.length > 0) return;

    const handleChange = useCallback(
(value) => {
            const checked = list.filter((item) => item.value === value);
            if (checked) {
                setCheckedData(checked[0]);
            }
        },
[checkedData]
    );

    return (
        <StyledFormWrapper>
            {list.map((item) => (
                <StyledLabel key={item.value}>
                    <StyledRadioButton
                        name={name}
                        value={item.value}
                        checked={item.value === checkedData.value}
                        onChange={(e) => handleChange(e.target.value)}
                    />&nbsp;{item.label}
                </StyledLabel>
            ))}
        </StyledFormWrapper>
    );
}

RadioButton.propTypes = {
    list: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
}

RadioButton.defaultProps = {
}

export default RadioButton;