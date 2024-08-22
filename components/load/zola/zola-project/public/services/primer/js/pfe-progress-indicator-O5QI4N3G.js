import{a as t}from"./chunk-2F4U7AW6.js";import{a as r}from"./chunk-JGUPDZZ6.js";import"./chunk-UXAV2KNF.js";r();var e=class extends t{static get version(){return"1.12.2"}get html(){return`
<style>:host([indeterminate]) ::slotted(*){position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:1px;width:1px;margin:-1px;padding:0;border:0}:host([hidden]){display:none}:host([indeterminate]){animation:spin 1s linear infinite;-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;border-style:solid;border-style:var(--pfe-theme--surface--border-style,solid);border-width:4px;border-width:var(--pfe-theme--surface--border-width--heavy,4px);border-color:rgba(0,0,0,.25);border-color:var(--pfe-progress-indicator--background-color,rgba(0,0,0,.25));border-top-color:rgba(0,0,0,.75);border-top-color:var(--pfe-progress-indicator--foreground-color,rgba(0,0,0,.75));border-radius:100%;display:inline-block;height:2rem;height:var(--pfe-progress-indicator--Height,2rem);margin:0 auto;position:relative;width:2rem;width:var(--pfe-progress-indicator--Width,2rem);vertical-align:middle;visibility:visible}:host([size=sm]){height:1rem;width:1rem;border-width:calc(4px * .75);border-width:calc(var(--pfe-theme--surface--border-width--heavy,4px) * .75)}:host([size=md]){height:2rem;width:2rem;border-width:calc(4px * 1);border-width:calc(var(--pfe-theme--surface--border-width--heavy,4px) * 1)}:host([size=xl]){height:4rem;width:4rem;border-width:calc(4px * 1.5);border-width:calc(var(--pfe-theme--surface--border-width--heavy,4px) * 1.5)}@-webkit-keyframes spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}} /*# sourceMappingURL=pfe-progress-indicator.min.css.map */</style>
<slot></slot>`}static get schemaProperties(){return{indeterminate:{title:"Status",type:"boolean",default:!0,prefixed:!0},size:{title:"Size",type:"string",enum:["sm","md","xl"],default:"md"}}}static get slots(){return{content:{title:"Content",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"raw"}]}}}}static get tag(){return"pfe-progress-indicator"}get templateUrl(){return"pfe-progress-indicator.html"}get styleUrl(){return"pfe-progress-indicator.scss"}get schemaUrl(){return"pfe-progress-indicator.json"}static get properties(){return{indeterminate:{title:"Indeterminate",type:Boolean},oldIndeterminate:{alias:"indeterminate",attr:"pfe-indeterminate"},size:{title:"Size",type:String,values:["sm","md","xl"],default:"md"}}}constructor(){super(e);this._init=this._init.bind(this),this._slot=this.shadowRoot.querySelector("slot"),this._slot.addEventListener("slotchange",this._init)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._slot.removeEventListener("slotchange",this._init)}_init(){this.children[0]||this.warn("You do not have a backup loading message.")}};t.create(e);var a=e;export{a as default};
/*! For license information please see pfe-progress-indicator-O5QI4N3G.js.LEGAL.txt */
//# sourceMappingURL=pfe-progress-indicator-O5QI4N3G.js.map
