import{a as m}from"./chunk-SILBYSBB.js";import{a as u}from"./chunk-DO63YBFD.js";import"./chunk-GNHSL7FV.js";u();var n=class extends m{static get version(){return"1.12.2"}get html(){return`
<style>:host{display:inline} /*# sourceMappingURL=pfe-datetime.min.css.map */</style>
<span></span>`}static get tag(){return"pfe-datetime"}get styleUrl(){return"pfe-datetime.scss"}get templateUrl(){return"pfe-datetime.html"}get _dateTimeType(){return this.format||this.type||n.properties.format.default}static get properties(){return{format:{title:"Format",type:String,values:["local","relative"],default:"local"},oldType:{alias:"format",attr:"type"},datetime:{title:"Date and time",type:String,observer:"_datetimeChanged",prefix:!1},timestamp:{title:"Timestamp",type:String,observer:"_timestampChanged",prefix:!1}}}constructor(){super(n)}_datetimeChanged(i,e){!Date.parse(e)||Date.parse(e)&&this._datetime===Date.parse(e)||this.setDate(Date.parse(e))}_timestampChanged(i,e){if(this._timestamp===e){this.log("early return");return}this._timestamp=e,this.setDate(new Date(e*1e3))}setDate(i){this._datetime=i,this.shadowRoot.querySelector("span").innerText=window.Intl?this._getTypeString():i.toLocaleString()}_getOptions(){let i={weekday:{short:"short",long:"long"},day:{numeric:"numeric","2-digit":"2-digit"},month:{short:"short",long:"long"},year:{numeric:"numeric","2-digit":"2-digit"},hour:{numeric:"numeric","2-digit":"2-digit"},minute:{numeric:"numeric","2-digit":"2-digit"},second:{numeric:"numeric","2-digit":"2-digit"},timeZoneName:{short:"short",long:"long"}},e={};for(let t in i){let s=t.replace(/[\w]([A-Z])/g,a=>a[0]+"-"+a[1]).toLowerCase(),r=i[t][this.getAttribute(s)];r&&(e[t]=r)}return this.getAttribute("time-zone")&&(e.timeZone=this.getAttribute("time-zone")),e}_getTypeString(){let i=this._getOptions(),e=this.getAttribute("locale")||navigator.language,t="";switch(this._dateTimeType){case"local":t=new Intl.DateTimeFormat(e,i).format(this._datetime);break;case"relative":t=this._getTimeRelative(this._datetime-Date.now());break;default:t=this._datetime}return t}_getTimeRelative(i){let e=i>0?"until":"ago",t="just now",s=Math.round(Math.abs(i)/1e3),r=Math.round(s/60),a=Math.round(r/60),o=Math.round(a/24),l=Math.round(o/30),d=Math.round(l/12);return l>=18?t=d+" years":l>=12?t="a year":o>=45?t=l+" months":o>=30?t="a month":a>=36?t=o+" days":a>=24?t="a day":r>=90?t=a+" hours":r>=45?t="an hour":s>=90?t=r+" minutes":s>=45?t="a minute":s>=10&&(t=s+" seconds"),t!=="just now"?`${t} ${e}`:t}};m.create(n);var h=n;export{h as default};
/*! For license information please see pfe-datetime-KOWMQQ2U.js.LEGAL.txt */
//# sourceMappingURL=pfe-datetime-KOWMQQ2U.js.map
