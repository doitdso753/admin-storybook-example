import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {StyledTable, StyledTableWithLine} from "./style";

const HorizontalForm = ({
    tableType,
    headerWidth,
    titleList,
    contentList,
}) => {
    if (titleList.length !== contentList.length) new Error('titleList props length isn\'t equal contentList props length');

    const Table = ({children}) => (
        tableType === 'line' ?
            <StyledTableWithLine>{children}</StyledTableWithLine>
            : <StyledTable>{children}</StyledTable>
    );

    return (
        <Table>
            <colgroup>
                {titleList?.length > 0 && (
                    titleList.map((title, index) => (
                        index === 0 ? <col key={index} width={headerWidth} /> : <col key={index} width="" />
                    ))
                )}
            </colgroup>
            <tbody>
            {titleList?.length > 0 && (
                titleList.map((title, index) => (
                    <tr key={index}>
                        <th>{title}</th>
                        <td>{contentList[index]}</td>
                    </tr>
                ))
            )}
            </tbody>
        </Table>
    );
}

HorizontalForm.propTypes = {
    tableType: PropTypes.oneOf(['default', 'line']),
    headerWidth: PropTypes.string,
    titleList: PropTypes.array.isRequired,
    contentList: PropTypes.array.isRequired,
}

HorizontalForm.defaultProps = {
    tableType: 'default',
    headerWidth: '200px',
    titleList: [],
    contentList: [],
}

export default HorizontalForm;