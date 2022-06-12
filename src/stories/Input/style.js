import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  //.resp_input, .resp_select, .resp_textarea, .resp_checkbox, .resp_radio {  }
  position:relative;
  display:inline-block;
  vertical-align:middle;
  text-align:left;
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
`;

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