(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),i=(a(23),a(1));var c=function(){function e(){document.querySelector(".bar").classList.toggle("opened")}return document.addEventListener("scroll",function(e){if(window.screen.width<768&&window.scrollY>690)document.querySelector(".gotop").classList.add("display"),document.querySelector(".navbar").classList.add("navopened");else if(window.screen.width>768&&window.scrollY>220)document.querySelector(".gotop").classList.add("display"),document.querySelector(".navbar").classList.add("navopened");else{var t=document.querySelector(".navbar");document.querySelector(".gotop").classList.remove("display"),t.classList.remove("navopened")}}),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"logo"},r.a.createElement(i.Link,{spy:!0,smooth:!0,duration:1e3,to:"headerbg",style:{cursor:"pointer"}},"Eternal Cloud Solutions")),r.a.createElement("ul",{className:"bar"},r.a.createElement("li",null,r.a.createElement(i.Link,{onClick:e,activeClass:"active",spy:!0,smooth:!0,duration:1e3,to:"headerbg"},"Home")),r.a.createElement("li",null,r.a.createElement(i.Link,{onClick:e,activeClass:"active",to:"services",spy:!0,smooth:!0,duration:1e3},"Services")),r.a.createElement("li",null,r.a.createElement(i.Link,{onClick:e,to:"about-scroll",spy:!0,smooth:!0,duration:1e3,activeClass:"active"},"About")),r.a.createElement("li",null,r.a.createElement(i.Link,{onClick:e,to:"contact",spy:!0,smooth:!0,duration:1e3,activeClass:"active"},"Contact"))),r.a.createElement("div",{className:"button",onClick:e},r.a.createElement("div",{className:"burger"}),r.a.createElement("div",{className:"burger"}),r.a.createElement("div",{className:"burger"})))))};var s=function(){return r.a.createElement("header",null,r.a.createElement("video",{src:"/video.mp4",loop:!0,autoPlay:!0,muted:!0}),r.a.createElement("h1",null,"Eternal Cloud Solutions"),r.a.createElement("div",{className:"row"}),r.a.createElement("div",{className:"headerbg"}))};var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"5rem",width:"100%",height:"10px"},className:"about-scroll"}),r.a.createElement("div",{className:"container about"},r.a.createElement("h2",{className:"main-title about-h2 text-center"},"ABOUT"),r.a.createElement("p",{className:"main-p text-center"},"Our team goes out of their way to satisfy the needs of our clients and they personally ensure that our clients are happy with the final output. We at Eternal are always keen on staying on the top of our game. Hence we have a dedicated in-house team of research experts who are constantly looking out for new updates and come up with a new approach to our marketing tactics."),r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"about",src:"../img/img1.png",className:"img-fluid"}))))};var m=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:"card-img",src:"../img/"+e.img,className:"text-center img-fluid"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"card-title"},e.title)),r.a.createElement("div",{className:"p-3"},r.a.createElement("p",{className:"card-text"},e.text)))};var d=function(){return r.a.createElement("div",{className:"container services"},r.a.createElement("h2",{className:"main-title text-center"},"SERVICES"),r.a.createElement("div",{className:"card-cover"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mb-2"},r.a.createElement(m,{title:"Web Development",img:"card1.png",text:"Web design and web based application development."})),r.a.createElement("div",{className:"col-md-4 mb-2"},r.a.createElement(m,{title:"Salesforce Solutions",img:"card2.png",text:"Experienced in making end to end salesforce solutions."})),r.a.createElement("div",{className:"col-md-4 mb-2"},r.a.createElement(m,{title:"Social Media Marketing",img:"card3.png",text:"Team with innovative ways to drive traffic to your business both online and offline."}))))))},h=a(14);function f(){f=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),l=new x(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return S()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var i=b(l,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=s(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}(e,a,l),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var u={};function m(){}function d(){}function h(){}var p={};i(p,r,function(){return this});var v=Object.getPrototypeOf,E=v&&v(v(k([])));E&&E!==t&&a.call(E,r)&&(p=E);var y=h.prototype=m.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;this._invoke=function(r,o){function l(){return new t(function(n,l){!function n(r,o,l,i){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,l,i)},function(e){n("throw",e,l,i)}):t.resolve(m).then(function(e){u.value=e,l(u)},function(e){return n("throw",e,l,i)})}i(c.arg)}(r,o,n,l)})}return n=n?n.then(l,l):l()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function k(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=h,i(y,"constructor",h),i(h,"constructor",d),d.displayName=i(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),i(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new w(c(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then(function(e){return e.done?e.value:l.next()})},g(y),i(y,l,"Generator"),i(y,r,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),L(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;L(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var p=function(){function e(){return(e=Object(h.a)(f().mark(function e(t){var a,n,r,o,l;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(window),t.preventDefault(),a=t.target.name.value,n=t.target.email.value,r=t.target.number.value,o=t.target.message.value,l={name:a,email:n,message:o,number:r},window.emailjs.send("service_8zifnyg","template_e7hqvog",l).then(function(e){alert("mail sent successfully")}).catch(function(e){console.log(e),alert("Mail could not be sent please try again!")});case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",{className:"container contact",id:"form"},r.a.createElement("form",{onSubmit:function(t){return e.apply(this,arguments)}},r.a.createElement("h2",null,"CONTACT"),r.a.createElement("input",{type:"text",id:"name",placeholder:"Name",name:"name",required:!0}),r.a.createElement("input",{type:"email",id:"email",placeholder:"Email Id",email:"email",required:!0}),r.a.createElement("input",{type:"text",id:"phone",placeholder:"Phone no.",name:"number"}),r.a.createElement("textarea",{id:"message",rows:"4",name:"message",placeholder:"How can we help you?"}),r.a.createElement("button",{type:"submit"},"Send")))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(d,null),r.a.createElement(u,null),r.a.createElement(p,null)))};var E=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"side1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h1",{className:"logo"},"Eternal Cloud Solutions "),r.a.createElement("p",{className:"footer-text"},"Building on Trust")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("p",{className:"footer-title"},"Important Link"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.Link,{spy:!0,smooth:!0,duration:1e3,to:"headerbg"}," Home ")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"services",spy:!0,smooth:!0,duration:1e3}," Services ")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"about-scroll",spy:!0,smooth:!0,duration:1e3},"About Us  ")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"contact",spy:!0,smooth:!0,duration:1e3}," Contact  ")))))),r.a.createElement("div",{className:"side2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("p",{className:"footer-title"},"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.Link,{to:"#"},"eternalcloudservices@gmail.com")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"#"},"+91 9988414815")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("p",{className:"footer-title"},"Social Media"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/company/eternal-cloud-services/"}," Linkedin")))))))),r.a.createElement("button",{onClick:function(){return i.animateScroll.scrollToTop(2500)},src:"",className:"gotop"},r.a.createElement("i",{className:"fas fa-level-up-alt"})))};var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(s,null),r.a.createElement(v,null),r.a.createElement(E,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.e29d6b04.chunk.js.map