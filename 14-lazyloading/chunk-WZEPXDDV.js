import{c as s,f as e}from"./chunk-LGQXRESW.js";import{N as r,S as i}from"./chunk-FDKNML2W.js";var n=class t{#t=i(s);#o="https://api6.angular-buch.com";getBookList(o){return e(()=>({url:`${this.#o}/books`,params:{search:o()}}),{defaultValue:[]})}getOneBook(o){return e(()=>`${this.#o}/books/${o()}`)}deleteBook(o){return this.#t.delete(`${this.#o}/books/${o}`)}createBook(o){return this.#t.post(`${this.#o}/books`,o)}static \u0275fac=function(a){return new(a||t)};static \u0275prov=r({token:t,factory:t.\u0275fac,providedIn:"root"})};export{n as a};
