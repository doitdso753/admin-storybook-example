import styled from 'styled-components';

const getStyle = (color, type) => {
    let fontColor = '';
    let borderColor = '';
    let backgroundColor = '';
    let hoverBorderColor = '';
    let hoverBackgroundColor = '';

    switch (color) {
        case 'white':
            // .resp_btn.b_white { border:1px solid #d7d7d7; background-color:#fff; color:#666; }
            // .resp_btn.b_white:hover { border-color:#aeafb4; background-color:#eff0f2; }
            fontColor = '666';
            borderColor = 'd7d7d7';
            backgroundColor = 'fff';
            hoverBorderColor = 'aeafb4';
            hoverBackgroundColor = 'eff0f2';
            break;
        case 'blue':
            // .resp_btn.b_blue { border:1px solid #3a96fd; background-color:#3a96fd; color:#fff; }
            // .resp_btn.b_blue:hover { border-color:#187bea; background-color:#187bea; }
            // .resp_btn.b_blue_line  { border:1px solid #3a96fc; background-color:#fff; color:#187bea; }
            // .resp_btn.b_blue_line:hover { border-color:#187bea; background-color:#eff0f2; }
            fontColor = type !== 'line' ? 'fff' : '187bea';
            borderColor = '3a96fd';
            backgroundColor = type !== 'line' ? '3a96fd' : 'fff';
            hoverBorderColor = '187bea';
            hoverBackgroundColor = type !== 'line' ? '187bea' : 'eff0f2';
            break;
        case 'orange':
            // .resp_btn.b_orange { border:1px solid #ed7d31; background-color:#ed7d31; color:#fff; }
            // .resp_btn.b_orange:hover { border-color:#e46d1c; background-color:#e46d1c; }
            // .resp_btn.b_orange_line  { border:1px solid #ed7d31; background-color:#fff; color:#e46d1c; }
            // .resp_btn.b_orange_line:hover { border-color:#e46d1c; background-color:#eff0f2; }
            fontColor = type !== 'line' ? 'fff' : 'e46d1c';
            borderColor = 'ed7d31';
            backgroundColor = type !== 'line' ? 'ed7d31' : 'fff';
            hoverBorderColor = 'e46d1c';
            hoverBackgroundColor = type !== 'line' ? 'e46d1c' : 'eff0f2';
            break;
        case 'gray':
            // .resp_btn.b_gray { border:1px solid #aeafb4; background-color:#aeafb4; color:#fff; }
            // .resp_btn.b_gray:hover { border-color:#989ba8; background-color:#989ba8; }
            // .resp_btn.b_gray_line { border:1px solid #aeafb4; background-color:#fff; color:#333; }
            // .resp_btn.b_gray_line:hover { border-color:#989aa2; background-color:#eff0f2; }
            fontColor = type !== 'line' ? 'fff' : '333';
            borderColor = 'aeafb4';
            backgroundColor = type !== 'line' ? 'aeafb4' : 'fff';
            hoverBorderColor = '989ba8';
            hoverBackgroundColor = type !== 'line' ? '989ba8' : 'eff0f2';
            break;
        case 'green':
            // .resp_btn.b_green { border:1px solid #649a3c; background-color:#649a3c; color:#fff; }
            // .resp_btn.b_green:hover { border:1px solid #51842c; background-color:#51842c; }
            // .resp_btn.b_green_line { border:1px solid #649a3c; background-color:#fff; color:#51842c; }
            // .resp_btn.b_green_line:hover { border:1px solid #51842c; background-color:#eff0f2; }
            fontColor = type !== 'line' ? 'fff' : '51842c';
            borderColor = '649a3c';
            backgroundColor = type !== 'line' ? '649a3c' : 'fff';
            hoverBorderColor = '51842c';
            hoverBackgroundColor = type !== 'line' ? '51842c' : 'eff0f2';
            break;
        default:
            // border: 1px solid #e0e0e0; background-color: #eff0f2; color: #333;
            // &:hover { border: 1px solid #aeafb4; background-color: #eff0f2; }
            fontColor = '333';
            borderColor = 'e0e0e0';
            backgroundColor = 'eff0f2';
            hoverBorderColor = 'aeafb4';
            hoverBackgroundColor = 'eff0f2';
            break;
    }

    return `
        border:1px solid #${borderColor}; background-color:#${backgroundColor}; color:#${fontColor};
        &:hover {
            border-color:#${hoverBorderColor}; background-color:#${hoverBackgroundColor};
        }
    `;

}

export const StyledButtonWrapper = styled.div`
  //padding-top: ${({ topSpacing }) => `${topSpacing}px`};
  text-align: center;

`

export const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 2px;
  margin: 0;
  padding: 0 10px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -1px;
  transition: all 0.3s ease;

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }

  ${(props) => getStyle(props.color, props.styleType)}

  ${({size, btnCount}) => {
    if (btnCount > 1) {
      switch (btnCount) {
        case 2:
          return `width: calc(50% - 3px);`;
        case 3:
          return `width: calc(33.33% - 3px);`;
        case 4:
          return `width: calc(25% - 3.2px);`;
        default:
          return ``;
      }
    }
    
    switch (size) {
      case 'SS':
        return `
                padding:0 5px;
                line-height:19px;
                font-size:11px;
            `;
      case 'S':
        return `
                padding:0 7px;
                line-height:26px;
                font-size:11px;
            `;
      case 'L':
        return `
                padding:3px 20px;
                font-weight:400;
                font-size:14px;
                min-width:80px;
            `;
      case 'XL':
        return `
                padding:6px 30px;
                font-weight:400;
                font-size:14px;
                min-width:130px;
            `;
      default:
        return `
                min-width:60px;
            `;
    }
  }}

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export const StyledPlusButton = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  vertical-align: middle;
  padding: 8px;
  border-radius: 50%;
  border: 0;
  background: url('/images/icon/icon_plus.png') center no-repeat;
  background-color: #aeafb4;
  cursor: pointer;
`;

export const StyledMinusButton = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  vertical-align: middle;
  padding: 8px;
  border-radius: 50%;
  border: 0;
  background: url('/images/icon/icon_minus.png') center no-repeat;
  background-color: #aeafb4;
  cursor: pointer;
`;

export const StyledFileWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 2px;
  margin: 0;
  padding: 0 10px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -1px;
  transition: all 0.3s ease;
  min-width:60px;
  border: 1px solid #e0e0e0; background-color: #eff0f2; color: #333;
  &:hover { border: 1px solid #aeafb4; background-color: #eff0f2; }
  
  
  
`;