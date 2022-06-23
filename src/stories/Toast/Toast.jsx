import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ToastColor, ToastDate, ToastDesc, ToastTitle, ToastWrapper} from "./style";

const color = (state) => (
    state === 'success' ? '#3a96fd' : state === 'fail' ? 'red' : '#333'
)

const Toast = ({
    title,
    date,
    totalCnt,
    failCnt,
    successCnt,
}) => {
    const AnswerGuide = ({ closeToast, toastProps }) => {
        if (failCnt > 0) {
            return (
                <ToastWrapper>
                    <ToastTitle>{title}</ToastTitle>
                    <ToastDate>{date}</ToastDate>
                    <ToastDesc>총 {totalCnt}건</ToastDesc>
                </ToastWrapper>
            )
        }
        else {
            return (
                <ToastWrapper>
                    <ToastTitle>{title}&nbsp;<ToastColor color={color('fail')}>(실패 {failCnt}건)</ToastColor></ToastTitle>
                    <ToastDate>{date}</ToastDate>
                    <ToastDesc>
                        총 {totalCnt}건&nbsp;
                        (<ToastColor color={color('success')}>성공: {successCnt}건</ToastColor>
                        <span>&nbsp;/&nbsp;</span>
                        <ToastColor color={color('fail')}>실패: {failCnt}건</ToastColor>)
                    </ToastDesc>
                </ToastWrapper>
            )

        }
    };

    const notify = () => toast(<AnswerGuide />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    return (
        <>
            <button onClick={notify}>Toast Open!</button>
            <ToastContainer />
        </>

    )
}

Toast.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    totalCnt: PropTypes.number,
    failCnt: PropTypes.number,
    successCnt: PropTypes.number,
}

Toast.defaultProps = {
    title: '',
    date: '',
    totalCnt: 0,
    failCnt: 0,
    successCnt: 0,
}

export default Toast;