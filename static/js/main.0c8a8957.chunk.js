(this["webpackJsonpbike-finder"]=this["webpackJsonpbike-finder"]||[]).push([[0],{130:function(e,n,t){e.exports=t(253)},136:function(e,n,t){e.exports=t.p+"static/media/map-icon.0dc8e83b.svg"},149:function(e,n){},188:function(e,n,t){},251:function(e,n,t){e.exports=t.p+"static/media/check-mark.91a39004.svg"},252:function(e,n,t){e.exports=t.p+"static/media/arrow.815e8edc.svg"},253:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(21),o=t.n(i),c=t(1),l=t(50),u=t(34),d=t(7),s=t(3),f="'Open Sans', sans-serif;",b={sizeI:1170,sizeII:768,sizeIII:480};function p(){var e=Object(c.a)(["\n  position: relative;\n  height: ",";\n  background-color: ",";\n\n  h1 {\n    color: #fff;\n    text-align: center;\n    line-height: 150px;\n    letter-spacing: .35rem;\n    font-size: 3.4rem;\n    font-weight: 700;\n    letter-spacing: .8rem;\n    text-transform: uppercase;\n  }\n"]);return p=function(){return e},e}var m=function(){return a.a.createElement(h,null,a.a.createElement("h1",null,"Bike Finder"))},h=s.c.div(p(),"150px","#1EB2B9"),g=["Hamburg","Berlin","San Diego","Toronto"],v=[{id:0,option:"White",checked:!1},{id:1,option:"Silver",checked:!1},{id:2,option:"Gray",checked:!1},{id:3,option:"Black",checked:!1},{id:4,option:"Blue",checked:!1},{id:5,option:"Green",checked:!1},{id:6,option:"Yellow",checked:!1},{id:7,option:"Orange",checked:!1},{id:8,option:"Red",checked:!1},{id:9,option:"Pink",checked:!1},{id:10,option:"Purple",checked:!1},{id:11,option:"Violet",checked:!1}],x=["All","Image","No Image"],O=Object(r.createContext)();function k(){var e=Object(c.a)(["\n    @media only screen and (min-width: ","px) {\n      ","\n    }\n  "]);return k=function(){return e},e}var y=Object.keys(b).reduce((function(e,n){return e[n]=function(){return Object(s.b)(k(),b[n],s.b.apply(void 0,arguments))},e}),{});function E(){var e=Object(c.a)(["\n    width: 35%;\n  "]);return E=function(){return e},e}function j(){var e=Object(c.a)(["\n    width: 30%;\n  "]);return j=function(){return e},e}function w(){var e=Object(c.a)(["\n  display: block;\n  /* set same size of the .cd-tab-filter */\n  height: ",";\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: inset 0 -2px 0 ",";\n  z-index: 99;\n\n  .filter_input {\n    width: 95%;\n    background: url(",") no-repeat left\n      center;\n    background-size: 1.8rem;\n    font-size: 1.6rem;\n    font-weight: 500;\n    color: ",";\n    padding: 1.2rem 3rem;\n    border: none;\n\n    ::placeholder {\n      color: ",";\n    }\n\n    :focus {\n      outline: none;\n    }\n  }\n\n  ","\n\n  ","\n"]);return w=function(){return e},e}var C=function(){var e=Object(r.useContext)(O).changeSelectedFilter,n=Object(r.useState)(""),t=Object(d.a)(n,2),i=t[0],o=t[1];return a.a.createElement(F,null,a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e({filterPart:"searchBar",value:i})}},a.a.createElement("input",{className:"filter_input",type:"text",placeholder:"Search..",autoFocus:!0,onChange:function(e){o(e.target.value)},value:i})))},F=s.c.div(w(),"50px","#3EC5CB",t(66),"#9a9a9a","#9a9a9a",y.sizeII(j()),y.sizeI(E()));function _(){var e=Object(c.a)(["\n    right: 2%;\n    width: 150px\n    "]);return _=function(){return e},e}function z(){var e=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 2%;\n  display: block;\n  height: ",";\n  width: 110px;\n  line-height: ",";\n  padding-left: 14px;\n  cursor: pointer;\n\n  ","\n"]);return z=function(){return e},e}function S(){var e=Object(c.a)(["\n      .dropdown {\n        &_button {\n          box-shadow: none;\n        }\n\n        &_content {\n          display: inline-block;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n          border-bottom: 3px solid ",";\n        }\n      }\n    "]);return S=function(){return e},e}function N(){var e=Object(c.a)(["\n      box-shadow: none;\n\n      &_button__text {\n        display: inline-block;\n      }\n\n      &_content {\n        margin: -2px;\n      }\n    "]);return N=function(){return e},e}function I(){var e=Object(c.a)(["\n  width: 100%;\n\n  .dropdown {\n    &_button {\n      width: 100%;\n      height: ",";\n      margin: 0 auto;\n      padding-left: 1rem;\n\n      font-size: 1.6rem;\n      font-weight: 500;\n      text-align: start;\n      color: ",';\n      background: #fff;\n\n      border: none;\n      outline: none;\n\n      cursor: pointer;\n\n      /* small location icon */\n      &::after {\n        content: "";\n        position: absolute;\n        right: 1rem;\n        top: 50%;\n        transform: translateY(-50%);\n\n        display: inline-block;\n        width: 24px;\n        height: 24px;\n\n        background: url(',") no-repeat\n          center center;\n        background-size: 1.3rem;\n\n        pointer-events: none;\n      }\n\n      &:hover {\n        color: ",";\n      }\n\n      &__text {\n        display: none;\n      }\n    }\n\n    &_content {\n      display: none;\n      width: 100%;\n      margin-top: -21px;\n\n      &__search {\n        display: block;\n        width: 100%;\n        height: ",";\n        padding-left: 3.5rem;\n\n        border: none;\n        outline: none;\n        box-shadow: inset 0 0 0 2px ",";\n\n        background: url(",") no-repeat\n          left center #fff;\n        background-size: 1.7rem;\n        background-position: 1rem;\n        color: ",";\n        font-size: 1.6rem;\n        font-weight: 500;\n\n        &::placeholder {\n          color: ",";\n          font-size: 1.6rem;\n          font-weight: 500;\n        }\n\n        &:hover {\n          &::placeholder {\n            color: ",";\n          }\n        }\n      }\n    }\n\n    ","\n  }\n\n  ","\n"]);return I=function(){return e},e}function B(){var e=Object(c.a)(["\n  width: 100%;\n  height: ",";\n  padding-left: 1rem;\n\n  color: ",";\n  background: #fff;\n\n  font-size: 1.6rem;\n  font-weight: 500;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ",";\n  }\n\n  &:hover {\n    background-color: #f2f2f2;\n    color: ",";\n    box-shadow: inset 4px 0 0 ",";\n  }\n"]);return B=function(){return e},e}var D=function(e){var n=e.filterItems,t=Object(r.useContext)(O),i=t.queryOptions,o=t.changeSelectedFilter,c=Object(r.useState)(!1),l=Object(d.a)(c,2),u=l[0],s=l[1],f=Object(r.useState)(i.dropdownFilter),b=Object(d.a)(f,2),p=b[0],m=b[1],h=Object(r.useState)(""),g=Object(d.a)(h,2),v=g[0],x=g[1];return a.a.createElement(R,null,a.a.createElement(V,{opened:u},a.a.createElement("button",{className:"dropdown_button",onClick:function(){return s(!u)}},a.a.createElement("span",{className:"dropdown_button__text"},p)),a.a.createElement("div",{className:"dropdown_content"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==v&&m(v),o({filterPart:"dropdownFilter",value:v}),x(""),s(!u)}},a.a.createElement("input",{className:"dropdown_content__search",type:"text",placeholder:"City..",onChange:function(e){console.log(e.target.value),x(e.target.value)},value:v})),a.a.createElement((function(){return n.map((function(e,n){return a.a.createElement(P,{onClick:function(){return function(e){m(e),o({filterPart:"dropdownFilter",value:e}),s(!u)}(e)},key:n},e)}))}),null))))},P=s.c.div(B(),"50px","#9a9a9a","#e6e6e6","#3EC5CB","#3EC5CB"),V=s.c.div(I(),"50px","#9a9a9a",t(136),"#3EC5CB","50px","#3EC5CB",t(66),"#9a9a9a","#9a9a9a","#3EC5CB",y.sizeII(N()),(function(e){return e.opened&&Object(s.b)(S(),"#3EC5CB")})),R=s.c.div(z(),"50px","50px",y.sizeII(_()));function T(){var e=Object(c.a)(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n    "]);return T=function(){return e},e}function H(){var e=Object(c.a)(["\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n\n  ","\n"]);return H=function(){return e},e}function Y(){var e=Object(c.a)(["\n        opacity: 0;\n      "]);return Y=function(){return e},e}function q(){var e=Object(c.a)(["\n    width: auto;\n    top: 0;\n    left: 2%;\n\n    text-indent: 0;\n    color: ",";\n    font-size: 1.6rem;\n    font-weight: 500;\n\n    padding-left: 24px;\n    background-position: left center;\n\n    transition: all 0.3s;\n\n    :hover {\n      color: ",";\n    }\n\n    ","\n  "]);return q=function(){return e},e}function L(){var e=Object(c.a)(["\n      opacity: 0;\n      pointer-events: none;\n    "]);return L=function(){return e},e}function M(){var e=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: ",";\n  line-height: ",";\n  width: 60px;\n\n  /* image replacement */\n  text-indent: 100%;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: transparent;\n  white-space: nowrap;\n  background: transparent url(",")\n    no-repeat center center;\n\n  z-index: 3;\n\n  ","\n\n  ","\n"]);return M=function(){return e},e}var A=function(){var e=Object(r.useContext)(O),n=e.filtersFixed,t=e.sideFilterVisibility,i=e.toggleSideFilterVisibility;return a.a.createElement(J,{filtersFixed:n},a.a.createElement(G,{onClick:function(){return i()},sideFilterVisible:t},"Filter"),a.a.createElement(C,null),a.a.createElement(D,{filterItems:g}))},G=s.c.div(M(),"50px","50px",t(67),(function(e){return e.sideFilterVisible&&Object(s.b)(L())}),y.sizeII(q(),"#9a9a9a","#3EC5CB",(function(e){return e.sideFilterVisible&&Object(s.b)(Y())}))),J=s.c.div(H(),(function(e){return e.filtersFixed&&Object(s.b)(T())}));function U(){var e=Object(c.a)(["\n        width: 45%;\n      "]);return U=function(){return e},e}function X(){var e=Object(c.a)(["\n    width: 30%;\n\n    ","\n  "]);return X=function(){return e},e}function K(){var e=Object(c.a)(["\n        width: 65%;\n      "]);return K=function(){return e},e}function W(){var e=Object(c.a)(["\n    width: 40%;\n\n    ","\n  "]);return W=function(){return e},e}function Q(){var e=Object(c.a)(["\n  width: 90%;\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: none;\n  margin: 2rem auto;\n  text-align: center;\n  z-index: 1;\n\n  ",";\n\n  ",";\n\n  .card {\n    &_container {\n      display: flex;\n      flex-flow: column wrap;\n      justify-content: space-between;\n      align-items: center;\n      height: 100%;\n      padding: 10px 20px;\n    }\n\n    &_container-heading {\n      margin-top: 1rem;\n      color: #1eb2b9;\n      font-size: 2rem;\n      font-weight: 700;\n    }\n\n    &_container-description {\n      margin: 3rem 5%;\n      color: ",";\n      font-size: 1.5rem;\n      font-weight: 500;\n\n      &_details {\n        margin: 0 10% 1rem;\n        color: ",";\n        font-size: 1.4rem;\n\n        &--bold {\n          font-weight: 500;\n        }\n      }\n    }\n\n    &_container-description_details--bold {\n      font-weight: 500;\n    }\n\n    &_container-button {\n      display: inline-block;\n      padding: 1rem 2rem;\n      margin: 2rem auto;\n      background-color: #1eb2b9;\n      text-decoration: none;\n      color: #fff;\n      font-size: 1.4rem;\n      font-weight: 500;\n      border-radius: 2px;\n      cursor: pointer;\n\n      :hover {\n        background-color: #019ca3;\n      }\n    }\n  }\n"]);return Q=function(){return e},e}function Z(){var e=Object(c.a)(["\n      background: url(",") no-repeat center center;\n      background-clip: border-box;\n      background-size: 100% 100%;\n      color: transparent;\n      text-indent: -100%;\n    "]);return Z=function(){return e},e}function $(){var e=Object(c.a)(["\n  width: 100%;\n  height: 250px;\n  text-align: center;\n  padding: 10rem 0;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #fff;\n  background-color: ",";\n  border-bottom: 4px solid ",";\n\n  ","\n"]);return $=function(){return e},e}var ee=function(e){return a.a.createElement(te,{sideFilterVisibility:e.sideFilterVisibility,className:"card"},a.a.createElement(ne,{image:e.image,alt:"Bike Image"},"No Image"),a.a.createElement("div",{className:"card_container"},a.a.createElement("h2",{className:"card_container-heading"},e.title),a.a.createElement("p",{className:"card_container-description"},e.text?e.text:"No Description"),a.a.createElement("div",null,a.a.createElement("p",{className:"card_container-description_details"},a.a.createElement("span",{className:"card_container-description_details--bold"},"Details:"," "),"".concat(e.details,", "),a.a.createElement("span",{className:"card_container-description_details--bold"},"Time:"," "),"".concat(e.time,", "),a.a.createElement("span",{className:"card_container-description_details--bold"},"Location:"," "),e.location),a.a.createElement("a",{className:"card_container-button",href:e.source,rel:"noopener noreferrer",target:"_blank"},"Find out more"))))},ne=s.c.div($(),"#9a9a9a","#3EC5CB",(function(e){return e.image&&Object(s.b)(Z(),(function(e){return e.image}))})),te=s.c.div(Q(),y.sizeII(W(),(function(e){return e.sideFilterVisibility&&Object(s.b)(K())})),y.sizeI(X(),(function(e){return e.sideFilterVisibility&&Object(s.b)(U())})),"#9a9a9a","#9a9a9a"),re=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{background:"none"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},a.a.createElement("g",{transform:"rotate(0 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(30 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(60 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(90 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(120 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(150 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(180 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(210 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(240 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(270 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(300 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(330 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))))};function ae(){var e=Object(c.a)(["\n  margin: 25vh auto;\n\n  z-index: 999;\n"]);return ae=function(){return e},e}var ie=function(){return a.a.createElement(oe,null,a.a.createElement(re,null))},oe=s.c.div(ae());function ce(){var e=Object(c.a)(["\n  .pagination {\n    margin: 5rem 1rem;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n\n  .page-link {\n    margin-right: -1px;\n    padding: 1.5rem;\n    font-size: 1.6rem;\n    font-weight: 500;\n    color: ",";\n    cursor: pointer;\n  }\n"]);return ce=function(){return e},e}var le=function(e){for(var n=e.casesPerPage,t=e.totalCases,r=e.paginate,i=[],o=1;o<=Math.ceil(t/n);o++)i.push(o);return a.a.createElement(ue,null,a.a.createElement("nav",{className:"page-nav"},a.a.createElement("ul",{className:"pagination"},i.map((function(e){return a.a.createElement("li",{key:e,className:"page-item"},a.a.createElement("a",{onClick:function(){return r(e)},href:"!#",className:"page-link"},e))})))))},ue=s.c.div(ce(),"#1EB2B9"),de=function(e,n,t){return null===e||null===n||e/1e3<=t&&t<=n/1e3},se=function(e,n){return""===e||n&&n.includes(e)},fe=function(e,n){return"All"===e||("Image"===e?null!==n:"No Image"===e?null===n:void 0)},be=function(e,n){if(0===e.length)return!0;var t=!0,r=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var c=i.value;if(!n.includes(c.toLowerCase()))return!1}}catch(l){r=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}return!0},pe=function(e){var n=e.indexOf("(");return n=-1!==n?n:e.length,[e.includes("Stolen")?e.slice(7,n):e,n===e.length?"No details":e.slice(n)]};function me(){var e=Object(c.a)(["\n        width: 75%;\n        margin-left: 25%;\n      "]);return me=function(){return e},e}function he(){var e=Object(c.a)(["\n    flex-direction: row;\n    transition: width 0.3s;\n\n    "," \n  "]);return he=function(){return e},e}function ge(){var e=Object(c.a)(["\n        width: 65%;\n        margin-left: 35%;\n      "]);return ge=function(){return e},e}function ve(){var e=Object(c.a)(["\n    flex-direction: row;\n\n    "," \n  "]);return ve=function(){return e},e}function xe(){var e=Object(c.a)(["\n      padding-top: 7rem;\n    "]);return xe=function(){return e},e}function Oe(){var e=Object(c.a)(["\n  padding: 2rem;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  ","\n\n  ","\n\n  ","\n"]);return Oe=function(){return e},e}function ke(){var e=Object(c.a)(["\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: ",";\n  text-align: center;\n"]);return ke=function(){return e},e}var ye=function(e){var n=e.loading,t=e.data,i=e.failed,o=e.casesPerPage,c=Object(r.useContext)(O),l=c.sideFilterVisibility,u=c.filtersFixed,s=c.sideFilterOptions,f=Object(r.useState)(1),b=Object(d.a)(f,2),p=b[0],m=b[1],h=!n&&function(e,n){var t=[],r=e.dateRangeFilter,a=e.searchFilter,i=e.radioFilter,o=e.checkboxFilter,c=!0,l=!1,u=void 0;try{for(var s,f=n[Symbol.iterator]();!(c=(s=f.next()).done);c=!0){var b=s.value;if(!b.hasOwnProperty("details")){var p=pe(b.title),m=Object(d.a)(p,2),h=m[0],g=m[1];b.title=h,b.details=g}de(r.startDate,r.endDate,b.occurred_at)&&se(a,b.description)&&fe(i,b.media.image_url)&&be(o,b.details)&&t.push(b)}}catch(v){l=!0,u=v}finally{try{c||null==f.return||f.return()}finally{if(l)throw u}}return t}(s,t.incidents),g=p*o,v=g-o,x=!n&&h.slice(v,g);return a.a.createElement(a.a.Fragment,null,a.a.createElement(je,{sideFilterVisibility:l,filtersFixed:u},n&&a.a.createElement(ie,null),!n&&!i&&x.map((function(e){var n=new Date(1e3*e.occurred_at);return a.a.createElement(ee,{key:e.id,image:e.media.image_url,title:e.title,text:e.description,details:e.details,time:"".concat(n.getDate(),".").concat(n.getMonth()+1,".").concat(n.getFullYear()),location:e.address,source:e.source.html_url,sideFilterVisibility:l})})),!n&&!i&&!t.incidents.length&&a.a.createElement(Ee,null,"No results found."),!n&&!t&&i&&a.a.createElement(Ee,null,"Error, try again later.")),a.a.createElement(le,{casesPerPage:o,totalCases:!n&&h.length,paginate:m}))},Ee=s.c.div(ke(),"#1EB2B9"),je=s.c.section(Oe(),(function(e){return e.filtersFixed&&Object(s.b)(xe())}),y.sizeII(ve(),(function(e){return e.sideFilterVisibility&&Object(s.b)(ge())})),y.sizeI(he(),(function(e){return e.sideFilterVisibility&&Object(s.b)(me())}))),we=(t(137),t(138),t(187),t(188),t(128));function Ce(){var e=Object(c.a)(["\n      display: none;\n    "]);return Ce=function(){return e},e}function Fe(){var e=Object(c.a)(["\n  ","\n"]);return Fe=function(){return e},e}var _e=function(e){var n=e.visible,t=Object(r.useContext)(O),i=t.setDatePickerExpanded,o=t.changeSelectedFilterOptions,c=Object(r.useState)(null),l=Object(d.a)(c,2),u=l[0],s=l[1],f=Object(r.useState)(null),b=Object(d.a)(f,2),p=b[0],m=b[1],h=Object(r.useState)(null),g=Object(d.a)(h,2),v=g[0],x=g[1];return a.a.createElement(ze,{filterHidden:!n},a.a.createElement(we.DateRangePicker,{startDate:u,startDateId:"your_unique_start_date_id",endDate:p,endDateId:"your_unique_end_date_id",onDatesChange:function(e){var n,t,r=e.startDate,a=e.endDate;return t=a,s(n=r),m(t),void o({filterPart:"dateRangeFilter",value:{startDate:Date.parse(n),endDate:Date.parse(t)}})},focusedInput:v,onFocusChange:function(e){x(e),i(null!==e)},isDayBlocked:function(){return!1},hideKeyboardShortcutsPanel:!0,withPortal:!0,isOutsideRange:function(){return!1}}))},ze=s.c.div(Fe(),(function(e){return e.filterHidden&&Object(s.b)(Ce())}));function Se(){var e=Object(c.a)(["\n      display: none;\n    "]);return Se=function(){return e},e}function Ne(){var e=Object(c.a)(['\n  transition: all 0.3s;\n\n  input[type="search"] {\n    width: 100%;\n    padding: 1rem;\n    font-family: ',";\n    font-size: 1.6rem;\n    background-color: ",";\n    border-color: transparent;\n    border-radius: 0;\n    border: 2px solid ",";\n    appearance: none;\n    box-shadow: none;\n\n    :focus {\n      outline: none;\n      background-color: #fff;\n      border-color: ",";\n    }\n  }\n\n  ","\n"]);return Ne=function(){return e},e}var Ie=function(e){var n=e.visible,t=Object(r.useContext)(O).changeSelectedFilterOptions,i=Object(r.useState)("Search.."),o=Object(d.a)(i,2),c=o[0],l=o[1],u=Object(r.useState)(""),s=Object(d.a)(u,2),f=s[0],b=s[1];return a.a.createElement(Be,{filterHidden:!n},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({filterPart:"searchFilter",value:f}),l(""!==f?f:"Search.."),b("")}},a.a.createElement("input",{type:"search",placeholder:c,onChange:function(e){b(e.target.value)},value:f})))},Be=s.c.div(Ne(),f,"#e6e6e6","#e6e6e6","#3EC5CB",(function(e){return e.filterHidden&&Object(s.b)(Se())}));function De(){var e=Object(c.a)(["\n      display: none;\n    "]);return De=function(){return e},e}function Pe(){var e=Object(c.a)(["\n  ","\n"]);return Pe=function(){return e},e}function Ve(){var e=Object(c.a)(["\n  position: relative;\n  margin-bottom: 0.5rem;\n\n  :last-of-type {\n    margin-bottom: 0;\n  }\n"]);return Ve=function(){return e},e}function Re(){var e=Object(c.a)(["\n  /* shared style for input elements */\n  font-family: ",";\n  border-radius: 0;\n  background-color: #fff;\n  border: 2px solid ",";\n\n  /* Hide the browser's default checkbox */\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity 0;\n  z-index: 3;\n\n  :checked + label::before {\n    border-color: ",";\n    background-color: ",";\n  }\n\n  :checked + label::after {\n    display: block;\n  }\n"]);return Re=function(){return e},e}function Te(){var e=Object(c.a)(["\n  padding-left: 24px;\n  font-size: 1.5rem;\n  color: ",";\n  user-select: none;\n\n  ::before {\n    font-family: ",";\n    border-radius: 0;\n    background-color: #fff;\n    border: 2px solid ",';\n  }\n\n  ::before,\n  ::after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 45%;\n    transform: translateY(-50%);\n  }\n\n  ::before {\n    width: 16px;\n    height: 16px;\n    left: 0;\n  }\n\n  ::after {\n    /* check mark - hidden */\n    display: none;\n  }\n\n  ::after {\n    /* check mark style for check boxes */\n    width: 16px;\n    height: 16px;\n    left: 0;\n    background: url(',") no-repeat\n      center center;\n  }\n"]);return Te=function(){return e},e}var He=function(e){var n=e.visible,t=Object(r.useContext)(O).changeCheckboxFilterOptions,i=Object(r.useState)(v),o=Object(d.a)(i,2),c=o[0],u=o[1],s=function(e){var n=e.labelName,r=e.id;return a.a.createElement(Le,null,a.a.createElement(qe,{type:"checkbox",id:n.concat("checkbox",r),checked:c[r].checked,onChange:function(){return function(e,n){var r=Object(l.a)(c);r[e].checked=!c[e].checked,u(r),r[e].checked?t(n,"push"):t(n)}(r,n)}}),a.a.createElement(Ye,{htmlFor:n.concat("checkbox",r)},n))};return a.a.createElement(Me,{filterHidden:!n},c.map((function(e){return a.a.createElement(s,{labelName:e.option,id:e.id,key:e.id,checked:e.checked})})))},Ye=s.c.label(Te(),"#9a9a9a",f,"#e6e6e6",t(251)),qe=s.c.input(Re(),f,"#e6e6e6","#3EC5CB","#3EC5CB"),Le=s.c.div(Ve()),Me=s.c.div(Pe(),(function(e){return e.filterHidden&&Object(s.b)(De())}));function Ae(){var e=Object(c.a)(["\n      display: none;\n    "]);return Ae=function(){return e},e}function Ge(){var e=Object(c.a)(["\n  ","\n"]);return Ge=function(){return e},e}function Je(){var e=Object(c.a)(["\n  position: relative;\n  margin-bottom: 0.5rem;\n\n  :last-of-type {\n    margin-bottom: 0;\n  }\n"]);return Je=function(){return e},e}function Ue(){var e=Object(c.a)(["\n  padding-left: 24px;\n  font-size: 1.5rem;\n  color: ",";\n  user-select: none;\n\n  ::before {\n    font-family: ",";\n    border-radius: 0;\n    background-color: #fff;\n    border: 2px solid ",';\n  }\n\n  ::before,\n  ::after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 45%;\n    transform: translateY(-50%);\n  }\n\n  ::before {\n    width: 16px;\n    height: 16px;\n    left: 0;\n  }\n\n  ::after {\n    /* check mark - hidden */\n    display: none;\n  }\n\n  ::before,\n  ::after {\n    border-radius: 50%;\n  }\n\n  ::after {\n    /* check mark style for radio buttons */\n    width: 6px;\n    height: 6px;\n    background-color: #fff;\n    left: 5px;\n  }\n']);return Ue=function(){return e},e}function Xe(){var e=Object(c.a)(["\n  /* shared style for input elements */\n  font-family: ",";\n  border-radius: 0;\n  background-color: #fff;\n  border: 2px solid ",";\n\n  /* hide the browser's default radio button */\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 3;\n\n  :checked + label::before {\n    border-color: ",";\n    background-color: ",";\n  }\n\n  :checked + label::after {\n    display: block;\n  }\n"]);return Xe=function(){return e},e}var Ke=function(e){var n=e.visible,t=Object(r.useContext)(O),i=t.sideFilterOptions,o=t.changeSelectedFilterOptions,c=Object(r.useState)(x.indexOf(i.radioFilter)),l=Object(d.a)(c,2),u=l[0],s=l[1],f=function(e){var n=e.labelName,t=e.id,r=e.checked;return a.a.createElement(Ze,null,a.a.createElement(We,{type:"radio",id:n.concat("radio",t),checked:r,onChange:function(){return function(e,n){o({filterPart:"radioFilter",value:e}),s(n)}(n,t)}}),a.a.createElement(Qe,{htmlFor:n.concat("radio",t)},n))};return a.a.createElement($e,{filterHidden:!n},x.map((function(e,n){return a.a.createElement(f,{labelName:e,checked:u===n,id:n,key:n})})))},We=s.c.input(Xe(),f,"#e6e6e6","#3EC5CB","#3EC5CB"),Qe=s.c.label(Ue(),"#9a9a9a",f,"#e6e6e6"),Ze=s.c.div(Je()),$e=s.c.div(Ge(),(function(e){return e.filterHidden&&Object(s.b)(Ae())}));function en(){var e=Object(c.a)(["\n    width: 25%;\n  "]);return en=function(){return e},e}function nn(){var e=Object(c.a)(["\n    width: 35%;\n  "]);return nn=function(){return e},e}function tn(){var e=Object(c.a)(["\n        "," {\n          opacity: 0;\n        }\n      "]);return tn=function(){return e},e}function rn(){var e=Object(c.a)(["\n      transform: translateX(0);\n      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);\n    "]);return rn=function(){return e},e}function an(){var e=Object(c.a)(["\n            overflow-y: visible;\n          "]);return an=function(){return e},e}function on(){var e=Object(c.a)(["\n      position: fixed;\n      top: 0;\n      height: 100vh;\n\n      "," {\n        height: 100%;\n        overflow-y: scroll;\n\n        ","\n      }\n    "]);return on=function(){return e},e}function cn(){var e=Object(c.a)(['\n  position: absolute;\n  top: 150px;\n  left: 0;\n  width: 70%;\n  height: 100%;\n\n  background: #fff;\n\n  z-index: 2;\n\n  transform: translateX(-100%);\n  transition: transform 0.3s, box-shadow 0.3s;\n\n  ::before {\n    /* top colored bar */\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: ',";\n    width: 100%;\n\n    background-color: ",";\n\n    z-index: 2;\n  }\n\n  ","\n\n  .filter-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: ",";\n    line-height: ",";\n    width: 60px;\n\n    color: #fff; \n    background: #1eb2b9;\n    font-size: 1.4rem;\n    font-weight: 500;\n    text-align: center;\n    cursor: pointer;\n\n    z-index: 3;\n\n    :hover {\n      background: #019ca3;\n    }\n  }\n\n  ","\n\n    ","\n\n  ","\n\n  ","\n"]);return cn=function(){return e},e}function ln(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 8%;\n  padding-left: 24px;\n  height: ",";\n  line-height: ",";\n  font-size: 1.6rem;\n  font-weight: 500;\n  width: auto;\n\n  /* image replacement */\n  text-indent: 0;\n  color: #fff;\n  white-space: nowrap;\n  background: transparent url(",")\n    no-repeat left center;\n  pointer-events: none;\n\n  z-index: 6;\n\n  transition: all 0.1s;\n"]);return ln=function(){return e},e}function un(){var e=Object(c.a)(["\n  padding: 5rem 10%;\n"]);return un=function(){return e},e}function dn(){var e=Object(c.a)(["\n      ::before {\n        transform: translateY(-50%) rotate(-90deg);\n      }\n    "]);return dn=function(){return e},e}function sn(){var e=Object(c.a)(["\n  /* filter block title */\n  position: relative;\n  margin-top: 1.5rem;\n  padding: 1rem 0 1rem 2rem;\n\n  color: ",";\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 1.3rem;\n\n  user-select: none;\n  cursor: pointer;\n\n  :hover {\n    color: ",';\n  }\n\n  ::before {\n    /* arrow */\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 16px;\n    height: 16px;\n    background: url(',") no-repeat center\n      center;\n\n    transform: translateY(-50%);\n    transition: transform 0.3s;\n  }\n\n  ","\n"]);return sn=function(){return e},e}var fn=function(){var e=Object(r.useState)({DateRangeFilterComp:!0,SearchFilterComp:!0,CheckboxFilterComp:!0,RadioFilterComp:!0}),n=Object(d.a)(e,2),t=n[0],i=n[1],o=Object(r.useContext)(O),c=o.filtersFixed,l=o.sideFilterVisibility,s=o.toggleSideFilterVisibility,f=o.datePickerExpanded,b=function(e){var n=Object(u.a)({},t);n[e]=!t[e],i(n)};return a.a.createElement(hn,{isFilterVisible:l,filtersFixed:c,datePickerExpanded:f},a.a.createElement(mn,null,"Filter"),a.a.createElement(pn,{filtersFixed:c},a.a.createElement(bn,{onClick:function(){return b("DateRangeFilterComp")},visible:!t.DateRangeFilterComp},"Occurrence"),a.a.createElement(_e,{visible:t.DateRangeFilterComp}),a.a.createElement(bn,{onClick:function(){return b("SearchFilterComp")},visible:!t.SearchFilterComp},"Description"),a.a.createElement(Ie,{visible:t.SearchFilterComp}),a.a.createElement(bn,{onClick:function(){return b("RadioFilterComp")},visible:!t.RadioFilterComp},"Image"),a.a.createElement(Ke,{visible:t.RadioFilterComp}),a.a.createElement(bn,{onClick:function(){return b("CheckboxFilterComp")},visible:!t.CheckboxFilterComp},"Color"),a.a.createElement(He,{visible:t.CheckboxFilterComp})),a.a.createElement("div",{className:"filter-close",onClick:function(){return s()}},"Close"))},bn=s.c.h4(sn(),"#9a9a9a","#3EC5CB",t(252),(function(e){return e.visible&&Object(s.b)(dn())})),pn=s.c.form(un()),mn=s.c.div(ln(),"50px","50px",t(67)),hn=s.c.div(cn(),"50px","#3EC5CB",(function(e){return e.filtersFixed&&Object(s.b)(on(),pn,(function(e){return e.datePickerExpanded&&Object(s.b)(an())}))}),"50px","50px",(function(e){return e.isFilterVisible&&Object(s.b)(rn())}),(function(e){return!e.isFilterVisible&&Object(s.b)(tn(),mn)}),y.sizeII(nn()),y.sizeI(en()));function gn(){var e=Object(c.a)(["\n  position: relative;\n  min-height: 100vh;\n"]);return gn=function(){return e},e}function vn(){var e=Object(c.a)(["\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  html * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    font: {\n      size: 1.6rem;\n      family: ","; \n    }\n\n    color: ",";\n    background-color: #e7e7e7;\n  }\n"]);return vn=function(){return e},e}var xn=function(){var e=Object(r.useState)({searchBar:"",dropdownFilter:"New York",page:1,perPage:12}),n=Object(d.a)(e,2),t=n[0],i=n[1],o=function(e){var n=Object(r.useState)({data:null,loading:!0,failed:!1}),t=Object(d.a)(n,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){i((function(){return{data:null,loading:!0,failed:!1}})),fetch(e).then((function(e){return e.json()})).then((function(e){i({data:e,loading:!1,failed:!1})})).catch((function(e){i({data:null,loading:!1,failed:!0})}))}),[e,i]),a}("https://bikewise.org:443/api/v2/incidents?page=".concat(t.page,"&per_page=200&incident_type=theft&proximity=").concat(encodeURI(t.dropdownFilter),"&proximity_square=100&query=").concat(encodeURI(t.searchBar))),c=o.data,s=o.loading,f=o.failed,b=Object(r.useState)({dateRangeFilter:{startDate:null,endDate:null},searchFilter:"",radioFilter:"Image",checkboxFilter:[]}),p=Object(d.a)(b,2),h=p[0],g=p[1],v=Object(r.useState)(!1),x=Object(d.a)(v,2),k=x[0],y=x[1],E=Object(r.useState)(!1),j=Object(d.a)(E,2),w=j[0],C=j[1],F=Object(r.useState)(!1),_=Object(d.a)(F,2),z=_[0],S=_[1],N=function(){var e=window.scrollY;C(e>=150)};Object(r.useEffect)((function(){return window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(On,null),a.a.createElement(kn,null,a.a.createElement(O.Provider,{value:{queryOptions:t,sideFilterVisibility:k,filtersFixed:w,toggleSideFilterVisibility:function(){y(!k)},changeSelectedFilter:function(e){var n=Object(u.a)({},t);n[e.filterPart]=e.value,i(n)},sideFilterOptions:h,changeSelectedFilterOptions:function(e){var n=Object(u.a)({},h);n[e.filterPart]=e.value,g(n),console.log(h)},changeCheckboxFilterOptions:function(e,n){var t=Object(u.a)({},h),r=Object(l.a)(h.checkboxFilter);n&&"push"===n?r.push(e):r=r.filter((function(n){return n!==e})),t.checkboxFilter=r,g(t)},datePickerExpanded:z,setDatePickerExpanded:S}},a.a.createElement(m,null),a.a.createElement(A,null),a.a.createElement(ye,{data:c,loading:s,failed:f,casesPerPage:t.perPage,filter:h}),a.a.createElement(fn,null))))},On=Object(s.a)(vn(),f,"#1EB2B9"),kn=s.c.div(gn());o.a.render(a.a.createElement(xn,null),document.getElementById("root"))},66:function(e,n,t){e.exports=t.p+"static/media/search-icon.4dbda3d8.svg"},67:function(e,n,t){e.exports=t.p+"static/media/filter-icon.fe4393ea.svg"}},[[130,1,2]]]);
//# sourceMappingURL=main.0c8a8957.chunk.js.map