import"./chunk-UQSC56V2.js";import"./chunk-5O3CGNEG.js";import{a as c}from"./chunk-W6C5CINH.js";import{d as m}from"./chunk-TTPYXTW4.js";m();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(p){if(this==null)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if(typeof p!="function")throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<t;){var a=e[r];if(p.call(i,a,r,e))return r;r++}return-1}});Element.prototype.closest||(Element.prototype.closest=function(p){var e=this;do{if(e.matches(p))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var n=class extends c{static get version(){return"1.12.2"}get html(){return`
<style>slot[name=heading][sr-only]{position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px;margin:-1px;padding:0;border:0}:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Red Hat Text",RedHatText,Overpass,Overpass,Arial,sans-serif;font-family:var(--pfe-theme--font-family, "Red Hat Text", "RedHatText", "Overpass", Overpass, Arial, sans-serif);font-weight:400;font-weight:var(--pfe-theme--font-weight--normal,400);display:block;position:-webkit-sticky;position:sticky;z-index:80;z-index:var(--pfe-theme--zindex--jumplinks,80);top:0;padding:0}@media (min-width:992px){:host([horizontal][color=darkest]){background-color:#151515;background-color:var(--pfe-theme--color--surface--darkest,#151515);--context:var(--pfe-theme--color--surface--darkest--context, dark);--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}}@media (min-width:992px){:host([horizontal][color=darker]){background-color:#3c3f42;background-color:var(--pfe-theme--color--surface--darker,#3c3f42);--context:var(--pfe-theme--color--surface--darker--context, dark);--pfe-broadcasted--text:var(--pfe-theme--color--text--on-dark, #fff);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted--on-dark, #d2d2d2);--pfe-broadcasted--link:var(--pfe-theme--color--link--on-dark, #73bcf7);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover--on-dark, #bee1f4);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus--on-dark, #bee1f4);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited--on-dark, #bee1f4);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration--on-dark, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover--on-dark, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus--on-dark, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited--on-dark, none)}}@media (min-width:992px){:host([horizontal][color=lightest]){background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);--context:var(--pfe-theme--color--surface--lightest--context, light);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}}@media (min-width:992px){:host([horizontal][color=lighter]){background-color:#f0f0f0;background-color:var(--pfe-theme--color--surface--lighter,#f0f0f0);--context:var(--pfe-theme--color--surface--lighter--context, light);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none)}}:host([stuck][horizontal]){-webkit-box-shadow:0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06) 0 .0625rem .125rem 0 rgba(3,3,3,.2);box-shadow:0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06) 0 .0625rem .125rem 0 rgba(3,3,3,.2);-webkit-box-shadow:var(--pfe-theme--box-shadow--sm,0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06)0 .0625rem .125rem 0 rgba(3,3,3,.2));box-shadow:var(--pfe-theme--box-shadow--sm,0 .0625rem .125rem 0 rgba(3,3,3,.12),0 0 .125rem 0 rgba(3,3,3,.06)0 .0625rem .125rem 0 rgba(3,3,3,.2))}.pfe-jump-links-nav__heading{margin-top:0;margin-bottom:.5rem;margin-bottom:var(--pfe-theme--content-spacer--body--sm,.5rem)}.pfe-jump-links-nav__heading h3,::slotted([slot=heading]){color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42);margin:0;font-size:.875rem;font-size:var(--pfe-jump-links__heading--FontSize,var(--pf-global--FontSize--sm,.875rem));font-weight:400;font-weight:var(--pfe-theme--font-weight--normal,400);text-transform:uppercase;text-transform:var(--pfe-jump-links__heading--TextTransform,uppercase)}slot[name=logo]{display:none}slot[name=cta]{display:none}nav{visibility:visible;margin:0;list-style:none;padding:0}pfe-accordion-panel nav{width:100%}@media (min-width:992px){:host([horizontal][no-header]) nav{padding-top:1px;padding-bottom:0}}#container{padding:32px 0}pfe-accordion-panel #container{padding:24px 0}ul{padding:0;margin:0;border-left:1px solid #d2d2d2;border-left:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--ui-disabled,#d2d2d2)}li{display:block;position:relative;margin-left:calc(1px * -1);margin-left:calc(var(--pfe-theme--surface--border-width,1px) * -1)}.sub-nav li{margin-left:0}li[expand] ul{height:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}li[expand] .sub-nav{display:table;height:auto}li::before{position:absolute;content:"";top:0;left:0;background-color:transparent;width:calc(4px - 0px);width:calc(var(--pfe-theme--surface--border-width--heavy,4px) - 0px);height:calc(100% - 0px);background-color:transparent}li :hover::before,li:not([expand]) li:hover::before{background-color:#d2d2d2;background-color:var(--pfe-theme--color--ui-disabled,#d2d2d2)}li[active]::before,li[expand]::before{background-color:#06c;background-color:var(--pfe-jump-links--accent,var(--pfe-jump-links--BorderColor,var(--pfe-theme--color--ui-accent,#06c)));z-index:2}a{position:relative;color:#6a6e73;color:var(--pfe-theme--color--ui-disabled--text,#6a6e73);font-size:1rem;font-size:var(--pfe-jump-links--FontSize,var(--pf-global--FontSize--md,1rem));text-decoration:none;line-height:1.5;line-height:var(--pfe-theme--line-height,1.5);padding:calc(calc(1.5rem / 6) * 2) calc(calc(1.5rem / 3) * 2);padding:calc(var(--pfe-jump-links__link--vertical-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 6)) * 2) calc(var(--pfe-jump-links__link--horizontal-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 3)) * 2)}a,a:focus+ul>li>a,li:hover a,li[expand] a{display:table}li>a:hover,li[active]>a{color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}:host([on=dark]) a{color:#d2d2d2;color:var(--pfe-theme--color--text--muted--on-dark,#d2d2d2)}:host([on=saturated]) a{color:#d2d2d2;color:var(--pfe-theme--color--text--muted--on-saturated,#d2d2d2)}.has-sub-section a{padding-bottom:calc(1.5rem / 6);padding-bottom:var(--pfe-jump-links__link--vertical-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 6))}.sub-section a{margin-left:calc(1rem * .75);margin-left:calc(var(--pfe-theme--container-spacer,1rem) * .75);font-size:calc(1rem * .85);font-size:calc(var(--pfe-jump-links--FontSize,var(--pf-global--FontSize--md,1rem)) * .85);padding:calc(1.5rem / 6) calc(calc(1.5rem / 3) * 2);padding:var(--pfe-jump-links__link--vertical-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 6)) calc(var(--pfe-jump-links__link--horizontal-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 3)) * 2)}@media (min-width:992px){.sub-section a{display:none}}.sub-section a:last-child{padding-bottom:calc(1.5rem / 3);padding-bottom:var(--pfe-jump-links__link--horizontal-spacer,calc(var(--pfe-theme--content-spacer,1.5rem)/ 3))}a:focus:focus-visible{outline:0;position:relative}a:focus:focus-visible::after{position:absolute;content:"";top:0;left:0;width:calc(100% + 3px);width:calc(100% + var(--pfe-theme--ui--border-width--active,3px));height:calc(100% + 3px);height:calc(100% + var(--pfe-theme--ui--border-width--active,3px));border-radius:2px;border-radius:var(--pfe-theme--ui--border-radius,2px);border:2px solid transparent;border:var(--pfe-theme--ui--border-width--md,2px) var(--pfe-theme--ui--border-style,solid) transparent}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){a:focus:focus-visible::after{height:100%}}a:focus:focus-visible:focus::after{border-color:#06c;border-color:var(--pfe-theme--color--link,#06c)}a:focus:focus-visible:focus:not(:focus-visible)::after{border:unset}ul ul{margin:0;padding:0;overflow-y:hidden;-webkit-transition:-webkit-box-flex 1s linear,-webkit-flex 1s linear;transition:-webkit-box-flex 1s linear,-webkit-flex 1s linear;transition:flex 1s linear;transition:flex 1s linear,-webkit-box-flex 1s linear,-webkit-flex 1s linear,-ms-flex 1s linear}ul ul,ul ul li{border-left:none!important}pfe-accordion{border:1px solid #d2d2d2;border:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--ui-disabled,#d2d2d2);--context:light;--pfe-accordion--BackgroundColor:var(--pfe-theme--color--surface--lightest, #fff)}:host([color=darkest]) pfe-accordion{--context:dark;--pfe-accordion--BackgroundColor:var(--pfe-theme--color--surface--darkest, #151515);--pfe-theme--color--ui-accent--on-dark:transparent}pfe-accordion,pfe-accordion-panel.animating,pfe-accordion-panel[expanded]{--pfe-accordion--accent:transparent;--pfe-accordion--BorderColor:transparent;--pfe-accordion--accent:transparent;--pfe-accordion--BorderTopWidth:0;--pfe-accordion--BorderBottomWidth:0;--pfe-accordion--panel-container--Padding:0 0 0 calc(var(--pfe-accordion__base--Padding,var(--pfe-theme--container-spacer,1rem)) * 1.5)}@media screen and (min-width:992px){:host([horizontal]){width:100%;background-color:#fff;background-color:var(--pfe-jump-links--BackgroundColor,var(--pfe-theme--color--surface--lightest,#fff));--context:var(--pfe-jump-links--context, var(--pfe-theme--color--surface--lightest--context, light));z-index:calc(80 + 1);z-index:calc(var(--pfe-theme--zindex--jumplinks,80) + 1);border:none;padding:0}:host([horizontal]) .pfe-jump-links-nav__heading{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:block;margin:0;padding-bottom:1rem;padding-bottom:var(--pfe-theme--container-padding,1rem);border-bottom:1px solid #d2d2d2;border-bottom:var(--pfe-theme--surface--border-width,1px) var(--pfe-theme--surface--border-style,solid) var(--pfe-theme--color--surface--border,#d2d2d2)}:host([horizontal]) .pfe-jump-links-nav__heading h3,:host([horizontal]) ::slotted([slot=heading]){text-align:center;text-align:var(--pfe-jump-links__heading--TextAlign,center)}:host([horizontal]) ::slotted([slot=logo]){position:absolute;max-height:calc(1rem * 3.5);max-height:calc(var(--pfe-theme--container-spacer,1rem) * 3.5);max-width:calc(1rem * 14);max-width:calc(var(--pfe-theme--container-spacer,1rem) * 14);top:1rem;top:var(--pfe-theme--container-spacer,1rem);left:calc(1rem * 4);left:calc(var(--pfe-theme--container-spacer,1rem) * 4)}:host([horizontal]) ::slotted([slot=cta]){position:absolute;top:calc(1rem * 1);top:calc(var(--pfe-theme--container-spacer,1rem) * 1);right:calc(1rem * 4);right:calc(var(--pfe-theme--container-spacer,1rem) * 4)}}@media screen and (min-width:992px){:host([horizontal]) nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding-top:32px;padding-bottom:8px;max-width:calc(992px - (var(--pfe-jump-links--Padding--horizontal) * 4));max-width:var(--pfe-jump-links--Width,calc(992px - (var(--pfe-jump-links--Padding--horizontal) * 4)))}}@media screen and (min-width:1200px){:host([horizontal]) nav{max-width:calc(1200px - (var(--pfe-jump-links--Padding--horizontal) * 4));max-width:var(--pfe-jump-links--Width,calc(1200px - (var(--pfe-jump-links--Padding--horizontal) * 4)))}}@media screen and (min-width:992px){:host([horizontal]) #container{padding:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host([horizontal]) ul{border:none;text-align:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;width:auto;margin:0 auto}:host([horizontal]) li{margin-left:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:calc(1px * -1);margin-top:calc(var(--pfe-theme--surface--border-width,1px) * -1)}:host([horizontal]) li::before{height:4px;height:var(--pfe-theme--surface--border-width--heavy,4px);width:100%}:host([horizontal]) a{padding:16px;text-decoration:none;font-size:16px;color:var(--pfe-broadcasted--text--muted,)}:host([horizontal]) a:hover,:host([horizontal]) a[active]{color:#3c3f42;color:var(--pfe-broadcasted--text,#3c3f42)}}:host([hidden]){display:none!important} /*# sourceMappingURL=pfe-jump-links-nav.min.css.map */</style>
${this.isMobile?`
<pfe-accordion>
  <pfe-accordion-header>
    <slot class="pfe-jump-links-nav__heading" name="heading">
      <h3>${this.srText||"Jump to section"}</h3>
    </slot>
  </pfe-accordion-header>
  <pfe-accordion-panel>
`:""}

<nav>
  ${this.isMobile?"":`<slot class="pfe-jump-links-nav__heading" name="heading"${this.noHeader?" sr-only":""}>
    <h3>${this.srText||"Jump to section"}</h3>
  </slot>`}
  ${this.horizontal?'<slot class="pfe-jump-links-nav__logo" name="logo"></slot>':""}
  <div id="container"></div>
  ${this.horizontal?'<slot class="pfe-jump-links-nav__cta" name="cta"></slot>':""}
</nav>

${this.isMobile?`
  </pfe-accordion-panel>
</pfe-accordion>
`:""}`}static get tag(){return"pfe-jump-links-nav"}get templateUrl(){return"pfe-jump-links-nav.html"}get styleUrl(){return"pfe-jump-links-nav.scss"}static get PfeType(){return c.PfeTypes.Content}static get events(){return{activeNavItem:"pfe-jump-links-panel:active-navItem",change:"pfe-jump-links-panel:change",stuck:"pfe-jump-links-nav:stuck",resize:"resize",scroll:"scroll",keyup:"keyup"}}get events(){return n.events}static get observer(){return{childList:!0,subtree:!0,characterData:!0}}static get properties(){return{autobuild:{title:"Autobuild",type:Boolean},horizontal:{title:"Horizontal",type:Boolean,default:!1},srText:{title:"Screen reader text",type:String,default:"Jump to section"},color:{title:"Color",type:String,default:"lightest",values:["lightest","darkest"]},offset:{title:"Offset",type:Number},mobileBreakpoint:{title:"Mobile breakpoint (max-width)",type:String},accordionCollapseTiming:{title:"Number of ms to wait before collapsing the accordion on click",type:Number,default:750},stuck:{title:"Stickiness state",type:Boolean,attr:"stuck",observer:"_stickyHandler"},noHeader:{title:"Opt-out of the header region",type:Boolean},oldAutobuild:{alias:"autobuild",attr:"pfe-c-autobuild"},oldHorizontal:{alias:"horizontal",attr:"pfe-c-horizontal"},oldColor:{alias:"color",attr:"pfe-color"}}}get isMobile(){if(this.mobileBreakpoint)return window.matchMedia(`(max-width: ${this.mobileBreakpoint})`).matches;let e=c.breakpoint.lg.match(/([0-9]+)([a-z]*)/);return e.length<1?"991px":window.matchMedia(`(max-width: ${parseInt(e[1],10)-1}${e[2]})`).matches}get header(){return this.getSlot(["heading","pfe-jump-links-nav--heading"])[0]}get cta(){return this.getSlot(["link","pfe-jump-links-nav--link"])[0]}get logo(){return this.getSlot(["logo","pfe-jump-links-nav--logo"])[0]}get container(){return this.shadowRoot.querySelector("#container")}set panel(e){e&&(this._panel=e,this._panel.hasAttribute("scrolltarget")||this._panel.setAttribute("scrolltarget",this.id),this.emitEvent(n.events.change))}get panel(){if(this._panel)return this._panel;if(this.id){let t=document.querySelector(`[scrolltarget="${this.id}"],[pfe-c-scrolltarget="${this.id}"]`);if(t)return t}let e=[];Promise.all([customElements.whenDefined("pfe-jump-links-panel")]).then(()=>{e=customElements.get("pfe-jump-links-panel").instances||[];let t=e.filter(i=>i.getAttribute("scrolltarget")===this.id);if(t.length===1)return t[0];if(e.length===1)return this.id=this.randomId,e[0].setAttribute("scrolltarget",this.id),e[0];e.length>1?this.warn(`Cannot locate which panel is connected to this navigation element.${this.id?` Please add scrolltarget="${this.id}" to the appropriate panel.`:""}`):this.warn("Cannot locate any panels on this page. Please see documentation for connecting the navigation and panel.")})}set sections(e){this._sections=e,this.emitEvent(n.events.change)}get sections(){if(this._sections)return this._sections;let e=this.panel;if(!(!e&&this.autobuild)){if(!this.autobuild){let i=[...this.querySelectorAll("ul > li > a[href]")].map(r=>`[id="${r.href.split("#").pop()}"]`);return e.querySelectorAll(i.join(","))||document.querySelectorAll(i.join(","))}return e.querySelectorAll(".pfe-jump-links-panel__section")||e.shadowRoot.querySelectorAll(".pfe-jump-links-panel__section")||e.querySelectorAll("[id]")}}get links(){return[...this.container.querySelectorAll("a")]}get items(){return[...this.shadowRoot.querySelectorAll(`.${this.tag}__item`)]}get offsetValue(){if(this.offset)return this.offset;let e=this.cssVariable("pfe-jump-links--offset")||this.cssVariable("pfe-jump-links-panel--offset");if(e&&(e=this._castPropertyValue({type:Number},parseInt(e,10)),e&&e>=0))return e;let t=0,i=this.cssVariable("pfe-navigation--Height--actual");if(i&&(i=this._castPropertyValue({type:Number},parseInt(i,10)),i&&i>0&&(t=i)),this.stuck&&(this.isMobile||this.horizontal))return t;let r=this.cssVariable("pfe-jump-links--Height--actual");return r&&(r=this._castPropertyValue({type:Number},parseInt(r,10)),r&&r>0&&(t=t+r)),t}constructor(){super(n,{type:n.PfeType});this.currentActive,this.isBuilding=!1,this.isVisible=!1,this.update=!1,this._panel,this._sections,this._clicked=!1,this.build=this.build.bind(this),this.rebuild=this.rebuild.bind(this),this.active=this.active.bind(this),this.inactive=this.inactive.bind(this),this.clearActive=this.clearActive.bind(this),this.getActive=this.getActive.bind(this),this.closeAccordion=this.closeAccordion.bind(this),this.scrollToSection=this.scrollToSection.bind(this),this.updateItem=this.updateItem.bind(this),this.updateLightDOM=this.updateLightDOM.bind(this),this._buildWrapper=this._buildWrapper.bind(this),this._buildItem=this._buildItem.bind(this),this._isValidLightDom=this._isValidLightDom.bind(this),this._reportHeight=this._reportHeight.bind(this),this._updateOffset=this._updateOffset.bind(this),this._checkVisible=this._checkVisible.bind(this),this._stickyHandler=this._stickyHandler.bind(this),this._clickHandler=this._clickHandler.bind(this),this._scrollHandler=this._scrollHandler.bind(this),this._resizeHandler=this._resizeHandler.bind(this),this._mutationHandler=this._mutationHandler.bind(this),this._panelChangedHandler=this._panelChangedHandler.bind(this),this._observer=new MutationObserver(this._mutationHandler)}connectedCallback(){if(super.connectedCallback(),this.isIE11){this.setAttribute("hidden","");return}this._attachListeners(n.events),!this.autobuild&&this._isValidLightDom()?this.updateLightDOM():this.autobuild&&this.build();let e=this.querySelector("ul, ol");if(!e)this.warn("Navigation could not be built.");else{this._toShadowDOM(e),this._updateOffset();let t=this._checkVisible(),i=this.getActive();t&&i>=0?this.active(i):t&&this.active(0)}this._observer.observe(this,n.observer)}disconnectedCallback(){super.disconnectedCallback(),this._dettachListeners(n.events)}build(e=this.sections){if(!e)return;e=[...e],this.isBuilding=!0;let t,i=this._buildWrapper(),r=i,a=r;for(let o=0;o<e.length;o++){let s=e[o],l=s.classList.contains("sub-section"),h=s.classList.contains("has-sub-section"),f=s.id;if(!f){let u=s.previousElementSibling;u&&u.classList.contains("pfe-jump-links__section--spacer")&&u.id?f=u.id:(s.id=this.randomId.replace("pfe-","pfe-jump-links--"),f=s.id)}t=this._buildItem({target:f,content:s.getAttribute("nav-label")||s.textContent,subsection:h},l),r.appendChild(t),h&&(a=r,r=this._buildWrapper("sub-nav"),t.appendChild(r)),e[o+1]&&!e[o+1].classList.contains("sub-section")&&(r=a||i)}this.isBuilding=!1,this.innerHTML="",this.appendChild(i)}closeAccordion(){if(!this.isMobile)return;let e=this.shadowRoot.querySelector("pfe-accordion");setTimeout(()=>{Promise.all([customElements.whenDefined("pfe-accordion")]).then(()=>{e.collapseAll()})},this.accordionCollapseTiming)}rebuild(){if(this.isBuilding)setTimeout(this.rebuild,10);else{(this.isMobile&&!this.shadowRoot.querySelector("pfe-accordion")||!this.isMobile&&this.shadowRoot.querySelector("pfe-accordion"))&&this.render();let e;this.autobuild&&this.update?e=this.build():e=this.querySelector("ul"),e&&this.container.innerHTML!==e.outerHTML.toString()&&(this.container.innerHTML=e.outerHTML.toString()),this._updateOffset(),this.active(this.getActive()),this.items.forEach(t=>{t.querySelector("a").addEventListener("click",this._clickHandler)})}this.update=!1}active(e){let t,i=this.items;if(typeof e=="number"?t=e:t=i.findIndex(l=>l===e),t<0||t>=i.length||!i[t])return;this.clearActive(),this.currentActive=t;let r=i[t].closest("li"),a=r.closest("ul").closest("li"),o=r.classList.contains("sub-section"),s=r.classList.contains("has-sub-section");r.setAttribute("active",""),s?r.setAttribute("expand",""):o&&a.setAttribute("expand",""),this.emitEvent(n.events.activeNavItem,{detail:{activeNavItem:t}})}getActive(){if(!this.sections)return;let e=[...this.sections],t=this.offsetValue,i=e.filter((r,a)=>{let o=window.innerHeight||document.documentElement.clientHeight,s=e[a+1],l=s?s.getBoundingClientRect().top:0,h=r.getBoundingClientRect().top;return h>=0&&h<=o&&(!s||l>=t&&t-h<l-t)});if(!(!i||i.length===0))return e.indexOf(i[0])}inactive(e){let t,i=this.items;if(typeof e=="number"?t=e:t=i.findIndex(l=>l===e),t<0||t>=i.length||!i[t])return;let r=i[t].closest("li"),a=r.closest("ul").closest("li"),o=r.classList.contains("sub-section"),s=r.classList.contains("has-sub-section");r.removeAttribute("active"),s?r.removeAttribute("expand"):o&&a.removeAttribute("expand")}clearActive(){this.items.forEach(t=>this.inactive(t))}_attachListeners(e){this.autobuild&&document.addEventListener(n.events.change,this._panelChangedHandler),window.addEventListener(e.resize,this._resizeHandler),window.addEventListener(e.scroll,this._scrollHandler),window.addEventListener(e.stuck,this._updateOffset)}_dettachListeners(e){this._observer.disconnect(),document.removeEventListener(e.change,this._panelChangedHandler),window.removeEventListener(e.resize,this._resizeHandler),window.removeEventListener(e.scroll,this._scrollHandler),window.removeEventListener(e.keyup,this._keyboardHandler),window.removeEventListener(e.stuck,this._updateOffset)}_buildItem(e,t=!1){let i=document.createElement("li");i.className=`${this.tag}__item`;let r=document.createElement("a");return r.className=`${this.tag}__link`,r.href=`#${e.target}`,r.setAttribute("data-target",e.target),r.innerHTML=e.content,e.subsection&&i.classList.add("has-sub-section"),t&&i.classList.add("sub-section"),i.appendChild(r),i}_buildWrapper(e="pfe-jump-links-nav"){let t=document.createElement("ul");return t.className=e,t}_siblingJumpLinks(e=t=>t!==this){return n.instances.filter(e)}_reportHeight(){let e=0,t=this._siblingJumpLinks(r=>r.stuck&&(r.horizontal||r.isMobile));t.length>0&&(e=t[t.length-1].getBoundingClientRect().height);let i=this.cssVariable("pfe-jump-links--Height--actual",null,document.body);(!i||parseInt(i,10)!==e)&&this.cssVariable("pfe-jump-links--Height--actual",`${e}px`,document.body)}_isValidLightDom(){let e=!0;return(!this.hasLightDOM()||!this.querySelector("ul")&&!this.querySelector("ol"))&&!this.autobuild&&(this.warn("This component requires a list in the light DOM to .\nAlternatively, add the `autobuild` attribute to dynamically generate the list from the provided panel."),e=!1),this.logo&&!this.horizontal&&this.warn("The logo slot is NOT supported in vertical jump links."),this.cta&&!this.horizontal&&this.warn("The link slot is NOT supported in vertical jump links."),Number.isInteger(Number(this.customVar))&&this.warn("Using an integer with a unit is not supported for custom property --pfe-jump-links-panel--offset. The component strips the unit using parseInt(). For example so 1rem would become 1 and behave as if you had entered 1px. Values with a pixel unit will behave correctly."),e}updateItem(e,t=!1){e.classList=`${this.tag}__item${t?" sub-section":""}`;let i=e.querySelector("a");i.classList=`${this.tag}__link`;let r=e.querySelector("ul");r&&(e.classList.add("has-sub-section"),r.querySelectorAll(":scope > li").forEach(a=>this.updateItem(a,!0)))}updateLightDOM(){let e=this.querySelector("ul");e.classList=this.tag,e.querySelectorAll(":scope > li").forEach(t=>this.updateItem(t))}_toShadowDOM(e){this.container.innerHTML!==e.outerHTML.toString()&&(this.container.innerHTML=e.outerHTML.toString()),this.links.forEach(t=>{t.addEventListener("click",this._clickHandler)})}_checkVisible(){return this.isVisible=this.getBoundingClientRect().top<=document.documentElement.clientHeight&&this.getBoundingClientRect().right>=0&&this.getBoundingClientRect().bottom>=0&&this.getBoundingClientRect().left<=document.documentElement.clientWidth,this.isVisible}_updateOffset(){this._reportHeight(),this.horizontal?this.style.top=`${this.offsetValue}px`:this.style.top=`${this.offsetValue+20}px`}_clickHandler(e){let t=e.target,i=t.closest(`.${this.tag}__item`);if(this.active(i),!this.sections)return;let r=[...this.sections].findIndex(a=>a.id===t.hash.replace("#",""));r<0||(e.preventDefault(),this._clicked=!0,history.replaceState({},"",t.href),this.scrollToSection(r))}scrollToSection(e){let t=this.sections[e],i=this.offsetValue;this.stuck=this.getBoundingClientRect().top===i;let r=window.pageYOffset+t.getBoundingClientRect().top;if(!t.classList.contains("pfe-jump-links__section--spacer")){r=r-i;let o=0;this.horizontal&&(o=this.getBoundingClientRect().height),this.isMobile&&(o=this.shadowRoot.querySelector("pfe-accordion-header").getBoundingClientRect().height-this.getBoundingClientRect().height),o>0&&(r=r-o)}let a=20;if(t.hasAttribute("offset")){let o=this._castPropertyValue({type:Number},parseInt(t.getAttribute("offset"),10));o&&(a=o)}else this.panel&&this.panel.offset&&(a=this.panel.offset);r=r-a,r<0&&(r=0),window.scroll({top:r,behavior:"smooth"}),this.closeAccordion(),this.stuck=this.getBoundingClientRect().top===i,setTimeout(()=>{t.focus(),this._clicked=!1},1e3)}_stickyHandler(e,t){e!==t&&(this._reportHeight(),this.emitEvent(n.events.stuck,{detail:{stuck:t}}))}_scrollHandler(){this._clicked||(clearTimeout(this._scrollHandler._tId),this._scrollHandler._tId=setTimeout(()=>{if(this._checkVisible(),!this.isVisible)return;this.stuck=this.getBoundingClientRect().top===this.offsetValue;let e=this.getActive();e>=0&&e!==this.currentActive&&(this.currentActive=e,this.active(e))},10))}_resizeHandler(){this.rebuild()}_mutationHandler(){this.autobuild||(this.update=!0,this.rebuild())}_panelChangedHandler(){!this.autobuild||(this.update=!0,this._sections=null,this.rebuild())}};var d=class extends c{static get version(){return"1.12.2"}static get tag(){return"pfe-jump-links-panel"}get html(){return"<slot></slot>"}static get events(){return{change:`${this.tag}:change`}}static get observer(){return{childList:!0,subtree:!0}}static get PfeType(){return c.PfeTypes.Content}static get properties(){return{offset:{title:"Offset",type:Number},scrolltarget:{title:"Scroll target",type:String},spacers:{title:"Inject spacers",type:Boolean,default:!1,observer:"_makeSpacers"},oldOffset:{alias:"offset",attr:"pfe-c-offset"},oldScrolltarget:{alias:"scrolltarget",attr:"pfe-c-scrolltarget"}}}get sections(){return this.querySelectorAll(`.${this.tag}__section`)}constructor(){super(d,{type:d.PfeType});this._init=this._init.bind(this),this._makeSpacers=this._makeSpacers.bind(this),this._isValidMarkup=this._isValidMarkup.bind(this),this._observer=new MutationObserver(()=>{this._init(),this.emitEvent(d.events.change,{})})}connectedCallback(){super.connectedCallback(),this._init()}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}_isValidMarkup(){[...this.sections].length===0&&this.warn(`This panel does not contain any headings labeled with the ${this.tag}__section class. Please add that class and an ID to any heading you would like surfaced in the jump links navigation.`)}_makeSpacers(){!this.spacers||!this.sections||[...this.sections].length<=0||(this._observer.disconnect(),[...this.sections].forEach(e=>{let t=e.parentNode,i=e.previousElementSibling;(!i||!i.classList.contains("pfe-jump-links__section--spacer"))&&(i=document.createElement("div"),i.classList.add("pfe-jump-links__section--spacer"),t.insertBefore(i,e)),e.id&&(!i.id||i.id!==e.id)&&(i.id=e.id,e.removeAttribute("id"),e.setAttribute("data-target",i.id)),i.style.marginTop="calc(-1 * (var(--pfe-navigation--Height--actual, 0px) + var(--pfe-jump-links--Height--actual, 0px)))",i.style.height="calc(var(--pfe-navigation--Height--actual, 0px) + var(--pfe-jump-links--Height--actual, 0px))"}),this._observer.observe(this,d.observer))}_init(){this._isValidMarkup(),this._makeSpacers()}};c.create(n);c.create(d);var b={PfeJumpLinksNav:n,PfeJumpLinksPanel:d},x=b;export{x as default};
/*! For license information please see pfe-jump-links-EQ3QIOR4.js.LEGAL.txt */
//# sourceMappingURL=pfe-jump-links-EQ3QIOR4.js.map
