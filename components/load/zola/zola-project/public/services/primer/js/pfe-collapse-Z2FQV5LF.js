import{a}from"./chunk-SILBYSBB.js";import{a as l}from"./chunk-DO63YBFD.js";import"./chunk-GNHSL7FV.js";l();function o(){return Math.random().toString(36).substr(2,9)}var s=class extends a{static get version(){return"1.12.2"}get html(){return`
<style>:host{display:block;cursor:default} /*# sourceMappingURL=pfe-collapse-toggle.min.css.map */</style>
<slot></slot>`}static get slots(){return{default:{title:"Default",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"pfe-collapsibe-toggle"},{$ref:"pfe-collapse-panel"}]}}}}static get tag(){return"pfe-collapse-toggle"}get templateUrl(){return"pfe-collapse-toggle.html"}get styleUrl(){return"pfe-collapse-toggle.scss"}get expanded(){return this.getAttribute("aria-expanded")==="true"}set expanded(t){let e=Boolean(t);this.setAttribute("aria-expanded",e)}static get properties(){return{ariaExpanded:{title:"Aria expanded",type:String,prefix:!1,values:["true","false"]},ariaControls:{title:"Aria controls",type:String,prefix:!1,observer:"_ariaControlsChanged"}}}constructor(t,{setTabIndex:e=!0,addKeydownHandler:r=!0}={}){super(t||s);this.controlledPanel=!1,this._setTabIndex=e,this._addKeydownHandler=r,this.addEventListener("click",this._clickHandler),r&&this.addEventListener("keydown",this._keydownHandler)}connectedCallback(){super.connectedCallback(),this.expanded=!1,this.id=this.id||`${s.tag}-${o()}`,this.setAttribute("role","button"),this._setTabIndex&&this.setAttribute("tabindex",0),this.controlledPanel||this._connectPanel(this.getAttribute("aria-controls"))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickHandler),this._addKeydownHandler&&this.removeEventListener("keydown",this._keydownHandler)}_ariaControlsChanged(t,e){!e||this._connectPanel(e)}toggle(){this.hasAttribute("disabled")||(this.expanded=!this.expanded,this.controlledPanel||this._connectPanel(this.getAttribute("aria-controls")),this.controlledPanel?(this.controlledPanel.expanded=this.expanded,this.emitEvent(n.events.change,{detail:{expanded:this.expanded,toggle:this,panel:this.controlledPanel}})):this.warn("This toggle doesn't have a panel associated with it"))}_clickHandler(){this.toggle()}_keydownHandler(t){switch(t.key){case" ":case"Spacebar":case"Enter":this.toggle();break}}_connectPanel(t){this.getRootNode?this.controlledPanel=this.getRootNode().querySelector(`#${t}`):this.controlledPanel=document.querySelector(`#${t}`)}},i=class extends a{static get version(){return"1.12.2"}get html(){return`
<style>:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out} /*# sourceMappingURL=pfe-collapse-panel.min.css.map */</style>
<slot></slot>`}static get slots(){return{default:{title:"Default",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"pfe-collapsibe-toggle"},{$ref:"pfe-collapse-panel"}]}}}}static get tag(){return"pfe-collapse-panel"}static get events(){return{animationStart:`${this.tag}:animation-start`,animationEnd:`${this.tag}:animation-end`}}get templateUrl(){return"pfe-collapse-panel.html"}get styleUrl(){return"pfe-collapse-panel.scss"}get animates(){return this.animation!=="false"}get expanded(){return this.hasAttribute("expanded")||this.hasAttribute("pfe-expanded")}set expanded(t){if(Boolean(t)){if(this.setAttribute("pfe-expanded",""),this.setAttribute("expanded",""),this.animates){let r=this.getBoundingClientRect().height;this._fireAnimationEvent("opening"),this._animate(0,r)}}else if(this.hasAttribute("expanded")||this.hasAttribute("pfe-expanded")){let r=this.getBoundingClientRect().height;this.removeAttribute("expanded"),this.removeAttribute("pfe-expanded"),this.animates&&(this._fireAnimationEvent("closing"),this._animate(r,0))}}static get properties(){return{animation:{title:"Animation",type:String,values:["false"]},oldAnimation:{alias:"animation",attr:"pfe-animation"}}}constructor(t){super(t||i)}connectedCallback(){super.connectedCallback(),this.expanded=!1,this.id=this.id||`${i.tag}-${o()}`}_animate(t,e){this.classList.add("animating"),this.style.height=`${t}px`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.style.height=`${e}px`,this.classList.add("animating"),this.addEventListener("transitionend",this._transitionEndHandler)})})}_transitionEndHandler(t){t.target.style.height="",t.target.classList.remove("animating"),t.target.removeEventListener("transitionend",this._transitionEndHandler),this.emitEvent(i.events.animationEnd,{detail:{expanded:this.expanded,panel:this}})}_fireAnimationEvent(t){this.emitEvent(i.events.animationStart,{detail:{state:t,panel:this}})}},n=class extends a{static get version(){return"1.12.2"}get html(){return`
<style>:host{display:block}:host([hidden]){display:none}:host(.animating),:host([expanded]){display:block} /*# sourceMappingURL=pfe-collapse.min.css.map */</style>
<slot></slot>`}static get slots(){return{default:{title:"Default",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"pfe-collapsibe-toggle"},{$ref:"pfe-collapse-panel"}]}}}}static get tag(){return"pfe-collapse"}get templateUrl(){return"pfe-collapse.html"}get styleUrl(){return"pfe-collapse.scss"}get schemaUrl(){return"pfe-collapse.json"}get animates(){return this.animation!=="false"}static get events(){return{change:`${this.tag}:change`}}static get properties(){return{animation:{title:"Animation",type:String,values:["false"],observer:"_animationChanged"},oldAnimation:{alias:"animation",attr:"pfe-animation"}}}constructor(t){super(t||n);this._toggle=null,this._panel=null,this._linkControls=this._linkControls.bind(this),this._changeHandler=this._changeHandler.bind(this),this._observer=new MutationObserver(this._linkControls),this.addEventListener(n.events.change,this._changeHandler),this.addEventListener(n.events.animationStart,this._animationStartHandler),this.addEventListener(n.events.animationEnd,this._animationEndHandler)}connectedCallback(){super.connectedCallback(),Promise.all([customElements.whenDefined(i.tag),customElements.whenDefined(s.tag)]).then(()=>{this.hasLightDOM()&&this._linkControls(),this._observer.observe(this,{childList:!0})})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(n.events.change,this._changeHandler),this.removeEventListener(n.events.animationStart,this._animationStartHandler),this.removeEventListener(n.events.animationEnd,this._animationEndHandler),this._observer.disconnect()}_animationChanged(t,e){!e||e!=="false"&&e!=="true"||this._panel&&(this._panel.animation=e)}toggle(){this._toggle.toggle()}_linkControls(){this._toggle=this.querySelector(s.tag),this._panel=this.querySelector(i.tag),this._toggle.setAttribute("aria-controls",this._panel.id)}_animationStartHandler(){this.classList.add("animating")}_animationEndHandler(){this.classList.remove("animating")}_changeHandler(t){}};a.create(n);a.create(s);a.create(i);export{n as PfeCollapse,i as PfeCollapsePanel,s as PfeCollapseToggle};
/*! For license information please see pfe-collapse-Z2FQV5LF.js.LEGAL.txt */
//# sourceMappingURL=pfe-collapse-Z2FQV5LF.js.map
