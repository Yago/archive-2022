(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3327],{37670:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(87696)}])},62090:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(85893);i(67294);var l=i(90512),s=i(41664),r=i.n(s),a=i(68658),o=i(81612),h=e=>{let{crumbs:t}=e;return(0,n.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-6 transform md:translate-x-1 md:mb-0",children:(0,n.jsxs)("ol",{className:"inline-flex text-sm text-gray-600 lowercase md:text-lg opacity-60 hover:opacity-100 duration-500 transition-opacity transform md:-translate-x-full md:translate-y-2 md:-rotate-90 md:origin-right",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(r(),{href:"/",className:"link",children:[(0,n.jsx)("span",{className:"sr-only",children:"Homepage"}),(0,n.jsx)(o.Z,{name:"tipi",className:"text-base md:text-lg"})]})}),t.map((e,t)=>{let{href:i,label:s}=e;return(0,a.Z)(i)?(0,n.jsxs)("li",{"aria-current":"page",children:[(0,n.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,n.jsx)("span",{className:(0,l.Z)("inline-block truncate",{maxWidth:250}),children:s})]},"crumb-".concat(t)):(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,n.jsx)(r(),{href:i,className:"link",children:s})]},"crumb-".concat(t))})]})})}},98727:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var n=i(85893),l=i(67294),s=i(9701),r=i(58354),a=i(90512),o=i(29260),h=i.n(o),p=i(68658),c=i(83758),d=e=>{let{filename:t,alt:i,className:o}=e,d=c.Z[t],[g,u]=(0,l.useState)(!1),{observe:m,width:v}=(0,s.ZP)({polyfill:r.do});return(0,n.jsx)("div",{ref:m,className:"picture ".concat(o," bg-gray-100"),children:(0,n.jsx)("div",{className:(0,a.Z)("transition-opacity duration-200",g&&"opacity-100"),children:(0,n.jsx)(h(),{src:d.msrc,alt:i,width:d.w,height:d.h,quality:65,sizes:(0,p.Z)(v)?"100vw":"".concat(Math.round(v),"px"),onLoad:e=>{e.target.srcset&&u(!0)}})})})}},18465:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(85893);i(67294);var l=i(66825),s=i(41664),r=i.n(s),a=i(98727),o=e=>{let{project:t,href:i}=e;return(0,n.jsx)(r(),{href:i,className:"link-wrapper",children:(0,n.jsxs)(l.Z,{tiltMaxAngleX:6,tiltMaxAngleY:6,perspective:500,style:{transformStyle:"preserve-3d"},children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(a.Z,{filename:t.thumbnail,alt:"Picture of the author"})}),(0,n.jsxs)("div",{style:{transform:"translateZ(20px) translateX(5px)"},children:[(0,n.jsx)("h3",{className:"text-lg font-medium md:text-2xl link-inner",children:t.title}),(0,n.jsx)("p",{className:"md:mt-2 md:text-xl",children:t.subtitle})]})]})})}},87696:function(e,t,i){"use strict";i.r(t);var n=i(85893);i(67294);var l=i(68658),s=i(62090),r=i(29454),a=i(53659),o=i(18465),h=i(35045),p=i(91429);t.default=()=>{let e=p.filter(e=>e.path.includes("/projects/")&&!(0,l.Z)(null==e?void 0:e.meta));return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(h.Z,{title:"Projects"}),(0,n.jsx)(s.Z,{crumbs:[{label:"Projects"}]}),(0,n.jsxs)("div",{className:"mb-24 md:pl-20",children:[(0,n.jsx)(r.Z,{move:!1,children:(0,n.jsx)("h1",{className:"mt-6 text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl",children:"Projects"})}),(0,n.jsx)("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12",children:e.sort((e,t)=>{var i,n;return+new Date(null==t?void 0:null===(i=t.meta)||void 0===i?void 0:i.date)-+new Date(null==e?void 0:null===(n=e.meta)||void 0===n?void 0:n.date)}).filter(e=>{var t,i;return(0,l.Z)(null==e?void 0:null===(t=e.meta)||void 0===t?void 0:t.published)||(null==e?void 0:null===(i=e.meta)||void 0===i?void 0:i.published)}).map((e,t)=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(o.Z,{project:e.meta,href:e.path})},"project-".concat(t)))})]})]})}},66825:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(67294);"function"==typeof SuppressedError&&SuppressedError;let l=(e,t,i,n)=>{e.style.transition=`${t} ${i}ms ${n}`},s=(e,t,i)=>Math.min(Math.max(e,t),i);class r{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,n=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,n)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:n}=e;this.glareAngle=(i?180/Math.PI*Math.atan2(n,-i):0)-(t?180:0)},this.updateOpacity=(e,t,i,n)=>{let{xPercentage:l,yPercentage:r}=e,{glarePosition:a,glareReverse:o,glareMaxOpacity:h}=t,p=i?-1:1,c=n?-1:1,d=o?-1:1,g=0;switch(a){case"top":g=-l*p*d;break;case"right":g=r*c*d;break;case"bottom":case void 0:g=l*p*d;break;case"left":g=-r*c*d;break;case"all":g=Math.hypot(l,r)}let u=s(g,0,100);this.glareOpacity=u*h/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,n)}}class a{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:l,tiltMaxAngleY:s}=t;this.tiltAngleX=i*l/100,this.tiltAngleY=-(n*s/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:l,tiltMaxAngleY:s}=t;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/l,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=s(this.tiltAngleX,-90,90),this.tiltAngleY=s(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let o=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class h extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,n;return e=this,t=void 0,i=void 0,n=function*(){if(!window.DeviceOrientationEvent)return;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(l,s){function r(e){try{o(n.next(e))}catch(e){s(e)}}function a(e){try{o(n.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?l(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(r,a)}o((n=n.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:l,tiltMaxAngleY:r}=this.props;this.wrapperEl.clientPosition.xPercentage=s(i/l*100,-100,100),this.wrapperEl.clientPosition.yPercentage=s(n/r*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=s(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=s(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:i,y:n}=this.wrapperEl.clientPosition;e=n/window.innerHeight*200-100,t=i/window.innerWidth*200-100}else{let{size:{width:i,height:n,left:l,top:s},clientPosition:{x:r,y:a}}=this.wrapperEl;e=(a-s)/n*200-100,t=(r-l)/i*200-100}this.wrapperEl.clientPosition.xPercentage=s(e,-100,100),this.wrapperEl.clientPosition.yPercentage=s(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new a,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new r(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;l(this.wrapperEl.node,"all",e,t),this.glare&&l(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}h.defaultProps=o}},function(e){e.O(0,[1635,9757,3880,2781,7539,2888,9774,179],function(){return e(e.s=37670)}),_N_E=e.O()}]);