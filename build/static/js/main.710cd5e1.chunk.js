(this.webpackJsonpshortner=this.webpackJsonpshortner||[]).push([[0],{24:function(e,t,n){e.exports={hero:"Hero_hero__Gbd6p",imgContainer:"Hero_imgContainer__2fb8p",img:"Hero_img__3tygQ",text:"Hero_text__3jT0W",title:"Hero_title__1zrFW",description:"Hero_description__2pRda"}},25:function(e,t,n){e.exports={Footer:"Footer_Footer__1WCod",content:"Footer_content__3bWDW",logo:"Footer_logo__1ISW-",menu:"Footer_menu__3DtJ2",menuGroup:"Footer_menuGroup__1AU5m",socials:"Footer_socials__2pKdY"}},30:function(e,t,n){e.exports={Features:"Features_Features__2x9Oo",title:"Features_title__2UQcr",description:"Features_description__3DbjY",items:"Features_items__1rcwx",item:"Features_item__175fK"}},33:function(e,t,n){e.exports={menu:"Menu_menu__3nhuq",pages:"Menu_pages__3ZmX5",login:"Menu_login__3ztRC",link:"Menu_link__OWxuA"}},34:function(e,t,n){e.exports={overlay:"Modal_overlay__2DkBC",modal:"Modal_modal__2e6Bi",modalAction:"Modal_modalAction__18BnC"}},35:function(e,t,n){e.exports={section:"Form_section__V7Rtu",form:"Form_form__2hO_A",input:"Form_input__3h1zT",error:"Form_error__6T52P"}},37:function(e,t,n){e.exports={button:"Button_button__26aKb",link:"Button_link__3CLz7",medium:"Button_medium__2xgV4",large:"Button_large__OYtYE",square:"Button_square__3edo6"}},39:function(e,t,n){e.exports={header:"Header_header__3VYRU",logo:"Header_logo__KwZys",burger:"Header_burger__1swod",mobileMenu:"Header_mobileMenu__2EnMK"}},42:function(e,t,n){e.exports={Shortens:"Shortens_Shortens__1yo51",item:"Shortens_item__mcZtK"}},44:function(e,t,n){e.exports={form:"Form_form__2flQt"}},46:function(e,t,n){e.exports={CallToAction:"CallToAction_CallToAction__3dNvA"}},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r,i,a=n(0),c=n.n(a),l=n(26),o=n.n(l),s=n(10),u=n(39),d=n.n(u),j=n.p+"static/media/logo.83464303.svg",b=n(43),h=n.n(b),m=n(37),p=n.n(m),O=n(2),f=function(e){var t=e.onClick,n=e.variant,r=void 0===n?"":n,i=e.size,a=void 0===i?"medium":i,c=e.type,l=void 0===c?"button":c,o=e.children,s=h()(p.a.button,p.a[a],p.a[r]);return Object(O.jsx)("button",{className:s,type:l,onClick:t,children:o})},g=n(33),x=n.n(g),v=function(e){var t=e.links,n=void 0===t?[]:t,r=e.handleSignup,i=e.handleLogin;return Object(O.jsxs)("div",{className:x.a.menu,children:[Object(O.jsx)("div",{className:x.a.pages,children:n.map((function(e){return Object(O.jsx)("a",{href:e.url,className:x.a.link,children:e.text},e.text)}))}),Object(O.jsx)("div",{className:x.a.login,children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{variant:"link",onClick:i,children:"Login"}),Object(O.jsx)(f,{onClick:r,children:"Sign Up"})]})})]})},_=n(68),y=n(67),w=n(34),k=n.n(w),C={opened:{opacity:1},closed:{opacity:0}},F={opened:{opacity:1,transform:"translate(-50%, 0%)"},closed:{opacity:0,transform:"translate(-50%, 20%)"}},N=function(e){var t=e.open,n=e.handleClose,r=e.title,i=e.children;return Object(l.createPortal)(Object(O.jsx)(_.a,{children:t&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y.a.div,{className:k.a.overlay,onClick:n,initial:"closed",animate:"opened",exit:"closed",variants:C,transition:{duration:.2}}),Object(O.jsxs)(y.a.div,{className:k.a.modal,initial:"closed",animate:"opened",exit:"closed",variants:F,transition:{duration:.2},children:[r&&Object(O.jsx)("header",{children:Object(O.jsx)("h2",{children:r})}),Object(O.jsx)("div",{className:k.a.modalContent,children:i}),Object(O.jsx)("div",{className:k.a.modalAction,children:Object(O.jsx)(f,{className:"close",onClick:n,children:"Close"})})]})]})}),document.body)},S=n(44),z=n.n(S),M=function(e){var t=e.handleClick,n=e.title,r=Object(a.useState)(""),i=Object(s.a)(r,2),c=i[0],l=i[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1];return Object(O.jsxs)("div",{className:z.a.form,children:[Object(O.jsx)("input",{type:"email",value:c,onChange:function(e){return l(e.target.value)},placeholder:"email"}),Object(O.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)},placeholder:"password"}),Object(O.jsx)(f,{onClick:function(){return t(c,d)},children:n})]})},A=function(e){var t=e.closeModal;return Object(O.jsx)(M,{handleClick:function(e,n){t()},title:"Register"})},E=function(e){var t=e.closeModal;return Object(O.jsx)(M,{handleClick:function(e,n){t()},title:"Login"})},P=[{url:"#",text:"Features"},{url:"#",text:"Prices"},{url:"#",text:"Resources"}],I=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),c=Object(s.a)(i,2),l=c[0],o=c[1],u=function(){return r(!1)},b=function(){return o(!1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("header",{className:"".concat(d.a.header," container"),children:[Object(O.jsx)("img",{src:j,alt:"logo",className:d.a.logo}),Object(O.jsx)(v,{links:P,handleSignup:function(){return r(!0)},handleLogin:function(){return o(!0)}})]}),Object(O.jsx)(N,{open:n,title:"Sign Up",handleClose:u,children:Object(O.jsx)(A,{closeModal:u})}),Object(O.jsx)(N,{open:l,title:"Sign In",handleClose:b,children:Object(O.jsx)(E,{closeModal:b})})]})},B=n(24),V=n.n(B),R=n.p+"static/media/illustration-working.c9b5ef54.svg",T=function(){return Object(O.jsxs)("section",{className:"".concat(V.a.hero," container"),children:[Object(O.jsx)("div",{className:V.a.imgContainer,children:Object(O.jsx)("img",{src:R,alt:"hero",className:V.a.img})}),Object(O.jsxs)("article",{className:V.a.text,children:[Object(O.jsx)("h1",{className:V.a.title,children:"More than just shorter links"}),Object(O.jsx)("p",{className:V.a.description,children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(O.jsx)(f,{size:"large",children:"Get Started"})]})]})},H=n(3),U=n(49),G=n(23),L=n(16),W=n(5),D=n(11),K=n(32),q=Object(K.b)("links/createShortLink",function(){var e=Object(D.a)(Object(W.a)().mark((function e(t){var n;return Object(W.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.shrtco.de/v2/shorten?url="+t,{method:"POST"});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y=Object(K.c)({name:"links",initialState:{items:[],loading:"idle"},extraReducers:(r={},Object(L.a)(r,q.rejected,(function(e){e.loading="rejected"})),Object(L.a)(r,q.pending,(function(e){e.loading="loading"})),Object(L.a)(r,q.fulfilled,(function(e,t){var n=t.payload,r=n.ok,i=n.result;r?(e.items.push(i),e.loading="idle"):e.loading="error"})),r)}),Z=function(e){return e.links.loading},J=function(e){return e.links.items},Q=Y.reducer,X=n(35),$=n.n(X),ee=function(){var e=Object(G.c)(Z),t=Object(G.b)(),n=Object(U.a)({mode:"onSubmit"}),r=n.register,i=n.handleSubmit,a=n.formState.errors,c=n.reset;return Object(O.jsx)("section",{className:$.a.section,children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("form",{className:$.a.form,autoComplete:"off",onSubmit:i((function(e){var n=e.Url;t(q(n)),c()})),children:[Object(O.jsx)("input",Object(H.a)(Object(H.a)({type:"url",placeholder:"Shorten a link here...",className:$.a.input},r("Url",{required:"Please add a link!",pattern:{value:/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,message:"Please enter a valid url!"}})),{},{style:{outlineColor:a.Url?"var(--secondary-300)":"currentColor",outlineWidth:a.Url?"4px":"1px"},disabled:"loading"===e})),Object(O.jsx)(f,{variant:"square",type:"submit",size:"medium",disabled:"loading"===e,children:"Shorten it!"}),a.Url&&Object(O.jsx)("div",{className:$.a.error,children:a.Url.message})]})})})},te=n(42),ne=n.n(te),re=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(G.c)(J);return null!==i&&void 0!==i&&i.length?Object(O.jsx)("section",{className:ne.a.Shortens,children:Object(O.jsx)("div",{className:"container",children:i.map((function(e){return Object(O.jsx)(_.a,{children:Object(O.jsxs)(y.a.div,{className:ne.a.item,"data-active":n===e.full_short_link2,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:[Object(O.jsx)("span",{children:e.original_link}),Object(O.jsx)("span",{children:e.full_short_link2}),Object(O.jsx)(f,{variant:"square",onClick:function(){return t=e.full_short_link2,void navigator.clipboard.writeText(t).then((function(){r(t)}));var t},children:n===e.full_short_link2?"Copied!":"Copy"})]})},e.code)}))})}):null},ie=n(30),ae=n.n(ie),ce={title:"Advanced Statistics",description:"Track how your links are performing across the web with our advanced statistics dashboard.",items:[{id:1,title:"Brand Recognition",body:"Boost your brand recogntion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",icon:n.p+"static/media/icon-brand-recognition.c349d3b6.svg"},{id:2,title:"Detailed Records",body:"Gain insights into who is clickong your links. Knowing when and where people engage with your content helps inform better decisions.",icon:n.p+"static/media/icon-detailed-records.265c8aea.svg"},{id:3,title:"Fully Customizable",body:"Improve brand awarness and content discoverability through customizable links, supercharging audience engagement.",icon:n.p+"static/media/icon-fully-customizable.a1532a74.svg"}]},le=function(){return Object(O.jsx)("section",{className:ae.a.Features,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{className:ae.a.title,children:ce.title}),Object(O.jsx)("p",{className:ae.a.description,children:ce.description}),Object(O.jsx)("div",{className:ae.a.items,children:ce.items.map((function(e){return Object(O.jsx)(oe,Object(H.a)({},e),e.id)}))})]})})},oe=function(e){var t=e.title,n=e.body,r=e.icon;return Object(O.jsxs)("article",{className:ae.a.item,children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:r,alt:t})}),Object(O.jsx)("h3",{children:t}),Object(O.jsx)("p",{children:n})]})},se=n(46),ue=n.n(se),de=function(){return Object(O.jsxs)("section",{className:ue.a.CallToAction,children:[Object(O.jsx)("h2",{children:"Boost your links today"}),Object(O.jsx)(f,{children:"Get Started"})]})},je=n(25),be=n.n(je),he=["title","titleId"];function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Oe(e,t){var n=e.title,r=e.titleId,c=pe(e,he);return a.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",width:121,height:33,ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,i||(i=a.createElement("path",{fill:"#34313D",d:"M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"})))}var fe,ge=a.forwardRef(Oe),xe=(n.p,["title","titleId"]);function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function _e(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ye(e,t){var n=e.title,r=e.titleId,i=_e(e,xe);return a.createElement("svg",ve({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,fe||(fe=a.createElement("path",{fill:"#FFF",d:"M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"})))}var we,ke=a.forwardRef(ye),Ce=(n.p,["title","titleId"]);function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fe.apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Se(e,t){var n=e.title,r=e.titleId,i=Ne(e,Ce);return a.createElement("svg",Fe({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,we||(we=a.createElement("path",{fill:"#FFF",d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})))}var ze,Me=a.forwardRef(Se),Ae=(n.p,["title","titleId"]);function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}function Pe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ie(e,t){var n=e.title,r=e.titleId,i=Pe(e,Ae);return a.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,ze||(ze=a.createElement("path",{fill:"#FFF",d:"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"})))}var Be,Ve=a.forwardRef(Ie),Re=(n.p,["title","titleId"]);function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}function He(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ue(e,t){var n=e.title,r=e.titleId,i=He(e,Re);return a.createElement("svg",Te({xmlns:"http://www.w3.org/2000/svg",width:24,height:20,ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,Be||(Be=a.createElement("path",{fill:"#FFF",d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"})))}var Ge=a.forwardRef(Ue),Le=(n.p,{menu:[{id:1,groupTitle:"Features",links:[{text:"Link Shortening",url:"#"},{text:"Branded Links",url:"#"},{text:"Analitycs",url:"#"}]},{id:2,groupTitle:"Resources",links:[{text:"Blog",url:"#"},{text:"Developers",url:"#"},{text:"Support",url:"#"}]},{id:3,groupTitle:"Company",links:[{text:"About",url:"#"},{text:"Our Team",url:"#"},{text:"Careers",url:"#"},{text:"Conact",url:"#"}]}],socials:[{id:1,image:ke,url:"#",alt:"facebook"},{id:2,image:Ge,url:"#",alt:"twitter"},{id:3,image:Ve,url:"#",alt:"pinterest"},{id:4,image:Me,url:"#",alt:"instagram"}]}),We=function(){return Object(O.jsx)("footer",{className:be.a.Footer,children:Object(O.jsxs)("div",{className:"".concat(be.a.content," container"),children:[Object(O.jsx)(ge,{className:be.a.logo}),Object(O.jsx)("div",{className:be.a.menu,children:Le.menu.map((function(e){return Object(O.jsx)(De,Object(H.a)({},e),e.id)}))}),Object(O.jsx)("div",{className:be.a.socials,children:Le.socials.map((function(e){var t=e.id,n=e.url,r=e.image;return Object(O.jsx)("a",{href:n,children:Object(O.jsx)(r,{})},t)}))})]})})},De=function(e){var t=e.groupTitle,n=e.links;return Object(O.jsxs)("div",{className:be.a.menuGroup,children:[Object(O.jsx)("h4",{children:t}),n.map((function(e){return Object(O.jsx)("a",{href:e.url,children:e.text},e.text)}))]})};function Ke(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{}),Object(O.jsx)(T,{}),Object(O.jsx)(ee,{}),Object(O.jsx)(re,{}),Object(O.jsx)(le,{}),Object(O.jsx)(de,{}),Object(O.jsx)(We,{})]})}var qe=n(9),Ye=n(19),Ze=n(47),Je={key:"root",storage:n.n(Ze).a},Qe=Object(qe.b)({links:Q}),Xe=Object(Ye.g)(Je,Qe),$e=Object(K.a)({reducer:Xe,middleware:function(e){return e({serializableCheck:{ignoredActions:[Ye.a,Ye.f,Ye.b,Ye.c,Ye.d,Ye.e]}})}}),et=Object(Ye.h)($e),tt=n(48);n(63);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(G.a,{store:$e,children:Object(O.jsx)(tt.a,{persistor:et,children:Object(O.jsx)(Ke,{})})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.710cd5e1.chunk.js.map