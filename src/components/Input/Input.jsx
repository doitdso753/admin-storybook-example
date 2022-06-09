import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ width = 'wx300', }) => {
    return (
        <div className={['resp_input', width].join(' ')}>
            <input type="text" name="" placeholder="입력해주세요"/>
        </div>
    )
}

Input.propTypes = {
    width: PropTypes.string,
}

Input.defaultProps = {
    width: null
}

export default Input;