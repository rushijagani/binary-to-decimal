(this["webpackJsonpbinary-to-decimal"]=this["webpackJsonpbinary-to-decimal"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/facebook.422e7665.svg"},function(e,t,a){e.exports=a.p+"static/media/github.a112a001.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.91a8e68d.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.89dcd695.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.88c38bdc.svg"},function(e,t,a){e.exports=a.p+"static/media/wordpress.4dab8248.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.bfe8a6b5.svg"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),i=(a(16),a(17),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__container"},r.a.createElement("h2",null," Binary To Decimal  | Decimal To Binary"),r.a.createElement("span",null,"Converter")))}),l=a(1),s=function(e){for(var t=0,a=0;e>0;){e%10&&(t+=Math.pow(2,a)),a++,e=Math.floor(e/10)}return t},m=(a(18),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),m=i[0],u=i[1],f=Object(n.useState)(!1),h=Object(l.a)(f,2),p=h[0],g=h[1],d=Object(n.useState)(!1),E=Object(l.a)(d,2),b=E[0],v=E[1];return r.a.createElement("div",{className:"converter"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(s(a))}},r.a.createElement("input",{type:"text",placeholder:"Binary",onChange:function(e){var t=e.target.value;v(!1),isNaN(t)?v(!0):(g(!/^[0-1]+$/g.test(t)&&""!==t),""!==t?(o(t),u(s(t))):(o(""),u("")))},value:a}),r.a.createElement("input",{type:"text",placeholder:"Decimal",onChange:function(e){var t=e.target.value;v(!1),isNaN(t)?v(!0):""!==t?(u(t),o(function(e){for(var t=0,a=0;e>=1;){e%2&&(t+=Math.pow(10,a)),a++,e=Math.floor(e/2)}return t}(t))):(u(""),o(""))},value:p?"":m,disabled:p}),r.a.createElement("span",{className:"error-msg ".concat(p||b?"fadeIn":""," ")},p&&"Enter only Binary value (either 0 or 1)",b&&"Enter only Numbers")))}),u=a(4),f=a.n(u),h=a(5),p=a.n(h),g=a(6),d=a.n(g),E=a(7),b=a.n(E),v=a(8),w=a.n(v),j=a(9),k=a.n(j),y=a(10),x=a.n(y),N=(a(19),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,r.a.createElement("h4",null,"Follow Me"),r.a.createElement("a",{href:"https://github.com/rushijagani",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:p.a,alt:"github"})),r.a.createElement("a",{href:"https://twitter.com/rushijagani_rj",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:w.a,alt:"twitter"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/rushi-jagani-99a37241/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:b.a,alt:"linkedin"})),r.a.createElement("a",{href:"https://www.facebook.com/rushi.jagani",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:f.a,alt:"facebook"})),r.a.createElement("a",{href:"https://www.instagram.com/rushi.jagani.rj/?hl=en",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:d.a,alt:"instagram"})),r.a.createElement("a",{href:"https://rushijagani.wordpress.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:k.a,alt:"wordpress"})),r.a.createElement("a",{href:"mailto:rushi.jagani@ymail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:x.a,alt:"mail"}))))});a(20);var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.1ead0fd4.chunk.js.map