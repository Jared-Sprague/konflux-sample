import{a as f}from"./chunk-W6C5CINH.js";import{d as _}from"./chunk-TTPYXTW4.js";_();function v(g,e,t=!1){var s;return function(){var r=this,i=arguments,d=function(){s=null,t||g.apply(r,i)},h=t&&!s;clearTimeout(s),s=setTimeout(d,e),h&&g.apply(r,i)}}var p=class extends f{static get version(){return"0.0.19"}get html(){return`<style>*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;width:auto;width:var(--rh-table--wrappers--width,auto)}:host([hidden]){display:none}:host(.rh-table--expanded-vertically){--rh-table--maxHeight:max-content}#wrapper{overflow:auto;width:auto;width:var(--rh-table--wrappers--width,auto);max-width:100%;max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content;max-height:var(--rh-table--maxHeight,-webkit-max-content);max-height:var(--rh-table--maxHeight,-moz-max-content);max-height:var(--rh-table--maxHeight,max-content);scrollbar-color:#8e8e8e #d6d6d6}#wrapper::-webkit-scrollbar{width:.625rem;height:.625rem}#wrapper::-webkit-scrollbar,#wrapper::-webkit-scrollbar-track{background-color:#d6d6d6}#wrapper::-webkit-scrollbar-thumb{background-color:#8e8e8e}#wrapper.table-full-screen{position:fixed;top:40px;right:0;bottom:40px;left:0;z-index:1;overflow:scroll;margin:0;width:100%;max-height:90vh;padding:40px;background-color:#fff}@media (min-width:1400px){#wrapper.table-full-screen{padding:40px 160px}}#wrapper.table-full-screen .full-screen{right:40px}.overlay{position:fixed;top:0;left:0;z-index:-1;display:block;width:100%;height:100%;background:rgba(21,21,21,.5);background:var(--pfe-table--overlay--Background,rgba(21,21,21,.5))}.overlay[hidden]{display:none}.visually-hidden{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;padding:0;border:0;white-space:nowrap}button{border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#f0efef;cursor:pointer}button:focus{outline:2px dashed #000;outline:var(--rh-table--button--outline--focus,2px dashed #000)}.rh-table__expand-vertical-button,.rh-table__full-screen-button{position:absolute;right:calc(0px + 8px);right:calc(var(--rh-table--scrollbar--width,0px) + 8px);z-index:1;width:1.75rem;height:1.75rem;padding:6px;color:#8a8a8a;background:#f0efef}:host(.full-screen) .rh-table__expand-vertical-button,:host(.full-screen) .rh-table__full-screen-button{display:none}.rh-table__expand-vertical-button svg,.rh-table__full-screen-button svg{width:1rem;height:1rem}.rh-table__expand-vertical-button:focus,.rh-table__expand-vertical-button:hover,.rh-table__full-screen-button:focus,.rh-table__full-screen-button:hover{color:#06c}.rh-table__expand-vertical-button{top:calc(1.75rem + 8px)}:host(.rh-table--expanded-vertically) .rh-table__expand-vertical-button{background:#2b9af3;color:#fff}.rh-table__expand-vertical-button path,.rh-table__expand-vertical-button svg{fill:currentColor}.rh-table__close-full-screen-button{position:fixed;top:80px;right:40px;z-index:10;display:none;width:2rem;height:2rem;padding:0;background:#f0efef}:host(.full-screen) .rh-table__close-full-screen-button{display:block}.rh-table__close-full-screen-button svg{width:2rem;height:2rem}
/*# sourceMappingURL=rh-table.min.css.map */
</style><div id="wrapper">
  <button class="rh-table__sort-button" hidden title="Sort in descending order">
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        class="arrow--up"
        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z"
      />
      <path
        class="arrow--down"
        d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"
      />
    </svg>
  </button>
  <button class="rh-table__full-screen-button full-screen" hidden title="Maximize the table">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="expand-arrows-alt"
      class="svg-inline--fa fa-expand-arrows-alt fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"
      ></path>
    </svg>
  </button>
  <button class="rh-table__expand-vertical-button" hidden title="Expand to full height">
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512">
      <path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"/>
    </svg>
  </button>
  <slot></slot>
</div>
<button class="rh-table__close-full-screen-button full-screen--close" title="Restore table to original size">
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
    <path fill="#F0EFEF" d="M0 0h28v28H0z" />
    <g clip-path="url(#a)">
      <path
        d="M12.25 15h-3.5a.75.75 0 0 0-.531 1.281l1.028.969-3.1 3.103a.502.502 0 0 0 0 .706l.794.794a.502.502 0 0 0 .706 0l3.103-3.103.972 1.031A.749.749 0 0 0 13 19.25v-3.5a.748.748 0 0 0-.75-.75Zm3.5-2h3.5a.751.751 0 0 0 .531-1.281l-1.031-.969 3.103-3.103a.502.502 0 0 0 0-.706l-.794-.794a.502.502 0 0 0-.706 0L17.25 9.25l-.972-1.031A.749.749 0 0 0 15 8.75v3.5c0 .416.334.75.75.75Zm3 4.25 1.031-.972A.749.749 0 0 0 19.25 15h-3.5a.748.748 0 0 0-.75.75v3.5a.751.751 0 0 0 1.281.531l.969-1.028 3.103 3.103a.502.502 0 0 0 .706 0l.794-.794a.502.502 0 0 0 0-.706L18.75 17.25Zm-7.031-9.028-.97 1.028-3.102-3.103a.502.502 0 0 0-.706 0l-.794.794a.502.502 0 0 0 0 .706L9.25 10.75l-1.031.972A.749.749 0 0 0 8.749 13h3.5c.416 0 .75-.334.75-.75v-3.5c0-.666-.809-1-1.28-.528Z"
        fill="#9B9B9B"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(6 6)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
</button>
<div class="overlay" hidden></div>`}static get properties(){return{"compact-mode":{title:"Compact-mode",type:"string",enum:[],default:"",prefixed:!0},"sortable-cols":{title:"Sortable-cols",type:"string",enum:[],default:"",prefixed:!0}}}static get slots(){return{default:{title:"Default slot",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"raw"}]}}}}static get tag(){return"rh-table"}static get properties(){return{}}static get slots(){return{}}get schemaUrl(){return"rh-table.json"}get templateUrl(){return"rh-table.html"}get styleUrl(){return"rh-table.scss"}static get events(){return{sorted:`${this.tag}:sorted`}}static get PfeType(){return f.PfeTypes.Content}static get observedAttributes(){return["compact-mode","sortable-cols"]}constructor(){super(p,{type:p.PfeType});this.table=null,this._shadowWrapper=this.shadowRoot.getElementById("wrapper"),this.canFullScreen=!0,this.isFullscreen=!1,this._fullScreenButton=this.shadowRoot.querySelector(".rh-table__full-screen-button"),this._expandButton=this.shadowRoot.querySelector(".rh-table__expand-vertical-button"),this._fullScreenCloseButton=this.shadowRoot.querySelector(".rh-table__close-full-screen-button"),this._overlay=this.shadowRoot.querySelector(".overlay"),this._expandUnpressed=!0,this.hovered={hoveredCoordinates:null,styleElement:null,styleSheet:null,checkInterval:null},this.docLang,this._sortHeadings=null,this.tableSortValues={heading:[],values:[]},this.tableCellValues={},this.sortable=null,this.lastSortCol=null,this.resizeDebounce=250,this.sortOrder="az",this._focusableElements='button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',this._previousFirstFocusableElement=null,this._focusTrapCallbacks={first:null,last:null},this.translations={maximizeTable:{en:"Maximize the table",ko:"\uD14C\uC774\uBE14 \uD06C\uAE30 \uCD5C\uB300\uD654",jp:"\u8868\u306E\u6700\u5927\u5316\u8868\u793A",zh:"\u6700\u5927\u5316\u8868",zh_cn:"\u6700\u5927\u5316\u8868",fr:"Agrandir Table",it:"Visualizza la tabella a schermo pieno",es:"Maximizar la tabla",de:"Tabelle vergr\xF6\xDFern",pt:"Maximizar a tabela"},closeFullscreen:{en:"Restore table to original size",ko:"\uC804\uCCB4 \uD654\uBA74 \uD45C\uC2DC \uB2EB\uAE30",jp:"\u8868\u306E\u5168\u753B\u9762\u8868\u793A\u306E\u7D42\u4E86",zh:"\u5173\u95ED\u5168\u5C4F\u663E\u793A\u8868",zh_cn:"\u5173\u95ED\u5168\u5C4F\u663E\u793A\u8868",fr:"Fermer Table Plein \xE9cran",it:"Esci dalla modalit\xE0 a schermo pieno",es:"Minimizar la tabla",de:"Vollbildtabelle schlie\xDFen",pt:"Fechar a tabela em tela cheia"},sortAscending:{en:"Sort by ascending order",ko:"Sort by ascending order",jp:"Sort by ascending order",zh:"Sort by ascending order",zh_cn:"Sort by ascending order",fr:"Sort by ascending order",it:"Sort by ascending order",es:"Sort by ascending order",de:"Sort by ascending order",pt:"Sort by ascending order"},sortDescending:{en:"Sort by descending order",ko:"Sort by descending order",jp:"Sort by descending order",zh:"Sort by descending order",zh_cn:"Sort by descending order",fr:"Sort by descending order",it:"Sort by descending order",es:"Sort by descending order",de:"Sort by descending order",pt:"Sort by descending order"}};let e=["_processLightDom","_rowAndColumnHighlight","_popstateListener","_toggleFullScreen","_sortData","_getCSSStyleSheetById","_checkForScroll","_handleEscPress","_getTranslatedString","setupFocusTrap","removeFocusTrap","_trapFocusInMaximizedTable"];for(let t=0;t<e.length;t++){let s=e[t];this[s]?this[s]=this[s].bind(this):this.error("Tried to bind a function that doesn't exist",s)}this._resizeListener=v(this._checkForScroll,this.resizeDebounce),this._overlay.addEventListener("click",()=>this._toggleFullScreen(!1)),this._fullScreenCloseButton.addEventListener("click",()=>this._toggleFullScreen(!1))}connectedCallback(){super.connectedCallback(),this._sortButtonBoilerplate=this.shadowRoot.querySelector(".rh-table__sort-button"),this.table=this.table?this.table:this.querySelector("table"),this._sortHeadings=this.table.querySelectorAll(".sort-button"),this.topHeading=this.getAttribute("top-heading"),this.sortable=this.getAttribute("sortable"),this.canFullScreen=this.stringToBool(this.getAttribute("full-screen"));let e=Math.random().toString(36).substring(2,9);this.dataset.id=e,this.id||(this.id=`rh-table--${e}`),this.canFullScreen&&(window.addEventListener("resize",this._resizeListener),this._fullScreenButton.addEventListener("click",()=>this._toggleFullScreen(!0)),this._expandButton.addEventListener("click",()=>{this._expandUnpressed=!1,this.classList.contains("rh-table--expanded-vertically")?this.classList.remove("rh-table--expanded-vertically"):this.classList.add("rh-table--expanded-vertically"),this._checkForScroll()})),!this.docLang&&document&&document.documentElement&&document.documentElement.lang&&(this.docLang=document.documentElement.lang.toLowerCase());let t=this._getTranslatedString("maximizeTable");this._fullScreenButton&&t?this._fullScreenButton.setAttribute("title",t):this.warn("Was unable to translate assistive text on maximize table button");let s=this._getTranslatedString("closeFullscreen");s&&this._fullScreenCloseButton?this._fullScreenCloseButton.setAttribute("title",s):this.warn("Was unable to translate assistive text on collapse table button"),this._processLightDom()}disconnectedCallback(){this.table.removeEventListener("mouseover",this._rowAndColumnHighlight),window.removeEventListener("resize",this._resizeListener),this._overlay.removeEventListener("click",()=>this._toggleFullScreen(!1)),this._fullScreenCloseButton.removeEventListener("click",()=>this._toggleFullScreen(!1))}stringToBool(e){return!(e==="false"||e==="f")}_getTranslatedString(e){if(this.translations[e]&&this.translations[e][this.docLang])return this.translations[e][this.docLang];if(this.translations[e]&&this.translations[e].en)return this.warn(`Could not get translated string for ${e}`),this.translations[e].en;this.warn(`Could not get translated string for ${e}, or english version, docLang is set to ${this.docLang}`)}_trapFocusInMaximizedTable(){this.isFullscreen}setupFocusTrap(){let e=this.querySelector(this._focusableElements),t=this._fullScreenCloseButton,s=e||this._fullScreenCloseButton;this._previousFirstFocusableElement=s,s===t?(this._focusTrapCallbacks.first=r=>{this.isFullscreen&&r.key==="Tab"&&(r.preventDefault(),s.focus())},s.addEventListener("keydown",this._focusTrapCallbacks.first),this._focusTrapCallbacks.last=null):(this._focusTrapCallbacks.first=r=>{this.isFullscreen&&r.key==="Tab"&&r.shiftKey&&(r.preventDefault(),t.focus())},s.addEventListener("keydown",this._focusTrapCallbacks.first),this._focusTrapCallbacks.last=r=>{this.isFullscreen&&r.key==="Tab"&&!r.shiftKey&&(r.preventDefault(),s.focus())},t.addEventListener("keydown",this._focusTrapCallbacks.last))}removeFocusTrap(){this._previousFirstFocusableElement&&this._focusTrapCallbacks.first&&this._previousFirstFocusableElement.removeEventListener("keydown",this._focusTrapCallbacks.first),this._fullScreenCloseButton&&this._focusTrapCallbacks.last&&this._fullScreenCloseButton.removeEventListener("keydown",this._focusTrapCallbacks.last)}_popstateListener(){location.hash&&(this.querySelector(location.hash)||this._toggleFullScreen(!1))}_toggleFullScreen(e){e?(this.style.height=`${this.offsetHeight}px`,this.classList.add("full-screen","rh-table--full-screen"),document.body.classList.add("rh-table--is-full-screen"),this._shadowWrapper.classList.add("table-full-screen"),this._overlay.hidden=!1,window.addEventListener("keydown",this._handleEscPress,!0),this.table.focus(),this.isFullscreen=!0,this.setupFocusTrap(),window.addEventListener("popstate",this._popstateListener)):(this.removeAttribute("style"),this.classList.remove("full-screen","rh-table--full-screen"),document.body.classList.remove("rh-table--is-full-screen"),this._shadowWrapper.classList.remove("table-full-screen"),this._overlay.hidden=!0,window.removeEventListener("keydown",this._handleEscPress,!0),this.removeFocusTrap(),window.removeEventListener("popstate",this._popstateListener),this.isFullscreen=!1)}_handleEscPress(e){if(!e.defaultPrevented){switch(e.key){case"Esc":case"Escape":this.isFullscreen&&this._toggleFullScreen(!1);break;default:return}e.preventDefault()}}_sortData(e){let t=e.target.closest("td, th"),s,r;if(t)s=t.dataset.row-1,r=t.dataset.col-1;else{console.warn("Wasn't able to get column information to sort");return}this.lastSortCol===r&&this.sortOrder==="az"?this.sortOrder="za":this.sortOrder="az",t.classList.add(`sort-${this.sortOrder}`),this.lastSortCol=r;function i(n){return RegExp("^d").test(n)}let d;this.sortOrder==="az"?d=this.tableSortValues.sort((n,c)=>{let a=n[r].innerText,l=c[r].innerText,u=i(a),b=i(l);return typeof a=="string"&&u&&b&&(a=a.toUpperCase(),l=l.toUpperCase()),a<l?-1:a>l?1:0}):this.sortOrder==="za"&&(d=this.tableSortValues.sort(function(n,c){let a=n[r].innerText,l=c[r].innerText,u=i(a),b=i(l);return typeof a=="string"&&u&&b&&(a=a.toUpperCase(),l=l.toUpperCase()),a<l?1:a>l?-1:0}));let h=document.createElement("tbody");for(let n=0;n<d.length;n++){let c=document.createElement("tr"),a=d[n][0].initialRow,l=Object.values(this.tableCellValues[a]);c.append(...l),h.appendChild(c)}if(this.sortOrder){let n=this.sortOrder==="az"?"descending":"ascending";t.setAttribute("aria-sort",n);let c=this.table.querySelectorAll(".rh-table__header--sorted-by");for(let u=0;u<c.length;u++){let b=c[u];b.classList.remove("rh-table__header--sorted-by","rh-table__header--sorted-by--az","rh-table__header--sorted-by--za"),b.removeAttribute("aria-sort")}t.classList.add("rh-table__header--sorted-by");let a=t.querySelector(".rh-table__sort-button"),l;switch(n){case"descending":l=this._getTranslatedString("sortAscending"),a&&l&&a.setAttribute("title",l),t.classList.add("rh-table__header--sorted-by--za");break;case"ascending":l=l=this._getTranslatedString("sortDescending"),a&&l&&a.setAttribute("title",l),t.classList.add("rh-table__header--sorted-by--az");break}}let o=this.querySelector("tbody");o.parentElement.replaceChild(h,o)}_getCSSStyleSheetById(e){let t=this.querySelector(`#${e}`);if(t&&t.sheet)return t.sheet}_deleteAllRules(e){for(;e.cssRules.length>0;)e.deleteRule(0)}_rowAndColumnHighlight(e){let t=e.target;if((t.tagName!=="th"||t.tagName!=="td")&&(t=t.closest("th, td")),!t)return;let s=t.dataset.row,r=t.dataset.col;if(e.target&&s&&r){if([s,r]===this.hovered.hoveredCoordinates)return;this.hovered.hoveredCoordinates=[s,r],this.hovered.checkInterval&&clearInterval(this.hovered.checkInterval),this.hovered.styleElement||(this.hovered.styleElement=document.createElement("style"),this.hovered.styleElement.id=`hoverStyles--${this.dataset.id}`,this.append(this.hovered.styleElement),this.hovered.styleSheet=this._getCSSStyleSheetById(this.hovered.styleElement.id)),this._deleteAllRules(this.hovered.styleSheet);let i=`#${this.id} [data-col="${r}"] {
          background: var(--rh-table--hoveredCol--Background, #EFF7FC);
        }`,d=`#${this.id} [data-row="${s}"] {
          background: var(--rh-table--hoveredRow--Background, #F3F3F3);
        }`,h=`#${this.id} [data-col="${r}"][data-row="${s}"] {
          background: var(--rh-table--hoveredIntersection--Background, #E0EDF4)
        }`;this.hovered.styleSheet.insertRule(i,0),this.hovered.styleSheet.insertRule(d,1),this.hovered.styleSheet.insertRule(h,2);let o=()=>{t===t.parentElement.querySelector(`[data-col="${r}"]:hover`)||(this._deleteAllRules(this.hovered.styleSheet),this.hovered.hoveredCoordinates=null,clearInterval(this.hovered.checkInterval))};this.hovered.checkInterval=setInterval(o,500)}}_checkForScroll(){let e=this._shadowWrapper.scrollHeight>this._shadowWrapper.clientHeight,t=this._shadowWrapper.scrollWidth>this._shadowWrapper.clientWidth;this.table&&this._shadowWrapper&&e||t?(this.style.setProperty("--rh-table--scrollbar--width",`${this._shadowWrapper.offsetWidth-this._shadowWrapper.clientWidth}px`),this.canFullScreen&&(this._fullScreenButton.hidden&&(this._fullScreenButton.hidden=!1),this._expandButton.hidden&&e&&(this._expandButton.hidden=!1)),this._shadowWrapper.hasAttribute("tabindex")||this._shadowWrapper.setAttribute("tabindex","0")):(this._expandUnpressed&&(this._fullScreenButton.hidden||(this._fullScreenButton.hidden=!0),this._expandButton.hidden||(this._expandButton.hidden=!0)),this._shadowWrapper.hasAttribute("tabindex")&&this._shadowWrapper.removeAttribute("tabindex"))}_processSortableColumn(e){if(e.classList.contains("sortable--processed"))return;let t=this._sortButtonBoilerplate.cloneNode("true");t.hidden=!1;for(let r=0;r<e.childNodes.length;r++){let i=e.childNodes[r];t.prepend(i)}let s=this._getTranslatedString("sortDescending");t&&s&&t.setAttribute("title",s),e.append(t),e.classList.add("sortable"),t.addEventListener("click",this._sortData),e.classList.add("sortable--processed")}_processLightDom(){if(this.table&&!this.classList.contains("rh-table--processed")){let e=this.table.cloneNode(!0);this.tableSortValues=[];let t=e.querySelectorAll("tr");for(let s=0;s<t.length;s++){let i=t[s].querySelectorAll("td, th"),d=[];this.sortable&&(this.tableCellValues[s]=Array.from(i));for(let h=0;h<i.length;h++){let o=i[h];if(o.dataset.row=s+1,o.dataset.col=h+1,o.innerText.length>75?o.classList.add("content--lg"):o.innerText.length>30?o.classList.add("content--md"):o.classList.add("content--sm"),this.sortable){let n=this.sortable.split(",");s===0&&n.includes((h+1).toString())&&this._processSortableColumn(o),d.push({initialCol:h,initialRow:s,innerText:o.innerText.trim()}),this.tableCellValues[s][h]=o}}this.sortable&&s!==0&&this.tableSortValues.push(d)}this.replaceChild(e,this.table),this.table=e,this.table&&(this._sortHeadings=this.table.querySelectorAll(".sort-button")),this.table.addEventListener("mouseover",this._rowAndColumnHighlight),this._checkForScroll(),this.classList.add("rh-table--processed")}}};f.create(p);var x=p;export{x as default};
/*! For license information please see rh-table-VV57LNPB.js.LEGAL.txt */
//# sourceMappingURL=rh-table-VV57LNPB.js.map
