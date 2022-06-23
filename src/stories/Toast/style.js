import styled from 'styled-components';

export const ToastWrapper = styled.div`
`;

export const ToastTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  letter-spacing: -1px;
`;

export const ToastDate = styled.div`
  padding-top: 3px;
  //text-indent: -8px;
  font-size: 12px;
  //letter-spacing: -1px;
  color: #aeafb4;
  line-height: 10px;
`;

export const ToastDesc = styled.div`
  padding-top: 8px;
  //text-indent: -8px;
  font-size: 13px;
  letter-spacing: -1px;
  color: #333;
`;

export const ToastColor = styled.span`
  color: ${({ color }) => color};
`;

