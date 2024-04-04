(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9127],{33627:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/cardis-2020",function(){return r(27626)}])},27626:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d},meta:function(){return n}});var s=r(85893),a=r(11151),l=r(62520);let n={date:"2020-12-20T10:49:05Z",published:!0,title:"Cardis",subtitle:"Swiss Real estate",type:"project",cover:"cardis2020-cover.jpg",thumbnail:"cardis202001.jpg",year:"2020 -",agency:{name:"Antistatique",url:"https://antistatique.net"},roles:["Frontend developer","JavaScript developer"],gallery:["cardis202001.jpg","cardis202008.jpg","cardis202002.jpg","cardis202010.jpg","cardis202003.jpg","cardis202004.jpg","cardis202005.jpg","cardis202006.jpg","cardis202007.jpg","cardis202009.jpg"]},i=e=>{let{children:t}=e;return(0,s.jsx)(l.Z,{meta:n,children:t})};function c(e){let t={p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(t.p,{children:["Four years after the last redesign, it was already the time for Cardis to rethink its website to stay in front of the Swiss real estate scene. After a fresh and modern new design, we code this new platform from scratch using a decoupled architecture based on ",(0,s.jsx)(t.strong,{children:"Drupal"})," and ",(0,s.jsx)(t.strong,{children:"NextJS"}),". With this very flexible stack, we have been hable to offer a fluid and performant experience and a complete new search engine."]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})})}},62090:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var s=r(85893);r(67294);var a=r(90512),l=r(41664),n=r.n(l),i=r(68658),c=r(81612),d=e=>{let{crumbs:t}=e;return(0,s.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-6 transform md:translate-x-1 md:mb-0",children:(0,s.jsxs)("ol",{className:"inline-flex text-sm text-gray-600 lowercase md:text-lg opacity-60 hover:opacity-100 duration-500 transition-opacity transform md:-translate-x-full md:translate-y-2 md:-rotate-90 md:origin-right",children:[(0,s.jsx)("li",{children:(0,s.jsxs)(n(),{href:"/",className:"link",children:[(0,s.jsx)("span",{className:"sr-only",children:"Homepage"}),(0,s.jsx)(c.Z,{name:"tipi",className:"text-base md:text-lg"})]})}),t.map((e,t)=>{let{href:r,label:l}=e;return(0,i.Z)(r)?(0,s.jsxs)("li",{"aria-current":"page",children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)("span",{className:(0,a.Z)("inline-block truncate",{maxWidth:250}),children:l})]},"crumb-".concat(t)):(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)(n(),{href:r,className:"link",children:l})]},"crumb-".concat(t))})]})})}},32633:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var s=r(85893),a=r(67294),l=r(90512),n=r(68658),i=(0,r(83707).Z)(function(e,t){var r=e<0?t.length+e:e;return"[object String]"===Object.prototype.toString.call(t)?t.charAt(r):t[r]})(-1),c=r(98727),d=r(83758),o=r(63939),m=e=>{let{sources:t,wrapperTw:r,itemTw:m,imgTw:h}=e,[p,u]=(0,a.useState)(),{setPhotoswipeIndex:x,setPhotoswipeContainer:j}=(0,a.useContext)(o.I);(0,a.useEffect)(()=>{u(t.map((e,t)=>{let r,s;"string"==typeof e?r=e:(r=e[0],s=e[1]);let a=d.Z[r];return{uid:t,w:a.w,h:a.h,src:a.src,title:s,meta:a}}))},[t]);let f=(e,t)=>{e.preventDefault(),x(t),(0,n.Z)(p)||j(p)};return(0,s.jsx)("div",{itemScope:!0,itemType:"http://schema.org/ImageGallery",className:(0,l.Z)(r),children:null==p?void 0:p.map((e,t)=>{var r;return(0,s.jsx)("figure",{itemProp:"associatedMedia",itemScope:!0,itemType:"http://schema.org/ImageObject",className:(0,l.Z)(m),children:(0,s.jsx)("a",{href:e.src,onClick:r=>f(r,e.uid||t),itemProp:"contentUrl",className:(0,l.Z)(h),children:(0,s.jsx)(c.Z,{filename:i(e.src.split("/")),alt:null!==(r=e.title)&&void 0!==r?r:""})})},"thumb-".concat(e.uid||t))})})}},98727:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var s=r(85893),a=r(67294),l=r(9701),n=r(58354),i=r(90512),c=r(29260),d=r.n(c),o=r(68658),m=r(83758),h=e=>{let{filename:t,alt:r,className:c}=e,h=m.Z[t],[p,u]=(0,a.useState)(!1),{observe:x,width:j}=(0,l.ZP)({polyfill:n.do});return(0,s.jsx)("div",{ref:x,className:"picture ".concat(c," bg-gray-100"),children:(0,s.jsx)("div",{className:(0,i.Z)("transition-opacity duration-200",p&&"opacity-100"),children:(0,s.jsx)(d(),{src:h.msrc,alt:r,width:h.w,height:h.h,quality:65,sizes:(0,o.Z)(j)?"100vw":"".concat(Math.round(j),"px"),onLoad:e=>{e.target.srcset&&u(!0)}})})})}},62520:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var s=r(85893);r(67294);var a=r(68658),l=r(62090),n=r(29454),i=r(32633),c=r(53659),d=r(8523),o=r(98727),m=r(35045),h=e=>{let{children:t,meta:r}=e;return(0,s.jsxs)(c.Z,{outsideChildren:(0,s.jsx)(d.Z,{}),children:[(0,s.jsx)(m.Z,{title:r.title,description:r.subtitle,cover:r.thumbnail}),(0,s.jsx)(l.Z,{crumbs:[{href:"/projects",label:"Projects"},{label:r.title}]}),(0,s.jsxs)("div",{className:"flex flex-col-reverse mt-20 md:flex-row md:pl-20 lg:pl-32",children:[(0,s.jsxs)("article",{className:"w-full md:w-3/5 lg:w-1/2",children:[(0,s.jsxs)(n.Z,{move:!1,children:[(0,s.jsx)("h1",{className:"text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl",children:r.title}),(0,s.jsx)("h2",{className:"mt-3 text-xl font-medium text-gray-500 md:text-2xl lg:text-3xl",children:r.subtitle})]}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)("table",{className:"table w-full mt-12 md:mt-20 md:text-lg",children:(0,s.jsxs)("tbody",{children:[!(0,a.Z)(r.agency)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Agency"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:r.agency.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:r.agency.name})})]}),!(0,a.Z)(r.open_source)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Open Source"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:r.open_source.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:r.open_source.name})})]}),!(0,a.Z)(r.roles)&&(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:"py-1 pr-3",children:[(0,s.jsx)("span",{children:"Role"}),r.roles.length>1&&"s"]}),(0,s.jsx)("td",{className:"py-1",children:r.roles.map((e,t)=>(0,s.jsxs)("span",{children:[e,(0,s.jsx)("br",{})]},t))})]}),!(0,a.Z)(r.year)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Year"}),(0,s.jsx)("td",{className:"py-1",children:r.year})]}),!(0,a.Z)(r.visit)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Visit"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:r.visit.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:r.visit.label})})]})]})}),(0,s.jsx)("div",{className:"mt-12 font-serif prose prose-lg md:prose-xl lg:prose-2xl",children:t})]})]}),(0,s.jsx)(n.Z,{delay:.4,className:"relative w-full mb-6 mr-auto md:mr-0 md:w-1/3 md:ml-auto md:mb-0",children:(0,s.jsx)(o.Z,{filename:r.cover,alt:r.title})})]}),(0,s.jsx)(n.Z,{children:(0,s.jsx)(i.Z,{sources:r.gallery,wrapperTw:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 my-20"})})]})}}},function(e){e.O(0,[1635,9757,3880,520,2781,7539,8523,2888,9774,179],function(){return e(e.s=33627)}),_N_E=e.O()}]);