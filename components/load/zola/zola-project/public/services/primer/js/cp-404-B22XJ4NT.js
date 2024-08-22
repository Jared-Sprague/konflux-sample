import"./chunk-6QYQWMEQ.js";import"./chunk-62MTE4FU.js";import{a as i}from"./chunk-2F4U7AW6.js";import{a as s}from"./chunk-JGUPDZZ6.js";import"./chunk-UXAV2KNF.js";s();var e=class extends i{static get version(){return"0.1.6"}get html(){return`<style>*{box-sizing:border-box}.hidden-mobile{display:none}@media (min-width:992px){.hidden-mobile{display:block}}@media (min-width:992px){.hidden-nonmobile{display:none}}.not-found{display:block;width:100%;max-width:675px;margin-left:auto;margin-right:auto;margin-bottom:4rem;font-family:"Red Hat Display",RedHatDisplay,Helvetica,sans-serif}.back-button{border-radius:2px;background-color:#06c;color:#fff;padding:.5rem 1rem;font-size:1rem;cursor:pointer;border:none;font-family:"Red Hat Display",RedHatDisplay,Helvetica,sans-serif}.back-button:hover{background-color:#0056b3}@media (max-width:992px){.not-found{padding-left:1rem;padding-right:1rem;width:auto}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}h1{font-size:64px;color:#151515;text-align:center;margin-bottom:0;line-height:84px}h1 span{display:block;font-size:18px;text-transform:uppercase;color:#c9190b;text-align:center;margin-bottom:0;line-height:23px}p{font-size:18px;text-align:center;font-weight:300}.text-container{text-align:center;max-width:442px;margin:auto}.next-steps{display:flex;justify-content:space-between;margin-top:2rem;padding:1.5rem;border:1px solid #d2d2d2;border-top:4px solid #e00;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,.15);background:#fff}@media (max-width:992px){.next-steps{flex-direction:column}}.next-steps form{width:50%;position:relative;display:flex;align-items:center}@media (max-width:992px){.next-steps form{width:100%;margin-bottom:2rem}}.next-steps button,.next-steps input{height:40px;border:1px solid #8a8d90}.next-steps input{width:100%;border-right:0;padding-left:.5rem;font-size:16px;line-height:21px;font-family:"Red Hat Display",RedHatDisplay,Helvetica,sans-serif}.next-steps button{display:flex;width:40px;border-left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs/rh-icon-search.svg);background-position:center center;background-repeat:no-repeat;background-size:28px auto}@supports ((-webkit-mask-image:url("#")) or (mask-image:url("#"))){.next-steps button{background:0 0}.next-steps button:before{content:'';display:block;width:28px;height:28px;margin:auto;-webkit-mask-image:url(https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs/rh-icon-search.svg);mask-image:url(https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs/rh-icon-search.svg);background:#06c;cursor:pointer}}.next-steps .suggestion-heading{font-weight:500;font-size:18px}.next-steps ul{padding:0;max-width:275px}.next-steps ul li{list-style:none;display:inline-block;margin-right:1.5rem;padding:.25rem 0}.next-steps ul li a{text-decoration:none;font-weight:300;color:#06c}:host([hidden]),[hidden]{display:none}.margin-right{margin-right:1rem}.external-link{font-weight:700}
/*# sourceMappingURL=cp-404.min.css.map */
</style><section class="not-found">
  <h1>${this.heading||"404"} <span>${this.subheading||"Page not found"}</span></h2>
  <div class="text-container">
    <p>${this.errormessage||"The page you're trying too find was either removed, moved, or maybe the URL isn't quite right."}</p>
    ${this.url?`<p><span class="external-link">External link:</span> ${this.url}</p>`:""}
    ${this.bounce?`
        <button class="back-button margin-right" onclick="(function navigate(e) { history.back() })()">Go back</button>
      `:""}
    ${this.url?`<pfe-cta>
        <a
          href="${this.url}">
          Proceed
        </a>
      </pfe-cta>`:""}
    ${this.bounce?"":`<pfe-cta>
        <a href="/">Back to home</a>
      </pfe-cta>`}
  </div>
  <aside class="next-steps">
    <div class="hidden-mobile">
      <h3 class="suggestion-heading" id="suggestion-heading-nonmobile">Top pages:</h3>
      <ul aria-labelledby="suggestion-heading">
        <li><a href="/products/">Products and Documentation</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/community">Community</a></li>
      </ul>
    </div>
    <form id="cp404Search" target="_blank" role='search' method='get' action="/search/?q=">
      <label class="sr-only" for="searchQuery">
        Search the Customer Portal
      </label>
      <input id="searchQuery" name="q" placeholder="Search the Customer Portal" />
      <input type="hidden" name="search-type" value="404">
      <button class="searchSubmit">
        <span class="sr-only">
          Search
        </span>
      </button>
    </form>
    <div class="hidden-nonmobile">
      <h3 class="suggestion-heading" id="suggestion-heading-mobile">Top pages:</h3>
      <ul aria-labelledby="suggestion-heading">
        <li><a href="/products/">Productions and Documentation</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/community">Community</a></li>
      </ul>
    </div>
  </aside>
</section>
<slot hidden></slot>`}static get properties(){return{}}static get slots(){return{default:{title:"Default slot",type:"array",namedSlot:!1,items:{oneOf:[{$ref:"raw"}]}}}}static get tag(){return"cp-404"}get schemaUrl(){return"cp-404.json"}get templateUrl(){return"cp-404.html"}get styleUrl(){return"cp-404.css"}static get PfeType(){return i.PfeTypes.Content}static get properties(){return{heading:{type:String},subheading:{type:String},errormessage:{type:String},bounce:{type:String},url:{type:String}}}static get slots(){return{}}static get observedAttributes(){return["heading","subheading","errormessage","bounce","url"]}sanitize(t){let n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},a=/[&<>"'/]/ig;return t.replace(a,r=>n[r])}constructor(){super(e,{type:e.PfeType})}connectedCallback(){super.connectedCallback(),this.bounce&&(this.externalURL=this.sanitize(new URLSearchParams(window.location.search).get("externalURL")),this.setAttribute("url",this.externalURL),console.log(this.url)),console.log(this.url)}attributeChangedCallback(t,n,a){console.log(`${t} changed from ${n} to ${a}`),t==="url"&&this.render()}};i.create(e);var d=e;export{d as default};
/*! For license information please see cp-404-B22XJ4NT.js.LEGAL.txt */
//# sourceMappingURL=cp-404-B22XJ4NT.js.map
