(this.webpackJsonpstatistic=this.webpackJsonpstatistic||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"URL":"https://api.covid19api.com/summary","noPage":"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg"}')},22:function(e,t,n){e.exports={wrapLogo:"Logo_wrapLogo__2SLs4"}},23:function(e,t,n){e.exports={searchForm:"Search_searchForm__3KM1C",searchInput:"Search_searchInput__3H3g6",submitBtn:"Search_submitBtn__12gjv"}},26:function(e,t,n){e.exports={wrapHeader:"Home_wrapHeader__3xfJA",wrapMain:"Home_wrapMain__3pQfN"}},38:function(e,t,n){e.exports={spinner:"Spinner_spinner__1Neu5"}},6:function(e,t,n){e.exports={backdrop:"Modal_backdrop__28nml",modal:"Modal_modal__1Lxfp",modalWrapInfo:"Modal_modalWrapInfo__1YpOa",modalCountryName:"Modal_modalCountryName__26S0z",modalText:"Modal_modalText__1J5ht",leftSideText:"Modal_leftSideText__2hAhs",modalImg:"Modal_modalImg__2Jea8",modalCloseBtn:"Modal_modalCloseBtn__O57pX"}},7:function(e,t,n){e.exports={titleWrap:"infobox_titleWrap__2nyBv",wrapTitleNameCountry:"infobox_wrapTitleNameCountry__3j8NU",wrapInfoNameCountry:"infobox_wrapInfoNameCountry__3yafO",titleNumber:"infobox_titleNumber__2XX4m",infoNumber:"infobox_infoNumber__21pUl",titleText:"infobox_titleText__1C560",infoText:"infobox_infoText__obak1",infoItems:"infobox_infoItems__HUWNZ",selectCountry:"infobox_selectCountry__3hKLJ",selectNumber:"infobox_selectNumber__295ry"}},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),o=n.n(r),i=n(12),s=n(15),c=n(16),l={GET_STATE:"get/state",GET_ID:"get/id",TOGGLE_MODAL:"toggle/modal",TOGGLE_COUNTRY_SORT:"sort/country/",TOGGLE_NUMBER_SORT:"sort/number",CHANGE_FILTER:"countryList/changeFilter",ERROR:"error",LOADING:"loading"},d={countryList:[],id:"",filter:[],windowCondition:!1,error:!1,loading:!1},u=Object(c.a)({countryList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.countryList,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case l.GET_STATE:return a;case l.TOGGLE_COUNTRY_SORT:var r=e.map((function(e){return e}));return"Z-A"===a.target.value?r.sort((function(e,t){return e.Country<t.Country?1:e.Country>t.Country?-1:0})):r.sort((function(e,t){return e.Country<t.Country?-1:e.Country>t.Country?1:0})),r;case l.TOGGLE_NUMBER_SORT:var o=e.map((function(e){return e}));return"\u2193"===a.target.value?o.sort((function(e,t){return e.TotalConfirmed<t.TotalConfirmed?1:e.TotalConfirmed>t.TotalConfirmed?-1:0})):o.sort((function(e,t){return e.TotalConfirmed<t.TotalConfirmed?-1:e.TotalConfirmed>t.TotalConfirmed?1:0})),o;default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.id,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===l.GET_ID?a:e},windowCondition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.windowCondition,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===l.TOGGLE_MODAL?a:e},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.filter,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===l.CHANGE_FILTER?a:e},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.error,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===l.ERROR?a:e},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.loading,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===l.LOADING?a:e}}),j=Object(c.a)({state:u}),m=Object(c.b)(j),h=n(3),b={home:"/statistic"},p={getState:function(e){return{type:l.GET_STATE,payload:e}},getId:function(e){return{type:l.GET_ID,payload:e}},toggleModal:function(e){return{type:l.TOGGLE_MODAL,payload:e}},sortAZ:function(e){return{type:l.TOGGLE_COUNTRY_SORT,payload:e}},sortNumber:function(e){return{type:l.TOGGLE_NUMBER_SORT,payload:e}},changeFilter:function(e){return{type:l.CHANGE_FILTER,payload:e}},error:function(e){return{type:l.ERROR,payload:e}},loading:function(e){return{type:l.LOADING,payload:e}}},x=n(36),f=n.n(x),C=n(21),O={getData:function(){return f.a.get(C.URL)}},g=n.p+"static/media/logo.b63de4b1.png",_=n(22),T=n.n(_),v=n(1);function N(){return Object(v.jsxs)("div",{className:T.a.wrapLogo,children:[Object(v.jsx)("img",{className:T.a.logo,src:g,alt:"logo.png"}),Object(v.jsx)("span",{className:T.a.logoText,children:"STATISTIC"})]})}var y=n(23),w=n.n(y);var L={onchangeFilter:p.changeFilter},I=Object(i.b)(null,L)((function(e){var t=e.onchangeFilter;return Object(v.jsxs)("form",{className:w.a.searchForm,children:[Object(v.jsx)("input",{className:w.a.searchInput,type:"text",placeholder:"Search...",onChange:function(e){return t(e.target.value)}}),Object(v.jsx)("button",{className:w.a.submitBtn,type:"submit",children:Object(v.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M29.5898 25.9395L23.748 20.0977C23.4844 19.834 23.127 19.6875 22.752 19.6875H21.7969C23.4141 17.6191 24.375 15.0176 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.0176 24.375 17.6191 23.4141 19.6875 21.7969V22.752C19.6875 23.127 19.834 23.4844 20.0977 23.748L25.9395 29.5898C26.4902 30.1406 27.3809 30.1406 27.9258 29.5898L29.584 27.9316C30.1348 27.3809 30.1348 26.4902 29.5898 25.9395ZM12.1875 19.6875C8.04492 19.6875 4.6875 16.3359 4.6875 12.1875C4.6875 8.04492 8.03906 4.6875 12.1875 4.6875C16.3301 4.6875 19.6875 8.03906 19.6875 12.1875C19.6875 16.3301 16.3359 19.6875 12.1875 19.6875Z",fill:"#666666"})})})]})})),E=n(6),H=n.n(E);var M={toggle:p.toggleModal},G=Object(i.b)(null,M)((function(e){var t=e.data,n=e.toggle,r=e.currentId;return Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&n(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{onClick:function(){return n(!1)},className:H.a.backdrop,children:t.map((function(e){return e.ID===r&&Object(v.jsxs)("div",{className:H.a.modal,children:[Object(v.jsx)("span",{className:H.a.modalCountryName,children:e.Country}),Object(v.jsxs)("div",{className:H.a.modalWrapInfo,children:[Object(v.jsxs)("p",{className:H.a.modalText,children:[Object(v.jsxs)("span",{className:H.a.leftSideText,children:[Object(v.jsx)("span",{className:H.a.modalImg,children:Object(v.jsx)("svg",{width:"30",height:"28",viewBox:"0 0 30 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M18.7616 13.2852L15.8495 19.1094C15.498 19.8184 14.4785 19.7949 14.1562 19.0742L10.8222 11.6738L9.0644 15.875H3.55073L14.2441 26.8027C14.6601 27.2305 15.3339 27.2305 15.7499 26.8027L26.4491 15.875H20.0566L18.7616 13.2852ZM27.7558 3.33008L27.6152 3.18359C24.5976 0.101562 19.6581 0.101562 16.6347 3.18359L14.9999 4.85937L13.3652 3.18945C10.3476 0.101562 5.40229 0.101562 2.38472 3.18945L2.24409 3.33008C-0.609419 6.24805 -0.732466 10.8945 1.81636 14H7.81635L9.91986 8.94922C10.2363 8.19336 11.3027 8.17578 11.6425 8.92578L15.0527 16.502L17.9238 10.7656C18.2695 10.0742 19.2538 10.0742 19.5995 10.7656L21.2167 14H28.1835C30.7323 10.8945 30.6093 6.24805 27.7558 3.33008Z",fill:"#666666"})})}),"Total Confirmed"]}),Object(v.jsx)("span",{className:H.a.modalNumber,children:e.TotalConfirmed})]}),Object(v.jsxs)("p",{className:H.a.modalText,children:[Object(v.jsxs)("span",{className:H.a.leftSideText,children:[Object(v.jsx)("span",{className:H.a.modalImg,children:Object(v.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M15 0C6.71484 0 0 5.87695 0 13.125C0 17.2324 2.16211 20.8945 5.53711 23.3027C6.09961 23.707 6.42773 24.3633 6.32812 25.0547L5.77734 28.9336C5.69531 29.4961 6.12891 30 6.69727 30H11.25V26.7188C11.25 26.4609 11.4609 26.25 11.7188 26.25H12.6562C12.9141 26.25 13.125 26.4609 13.125 26.7188V30H16.875V26.7188C16.875 26.4609 17.0859 26.25 17.3438 26.25H18.2812C18.5391 26.25 18.75 26.4609 18.75 26.7188V30H23.3027C23.8711 30 24.3047 29.4961 24.2227 28.9336L23.6719 25.0547C23.5723 24.3691 23.8945 23.707 24.4629 23.3027C27.8379 20.8945 30 17.2324 30 13.125C30 5.87695 23.2852 0 15 0ZM9.375 18.75C7.30664 18.75 5.625 17.0684 5.625 15C5.625 12.9316 7.30664 11.25 9.375 11.25C11.4434 11.25 13.125 12.9316 13.125 15C13.125 17.0684 11.4434 18.75 9.375 18.75ZM20.625 18.75C18.5566 18.75 16.875 17.0684 16.875 15C16.875 12.9316 18.5566 11.25 20.625 11.25C22.6934 11.25 24.375 12.9316 24.375 15C24.375 17.0684 22.6934 18.75 20.625 18.75Z",fill:"#666666"})})}),"Total Deaths"]}),Object(v.jsx)("span",{children:e.TotalDeaths})]}),Object(v.jsxs)("p",{className:H.a.modalText,children:[Object(v.jsxs)("span",{className:H.a.leftSideText,children:[Object(v.jsx)("span",{className:H.a.modalImg,children:Object(v.jsx)("svg",{width:"23",height:"30",viewBox:"0 0 23 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M22.0898 6.15234L16.3535 0.410156C16.0898 0.146484 15.7324 0 15.3574 0H15V7.5H22.5V7.14258C22.5 6.77344 22.3535 6.41602 22.0898 6.15234ZM13.125 7.96875V0H1.40625C0.626953 0 0 0.626953 0 1.40625V28.5938C0 29.373 0.626953 30 1.40625 30H21.0938C21.873 30 22.5 29.373 22.5 28.5938V9.375H14.5312C13.7578 9.375 13.125 8.74219 13.125 7.96875ZM16.875 17.3438V20.1562C16.875 20.4141 16.6641 20.625 16.4062 20.625H13.125V23.9062C13.125 24.1641 12.9141 24.375 12.6562 24.375H9.84375C9.58594 24.375 9.375 24.1641 9.375 23.9062V20.625H6.09375C5.83594 20.625 5.625 20.4141 5.625 20.1562V17.3438C5.625 17.0859 5.83594 16.875 6.09375 16.875H9.375V13.5938C9.375 13.3359 9.58594 13.125 9.84375 13.125H12.6562C12.9141 13.125 13.125 13.3359 13.125 13.5938V16.875H16.4062C16.6641 16.875 16.875 17.0859 16.875 17.3438Z",fill:"#666666"})})}),"Total Recovered"]}),Object(v.jsx)("span",{children:e.TotalRecovered})]})]}),Object(v.jsx)("button",{onClick:function(){return n(!1)},className:H.a.modalCloseBtn,type:"button",children:"OK"})]},e.ID)}))})})})),S=n(7),D=n.n(S);var R={toggle:p.toggleModal,sort:p.sortAZ,sortNumber:p.sortNumber,getID:p.getId},A=Object(i.b)((function(e){var t=e.state,n=t.countryList,a=t.filter,r=t.windowCondition,o=t.id,i=0!==a.length&&a.toLowerCase();return{visible:n.filter((function(e){return i?e.Country.toLowerCase().includes(i):e})),windowCondition:r,id:o}}),R)((function(e){var t=e.visible,n=e.id,a=e.windowCondition,r=e.toggle,o=e.sort,i=e.sortNumber,s=e.getID,c=1;return Object(v.jsxs)(v.Fragment,{children:[a&&0!==t.length&&Object(v.jsx)(G,{data:t,currentId:n}),Object(v.jsxs)("div",{className:D.a.wrapInfoBox,children:[Object(v.jsxs)("div",{className:D.a.titleWrap,children:[Object(v.jsxs)("div",{className:D.a.wrapTitleNameCountry,children:[Object(v.jsx)("span",{className:D.a.titleNumber,children:"\u2116"}),Object(v.jsx)("span",{className:D.a.titleText,children:"Country"}),Object(v.jsxs)("select",{onChange:function(e){return o(e)},className:D.a.selectCountry,defaultValue:"A-Z",children:[Object(v.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(v.jsx)("option",{value:"Z-A",children:"Z-A"})]})]}),Object(v.jsx)("span",{className:D.a.titleText,children:"Total Confirmed"}),Object(v.jsxs)("select",{onChange:function(e){return i(e)},className:D.a.selectNumber,defaultValue:"\u2191",children:[Object(v.jsx)("option",{value:"\u2191",children:"\u2191"}),Object(v.jsx)("option",{value:"\u2193",children:"\u2193"})]})]}),Object(v.jsx)("ul",{onClick:function(e){return function(e){s(e.target.attributes.id.value),!a&&r(!0)}(e)},className:D.a.infoBox,children:0!==t.length&&t.map((function(e){return Object(v.jsxs)("li",{id:e.ID,className:D.a.infoItems,children:[Object(v.jsxs)("div",{id:e.ID,className:D.a.wrapInfoNameCountry,children:[Object(v.jsx)("span",{id:e.ID,className:D.a.infoNumber,children:c++}),Object(v.jsx)("span",{id:e.ID,className:D.a.infoText,children:e.Country})]}),Object(v.jsx)("span",{id:e.ID,className:D.a.infoText,children:e.TotalConfirmed})]},e.ID)}))})]})]})})),Z=n(37),B=n.n(Z),V=(n(85),n(38)),k=n.n(V);function F(){return Object(v.jsx)("div",{className:k.a.spinner,children:Object(v.jsx)(B.a,{type:"ThreeDots",color:"#2196f3",height:180,width:180,timeout:3e3})})}var U=n(18);n(86);function J(e){var t=e.errorText;return Object(v.jsxs)(U.a.Dialog,{children:[Object(v.jsx)(U.a.Header,{children:Object(v.jsx)(U.a.Title,{children:"Error"})}),Object(v.jsx)(U.a.Body,{children:Object(v.jsx)("p",{children:t})})]})}var W=n(26),Y=n.n(W);var K={getDataToState:p.getState,handleChangeError:p.error,handleChangeLoading:p.loading},X=Object(i.b)((function(e){return e.state}),K)((function(e){var t=e.countryList,n=e.loading,r=e.error,o=e.handleChangeError,i=e.handleChangeLoading,s=e.getDataToState;return Object(a.useEffect)((function(){i(!0),0===t.length&&O.getData().then((function(e){return s(e.data.Countries)})).catch((function(e){return o(e)})).finally((function(){return i(!1)}))}),[t.length,o,i,s]),Object(v.jsxs)(v.Fragment,{children:[r&&Object(v.jsx)(J,{errorText:r.message}),Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:Y.a.wrapHeader,children:[Object(v.jsx)(N,{}),Object(v.jsx)(I,{})]})}),Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:Y.a.wrapMain,children:[Object(v.jsx)(A,{}),n&&Object(v.jsx)(F,{})]})})]})})),z={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},status:{fontSize:46}};function P(){return Object(v.jsxs)("div",{style:z.container,children:[Object(v.jsx)("h1",{style:z.status,children:"404"}),Object(v.jsx)("img",{src:C.noPage,alt:"404 page",width:"200"}),Object(v.jsx)("p",{children:Object(v.jsx)(s.b,{to:{pathname:"".concat(b.home)},children:"HOME"})})]})}var q=function(){return Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{path:b.home,element:Object(v.jsx)(X,{})}),Object(v.jsx)(h.a,{path:"*",element:Object(v.jsx)(P,{})})]})};o.a.render(Object(v.jsx)(i.a,{store:m,children:Object(v.jsx)(s.a,{className:"App",children:Object(v.jsx)(q,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.9c251978.chunk.js.map