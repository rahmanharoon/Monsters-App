(this["webpackJsonpmonster-web-app"]=this["webpackJsonpmonster-web-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(15),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster404",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.username})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.onSearchHandler;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchFeild:t.target.value})},e.state={monsters:[],searchFeild:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchFeild,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(m,{placeholder:"Search For Monsters",onSearchHandler:this.handleChange}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(r.Component);o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.87b02a06.chunk.js.map