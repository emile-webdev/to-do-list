(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,":root {\n    --white: antiquewhite;\n    --yellow: goldenrod;\n    --black: rgb(48, 48, 48);\n    --red: tomato;\n}\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    background-color: var(--black);\n}\n.main-title {\n    text-align: center;\n}\nh1 {\n    color: var(--white);\n}\n.app {\n    display: flex;\n}\n.btn {\n    font-weight: bold;\n    background-color: var(--yellow);\n    color: var(--black);\n    display: inline-block;\n    padding: 10px 30px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.btn:hover {\n    transform: scale(0.95);\n}\n.header {\n    padding: 1.6rem;\n    position: sticky;\n    top: 0;\n}\n.header-title {\n    font-size: 1.4rem;\n    font-weight: bold;\n    margin: 10px 0;\n}\n.currently-viewing {\n    font-size: 1rem;\n    color: var(--white);\n}\n.currently-viewing > span {\n    font-weight: bold;\n    color: var(--red);\n    cursor: pointer;\n}\n.sidebar-form .form-control {\n    margin: 10px 0;\n}\n.sidebar-form input {\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n    padding: 8px;\n    font-size: 16px;\n    background-color: var(--white);\n}\n.sidebar-form input:focus {\n    outline: none;\n}\n.sidebar-form button {\n    width: 100%;\n}\n.sidebar-list {\n    padding: 1.6rem;\n}\n.sidebar-item {\n    font-size: 1rem;\n    color: var(--white);\n    display: inline-flex;\n    align-items: center;\n    width: 100%;\n    margin: 16px 0;\n    cursor: pointer;\n}\n.sidebar-item.active {\n    font-weight: bold;\n}\n.sidebar-item:first-child {\n    margin-top: 0;\n}\n.sidebar-color {\n    border: none;\n    width: 25px;\n    margin-left: auto;\n    cursor: pointer;\n}\n/* --- MAIN --- */\n.main {\n    overflow-y: scroll;\n    width: 100%;\n}\n.main::-webkit-scrollbar {\n    display: none;\n}\n.main .header {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n.main .tasks-header {\n    display: flex;\n    flex-direction: column;\n}\n.todo-forms {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 10px;\n    width: 80%;\n}\n/* --- CREATE AND EDIT FORM --- */\n.create-todo-form input, .edit-todo-form input, .create-todo-form select, .edit-todo-form select {\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n    padding: 8px;\n    margin: 5px;\n    font-size: 16px;\n    background-color: var(--white);\n}\n.create-todo-form input:focus, .edit-todo-form input:focus, .create-todo-form select:focus, .edit-todo-form select:focus {\n    outline: none;\n}\n.create-todo-form, .edit-todo-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    flex: 0.8;\n}\n.create-todo-form input, .edit-todo-form input {\n    width: 350px;\n}\n.task-btn {\n    width: 150px;\n    margin-bottom: 5px;\n}\n.edit-todo-form {\n    display: none;\n}\n/* --- CARDS --- */\n.todos-container {\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-auto-rows: max-content;\n    gap: 20px;\n    padding: 1.6rem;\n}\n.todo {\n    background-color: antiquewhite;\n    color: var(--black);\n    border-top: 6px solid;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n.todo-tag {\n    font-size: 1rem;\n    padding: 0.5rem 2.5rem;\n    border-radius: 5px;\n    margin-bottom: 8px;\n}\n.todo-description {\n    font-size: 1rem;\n    margin: 1rem 0 2rem 0;\n    word-break: break-all;\n}\n.todo-actions {\n    margin-top: auto;\n}\n.todo-actions i {\n    font-size: 1rem;\n    margin-right: 1.6rem;\n    opacity: 0.5;\n    cursor: pointer;\n}",""]);const d=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var s=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),d=t(659),s=t.n(d),c=t(56),l=t.n(c),p=t(540),u=t.n(p),f=t(113),m=t.n(f),b=t(208),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(b.A,v),b.A&&b.A.locals&&b.A.locals})();