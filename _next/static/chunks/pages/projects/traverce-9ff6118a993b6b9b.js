(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4272],{62028:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/traverce",function(){return r(85347)}])},85347:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o},meta:function(){return n}});var s=r(85893),l=r(11151),a=r(62520);let n={date:"2020-09-01T09:12:53Z",title:"Traverce",subtitle:"COVID compliant travel",type:"project",cover:"traverce-cover.jpg",thumbnail:"traverce04.jpg",open_source:{name:"Github repository (MIT)",url:"https://github.com/yago/traverce"},year:"2020 -",roles:["Designer","JavaScript developer"],gallery:["traverce01.jpg","traverce02.jpg","traverce03.jpg","traverce04.jpg"],visit:{url:"https://traverce.net",label:"traverce.net"}},i=e=>{let{children:t}=e;return(0,s.jsx)(a.Z,{meta:n,children:t})};function c(e){let t={p:"p",...(0,l.a)(),...e.components};return(0,s.jsx)(t.p,{children:"2020 was a hard year for all of us. As a developer I didn't come with a big solution, I just wanted to bring a small escape for all the people stuck at home (me included). So I aggregated some of the coolest first person walking video that I found on YouTube and display them a minimal UI that can easily filter destinations."})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})})}},62090:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var s=r(85893);r(67294);var l=r(90512),a=r(41664),n=r.n(a),i=r(68658),c=r(81612),o=e=>{let{crumbs:t}=e;return(0,s.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-6 transform md:translate-x-1 md:mb-0",children:(0,s.jsxs)("ol",{className:"inline-flex text-sm text-gray-600 lowercase md:text-lg opacity-60 hover:opacity-100 duration-500 transition-opacity transform md:-translate-x-full md:translate-y-2 md:-rotate-90 md:origin-right",children:[(0,s.jsx)("li",{children:(0,s.jsxs)(n(),{href:"/",className:"link",children:[(0,s.jsx)("span",{className:"sr-only",children:"Homepage"}),(0,s.jsx)(c.Z,{name:"tipi",className:"text-base md:text-lg"})]})}),t.map((e,t)=>{let{href:r,label:a}=e;return(0,i.Z)(r)?(0,s.jsxs)("li",{"aria-current":"page",children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)("span",{className:(0,l.Z)("inline-block truncate",{maxWidth:250}),children:a})]},"crumb-".concat(t)):(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)(n(),{href:r,className:"link",children:a})]},"crumb-".concat(t))})]})})}},32633:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var s=r(85893),l=r(67294),a=r(90512),n=r(68658),i=(0,r(83707).Z)(function(e,t){var r=e<0?t.length+e:e;return"[object String]"===Object.prototype.toString.call(t)?t.charAt(r):t[r]})(-1),c=r(98727),o=r(83758),d=r(63939),m=e=>{let{sources:t,wrapperTw:r,itemTw:m,imgTw:u}=e,[p,h]=(0,l.useState)(),{setPhotoswipeIndex:x,setPhotoswipeContainer:j}=(0,l.useContext)(d.I);(0,l.useEffect)(()=>{h(t.map((e,t)=>{let r,s;"string"==typeof e?r=e:(r=e[0],s=e[1]);let l=o.Z[r];return{uid:t,w:l.w,h:l.h,src:l.src,title:s,meta:l}}))},[t]);let f=(e,t)=>{e.preventDefault(),x(t),(0,n.Z)(p)||j(p)};return(0,s.jsx)("div",{itemScope:!0,itemType:"http://schema.org/ImageGallery",className:(0,a.Z)(r),children:null==p?void 0:p.map((e,t)=>{var r;return(0,s.jsx)("figure",{itemProp:"associatedMedia",itemScope:!0,itemType:"http://schema.org/ImageObject",className:(0,a.Z)(m),children:(0,s.jsx)("a",{href:e.src,onClick:r=>f(r,e.uid||t),itemProp:"contentUrl",className:(0,a.Z)(u),children:(0,s.jsx)(c.Z,{filename:i(e.src.split("/")),alt:null!==(r=e.title)&&void 0!==r?r:""})})},"thumb-".concat(e.uid||t))})})}},98727:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(85893),l=r(67294),a=r(9701),n=r(58354),i=r(90512),c=r(29260),o=r.n(c),d=r(68658),m=r(83758),u=e=>{let{filename:t,alt:r,className:c}=e,u=m.Z[t],[p,h]=(0,l.useState)(!1),{observe:x,width:j}=(0,a.ZP)({polyfill:n.do});return(0,s.jsx)("div",{ref:x,className:"picture ".concat(c," bg-gray-100"),children:(0,s.jsx)("div",{className:(0,i.Z)("transition-opacity duration-200",p&&"opacity-100"),children:(0,s.jsx)(o(),{src:u.msrc,alt:r,width:u.w,height:u.h,quality:65,sizes:(0,d.Z)(j)?"100vw":"".concat(Math.round(j),"px"),onLoad:e=>{e.target.srcset&&h(!0)}})})})}},62520:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(85893);r(67294);var l=r(68658),a=r(62090),n=r(29454),i=r(32633),c=r(53659),o=r(8523),d=r(98727),m=r(35045),u=e=>{let{children:t,meta:r}=e;return(0,s.jsxs)(c.Z,{outsideChildren:(0,s.jsx)(o.Z,{}),children:[(0,s.jsx)(m.Z,{title:r.title,description:r.subtitle,cover:r.thumbnail}),(0,s.jsx)(a.Z,{crumbs:[{href:"/projects",label:"Projects"},{label:r.title}]}),(0,s.jsxs)("div",{className:"flex flex-col-reverse mt-20 md:flex-row md:pl-20 lg:pl-32",children:[(0,s.jsxs)("article",{className:"w-full md:w-3/5 lg:w-1/2",children:[(0,s.jsxs)(n.Z,{move:!1,children:[(0,s.jsx)("h1",{className:"text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl",children:r.title}),(0,s.jsx)("h2",{className:"mt-3 text-xl font-medium text-gray-500 md:text-2xl lg:text-3xl",children:r.subtitle})]}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)("table",{className:"table w-full mt-12 md:mt-20 md:text-lg",children:(0,s.jsxs)("tbody",{children:[!(0,l.Z)(r.agency)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Agency"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:r.agency.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:r.agency.name})})]}),!(0,l.Z)(r.open_source)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Open Source"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:r.open_source.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:r.open_source.name})})]}),!(0,l.Z)(r.roles)&&(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:"py-1 pr-3",children:[(0,s.jsx)("span",{children:"Role"}),r.roles.length>1&&"s"]}),(0,s.jsx)("td",{className:"py-1",children:r.roles.map((e,t)=>(0,s.jsxs)("span",{children:[e,(0,s.jsx)("br",{})]},t))})]}),!(0,l.Z)(r.year)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Year"}),(0,s.jsx)("td",{className:"py-1",children:r.year})]}),!(0,l.Z)(r.visit)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Visit"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:r.visit.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:r.visit.label})})]})]})}),(0,s.jsx)("div",{className:"mt-12 font-serif prose prose-lg md:prose-xl lg:prose-2xl",children:t})]})]}),(0,s.jsx)(n.Z,{delay:.4,className:"relative w-full mb-6 mr-auto md:mr-0 md:w-1/3 md:ml-auto md:mb-0",children:(0,s.jsx)(d.Z,{filename:r.cover,alt:r.title})})]}),(0,s.jsx)(n.Z,{children:(0,s.jsx)(i.Z,{sources:r.gallery,wrapperTw:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 my-20"})})]})}}},function(e){e.O(0,[1635,9757,3880,520,2781,7539,8523,2888,9774,179],function(){return e(e.s=62028)}),_N_E=e.O()}]);