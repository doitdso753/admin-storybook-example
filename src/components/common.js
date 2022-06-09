import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { box-sizing:border-box; }
    html, body { width:100%; height:100%; overflow-x:none; }
    body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select, a { margin:0; padding:0; outline:none; }
    body, input, textarea, select, button, table { font-family:'Malgun Gothic', 'NanumGothic', 'Roboto', 'AppleGothic', 'Dotum', sans-serif; font-size:13px; color:#333; letter-spacing:-0.5px; line-height:1.5; }
    a:link, a:active, a:visited { color:#333; text-decoration:none; }
    a:hover { text-decoration:none; }
    form { clear:both; }
    legend { visibility:hidden; overflow:hidden; position:absolute; top:0; left:0; width:0; height:0; padding:0; font-size:0; line-height:0; }
    img, fieldset { border:0; vertical-align:middle; }
    ul, ol { list-style:none; }
    em, address { font-style:normal; }
    a { text-decoration:none; }
    label { cursor:pointer; }
    h1 { font-size:24px; }
    h2 { font-size:20px; }
    h3 { font-size:17px; }
    h4 { font-size:15px; }
    h5 { font-size:14px; }
    
    .hand { cursor:pointer; }
    .move { cursor:move; }
    .underline { text-decoration:underline !important; }
    .relative { position:relative; }
    .absolute { position:absolute; }
    .strike { text-decoration:line-through; }
    .tahoma { font-family:'tahoma', sans-serif; }
    .dotum { font-family:'dotum', sans-serif; }
    .bold { font-weight:bold; }
    .hide { display:none; }
    .desc { font-size:11px; color:#747474; }
    .desc2 { font-size:12px; color:#747474; }
    
    /* 각종 정렬 */
    .v_top { vertical-align:top !important; }
    .v_middle { vertical-align:middle !important; }
    .v_bottom { vertical-align:bottom !important; }
    .t_left, .left { text-align:left !important; }
    .t_center, .center { text-align:center !important; }
    .t_right, .right { text-align:right !important; }
    
    /* 각종 컬러 */
    .beige { color:#eceba8 !important; }
    .red { color:#f00 !important; }
    .blue { color:#06c !important; }
    .white { color:#fff !important; }
    .black { color:#000 !important; }
    .yellow { color:#ffd700 !important; }
    .green { color:#0f0 !important; }
    .deepgreen { color:#0c0 !important; }
    .lightgreen { color:#2aff98 !important; }
    .orange { color:#f90 !important; }
    .silver { color:#cecece !important; }
    .gray { color:#999 !important; }
    .darkgray { color:#666 !important; }
    .darkorange { color:#d13b00 !important; }
    .highlight-link { color:#d13b00 !important; }
    .ngreen { color:#080 !important; }
    .ngray { color:#95969e !important; }
    .bg-gray { background-color:#eee !important; }
    .bg-blue { background-color:#06c !important; }
    .bg-silver { background-color:#cecece !important; }
    .bg-yellow { background-color:#ffd700 !important; }
    .bg-red { background-color:#df171e !important; }
    .bg-pastelred { background-color:#ffbdbf !important; }
    .bg-lightyellow { background-color:#ffffc4 !important; }
    .bg-darkgray { background-color:#666 !important; }
    
    /* 클리어부스 */
    .fl { float:left !important; }
    .fr { float:right !important; }
    .cboth { clear:both }
    .clearbox, .clearfix { *zoom:1; }
    .clearbox:after, .clearfix:after { display:block; content:""; clear:both; }
    
    /* 리스트 타입 */
    .li-none { list-style-type:none; }
    .li-disc { list-style-type:disc; }
    .li-circle { list-style-type:circle; }
    .li-square { list-style-type:square; }
    .li-decimal { list-style-type:decimal; }
    
    ::-webkit-input-placeholder { color:#8f8f8f; }
    ::-moz-placeholder { color:#8f8f8f; }
    :-ms-input-placeholder { color:#8f8f8f; }
    :-moz-placeholder { color:#8f8f8f; }
    ::-webkit-input-title { color:#8f8f8f; }
    ::-moz-title { color:#8f8f8f; }
    :-ms-input-title { color:#8f8f8f; }
    :-moz-title { color:#8f8f8f; }
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }
    
    /* Firefox */
    input[type=number] { -moz-appearance:textfield; }
    
    /* 폰트 사이즈 */
    .fx11 { font-size:11px !important;}
    .fx12 { font-size:12px !important;}
    .fx13 { font-size:13px !important;}
    .fx14 { font-size:14px !important;}
    .fx15 { font-size:15px !important;}
    .fx16 { font-size:16px !important;}
    .fx17 { font-size:17px !important;}
    .fx18 { font-size:18px !important;}
    .fx19 { font-size:19px !important;}
    .fx20 { font-size:20px !important;}
    .fx21 { font-size:21px !important;}
    .fx22 { font-size:22px !important;}
    .fx23 { font-size:23px !important;}
    .fx24 { font-size:24px !important;}
    .fx25 { font-size:25px !important;}
    
    /* spacing 설정 */
    .ls-0 { letter-spacing:0px !important; }
    .ls-05 { letter-spacing:-0.5px !important; }
    .ls-1 { letter-spacing:-1px !important; }
    .ls-2 { letter-spacing:-2px !important; }
    .ls-3 { letter-spacing:-3px !important; }
    .ls-4 { letter-spacing:-4px !important; }
    .ls-5 { letter-spacing:-5px !important; }
    
    /* margin 설정 */
    .mt-1 { margin-top:-1px !important;}
    .mt-2 { margin-top:-2px !important;}
    .mt-3 { margin-top:-3px !important;}
    .mt-4 { margin-top:-4px !important;}
    .mt-5 { margin-top:-5px !important;}
    .mt-6 { margin-top:-6px !important;}
    .mt-7 { margin-top:-7px !important;}
    .mt-8 { margin-top:-8px !important;}
    .mt-9 { margin-top:-9px !important;}
    .mt-10 { margin-top:-10px !important;}
    
    .mt0 { margin-top:0px !important;}
    .mt1 { margin-top:1px !important;}
    .mt2 { margin-top:2px !important;}
    .mt3 { margin-top:3px !important;}
    .mt4 { margin-top:4px !important;}
    .mt5 { margin-top:5px !important;}
    .mt6 { margin-top:6px !important;}
    .mt7 { margin-top:7px !important;}
    .mt8 { margin-top:8px !important;}
    .mt9 { margin-top:9px !important;}
    .mt10 { margin-top:10px !important;}
    .mt15 { margin-top:15px !important;}
    .mt20 { margin-top:20px !important;}
    .mt25 { margin-top:25px !important;}
    .mt30 { margin-top:30px !important;}
    .mt35 { margin-top:35px !important;}
    .mt40 { margin-top:40px !important;}
    .mt45 { margin-top:45px !important;}
    .mt50 { margin-top:50px !important;}
    
    .mb-1 { margin-bottom:-1px !important;}
    .mb-2 { margin-bottom:-2px !important;}
    .mb-3 { margin-bottom:-3px !important;}
    .mb-4 { margin-bottom:-4px !important;}
    .mb-5 { margin-bottom:-5px !important;}
    .mb-6 { margin-bottom:-6px !important;}
    .mb-7 { margin-bottom:-7px !important;}
    .mb-8 { margin-bottom:-8px !important;}
    .mb-9 { margin-bottom:-9px !important;}
    .mb-10 { margin-bottom:-10px !important;}
    
    .mb0 { margin-bottom:0px !important;}
    .mb1 { margin-bottom:1px !important;}
    .mb2 { margin-bottom:2px !important;}
    .mb3 { margin-bottom:3px !important;}
    .mb4 { margin-bottom:4px !important;}
    .mb5 { margin-bottom:5px !important;}
    .mb6 { margin-bottom:6px !important;}
    .mb7 { margin-bottom:7px !important;}
    .mb8 { margin-bottom:8px !important;}
    .mb9 { margin-bottom:9px !important;}
    .mb10 { margin-bottom:10px !important;}
    .mb15 { margin-bottom:15px !important;}
    .mb20 { margin-bottom:20px !important;}
    .mb25 { margin-bottom:25px !important;}
    .mb30 { margin-bottom:30px !important;}
    .mb35 { margin-bottom:35px !important;}
    .mb40 { margin-bottom:40px !important;}
    .mb45 { margin-bottom:45px !important;}
    .mb50 { margin-bottom:50px !important;}
    
    .ml0 { margin-left:0px !important;}
    .ml5 { margin-left:5px !important;}
    .ml10 { margin-left:10px !important;}
    .ml15 { margin-left:15px !important;}
    .ml20 { margin-left:20px !important;}
    .ml25 { margin-left:25px !important;}
    .ml30 { margin-left:30px !important;}
    .ml35 { margin-left:35px !important;}
    .ml40 { margin-left:40px !important;}
    .ml45 { margin-left:45px !important;}
    .ml50 { margin-left:50px !important;}
    
    .mr0 { margin-right:0px !important;}
    .mr5 { margin-right:5px !important;}
    .mr10 { margin-right:10px !important;}
    .mr15 { margin-right:15px !important;}
    .mr20 { margin-right:20px !important;}
    .mr25 { margin-right:25px !important;}
    .mr30 { margin-right:30px !important;}
    .mr35 { margin-right:35px !important;}
    .mr40 { margin-right:40px !important;}
    .mr45 { margin-right:45px !important;}
    .mr50 { margin-right:50px !important;}
    
    /* padding 설정 */
    .pd0 { padding:0 !important;}
    .pd5 { padding:5px !important;}
    .pd10 { padding:10px !important;}
    .pd15 { padding:15px !important;}
    .pd20 { padding:20px !important;}
    .pd25 { padding:25px !important;}
    .pd30 { padding:30px !important;}
    .pd35 { padding:35px !important;}
    .pd40 { padding:40px !important;}
    .pd45 { padding:45px !important;}
    .pd50 { padding:50px !important;}
    
    .pdt0 { padding-top:0 !important;}
    .pdt5 { padding-top:5px !important;}
    .pdt10 { padding-top:10px !important;}
    .pdt15 { padding-top:15px !important;}
    .pdt20 { padding-top:20px !important;}
    .pdt25 { padding-top:25px !important;}
    .pdt30 { padding-top:30px !important;}
    .pdt35 { padding-top:35px !important;}
    .pdt40 { padding-top:40px !important;}
    .pdt45 { padding-top:45px !important;}
    .pdt50 { padding-top:50px !important;}
    
    .pdb0 { padding-bottom:0 !important;}
    .pdb5 { padding-bottom:5px !important;}
    .pdb10 { padding-bottom:10px !important;}
    .pdb15 { padding-bottom:15px !important;}
    .pdb20 { padding-bottom:20px !important;}
    .pdb25 { padding-bottom:25px !important;}
    .pdb30 { padding-bottom:30px !important;}
    .pdb35 { padding-bottom:35px !important;}
    .pdb40 { padding-bottom:40px !important;}
    .pdb45 { padding-bottom:45px !important;}
    .pdb50 { padding-bottom:50px !important;}
    
    .pdl0 { padding-left:0 !important;}
    .pdl5 { padding-left:5px !important;}
    .pdl10 { padding-left:10px !important;}
    .pdl15 { padding-left:15px !important;}
    .pdl20 { padding-left:20px !important;}
    .pdl25 { padding-left:25px !important;}
    .pdl30 { padding-left:30px !important;}
    .pdl35 { padding-left:35px !important;}
    .pdl40 { padding-left:40px !important;}
    .pdl45 { padding-left:45px !important;}
    .pdl50 { padding-left:50px !important;}
    
    .pdr0 { padding-right:0 !important;}
    .pdr5 { padding-right:5px !important;}
    .pdr10 { padding-right:10px !important;}
    .pdr15 { padding-right:15px !important;}
    .pdr20 { padding-right:20px !important;}
    .pdr25 { padding-right:25px !important;}
    .pdr30 { padding-right:30px !important;}
    .pdr35 { padding-right:35px !important;}
    .pdr40 { padding-right:40px !important;}
    .pdr45 { padding-right:45px !important;}
    .pdr50 { padding-right:50px !important;}
    
    /* 가로 사이즈 */
    .wx5 { width:5px !important;}
    .wx10 { width:10px !important;}
    .wx15 { width:15px !important;}
    .wx20 { width:20px !important;}
    .wx25 { width:25px !important;}
    .wx30 { width:30px !important;}
    .wx35 { width:35px !important;}
    .wx40 { width:40px !important;}
    .wx45 { width:45px !important;}
    .wx50 { width:50px !important;}
    .wx55 { width:55px !important;}
    .wx60 { width:60px !important;}
    .wx65 { width:65px !important;}
    .wx70 { width:70px !important;}
    .wx75 { width:75px !important;}
    .wx80 { width:80px !important;}
    .wx85 { width:85px !important;}
    .wx90 { width:90px !important;}
    .wx95 { width:95px !important;}
    .wx100 { width:100px !important;}
    .wx110 { width:110px !important;}
    .wx120 { width:120px !important;}
    .wx130 { width:130px !important;}
    .wx140 { width:140px !important;}
    .wx150 { width:150px !important;}
    .wx200 { width:200px !important;}
    .wx250 { width:250px !important;}
    .wx300 { width:300px !important;}
    .wx350 { width:350px !important;}
    .wx400 { width:400px !important;}
    .wx450 { width:450px !important;}
    .wx500 { width:500px !important;}
    .wx550 { width:550px !important;}
    .wx600 { width:600px !important;}
    .wx650 { width:650px !important;}
    .wx700 { width:700px !important;}
    .wx750 { width:750px !important;}
    .wx800 { width:800px !important;}
    .wx850 { width:850px !important;}
    .wx900 { width:900px !important;}
    .wx950 { width:950px !important;}
    .wx1000 { width:1000px !important;}
    
    .wp5 { width:5% !important;}
    .wp10 { width:10% !important;}
    .wp15 { width:15% !important;}
    .wp20 { width:20% !important;}
    .wp25 { width:25% !important;}
    .wp30 { width:30% !important;}
    .wp35 { width:35% !important;}
    .wp40 { width:40% !important;}
    .wp45 { width:45% !important;}
    .wp50 { width:50% !important;}
    .wp55 { width:55% !important;}
    .wp60 { width:60% !important;}
    .wp65 { width:65% !important;}
    .wp70 { width:70% !important;}
    .wp75 { width:75% !important;}
    .wp80 { width:80% !important;}
    .wp85 { width:85% !important;}
    .wp90 { width:90% !important;}
    .wp95 { width:95% !important;}
    .wp100 { width:100% !important;}
    
    /* 세로 사이즈 */
    .hx5 { height:5px !important;}
    .hx10 { height:10px !important;}
    .hx15 { height:15px !important;}
    .hx20 { height:20px !important;}
    .hx25 { height:25px !important;}
    .hx30 { height:30px !important;}
    .hx35 { height:35px !important;}
    .hx40 { height:40px !important;}
    .hx45 { height:45px !important;}
    .hx50 { height:50px !important;}
    .hx55 { height:55px !important;}
    .hx60 { height:60px !important;}
    .hx65 { height:65px !important;}
    .hx70 { height:70px !important;}
    .hx75 { height:75px !important;}
    .hx80 { height:80px !important;}
    .hx85 { height:85px !important;}
    .hx90 { height:90px !important;}
    .hx95 { height:95px !important;}
    .hx100 { height:100px !important;}
    .hx150 { height:150px !important;}
    .hx200 { height:200px !important;}
    .hx250 { height:250px !important;}
    .hx300 { height:300px !important;}
    .hx350 { height:350px !important;}
    .hx400 { height:400px !important;}
    .hx450 { height:450px !important;}
    .hx500 { height:500px !important;}
    
    .hp5 { height:5% !important;}
    .hp10 { height:10% !important;}
    .hp15 { height:15% !important;}
    .hp20 { height:20% !important;}
    .hp25 { height:25% !important;}
    .hp30 { height:30% !important;}
    .hp35 { height:35% !important;}
    .hp40 { height:40% !important;}
    .hp45 { height:45% !important;}
    .hp50 { height:50% !important;}
    .hp55 { height:55% !important;}
    .hp60 { height:60% !important;}
    .hp65 { height:65% !important;}
    .hp70 { height:70% !important;}
    .hp75 { height:75% !important;}
    .hp80 { height:80% !important;}
    .hp85 { height:85% !important;}
    .hp90 { height:90% !important;}
    .hp95 { height:95% !important;}
    .hp100 { height:100% !important;}
`;