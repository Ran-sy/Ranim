(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3745)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=r(2648).Z,l=r(1598).Z,i=r(7273).Z,a=l(r(7294)),s=o(r(5443)),c=r(2730),u=r(9309),d=r(9977);r(5086);var f=o(r(1479));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Ranim/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,o,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:h,placeholder:p,loading:m,srcString:v,config:x,unoptimized:b,loader:w,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:C,setShowAltText:_,onLoad:z,onError:E}=e,N=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},N,{loading:m,width:l,height:o,decoding:"async","data-nimg":h?"fill":"1",className:c,style:n({},u,d)},r,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,v,p,y,j,C,b))},[v,p,y,j,C,E,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,p,y,j,C,b)},onError:e=>{_(!0),"blur"===p&&C(!0),E&&E(e)}})))}),x=a.forwardRef((e,t)=>{let r,o;var l,{src:g,sizes:x,unoptimized:b=!1,priority:w=!1,loading:y,className:j,quality:C,width:_,height:z,fill:E,style:N,onLoad:M,onLoadingComplete:S,placeholder:k="empty",blurDataURL:O,layout:P,objectFit:R,objectPosition:L,lazyBoundary:I,lazyRoot:A}=e,H=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=a.useContext(d.ImageConfigContext),T=a.useMemo(()=>{let e=h||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[B]),D=H,V=D.loader||f.default;delete D.loader;let F="__next_img_default"in V;if(F){if("custom"===T.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=V;V=t=>{let{config:r}=t,n=i(t,["config"]);return e(n)}}if(P){"fill"===P&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(N=n({},N,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!x&&(x=t)}let U="",q=m(_),W=m(z);if("object"==typeof(l=g)&&(p(l)||void 0!==l.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,O=O||e.blurDataURL,U=e.src,!E){if(q||W){if(q&&!W){let t=q/e.width;W=Math.round(e.height*t)}else if(!q&&W){let t=W/e.height;q=Math.round(e.width*t)}}else q=e.width,W=e.height}}let Y=!w&&("lazy"===y||void 0===y);((g="string"==typeof g?g:U).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,Y=!1),T.unoptimized&&(b=!0),F&&g.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(b=!0);let[Z,G]=a.useState(!1),[J,K]=a.useState(!1),X=m(C),$=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:L}:{},J?{}:{color:"transparent"},N),Q="blur"===k&&O&&!Z?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:W,blurWidth:r,blurHeight:o,blurDataURL:O,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:l,sizes:i,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,n)=>"".concat(a({config:t,src:r,quality:l,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:a({config:t,src:r,quality:l,width:s[u]})}}({config:T,src:g,unoptimized:b,width:q,quality:X,sizes:x,loader:V}),et=g,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},en=a.useRef(M);a.useEffect(()=>{en.current=M},[M]);let eo=a.useRef(S);a.useEffect(()=>{eo.current=S},[S]);let el=n({isLazy:Y,imgAttributes:ee,heightInt:W,widthInt:q,qualityInt:X,className:j,imgStyle:$,blurStyle:Q,loading:y,config:T,fill:E,unoptimized:b,placeholder:k,loader:V,srcString:et,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:G,setShowAltText:K},D);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},el,{ref:t})),w?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,l=n(r(7294)),i=r(3297),a=r(4634),s=r(4611),c=r(3794),u=r(2725),d=r(3462),f=r(1018),h=r(7190),p=r(1210),m=r(8684);let g=new Set;function v(e,t,r,n,o){if(o||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function x(e){return"string"==typeof e?e:s.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let r,n;let{href:s,as:g,children:b,prefetch:w,passHref:y,replace:j,shallow:C,scroll:_,locale:z,onClick:E,onMouseEnter:N,onTouchStart:M,legacyBehavior:S=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,S&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let O=!1!==w,P=l.default.useContext(d.RouterContext),R=l.default.useContext(f.AppRouterContext),L=null!=P?P:R,I=!P,{href:A,as:H}=l.default.useMemo(()=>{if(!P){let e=x(s);return{href:e,as:g?x(g):e}}let[e,t]=i.resolveHref(P,s,!0);return{href:e,as:g?i.resolveHref(P,g):t||e}},[P,s,g]),B=l.default.useRef(A),T=l.default.useRef(H);S&&(n=l.default.Children.only(r));let D=S?n&&"object"==typeof n&&n.ref:t,[V,F,U]=h.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(T.current!==H||B.current!==A)&&(U(),T.current=H,B.current=A),V(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[H,D,A,U,V]);l.default.useEffect(()=>{L&&F&&O&&v(L,A,H,{locale:z},I)},[H,A,F,z,O,null==P?void 0:P.locale,L,I]);let W={ref:q,onClick(e){S||"function"!=typeof E||E(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,i,s,c,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!a.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:s}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!d})};u?l.default.startTransition(p):p()}(e,L,A,H,j,C,_,z,I,O)},onMouseEnter(e){S||"function"!=typeof N||N(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(O||!I)&&v(L,A,H,{locale:z,priority:!0,bypassPrefetchedCheck:!0},I)},onTouchStart(e){S||"function"!=typeof M||M(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(O||!I)&&v(L,A,H,{locale:z,priority:!0,bypassPrefetchedCheck:!0},I)}};if(c.isAbsoluteUrl(H))W.href=H;else if(!S||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==z?z:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&p.getDomainLocale(H,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);W.href=t||m.addBasePath(u.addLocale(H,e,null==P?void 0:P.defaultLocale))}return S?l.default.cloneElement(n,W):l.default.createElement("a",Object.assign({},k,W),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!l,[u,d]=n.useState(!1),f=n.useRef(null),h=n.useCallback(e=>{f.current=e},[]);n.useEffect(()=>{if(l){if(c||u)return;let e=f.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),i.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(e)}},[c,r,t,u,f.current]);let p=n.useCallback(()=>{d(!1)},[]);return[h,u,p]};var n=r(7294),o=r(9311);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:l,objectFit:i}=e,a=n||t,s=o||r,c=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3745:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893);r(2488);var o=r(7294),l=r(5675),i=r.n(l),a=r(1664),s=r.n(a),c=r(8193),u=r(9583),d=r(3750),f=function(){let[e,t]=o.useState(!1),[r,l]=o.useState(!1);function a(){t(e=>!e)}return o.useEffect(()=>{let e=()=>{window.scrollY>=90?l(!0):l(!1)};window.addEventListener("scroll",e)},[]),(0,n.jsxs)("div",{className:r?"fixed w-full h-20 shadow-xl z-[100]":"fixed w-full h-20 z-[100]",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center w-full h-full px-2 2xl:px-16 md:justify-around",children:[(0,n.jsx)(s(),{href:"/#",children:(0,n.jsx)(i(),{src:"/Ranim/public/assets/RYLogo.png",alt:"/",width:75,height:75})}),(0,n.jsxs)("ul",{className:"hidden md:flex justify-between",children:[(0,n.jsx)(s(),{href:"/#home",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Home"})}),(0,n.jsx)(s(),{href:"/#about",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"About"})}),(0,n.jsx)(s(),{href:"/#skills",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Skills"})}),(0,n.jsx)(s(),{href:"/#projects",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Projects"})}),(0,n.jsx)(s(),{href:"/#contact",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Contact"})})]}),(0,n.jsx)("div",{className:"md:hidden px-2",onClick:a,children:(0,n.jsx)(c.qTj,{color:"#1f2833",size:25})})]}),(0,n.jsx)("div",{className:e?"fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden":"",children:(0,n.jsxs)("div",{className:e?"fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#c5c6c7] p-5 px-10 ease-in duration-500":"fixed left-[-150%] top-0 p-5 px-10 ease-in duration-600",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,n.jsx)(i(),{src:"/Ranim/public/assets/RYLogo.png",width:45,height:45,alt:"8"}),(0,n.jsx)("div",{onClick:a,className:"rounded-md bg-gray-300 shadow-lg shadow-gray-400 p-3 cursor-pointer",children:(0,n.jsx)(c.oHP,{color:"#1f2833"})})]}),(0,n.jsx)("div",{className:"border-b border-grey-300 mb-4",children:(0,n.jsx)("p",{className:"w-[85%] md:w-[90%] py-4 capitalize",children:"Ranim Yassin | Flutter & Frontend web developer"})})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsxs)("ul",{className:"uppercase",children:[(0,n.jsx)(s(),{href:"/#home",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Home"})}),(0,n.jsx)(s(),{href:"/#about",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"About"})}),(0,n.jsx)(s(),{href:"/#skills",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Skills"})}),(0,n.jsx)(s(),{href:"/#projects",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Projects"})}),(0,n.jsx)(s(),{href:"/#contact",children:(0,n.jsx)("li",{onClick:()=>t(!1),className:"py-4 text-sm",children:"Contact"})})]}),(0,n.jsxs)("div",{className:"pt-10",children:[(0,n.jsx)("b",{className:"uppercase tracking-widest text-[#45a29e] ",children:"let's Connect..."}),(0,n.jsxs)("div",{className:"flex items-center justify-between mt-4 w-full sm:w-[80%]",children:[(0,n.jsx)("div",{className:"rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",children:(0,n.jsx)(u.BUd,{color:"/#45a29e",size:25})}),(0,n.jsx)("div",{className:"rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",children:(0,n.jsx)(u.hJX,{color:"/#45a29e",size:25})}),(0,n.jsx)("div",{className:"rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",children:(0,n.jsx)(c.Dme,{color:"/#45a29e",size:25})}),(0,n.jsx)("div",{className:"rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",children:(0,n.jsx)(d.cHS,{color:"/#45a29e",size:25})})]})]})]})]})})]})};function h(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)(t,{...r})]})}},2488:function(){},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)},8193:function(e,t,r){"use strict";r.d(t,{Dme:function(){return l},oHP:function(){return o},qTj:function(){return i}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}},3750:function(e,t,r){"use strict";r.d(t,{cHS:function(){return o}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"}}]})(e)}},9583:function(e,t,r){"use strict";r.d(t,{BUd:function(){return l},hJX:function(){return o}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function s(e){return function(t){return n.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,l=e.size,s=e.title,c=a(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);