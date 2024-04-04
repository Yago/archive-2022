(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8242],{3182:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/vernier",function(){return t(28909)}])},28909:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d},meta:function(){return a}});var s=t(85893),n=t(11151),l=t(62520);let a={path:"/projects/vernier",date:"2023-02-27T01:00:00.000Z",title:"Vernier",subtitle:"City website",type:"project",cover:"vernier-cover.jpg",thumbnail:"vernier01.jpg",year:"2023 -",agency:{name:"Antistatique",url:"https://antistatique.net"},roles:["Frontend developer"],gallery:["vernier01.jpg","vernier02.jpg","vernier03.jpg","vernier04.jpg","vernier05.jpg","vernier06.jpg"]},i=e=>{let{children:r}=e;return(0,s.jsx)(l.Z,{meta:a,children:r})};function c(e){let r={p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(r.p,{children:["The city of Vernier, located in near Geneva, needs a new website to better inform its citizen. Based on ",(0,s.jsx)(r.strong,{children:"Drupal"}),", I worked on the styleguide and the theme creation."]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})})}},62090:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var s=t(85893);t(67294);var n=t(90512),l=t(41664),a=t.n(l),i=t(68658),c=t(81612),d=e=>{let{crumbs:r}=e;return(0,s.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-6 transform md:translate-x-1 md:mb-0",children:(0,s.jsxs)("ol",{className:"inline-flex text-sm text-gray-600 lowercase md:text-lg opacity-60 hover:opacity-100 duration-500 transition-opacity transform md:-translate-x-full md:translate-y-2 md:-rotate-90 md:origin-right",children:[(0,s.jsx)("li",{children:(0,s.jsxs)(a(),{href:"/",className:"link",children:[(0,s.jsx)("span",{className:"sr-only",children:"Homepage"}),(0,s.jsx)(c.Z,{name:"tipi",className:"text-base md:text-lg"})]})}),r.map((e,r)=>{let{href:t,label:l}=e;return(0,i.Z)(t)?(0,s.jsxs)("li",{"aria-current":"page",children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)("span",{className:(0,n.Z)("inline-block truncate",{maxWidth:250}),children:l})]},"crumb-".concat(r)):(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)(a(),{href:t,className:"link",children:l})]},"crumb-".concat(r))})]})})}},32633:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var s=t(85893),n=t(67294),l=t(90512),a=t(68658),i=(0,t(83707).Z)(function(e,r){var t=e<0?r.length+e:e;return"[object String]"===Object.prototype.toString.call(r)?r.charAt(t):r[t]})(-1),c=t(98727),d=t(83758),o=t(63939),m=e=>{let{sources:r,wrapperTw:t,itemTw:m,imgTw:u}=e,[x,h]=(0,n.useState)(),{setPhotoswipeIndex:p,setPhotoswipeContainer:j}=(0,n.useContext)(o.I);(0,n.useEffect)(()=>{h(r.map((e,r)=>{let t,s;"string"==typeof e?t=e:(t=e[0],s=e[1]);let n=d.Z[t];return{uid:r,w:n.w,h:n.h,src:n.src,title:s,meta:n}}))},[r]);let g=(e,r)=>{e.preventDefault(),p(r),(0,a.Z)(x)||j(x)};return(0,s.jsx)("div",{itemScope:!0,itemType:"http://schema.org/ImageGallery",className:(0,l.Z)(t),children:null==x?void 0:x.map((e,r)=>{var t;return(0,s.jsx)("figure",{itemProp:"associatedMedia",itemScope:!0,itemType:"http://schema.org/ImageObject",className:(0,l.Z)(m),children:(0,s.jsx)("a",{href:e.src,onClick:t=>g(t,e.uid||r),itemProp:"contentUrl",className:(0,l.Z)(u),children:(0,s.jsx)(c.Z,{filename:i(e.src.split("/")),alt:null!==(t=e.title)&&void 0!==t?t:""})})},"thumb-".concat(e.uid||r))})})}},98727:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var s=t(85893),n=t(67294),l=t(9701),a=t(58354),i=t(90512),c=t(29260),d=t.n(c),o=t(68658),m=t(83758),u=e=>{let{filename:r,alt:t,className:c}=e,u=m.Z[r],[x,h]=(0,n.useState)(!1),{observe:p,width:j}=(0,l.ZP)({polyfill:a.do});return(0,s.jsx)("div",{ref:p,className:"picture ".concat(c," bg-gray-100"),children:(0,s.jsx)("div",{className:(0,i.Z)("transition-opacity duration-200",x&&"opacity-100"),children:(0,s.jsx)(d(),{src:u.msrc,alt:t,width:u.w,height:u.h,quality:65,sizes:(0,o.Z)(j)?"100vw":"".concat(Math.round(j),"px"),onLoad:e=>{e.target.srcset&&h(!0)}})})})}},62520:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var s=t(85893);t(67294);var n=t(68658),l=t(62090),a=t(29454),i=t(32633),c=t(53659),d=t(8523),o=t(98727),m=t(35045),u=e=>{let{children:r,meta:t}=e;return(0,s.jsxs)(c.Z,{outsideChildren:(0,s.jsx)(d.Z,{}),children:[(0,s.jsx)(m.Z,{title:t.title,description:t.subtitle,cover:t.thumbnail}),(0,s.jsx)(l.Z,{crumbs:[{href:"/projects",label:"Projects"},{label:t.title}]}),(0,s.jsxs)("div",{className:"flex flex-col-reverse mt-20 md:flex-row md:pl-20 lg:pl-32",children:[(0,s.jsxs)("article",{className:"w-full md:w-3/5 lg:w-1/2",children:[(0,s.jsxs)(a.Z,{move:!1,children:[(0,s.jsx)("h1",{className:"text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl",children:t.title}),(0,s.jsx)("h2",{className:"mt-3 text-xl font-medium text-gray-500 md:text-2xl lg:text-3xl",children:t.subtitle})]}),(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("table",{className:"table w-full mt-12 md:mt-20 md:text-lg",children:(0,s.jsxs)("tbody",{children:[!(0,n.Z)(t.agency)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Agency"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:t.agency.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:t.agency.name})})]}),!(0,n.Z)(t.open_source)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Open Source"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:t.open_source.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:t.open_source.name})})]}),!(0,n.Z)(t.roles)&&(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:"py-1 pr-3",children:[(0,s.jsx)("span",{children:"Role"}),t.roles.length>1&&"s"]}),(0,s.jsx)("td",{className:"py-1",children:t.roles.map((e,r)=>(0,s.jsxs)("span",{children:[e,(0,s.jsx)("br",{})]},r))})]}),!(0,n.Z)(t.year)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Year"}),(0,s.jsx)("td",{className:"py-1",children:t.year})]}),!(0,n.Z)(t.visit)&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"Visit"}),(0,s.jsx)("td",{className:"py-1",children:(0,s.jsx)("a",{href:t.visit.url,target:"_blank",rel:"noopener noreferrer",className:"link text-blue",children:t.visit.label})})]})]})}),(0,s.jsx)("div",{className:"mt-12 font-serif prose prose-lg md:prose-xl lg:prose-2xl",children:r})]})]}),(0,s.jsx)(a.Z,{delay:.4,className:"relative w-full mb-6 mr-auto md:mr-0 md:w-1/3 md:ml-auto md:mb-0",children:(0,s.jsx)(o.Z,{filename:t.cover,alt:t.title})})]}),(0,s.jsx)(a.Z,{children:(0,s.jsx)(i.Z,{sources:t.gallery,wrapperTw:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 my-20"})})]})}}},function(e){e.O(0,[1635,9757,3880,520,2781,7539,8523,2888,9774,179],function(){return e(e.s=3182)}),_N_E=e.O()}]);