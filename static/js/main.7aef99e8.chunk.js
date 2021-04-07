(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(21),s=n.n(r),i=(n(28),n(2)),c=n(6),l=n(4),u=n(3),d=n.p+"static/media/info-icon.49019fd1.svg",h=n.p+"static/media/alert-icon.b19a0bd1.svg",f=n.p+"static/media/connection-icon.8e76d38d.svg",v=n.p+"static/media/close-icon.d2eacc0f.svg",p=n(0),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{backgroundColor:a.color}},a.color=null,a.source="",a}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{style:this.getStyle(),className:"alert-container",children:[Object(p.jsx)("img",{src:this.source,alt:"alert icon"}),Object(p.jsx)("p",{children:this.props.text}),Object(p.jsx)("img",{onClick:this.props.close,src:v,className:"alert_close",alt:"close icon"})]})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="#647D9B",a.source=d,a}return n}(g),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="#C08326",a.source=f,a}return n}(g),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="#7E2121",a.source=h,a}return n}(g),x=n.p+"static/media/location-icon.65631a10.svg",O=n.p+"static/media/calendar-icon.38d7d133.svg",w=n.p+"static/media/up-icon.c9f7e0a1.svg",k=n.p+"static/media/down-icon.b3c580d0.svg",y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isExpanded:!1},e.handleExpandEvent=function(){e.state.isExpanded?e.setState({isExpanded:!1}):e.setState({isExpanded:!0})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.isExpanded,t=this.props.event;return Object(p.jsxs)("div",{className:"event-item__container",tabIndex:0,children:[Object(p.jsxs)("div",{className:"event-data__collapsed",children:[Object(p.jsxs)("div",{className:"event-data__flex",children:[Object(p.jsx)("h1",{children:t.summary}),Object(p.jsxs)("div",{className:"date__container",children:[Object(p.jsx)("img",{className:"date_icon",src:O,alt:"calendar icon"}),Object(p.jsx)("p",{children:new Date(t.start.dateTime).toLocaleDateString("en-gb",{year:"numeric",month:"short",day:"numeric",timeZone:"utc"})})]})]}),Object(p.jsxs)("div",{className:"location__container",children:[Object(p.jsx)("img",{className:"location_icon",src:x,alt:"location icon"}),Object(p.jsx)("p",{children:t.location})]})]}),e?Object(p.jsxs)("div",{className:"event-data__expanded",children:[Object(p.jsx)("div",{className:"line"}),Object(p.jsx)("p",{children:t.description}),Object(p.jsx)("a",{href:t.htmlLink,target:"_blank",rel:"noreferrer",children:"See details on Google Calender"})]}):null,Object(p.jsxs)("div",{className:"more-less__button",onClick:this.handleExpandEvent,children:[Object(p.jsx)("img",{src:e?w:k,alt:"caret"}),Object(p.jsx)("button",{className:"event-item__details-button",children:e?"Less":"More"})]})]})}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={infoText:""},e.closeAlert=function(){e.setState({infoText:""})},e.checkConnection=function(){navigator.onLine?e.setState({infoText:""}):e.setState({infoText:"No Internet Connection. Viewing events offline. Connect to internet for updated event list."})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsxs)(p.Fragment,{children:[this.state.infoText?Object(p.jsx)(b,{text:this.state.infoText,close:this.closeAlert}):null,Object(p.jsx)("h1",{className:"event-list__title",children:"Events this week ( Next 7 Days )"}),e?Object(p.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(y,{event:e})},e.id)}))}):Object(p.jsxs)("div",{className:"loading__container",children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",className:"loading-icon",alt:"loading icon"}),Object(p.jsx)("h1",{children:"Loading Events"})]})]})}}]),n}(a.Component),C=n.p+"static/media/search-icon.1ccd3d43.svg",E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can't find the city you are looking for. Please try another city."}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.closeAlert=function(){e.setState({infoText:""})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions,o=t.showSuggestions,r=this.props;r.locations,r.updateEvents;return Object(p.jsxs)("div",{className:"city-search__container",children:[this.state.infoText?Object(p.jsx)(m,{text:this.state.infoText,close:this.closeAlert}):null,Object(p.jsx)("img",{className:"search_icon",src:C,alt:"search icon"}),Object(p.jsx)("input",{onChange:this.handleInputChanged,type:"text",className:"city-search__input",placeholder:"Search",value:n,onFocus:function(){return e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"city-search__suggestions",style:o?{}:{display:"none"},children:[a.map((function(t){return Object(p.jsx)("li",{className:"city-suggestion",onClick:function(){return e.handleItemClicked(t)},value:t,children:t},t)})),Object(p.jsx)("li",{className:"city-suggestion last",onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See All Cities"})},"all")]})]})}}]),n}(a.Component),S=n(7),N=n.n(S),Q=n(8),I=n.p+"static/media/filter-icon.90f895e8.svg",T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={eventCount:32,infoText:""},e.handleCountChanged=function(){var t=Object(Q.a)(N.a.mark((function t(n){var a,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.updateEvents,o=n.target.value,console.log(o),o<1||o>32?e.setState({eventCount:o,infoText:"Please select a number between 1 and 32."}):e.setState({eventCount:o,infoText:""}),t.next=6,a(null,o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeAlert=function(){e.setState({infoText:""})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.eventCount;return Object(p.jsxs)("div",{className:"event-number__container",children:[this.state.infoText?Object(p.jsx)(j,{text:this.state.infoText,close:this.closeAlert}):null,Object(p.jsx)("img",{className:"filter_icon",src:I,alt:"filter icon"}),Object(p.jsx)("input",{className:"number-of-events__input",type:"number",id:"event-number",value:e,max:32,min:1,onChange:this.handleCountChanged})]})}}]),n}(a.Component),U=(n(31),n(32),n(23)),q=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],Z=n(10),R=n.n(Z),V=n(9),J=n.n(V),L=(n(50),function(e){var t=e.map((function(e){return e.location}));return Object(U.a)(new Set(t))}),M=function(){var e=Object(Q.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(Q.a)(N.a.mark((function e(t){var n,a,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://hymncvcewd.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=window.location,t=e.protocol,n=e.host,a=e.pathname;if(window.history.pushState&&window.location.pathname){var o=t+"//"+n+a;window.history.pushState("","",o)}else{var r=t+"//"+n;window.history.pushState("","",r)}},B=function(){var e=Object(Q.a)(N.a.mark((function e(){var t,n,a,o,r,s,i,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return J.a.done(),e.abrupt("return",q);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),n=JSON.parse(t).events,J.a.done(),e.abrupt("return",n);case 9:if(navigator.onLine){e.next=14;break}return a=localStorage.getItem("lastEvents"),o=L(JSON.parse(a).events),J.a.done(),e.abrupt("return",o);case 14:return e.next=16,W();case 16:if(!(r=e.sent)){e.next=26;break}return K(),s="https://hymncvcewd.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+r,e.next=22,R.a.get(s);case 22:return(i=e.sent).data&&(c=L(i.data.events),localStorage.setItem("lastEvents",JSON.stringify(i.data)),localStorage.setItem("locations",JSON.stringify(c))),J.a.done(),e.abrupt("return",i.data.events);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(Q.a)(N.a.mark((function e(){var t,n,a,o,r,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access-token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,R.a.get("https://hymncvcewd.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&F(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=n.p+"static/media/logo.caac0edc.svg",Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).loadingEvents=function(){e.state.events.length<1?e.setState({loadingEvents:!0}):e.setState({loadingEvents:!1})},e.updateEvents=function(t,n){var a=e.state,o=a.currentLocation,r=a.eventNumber;t?B().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,r);e.setState({events:a,currentLocation:t})})):B().then((function(t){var a=("all"===o?t:t.filter((function(e){return e.location===o}))).slice(0,n);e.setState({events:a,eventNumber:n})}))},e.state={events:[],locations:[],eventNumber:32,currentLocation:"all",loadingEvents:!0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,this.loadingEvents(),B().then((function(t){var n=e.state.eventNumber;if(e.mounted){var a=t.slice(0,n);e.setState({events:a,locations:L(t)})}}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations,a=e.eventNumber;e.loadingEvents;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"app__navigation-bar",children:[Object(p.jsx)("div",{className:"logo__container",children:Object(p.jsx)("img",{className:"logo",src:X,alt:"meet up logo"})}),Object(p.jsxs)("div",{className:"nav-inputs__container",children:[Object(p.jsx)(E,{locations:n,updateEvents:this.updateEvents}),Object(p.jsx)(T,{eventNumber:a,updateEvents:this.updateEvents})]})]}),Object(p.jsx)(A,{events:t})]})}}]),n}(a.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=n(22),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):D(t,e)}))}}(),H.config("96e560799eb549b3ae2bd4a2e53ac5c0").install(),P()}},[[52,1,2]]]);
//# sourceMappingURL=main.7aef99e8.chunk.js.map