import{A as v,D as H,E as o,G as L,H as d,J as g,L as ue,O as $,X as W,a,b as u,c as re,d as se,e as oe,f as ae,fa as I,l as F,la as c,m as w,ma as y,n as j,o as f,pa as q,r as B,u as le,y as U,z as _}from"./chunk-A64HT2UW.js";var ve=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(o(H),o(U))};static \u0275dir=d({type:n})}return n})(),je=(()=>{class n extends ve{static \u0275fac=(()=>{let t;return function(r){return(t||(t=le(n)))(r||n)}})();static \u0275dir=d({type:n,features:[g]})}return n})(),ye=new f("");var Be={provide:ye,useExisting:w(()=>Ce),multi:!0};function Ue(){let n=q()?q().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var He=new f(""),Ce=(()=>{class n extends ve{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Ue())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(o(H),o(U),o(He,8))};static \u0275dir=d({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&W("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[I([Be]),g]})}return n})();function K(n){return n==null||J(n)===0}function J(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Ve=new f(""),De=new f(""),Le=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,de=class{static min(e){return $e(e)}static max(e){return We(e)}static required(e){return qe(e)}static requiredTrue(e){return ze(e)}static email(e){return Ze(e)}static minLength(e){return Xe(e)}static maxLength(e){return Ye(e)}static pattern(e){return Ke(e)}static nullValidator(e){return be()}static compose(e){return Ie(e)}static composeAsync(e){return Oe(e)}};function $e(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function We(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function qe(n){return K(n.value)?{required:!0}:null}function ze(n){return n.value===!0?null:{required:!0}}function Ze(n){return K(n.value)||Le.test(n.value)?null:{email:!0}}function Xe(n){return e=>{let t=e.value?.length??J(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Ye(n){return e=>{let t=e.value?.length??J(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Ke(n){if(!n)return be;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(K(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function be(n){return null}function Ae(n){return n!=null}function Me(n){return ue(n)?se(n):n}function Ee(n){let e={};return n.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Fe(n,e){return e.map(t=>t(n))}function Je(n){return!n.validate}function we(n){return n.map(e=>Je(e)?e:t=>e.validate(t))}function Ie(n){if(!n)return null;let e=n.filter(Ae);return e.length==0?null:function(t){return Ee(Fe(t,e))}}function Se(n){return n!=null?Ie(we(n)):null}function Oe(n){if(!n)return null;let e=n.filter(Ae);return e.length==0?null:function(t){let i=Fe(t,e).map(Me);return ae(i).pipe(oe(Ee))}}function Ne(n){return n!=null?Oe(we(n)):null}function ce(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function xe(n){return n._rawValidators}function Pe(n){return n._rawAsyncValidators}function z(n){return n?Array.isArray(n)?n:[n]:[]}function O(n,e){return Array.isArray(n)?n.includes(e):n===e}function he(n,e){let t=z(e);return z(n).forEach(r=>{O(t,r)||t.push(r)}),t}function fe(n,e){return z(e).filter(t=>!O(n,t))}var N=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Se(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},A=class extends N{name;get formDirective(){return null}get path(){return null}},M=class extends N{_parent=null;name=null;valueAccessor=null},x=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Lt=u(a({},Qe),{"[class.ng-submitted]":"isSubmitted"}),$t=(()=>{class n extends x{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(o(M,2))};static \u0275dir=d({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[g]})}return n})(),Wt=(()=>{class n extends x{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(o(A,10))};static \u0275dir=d({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&$("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[g]})}return n})();var C="VALID",S="INVALID",p="PENDING",V="DISABLED",h=class{},P=class extends h{value;source;constructor(e,t){super(),this.value=e,this.source=t}},D=class extends h{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},b=class extends h{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},m=class extends h{status;source;constructor(e,t){super(),this.status=e,this.source=t}},Z=class extends h{source;constructor(e){super(),this.source=e}},X=class extends h{source;constructor(e){super(),this.source=e}};function Q(n){return(T(n)?n.validators:n)||null}function et(n){return Array.isArray(n)?Se(n):n||null}function ee(n,e){return(T(e)?e.asyncValidators:n)||null}function tt(n){return Array.isArray(n)?Ne(n):n||null}function T(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function ke(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new F(1e3,"");if(!i[t])throw new F(1001,"")}function Re(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new F(1002,"")})}var E=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return c(this.statusReactive)}set status(e){c(()=>this.statusReactive.set(e))}_status=y(()=>this.statusReactive());statusReactive=_(void 0);get valid(){return this.status===C}get invalid(){return this.status===S}get pending(){return this.status==p}get disabled(){return this.status===V}get enabled(){return this.status!==V}errors;get pristine(){return c(this.pristineReactive)}set pristine(e){c(()=>this.pristineReactive.set(e))}_pristine=y(()=>this.pristineReactive());pristineReactive=_(!0);get dirty(){return!this.pristine}get touched(){return c(this.touchedReactive)}set touched(e){c(()=>this.touchedReactive.set(e))}_touched=y(()=>this.touchedReactive());touchedReactive=_(!1);get untouched(){return!this.touched}_events=new re;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(he(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(he(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(fe(e,this._rawAsyncValidators))}hasValidator(e){return O(this._rawValidators,e)}hasAsyncValidator(e){return O(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new b(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new b(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new D(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new D(!0,i))}markAsPending(e={}){this.status=p;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new m(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=V,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new P(this.value,i)),this._events.next(new m(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=C,this._forEachChild(i=>{i.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===C||this.status===p)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new P(this.value,t)),this._events.next(new m(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?V:C}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=p,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=Me(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new m(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?V:this.errors?S:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(p)?p:this._anyControlsHaveStatus(S)?S:C}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new D(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new b(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){T(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=et(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}},ge=class extends E{constructor(e,t,i){super(Q(t),ee(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Re(this,!0,e),Object.keys(e).forEach(i=>{ke(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var te=new f("",{providedIn:"root",factory:()=>ne}),ne="always";function Y(n,e,t=ne){ie(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),it(n,e),st(n,e),rt(n,e),nt(n,e)}function k(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),G(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function R(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function nt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ie(n,e){let t=xe(n);e.validator!==null?n.setValidators(ce(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Pe(n);e.asyncValidator!==null?n.setAsyncValidators(ce(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();R(e._rawValidators,r),R(e._rawAsyncValidators,r)}function G(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=xe(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(l=>l!==e.validator);s.length!==r.length&&(t=!0,n.setValidators(s))}}if(e.asyncValidator!==null){let r=Pe(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(l=>l!==e.asyncValidator);s.length!==r.length&&(t=!0,n.setAsyncValidators(s))}}}let i=()=>{};return R(e._rawValidators,i),R(e._rawAsyncValidators,i),t}function it(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ge(n,e)})}function rt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ge(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Ge(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function st(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function ot(n,e){n==null,ie(n,e)}function at(n,e){return G(n,e)}function lt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ut(n){return Object.getPrototypeOf(n.constructor)===je}function dt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ct(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===Ce?t=s:ut(s)?i=s:r=s}),r||i||t||null}function ht(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function pe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function me(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ft=class extends E{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Q(t),ee(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(t)&&(t.nonNullable||t.initialValueIsDefault)&&(me(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){me(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gt=n=>n instanceof ft;var zt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=d({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Te=new f(""),pt={provide:M,useExisting:w(()=>mt)},mt=(()=>{class n extends M{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new v;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,s,l){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=l,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=ct(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&k(i,this,!1),Y(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}lt(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&k(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||n)(o(Ve,10),o(De,10),o(ye,10),o(Te,8),o(te,8))};static \u0275dir=d({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[I([pt]),g,B]})}return n})(),_t={provide:A,useExisting:w(()=>vt)},vt=(()=>{class n extends A{callSetDisabledState;get submitted(){return c(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=y(()=>this._submittedReactive());_submittedReactive=_(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new v;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(G(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Y(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){k(t.control||null,t,!1),ht(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),dt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Z(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new X(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(k(i||null,t),gt(r)&&(Y(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);ot(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&at(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ie(this.form,this),this._oldForm&&G(this._oldForm,this)}static \u0275fac=function(i){return new(i||n)(o(Ve,10),o(De,10),o(te,8))};static \u0275dir=d({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&W("submit",function(l){return r.onSubmit(l)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[I([_t]),g,B]})}return n})();var yt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=L({type:n});static \u0275inj=j({})}return n})(),_e=class extends E{constructor(e,t,i){super(Q(t),ee(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Re(this,!1,e),e.forEach((i,r)=>{ke(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Zt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Te,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:te,useValue:t.callSetDisabledState??ne}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=L({type:n});static \u0275inj=j({imports:[yt]})}return n})();export{Ce as a,de as b,$t as c,Wt as d,ge as e,ft as f,zt as g,mt as h,vt as i,_e as j,Zt as k};
