import{a as l,b as d,i as b,ia as p,l as u,la as v,m as f,ma as g,v as m}from"./chunk-MKNBD4KO.js";function s(t){return t?.injector||f(s),p(d(l({},t),{loader:void 0,stream:e=>{let n,c=()=>n.unsubscribe();e.abortSignal.addEventListener("abort",c);let a=m({value:void 0}),o,h=new Promise(r=>o=r);function i(r){a.set(r),o?.(a),o=void 0}return n=t.loader(e).subscribe({next:r=>i({value:r}),error:r=>i({error:r}),complete:()=>{o&&i({error:new Error("Resource completed before producing a value")}),e.abortSignal.removeEventListener("abort",c)}}),h}}))}var k=class t{#e=u(g);#t="https://api6.angular-buch.com";getBookList(e){return s({request:e,loader:()=>this.#e.get(this.#t+"/books",{params:new v().set("search",e())}),defaultValue:[]})}getOneBook(e){return s({request:e,loader:()=>this.#e.get(this.#t+"/books/"+e())})}deleteBook(e){return this.#e.delete(this.#t+"/books/"+e)}createBook(e){return this.#e.post(`${this.#t}/books`,e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};export{k as a};
