import"./chunk-VY7AK2NS.js";import{a as t}from"./chunk-YZLIG5R4.js";import{d as r}from"./chunk-W477FRAI.js";r();var e=class extends t{static get version(){return"1.12.2"}get html(){return`
<style>:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:calc(-1 * 1rem);margin-top:calc(-1 * var(--pfe-theme--container-spacer,1rem));margin-right:calc(-1 * 1rem);margin-right:calc(-1 * var(--pfe-theme--container-spacer,1rem))}@media (min-width:576px){:host{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){::slotted(*){max-width:100%}}:host([stacked]),:host([stacked]:not([stacked=false])){-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.pfe-icon-panel__content{margin-top:1rem;margin-top:var(--pfe-theme--container-spacer,1rem);margin-left:0}@media (min-width:576px){.pfe-icon-panel__content{margin-top:0;margin-left:1rem;margin-left:var(--pfe-theme--container-spacer,1rem)}}.pfe-icon-panel__footer{margin-top:1.5rem;margin-top:var(--pfe-theme--content-spacer,1.5rem)} /*# sourceMappingURL=pfe-icon-panel.min.css.map */</style>
<pfe-icon size="${this.getAttribute("pfe-circled")==="true"?"lg":"xl"}"></pfe-icon>
<div class="pfe-icon-panel__content">
  <slot class="pfe-icon-panel__header" name="pfe-icon-panel--header"></slot>
  <slot class="pfe-icon-panel__body"></slot>
  <slot class="pfe-icon-panel__footer" name="pfe-icon-panel--footer"></slot>
</div>`}static get schemaProperties(){return{icon:{title:"Icon",type:"string",prefixed:!1},color:{title:"Color",type:"string",enum:["complement","accent","lightest","base","darker","darkest","critical","important","moderate","success","info"],default:"darker",prefixed:!0},centered:{title:"Centered",type:"boolean",prefixed:!0,default:!1},stacked:{title:"Stacked",type:"boolean",prefixed:!0,default:!1},circled:{title:"Circled",type:"boolean",default:!0,prefixed:!0}}}static get slots(){return{header:{title:"Header",type:"array",namedSlot:!0,items:{title:"Header item",oneOf:[{$ref:"raw"}]}},body:{title:"Body",type:"array",namedSlot:!1,items:{title:"Body item",oneOf:[{$ref:"raw"}]}},footer:{title:"Footer",type:"array",namedSlot:!0,maxItems:3,items:{title:"Footer item",oneOf:[{$ref:"raw"}]}}}}static get tag(){return"pfe-icon-panel"}get styleUrl(){return"pfe-icon-panel.scss"}get templateUrl(){return"pfe-icon-panel.html"}get schemaUrl(){return"pfe-icon-panel.json"}static get properties(){return{icon:{title:"Icon",type:String,attr:"icon",cascade:["pfe-icon"]},circled:{title:"Circled",type:Boolean,cascade:["pfe-icon"]},oldCircled:{alias:"circled",attr:"pfe-circled"},color:{title:"Color",type:String,values:["complement","accent","lightest","base","darker","darkest","critical","important","moderate","success","info"],default:"darker",cascade:["pfe-icon"]},oldColor:{alias:"color",attr:"pfe-color"},stacked:{title:"Stacked",type:Boolean},oldStacked:{alias:"stacked",attr:"pfe-stacked"},centered:{title:"Centered",type:Boolean},oldCentered:{alias:"centered",attr:"pfe-centered"}}}constructor(){super(e)}};t.create(e);var n=e;export{n as default};
/*! For license information please see pfe-icon-panel-YDQDCGQ2.js.LEGAL.txt */
//# sourceMappingURL=pfe-icon-panel-YDQDCGQ2.js.map
