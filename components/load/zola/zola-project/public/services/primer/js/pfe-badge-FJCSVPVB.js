import{a}from"./chunk-W6C5CINH.js";import{d as o}from"./chunk-TTPYXTW4.js";o();var e=class extends a{static get version(){return"1.12.2"}get html(){return`
<style>:host{display:inline-block;line-height:calc(1.5 * .75);line-height:calc(var(--pfe-theme--line-height,1.5) * .75);text-align:center;text-rendering:optimizelegibility}span{background-color:#f0f0f0;background-color:var(--pfe-badge--BackgroundColor,var(--pfe-theme--color--feedback--default--lightest,#f0f0f0));border-radius:calc(2px * 30);border-radius:var(--pfe-badge--BorderRadius,calc(var(--pfe-theme--ui--border-radius,2px) * 30));color:#151515;color:var(--pfe-badge--Color,var(--pfe-theme--color--text,#151515));font-size:calc(1rem * .75);font-size:var(--pfe-badge--FontSize,calc(var(--pfe-theme--font-size,1rem) * .75));font-weight:600;font-weight:var(--pfe-badge--FontWeight,var(--pfe-theme--font-weight--semi-bold,600));min-width:calc(1px * 2);min-width:var(--pfe-badge--MinWidth,calc(var(--pfe-theme--ui--border-width,1px) * 2));padding-left:calc(1rem / 2);padding-left:var(--pfe-badge--PaddingLeft,calc(var(--pfe-theme--container-padding,1rem)/ 2));padding-right:calc(1rem / 2);padding-right:var(--pfe-badge--PaddingRight,calc(var(--pfe-theme--container-padding,1rem)/ 2));vertical-align:middle}:host([state=moderate]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--moderate, #f0ab00);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([state=important]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--important, #c9190b);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([state=critical]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--critical, #a30000);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([state=success]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--success, #3e8635);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([state=info]) span{--pfe-badge--BackgroundColor:var(--pfe-theme--color--feedback--info, #06c);--pfe-badge--Color:var(--pfe-theme--color--text--on-dark, #fff)}:host([hidden]){display:none} /*# sourceMappingURL=pfe-badge.min.css.map */</style>
<span></span>`}static get tag(){return"pfe-badge"}get templateUrl(){return"pfe-badge.html"}get styleUrl(){return"pfe-badge.scss"}static get properties(){return{state:{title:"State",type:String,values:["default","moderate","important","critical","success","info"],default:"default"},pfeState:{type:String,prefix:!1,alias:"state"},number:{title:"Number",type:Number,observer:"_numberChanged"},threshold:{title:"Threshold",type:Number,observer:"_thresholdChanged"},pfeThreshold:{type:Number,alias:"threshold",prefix:!1}}}constructor(){super(e);this._textContainer=this.shadowRoot.querySelector("span")}attributeChangedCallback(r,t,d){super.attributeChangedCallback(...arguments),this._textContainer.textContent=this.textContent}_thresholdChanged(r,t){this.textContent=Number(this.threshold)<Number(this.textContent)?`${this.threshold}+`:this.textContent}_numberChanged(r,t){this.textContent=this.threshold&&Number(this.threshold)<Number(t)?`${this.threshold}+`:t}};a.create(e);var i=e;export{i as default};
/*! For license information please see pfe-badge-FJCSVPVB.js.LEGAL.txt */
//# sourceMappingURL=pfe-badge-FJCSVPVB.js.map
