import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  // .resp_input, .resp_select, .resp_textarea, .resp_checkbox, .resp_radio {  }
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  min-width: 80px;
  margin-right: 15px;
  line-height: 1.6;
  font-size: 13px;
  color: #333;

  &:last-child {
    margin-right: 0;
  }

  &:disabled {
    color: #999;
  }
`;

// input[type="radio"]
export const StyledRadioButton = styled.input.attrs((props) => ({
    type: 'radio'
}))`
  display: inline-block;
  vertical-align: middle;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 0;
  margin: 0 4px 4px 0;
  padding: 0;
  cursor: pointer;
  border-radius: 50px;
  background: url('/images/radio_off.png') no-repeat 0 0;

  &:checked {
    background: url('/images/radio_on.png') no-repeat 0 0;
  }

  &:disabled {
    opacity: 0.8;
  }
`;