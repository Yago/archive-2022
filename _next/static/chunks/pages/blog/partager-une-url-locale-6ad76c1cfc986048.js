(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7050],{61367:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/partager-une-url-locale",function(){return r(40456)}])},40456:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u},meta:function(){return a}});var s=r(85893),n=r(11151),l=r(47439);let a={path:"/blog/partager-une-url-locale",title:"Partager une URL locale",date:"2013-06-03T05:40:46.000Z",type:"post",description:"En cours de mandat, il vous est surement d\xe9j\xe0 arriv\xe9 de vouloir montrer votre travail \xe0 un coll\xe8gue ou \xe0 votre client, mais sans pour autant effectuer tout un d\xe9ploiement. Il existe, en effet, des moyens tout simple pour partager votre site local vers un r\xe9seau local ou externe."},o=e=>{let{children:t}=e;return(0,s.jsx)(l.Z,{meta:a,children:t})};function i(e){let t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["En cours de mandat, il vous est surement d\xe9j\xe0 arriv\xe9 de vouloir montrer votre travail \xe0 un coll\xe8gue ou \xe0 votre client, mais sans pour autant effectuer tout un d\xe9ploiement. Vous pourriez en effet utiliser ",(0,s.jsx)(t.a,{href:"http://www.yago.io/blog/capistrano",children:"Capistrano"})," afin d'\xe9viter toute h\xe9sitation de d\xe9ploiement. Cependant, il existe des moyens tout simple pour partager votre site local vers un r\xe9seau local ou externe."]}),"\n",(0,s.jsxs)(t.p,{children:["Si vous souhaitez partagez un site install\xe9 sur votre apache local, il suffit de lui attribuer un port et de donner votre IP suivi du port pour que quiconque sur votre r\xe9seau local puisse y acc\xe9der. Pour ce faire, allez d\xe9finir le port dans votre fichier ",(0,s.jsx)(t.strong,{children:"http-vhosts.conf"})," :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-apacheconf",children:'Listen 8001\n<VirtualHost *:8001>\n    ServerName monSite.dev\n    DocumentRoot "/Users/Me/Sites/monSite"\n    DirectoryIndex index.php\n</VirtualHost>\n'})}),"\n",(0,s.jsx)(t.p,{children:"Puis il suffit de donner votre IP suivi du port d\xe9fini ci-dessus. Par exemple :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"192.168.0.1:8001\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Pour ceux qui souhaiterais partager leur apache local vers un r\xe9seau externe, un super outil gratuit existe : ",(0,s.jsx)(t.a,{href:"http://progrium.com/localtunnel/",children:"Localtunnel"}),". Il vous suffit de l'installer, puis de lui faire \xe9couter un port et il se chargera de vous fournir une URL que vous pourrez partager. En pratique, il va cr\xe9er un tunnel SSH entre votre machine et lui pour que tout un chacun puisse acc\xe9der \xe0 votre port."]}),"\n",(0,s.jsx)(t.p,{children:"Donc pour installer Localtunnel et lui transmettre votre clef SSH public :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ sudo gem install localtunnel\n$ localtunnel -k ~/.ssh/id_rsa.pub 8080\n"})}),"\n",(0,s.jsx)(t.p,{children:"Puis autant fois que vous le d\xe9sirez :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ localtunnel 8001\n"})}),"\n",(0,s.jsx)(t.p,{children:"Localtunnel va vous donner quelque chose dans ce go\xfbt-l\xe0, vous n'aurez plus qu'\xe0 copier l'URL."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"This localtunnel service is brought to you by Twilio.\nPort 8001 is now publicly accessible from http://3yag.localtunnel.com ...\n"})}),"\n",(0,s.jsx)(t.p,{children:"Voil\xe0, maintenant vous savez tout et vous pouvez enfin partager vos projets les plus fous \xe0 tous vos amis !"})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})})}},62090:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(85893);r(67294);var n=r(90512),l=r(41664),a=r.n(l),o=r(68658),i=r(81612),u=e=>{let{crumbs:t}=e;return(0,s.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-6 transform md:translate-x-1 md:mb-0",children:(0,s.jsxs)("ol",{className:"inline-flex text-sm text-gray-600 lowercase md:text-lg opacity-60 hover:opacity-100 duration-500 transition-opacity transform md:-translate-x-full md:translate-y-2 md:-rotate-90 md:origin-right",children:[(0,s.jsx)("li",{children:(0,s.jsxs)(a(),{href:"/",className:"link",children:[(0,s.jsx)("span",{className:"sr-only",children:"Homepage"}),(0,s.jsx)(i.Z,{name:"tipi",className:"text-base md:text-lg"})]})}),t.map((e,t)=>{let{href:r,label:l}=e;return(0,o.Z)(r)?(0,s.jsxs)("li",{"aria-current":"page",children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)("span",{className:(0,n.Z)("inline-block truncate",{maxWidth:250}),children:l})]},"crumb-".concat(t)):(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,s.jsx)(a(),{href:r,className:"link",children:l})]},"crumb-".concat(t))})]})})}},47439:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var s=r(85893);r(67294);var n=r(47906),l=r(63595),a=r(62090),o=r(73574),i=r(29454),u=r(53659),c=r(8523),d=r(35045),p=e=>{let{children:t,meta:r}=e;return(0,s.jsxs)(u.Z,{outsideChildren:(0,s.jsx)(c.Z,{}),children:[(0,s.jsx)(d.Z,{title:r.title,description:r.description}),(0,s.jsx)(a.Z,{crumbs:[{href:"/blog",label:"Blog"},{label:r.title}]}),(0,s.jsxs)("article",{className:"w-full mx-auto mt-20 sm:w-10/12 md:w-2/3 xl:w-7/12 md:px-8",children:[(0,s.jsxs)(i.Z,{move:!1,children:[(0,s.jsx)("h1",{className:"text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl",children:r.title}),(0,s.jsx)(o.Z,{children:(0,s.jsxs)("h2",{className:"font-medium md:text-lg",children:[(0,s.jsx)("span",{children:"Yann Gouffon — "}),(0,n.WU)((0,l.D)(r.date),"PPP")]})})]}),(0,s.jsx)(i.Z,{className:"mt-16 font-serif text-lg text-gray-900 space-y-6 md:mt-14 prose-headings:pt-4 prose-p:leading-[1.618em] lg:text-xl xl:text-2xl xl:prose-p:leading-[1.618em] prose-a:text-blue prose-headings:font-sans prose-headings:font-medium prose-h2:text-[26px] xl:prose-h2:text-[28px] prose-h3:text-[19px] lg:prose-h3:text-[24px] xl:prose-h3:text-[27px] prose-h4:text-[18px] lg:prose-h4:text-[21px] xl:prose-h4:text-[25px] prose-strong:text-medium prose-ul:list-disc prose-ul:pl-3 prose-ul:space-y-3 prose-ul:leading-[1.618em] xl:prose-figure:w-[106%] xl:prose-figure:-translate-x-[2.8%] prose-figure:rounded-lg prose-figure:overflow-hidden prose-figure:my-8",children:t})]})]})}}},function(e){e.O(0,[1635,9757,3880,520,5098,7539,8523,2888,9774,179],function(){return e(e.s=61367)}),_N_E=e.O()}]);