import styled from 'styled-components';

const extractOnlyNumber = (value) => {
    const REG_NUMBER = /[^0-9]/g;
    return parseInt(value.replace(REG_NUMBER, ''));
}

const getStyleByStyleType = (styleType, element, ...args) => {
    // console.log(styleType, element, args);
    // if (args.length > 0) {
    //     console.log(extractOnlyNumber(args[0]) - 36);
    // }
    switch (styleType) {
        case 'btn':
            if (element === 'wrapper') {
                return `
                  display: inline-block;
                  // margin-left: 3px;
                  border-radius: 2px;
                  // border: 1px solid #b3b3b3;
                  border: 1px solid #d7d7d7;
                `;
            }
            else if (element === 'input') {
                return `
                    width: ${ extractOnlyNumber(args[0]) - 38 }px;
                    border: 0;
                `;
            }
        default:
            return element === 'wrapper'
                ? `position: relative;
                   display: inline-block;
                   vertical-align: middle;
                   text-align: left;`
                : ``;
    }
}

export const StyledFormWrapper = styled.div`
  // .resp_input, .resp_select, .resp_textarea, .resp_checkbox, .resp_radio {  }
  ${({ styleType }) => getStyleByStyleType(styleType, 'wrapper')}
`;

// input[type="text"], input[type="password"], input[type="file"], input[type="number"]
export const StyledInput = styled.input.attrs((props) => ({
    type: props.type
}))`
  display:inline-block; 
  vertical-align:middle; 
  width:100%; 
  border-radius:2px; 
  border:1px solid #d7d7d7; 
  background-color:#fff; 
  padding:7px 15px;
  line-height:1.6; 
  font-size:13px; 
  color:#333;
  
  &:focus {
    border-color: #aeafb4;
  }
  
  &:disabled { 
    opacity:0.8; 
    background:#d7d7d7; 
  }

  ${({ styleType, width }) => getStyleByStyleType(styleType, 'input', width)}
`;

export const StyledInputBtn = styled.button.attrs({
})`
  display:inline-block; 
  vertical-align:middle; 
  background:url('/images/icon/icon_header.png') no-repeat; 
  width:26px; 
  height:26px; 
  text-indent:-9999px;

  margin-right:10px;
  border:none;
  background-position:-180px 0;
  cursor:pointer;
`;

export const StyledInputLimit = styled.span`
  position: absolute;
  bottom: 8px;
  right: 15px;
  font-size: 13px;
  //color: #6f6f6f;

  em {
    font-weight: 600;
    color: #348df1;
  }
`

export const StyledSelectBox = styled.select`
  display:inline-block; 
  vertical-align:middle; 
  -webkit-appearance:none; 
  -moz-appearance:none; 
  appearance:none; 
  width:100%; 
  border-radius:2px; 
  border:1px solid #d7d7d7; 
  background:#fff url('/images/icon/icon_select.png') no-repeat right center; 
  padding:7px 30px 7px 15px; line-height:1.6; 
  font-size:13px; 
  color:#333;

  &:focus {
    border-color: #aeafb4;
  }

  &:disabled {
    opacity:0.8;
    background:#d7d7d7;
  }
`;

export const StyledTextarea = styled.textarea`
  display:inline-block; 
  vertical-align:middle; 
  resize:none; 
  overflow-y:auto; 
  width:100%; 
  height:100%; 
  border-radius:2px; 
  border:1px solid #d7d7d7; 
  background-color:#fff; 
  padding:7px 15px; 
  line-height:1.6; 
  font-size:13px; 
  color:#333;

  &:focus {
    border-color: #aeafb4;
  }
  
  &:disabled {
    opacity:0.8;
    background:#d7d7d7;
  }
`;