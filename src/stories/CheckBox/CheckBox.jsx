import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormWrapper, StyledLabel, StyledRadioButton } from "./style";

const CheckBox = ({
    list,
    name,
    isAllChecked,
}) => {
    const [checkedData, setCheckedData] = useState([]);

    // 전체 체크 클릭 시 발생하는 함수
    const handleCheckedAll = useCallback(
        (checked) => {
            if (checked) {
                const checkedListArray = [];

                list.forEach((list) => checkedListArray.push(list));

                setCheckedData(checkedListArray);
            } else {
                setCheckedData([]);
            }
        },
        [list]
    );

    // 개별 체크 클릭 시 발생하는 함수
    const handleCheckedOne = useCallback(
        (checked, item) => {
           if (checked) {
               setCheckedData([...checkedData, item]);
           } else {
               setCheckedData(checkedData.filter((el) => el !== item));
            }
        },
        [checkedData]
    );
    if  (!list.length > 0) return;


    return (
        <StyledFormWrapper>
            {isAllChecked && (
                <StyledLabel>
                    <StyledRadioButton
                        name={name}
                        value=''
                        checked={checkedData.length === 0
                            ? false
                            : checkedData.length === list.length
                        }
                        onChange={(e) => handleCheckedAll(e.target.checked)}
                    />&nbsp;전체
                </StyledLabel>
            )}
            {list.map((item) => (
                <StyledLabel key={item.value}>
                    <StyledRadioButton
                        name={name}
                        value={item.value}
                        checked={checkedData.includes(item)}
                        onChange={(e) => handleCheckedOne(e.target.checked, item)}
                    />&nbsp;{item.label}
                </StyledLabel>
            ))}
        </StyledFormWrapper>
    );
}

CheckBox.propTypes = {
    list: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    isAllChecked: PropTypes.bool,
}

CheckBox.defaultProps = {
    isAllChecked: false,
}

export default CheckBox;