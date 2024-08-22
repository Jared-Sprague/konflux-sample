import{a as c}from"./chunk-SILBYSBB.js";import{a as f}from"./chunk-DO63YBFD.js";f();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(l){if(this==null)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if(typeof l!="function")throw new TypeError("predicate must be a function");for(var a=arguments[1],o=0;o<t;){var r=e[o];if(l.call(a,r,o,e))return o;o++}return-1}});var n=class extends c{static get version(){return"1.12.3"}get html(){return`
<style>@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pf-c-accordion__toggle{background-color:#fff!important;color:#151515!important}}:host{position:relative;display:block;outline:0;background-color:transparent;background-color:var(--pfe-accordion--BackgroundColor,transparent);color:#3c3f42;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));-webkit-box-shadow:0 5px 4px transparent;box-shadow:0 5px 4px transparent;-webkit-box-shadow:var(--pfe-accordion--BoxShadow,0 5px 4px transparent);box-shadow:var(--pfe-accordion--BoxShadow,0 5px 4px transparent);--pfe-icon--color:var(--pfe-accordion--Color, var(--pfe-broadcasted--text, #3c3f42));--pfe-icon--size:14px}:host([hidden]){display:none}:host *,:host ::after,:host ::before{-webkit-box-sizing:border-box;box-sizing:border-box}#heading{margin:0}.pf-c-accordion__toggle{cursor:pointer;outline:0;position:relative;width:100%;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;gap:calc(1rem * 1.5);gap:calc(var(--pfe-theme--container-padding,1rem) * 1.5);padding:1rem calc(1rem * 1.5);padding:var(--pfe-accordion--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 1.5));background-color:transparent;color:#3c3f42;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));text-align:left;font-family:"Red Hat Display",RedHatDisplay,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-theme--font-family--heading, "Red Hat Display", "RedHatDisplay", "Overpass", Overpass, Arial, sans-serif);font-size:1.25rem;font-size:var(--pfe-accordion--FontSize--header,var(--pf-global--FontSize--xl,1.25rem));font-weight:400;font-weight:var(--pfe-accordion--FontWeight--header,var(--pfe-theme--font-weight--normal,400));text-align:left;text-align:var(--pfe-accordion--TextAlign,left);line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);--_typography-offset:calc((1em * var(--pfe-theme--line-height, 1.5) - 1em) / 2);border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-width:1px;border-width:var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));border-color:#d2d2d2;border-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-right-color:transparent;border-left-color:transparent}.pf-c-accordion__toggle::before{position:absolute;content:"";top:-2px;left:-2px;width:calc(100% + 3px);width:calc(100% + var(--pfe-theme--ui--border-width--active,3px));height:calc(100% + 3px);height:calc(100% + var(--pfe-theme--ui--border-width--active,3px));border-radius:2px;border-radius:var(--pfe-theme--ui--border-radius,2px);border:2px solid transparent;border:var(--pfe-theme--ui--border-width--md,2px) var(--pfe-theme--ui--border-style,solid) transparent}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pf-c-accordion__toggle::before{height:100%}}.pf-c-accordion__toggle:focus::before{border-color:#6b9ff0}.pf-c-accordion__toggle:focus:not(:focus-visible)::before{border:unset}.pf-c-accordion__toggle .pf-c-accordion__toggle-icon{--_typography-offset:calc((1em * var(--pfe-theme--line-height, 1.5) - var(--pfe-icon--size, 14px)) / 2)}.pf-c-accordion__toggle .pf-c-accordion__toggle-text{margin-top:calc(-1 * 5px);margin-top:calc(-1 * var(--_typography-offset,5px));margin-bottom:calc(-1 * 5px);margin-bottom:calc(-1 * var(--_typography-offset,5px))}.pf-c-accordion__toggle .pf-c-accordion__toggle-icon{margin-top:calc(5px / 4);margin-top:calc(var(--_typography-offset,5px)/ 4)}:host(:not(:first-of-type)) .pf-c-accordion__toggle{border-top-width:0}.pf-c-accordion__toggle::after{position:absolute;content:"";top:-1px;left:-1px;bottom:-1px;background-color:transparent;background-color:var(--pfe-accordion--accent,transparent);width:calc(3px - -1px);width:calc(var(--pfe-accordion--accent--width,var(--pfe-theme--surface--border-width--active,3px)) - -1px);height:calc(100% - -1px - -1px);z-index:4;z-index:calc(3 + 1);z-index:calc(var(--pfe-accordion--ZIndex,3) + 1)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pf-c-accordion__toggle::after:active,.pf-c-accordion__toggle::after:hover,:host(.animating) .pf-c-accordion__toggle::after,:host(:not([expanded])) .pf-c-accordion__toggle::after:focus,:host([expanded]) .pf-c-accordion__toggle::after{background-color:#06c;background-color:var(--pfe-theme--color--ui-accent,#06c)}}.pf-c-accordion__toggle:active,.pf-c-accordion__toggle:hover,:host(:not([expanded])) .pf-c-accordion__toggle:focus{--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--active, var(--pfe-theme--color--surface--lighter, #f0f0f0));--pfe-accordion--Color:var(--pfe-accordion--Color--active, var(--pfe-broadcasted--text, #3c3f42))}:host(:not([expanded])) .pf-c-accordion__toggle:active,:host(:not([expanded])) .pf-c-accordion__toggle:focus,:host(:not([expanded])) .pf-c-accordion__toggle:hover{--pfe-accordion--accent:var(--pfe-accordion--accent--active, var(--pfe-theme--color--ui-accent, #06c))}:host([on=dark]) .pf-c-accordion__toggle:active,:host([on=dark]) .pf-c-accordion__toggle:hover,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:focus{--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--active, rgba(247, 247, 249, 0.1));--pfe-accordion--Color:var(--pfe-accordion--Color--active, var(--pfe-broadcasted--text, #3c3f42))}:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:active,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:focus,:host([on=dark]:not([expanded])) .pf-c-accordion__toggle:hover{--pfe-accordion--accent:var(--pfe-accordion--accent--active, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([on=saturated]) .pf-c-accordion__toggle:active,:host([on=saturated]) .pf-c-accordion__toggle:hover,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:focus{--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--active, rgba(0, 0, 0, 0.2));--pfe-accordion--Color:var(--pfe-accordion--Color--active, var(--pfe-broadcasted--text, #3c3f42))}:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:active,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:focus,:host([on=saturated]:not([expanded])) .pf-c-accordion__toggle:hover{--pfe-accordion--accent:var(--pfe-accordion--accent--active, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host(.animating) .pf-c-accordion__toggle,:host([expanded]) .pf-c-accordion__toggle{border-bottom-width:0}:host(.animating) .pf-c-accordion__toggle,:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle,:host([expanded]) .pf-c-accordion__toggle{border-right-color:#d2d2d2;border-right-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-left-color:#d2d2d2;border-left-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2))}:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle{gap:calc(1rem / 2);gap:calc(var(--pfe-theme--container-padding,1rem)/ 2);font-family:"Red Hat Text",RedHatText,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif);font-size:1rem;font-size:var(--pfe-accordion--FontSize--header,var(--pf-global--FontSize--md,1rem));font-weight:600;font-weight:var(--pfe-accordion--FontWeight--header,var(--pfe-theme--font-weight--semi-bold,600))}.pf-c-accordion__toggle-wrapper{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;gap:calc(1rem * 1.5);gap:calc(var(--pfe-theme--container-padding,1rem) * 1.5)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pf-c-accordion__toggle-wrapper::after{content:"";position:absolute;top:calc(1rem + 14px);top:calc(var(--pfe-theme--container-spacer,1rem) + 14px);display:block;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);height:14px;width:14px;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;border-width:0 2px 2px 0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:calc(1rem * 1.3125);right:calc(var(--pfe-theme--container-spacer,1rem) * 1.3125);top:1em!important}:host(.animating) .pf-c-accordion__toggle-wrapper::after,:host([expanded]) .pf-c-accordion__toggle-wrapper::after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}}.pf-c-accordion__toggle-text{max-width:80ch;max-width:var(--pfe-accordion--MaxWidth--content,80ch)}.pf-c-accordion__toggle-icon{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-duration:var(--pfe-theme--animation-speed,.3s);transition-duration:var(--pfe-theme--animation-speed,.3s);-webkit-transition-timing-function:cubic-bezier(.465,.183,.153,.946);transition-timing-function:cubic-bezier(.465,.183,.153,.946);-webkit-transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946))}:host([expanded]) .pf-c-accordion__toggle-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host([disclosure]:not([disclosure=false])) .pf-c-accordion__toggle-icon{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.pf-c-accordion__toggle-icon{display:none!important}}.pf-c-accordion__toggle-accents{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}:host{-webkit-transition-property:border,-webkit-box-shadow;transition-property:border,-webkit-box-shadow;transition-property:box-shadow,border;transition-property:box-shadow,border,-webkit-box-shadow;-webkit-transition-timing-function:cubic-bezier(.465,.183,.153,.946);transition-timing-function:cubic-bezier(.465,.183,.153,.946);-webkit-transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));-webkit-transition-duration:calc(pfe-var(animation-speed)/ 2);transition-duration:calc(pfe-var(animation-speed)/ 2)}:host(.animating),:host([expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, var(--pfe-theme--color--surface--lightest, #fff));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text, #3c3f42));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent, #06c))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, 0 5px 4px rgba(140, 140, 140, 0.35))}:host([on=dark].animating),:host([on=dark][expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, rgba(247, 247, 249, 0.1));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-dark, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host([on=saturated].animating),:host([on=saturated][expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, rgba(0, 0, 0, 0.2));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-saturated, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)} /*# sourceMappingURL=pfe-accordion-header.min.css.map */</style>
<${this.headingTag||"h3"} id="heading">
    <button aria-expanded="${this.expanded?"true":"false"}" id="button" class="pf-c-accordion__toggle">
        <span class="pf-c-accordion__toggle-wrapper">
            <span class="pf-c-accordion__toggle-text">${this.headingText||"<slot></slot>"}</span>
            ${this.hasSlot("accents")?'<span class="pf-c-accordion__toggle-accents"><slot name="accents"></slot></span>':""}
        </span>
        <pfe-icon icon="web-icon-caret-thin-right" on-fail="collapse" class="pf-c-accordion__toggle-icon"></pfe-icon>
    </button>
</${this.headingTag||"h3"}>`}static get tag(){return"pfe-accordion-header"}get styleUrl(){return"pfe-accordion-header.scss"}get templateUrl(){return"pfe-accordion-header.html"}static get observer(){return{childList:!0}}static get properties(){return{_id:{type:String,default:e=>`${e.randomId.replace("pfe",e.tag)}`,prefix:!1},ariaControls:{type:String,prefix:!1},oldPfeId:{type:String,alias:"_id",attr:"pfe-id"},expanded:{title:"Expanded",type:Boolean,observer:"_expandedChanged"}}}static get events(){return{change:"pfe-accordion:change"}}constructor(){super(n);this._init=this._init.bind(this),this._clickHandler=this._clickHandler.bind(this),this._observer=new MutationObserver(this._init),this._slotObserver=new MutationObserver(this._init),this._getHeaderElement=this._getHeaderElement.bind(this),this.headingTag="h3",this.addEventListener("click",this._clickHandler)}connectedCallback(){super.connectedCallback(),this.button=this.shadowRoot.querySelector(".pf-c-accordion__toggle"),this._buttonText=this.button.querySelector(".pf-c-accordion__toggle-text"),this.hasLightDOM()?this._init():this._observer.observe(this,n.observer)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._clickHandler),this._observer.disconnect()}_init(){this._observer.disconnect();let e=this._getHeaderElement();e&&(this.headingTag=e.tagName?e.tagName.toLowerCase():"h3",this.headingText=e.textContent?e.textContent.trim():""),this._buttonText.innerHTML=this.headingText,this.removeAttribute("hidden"),this._observer.observe(this,n.observer)}_getHeaderElement(){if(!this.firstElementChild&&!this.firstChild){this.warn("No header content provided");return}if(this.firstElementChild&&this.firstElementChild.tagName){let e=this.fetchElement(this.children,t=>t.tagName&&(t.tagName.match(/^H[1-6]/)||t.tagName==="P"),this._slotObserver);if(e.length===0){this.warn("No heading information was provided.");return}else return e.length>1&&this.warn("Heading currently only supports 1 tag; extra tags will be ignored."),e[0]}else{let e=document.createElement("h3");return this.firstChild&&this.firstChild.nodeType==="#text"?e.textContent=this.firstChild.textContent:(this.warn("Header should contain at least 1 heading tag for correct semantics."),e.textContent=this.textContent),e}}_clickHandler(e){this.emitEvent(n.events.change,{detail:{expanded:!this.expanded,toggle:e.target}})}_expandedChanged(){this.button&&this.button.setAttribute("aria-expanded",this.expanded?"true":"false")}fetchElement(e,t,a){if(!e)return[];let o=[...e];return[...o].filter(r=>r&&r.tagName==="SLOT").forEach(r=>{let h=o.findIndex(s=>s===r),p=r.assignedNodes();if(p&&p.length>0)o.splice(h,1,...p);else{let s=r.children;s&&s.length>0&&(o[h]=s[0])}typeof a=="function"&&a.observer(r,n.observer)}),typeof t=="function"?o.filter(t):o}};var d=class extends c{static get version(){return"1.12.3"}get html(){return`
<style>:host{display:none;overflow:hidden;will-change:height}:host([expanded]){display:block;position:relative}:host(.animating){display:block;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out}.pf-c-accordion__expanded-content{position:relative;display:block;width:100%;padding:1rem;padding:var(--pfe-theme--container-padding,1rem)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important;color:#151515!important}}:host{display:block;position:relative;-webkit-transition:height .3s cubic-bezier(.465,.183,.153,.946);transition:height .3s cubic-bezier(.465,.183,.153,.946);-webkit-transition:height var(--pfe-theme--animation-speed,.3s) var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition:height var(--pfe-theme--animation-speed,.3s) var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));will-change:height;overflow-y:clip;height:0;width:100%;z-index:0;margin:0;padding:0;background-color:transparent;background-color:var(--pfe-accordion--BackgroundColor,transparent);color:#3c3f42;color:var(--pfe-accordion--Color,var(--pfe-broadcasted--text,#3c3f42));-webkit-box-shadow:0 5px 4px transparent;box-shadow:0 5px 4px transparent;-webkit-box-shadow:var(--pfe-accordion--BoxShadow,0 5px 4px transparent);box-shadow:var(--pfe-accordion--BoxShadow,0 5px 4px transparent);-webkit-box-sizing:border-box;box-sizing:border-box;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-color:#d2d2d2;border-color:var(--pfe-accordion--BorderColor,var(--pfe-theme--color--surface--border,#d2d2d2));border-width:1px;border-width:var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));border-top-width:0;border-bottom-width:0}:host *,:host ::after,:host ::before{-webkit-box-sizing:border-box;box-sizing:border-box}:host ::slotted(*){--pfe-accordion--BoxShadow:none}:host::after{position:absolute;content:"";bottom:calc(-1 * 1px);bottom:calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px)));left:calc(-1 * 1px);left:calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px)));background-color:transparent;background-color:var(--pfe-accordion--accent,transparent);width:calc(3px - calc(-1 * 1px));width:calc(var(--pfe-accordion--accent--width,var(--pfe-theme--surface--border-width--active,3px)) - calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px))));height:calc(100% - calc(-1 * 1px));height:calc(100% - calc(-1 * var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px))));z-index:calc(3 + 1);z-index:calc(var(--pfe-accordion--ZIndex,3) + 1)}.pf-c-accordion__expanded-content{display:inline-block;padding:1rem calc(1rem * 1.5);padding:var(--pfe-accordion--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 1.5))}.pf-c-accordion__expanded-content::after{clear:both;content:"";display:table}:host([disclosure=true]) .pf-c-accordion__expanded-content{padding:0 calc(1rem * 3) calc(1rem) calc(1rem * 1.5);padding:var(--pfe-accordion__panel-container--Padding,0 calc(var(--pfe-theme--container-padding,1rem) * 3) calc(var(--pfe-theme--container-padding,1rem)) calc(var(--pfe-theme--container-padding,1rem) * 1.5))}:host(:not([full-width])) .pf-c-accordion__expanded-content{max-width:80ch;max-width:var(--pfe-accordion--MaxWidth--content,80ch)}:host(.animating){border-left-color:transparent;border-left-color:var(--pfe-accordion--accent,transparent)}:host([expanded]:not(.animating)){overflow:visible;margin-bottom:0;border-bottom-width:1px;border-bottom-width:var(--pfe-accordion--BorderWidth,var(--pfe-theme--surface--border-width,1px));opacity:1;height:auto}:host{-webkit-transition-property:border,-webkit-box-shadow;transition-property:border,-webkit-box-shadow;transition-property:box-shadow,border;transition-property:box-shadow,border,-webkit-box-shadow;-webkit-transition-timing-function:cubic-bezier(.465,.183,.153,.946);transition-timing-function:cubic-bezier(.465,.183,.153,.946);-webkit-transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));transition-timing-function:var(--pfe-theme--animation-timing,cubic-bezier(.465,.183,.153,.946));-webkit-transition-duration:calc(pfe-var(animation-speed)/ 2);transition-duration:calc(pfe-var(animation-speed)/ 2)}:host(.animating),:host([expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, var(--pfe-theme--color--surface--lightest, #fff));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text, #3c3f42));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent, #06c))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, 0 5px 4px rgba(140, 140, 140, 0.35))}:host([on=dark].animating),:host([on=dark][expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, rgba(247, 247, 249, 0.1));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-dark, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-dark, #73bcf7))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)}:host([on=saturated].animating),:host([on=saturated][expanded]){--pfe-accordion--BackgroundColor:var(--pfe-accordion--BackgroundColor--expanded, rgba(0, 0, 0, 0.2));--pfe-accordion--Color:var(--pfe-accordion--Color--expanded, var(--pfe-broadcasted--text--on-saturated, #fff));--pfe-accordion--accent:var(--pfe-accordion--accent--expanded, var(--pfe-theme--color--ui-accent--on-saturated, #fff))}:host([expanded]:not(.animating)){--pfe-accordion--BoxShadow:var(--pfe-accordion--BoxShadow--expanded, none)} /*# sourceMappingURL=pfe-accordion-panel.min.css.map */</style>
<div tabindex="-1">
  <div id="container" class="pf-c-accordion__expanded-content">
    <slot></slot>
  </div>
</div>`}static get tag(){return"pfe-accordion-panel"}get styleUrl(){return"pfe-accordion-panel.scss"}get templateUrl(){return"pfe-accordion-panel.html"}static get properties(){return{_id:{type:String,default:e=>`${e.randomId.replace("pfe",e.tag)}`,prefix:!1},role:{type:String,default:"region",prefix:!1},oldPfeId:{type:String,alias:"_id",attr:"pfe-id"},expanded:{title:"Expanded",type:Boolean,default:!1,observer:"_expandedChanged"},ariaLabelledby:{type:String,prefix:!1}}}constructor(){super(d)}connectedCallback(){super.connectedCallback(),this._expandedChanged()}_expandedChanged(){this.expanded?(this.removeAttribute("aria-hidden"),this.removeAttribute("tabindex")):(this.setAttribute("aria-hidden","true"),this.setAttribute("tabindex","-1"))}};var i=class extends c{static get version(){return"1.12.3"}get html(){return`
<style>:host{display:block;position:relative;overflow:hidden;margin:0;width:100%;width:var(--pfe-accordion--Width,100%)}:host{overflow:visible}:host([hidden]){display:none} /*# sourceMappingURL=pfe-accordion.min.css.map */</style>
<slot></slot>`}static get tag(){return"pfe-accordion"}static get meta(){return{title:"Accordion",description:"This element renders content sets in an expandable format."}}get styleUrl(){return"pfe-accordion.scss"}get templateUrl(){return"pfe-accordion.html"}static get properties(){return{disclosure:{title:"Disclosure",type:String,values:["true","false"],cascade:["pfe-accordion-header","pfe-accordion-panel"]},oldDisclosure:{type:String,alias:"disclosure",attr:"pfe-disclosure"},expandedIndex:{title:"Expanded index(es)",type:String,observer:"_expandedIndexHandler"},history:{title:"History",type:Boolean,default:!1,observer:"_historyHandler"}}}static get slots(){return{default:{type:"array",namedSlot:!1,items:{oneOf:[{$ref:"pfe-accordion-header"},{$ref:"pfe-accordion-panel"}]}}}}static get events(){return{change:`${this.tag}:change`,expand:`${this.tag}:expand`,collapse:`${this.tag}:collapse`}}static get PfeType(){return c.PfeTypes.Container}static get contentTemplate(){return`
    <pfe-accordion-header content-type="header"></pfe-accordion-header>
    <pfe-accordion-panel content-type="panel"></pfe-accordion-panel>
    `}constructor(){super(i,{type:i.PfeType});this._manualDisclosure=null,this._updateHistory=!0,this.expandedSets=[],this._init=this._init.bind(this),this._observer=new MutationObserver(this._init),this._updateStateFromURL=this._updateStateFromURL.bind(this),this._getIndexesFromURL=this._getIndexesFromURL.bind(this),this._updateURLHistory=this._updateURLHistory.bind(this)}connectedCallback(){super.connectedCallback(),this.hasLightDOM()&&(this._manualDisclosure=this.getAttribute("disclosure")||this.getAttribute("pfe-disclosure"),Promise.all([customElements.whenDefined(n.tag),customElements.whenDefined(d.tag)]).then(this._init)),this.addEventListener(i.events.change,this._changeHandler),this.addEventListener("keydown",this._keydownHandler),this._observer.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(i.events.change,this._changeHandler),this.removeEventListener("keydown",this._keydownHandler),this._observer.disconnect(),window.removeEventListener("popstate",this._updateStateFromURL)}toggle(e){this._allHeaders()[e].expanded?this.collapse(e):this.expand(e)}expand(e){if(e==null)return;let t=parseInt(e,10),o=this._allHeaders()[t];if(!o)return;let r=this._panelForHeader(o);!o||!r||(this._expandHeader(o),this._expandPanel(r),o.focus(),this.emitEvent(i.events.expand,{detail:{toggle:o,panel:r}}))}expandAll(){let e=this._allHeaders(),t=this._allPanels();e.forEach(a=>this._expandHeader(a)),t.forEach(a=>this._expandPanel(a))}collapse(e){let t=this._allHeaders(),a=this._allPanels(),o=t[e],r=a[e];!o||!r||(this._collapseHeader(o),this._collapsePanel(r),this.emitEvent(i.events.collapse,{detail:{toggle:o,panel:r}}))}collapseAll(){let e=this._allHeaders(),t=this._allPanels();e.forEach(a=>this._collapseHeader(a)),t.forEach(a=>this._collapsePanel(a))}_init(){let e=this._allHeaders();e.forEach(t=>{let a=this._panelForHeader(t);!a||(t.ariaControls=a._id,a.ariaLabelledby=t._id)}),this._manualDisclosure||(e.length===1?this.disclosure="true":e.length>1&&(this.disclosure="false")),this.isIE11||this._updateStateFromURL()}_changeHandler(e){if(this.classList.contains("animating"))return;let t=this._getIndex(e.target);e.detail.expanded?this.expand(t):this.collapse(t),this._updateURLHistory()}_historyHandler(){this.history?window.addEventListener("popstate",this._updateStateFromURL):window.removeEventListener("popstate",this._updateStateFromURL)}_expandHeader(e){let t=this._getIndex(e);this.expandedSets.indexOf(t)<0&&t>-1&&this.expandedSets.push(t),e.expanded=!0}_expandPanel(e){if(!e){this.error("Trying to expand a panel that doesn't exist.");return}if(e.expanded)return;e.expanded=!0;let t=e.getBoundingClientRect().height;this._animate(e,0,t)}_collapseHeader(e){let t=this._getIndex(e),a=this.expandedSets.indexOf(t);a>=0&&this.expandedSets.splice(a,1),e.expanded=!1}_collapsePanel(e){if(!e){this.error("Trying to collapse a panel that doesn't exist");return}if(!e.expanded)return;let t=e.getBoundingClientRect().height;e.expanded=!1,this._animate(e,t,0)}_animate(e,t,a){if(e){let o=e.previousElementSibling;o&&o.classList.add("animating"),e.classList.add("animating"),e.style.height=`${t}px`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height=`${a}px`,e.addEventListener("transitionend",this._transitionEndHandler)})})}}_keydownHandler(e){if(!(e.target instanceof customElements.get(n.tag)))return;let a;switch(e.key){case"ArrowDown":case"Down":case"ArrowRight":case"Right":a=this._nextHeader();break;case"ArrowUp":case"Up":case"ArrowLeft":case"Left":a=this._previousHeader();break;case"Home":a=this._firstHeader();break;case"End":a=this._lastHeader();break;default:return}a&&a.shadowRoot.querySelector("button").focus()}_transitionEndHandler(e){let t=e.target.previousElementSibling;t&&t.classList.remove("animating"),e.target.style.height="",e.target.classList.remove("animating"),e.target.removeEventListener("transitionend",this._transitionEndHandler)}_allHeaders(){return this.isIE11?this.children.filter(e=>e.tagName.toLowerCase()==="pfe-accordion-header"):[...this.querySelectorAll(":scope > pfe-accordion-header")]}_allPanels(){return this.isIE11?this.children.filter(e=>e.tagName.toLowerCase()==="pfe-accordion-panel"):[...this.querySelectorAll(":scope > pfe-accordion-panel")]}_panelForHeader(e){let t=e.nextElementSibling;if(!!t){if(t.tagName.toLowerCase()!==d.tag){this.error("Sibling element to a header needs to be a panel");return}return t}}_previousHeader(){let e=this._allHeaders(),t=e.findIndex(a=>a===document.activeElement)-1;return e[(t+e.length)%e.length]}_nextHeader(){let e=this._allHeaders(),t=e.findIndex(a=>a===document.activeElement)+1;return e[t%e.length]}_firstHeader(){return this._allHeaders()[0]}_lastHeader(){let e=this._allHeaders();return e[e.length-1]}_isHeader(e){return e.tagName.toLowerCase()===n.tag}_isPanel(e){return e.tagName.toLowerCase()===d.tag}_expandedIndexHandler(e,t){if(e===t)return;t.split(",").map(o=>parseInt(o,10)-1).reverse().forEach(o=>this.expand(o))}_getIndex(e){return this._isHeader(e)?this._allHeaders().findIndex(a=>a.id===e.id):this._isPanel(e)?this._allPanels().findIndex(a=>a.id===e.id):(this.warn("The _getIndex method expects to receive a header or panel element."),-1)}_getIndexesFromURL(){if(!window.URLSearchParams)return[];let e=new URLSearchParams(window.location.search);if(e&&e.has(this.id)){let a=e.get(this.id).split("-");return a.length<0?[]:a.map(o=>parseInt(o.trim(),10)-1)}}_updateURLHistory(){if(!this.history||!this._updateHistory||!window.URLSearchParams)return;if(!this.id){this.error("The history feature cannot update the URL without an ID added to the pfe-accordion tag.");return}let e=new URLSearchParams(window.location.search),t=this.expandedSets.map(a=>a+1).sort((a,o)=>a-o).join("-");this.expandedSets.length>0?e.set(this.id,t):e.delete(this.id),history.replaceState({},"",`${window.location.pathname}${e?`?${e.toString()}`:""}${window.location.hash}`)}_updateStateFromURL(){let e=this._getIndexesFromURL()||[];this._updateHistory=!1,e.forEach(t=>this.expand(t)),this._updateHistory=!0}};c.create(n);c.create(d);c.create(i);var b=i;export{b as a};
/*! For license information please see chunk-JBZYKMJP.js.LEGAL.txt */
//# sourceMappingURL=chunk-JBZYKMJP.js.map
