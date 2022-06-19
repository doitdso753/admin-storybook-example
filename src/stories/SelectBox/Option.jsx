import React from 'react';
import PropTypes from 'prop-types';
import { StyledOption } from "./style";

const Option = ({
    value,
    label,
    disabled
}) => {
    return (
        <StyledOption value={value} disabled={disabled}>
            {label || value}
        </StyledOption>
    )
}

Option.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default Option;