(this["webpackJsonpbike-finder"]=this["webpackJsonpbike-finder"]||[]).push([[0],{130:function(n,e,t){n.exports=t(253)},136:function(n,e,t){n.exports=t.p+"static/media/map-icon.0dc8e83b.svg"},149:function(n,e){},188:function(n,e,t){},251:function(n,e,t){n.exports=t.p+"static/media/check-mark.91a39004.svg"},252:function(n,e,t){n.exports=t.p+"static/media/arrow.815e8edc.svg"},253:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(21),o=t.n(i),c=t(1),l=t(50),u=t(34),d=t(7),s=t(3),f="'Open Sans', sans-serif;",b={sizeI:1170,sizeII:768,sizeIII:480};function p(){var n=Object(c.a)(["\n  position: relative;\n  height: ",";\n  background-color: ",";\n\n  h1 {\n    color: #fff;\n    text-align: center;\n    line-height: 150px;\n    letter-spacing: .35rem;\n    font-size: 3.4rem;\n    font-weight: 700;\n    letter-spacing: .8rem;\n    text-transform: uppercase;\n  }\n"]);return p=function(){return n},n}var m=function(){return a.a.createElement(h,null,a.a.createElement("h1",null,"Bike Finder"))},h=s.c.div(p(),"150px","#1EB2B9"),g=["Hamburg","Berlin","San Diego","Toronto"],v=[{id:0,option:"White",checked:!1},{id:1,option:"Silver",checked:!1},{id:2,option:"Gray",checked:!1},{id:3,option:"Black",checked:!1},{id:4,option:"Blue",checked:!1},{id:5,option:"Green",checked:!1},{id:6,option:"Yellow",checked:!1},{id:7,option:"Orange",checked:!1},{id:8,option:"Red",checked:!1},{id:9,option:"Pink",checked:!1},{id:10,option:"Purple",checked:!1},{id:11,option:"Violet",checked:!1}],x=["All","Image","No Image"],O=Object(r.createContext)();function k(){var n=Object(c.a)(["\n    @media only screen and (min-width: ","px) {\n      ","\n    }\n  "]);return k=function(){return n},n}var E=Object.keys(b).reduce((function(n,e){return n[e]=function(){return Object(s.b)(k(),b[e],s.b.apply(void 0,arguments))},n}),{});function y(){var n=Object(c.a)(["\n    width: 35%;\n  "]);return y=function(){return n},n}function j(){var n=Object(c.a)(["\n    width: 30%;\n  "]);return j=function(){return n},n}function w(){var n=Object(c.a)(["\n  display: block;\n  /* set same size of the .cd-tab-filter */\n  height: ",";\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: inset 0 -2px 0 ",";\n  z-index: 99;\n\n  .filter_input {\n    width: 95%;\n    background: url(",") no-repeat left\n      center;\n    background-size: 1.8rem;\n    font-size: 1.6rem;\n    font-weight: 500;\n    color: ",";\n    padding: 1.2rem 3rem;\n    border: none;\n\n    ::placeholder {\n      color: ",";\n    }\n\n    :focus {\n      outline: none;\n    }\n  }\n\n  ","\n\n  ","\n"]);return w=function(){return n},n}var C=function(){var n=Object(r.useContext)(O).changeSelectedFilter,e=Object(r.useState)(""),t=Object(d.a)(e,2),i=t[0],o=t[1];return a.a.createElement(F,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n({filterPart:"searchBar",value:i})}},a.a.createElement("input",{className:"filter_input",type:"text",placeholder:"Search..",autoFocus:!0,onChange:function(n){o(n.target.value)},value:i})))},F=s.c.div(w(),"50px","#3EC5CB",t(66),"#9a9a9a","#9a9a9a",E.sizeII(j()),E.sizeI(y()));function _(){var n=Object(c.a)(["\n    right: 2%;\n    width: 150px\n    "]);return _=function(){return n},n}function z(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 2%;\n  display: block;\n  height: ",";\n  width: 110px;\n  line-height: ",";\n  padding-left: 14px;\n  cursor: pointer;\n\n  ","\n"]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n      .dropdown {\n        &_button {\n          box-shadow: none;\n        }\n\n        &_content {\n          display: inline-block;\n          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n          border-bottom: 3px solid ",";\n        }\n      }\n    "]);return S=function(){return n},n}function N(){var n=Object(c.a)(["\n      box-shadow: none;\n\n      &_button__text {\n        display: inline-block;\n      }\n\n      &_content {\n        margin: -2px;\n      }\n    "]);return N=function(){return n},n}function I(){var n=Object(c.a)(["\n  width: 100%;\n\n  .dropdown {\n    &_button {\n      width: 100%;\n      height: ",";\n      margin: 0 auto;\n      padding-left: 1rem;\n\n      font-size: 1.6rem;\n      font-weight: 500;\n      text-align: start;\n      color: ",';\n      background: #fff;\n\n      border: none;\n      outline: none;\n\n      cursor: pointer;\n\n      /* small location icon */\n      &::after {\n        content: "";\n        position: absolute;\n        right: 1rem;\n        top: 50%;\n        transform: translateY(-50%);\n\n        display: inline-block;\n        width: 24px;\n        height: 24px;\n\n        background: url(',") no-repeat\n          center center;\n        background-size: 1.3rem;\n\n        pointer-events: none;\n      }\n\n      &:hover {\n        color: ",";\n      }\n\n      &__text {\n        display: none;\n      }\n    }\n\n    &_content {\n      display: none;\n      width: 100%;\n      margin-top: -21px;\n\n      &__search {\n        display: block;\n        width: 100%;\n        height: ",";\n        padding-left: 3.5rem;\n\n        border: none;\n        outline: none;\n        box-shadow: inset 0 0 0 2px ",";\n\n        background: url(",") no-repeat\n          left center #fff;\n        background-size: 1.7rem;\n        background-position: 1rem;\n        color: ",";\n        font-size: 1.6rem;\n        font-weight: 500;\n\n        &::placeholder {\n          color: ",";\n          font-size: 1.6rem;\n          font-weight: 500;\n        }\n\n        &:hover {\n          &::placeholder {\n            color: ",";\n          }\n        }\n      }\n    }\n\n    ","\n  }\n\n  ","\n"]);return I=function(){return n},n}function B(){var n=Object(c.a)(["\n  width: 100%;\n  height: ",";\n  padding-left: 1rem;\n\n  color: ",";\n  background: #fff;\n\n  font-size: 1.6rem;\n  font-weight: 500;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ",";\n  }\n\n  &:hover {\n    background-color: #f2f2f2;\n    color: ",";\n    box-shadow: inset 4px 0 0 ",";\n  }\n"]);return B=function(){return n},n}var D=function(n){var e=n.filterItems,t=Object(r.useContext)(O),i=t.queryOptions,o=t.changeSelectedFilter,c=Object(r.useState)(!1),l=Object(d.a)(c,2),u=l[0],s=l[1],f=Object(r.useState)(i.dropdownFilter),b=Object(d.a)(f,2),p=b[0],m=b[1],h=Object(r.useState)(""),g=Object(d.a)(h,2),v=g[0],x=g[1];return a.a.createElement(R,null,a.a.createElement(V,{opened:u},a.a.createElement("button",{className:"dropdown_button",onClick:function(){return s(!u)}},a.a.createElement("span",{className:"dropdown_button__text"},p)),a.a.createElement("div",{className:"dropdown_content"},a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),""!==v&&m(v),o({filterPart:"dropdownFilter",value:v}),x(""),s(!u)}},a.a.createElement("input",{className:"dropdown_content__search",type:"text",placeholder:"City..",onChange:function(n){console.log(n.target.value),x(n.target.value)},value:v})),a.a.createElement((function(){return e.map((function(n,e){return a.a.createElement(P,{onClick:function(){return function(n){m(n),o({filterPart:"dropdownFilter",value:n}),s(!u)}(n)},key:e},n)}))}),null))))},P=s.c.div(B(),"50px","#9a9a9a","#e6e6e6","#3EC5CB","#3EC5CB"),V=s.c.div(I(),"50px","#9a9a9a",t(136),"#3EC5CB","50px","#3EC5CB",t(66),"#9a9a9a","#9a9a9a","#3EC5CB",E.sizeII(N()),(function(n){return n.opened&&Object(s.b)(S(),"#3EC5CB")})),R=s.c.div(z(),"50px","50px",E.sizeII(_()));function T(){var n=Object(c.a)(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n    "]);return T=function(){return n},n}function H(){var n=Object(c.a)(["\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);\n\n  ","\n"]);return H=function(){return n},n}function Y(){var n=Object(c.a)(["\n        opacity: 0;\n      "]);return Y=function(){return n},n}function q(){var n=Object(c.a)(["\n    width: auto;\n    top: 0;\n    left: 2%;\n\n    text-indent: 0;\n    color: ",";\n    font-size: 1.6rem;\n    font-weight: 500;\n\n    padding-left: 24px;\n    background-position: left center;\n\n    transition: all 0.3s;\n\n    :hover {\n      color: ",";\n    }\n\n    ","\n  "]);return q=function(){return n},n}function L(){var n=Object(c.a)(["\n      opacity: 0;\n      pointer-events: none;\n    "]);return L=function(){return n},n}function M(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: ",";\n  line-height: ",";\n  width: 60px;\n\n  /* image replacement */\n  text-indent: 100%;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: transparent;\n  white-space: nowrap;\n  background: transparent url(",")\n    no-repeat center center;\n\n  z-index: 3;\n\n  ","\n\n  ","\n"]);return M=function(){return n},n}var A=function(){var n=Object(r.useContext)(O),e=n.filtersFixed,t=n.sideFilterVisibility,i=n.toggleSideFilterVisibility;return a.a.createElement(J,{filtersFixed:e},a.a.createElement(G,{onClick:function(){return i()},sideFilterVisible:t},"Filter"),a.a.createElement(C,null),a.a.createElement(D,{filterItems:g}))},G=s.c.div(M(),"50px","50px",t(67),(function(n){return n.sideFilterVisible&&Object(s.b)(L())}),E.sizeII(q(),"#9a9a9a","#3EC5CB",(function(n){return n.sideFilterVisible&&Object(s.b)(Y())}))),J=s.c.div(H(),(function(n){return n.filtersFixed&&Object(s.b)(T())}));function U(){var n=Object(c.a)(["\n        width: 45%;\n      "]);return U=function(){return n},n}function X(){var n=Object(c.a)(["\n    width: 30%;\n    margin: 1rem auto;\n\n    ","\n  "]);return X=function(){return n},n}function K(){var n=Object(c.a)(["\n        width: 65%;\n      "]);return K=function(){return n},n}function W(){var n=Object(c.a)(["\n    width: 40%;\n    margin: 2rem;\n\n    ","\n  "]);return W=function(){return n},n}function Q(){var n=Object(c.a)(["\n  width: 90%;\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: none;\n  margin: 1rem auto;\n  text-align: center;\n  z-index: -1;\n\n  ",";\n\n  ",";\n\n  .card {\n    &_container {\n      display: flex;\n      flex-flow: column wrap;\n      justify-content: space-between;\n      align-items: center;\n      height: 100%;\n      padding: 10px 20px;\n    }\n\n    &_container-heading {\n      margin-top: 1rem;\n      color: #1eb2b9;\n      font-size: 2rem;\n      font-weight: 700;\n    }\n\n    &_container-description {\n      margin: 3rem 5%;\n      color: ",";\n      font-size: 1.5rem;\n      font-weight: 500;\n\n      &_details {\n        margin: 0 10% 1rem;\n        color: ",";\n        font-size: 1.4rem;\n\n        &--bold {\n          font-weight: 500;\n        }\n      }\n    }\n\n    &_container-description_details--bold {\n      font-weight: 500;\n    }\n\n    &_container-button {\n      padding: 1rem 2rem;\n      margin: 2rem auto;\n      background-color: #1eb2b9;\n      color: #fff;\n      font-size: 1.4rem;\n      border: none;\n      outline: none;\n      border-radius: 2px;\n      cursor: pointer;\n\n      &:hover {\n        background-color: #019ca3;\n      }\n\n      &:active {\n        transform: scale(1.03);\n      }\n    }\n  }\n"]);return Q=function(){return n},n}function Z(){var n=Object(c.a)(["\n      background: url(",") no-repeat center center;\n      background-clip: border-box;\n      background-size: 100% 100%;\n      color: transparent;\n      text-indent: -100%;\n    "]);return Z=function(){return n},n}function $(){var n=Object(c.a)(["\n  width: 100%;\n  height: 250px;\n  text-align: center;\n  padding: 10rem 0;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #fff;\n  background-color: ",";\n  border-bottom: 4px solid ",";\n\n  ","\n"]);return $=function(){return n},n}var nn=function(n){return a.a.createElement(tn,{sideFilterVisibility:n.sideFilterVisibility,className:"card"},a.a.createElement(en,{image:n.image,alt:"Bike Image"},"No Image"),a.a.createElement("div",{className:"card_container"},a.a.createElement("h2",{className:"card_container-heading"},n.title),a.a.createElement("p",{className:"card_container-description"},n.text?n.text:"No Description"),a.a.createElement("div",null,a.a.createElement("p",{className:"card_container-description_details"},a.a.createElement("span",{className:"card_container-description_details--bold"},"Details:"," "),"".concat(n.details,", "),a.a.createElement("span",{className:"card_container-description_details--bold"},"Time:"," "),"".concat(n.time,", "),a.a.createElement("span",{className:"card_container-description_details--bold"},"Location:"," "),n.location),a.a.createElement("button",{className:"card_container-button",onClick:function(){return e=n.source,void window.open(e,"_blank");var e}},"Find out more"))))},en=s.c.div($(),"#9a9a9a","#3EC5CB",(function(n){return n.image&&Object(s.b)(Z(),(function(n){return n.image}))})),tn=s.c.div(Q(),E.sizeII(W(),(function(n){return n.sideFilterVisibility&&Object(s.b)(K())})),E.sizeI(X(),(function(n){return n.sideFilterVisibility&&Object(s.b)(U())})),"#9a9a9a","#9a9a9a"),rn=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{background:"none"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},a.a.createElement("g",{transform:"rotate(0 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(30 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(60 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(90 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(120 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(150 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(180 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(210 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(240 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(270 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(300 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),a.a.createElement("g",{transform:"rotate(330 50 50)"},a.a.createElement("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#1eb2b9"},a.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}))))};function an(){var n=Object(c.a)(["\n  margin: 25vh auto;\n\n  z-index: 999;\n"]);return an=function(){return n},n}var on=function(){return a.a.createElement(cn,null,a.a.createElement(rn,null))},cn=s.c.div(an());function ln(){var n=Object(c.a)(["\n  .pagination {\n    margin: 5rem 1rem;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n\n  .page-link {\n    margin-right: -1px;\n    padding: 1.5rem;\n    font-size: 1.6rem;\n    font-weight: 500;\n    color: ",";\n    cursor: pointer;\n  }\n"]);return ln=function(){return n},n}var un=function(n){for(var e=n.casesPerPage,t=n.totalCases,r=n.paginate,i=[],o=1;o<=Math.ceil(t/e);o++)i.push(o);return a.a.createElement(dn,null,a.a.createElement("nav",{className:"page-nav"},a.a.createElement("ul",{className:"pagination"},i.map((function(n){return a.a.createElement("li",{key:n,className:"page-item"},a.a.createElement("a",{onClick:function(){return r(n)},href:"!#",className:"page-link"},n))})))))},dn=s.c.div(ln(),"#1EB2B9"),sn=function(n,e,t){return null===n||null===e||n/1e3<=t&&t<=e/1e3},fn=function(n,e){return""===n||e&&e.includes(n)},bn=function(n,e){return"All"===n||("Image"===n?null!==e:"No Image"===n?null===e:void 0)},pn=function(n,e){if(0===n.length)return!0;var t=!0,r=!1,a=void 0;try{for(var i,o=n[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var c=i.value;if(!e.includes(c.toLowerCase()))return!1}}catch(l){r=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}return!0},mn=function(n){var e=n.indexOf("(");return e=-1!==e?e:n.length,[n.includes("Stolen")?n.slice(7,e):n,e===n.length?"No details":n.slice(e)]};function hn(){var n=Object(c.a)(["\n        width: 75%;\n        margin-left: 25%;\n      "]);return hn=function(){return n},n}function gn(){var n=Object(c.a)(["\n    flex-direction: row;\n    transition: width 0.3s;\n\n    "," \n  "]);return gn=function(){return n},n}function vn(){var n=Object(c.a)(["\n        width: 65%;\n        margin-left: 35%;\n      "]);return vn=function(){return n},n}function xn(){var n=Object(c.a)(["\n    flex-direction: row;\n\n    "," \n  "]);return xn=function(){return n},n}function On(){var n=Object(c.a)(["\n      padding-top: 7rem;\n    "]);return On=function(){return n},n}function kn(){var n=Object(c.a)(["\n  padding: 2rem;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  ","\n\n  ","\n\n  ","\n"]);return kn=function(){return n},n}function En(){var n=Object(c.a)(["\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: ",";\n  text-align: center;\n"]);return En=function(){return n},n}var yn=function(n){var e=n.loading,t=n.data,i=n.failed,o=n.casesPerPage,c=Object(r.useContext)(O),l=c.sideFilterVisibility,u=c.filtersFixed,s=c.sideFilterOptions,f=Object(r.useState)(1),b=Object(d.a)(f,2),p=b[0],m=b[1],h=!e&&function(n,e){var t=[],r=n.dateRangeFilter,a=n.searchFilter,i=n.radioFilter,o=n.checkboxFilter,c=!0,l=!1,u=void 0;try{for(var s,f=e[Symbol.iterator]();!(c=(s=f.next()).done);c=!0){var b=s.value;if(!b.hasOwnProperty("details")){var p=mn(b.title),m=Object(d.a)(p,2),h=m[0],g=m[1];b.title=h,b.details=g}sn(r.startDate,r.endDate,b.occurred_at)&&fn(a,b.description)&&bn(i,b.media.image_url)&&pn(o,b.details)&&t.push(b)}}catch(v){l=!0,u=v}finally{try{c||null==f.return||f.return()}finally{if(l)throw u}}return t}(s,t.incidents),g=p*o,v=g-o,x=!e&&h.slice(v,g);return a.a.createElement(a.a.Fragment,null,a.a.createElement(wn,{sideFilterVisibility:l,filtersFixed:u},e&&a.a.createElement(on,null),!e&&!i&&x.map((function(n){var e=new Date(1e3*n.occurred_at);return a.a.createElement(nn,{key:n.id,image:n.media.image_url,title:n.title,text:n.description,details:n.details,time:"".concat(e.getDate(),".").concat(e.getMonth()+1,".").concat(e.getFullYear()),location:n.address,source:n.source.html_url,sideFilterVisibility:l})})),!e&&!i&&!t.incidents.length&&a.a.createElement(jn,null,"No results found."),!e&&!t&&i&&a.a.createElement(jn,null,"Error, try again later.")),a.a.createElement(un,{casesPerPage:o,totalCases:!e&&h.length,paginate:m}))},jn=s.c.div(En(),"#1EB2B9"),wn=s.c.section(kn(),(function(n){return n.filtersFixed&&Object(s.b)(On())}),E.sizeII(xn(),(function(n){return n.sideFilterVisibility&&Object(s.b)(vn())})),E.sizeI(gn(),(function(n){return n.sideFilterVisibility&&Object(s.b)(hn())}))),Cn=(t(137),t(138),t(187),t(188),t(128));function Fn(){var n=Object(c.a)(["\n      display: none;\n    "]);return Fn=function(){return n},n}function _n(){var n=Object(c.a)(["\n  ","\n"]);return _n=function(){return n},n}var zn=function(n){var e=n.visible,t=Object(r.useContext)(O),i=t.setDatePickerExpanded,o=t.changeSelectedFilterOptions,c=Object(r.useState)(null),l=Object(d.a)(c,2),u=l[0],s=l[1],f=Object(r.useState)(null),b=Object(d.a)(f,2),p=b[0],m=b[1],h=Object(r.useState)(null),g=Object(d.a)(h,2),v=g[0],x=g[1];return a.a.createElement(Sn,{filterHidden:!e},a.a.createElement(Cn.DateRangePicker,{startDate:u,startDateId:"your_unique_start_date_id",endDate:p,endDateId:"your_unique_end_date_id",onDatesChange:function(n){var e,t,r=n.startDate,a=n.endDate;return t=a,s(e=r),m(t),void o({filterPart:"dateRangeFilter",value:{startDate:Date.parse(e),endDate:Date.parse(t)}})},focusedInput:v,onFocusChange:function(n){x(n),i(null!==n)},isDayBlocked:function(){return!1},hideKeyboardShortcutsPanel:!0,withPortal:!0,isOutsideRange:function(){return!1}}))},Sn=s.c.div(_n(),(function(n){return n.filterHidden&&Object(s.b)(Fn())}));function Nn(){var n=Object(c.a)(["\n      display: none;\n    "]);return Nn=function(){return n},n}function In(){var n=Object(c.a)(['\n  transition: all 0.3s;\n\n  input[type="search"] {\n    width: 100%;\n    padding: 1rem;\n    font-family: ',";\n    font-size: 1.6rem;\n    background-color: ",";\n    border-color: transparent;\n    border-radius: 0;\n    border: 2px solid ",";\n    appearance: none;\n    box-shadow: none;\n\n    :focus {\n      outline: none;\n      background-color: #fff;\n      border-color: ",";\n    }\n  }\n\n  ","\n"]);return In=function(){return n},n}var Bn=function(n){var e=n.visible,t=Object(r.useContext)(O).changeSelectedFilterOptions,i=Object(r.useState)("Search.."),o=Object(d.a)(i,2),c=o[0],l=o[1],u=Object(r.useState)(""),s=Object(d.a)(u,2),f=s[0],b=s[1];return a.a.createElement(Dn,{filterHidden:!e},a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t({filterPart:"searchFilter",value:f}),l(""!==f?f:"Search.."),b("")}},a.a.createElement("input",{type:"search",placeholder:c,onChange:function(n){b(n.target.value)},value:f})))},Dn=s.c.div(In(),f,"#e6e6e6","#e6e6e6","#3EC5CB",(function(n){return n.filterHidden&&Object(s.b)(Nn())}));function Pn(){var n=Object(c.a)(["\n      display: none;\n    "]);return Pn=function(){return n},n}function Vn(){var n=Object(c.a)(["\n  ","\n"]);return Vn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n  position: relative;\n  margin-bottom: 0.5rem;\n\n  :last-of-type {\n    margin-bottom: 0;\n  }\n"]);return Rn=function(){return n},n}function Tn(){var n=Object(c.a)(["\n  /* shared style for input elements */\n  font-family: ",";\n  border-radius: 0;\n  background-color: #fff;\n  border: 2px solid ",";\n\n  /* Hide the browser's default checkbox */\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity 0;\n  z-index: 3;\n\n  :checked + label::before {\n    border-color: ",";\n    background-color: ",";\n  }\n\n  :checked + label::after {\n    display: block;\n  }\n"]);return Tn=function(){return n},n}function Hn(){var n=Object(c.a)(["\n  padding-left: 24px;\n  font-size: 1.5rem;\n  color: ",";\n  user-select: none;\n\n  ::before {\n    font-family: ",";\n    border-radius: 0;\n    background-color: #fff;\n    border: 2px solid ",';\n  }\n\n  ::before,\n  ::after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 45%;\n    transform: translateY(-50%);\n  }\n\n  ::before {\n    width: 16px;\n    height: 16px;\n    left: 0;\n  }\n\n  ::after {\n    /* check mark - hidden */\n    display: none;\n  }\n\n  ::after {\n    /* check mark style for check boxes */\n    width: 16px;\n    height: 16px;\n    left: 0;\n    background: url(',") no-repeat\n      center center;\n  }\n"]);return Hn=function(){return n},n}var Yn=function(n){var e=n.visible,t=Object(r.useContext)(O).changeCheckboxFilterOptions,i=Object(r.useState)(v),o=Object(d.a)(i,2),c=o[0],u=o[1],s=function(n){var e=n.labelName,r=n.id;return a.a.createElement(Mn,null,a.a.createElement(Ln,{type:"checkbox",id:e.concat("checkbox",r),checked:c[r].checked,onChange:function(){return function(n,e){var r=Object(l.a)(c);r[n].checked=!c[n].checked,u(r),r[n].checked?t(e,"push"):t(e)}(r,e)}}),a.a.createElement(qn,{htmlFor:e.concat("checkbox",r)},e))};return a.a.createElement(An,{filterHidden:!e},c.map((function(n){return a.a.createElement(s,{labelName:n.option,id:n.id,key:n.id,checked:n.checked})})))},qn=s.c.label(Hn(),"#9a9a9a",f,"#e6e6e6",t(251)),Ln=s.c.input(Tn(),f,"#e6e6e6","#3EC5CB","#3EC5CB"),Mn=s.c.div(Rn()),An=s.c.div(Vn(),(function(n){return n.filterHidden&&Object(s.b)(Pn())}));function Gn(){var n=Object(c.a)(["\n      display: none;\n    "]);return Gn=function(){return n},n}function Jn(){var n=Object(c.a)(["\n  ","\n"]);return Jn=function(){return n},n}function Un(){var n=Object(c.a)(["\n  position: relative;\n  margin-bottom: 0.5rem;\n\n  :last-of-type {\n    margin-bottom: 0;\n  }\n"]);return Un=function(){return n},n}function Xn(){var n=Object(c.a)(["\n  padding-left: 24px;\n  font-size: 1.5rem;\n  color: ",";\n  user-select: none;\n\n  ::before {\n    font-family: ",";\n    border-radius: 0;\n    background-color: #fff;\n    border: 2px solid ",';\n  }\n\n  ::before,\n  ::after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 45%;\n    transform: translateY(-50%);\n  }\n\n  ::before {\n    width: 16px;\n    height: 16px;\n    left: 0;\n  }\n\n  ::after {\n    /* check mark - hidden */\n    display: none;\n  }\n\n  ::before,\n  ::after {\n    border-radius: 50%;\n  }\n\n  ::after {\n    /* check mark style for radio buttons */\n    width: 6px;\n    height: 6px;\n    background-color: #fff;\n    left: 5px;\n  }\n']);return Xn=function(){return n},n}function Kn(){var n=Object(c.a)(["\n  /* shared style for input elements */\n  font-family: ",";\n  border-radius: 0;\n  background-color: #fff;\n  border: 2px solid ",";\n\n  /* hide the browser's default radio button */\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 3;\n\n  :checked + label::before {\n    border-color: ",";\n    background-color: ",";\n  }\n\n  :checked + label::after {\n    display: block;\n  }\n"]);return Kn=function(){return n},n}var Wn=function(n){var e=n.visible,t=Object(r.useContext)(O),i=t.sideFilterOptions,o=t.changeSelectedFilterOptions,c=Object(r.useState)(x.indexOf(i.radioFilter)),l=Object(d.a)(c,2),u=l[0],s=l[1],f=function(n){var e=n.labelName,t=n.id,r=n.checked;return a.a.createElement($n,null,a.a.createElement(Qn,{type:"radio",id:e.concat("radio",t),checked:r,onChange:function(){return function(n,e){o({filterPart:"radioFilter",value:n}),s(e)}(e,t)}}),a.a.createElement(Zn,{htmlFor:e.concat("radio",t)},e))};return a.a.createElement(ne,{filterHidden:!e},x.map((function(n,e){return a.a.createElement(f,{labelName:n,checked:u===e,id:e,key:e})})))},Qn=s.c.input(Kn(),f,"#e6e6e6","#3EC5CB","#3EC5CB"),Zn=s.c.label(Xn(),"#9a9a9a",f,"#e6e6e6"),$n=s.c.div(Un()),ne=s.c.div(Jn(),(function(n){return n.filterHidden&&Object(s.b)(Gn())}));function ee(){var n=Object(c.a)(["\n    width: 25%;\n  "]);return ee=function(){return n},n}function te(){var n=Object(c.a)(["\n    width: 35%;\n  "]);return te=function(){return n},n}function re(){var n=Object(c.a)(["\n        "," {\n          opacity: 0;\n        }\n      "]);return re=function(){return n},n}function ae(){var n=Object(c.a)(["\n      transform: translateX(0);\n      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);\n    "]);return ae=function(){return n},n}function ie(){var n=Object(c.a)(["\n            overflow-y: visible;\n          "]);return ie=function(){return n},n}function oe(){var n=Object(c.a)(["\n      position: fixed;\n      top: 0;\n      height: 100vh;\n\n      "," {\n        height: 100%;\n        overflow-y: scroll;\n\n        ","\n      }\n    "]);return oe=function(){return n},n}function ce(){var n=Object(c.a)(['\n  position: absolute;\n  top: 150px;\n  left: 0;\n  width: 70%;\n  height: 100%;\n\n  background: #fff;\n\n  z-index: 2;\n\n  transform: translateX(-100%);\n  transition: transform 0.3s, box-shadow 0.3s;\n\n  ::before {\n    /* top colored bar */\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: ',";\n    width: 100%;\n\n    background-color: ",";\n\n    z-index: 2;\n  }\n\n  ","\n\n  .filter-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: ",";\n    line-height: ",";\n    width: 60px;\n\n    color: #fff; \n    background: #1eb2b9;\n    font-size: 1.4rem;\n    font-weight: 500;\n    text-align: center;\n    cursor: pointer;\n\n    z-index: 3;\n\n    :hover {\n      background: #019ca3;\n    }\n  }\n\n  ","\n\n    ","\n\n  ","\n\n  ","\n"]);return ce=function(){return n},n}function le(){var n=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 8%;\n  padding-left: 24px;\n  height: ",";\n  line-height: ",";\n  font-size: 1.6rem;\n  font-weight: 500;\n  width: auto;\n\n  /* image replacement */\n  text-indent: 0;\n  color: #fff;\n  white-space: nowrap;\n  background: transparent url(",")\n    no-repeat left center;\n  pointer-events: none;\n\n  z-index: 6;\n\n  transition: all 0.1s;\n"]);return le=function(){return n},n}function ue(){var n=Object(c.a)(["\n  padding: 5rem 10%;\n"]);return ue=function(){return n},n}function de(){var n=Object(c.a)(["\n      ::before {\n        transform: translateY(-50%) rotate(-90deg);\n      }\n    "]);return de=function(){return n},n}function se(){var n=Object(c.a)(["\n  /* filter block title */\n  position: relative;\n  margin-top: 1.5rem;\n  padding: 1rem 0 1rem 2rem;\n\n  color: ",";\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 1.3rem;\n\n  user-select: none;\n  cursor: pointer;\n\n  :hover {\n    color: ",';\n  }\n\n  ::before {\n    /* arrow */\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 16px;\n    height: 16px;\n    background: url(',") no-repeat center\n      center;\n\n    transform: translateY(-50%);\n    transition: transform 0.3s;\n  }\n\n  ","\n"]);return se=function(){return n},n}var fe=function(){var n=Object(r.useState)({DateRangeFilterComp:!0,SearchFilterComp:!0,CheckboxFilterComp:!0,RadioFilterComp:!0}),e=Object(d.a)(n,2),t=e[0],i=e[1],o=Object(r.useContext)(O),c=o.filtersFixed,l=o.sideFilterVisibility,s=o.toggleSideFilterVisibility,f=o.datePickerExpanded,b=function(n){var e=Object(u.a)({},t);e[n]=!t[n],i(e)};return a.a.createElement(he,{isFilterVisible:l,filtersFixed:c,datePickerExpanded:f},a.a.createElement(me,null,"Filter"),a.a.createElement(pe,{filtersFixed:c},a.a.createElement(be,{onClick:function(){return b("DateRangeFilterComp")},visible:!t.DateRangeFilterComp},"Occurrence"),a.a.createElement(zn,{visible:t.DateRangeFilterComp}),a.a.createElement(be,{onClick:function(){return b("SearchFilterComp")},visible:!t.SearchFilterComp},"Description"),a.a.createElement(Bn,{visible:t.SearchFilterComp}),a.a.createElement(be,{onClick:function(){return b("RadioFilterComp")},visible:!t.RadioFilterComp},"Image"),a.a.createElement(Wn,{visible:t.RadioFilterComp}),a.a.createElement(be,{onClick:function(){return b("CheckboxFilterComp")},visible:!t.CheckboxFilterComp},"Color"),a.a.createElement(Yn,{visible:t.CheckboxFilterComp})),a.a.createElement("div",{className:"filter-close",onClick:function(){return s()}},"Close"))},be=s.c.h4(se(),"#9a9a9a","#3EC5CB",t(252),(function(n){return n.visible&&Object(s.b)(de())})),pe=s.c.form(ue()),me=s.c.div(le(),"50px","50px",t(67)),he=s.c.div(ce(),"50px","#3EC5CB",(function(n){return n.filtersFixed&&Object(s.b)(oe(),pe,(function(n){return n.datePickerExpanded&&Object(s.b)(ie())}))}),"50px","50px",(function(n){return n.isFilterVisible&&Object(s.b)(ae())}),(function(n){return!n.isFilterVisible&&Object(s.b)(re(),me)}),E.sizeII(te()),E.sizeI(ee()));function ge(){var n=Object(c.a)(["\n  position: relative;\n  min-height: 100vh;\n"]);return ge=function(){return n},n}function ve(){var n=Object(c.a)(["\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  html * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    font: {\n      size: 1.6rem;\n      family: ","; \n    }\n\n    color: ",";\n    background-color: #e7e7e7;\n  }\n"]);return ve=function(){return n},n}var xe=function(){var n=Object(r.useState)({searchBar:"",dropdownFilter:"New York",page:1,perPage:12}),e=Object(d.a)(n,2),t=e[0],i=e[1],o=function(n){var e=Object(r.useState)({data:null,loading:!0,failed:!1}),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){i((function(){return{data:null,loading:!0,failed:!1}})),fetch(n).then((function(n){return n.json()})).then((function(n){i({data:n,loading:!1,failed:!1})})).catch((function(n){i({data:null,loading:!1,failed:!0})}))}),[n,i]),a}("https://bikewise.org:443/api/v2/incidents?page=".concat(t.page,"&per_page=200&incident_type=theft&proximity=").concat(encodeURI(t.dropdownFilter),"&proximity_square=100&query=").concat(encodeURI(t.searchBar))),c=o.data,s=o.loading,f=o.failed,b=Object(r.useState)({dateRangeFilter:{startDate:null,endDate:null},searchFilter:"",radioFilter:"Image",checkboxFilter:[]}),p=Object(d.a)(b,2),h=p[0],g=p[1],v=Object(r.useState)(!1),x=Object(d.a)(v,2),k=x[0],E=x[1],y=Object(r.useState)(!1),j=Object(d.a)(y,2),w=j[0],C=j[1],F=Object(r.useState)(!1),_=Object(d.a)(F,2),z=_[0],S=_[1],N=function(){var n=window.scrollY;C(n>=150)};Object(r.useEffect)((function(){return window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Oe,null),a.a.createElement(ke,null,a.a.createElement(O.Provider,{value:{queryOptions:t,sideFilterVisibility:k,filtersFixed:w,toggleSideFilterVisibility:function(){E(!k)},changeSelectedFilter:function(n){var e=Object(u.a)({},t);e[n.filterPart]=n.value,i(e)},sideFilterOptions:h,changeSelectedFilterOptions:function(n){var e=Object(u.a)({},h);e[n.filterPart]=n.value,g(e),console.log(h)},changeCheckboxFilterOptions:function(n,e){var t=Object(u.a)({},h),r=Object(l.a)(h.checkboxFilter);e&&"push"===e?r.push(n):r=r.filter((function(e){return e!==n})),t.checkboxFilter=r,g(t)},datePickerExpanded:z,setDatePickerExpanded:S}},a.a.createElement(m,null),a.a.createElement(A,null),a.a.createElement(yn,{data:c,loading:s,failed:f,casesPerPage:t.perPage,filter:h}),a.a.createElement(fe,null))))},Oe=Object(s.a)(ve(),f,"#1EB2B9"),ke=s.c.div(ge());o.a.render(a.a.createElement(xe,null),document.getElementById("root"))},66:function(n,e,t){n.exports=t.p+"static/media/search-icon.4dbda3d8.svg"},67:function(n,e,t){n.exports=t.p+"static/media/filter-icon.fe4393ea.svg"}},[[130,1,2]]]);
//# sourceMappingURL=main.9c3290c6.chunk.js.map