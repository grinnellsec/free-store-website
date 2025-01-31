(()=>{"use strict";var n,e,t,r,o={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'html {\n  --bright-brown: rgb(240, 234, 210);\n  --light-green: rgb(221, 229, 182);\n  --dark-green: rgb(77, 87, 54);\n  --light-brown: rgb(169, 132, 103);\n  --dark-brown: rgb(108, 88, 76);\n  --outline-brown: rgb(61, 48, 48);\n}\nbody {\n  margin: 0;\n  background: var(--light-brown);\n  background-size: 100px;\n}\n.banner {\n  padding-left: 20px;\n  height: 1.5em;\n  margin: .75em 1em;\n  background: var(--dark-brown);\n  border-radius: 1em;\n  color: var(--bright-brown);\n  align-content: center;\n  border: 1.5px solid var(--outline-brown);\n}\nspan.banner {\n  padding: 0;\n  font-size: 13px;\n  font-family: "Lucida Console", "Courier New", monospace;\n  font-style: italic;\n  vertical-align: bottom;\n  display: table-cell;\n  border: none;\n}\n.row{\n  display: table;\n}\nul {\n  margin: 0 auto 20px auto;\n  font-size: 0;\n  padding: 5px 0px;\n  background-color: var(--dark-brown);\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 10px;\n}\nli {\n  display: inline-block;\n  box-sizing: border-box;\n  vertical-align: top;\n  margin: 5px 0px 5px 10px;\n  width: 130px;\n  height: 150px;\n  border-radius: 5px;\n  background-color: var(--light-brown);\n  border: 1.5px solid var(--outline-brown);\n  box-shadow: 1px 1px 3px var(--outline-brown);\n}\n.item-title {\n  width: 100%;\n  margin: 2px 5px 0px 5px;\n  padding: 4px 10px 2px 10px;\n  font-size: 11px;\n  font-family: \'Courier New\', Courier, monospace;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 7px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  color: var(--bright-brown);\n  background-color: var(--outline-brown);\n}\n.item-image {\n  background-image: none;\n  cursor: pointer;\n  background-size: cover;\n  box-sizing: border-box;\n  margin: 0px 10px 0px 10px;\n  width: 107px;\n  height: 80px;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 10px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  background-color: var(--dark-brown);\n  font-family: "Lucida Console", "Courier New", monospace;\n  font-style: italic;\n  color: var(--bright-brown);\n  font-size: 8px;\n  padding: 12px 24px;\n  box-shadow: inset 1px 1px 3px var(--outline-brown);\n}\n.item-div {\n  display: flex;\n  margin: 4px 5px;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 4px;\n}\n.item-button {\n  cursor: pointer;\n  background-size: cover;\n  box-sizing: border-box;\n  width: 100%;\n  height: 23px;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 20px;\n  box-shadow: .75px .75px 1px var(--outline-brown);\n  background-color: var(--light-brown);  \n  transition: 175ms ease-in-out;\n  font-family: "Lucida Console", "Courier New", monospace;\n  font-weight: bold;\n  color: var(--outline-brown);\n  font-size: 9px;\n  padding: 2px 10px 0 10px;\n}\n.item-button:hover {\n  background-color: var(--outline-brown);\n  color: var(--bright-brown);\n}\n.item-button:active {\n  transform: translate(.75px, .75px);\n  box-shadow: none;\n}\n.popup {\n  display: none;\n  position: fixed;\n  left: 50%;\n  width: 300px;\n  height: 375px;\n  transform: translate(-50%, 20%);\n  margin-inline: auto;\n  z-index: 9;\n  border: 5px solid var(--outline-brown);\n  border-radius: 10px;\n  box-shadow: .1px .1px 2px var(--outline-brown);\n  background-color: rgb(86, 67, 67);\n  font-size: 12px; /* reset the text size */\n}\n.popup-title {\n  width: 100%;\n  margin: 2px 5px 0px 5px;\n  padding: 4px 10px 2px 10px;\n  font-size: 20px;\n  font-family: \'Courier New\', Courier, monospace;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 7px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  color: var(--bright-brown);\n  background-color: var(--outline-brown);\n}\n.popup-exit {\n  cursor: pointer;\n  margin-top: 2px;\n  margin-right: 5px;\n  padding: 2px 15px 3px 13px;\n  font-size: 20px;\n  font-family: \'Courier New\', Courier, monospace;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 7px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  color: var(--bright-brown);\n  background-color: var(--outline-brown);\n}\n\n@media screen and (max-width: 289px) { ul { width: 150px; } }\n@media screen and (min-width: 290px) and (max-width: 429px) { ul { width: 290px; } }\n@media screen and (min-width: 430px) and (max-width: 590px) { ul { width: 430px; } }\n@media screen and (min-width: 590px) and (max-width: 730px) { ul { width: 570px; } }\n@media screen and (min-width: 730px) and (max-width: 870px) { ul { width: 710px; } }\n@media screen and (min-width: 870px) and (max-width: 1010px) { ul { width: 850px; } }\n@media screen and (min-width: 1010px) and (max-width: 1150px) { ul { width: 990px; } }\n@media screen and (min-width: 1150px) { ul { width: 1130px; } }',""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},511:(n,e,t)=>{var r=t(72),o=t.n(r),i=t(825),a=t.n(i),s=t(659),d=t.n(s),p=t(56),u=t.n(p),c=t(540),l=t.n(c),h=t(113),m=t.n(h),f=t(208),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),o()(f.A,b),f.A&&f.A.locals&&f.A.locals},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],p=r.base?d[0]+r.base:d[0],u=i[p]||0,c="".concat(p," ").concat(u);i[p]=u+1;var l=t(c),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(h);else{var m=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:c,updater:m,references:1})}a.push(c)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),p=0;p<i.length;p++){var u=t(i[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},44:(n,e,t)=>{t.a(n,(async(n,e)=>{try{var r=t(626),o=(t(511),t(289));const i=document.getElementById("item-list"),a=new r.A;let s=await a.from("items").find();async function d(n,e){let t=new DocumentFragment,r=document.createElement("li");const o=await fetch("item.html"),a=await o.text();r.insertAdjacentHTML("beforeend",a),t.appendChild(r),r.childNodes[1].firstChild.setAttribute("onclick","showPopup("+String(e)+")"),r.firstChild.firstChild.textContent=n,i.appendChild(t)}function p(){for(let n=s.data.length-1;n>=0;n--)d(s.data[n].name,n)}async function u(){s=await a.from("items").find(),i.replaceChildren(),p()}window.showPopup=n=>{document.getElementById("popup").style.display="block";let e=s.data[n].name;document.getElementById("popup-title").textContent=e},window.hidePopup=n=>{document.getElementById("popup").style.display="none"},window.addItem=(n,e)=>{d(n,e)},window.setItems=()=>{p()},window.refreshItems=()=>{u()};let c=document.createElement("link");c.rel="shortcut icon",c.href=o,document.head.appendChild(c),u(),console.log("running!"),console.log(s.data),e()}catch(l){e(l)}}),1)},289:(n,e,t)=>{n.exports=t.p+"d8a1f5780bab01e1ae53.png"},626:(n,e,t)=>{var r,o,i;t.d(e,{A:()=>d}),function(n){n.String="string",n.Text="text",n.RichText="richText",n.Number="number",n.Link="link",n.Money="money",n.Date="date",n.Timestamp="timestamp",n.Email="email",n.Boolean="boolean",n.Password="password",n.Choice="choice",n.Location="location",n.File="file",n.Image="image"}(r||(r={})),function(n){n.Equal="_eq",n.NotEqual="_neq",n.GreaterThan="_gt",n.GreaterThanOrEqual="_gte",n.LessThan="_lt",n.LessThanOrEqual="_lte",n.Like="_like",n.In="_in"}(o||(o={})),function(n){n.Equal="=",n.NotEqual="!=",n.GreaterThan=">",n.GreaterThanOrEqual=">=",n.LessThan="<",n.LessThanOrEqual="<=",n.Like="like",n.In="in"}(i||(i={}));const a={[i.Equal]:o.Equal,[i.NotEqual]:o.NotEqual,[i.GreaterThan]:o.GreaterThan,[i.GreaterThanOrEqual]:o.GreaterThanOrEqual,[i.LessThan]:o.LessThan,[i.LessThanOrEqual]:o.LessThanOrEqual,[i.Like]:o.Like,[i.In]:o.In};var s=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{d(r.next(n))}catch(n){i(n)}}function s(n){try{d(r.throw(n))}catch(n){i(n)}}function d(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}d((r=r.apply(n,e||[])).next())}))};const d=class{constructor(n="http://localhost:1111"){this.isSingleEntity=!1,this.headers={"Content-Type":"application/json"},this.queryParams={},this.baseUrl=n+"/api",this.slug=""}from(n){return this.slug=n,this.isSingleEntity=!1,this.queryParams={},this}single(n){return this.slug=n,this.isSingleEntity=!0,this.queryParams={},{get:()=>s(this,void 0,void 0,(function*(){return this.fetch({path:`/singles/${this.slug}`})})),update:n=>s(this,void 0,void 0,(function*(){return this.fetch({path:`/singles/${this.slug}`,method:"PUT",body:n})}))}}find(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}`,queryParams:Object.assign(Object.assign({},this.queryParams),n)})}))}findOneById(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`})}))}create(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}`,method:"POST",body:n})}))}update(n,e){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`,method:"PUT",body:e})}))}patch(n,e){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`,method:"PATCH",body:e})}))}delete(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`,method:"DELETE"}).then((()=>n))}))}where(n){const e=Object.values(i).reverse().find((e=>n.includes(` ${e} `)));if(!e)throw new Error(`Invalid where clause. Where clause must include one of the following operators: ${Object.values(i).join(", ")}.`);const[t,r]=n.split(e).map((n=>n.trim())),o=a[e];return this.queryParams[t+o]=r,this}andWhere(n){return this.where(n)}orderBy(n,e){return this.queryParams.orderBy=n,this.queryParams.order=(null==e?void 0:e.desc)?"DESC":"ASC",this}with(n){return this.queryParams.relations=n.join(","),this}login(n,e,t){return s(this,void 0,void 0,(function*(){const r=yield this.fetch({path:`/auth/${n}/login`,method:"POST",body:{email:e,password:t}});return this.headers.Authorization=`Bearer ${r.token}`,!0}))}logout(){delete this.headers.Authorization}signup(n,e,t){return s(this,void 0,void 0,(function*(){const r=yield this.fetch({path:`/auth/${n}/signup`,method:"POST",body:{email:e,password:t}});return this.headers.Authorization=`Bearer ${r.token}`,!0}))}me(){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/auth/${this.slug}/me`})}))}fetch(n){return s(this,arguments,void 0,(function*({path:n,method:e,body:t,queryParams:r}){const o=new URL(this.baseUrl+n);return Object.entries(r||[]).forEach((([n,e])=>{null!=e&&o.searchParams.append(n,e.toString())})),fetch(o.toString(),{headers:this.headers,method:e||"GET",body:t?JSON.stringify(t):void 0}).then((n=>n.json()))}))}upload(n,e){return s(this,void 0,void 0,(function*(){const t=new FormData;return t.append("file",e),t.append("entity",this.slug),t.append("property",n),yield fetch(`${this.baseUrl}/upload/file`,{method:"POST",body:t,headers:{Authorization:this.headers.Authorization}}).catch((n=>(console.error(n),{}))),!0}))}uploadImage(n,e){return s(this,void 0,void 0,(function*(){const t=new FormData;return t.append("image",e),t.append("entity",this.slug),t.append("property",n),fetch(`${this.baseUrl}/upload/image`,{method:"POST",body:t,headers:{Authorization:this.headers.Authorization}}).then((n=>n.json())).catch((n=>(console.error(n),{})))}))}imageUrl(n,e){return`${this.baseUrl.replace(/\/api$/,"")}/storage/${n[e]}`}}}},i={};function a(n){var e=i[n];if(void 0!==e)return e.exports;var t=i[n]={id:n,exports:{}};return o[n](t,t.exports,a),t.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=n=>{n&&n.d<1&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},a.a=(o,i,a)=>{var s;a&&((s=[]).d=-1);var d,p,u,c=new Set,l=o.exports,h=new Promise(((n,e)=>{u=e,p=n}));h[e]=l,h[n]=n=>(s&&n(s),c.forEach(n),h.catch((n=>{}))),o.exports=h,i((o=>{var i;d=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[n])return o;if(o.then){var i=[];i.d=0,o.then((n=>{a[e]=n,r(i)}),(n=>{a[t]=n,r(i)}));var a={};return a[n]=n=>n(i),a}}var s={};return s[n]=n=>{},s[e]=o,s})))(o);var a=()=>d.map((n=>{if(n[t])throw n[t];return n[e]})),p=new Promise((e=>{(i=()=>e(a)).r=0;var t=n=>n!==s&&!c.has(n)&&(c.add(n),n&&!n.d&&(i.r++,n.push(i)));d.map((e=>e[n](t)))}));return i.r?p:a()}),(n=>(n?u(h[t]=n):p(l),r(s)))),s&&s.d<0&&(s.d=0)},a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;a.g.importScripts&&(n=a.g.location+"");var e=a.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=n})(),a.nc=void 0,a(44)})();