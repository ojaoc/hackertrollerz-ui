(this["webpackJsonpui-hackathon"]=this["webpackJsonpui-hackathon"]||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(52),c=n.n(s),o=n(7),i=n(8),u=n(10),l=n(9),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.trends,n=e.username,a=t.map((function(e){return r.a.createElement("div",{className:"trendContainer my-5",key:e.id},r.a.createElement("div",null,r.a.createElement("h3",null,e.name),e.tweet_volume?r.a.createElement("h6",null,e.tweet_volume," tweets"):null),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{className:"btn btn-success m-2"},"Agree"),r.a.createElement("button",{className:"btn btn-danger  m-2"},"Disagree")))}));return n.trim()?r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},"Welcome, ",n,"!"),a):null}}]),n}(r.a.Component),d=n(30),h=n.n(d),b=n(53),v=n(16),g=n(54),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onLoginAttempt=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)({domain:"twitwar.eu.auth0.com",client_id:"g7vWpCLneLdOPUeRx5KHeskBEwbcPQUa"});case 2:return t=e.sent,e.next=5,t.loginWithRedirect({redirect_uri:"https://ojaoc.github.io/hackertrollerz-ui/"});case 5:return e.next=7,t.getUser();case 7:n=e.sent,console.log(n),a.setState({username:n});case 10:case"end":return e.stop()}}),e)}))),a.state={username:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.setUsername(this.state.username),e.preventDefault()}},{key:"render",value:function(){return this.props.username.trim()?null:r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("button",{onClick:this.onLoginAttempt},"Login"))}}]),n}(r.a.Component),f=n(57),A=n(55),E=n.n(A),O=n(56),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onMessageReceive=function(e,t){console.log(e);var n={author:e.sender,message:e.content};a.setState((function(e){return{messages:[].concat(Object(f.a)(e.messages),[n])}}))},a.sendMessage=function(e,t){try{var n={sender:"FABINH BIGODINH",content:t.message,type:"CHAT"};return console.log(n),a.clientRef.sendMessage("/trend/lobby",JSON.stringify(n)),!0}catch(r){return!1}},a.state={clientConnected:!1,messages:[]},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.TalkBox,{topic:"react-websocket-template",currentUserId:this.randomUserId,currentUser:this.randomUserName,messages:this.state.messages,onSendMessage:this.sendMessage,connected:this.state.clientConnected}),r.a.createElement(E.a,{url:"https://twit-war.herokuapp.com/ws",topics:["/trend/lobby"],onMessage:this.onMessageReceive,ref:function(t){e.clientRef=t},onConnect:function(){e.setState({clientConnected:!0})},onDisconnect:function(){e.setState({clientConnected:!1})},debug:!1}))}}]),n}(r.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){a.setState({username:e})},a.state={username:"",error:null,isLoaded:!1,trends:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://twit-war.herokuapp.com/api/trends?bt=AAAAAAAAAAAAAAAAAAAAAC2uDwEAAAAAuUTw%2FQnHL9lqek0ODTp64ROuGBU%3D7fwFkHZVgPMjz3FdOVhZlsE7idVKtyI2kJj6zofXQx8JduNHvh").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,trends:t[0].trends})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded;e.trends;return t?r.a.createElement("div",null,"Error: ",t.message):n?(console.log(this.state.trends),r.a.createElement("div",{className:"container"},r.a.createElement(p,{setUsername:this.setUser,username:this.state.username}),r.a.createElement(m,{trends:this.state.trends,username:this.state.username}),r.a.createElement(j,null))):r.a.createElement("div",null,"Loading...")}}]),n}(r.a.Component);n(171),n(172),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,n){e.exports=n(173)}},[[58,1,2]]]);