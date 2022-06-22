import styled from 'styled-components';

/* 세로형 테이블 *//*
.table_row {  }
.table_row > tbody > tr { border-top:1px solid #ccc; }
.table_row > tbody > tr > th { height:54px; border-left:0 solid #ccc; background-color:#eff3fc; padding:8px 15px; text-align:left; word-break:break-all; font-weight:normal; color:#41454b; line-height:1.5; }
.table_row > tbody > tr > td { height:54px; border-left:0 solid #ccc; background-color:#fff; padding:8px 15px; text-align:left; word-break:break-all; color:#41454b; line-height:1.5; }
.table_row .help { background-position:-86px 0; width:16px; height:16px; margin-top:-2px; cursor:pointer; }

/!* 세로형 테이블 2 *!/
.table_row.v2 { width:100%; border-collapse:collapse; border-top:0 solid #ccc; border-bottom:0 solid #ccc; }
.table_row.v2 > tbody > tr { border-top:0 solid #ccc; }
.table_row.v2 > tbody > tr > th { border-bottom:0 solid #ccc; border-left:0 solid #ccc; background-color:#fff; padding:16px 15px 5px 0; text-align:left; vertical-align:top; word-break:break-all; font-weight:normal; font-size:14px; color:#41454b; line-height:1.5; }
.table_row.v2 > tbody > tr > td { border-left:0 solid #ccc; background-color:#fff; padding:5px 15px; text-align:left; word-break:break-all; color:#41454b; line-height:1.5; }
.table_row.v2 > tbody > tr > td .resp_checkbox label,
.table_row.v2 > tbody > tr > td .resp_radio label { padding-top:3px; }

/!* 세로형 테이블 + 버튼 *!/
.table_col + .resp_btn_wrap, .table_row + .resp_btn_wrap { padding-top:10px; text-align:center; }*/

export const StyledTableWithLine = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  & > tbody > tr {
    border-top: 1px solid #ccc;
  }

  & > tbody > tr > th {
    height: 54px;
    border-left: 0 solid #ccc;
    background-color: #eff3fc;
    padding: 8px 15px;
    text-align: left;
    word-break: break-all;
    font-weight: normal;
    color: #41454b;
    line-height: 1.5;
  }

  & > tbody > tr > td {
    height: 54px;
    border-left: 0 solid #ccc;
    background-color: #fff;
    padding: 8px 15px;
    text-align: left;
    word-break: break-all;
    color: #41454b;
    line-height: 1.5;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 0 solid #ccc;
  border-bottom: 0 solid #ccc;

  & > tbody > tr {
    border-top: 0 solid #ccc;
  }

  & > tbody > tr > th {
    border-bottom: 0 solid #ccc;
    border-left: 0 solid #ccc;
    background-color: #fff;
    padding: 16px 15px 5px 0;
    text-align: left;
    vertical-align: top;
    word-break: break-all;
    font-weight: normal;
    font-size: 14px;
    color: #41454b;
    line-height: 1.5;
  }

  & > tbody > tr > td {
    border-left: 0 solid #ccc;
    background-color: #fff;
    padding: 5px 15px;
    text-align: left;
    word-break: break-all;
    color: #41454b;
    line-height: 1.5;
  }

  & > tbody > tr > td .resp_checkbox label,
  & > tbody > tr > td .resp_radio label {
    padding-top: 3px;
  }
`;

export const StyledHelp = styled.span`
  background-position: -86px 0;
  width: 16px;
  height: 16px;
  margin-top: -2px;
  cursor: pointer;
`;
