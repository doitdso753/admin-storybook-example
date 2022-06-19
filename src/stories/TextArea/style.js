import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  // .resp_input, .resp_select, .resp_textarea, .resp_checkbox, .resp_radio {  }
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
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