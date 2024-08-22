import{a as s}from"./chunk-2F4U7AW6.js";import{a as h}from"./chunk-JGUPDZZ6.js";import"./chunk-UXAV2KNF.js";h();Array.prototype.filter||(Array.prototype.filter=function(n,e){if(!((typeof n=="Function"||typeof n=="function")&&this))throw new TypeError;var t=this.length>>>0,a=new Array(t),o=this,l=0,i=-1,d;if(e===void 0)for(;++i!==t;)i in this&&(d=o[i],n(o[i],i,o)&&(a[l++]=d));else for(;++i!==t;)i in this&&(d=o[i],n.call(e,o[i],i,o)&&(a[l++]=d));return a.length=l,a});var r=class extends s{static get version(){return"1.12.2"}get html(){return`
<style>.pfe-modal__close{background-color:transparent;border:none;margin:0;padding:0;text-align:left}:host{display:block;position:relative}.pfe-modal__outer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:99;z-index:var(--pfe-theme--zindex--modal,99)}.pfe-modal__outer[hidden]{display:none}.pfe-modal__overlay{position:fixed;height:100%;width:100%;top:0;left:0;background-color:rgba(21,21,21,.5);background-color:var(--pfe-modal__overlay--BackgroundColor,var(--pfe-theme--color--overlay,rgba(21,21,21,.5)));cursor:pointer}.pfe-modal__overlay[hidden]{display:none}.pfe-modal__window{--context:var(--pfe-modal--context, light);--pfe-broadcasted--text:var(--pfe-theme--color--text, #151515);--pfe-broadcasted--text--muted:var(--pfe-theme--color--text--muted, #6a6e73);--pfe-broadcasted--link:var(--pfe-theme--color--link, #06c);--pfe-broadcasted--link--hover:var(--pfe-theme--color--link--hover, #004080);--pfe-broadcasted--link--focus:var(--pfe-theme--color--link--focus, #004080);--pfe-broadcasted--link--visited:var(--pfe-theme--color--link--visited, #6753ac);--pfe-broadcasted--link-decoration:var(--pfe-theme--link-decoration, none);--pfe-broadcasted--link-decoration--hover:var(--pfe-theme--link-decoration--hover, underline);--pfe-broadcasted--link-decoration--focus:var(--pfe-theme--link-decoration--focus, underline);--pfe-broadcasted--link-decoration--visited:var(--pfe-theme--link-decoration--visited, none);position:relative;max-width:94vw;max-width:var(--pfe-modal--MaxWidth--mobile,94vw);min-width:0;min-width:var(--pfe-modal--MinWidth,0);max-height:90vh;max-height:var(--pfe-modal--MaxHeight,90vh);margin:0 auto;-webkit-box-shadow:0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12);box-shadow:0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12);-webkit-box-shadow:var(--pfe-theme--box-shadow--lg,0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12));box-shadow:var(--pfe-theme--box-shadow--lg,0 .1875rem .4375rem .1875rem rgba(3,3,3,.13),0 .6875rem 1.5rem 1rem rgba(3,3,3,.12));background-color:#fff;background-color:var(--pfe-theme--color--surface--lightest,#fff);color:#151515;color:var(--pfe-theme--color--text,#151515);border-radius:2px;border-radius:var(--pfe-theme--ui--border-radius,2px)}@media screen and (min-width:640px){.pfe-modal__window{max-width:min(70rem,94vw);max-width:var(--pfe-modal-width,var(--pfe-modal--MaxWidth--large,min(70rem,94vw)))}}:host([width=small]) .pfe-modal__window{max-width:min(35rem,94vw);max-width:var(--pfe-modal--MaxWidth--small,min(35rem,94vw))}:host([width=medium]) .pfe-modal__window{max-width:min(52.5rem,94vw);max-width:var(--pfe-modal--MaxWidth--medium,min(52.5rem,94vw))}:host([width=large]) .pfe-modal__window{max-width:min(70rem,94vw);max-width:var(--pfe-modal--MaxWidth--large,min(70rem,94vw))}.pfe-modal__container{position:relative;max-height:inherit}.pfe-modal__container[hidden]{display:none}.pfe-modal__content{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:90vh;max-height:var(--pfe-modal--MaxHeight,90vh);padding:calc(1rem * 2) calc(1rem * 3.5) calc(1rem * 2) calc(1rem * 2);padding:var(--pfe-modal--Padding,calc(var(--pfe-theme--container-padding,1rem) * 2) calc(var(--pfe-theme--container-padding,1rem) * 3.5) calc(var(--pfe-theme--container-padding,1rem) * 2) calc(var(--pfe-theme--container-padding,1rem) * 2));-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-height:640px){.pfe-modal__content{padding:1rem calc(1rem * 3) 1rem 1rem;padding:var(--pfe-modal--Padding,var(--pfe-theme--container-padding,1rem) calc(var(--pfe-theme--container-padding,1rem) * 3) var(--pfe-theme--container-padding,1rem) var(--pfe-theme--container-padding,1rem))}}:host(:not([has_header])) .pfe-modal__content ::slotted(:nth-child(1)),:host(:not([has_header])) .pfe-modal__content ::slotted(:nth-child(2)){margin-top:0!important}.pfe-modal__content ::slotted([slot=pfe-modal--header]){margin-top:0!important}.pfe-modal__close{position:absolute;top:calc(1rem * .25);top:calc(var(--pfe-theme--container-padding,1rem) * .25);right:calc(1rem * .25);right:calc(var(--pfe-theme--container-padding,1rem) * .25);cursor:pointer;line-height:.5;padding:1rem;padding:var(--pfe-theme--container-padding,1rem)}@media screen and (min-width:640px){.pfe-modal__close{top:1rem;top:var(--pfe-theme--container-padding,1rem);right:1rem;right:var(--pfe-theme--container-padding,1rem)}}@media screen and (max-height:640px) and (min-width:640px){.pfe-modal__close{top:calc(1rem / 2);top:calc(var(--pfe-theme--container-padding,1rem)/ 2);right:calc(1rem / 2);right:calc(var(--pfe-theme--container-padding,1rem)/ 2)}}.pfe-modal__close>svg{fill:#151515;fill:var(--pfe-theme--color--text,#151515);height:20px;height:var(--pfe-theme--ui--element--size,20px);width:20px;width:var(--pfe-theme--ui--element--size,20px);height:calc(20px - 4px);height:var(--pfe-modal__close--size,calc(var(--pfe-theme--ui--element--size,20px) - 4px));width:calc(20px - 4px);width:var(--pfe-modal__close--size,calc(var(--pfe-theme--ui--element--size,20px) - 4px))} /*# sourceMappingURL=pfe-modal.min.css.map */</style>
<slot name="pfe-modal--trigger"></slot>
<section class="pfe-modal__outer" hidden>
	<div class="pfe-modal__overlay"></div>
	<div class="pfe-modal__window" tabindex="0" role="dialog" hidden>
		<div class="pfe-modal__container">
			<div class="pfe-modal__content">
				<slot name="pfe-modal--header"></slot>
				<slot></slot>
			</div>
			<button class="pfe-modal__close" aria-label="Close dialog">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="-11 11 22 23">
					<path d="M30 16.669v-1.331c0-0.363-0.131-0.675-0.394-0.938s-0.575-0.394-0.938-0.394h-10.669v-10.65c0-0.362-0.131-0.675-0.394-0.938s-0.575-0.394-0.938-0.394h-1.331c-0.363 0-0.675 0.131-0.938 0.394s-0.394 0.575-0.394 0.938v10.644h-10.675c-0.362 0-0.675 0.131-0.938 0.394s-0.394 0.575-0.394 0.938v1.331c0 0.363 0.131 0.675 0.394 0.938s0.575 0.394 0.938 0.394h10.669v10.644c0 0.363 0.131 0.675 0.394 0.938 0.262 0.262 0.575 0.394 0.938 0.394h1.331c0.363 0 0.675-0.131 0.938-0.394s0.394-0.575 0.394-0.938v-10.637h10.669c0.363 0 0.675-0.131 0.938-0.394 0.269-0.262 0.4-0.575 0.4-0.938z" transform="rotate(45)"/>
				</svg>
			</button>
		</div>
	</div>
</section>`}static get slots(){return{trigger:{title:"Trigger",type:"array",namedSlot:!0,items:{oneOf:[{$ref:"raw"}]}},header:{title:"Header",type:"array",namedSlot:!0,items:{oneOf:[{$ref:"raw"}]}},body:{title:"Body",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"raw"}]}}}}static get tag(){return"pfe-modal"}get templateUrl(){return"pfe-modal.html"}get schemaUrl(){return"pfe-modal.json"}get styleUrl(){return"pfe-modal.scss"}static get PfeType(){return s.PfeTypes.Container}static get events(){return{open:`${this.tag}:open`,close:`${this.tag}:close`}}constructor(){super(r,{type:r.PfeType});this.header_id=this.randomId,this.isOpen=!1,this._keydownHandler=this._keydownHandler.bind(this),this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this._init=this._init.bind(this),this._modalWindow=this.shadowRoot.querySelector(`.${this.tag}__window`),this._modalCloseButton=this.shadowRoot.querySelector(`.${this.tag}__close`),this._overlay=this.shadowRoot.querySelector(`.${this.tag}__overlay`),this._container=this.shadowRoot.querySelector(`.${this.tag}__container`),this._outer=this.shadowRoot.querySelector(`.${this.tag}__outer`),this._observer=new MutationObserver(this._init)}connectedCallback(){super.connectedCallback(),this._init(),this.addEventListener("keydown",this._keydownHandler),this._modalCloseButton.addEventListener("keydown",this._keydownHandler),this._modalCloseButton.addEventListener("click",this.close),this._overlay.addEventListener("click",this.close),this._observer.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._keydownHandler),this._modalCloseButton.removeEventListener("click",this.close),this._modalCloseButton.removeEventListener("click",this.close),this._overlay.removeEventListener("click",this.close),this.trigger&&this.trigger.removeEventListener("click",this.open),this._observer.disconnect()}_init(){if(window.ShadyCSS&&this._observer.disconnect(),this.trigger=this.querySelector(`[slot="${this.tag}--trigger"]`),this.header=this.querySelector(`[slot="${this.tag}--header"]`),this.body=[...this.querySelectorAll("*:not([slot])")],this.trigger&&(this.trigger.addEventListener("click",this.open),this.removeAttribute("hidden")),this.header)this.header.id=this.header_id,this._modalWindow.setAttribute("aria-labelledby",this.header_id);else{let e=this.body.filter(t=>t.tagName.slice(0,1)==="H");e.length>0?(e[0].id=this.header_id,this._modalWindow.setAttribute("aria-labelledby",this.header_id)):this.trigger&&this._modalWindow.setAttribute("aria-label",this.trigger.innerText)}window.ShadyCSS&&this._observer.observe(this,{childList:!0})}_keydownHandler(e){let t=e.target||window.event.srcElement;switch(e.key||e.keyCode){case"Tab":case 9:t===this._modalCloseButton&&(e.preventDefault(),this._modalWindow.focus());return;case"Escape":case"Esc":case 27:this.close(e);return;case"Enter":case 13:t===this.trigger&&this.open(e);return}}toggle(e){return this.isOpen?this.close(e):this.open(e),this}open(e){e&&(e.preventDefault(),this.trigger=e?e.target:window.event.srcElement);let t={open:!0};return e&&this.trigger&&(t.trigger=this.trigger),this.isOpen=!0,this._modalWindow.removeAttribute("hidden"),this._overlay.removeAttribute("hidden"),this._outer.removeAttribute("hidden"),document.body.style.overflow="hidden",this._modalWindow.focus(),this.emitEvent(r.events.open,{detail:t}),this}close(e){return e&&e.preventDefault(),this.isOpen=!1,this._modalWindow.setAttribute("hidden",!0),this._overlay.setAttribute("hidden",!0),this._outer.setAttribute("hidden",!0),document.body.style.overflow="auto",this.trigger&&(this.trigger.focus(),this.trigger=null),this.emitEvent(r.events.close,{detail:{open:!1}}),this}};s.create(r);var p=r;export{p as default};
/*! For license information please see pfe-modal-7U7K63KF.js.LEGAL.txt */
//# sourceMappingURL=pfe-modal-7U7K63KF.js.map
