import{a}from"./chunk-2F4U7AW6.js";import{a as s}from"./chunk-JGUPDZZ6.js";import"./chunk-UXAV2KNF.js";s();function o(d){switch(d){case"en":case"ko":return 228;case"zh":return 158;case"fr":return 195;case"ja":return 193;case"de":return 179;case"it":return 188;case"pt-br":return 181;case"es":return 218;default:return 228}}var n=class extends a{static get version(){return"1.12.2"}get html(){return`
<style>:host{font-size:1rem;font-size:var(--pfe-readtime--FontSize,var(--pf-global--FontSize--md,1rem))}:host([hidden]){display:none} /*# sourceMappingURL=pfe-readtime.min.css.map */</style>
<span class="pfe-readtime__text">${this.readString}</span>`}static get tag(){return"pfe-readtime"}static get meta(){return{title:"Readtime",description:"This element will collect a word count on a given section and calculate the readtime based on that count."}}get templateUrl(){return"pfe-readtime.html"}get styleUrl(){return"pfe-readtime.scss"}static get PfeType(){return a.PfeTypes.Content}static get properties(){return{wpm:{title:"Words per minute",type:Number,default:e=>o(e._lang),observer:"render"},wordCount:{title:"Number of words in the content",type:Number,default:0,observer:"render"},templateString:{title:"Template for printing the readtime",description:"Translatable string for printing out the readtime in a readable format. Use %t as a stand-in for the calculated value.",attr:"template",type:String,default:e=>e.textContent.trim()||"%t-minute readtime",observer:"render"},_lang:{title:"Language of content",type:String,attr:"lang",enum:["en","ko","zh","fr","ja","de","it","pt-br","es"],default:()=>document.documentElement.lang||"en",observer:"_langChangedHandler"},for:{title:"Element containing content",type:String,observer:"_forChangeHandler"}}}get readtime(){return Math.floor(this.wordCount/this.wpm)||0}get readString(){if(this.readtime<=0){this.setAttribute("hidden","");return}return this.removeAttribute("hidden"),this.templateString&&this.templateString.match(/%t/)?this.templateString.replace("%t",this.readtime):`${this.readtime}${this.templateString}`}constructor(){super(n,{type:n.PfeType,delayRender:!0});this._forChangeHandler=this._forChangeHandler.bind(this),this._langChangedHandler=this._langChangedHandler.bind(this)}connectedCallback(){super.connectedCallback(),this.render()}_forChangeHandler(e,t){if(t===e)return;let r=document.querySelector(t)||document.querySelector(`#${t}`);if(r){if(this.content=r,r.hasAttribute("word-count")){let i=r.getAttribute("word-count");Number(i)>=0&&(this.wordCount=Number(i))}else r.textContent.trim()&&(this.wordCount=r.textContent.split(/\b\w+\b/).length);this.render()}}_langChangedHandler(e,t){t!==e&&(this.wpm=o(t),this.render())}};a.create(n);var c=n;export{c as default};
/*! For license information please see pfe-readtime-WVTFFLO6.js.LEGAL.txt */
//# sourceMappingURL=pfe-readtime-WVTFFLO6.js.map
