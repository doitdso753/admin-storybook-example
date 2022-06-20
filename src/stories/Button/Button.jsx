import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from "./style";

const Button = ({
    btnCount,
    className,
    size,
    color,
    btnType,
    styleType,
    disabled,
    handleClick,
    children,
    ...props
}) => {
    return (
        <StyledButton
            btnCount={btnCount}
            size={size}
            color={color}
            btnType={btnType}
            styleType={styleType}
            disabled={disabled}
            onClick={handleClick}
            className={[className].join(' ')}
        >
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    btnCount: PropTypes.oneOf([1, 2, 3, 4]),
    className: PropTypes.array,
    paddingTop: PropTypes.string,
    size: PropTypes.oneOf(['SS', 'S', 'L', 'XL', 'D']),
    color: PropTypes.oneOf(['default', 'white', 'blue', 'orange', 'gray', 'green']),
    btnType: PropTypes.oneOf(['full', 'line']),
    styleType: PropTypes.oneOf(['center', 'inline, full']),
    handleClick: PropTypes.func,
    children: PropTypes.any.isRequired,
}

Button.defaultType = {
    btnCount: 1,
    className: 'pdt15',
    size: 'D',
    color: 'default',
    btnType: 'full',
    styleType: 'inline',
    handleClick: () => {},
}

export default Button;