import{a as r}from"./chunk-2F4U7AW6.js";import{a}from"./chunk-JGUPDZZ6.js";a();var o=class extends r{static get version(){return"0.0.6"}get html(){return`<style>:host{display:block}:host([hidden]){display:none}pfe-autocomplete input{--pfe-theme--ui--element--size:17px}pfe-autocomplete ul li:hover{color:#252525;background-color:#ececec}
/*# sourceMappingURL=cp-search-autocomplete.min.css.map */
</style><pfe-autocomplete id="static" debounce="300"> 
    <input placeholder="Enter your search term">
</pfe-autocomplete>`}static get tag(){return"cp-search-autocomplete"}static get properties(){return{}}static get slots(){return{}}get templateUrl(){return"cp-search-autocomplete.html"}get styleUrl(){return"cp-search-autocomplete.scss"}static get PfeType(){return r.PfeTypes.Container}static get observedAttributes(){return["pfe-location","path","query"]}get numItems(){return this.getAttribute("num-items")||5}constructor(){super(o,{type:o.PfeType});this.path=this.getAttribute("path"),this._input=this.shadowRoot.querySelector("input"),this._data=null,this._searchAutocomplete=this.shadowRoot.querySelector("pfe-autocomplete"),this._searchAutocomplete.addEventListener("pfe-search-event",e=>console.log(e.detail.searchValue))}connectedCallback(){super.connectedCallback(),this._fetchData()}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s),e==="query"&&(this._input.value=s)}_fetchData(){if(!this.getAttribute("path"))return;let t=new XMLHttpRequest;t.onload=()=>{if(t.status===404)console.log("No data available");else{let s=JSON.parse(t.responseText);this._data=s,this._initAutocomplete()}},t.open("GET",this.path,!0),t.send()}_initAutocomplete(){this._searchAutocomplete.autocompleteRequest=(e,t)=>{let s=new RegExp("^"+e.query,"i"),c=this._data.filter(function(i){return s.test(i)}).slice(0,this.numItems);t(c)}}};r.create(o);var h=o;export{h as a};
/*! For license information please see chunk-NACCYA76.js.LEGAL.txt */
//# sourceMappingURL=chunk-NACCYA76.js.map
