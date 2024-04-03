(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2648],{53374:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/redux",function(){return n(45104)}])},45104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d},meta:function(){return a}});var r=n(85893),s=n(11151),o=n(47439),i=n(98727);let a={path:"/blog/redux-re-introduction",title:"Redux (re)introduction",date:"2019-08-21T00:00:00.000Z",type:"post",description:"Redux is one of my favorite JavaScript library outside. I've been using it for three years and I never stopping love it. Recently, I've made a crash course to my workmates about Redux and some related libraries. So it's a good opportunity to (re)introduce Redux core concepts for those who don't already use it daily."},l=e=>{let{children:t}=e;return(0,r.jsx)(o.Z,{meta:a,children:t})};function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Redux is one of my favorite JavaScript library outside"}),". I've been using it for three years and I never stopping love it. Recently, I've made a crash course to my workmates about Redux and some related libraries. So it's a good opportunity to (re)introduce Redux core concepts for those who don't already use it daily."]}),"\n",(0,r.jsx)(t.h2,{children:"The loop"}),"\n",(0,r.jsxs)(t.p,{children:["Be reassured, we are not talking about Wordpress Loop here, but about ",(0,r.jsx)(t.strong,{children:"the base concept of Redux: its loop"}),". The main goal of the library is to manage a store, your local database, and distribute the data across various contexts of your application."]}),"\n",(0,r.jsx)(i.Z,{alt:"gdal hillshade",filename:"redux-loop.png"}),"\n",(0,r.jsxs)(t.p,{children:["So the first (or the last) entity of the loop is the ",(0,r.jsx)(t.strong,{children:"Store"}),", basically a big JavaScript object. Then, there is the ",(0,r.jsx)(t.strong,{children:"consumer"})," which will be bonded to the store to receive its data. This consumer can also trigger ou third entity, the ",(0,r.jsx)(t.strong,{children:"actions"}),". Those simple JavaScript functions will return a object containing at least a ",(0,r.jsx)(t.code,{children:"type"})," . When any actions are fired, our last entity, the ",(0,r.jsx)(t.strong,{children:"reducers"}),", will check those types and conditionally mutate the Store."]}),"\n",(0,r.jsx)(t.h2,{children:"Store and sub-stores"}),"\n",(0,r.jsxs)(t.p,{children:["The Store is one big JavaScript Object, but to keep things understandable and organized, it's recommended to use the \x19",(0,r.jsx)(t.code,{children:"combineReducers"})," that will “split” your Store into sub-stores. It's still Objects accessible though the Store, but  in the future you will be able to choose which one to access in your consumer."]}),"\n",(0,r.jsx)(t.h2,{children:"Vanilla example"}),"\n",(0,r.jsxs)(t.p,{children:["For this example, no complex React-Redux architecture, only Redux plain JavaScript. The goal is fairly simple, change a ",(0,r.jsx)(t.code,{children:"year"})," value in a ",(0,r.jsx)(t.code,{children:"time"})," sub-store."]}),"\n",(0,r.jsxs)(t.p,{children:["First we need to define our ",(0,r.jsx)(t.strong,{children:"initial state"}),": the default value of our time sub-store."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const timeInitialState = {\n  year: 1972,\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, our ",(0,r.jsx)(t.strong,{children:"action"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const setYear = year => ({\n  type: 'SET_YEAR',\n  payload: year,\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now, our ",(0,r.jsx)(t.strong,{children:"reducer"})," to mutate the Store."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const timeReducer = (state = timeInitialState, action) => {\n  switch (action.type) {\n    case 'SET_YEAR':\n      return {\n        ...state,\n        year: action.payload,\n      };\n\n    default:\n      return state;\n  }\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And finally the ",(0,r.jsx)(t.strong,{children:"Store"})," itself with the Redux Devtools for debugging clarity."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const rootReducer = combineReducers({\n  time: timeReducer,\n});\n\nconst store = createStore(\n  rootReducer,\n  window.__REDUX_DEVTOOLS_EXTENSION__ &&\n	window.__REDUX_DEVTOOLS_EXTENSION__()\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here our ",(0,r.jsx)(t.strong,{children:"consumer"})," is a piece of vanilla JavaScript that binds DOM elements to our Store."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const title = document.getElementById('year-title');\nconst field = document.getElementById('year-field');\nconst button = document.getElementById('set-year');\n\nbutton.addEventListener('click', () => {\n  store.dispatch(setYear(field.value));\n});\n\nconst render = () => {\n  title.innerHTML = store.getState().time.year;\n  field.value = store.getState().time.year;\n};\n\nrender();\nstore.subscribe(render);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We can see that the binding uses ",(0,r.jsx)(t.code,{children:"store"}),"'s api:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:".dispatch"})," to bind our action"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:".getState"})," to retrieve data"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:".subscribe"})," to listen store mutations"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/s/redux-vanilla-qebw7?fontsize=14",children:"\uD83D\uDCE6 Play with the CodeSandbox example!"})})}),"\n",(0,r.jsxs)(t.p,{children:["If you are using ",(0,r.jsx)(t.a,{href:"https://react-redux.js.org",children:"react-redux"})," to bind your Redux Store with your React components props, you will use something like:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\n\nconst MyComponent = ({ time, setYear }) => /*...*/;\n\nconst mapState = ({ time }) => ({ time });\nconst mapDispatch = dispatch => bindActionCreators({ setYear }, dispatch);\n\nexport default connect(mapState, mapDispatch)(MyComponent);\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Async"}),"\n",(0,r.jsx)(t.p,{children:"If you try to do anything other than directly returning an Object in your action, you will have an error like:"}),"\n",(0,r.jsx)(i.Z,{alt:"gdal hillshade",filename:"redux-error.png"}),"\n",(0,r.jsxs)(t.p,{children:["This error is pretty clear: ",(0,r.jsx)(t.strong,{children:"Redux requires middleware to deal with async actions"}),". There are a lot of very popular middleware libraries out there and personally my favorite is ",(0,r.jsx)(t.a,{href:"https://github.com/reduxjs/redux-thunk",children:"redux-thunk"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["To enable ",(0,r.jsx)(t.em,{children:"redux-thunk"})," (and still keep Redux Devtools), you must refactor your Store definition after installing ",(0,r.jsx)(t.code,{children:"redux-thunk"})," and ",(0,r.jsx)(t.code,{children:"redux-devtools-extension"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import {\n  createStore,\n  combineReducers,\n  applyMiddleware\n} from 'redux';\nimport { composeWithDevTools } from 'redux-devtools-extension';\nimport thunk from 'redux-thunk';\n\nconst store = createStore(\n  rootReducer,\n  composeWithDevTools(applyMiddleware(thunk))\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now you can create asynchronous actions!"}),"\n",(0,r.jsx)(t.p,{children:"Here is a very simple example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const timeAction = year => dispatch => {\n  timeApi(year).then(res =>\n    dispatch({\n      type: 'SET_YEAR',\n      payload: res.year,\n    })\n  );\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["As you can see, your action doesn't return an object anymore, but a function. This function takes ",(0,r.jsx)(t.code,{children:"dispatch"})," as first parameters; the method to return your object or trigger another action when your asynchronous logic is over."]}),"\n",(0,r.jsxs)(t.p,{children:["Here is a more complex example using ",(0,r.jsx)(t.a,{href:"https://github.com/axios/axios",children:"axios"})," with loading and error handling:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import axios from 'axios';\n\nexport const getPlanets = () => dispatch => {\n  const url = 'https://swapi.co/api/planets/?format=json';\n\n  const interceptor = axios.interceptors.request.use(config => {\n    if (config.url === url) dispatch({ type: 'FETCH_LOADING' });\n    return config;\n  });\n\n  axios\n    .get(url)\n    .then(res => {\n      axios.interceptors.request.eject(interceptor);\n      dispatch({ type: 'FETCH_SUCCESS', payload: res.data.results });\n    })\n    .catch(err => dispatch({ type: 'FETCH_ERROR' }));\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/s/redux-thunk-pwgnl?fontsize=14",children:"\uD83D\uDCE6 Play with the CodeSandbox example!"})})}),"\n",(0,r.jsx)(t.h2,{children:"About others libs"}),"\n",(0,r.jsxs)(t.p,{children:["There are two kinds of Redux users: ",(0,r.jsx)(t.strong,{children:"those who loves Redux for what it is and those who loves Redux, but not its “boilerplate code”"}),". The second group use libraries like ",(0,r.jsx)(t.a,{href:"https://github.com/redux-utilities/redux-actions",children:"redux-actions"})," to reduce the amount of code required by a Redux infrastructure. It seems to be a good idea, but in the end, trust me, it will make your code harder to understand because of this useless layer of abstraction."]}),"\n",(0,r.jsxs)(t.p,{children:["There is also more “complex” middleware libraries available like ",(0,r.jsx)(t.a,{href:"https://redux-saga.js.org",children:"https://redux-saga.js.org"})," or ",(0,r.jsx)(t.a,{href:"https://redux-observable.js.org/",children:"redux-observable"}),". They are great libraries, but they will add another big layer of complexity to your app. So be sure to really need it instead of  ",(0,r.jsx)(t.a,{href:"https://github.com/reduxjs/redux-thunk",children:"redux-thunk"})," before using it."]}),"\n",(0,r.jsxs)(t.p,{children:["My final advice: “",(0,r.jsx)(t.strong,{children:"never fight Redux boilerplate code, embrace it"}),"”. And just take a look to similar store management using MobX or Apollo with local mutations, there is not that less code \uD83D\uDE05."]}),"\n",(0,r.jsx)(t.h2,{children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["Three years later and a lot of concurrent libraries, ",(0,r.jsx)(t.strong,{children:"Redux is still not dead"}),"! It's still a great state management libraries, regardless of the UI library or framework that you're using. It's great strength is the clarity of its (boilerplate) code and it's amazing debugger."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Supported with"})," \uD83D\uDC9B ",(0,r.jsxs)(t.em,{children:["by ",(0,r.jsx)(t.a,{href:"https://antistatique.net",children:"Antistatique"})]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})})}},62090:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var s=n(90512),o=n(41664),i=n.n(o),a=n(68658),l=n(81612),c=e=>{let{crumbs:t}=e;return(0,r.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-6 transform md:translate-x-1 md:mb-0",children:(0,r.jsxs)("ol",{className:"inline-flex text-sm text-gray-600 lowercase md:text-lg opacity-60 hover:opacity-100 duration-500 transition-opacity transform md:-translate-x-full md:translate-y-2 md:-rotate-90 md:origin-right",children:[(0,r.jsx)("li",{children:(0,r.jsxs)(i(),{href:"/",className:"link",children:[(0,r.jsx)("span",{className:"sr-only",children:"Homepage"}),(0,r.jsx)(l.Z,{name:"tipi",className:"text-base md:text-lg"})]})}),t.map((e,t)=>{let{href:n,label:o}=e;return(0,a.Z)(n)?(0,r.jsxs)("li",{"aria-current":"page",children:[(0,r.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,r.jsx)("span",{className:(0,s.Z)("inline-block truncate",{maxWidth:250}),children:o})]},"crumb-".concat(t)):(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"px-3","aria-hidden":!0,children:"\xb7"}),(0,r.jsx)(i(),{href:n,className:"link",children:o})]},"crumb-".concat(t))})]})})}},98727:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),s=n(67294),o=n(9701),i=n(58354),a=n(90512),l=n(29260),c=n.n(l),d=n(68658),h=n(83758),u=e=>{let{filename:t,alt:n,className:l}=e,u=h.Z[t],[x,p]=(0,s.useState)(!1),{observe:m,width:j}=(0,o.ZP)({polyfill:i.do});return(0,r.jsx)("div",{ref:m,className:"picture ".concat(l," bg-gray-100"),children:(0,r.jsx)("div",{className:(0,a.Z)("opacity-0 transition-opacity duration-200",x&&"opacity-100"),children:(0,r.jsx)(c(),{src:u.msrc,alt:n,width:u.w,height:u.h,quality:65,sizes:(0,d.Z)(j)?"100vw":"".concat(Math.round(j),"px"),onLoad:e=>{e.target.srcset&&p(!0)}})})})}},47439:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893);n(67294);var s=n(47906),o=n(63595),i=n(62090),a=n(73574),l=n(29454),c=n(53659),d=n(8523),h=n(35045),u=e=>{let{children:t,meta:n}=e;return(0,r.jsxs)(c.Z,{outsideChildren:(0,r.jsx)(d.Z,{}),children:[(0,r.jsx)(h.Z,{title:n.title,description:n.description}),(0,r.jsx)(i.Z,{crumbs:[{href:"/blog",label:"Blog"},{label:n.title}]}),(0,r.jsxs)("article",{className:"w-full mx-auto mt-20 sm:w-10/12 md:w-2/3 xl:w-7/12 md:px-8",children:[(0,r.jsxs)(l.Z,{move:!1,children:[(0,r.jsx)("h1",{className:"text-3xl font-medium text-gray-900 md:text-4xl lg:text-5xl",children:n.title}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)("h2",{className:"font-medium md:text-lg",children:[(0,r.jsx)("span",{children:"Yann Gouffon — "}),(0,s.WU)((0,o.D)(n.date),"PPP")]})})]}),(0,r.jsx)(l.Z,{className:"mt-16 font-serif text-lg text-gray-900 space-y-6 md:mt-14 prose-headings:pt-4 prose-p:leading-[1.618em] lg:text-xl xl:text-2xl xl:prose-p:leading-[1.618em] prose-a:text-blue prose-headings:font-sans prose-headings:font-medium prose-h2:text-[26px] xl:prose-h2:text-[28px] prose-h3:text-[19px] lg:prose-h3:text-[24px] xl:prose-h3:text-[27px] prose-h4:text-[18px] lg:prose-h4:text-[21px] xl:prose-h4:text-[25px] prose-strong:text-medium prose-ul:list-disc prose-ul:pl-3 prose-ul:space-y-3 prose-ul:leading-[1.618em] xl:prose-figure:w-[106%] xl:prose-figure:-translate-x-[2.8%] prose-figure:rounded-lg prose-figure:overflow-hidden prose-figure:my-8",children:t})]})]})}}},function(e){e.O(0,[1635,9757,3880,520,2781,5098,7539,8523,2888,9774,179],function(){return e(e.s=53374)}),_N_E=e.O()}]);