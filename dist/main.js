(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,":root {\n    --white: antiquewhite;\n    --yellow: goldenrod;\n    --black: rgb(48, 48, 48);\n    --grey: rgb(68, 68, 68);\n    --red: tomato;\n}\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    background-color: var(--black);\n}\n.wrapper {\n    display: flex;\n    flex-direction: row;\n}\n/* --- SIDEBAR --- */\n.sidebar {\n    background-color: var(--grey);\n    height: 900px;\n}\nh1 {\n    color: var(--white);\n}\n.btn {\n    font-size: 16px;\n    font-weight: bold;\n    background-color: var(--yellow);\n    color: var(--black);\n    display: inline-block;\n    padding: 8px 30px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.btn:hover {\n    transform: scale(0.95);\n}\n.header {\n    background-color: var(--black);\n    padding: 1.6rem;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n.sidebar .header {\n    background-color: var(--grey);\n}\n.header-title {\n    font-size: 1.4rem;\n    font-weight: bold;\n    margin: 10px 0;\n}\n.projects-form .form-control {\n    margin: 10px 0;\n}\n.projects-form input {\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n    padding: 8px;\n    font-size: 16px;\n    background-color: var(--white);\n}\n.projects-form input:focus {\n    outline: none;\n}\n.projects-form button {\n    width: 100%;\n}\n.projects-list {\n    padding: 1.6rem;\n}\n.projects-list input {\n    background-color: var(--grey);\n}\n.projects-item {\n    font-size: 1rem;\n    color: var(--white);\n    display: inline-flex;\n    align-items: center;\n    width: 100%;\n    margin: 16px 0;\n    cursor: pointer;\n}\n.projects-item:hover {\n    transform: scale(1.02);\n}\n.projects-item.active {\n    font-weight: bold;\n}\n.projects-item:first-child {\n    margin-top: 0;\n}\n.projects-color {\n    border: none;\n    width: 25px;\n    margin-left: auto;\n    cursor: pointer;\n}\n/* --- MAIN --- */\n.main {\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n    width: 100%;\n}\n.main::-webkit-scrollbar {\n    display: none;\n}\n.main .header {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n.main .tasks-header {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n.selected-project {\n    font-size: 1rem;\n    color: var(--white);\n}\n.delete-btn {\n    font-size: 14px;\n    font-weight: bold;\n    color: var(--red);\n    padding: 5px 10px;\n    margin-left: 20px;\n    border: 1px solid var(--white);\n    border-radius: 5px;\n    cursor: pointer;\n}\n.task-forms {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 10px;\n    width: 100%;\n}\n.task-btn {\n    margin: 20px;\n}\n.form-control, .submit-btn {\n    width: 350px;\n}\n/*\n.select-project {\n    width: 250px;\n}\n*/\n.submit-btn {\n    margin: 5px;\n}\n/* --- CREATE AND EDIT FORM --- */\n.create-task-form input, .edit-task-form input, .create-task-form select, .edit-task-form select {\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n    padding: 8px;\n    margin: 5px;\n    font-size: 16px;\n    background-color: var(--white);\n}\n.create-task-form input:focus, .edit-task-form input:focus, .create-task-form select:focus, .edit-task-form select:focus {\n    outline: none;\n}\n.create-task-form, .edit-task-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n}\n.create-task-form input, .edit-task-form input {\n    width: 350px;\n}\n/*\n.submit-btn {\n    width: 350px;\n    margin-bottom: 5px;\n}\n*/\n.create-task-form, .edit-task-form {\n    display: none;\n}\n/* --- CARDS --- */\n.cards-container {\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-auto-rows: max-content;\n    gap: 20px;\n    padding: 1.6rem;\n}\n.task {\n    background-color: antiquewhite;\n    color: var(--black);\n    border: 4px solid;\n    border-radius: 10px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n.task-tag {\n    font-size: 1rem;\n    padding: 0.5rem 2.5rem;\n    border-radius: 5px;\n    margin-bottom: 8px;\n}\n.task-description {\n    font-size: 1rem;\n    font-weight: 900;\n    margin: 20px 0 10px 0;\n    word-break: break-all;\n}\n.task-date, .task-priority {\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n.task-actions {\n    margin-top: auto;\n}\n.task-actions i {\n    font-size: 1rem;\n    margin-right: 1.6rem;\n    opacity: 0.5;\n    cursor: pointer;\n}\n.fa-edit:hover {\n    color: green;\n    transform: scale(1.2);\n}\n.fa-trash-alt:hover {\n    color: red;\n    transform: scale(1.2);\n}",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,t.d({},{dt:()=>D,Ej:()=>N,vB:()=>z});var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),d=t.n(l),p=t(540),u=t.n(p),f=t(113),m=t.n(f),g=t(208),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(g.A,v),g.A&&g.A.locals&&g.A.locals;const y="LOCAL_STORAGE_PROJECTS_KEY",h="LOCAL_STORAGE_TASKS_KEY",b="LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY",x=document.querySelector("[data-new-project-form]"),k=document.querySelector("[data-new-project-input]"),w=document.querySelector("[data-projects-list]"),j=document.querySelector("[data-open-task-form]"),S=document.querySelector("[data-new-task-form]"),E=document.querySelector("[data-new-task-select]"),L=document.querySelector("[data-new-task-input]"),T=document.querySelector("[data-new-task-date]"),I=document.querySelector("[data-task-priority]"),$=document.querySelector("[data-edit-task-form]"),A=document.querySelector("[data-edit-task-select]"),_=document.querySelector("[data-edit-task-input]"),C=document.querySelector("[data-edit-task-date]"),M=document.querySelector("[data-edit-task-priority]"),q=document.querySelector("[data-cards]"),O=document.querySelector("[data-selected-project]");let D=JSON.parse(localStorage.getItem(y))||[],z=JSON.parse(localStorage.getItem(h))||[],N=localStorage.getItem(b);x.addEventListener("submit",(e=>{e.preventDefault();const n=k.value;n&&n.trim().length?(D.push({_id:Date.now().toString(),project:n,color:G()}),k.value="",H()):alert("Please enter a new project")})),j.addEventListener("click",(()=>{S.style.display="flex"})),S.addEventListener("submit",(e=>{e.preventDefault(),z.push({_id:Date.now().toString(),projectId:E.value,task:L.value,date:T.value,priority:I.value}),E.value="",L.value="",T.value="",I.value="",S.style.display="none",H()}));let P=null;function H(){localStorage.setItem(y,JSON.stringify(D)),localStorage.setItem(h,JSON.stringify(z)),localStorage.setItem(b,N),R()}function R(){if(J(w),J(E),J(A),J(q),w.innerHTML+='<li class="projects-item">All projects</li>',D.forEach((({_id:e,project:n,color:t})=>{w.innerHTML+=`<li class="projects-item" data-project-id=${e}>${n}<input type="color" value=${t} class="projects-color"></li>`})),E.innerHTML+='<option value="">All Projects</option>',A.innerHTML+='<option value="">All Projects</option>',D.forEach((({_id:e,project:n})=>{E.innerHTML+=`<option value=${e}>${n}</option>`,A.innerHTML+=`<option value=${e}>${n}</option>`})),function(){let e=z;N&&"null"!=N&&(e=z.filter((e=>e.projectId===N))),e.forEach((({_id:e,projectId:n,task:t,date:r,priority:o})=>{const{color:a,project:i}=D.find((({_id:e})=>e===n)),s=function(e){let n=e.replace("#","");3===n.length&&(n=`${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);return`rgba(${parseInt(n.substring(0,2),16)},${parseInt(n.substring(2,4),16)},${parseInt(n.substring(4,6),16)},0.2)`}(a);q.innerHTML+=`\n            <div class="task" style="border-color: ${a};">\n                <div class="task-tag" style="background-color: ${s}; color: ${a};">${i}</div>\n                <p class="task-description">${t}</p>\n                <p class="task-date">Due date: <br>${r}</p>\n                <p class="task-priority">Priority: ${o}</p> \n                <div class="task-actions">\n                    <i class="far fa-edit" data-edit-task=${e}></i>\n                    <i class="far fa-trash-alt" data-delete-task=${e}></i>\n                </div>\n            </div>\n        `}))}(),N&&"null"!==N){const e=D.find((e=>e._id===N));O.innerHTML=`Selected project: <strong>${e.project}</strong><span class="delete-btn selected-project">Delete Project</span>`}else O.innerHTML="Selected project: <strong>All Projects</strong>"}function J(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function G(){for(var e=Math.round(16777215*Math.random()).toString(16);e.length<6;)e="0"+e;return`#${e}`}$.addEventListener("submit",(e=>{e.preventDefault(),P.projectId=A.value,P.task=_.value,P.date=C.value,P.priority=M.value,$.style.display="none",S.style.display="flex",$.value="",_.value="",C.value="",M.value="",S.style.display="none",H()})),q.addEventListener("click",(e=>{if("fa-trash-alt"===e.target.classList[1]){const n=z.findIndex((n=>n._id===e.target.dataset.editTask));z.splice(n,1),H()}"fa-edit"===e.target.classList[1]&&(S.style.display="none",$.style.display="flex",P=z.find((n=>n._id===e.target.dataset.editTask)),A.value=P.projectId,_.value=P.task,C.value=P.date,M.value=P.priority)})),w.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(N=e.target.dataset.projectId?e.target.dataset.projectId:null,H())})),w.addEventListener("change",(e=>{if("input"===e.target.tagName.toLowerCase()){const n=e.target.value,t=e.target.parentElement.dataset.projectId;D.find((e=>e._id===t)).color=n,H()}})),O.addEventListener("click",(e=>{"span"===e.target.tagName.toLowerCase()&&(D=D.filter((e=>e._id!=N)),z=z.filter((e=>e.projectId!=N)),N=null,H())})),window.addEventListener("load",R)})();