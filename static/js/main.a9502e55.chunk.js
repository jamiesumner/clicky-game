(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,src:"https://i.ibb.co/nDrtMCr/bag.png",name:"bag",clicked:!1},{id:2,src:"https://i.ibb.co/W3qDLPz/bike.png",name:"bike",clicked:!1},{id:3,src:"https://i.ibb.co/7v0XLjB/flowers.png",name:"flowers",clicked:!1},{id:4,src:"https://i.ibb.co/WWtXg4k/globe.png",name:"globe",clicked:!1},{id:5,src:"https://i.ibb.co/QmDBYqW/luggage.png",name:"luggage",clicked:!1},{id:6,src:"https://i.ibb.co/CtssnTW/outfit.png",name:"outfit",clicked:!1},{id:7,src:"https://i.ibb.co/fQBJL05/poke.png",name:"poke",clicked:!1},{id:8,src:"https://i.ibb.co/7CzQsCj/scooter.png",name:"scooter",clicked:!1},{id:9,src:"https://i.ibb.co/020HZ6L/shell.png",name:"shell",clicked:!1},{id:10,src:"https://i.ibb.co/ysfMyD6/sunnies.png",name:"sunnies",clicked:!1},{id:11,src:"https://i.ibb.co/Nm8Xnsr/swimsuit.png",name:"swimsuit",clicked:!1},{id:12,src:"https://i.ibb.co/T1n3MHP/wine.png",name:"wine",clicked:!1}]},15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(3),i=c.n(r),s=c(4),o=c(5),l=c(7),d=c(6),m=c(8);var u=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"image-container",key:e.id,onClick:function(){return e.handleClick(e.id)}},n.a.createElement("img",{src:e.src,alt:e.name})))};var p=function(e){return n.a.createElement("div",{className:"scores"},n.a.createElement("p",null,"Score: ",e.currentScore," | Top Score: ",e.topScore))},b=c(1),k=function(e){function t(){var e,c;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(c=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={currentScore:0,topScore:0,clicked:[],images:b},c.shuffle=function(e){for(var t,c,a=e.length;0!==a;)c=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[c],e[c]=t;return e},c.handleClick=function(e){c.state.clicked===[]&&c.setState({clicked:b}),c.state.clicked.includes(e)?(console.log(e),c.setState({currentScore:0}),c.setState({clicked:[]}),alert("You've already clicked this! You lose.")):(c.setState({currentScore:c.state.currentScore+1}),c.state.clicked.push(e)),c.state.currentScore>=c.state.topScore&&c.setState({topScore:c.state.currentScore}),12===c.state.currentScore&&(c.setState({currentScore:0}),c.setState({clicked:[]}),alert("You win!")),c.shuffle(b)},c}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar bg-primary"},n.a.createElement("div",{className:"navbar-brand"},"Clicky Game!")),n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"header-container"},n.a.createElement("h1",{className:"display-4"},"Clicky Game!"),n.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")),n.a.createElement("div",{className:"scores"},n.a.createElement(p,{currentScore:this.state.currentScore,topScore:this.state.topScore}))),n.a.createElement("div",{className:"image-container"},n.a.createElement("div",{className:"row"},b.map(function(t){return n.a.createElement(u,{handleClick:e.handleClick,src:t.src,id:t.id})}))))}}]),t}(a.Component);i.a.render(n.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,c){e.exports=c(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a9502e55.chunk.js.map