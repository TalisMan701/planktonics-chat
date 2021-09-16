(this["webpackJsonpplanktonics-chat"]=this["webpackJsonpplanktonics-chat"]||[]).push([[0],{258:function(e,t,n){},259:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n(25),c=n.n(s),o=n(24),i=n(262),u=n(74),l=n(263),d=n(51),p=n(264),h=n(265),j=n(56),f=function(e){return{required:!0,message:e}},b=n(67),O=b.c,g=n(73),E=n(19),x=n(16),y=n.n(x),S=n(26);!function(e){e.SET_AUTH="SET_AUTH",e.SET_ERROR="SET_ERROR",e.SET_USER="SET_USER",e.SET_IS_LOADING="SET_IS_LOADING"}(r||(r={}));var v=n(87),m=n(88),T=n(145),I=n.n(T).a.create({withCredentials:!0,baseURL:"https://planktoniks.herokuapp.com/api/v1"});I.interceptors.request.use((function(e){return e.headers.Authorization="Authorization ".concat(localStorage.getItem("token")),e})),I.interceptors.response.use((function(e){return e}),function(){var e=Object(S.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.config,401!==t.response.status||!t.config||t._isRetry){e.next=15;break}return n._isRetry=!0,e.prev=3,e.next=6,w.refresh();case 6:return r=e.sent,localStorage.setItem("token",r.data.accessToken),localStorage.setItem("tokenRefresh",r.data.refreshToken),e.abrupt("return",I.request(n));case 12:e.prev=12,e.t0=e.catch(3),console.log("\u041d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d");case 15:throw t;case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}());var k,_=I,w=function(){function e(){Object(v.a)(this,e)}return Object(m.a)(e,null,[{key:"login",value:function(){var e=Object(S.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/oauth/tokens",{login:t,password:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"checkAuth",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.get("/users/sync"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.get("/users/logout"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/oauth/refresh",{refreshToken:localStorage.getItem("tokenRefresh")||""}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),A={setUser:function(e){return{type:r.SET_USER,payload:e}},setIsAuth:function(e){return{type:r.SET_AUTH,payload:e}},setError:function(e){return{type:r.SET_ERROR,payload:e}},setIsLoading:function(e){return{type:r.SET_IS_LOADING,payload:e}},login:function(e,t){return function(){var n=Object(S.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(A.setIsLoading(!0)),n.next=4,w.login(e,t);case 4:a=n.sent,localStorage.setItem("token",a.data.accessToken),localStorage.setItem("tokenRefresh",a.data.refreshToken),r(A.setIsAuth(!0)),r(A.setUser(a.data.user)),r(A.setIsLoading(!1)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r(A.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043b\u043e\u0433\u0438\u043d\u0435"));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},checkAuth:function(){return function(){var e=Object(S.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(A.setIsLoading(!0)),e.next=4,w.checkAuth();case 4:n=e.sent,t(A.setIsAuth(!0)),t(A.setUser(n.data.user)),t(A.setIsLoading(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(A.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.logout();case 3:localStorage.removeItem("token"),localStorage.removeItem("tokenRefresh"),t(A.setIsAuth(!1)),t(A.setUser({})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(A.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435"));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}};!function(e){e.SET_ID="SET_ID",e.SET_NAME="SET_NAME",e.ADD_MESSAGE="ADD_MESSAGE",e.DELETE_MESSAGE="DELETE_MESSAGE",e.SET_EDIT_MESSAGE="SET_EDIT_MESSAGE",e.SET_DESCRIPTION="SET_DESCRIPTION",e.SET_ERROR="SET_ERROR",e.SET_IS_LOADING="SET_IS_LOADING",e.SET_MESSAGES="SET_MESSAGES"}(k||(k={}));var M,R=function(){function e(){Object(v.a)(this,e)}return Object(m.a)(e,null,[{key:"getMassage",value:function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.get("/users/getAllMessageByIdChat/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"editMessage",value:function(){var e=Object(S.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/users/editMessageByIdMessage/".concat(t),{text:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteMessage",value:function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.get("/users/deleteMessageById/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(){var e=Object(S.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/users/sendMessageByIdChat",{chatId:t,text:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),L={setId:function(e){return{type:k.SET_ID,payload:e}},setName:function(e){return{type:k.SET_NAME,payload:e}},setDescription:function(e){return{type:k.SET_DESCRIPTION,payload:e}},setError:function(e){return{type:k.SET_ERROR,payload:e}},setIsLoading:function(e){return{type:k.SET_IS_LOADING,payload:e}},setMessages:function(e){return{type:k.SET_MESSAGES,payload:e}},addMessages:function(e){return{type:k.ADD_MESSAGE,payload:e}},setDeleteMessages:function(e){return{type:k.DELETE_MESSAGE,payload:e}},setEditMessage:function(e){return{type:k.SET_EDIT_MESSAGE,payload:e}},getMessages:function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(L.setIsLoading(!0)),t.next=4,R.getMassage(e);case 4:r=t.sent,n(L.setMessages(r.data)),n(L.setIsLoading(!1)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(L.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439!"));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},editMessage:function(e,t){return function(){var n=Object(S.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.editMessage(e,t);case 3:a=n.sent,r(L.setEditMessage(a.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r(L.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f!"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},deleteMessage:function(e){return function(){var t=Object(S.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.deleteMessage(e);case 3:t.sent.data.statusDelete&&n(L.setDeleteMessages(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(L.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f!"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},sendMessage:function(e,t){return function(){var n=Object(S.a)(y.a.mark((function n(r){var a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.sendMessage(e,t);case 3:a=n.sent,r(L.addMessages(a.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r(L.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}},D=Object(E.a)(Object(E.a)({},A),L),C=function(){var e=Object(b.b)();return Object(g.b)(D,e)},N=n(6),G=function(){var e=O((function(e){return e.auth})),t=e.error,n=e.isLoading,r=Object(a.useState)(""),s=Object(d.a)(r,2),c=s[0],o=s[1],i=Object(a.useState)(""),u=Object(d.a)(i,2),l=u[0],b=u[1],g=C().login;return Object(N.jsxs)(p.a,{onFinish:function(){g(c,l)},children:[t&&Object(N.jsx)("div",{style:{color:"red"},children:t}),Object(N.jsx)(p.a.Item,{label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",name:"username",rules:[f("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f!")],children:Object(N.jsx)(h.a,{value:c,onChange:function(e){return o(e.target.value)}})}),Object(N.jsx)(p.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[f("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!")],children:Object(N.jsx)(h.a,{value:l,type:"password",onChange:function(e){return b(e.target.value)}})}),Object(N.jsx)(p.a.Item,{children:Object(N.jsx)(j.a,{type:"primary",htmlType:"submit",loading:n,children:"\u0412\u043e\u0439\u0442\u0438"})})]})},U=function(){return Object(N.jsx)(i.a,{children:Object(N.jsx)(u.a,{justify:"center",align:"middle",className:"h100",children:Object(N.jsx)(l.a,{children:Object(N.jsx)(G,{})})})})},H=function(){return Object(N.jsx)(i.a,{children:Object(N.jsx)(u.a,{justify:"center",align:"middle",className:"h100",children:"Welcome to chat service your company!"})})},z=n(268),W=n(266),B=function(){var e=O((function(e){return e.chat})),t=e.error,n=e.id,r=Object(a.useState)(""),s=Object(d.a)(r,2),c=s[0],o=s[1],i=C().sendMessage;return Object(N.jsx)("div",{style:{height:"10%",width:"100%",marginTop:12},children:Object(N.jsxs)(p.a,{onFinish:function(){i(n,c)},children:[Object(N.jsxs)(u.a,{children:[Object(N.jsx)(p.a.Item,{style:{flexGrow:1},name:"messageText",rules:[f("\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!")],children:Object(N.jsx)(h.a.TextArea,{value:c,onChange:function(e){return o(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",autoSize:{minRows:1,maxRows:2}})}),Object(N.jsx)(p.a.Item,{children:Object(N.jsx)(j.a,{style:{height:"100%"},type:"primary",htmlType:"submit",loading:!1,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]}),t&&Object(N.jsx)("div",{style:{color:"red"},children:t})]})})},q=n(269),P=n(72),F=n(149),J=n.n(F),K=function(e){var t=O((function(e){return e.auth})).user,n=Object(a.useState)(!1),r=Object(d.a)(n,2),s=r[0],c=r[1],o=Object(a.useState)({}),i=Object(d.a)(o,2),u=i[0],p=i[1],j=Object(a.useState)(""),f=Object(d.a)(j,2),b=f[0],g=f[1],E=C(),x=E.deleteMessage,y=E.editMessage;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(l.a,{style:{overflowY:"scroll",overflowX:"hidden",padding:16,height:"70%",width:"100%"},children:0!==e.messages.length?Object(N.jsx)(z.a,{mode:"alternate",children:e.messages.map((function(e,n){var r=new Date(e.date);return Object(N.jsx)(z.a.Item,{position:e.userLogin===t.login?"left":"right",dot:Object(N.jsx)("img",{src:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg",style:{width:32,height:32,borderRadius:"50%"},alt:""}),children:Object(N.jsxs)("div",{className:"contentMessage",style:{position:"relative",paddingTop:8,paddingBottom:8},children:[Object(N.jsx)("div",{style:{padding:12,borderWidth:1,borderColor:"#1890ff",backgroundColor:"#edf9ff",borderStyle:"solid",borderRadius:5},children:Object(N.jsx)("p",{style:{width:"100%",textAlign:"start"},children:e.text})}),e.userLogin===t.login&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q.a,{onClick:function(){c(!0),p(e),g(e.text)},className:"iconChat--hover",style:{position:"absolute",top:14,right:28}}),Object(N.jsx)(P.a,{onClick:function(){x(e.id)},className:"iconChat--hover",style:{position:"absolute",top:14,right:8}})]}),Object(N.jsx)("span",{style:{marginRight:4,fontSize:12,color:"#444",fontWeight:"bold",position:"absolute",left:8,top:-10},children:e.userLogin}),Object(N.jsx)("span",{style:{fontSize:10,position:"absolute",right:8,bottom:-8},children:J()(r).fromNow()})]})},"mes".concat(n))}))}):Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"\u041d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439. \u0411\u0443\u0434\u044c \u043f\u0435\u0440\u0432\u044b\u043c :)"})})}),Object(N.jsx)(B,{}),Object(N.jsxs)(W.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",visible:s,onOk:function(){c(!1),y(u.id,b)},onCancel:function(){c(!1)},children:[Object(N.jsx)("p",{children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u043c \u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(N.jsx)(h.a,{value:b,onChange:function(e){return g(e.target.value)}})]})]})},X=function(){var e=O((function(e){return e.chat})),t=e.id,n=e.name,r=e.description,s=e.isLoading,c=e.messages,o=C().getMessages;return Object(a.useEffect)((function(){o(t)}),[t]),s?Object(N.jsx)(i.a,{children:Object(N.jsx)(u.a,{className:"h100",justify:"center",children:"Loading..."})}):Object(N.jsx)(i.a,{className:"h100",children:Object(N.jsxs)(u.a,{style:{height:"100%",padding:16},children:[Object(N.jsxs)("div",{style:{height:"20%"},children:[Object(N.jsx)("h2",{style:{width:"100%"},children:n}),Object(N.jsx)("p",{style:{width:"100%"},children:r})]}),Object(N.jsx)(K,{messages:c,isLoading:s})]})})};!function(e){e.LOGIN="/login",e.CHAT="/chat",e.WELCOME="/"}(M||(M={}));var Y=[{path:M.LOGIN,exact:!0,component:U}],Q=[{path:M.WELCOME,exact:!0,component:H},{path:M.CHAT,exact:!0,component:X}],V=function(){return O((function(e){return e.auth})).isAuth?Object(N.jsxs)(o.d,{children:[Q.map((function(e){return Object(N.jsx)(o.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(N.jsx)(o.a,{to:M.WELCOME})]}):Object(N.jsxs)(o.d,{children:[Y.map((function(e){return Object(N.jsx)(o.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(N.jsx)(o.a,{to:M.LOGIN})]})},Z=n(267),$=function(){var e=Object(o.g)();return Object(N.jsx)("div",{style:{fontSize:24,color:"#fff",cursor:"pointer"},onClick:function(){return e.push(M.WELCOME)},children:"Planktoniks"})},ee=function(){var e=Object(o.g)(),t=O((function(e){return e.auth})),n=t.isAuth,r=t.user,a=C().logout;return Object(N.jsx)(i.a.Header,{children:Object(N.jsxs)(u.a,{justify:"space-between",children:[Object(N.jsx)($,{}),n?Object(N.jsxs)(u.a,{children:[Object(N.jsx)("div",{style:{color:"white",marginRight:8},children:r.username}),Object(N.jsx)(Z.a,{theme:"dark",mode:"horizontal",selectable:!1,children:Object(N.jsx)(Z.a.Item,{onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"},"1")})]}):Object(N.jsx)(Z.a,{style:{minWidth:"200px",justifyContent:"flex-end"},theme:"dark",mode:"horizontal",selectable:!1,children:Object(N.jsx)(Z.a.Item,{onClick:function(){return e.push(M.LOGIN)},children:"\u041b\u043e\u0433\u0438\u043d"},"1")})]})})},te=(n(258),function(){var e=Object(o.g)(),t=C(),n=t.setId,r=t.setName,a=t.setDescription,s=t.setError;return Object(N.jsx)(i.a.Sider,{width:200,className:"site-layout-background",children:Object(N.jsxs)(Z.a,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%",borderRight:0},children:[Object(N.jsx)(Z.a.Item,{onClick:function(){n("61420e2c341aae384410455a"),r("\u0427\u0430\u0442 \u0434\u043b\u044f \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432"),a("\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0447\u0430\u0442\u0435 \u043f\u0438\u0448\u0435\u043c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e \u0440\u0430\u0431\u043e\u0447\u0438\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u0438 \u0432\u0430\u0436\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0414\u043b\u044f \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u0444\u043b\u0443\u0434\u0438\u043b\u043a\u0430 :)"),s(""),e.push(M.CHAT)},children:"\u0420\u0430\u0431\u043e\u0442\u0430"},"1"),Object(N.jsx)(Z.a.Item,{onClick:function(){n("61420e35341aae384410455c"),r("\u0427\u0430\u0442 \u0434\u043b\u044f \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0438 \u0441\u043f\u043b\u043e\u0447\u0435\u043d\u0438\u044f"),a("\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u0441\u043a\u0443\u0447\u043d\u043e, \u043f\u0438\u0448\u0438\u0442\u0435, \u043d\u0435 \u0441\u0442\u0435\u0441\u043d\u044f\u0439\u0442\u0435\u0441\u044c!"),s(""),e.push(M.CHAT)},children:"\u0424\u043b\u0443\u0434\u0438\u043b\u043a\u0430"},"2")]})})}),ne=function(){var e=O((function(e){return e.auth})).isAuth,t=C().checkAuth;return Object(a.useEffect)((function(){t()}),[]),Object(N.jsxs)(i.a,{style:{overflow:"hidden"},children:[Object(N.jsx)(ee,{}),Object(N.jsxs)(i.a,{children:[e&&Object(N.jsx)(te,{}),Object(N.jsx)(i.a.Content,{children:Object(N.jsx)(V,{})})]})]})},re=n(61),ae=n(152),se={isAuth:!1,error:"",isLoading:!1,user:{}};var ce=n(154),oe={id:"",name:"",description:"",error:"",messages:[],isLoading:!1};var ie={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_AUTH:return Object(E.a)(Object(E.a)({},e),{},{isAuth:t.payload,isLoading:!1});case r.SET_USER:return Object(E.a)(Object(E.a)({},e),{},{user:t.payload});case r.SET_IS_LOADING:return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.payload});case r.SET_ERROR:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload,isLoading:!1});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.SET_ID:return Object(E.a)(Object(E.a)({},e),{},{id:t.payload});case k.SET_NAME:return Object(E.a)(Object(E.a)({},e),{},{name:t.payload});case k.SET_DESCRIPTION:return Object(E.a)(Object(E.a)({},e),{},{description:t.payload});case k.SET_ERROR:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload,isLoading:!1});case k.SET_IS_LOADING:return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.payload});case k.SET_MESSAGES:return Object(E.a)(Object(E.a)({},e),{},{messages:t.payload,isLoading:!1});case k.ADD_MESSAGE:return Object(E.a)(Object(E.a)({},e),{},{messages:[].concat(Object(ce.a)(e.messages),[t.payload])});case k.SET_EDIT_MESSAGE:return Object(E.a)(Object(E.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload.id?t.payload:e}))});case k.DELETE_MESSAGE:return Object(E.a)(Object(E.a)({},e),{},{messages:e.messages.filter((function(e){return e.id!==t.payload}))});default:return e}}},ue=Object(g.c)(ie),le=Object(g.d)(ue,Object(g.a)(ae.a));c.a.render(Object(N.jsx)(b.a,{store:le,children:Object(N.jsx)(re.a,{children:Object(N.jsx)(ne,{})})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.2a07a121.chunk.js.map