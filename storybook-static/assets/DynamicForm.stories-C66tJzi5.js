import{R as q,r as Y}from"./iframe-dJyc6u-y.js";import"./preload-helper-Dp1pzeXC.js";var ot={exports:{}},Ce={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It;function $s(){if(It)return Ce;It=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(s,n,l){var u=null;if(l!==void 0&&(u=""+l),n.key!==void 0&&(u=""+n.key),"key"in n){l={};for(var c in n)c!=="key"&&(l[c]=n[c])}else l=n;return n=l.ref,{$$typeof:e,type:s,key:u,ref:n!==void 0?n:null,props:l}}return Ce.Fragment=r,Ce.jsx=t,Ce.jsxs=t,Ce}var $t;function Ws(){return $t||($t=1,ot.exports=$s()),ot.exports}var o=Ws(),we=e=>e.type==="checkbox",xe=e=>e instanceof Date,te=e=>e==null;const rs=e=>typeof e=="object";var K=e=>!te(e)&&!Array.isArray(e)&&rs(e)&&!xe(e),ss=e=>K(e)&&e.target?we(e.target)?e.target.checked:e.target.value:e,Ps=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,as=(e,r)=>e.has(Ps(r)),zs=e=>{const r=e.constructor&&e.constructor.prototype;return K(r)&&r.hasOwnProperty("isPrototypeOf")},Ct=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function J(e){let r;const t=Array.isArray(e),s=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Ct&&(e instanceof Blob||s))&&(t||K(e)))if(r=t?[]:{},!t&&!zs(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=J(e[n]));else return e;return r}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],H=e=>e===void 0,F=(e,r,t)=>{if(!r||!K(e))return t;const s=Ve(r.split(/[,[\].]+?/)).reduce((n,l)=>te(n)?n:n[l],e);return H(s)||s===e?H(e[r])?t:e[r]:s},se=e=>typeof e=="boolean",Ft=e=>/^\w*$/.test(e),ns=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),z=(e,r,t)=>{let s=-1;const n=Ft(r)?[r]:ns(r),l=n.length,u=l-1;for(;++s<l;){const c=n[s];let d=t;if(s!==u){const x=e[c];d=K(x)||Array.isArray(x)?x:isNaN(+n[s+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;e[c]=d,e=e[c]}};const Qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},oe={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},pe={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ls=q.createContext(null),Z=()=>q.useContext(ls),Us=e=>{const{children:r,...t}=e;return q.createElement(ls.Provider,{value:t},r)};var os=(e,r,t,s=!0)=>{const n={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const u=l;return r._proxyFormState[u]!==oe.all&&(r._proxyFormState[u]=!s||oe.all),t&&(t[u]=!0),e[u]}});return n};const Tt=typeof window<"u"?Y.useLayoutEffect:Y.useEffect;function Gs(e){const r=Z(),{control:t=r.control,disabled:s,name:n,exact:l}=e||{},[u,c]=q.useState(t._formState),d=q.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Tt(()=>t._subscribe({name:n,formState:d.current,exact:l,callback:x=>{!s&&c({...t._formState,...x})}}),[n,s,l]),q.useEffect(()=>{d.current.isValid&&t._setValid(!0)},[t]),q.useMemo(()=>os(u,t,d.current,!1),[u,t])}var de=e=>typeof e=="string",is=(e,r,t,s,n)=>de(e)?(s&&r.watch.add(e),F(t,e,n)):Array.isArray(e)?e.map(l=>(s&&r.watch.add(l),F(t,l))):(s&&(r.watchAll=!0),t);function tt(e){const r=Z(),{control:t=r.control,name:s,defaultValue:n,disabled:l,exact:u}=e||{},c=q.useRef(n),[d,x]=q.useState(t._getWatch(s,c.current));return Tt(()=>t._subscribe({name:s,formState:{values:!0},exact:u,callback:g=>!l&&x(is(s,t._names,g.values||t._formValues,!1,c.current))}),[s,t,l,u]),q.useEffect(()=>t._removeUnmounted()),d}function ue(e){const r=Z(),{name:t,disabled:s,control:n=r.control,shouldUnregister:l}=e,u=as(n._names.array,t),c=tt({control:n,name:t,defaultValue:F(n._formValues,t,F(n._defaultValues,t,e.defaultValue)),exact:!0}),d=Gs({control:n,name:t,exact:!0}),x=q.useRef(e),g=q.useRef(n.register(t,{...e.rules,value:c,...se(e.disabled)?{disabled:e.disabled}:{}})),v=q.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!F(d.errors,t)},isDirty:{enumerable:!0,get:()=>!!F(d.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!F(d.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!F(d.validatingFields,t)},error:{enumerable:!0,get:()=>F(d.errors,t)}}),[d,t]),m=q.useCallback(E=>g.current.onChange({target:{value:ss(E),name:t},type:Qe.CHANGE}),[t]),y=q.useCallback(()=>g.current.onBlur({target:{value:F(n._formValues,t),name:t},type:Qe.BLUR}),[t,n._formValues]),A=q.useCallback(E=>{const B=F(n._fields,t);B&&E&&(B._f.ref={focus:()=>E.focus(),select:()=>E.select(),setCustomValidity:f=>E.setCustomValidity(f),reportValidity:()=>E.reportValidity()})},[n._fields,t]),k=q.useMemo(()=>({name:t,value:c,...se(s)||d.disabled?{disabled:d.disabled||s}:{},onChange:m,onBlur:y,ref:A}),[t,s,d.disabled,m,y,A,c]);return q.useEffect(()=>{const E=n._options.shouldUnregister||l;n.register(t,{...x.current.rules,...se(x.current.disabled)?{disabled:x.current.disabled}:{}});const B=(f,M)=>{const L=F(n._fields,f);L&&L._f&&(L._f.mount=M)};if(B(t,!0),E){const f=J(F(n._options.defaultValues,t));z(n._defaultValues,t,f),H(F(n._formValues,t))&&z(n._formValues,t,f)}return!u&&n.register(t),()=>{(u?E&&!n._state.action:E)?n.unregister(t):B(t,!1)}},[t,n,u,l]),q.useEffect(()=>{n._setDisabledField({disabled:s,name:t})},[s,t,n]),q.useMemo(()=>({field:k,formState:d,fieldState:v}),[k,d,v])}var Hs=(e,r,t,s,n)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[s]:n||!0}}:{},re=e=>Array.isArray(e)?e:[e],Wt=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},ft=e=>te(e)||!rs(e);function ge(e,r){if(ft(e)||ft(r))return e===r;if(xe(e)&&xe(r))return e.getTime()===r.getTime();const t=Object.keys(e),s=Object.keys(r);if(t.length!==s.length)return!1;for(const n of t){const l=e[n];if(!s.includes(n))return!1;if(n!=="ref"){const u=r[n];if(xe(l)&&xe(u)||K(l)&&K(u)||Array.isArray(l)&&Array.isArray(u)?!ge(l,u):l!==u)return!1}}return!0}var X=e=>K(e)&&!Object.keys(e).length,_t=e=>e.type==="file",ie=e=>typeof e=="function",Ze=e=>{if(!Ct)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},us=e=>e.type==="select-multiple",wt=e=>e.type==="radio",Js=e=>wt(e)||we(e),it=e=>Ze(e)&&e.isConnected;function Ys(e,r){const t=r.slice(0,-1).length;let s=0;for(;s<t;)e=H(e)?s++:e[r[s++]];return e}function Ks(e){for(const r in e)if(e.hasOwnProperty(r)&&!H(e[r]))return!1;return!0}function Q(e,r){const t=Array.isArray(r)?r:Ft(r)?[r]:ns(r),s=t.length===1?e:Ys(e,t),n=t.length-1,l=t[n];return s&&delete s[l],n!==0&&(K(s)&&X(s)||Array.isArray(s)&&Ks(s))&&Q(e,t.slice(0,-1)),e}var cs=e=>{for(const r in e)if(ie(e[r]))return!0;return!1};function Xe(e,r={}){const t=Array.isArray(e);if(K(e)||t)for(const s in e)Array.isArray(e[s])||K(e[s])&&!cs(e[s])?(r[s]=Array.isArray(e[s])?[]:{},Xe(e[s],r[s])):te(e[s])||(r[s]=!0);return r}function ds(e,r,t){const s=Array.isArray(e);if(K(e)||s)for(const n in e)Array.isArray(e[n])||K(e[n])&&!cs(e[n])?H(r)||ft(t[n])?t[n]=Array.isArray(e[n])?Xe(e[n],[]):{...Xe(e[n])}:ds(e[n],te(r)?{}:r[n],t[n]):t[n]=!ge(e[n],r[n]);return t}var Fe=(e,r)=>ds(e,r,Xe(r));const Pt={value:!1,isValid:!1},zt={value:!0,isValid:!0};var ps=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!H(e[0].attributes.value)?H(e[0].value)||e[0].value===""?zt:{value:e[0].value,isValid:!0}:zt:Pt}return Pt},ms=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:s})=>H(e)?e:r?e===""?NaN:e&&+e:t&&de(e)?new Date(e):s?s(e):e;const Ut={isValid:!1,value:null};var ys=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,Ut):Ut;function Gt(e){const r=e.ref;return _t(r)?r.files:wt(r)?ys(e.refs).value:us(r)?[...r.selectedOptions].map(({value:t})=>t):we(r)?ps(e.refs).value:ms(H(r.value)?e.ref.value:r.value,e)}var Qs=(e,r,t,s)=>{const n={};for(const l of e){const u=F(r,l);u&&z(n,l,u._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:s}},et=e=>e instanceof RegExp,Te=e=>H(e)?e:et(e)?e.source:K(e)?et(e.value)?e.value.source:e.value:e,ve=e=>({isOnSubmit:!e||e===oe.onSubmit,isOnBlur:e===oe.onBlur,isOnChange:e===oe.onChange,isOnAll:e===oe.all,isOnTouch:e===oe.onTouched});const Ht="AsyncFunction";var Zs=e=>!!e&&!!e.validate&&!!(ie(e.validate)&&e.validate.constructor.name===Ht||K(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===Ht)),Xs=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),vt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const Se=(e,r,t,s)=>{for(const n of t||Object.keys(e)){const l=F(e,n);if(l){const{_f:u,...c}=l;if(u){if(u.refs&&u.refs[0]&&r(u.refs[0],n)&&!s)return!0;if(u.ref&&r(u.ref,u.name)&&!s)return!0;if(Se(c,r))break}else if(K(c)&&Se(c,r))break}}};function Jt(e,r,t){const s=F(e,t);if(s||Ft(t))return{error:s,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),u=F(r,l),c=F(e,l);if(u&&!Array.isArray(u)&&t!==l)return{name:t};if(c&&c.type)return{name:l,error:c};n.pop()}return{name:t}}var ea=(e,r,t,s)=>{t(e);const{name:n,...l}=e;return X(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(u=>r[u]===(!s||oe.all))},ta=(e,r,t)=>!e||!r||e===r||re(e).some(s=>s&&(t?s===r:s.startsWith(r)||r.startsWith(s))),ra=(e,r,t,s,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(r||e):(t?s.isOnBlur:n.isOnBlur)?!e:(t?s.isOnChange:n.isOnChange)?e:!0,sa=(e,r)=>!Ve(F(e,r)).length&&Q(e,r),hs=(e,r,t)=>{const s=re(F(e,t));return z(s,"root",r[t]),z(e,t,s),e},Ke=e=>de(e);function Yt(e,r,t="validate"){if(Ke(e)||Array.isArray(e)&&e.every(Ke)||se(e)&&!e)return{type:t,message:Ke(e)?e:"",ref:r}}var fe=e=>K(e)&&!et(e)?e:{value:e,message:""},St=async(e,r,t,s,n,l)=>{const{ref:u,refs:c,required:d,maxLength:x,minLength:g,min:v,max:m,pattern:y,validate:A,name:k,valueAsNumber:E,mount:B}=e._f,f=F(t,k);if(!B||r.has(k))return{};const M=c?c[0]:u,L=N=>{n&&M.reportValidity&&(M.setCustomValidity(se(N)?"":N||""),M.reportValidity())},j={},C=wt(u),b=we(u),h=C||b,_=(E||_t(u))&&H(u.value)&&H(f)||Ze(u)&&u.value===""||f===""||Array.isArray(f)&&!f.length,R=Hs.bind(null,k,s,j),I=(N,$,W,O=pe.maxLength,G=pe.minLength)=>{const ee=N?$:W;j[k]={type:N?O:G,message:ee,ref:u,...R(N?O:G,ee)}};if(l?!Array.isArray(f)||!f.length:d&&(!h&&(_||te(f))||se(f)&&!f||b&&!ps(c).isValid||C&&!ys(c).isValid)){const{value:N,message:$}=Ke(d)?{value:!!d,message:d}:fe(d);if(N&&(j[k]={type:pe.required,message:$,ref:M,...R(pe.required,$)},!s))return L($),j}if(!_&&(!te(v)||!te(m))){let N,$;const W=fe(m),O=fe(v);if(!te(f)&&!isNaN(f)){const G=u.valueAsNumber||f&&+f;te(W.value)||(N=G>W.value),te(O.value)||($=G<O.value)}else{const G=u.valueAsDate||new Date(f),ee=qe=>new Date(new Date().toDateString()+" "+qe),me=u.type=="time",ye=u.type=="week";de(W.value)&&f&&(N=me?ee(f)>ee(W.value):ye?f>W.value:G>new Date(W.value)),de(O.value)&&f&&($=me?ee(f)<ee(O.value):ye?f<O.value:G<new Date(O.value))}if((N||$)&&(I(!!N,W.message,O.message,pe.max,pe.min),!s))return L(j[k].message),j}if((x||g)&&!_&&(de(f)||l&&Array.isArray(f))){const N=fe(x),$=fe(g),W=!te(N.value)&&f.length>+N.value,O=!te($.value)&&f.length<+$.value;if((W||O)&&(I(W,N.message,$.message),!s))return L(j[k].message),j}if(y&&!_&&de(f)){const{value:N,message:$}=fe(y);if(et(N)&&!f.match(N)&&(j[k]={type:pe.pattern,message:$,ref:u,...R(pe.pattern,$)},!s))return L($),j}if(A){if(ie(A)){const N=await A(f,t),$=Yt(N,M);if($&&(j[k]={...$,...R(pe.validate,$.message)},!s))return L($.message),j}else if(K(A)){let N={};for(const $ in A){if(!X(N)&&!s)break;const W=Yt(await A[$](f,t),M,$);W&&(N={...W,...R($,W.message)},L(W.message),s&&(j[k]=N))}if(!X(N)&&(j[k]={ref:M,...N},!s))return j}}return L(!0),j};const aa={mode:oe.onSubmit,reValidateMode:oe.onChange,shouldFocusError:!0};function na(e={}){let r={...aa,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:ie(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1};const s={};let n=K(r.defaultValues)||K(r.values)?J(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:J(n),u={action:!1,mount:!1,watch:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,x=0;const g={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let v={...g};const m={array:Wt(),state:Wt()},y=r.criteriaMode===oe.all,A=a=>i=>{clearTimeout(x),x=setTimeout(a,i)},k=async a=>{if(!r.disabled&&(g.isValid||v.isValid||a)){const i=r.resolver?X((await b()).errors):await _(s,!0);i!==t.isValid&&m.state.next({isValid:i})}},E=(a,i)=>{!r.disabled&&(g.isValidating||g.validatingFields||v.isValidating||v.validatingFields)&&((a||Array.from(c.mount)).forEach(p=>{p&&(i?z(t.validatingFields,p,i):Q(t.validatingFields,p))}),m.state.next({validatingFields:t.validatingFields,isValidating:!X(t.validatingFields)}))},B=(a,i=[],p,w,T=!0,S=!0)=>{if(w&&p&&!r.disabled){if(u.action=!0,S&&Array.isArray(F(s,a))){const D=p(F(s,a),w.argA,w.argB);T&&z(s,a,D)}if(S&&Array.isArray(F(t.errors,a))){const D=p(F(t.errors,a),w.argA,w.argB);T&&z(t.errors,a,D),sa(t.errors,a)}if((g.touchedFields||v.touchedFields)&&S&&Array.isArray(F(t.touchedFields,a))){const D=p(F(t.touchedFields,a),w.argA,w.argB);T&&z(t.touchedFields,a,D)}(g.dirtyFields||v.dirtyFields)&&(t.dirtyFields=Fe(n,l)),m.state.next({name:a,isDirty:I(a,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else z(l,a,i)},f=(a,i)=>{z(t.errors,a,i),m.state.next({errors:t.errors})},M=a=>{t.errors=a,m.state.next({errors:t.errors,isValid:!1})},L=(a,i,p,w)=>{const T=F(s,a);if(T){const S=F(l,a,H(p)?F(n,a):p);H(S)||w&&w.defaultChecked||i?z(l,a,i?S:Gt(T._f)):W(a,S),u.mount&&k()}},j=(a,i,p,w,T)=>{let S=!1,D=!1;const P={name:a};if(!r.disabled){if(!p||w){(g.isDirty||v.isDirty)&&(D=t.isDirty,t.isDirty=P.isDirty=I(),S=D!==P.isDirty);const U=ge(F(n,a),i);D=!!F(t.dirtyFields,a),U?Q(t.dirtyFields,a):z(t.dirtyFields,a,!0),P.dirtyFields=t.dirtyFields,S=S||(g.dirtyFields||v.dirtyFields)&&D!==!U}if(p){const U=F(t.touchedFields,a);U||(z(t.touchedFields,a,p),P.touchedFields=t.touchedFields,S=S||(g.touchedFields||v.touchedFields)&&U!==p)}S&&T&&m.state.next(P)}return S?P:{}},C=(a,i,p,w)=>{const T=F(t.errors,a),S=(g.isValid||v.isValid)&&se(i)&&t.isValid!==i;if(r.delayError&&p?(d=A(()=>f(a,p)),d(r.delayError)):(clearTimeout(x),d=null,p?z(t.errors,a,p):Q(t.errors,a)),(p?!ge(T,p):T)||!X(w)||S){const D={...w,...S&&se(i)?{isValid:i}:{},errors:t.errors,name:a};t={...t,...D},m.state.next(D)}},b=async a=>{E(a,!0);const i=await r.resolver(l,r.context,Qs(a||c.mount,s,r.criteriaMode,r.shouldUseNativeValidation));return E(a),i},h=async a=>{const{errors:i}=await b(a);if(a)for(const p of a){const w=F(i,p);w?z(t.errors,p,w):Q(t.errors,p)}else t.errors=i;return i},_=async(a,i,p={valid:!0})=>{for(const w in a){const T=a[w];if(T){const{_f:S,...D}=T;if(S){const P=c.array.has(S.name),U=T._f&&Zs(T._f);U&&g.validatingFields&&E([w],!0);const le=await St(T,c.disabled,l,y,r.shouldUseNativeValidation&&!i,P);if(U&&g.validatingFields&&E([w]),le[S.name]&&(p.valid=!1,i))break;!i&&(F(le,S.name)?P?hs(t.errors,le,S.name):z(t.errors,S.name,le[S.name]):Q(t.errors,S.name))}!X(D)&&await _(D,i,p)}}return p.valid},R=()=>{for(const a of c.unMount){const i=F(s,a);i&&(i._f.refs?i._f.refs.every(p=>!it(p)):!it(i._f.ref))&&st(a)}c.unMount=new Set},I=(a,i)=>!r.disabled&&(a&&i&&z(l,a,i),!ge(qe(),n)),N=(a,i,p)=>is(a,c,{...u.mount?l:H(i)?n:de(a)?{[a]:i}:i},p,i),$=a=>Ve(F(u.mount?l:n,a,r.shouldUnregister?F(n,a,[]):[])),W=(a,i,p={})=>{const w=F(s,a);let T=i;if(w){const S=w._f;S&&(!S.disabled&&z(l,a,ms(i,S)),T=Ze(S.ref)&&te(i)?"":i,us(S.ref)?[...S.ref.options].forEach(D=>D.selected=T.includes(D.value)):S.refs?we(S.ref)?S.refs.forEach(D=>{(!D.defaultChecked||!D.disabled)&&(Array.isArray(T)?D.checked=!!T.find(P=>P===D.value):D.checked=T===D.value||!!T)}):S.refs.forEach(D=>D.checked=D.value===T):_t(S.ref)?S.ref.value="":(S.ref.value=T,S.ref.type||m.state.next({name:a,values:J(l)})))}(p.shouldDirty||p.shouldTouch)&&j(a,T,p.shouldTouch,p.shouldDirty,!0),p.shouldValidate&&ye(a)},O=(a,i,p)=>{for(const w in i){if(!i.hasOwnProperty(w))return;const T=i[w],S=`${a}.${w}`,D=F(s,S);(c.array.has(a)||K(T)||D&&!D._f)&&!xe(T)?O(S,T,p):W(S,T,p)}},G=(a,i,p={})=>{const w=F(s,a),T=c.array.has(a),S=J(i);z(l,a,S),T?(m.array.next({name:a,values:J(l)}),(g.isDirty||g.dirtyFields||v.isDirty||v.dirtyFields)&&p.shouldDirty&&m.state.next({name:a,dirtyFields:Fe(n,l),isDirty:I(a,S)})):w&&!w._f&&!te(S)?O(a,S,p):W(a,S,p),vt(a,c)&&m.state.next({...t}),m.state.next({name:u.mount?a:void 0,values:J(l)})},ee=async a=>{u.mount=!0;const i=a.target;let p=i.name,w=!0;const T=F(s,p),S=U=>{w=Number.isNaN(U)||xe(U)&&isNaN(U.getTime())||ge(U,F(l,p,U))},D=ve(r.mode),P=ve(r.reValidateMode);if(T){let U,le;const Ae=i.type?Gt(T._f):ss(a),he=a.type===Qe.BLUR||a.type===Qe.FOCUS_OUT,Os=!Xs(T._f)&&!r.resolver&&!F(t.errors,p)&&!T._f.deps||ra(he,F(t.touchedFields,p),t.isSubmitted,P,D),nt=vt(p,c,he);z(l,p,Ae),he?(T._f.onBlur&&T._f.onBlur(a),d&&d(0)):T._f.onChange&&T._f.onChange(a);const lt=j(p,Ae,he),Ms=!X(lt)||nt;if(!he&&m.state.next({name:p,type:a.type,values:J(l)}),Os)return(g.isValid||v.isValid)&&(r.mode==="onBlur"?he&&k():he||k()),Ms&&m.state.next({name:p,...nt?{}:lt});if(!he&&nt&&m.state.next({...t}),r.resolver){const{errors:Ot}=await b([p]);if(S(Ae),w){const Is=Jt(t.errors,s,p),Mt=Jt(Ot,s,Is.name||p);U=Mt.error,p=Mt.name,le=X(Ot)}}else E([p],!0),U=(await St(T,c.disabled,l,y,r.shouldUseNativeValidation))[p],E([p]),S(Ae),w&&(U?le=!1:(g.isValid||v.isValid)&&(le=await _(s,!0)));w&&(T._f.deps&&ye(T._f.deps),C(p,le,U,lt))}},me=(a,i)=>{if(F(t.errors,i)&&a.focus)return a.focus(),1},ye=async(a,i={})=>{let p,w;const T=re(a);if(r.resolver){const S=await h(H(a)?a:T);p=X(S),w=a?!T.some(D=>F(S,D)):p}else a?(w=(await Promise.all(T.map(async S=>{const D=F(s,S);return await _(D&&D._f?{[S]:D}:D)}))).every(Boolean),!(!w&&!t.isValid)&&k()):w=p=await _(s);return m.state.next({...!de(a)||(g.isValid||v.isValid)&&p!==t.isValid?{}:{name:a},...r.resolver||!a?{isValid:p}:{},errors:t.errors}),i.shouldFocus&&!w&&Se(s,me,a?T:c.mount),w},qe=a=>{const i={...u.mount?l:n};return H(a)?i:de(a)?F(i,a):a.map(p=>F(i,p))},qt=(a,i)=>({invalid:!!F((i||t).errors,a),isDirty:!!F((i||t).dirtyFields,a),error:F((i||t).errors,a),isValidating:!!F(t.validatingFields,a),isTouched:!!F((i||t).touchedFields,a)}),js=a=>{a&&re(a).forEach(i=>Q(t.errors,i)),m.state.next({errors:a?t.errors:{}})},At=(a,i,p)=>{const w=(F(s,a,{_f:{}})._f||{}).ref,T=F(t.errors,a)||{},{ref:S,message:D,type:P,...U}=T;z(t.errors,a,{...U,...i,ref:w}),m.state.next({name:a,errors:t.errors,isValid:!1}),p&&p.shouldFocus&&w&&w.focus&&w.focus()},Ns=(a,i)=>ie(a)?m.state.subscribe({next:p=>a(N(void 0,i),p)}):N(a,i,!0),jt=a=>m.state.subscribe({next:i=>{ta(a.name,i.name,a.exact)&&ea(i,a.formState||g,Rs,a.reRenderRoot)&&a.callback({values:{...l},...t,...i})}}).unsubscribe,Es=a=>(u.mount=!0,v={...v,...a.formState},jt({...a,formState:v})),st=(a,i={})=>{for(const p of a?re(a):c.mount)c.mount.delete(p),c.array.delete(p),i.keepValue||(Q(s,p),Q(l,p)),!i.keepError&&Q(t.errors,p),!i.keepDirty&&Q(t.dirtyFields,p),!i.keepTouched&&Q(t.touchedFields,p),!i.keepIsValidating&&Q(t.validatingFields,p),!r.shouldUnregister&&!i.keepDefaultValue&&Q(n,p);m.state.next({values:J(l)}),m.state.next({...t,...i.keepDirty?{isDirty:I()}:{}}),!i.keepIsValid&&k()},Nt=({disabled:a,name:i})=>{(se(a)&&u.mount||a||c.disabled.has(i))&&(a?c.disabled.add(i):c.disabled.delete(i))},at=(a,i={})=>{let p=F(s,a);const w=se(i.disabled)||se(r.disabled);return z(s,a,{...p||{},_f:{...p&&p._f?p._f:{ref:{name:a}},name:a,mount:!0,...i}}),c.mount.add(a),p?Nt({disabled:se(i.disabled)?i.disabled:r.disabled,name:a}):L(a,!0,i.value),{...w?{disabled:i.disabled||r.disabled}:{},...r.progressive?{required:!!i.required,min:Te(i.min),max:Te(i.max),minLength:Te(i.minLength),maxLength:Te(i.maxLength),pattern:Te(i.pattern)}:{},name:a,onChange:ee,onBlur:ee,ref:T=>{if(T){at(a,i),p=F(s,a);const S=H(T.value)&&T.querySelectorAll&&T.querySelectorAll("input,select,textarea")[0]||T,D=Js(S),P=p._f.refs||[];if(D?P.find(U=>U===S):S===p._f.ref)return;z(s,a,{_f:{...p._f,...D?{refs:[...P.filter(it),S,...Array.isArray(F(n,a))?[{}]:[]],ref:{type:S.type,name:a}}:{ref:S}}}),L(a,!1,void 0,S)}else p=F(s,a,{}),p._f&&(p._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(as(c.array,a)&&u.action)&&c.unMount.add(a)}}},Et=()=>r.shouldFocusError&&Se(s,me,c.mount),Ds=a=>{se(a)&&(m.state.next({disabled:a}),Se(s,(i,p)=>{const w=F(s,p);w&&(i.disabled=w._f.disabled||a,Array.isArray(w._f.refs)&&w._f.refs.forEach(T=>{T.disabled=w._f.disabled||a}))},0,!1))},Dt=(a,i)=>async p=>{let w;p&&(p.preventDefault&&p.preventDefault(),p.persist&&p.persist());let T=J(l);if(m.state.next({isSubmitting:!0}),r.resolver){const{errors:S,values:D}=await b();t.errors=S,T=D}else await _(s);if(c.disabled.size)for(const S of c.disabled)z(T,S,void 0);if(Q(t.errors,"root"),X(t.errors)){m.state.next({errors:{}});try{await a(T,p)}catch(S){w=S}}else i&&await i({...t.errors},p),Et(),setTimeout(Et);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:X(t.errors)&&!w,submitCount:t.submitCount+1,errors:t.errors}),w)throw w},Bs=(a,i={})=>{F(s,a)&&(H(i.defaultValue)?G(a,J(F(n,a))):(G(a,i.defaultValue),z(n,a,J(i.defaultValue))),i.keepTouched||Q(t.touchedFields,a),i.keepDirty||(Q(t.dirtyFields,a),t.isDirty=i.defaultValue?I(a,J(F(n,a))):I()),i.keepError||(Q(t.errors,a),g.isValid&&k()),m.state.next({...t}))},Bt=(a,i={})=>{const p=a?J(a):n,w=J(p),T=X(a),S=T?n:w;if(i.keepDefaultValues||(n=p),!i.keepValues){if(i.keepDirtyValues){const D=new Set([...c.mount,...Object.keys(Fe(n,l))]);for(const P of Array.from(D))F(t.dirtyFields,P)?z(S,P,F(l,P)):G(P,F(S,P))}else{if(Ct&&H(a))for(const D of c.mount){const P=F(s,D);if(P&&P._f){const U=Array.isArray(P._f.refs)?P._f.refs[0]:P._f.ref;if(Ze(U)){const le=U.closest("form");if(le){le.reset();break}}}}for(const D of c.mount)G(D,F(S,D))}l=J(S),m.array.next({values:{...S}}),m.state.next({values:{...S}})}c={mount:i.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!g.isValid||!!i.keepIsValid||!!i.keepDirtyValues,u.watch=!!r.shouldUnregister,m.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:T?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ge(a,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:T?{}:i.keepDirtyValues?i.keepDefaultValues&&l?Fe(n,l):t.dirtyFields:i.keepDefaultValues&&a?Fe(n,a):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Lt=(a,i)=>Bt(ie(a)?a(l):a,i),Ls=(a,i={})=>{const p=F(s,a),w=p&&p._f;if(w){const T=w.refs?w.refs[0]:w.ref;T.focus&&(T.focus(),i.shouldSelect&&ie(T.select)&&T.select())}},Rs=a=>{t={...t,...a}},Rt={control:{register:at,unregister:st,getFieldState:qt,handleSubmit:Dt,setError:At,_subscribe:jt,_runSchema:b,_getWatch:N,_getDirty:I,_setValid:k,_setFieldArray:B,_setDisabledField:Nt,_setErrors:M,_getFieldArray:$,_reset:Bt,_resetDefaultValues:()=>ie(r.defaultValues)&&r.defaultValues().then(a=>{Lt(a,r.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:R,_disableForm:Ds,_subjects:m,_proxyFormState:g,get _fields(){return s},get _formValues(){return l},get _state(){return u},set _state(a){u=a},get _defaultValues(){return n},get _names(){return c},set _names(a){c=a},get _formState(){return t},get _options(){return r},set _options(a){r={...r,...a}}},subscribe:Es,trigger:ye,register:at,handleSubmit:Dt,watch:Ns,setValue:G,getValues:qe,reset:Lt,resetField:Bs,clearErrors:js,unregister:st,setError:At,setFocus:Ls,getFieldState:qt};return{...Rt,formControl:Rt}}var be=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const t=(Math.random()*16+e)%16|0;return(r=="x"?t:t&3|8).toString(16)})},ut=(e,r,t={})=>t.shouldFocus||H(t.shouldFocus)?t.focusName||`${e}.${H(t.focusIndex)?r:t.focusIndex}.`:"",ct=(e,r)=>[...e,...re(r)],dt=e=>Array.isArray(e)?e.map(()=>{}):void 0;function pt(e,r,t){return[...e.slice(0,r),...re(t),...e.slice(r)]}var mt=(e,r,t)=>Array.isArray(e)?(H(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[],yt=(e,r)=>[...re(r),...re(e)];function la(e,r){let t=0;const s=[...e];for(const n of r)s.splice(n-t,1),t++;return Ve(s).length?s:[]}var ht=(e,r)=>H(r)?[]:la(e,re(r).sort((t,s)=>t-s)),bt=(e,r,t)=>{[e[r],e[t]]=[e[t],e[r]]},Kt=(e,r,t)=>(e[r]=t,e);function oa(e){const r=Z(),{control:t=r.control,name:s,keyName:n="id",shouldUnregister:l,rules:u}=e,[c,d]=q.useState(t._getFieldArray(s)),x=q.useRef(t._getFieldArray(s).map(be)),g=q.useRef(c),v=q.useRef(s),m=q.useRef(!1);v.current=s,g.current=c,t._names.array.add(s),u&&t.register(s,u),q.useEffect(()=>t._subjects.array.subscribe({next:({values:C,name:b})=>{if(b===v.current||!b){const h=F(C,v.current);Array.isArray(h)&&(d(h),x.current=h.map(be))}}}).unsubscribe,[t]);const y=q.useCallback(C=>{m.current=!0,t._setFieldArray(s,C)},[t,s]),A=(C,b)=>{const h=re(J(C)),_=ct(t._getFieldArray(s),h);t._names.focus=ut(s,_.length-1,b),x.current=ct(x.current,h.map(be)),y(_),d(_),t._setFieldArray(s,_,ct,{argA:dt(C)})},k=(C,b)=>{const h=re(J(C)),_=yt(t._getFieldArray(s),h);t._names.focus=ut(s,0,b),x.current=yt(x.current,h.map(be)),y(_),d(_),t._setFieldArray(s,_,yt,{argA:dt(C)})},E=C=>{const b=ht(t._getFieldArray(s),C);x.current=ht(x.current,C),y(b),d(b),!Array.isArray(F(t._fields,s))&&z(t._fields,s,void 0),t._setFieldArray(s,b,ht,{argA:C})},B=(C,b,h)=>{const _=re(J(b)),R=pt(t._getFieldArray(s),C,_);t._names.focus=ut(s,C,h),x.current=pt(x.current,C,_.map(be)),y(R),d(R),t._setFieldArray(s,R,pt,{argA:C,argB:dt(b)})},f=(C,b)=>{const h=t._getFieldArray(s);bt(h,C,b),bt(x.current,C,b),y(h),d(h),t._setFieldArray(s,h,bt,{argA:C,argB:b},!1)},M=(C,b)=>{const h=t._getFieldArray(s);mt(h,C,b),mt(x.current,C,b),y(h),d(h),t._setFieldArray(s,h,mt,{argA:C,argB:b},!1)},L=(C,b)=>{const h=J(b),_=Kt(t._getFieldArray(s),C,h);x.current=[..._].map((R,I)=>!R||I===C?be():x.current[I]),y(_),d([..._]),t._setFieldArray(s,_,Kt,{argA:C,argB:h},!0,!1)},j=C=>{const b=re(J(C));x.current=b.map(be),y([...b]),d([...b]),t._setFieldArray(s,[...b],h=>h,{},!0,!1)};return q.useEffect(()=>{if(t._state.action=!1,vt(s,t._names)&&t._subjects.state.next({...t._formState}),m.current&&(!ve(t._options.mode).isOnSubmit||t._formState.isSubmitted)&&!ve(t._options.reValidateMode).isOnSubmit)if(t._options.resolver)t._runSchema([s]).then(C=>{const b=F(C.errors,s),h=F(t._formState.errors,s);(h?!b&&h.type||b&&(h.type!==b.type||h.message!==b.message):b&&b.type)&&(b?z(t._formState.errors,s,b):Q(t._formState.errors,s),t._subjects.state.next({errors:t._formState.errors}))});else{const C=F(t._fields,s);C&&C._f&&!(ve(t._options.reValidateMode).isOnSubmit&&ve(t._options.mode).isOnSubmit)&&St(C,t._names.disabled,t._formValues,t._options.criteriaMode===oe.all,t._options.shouldUseNativeValidation,!0).then(b=>!X(b)&&t._subjects.state.next({errors:hs(t._formState.errors,b,s)}))}t._subjects.state.next({name:s,values:J(t._formValues)}),t._names.focus&&Se(t._fields,(C,b)=>{if(t._names.focus&&b.startsWith(t._names.focus)&&C.focus)return C.focus(),1}),t._names.focus="",t._setValid(),m.current=!1},[c,s,t]),q.useEffect(()=>(!F(t._formValues,s)&&t._setFieldArray(s),()=>{const C=(b,h)=>{const _=F(t._fields,b);_&&_._f&&(_._f.mount=h)};t._options.shouldUnregister||l?t.unregister(s):C(s,!1)}),[s,t,n,l]),{swap:q.useCallback(f,[y,s,t]),move:q.useCallback(M,[y,s,t]),prepend:q.useCallback(k,[y,s,t]),append:q.useCallback(A,[y,s,t]),remove:q.useCallback(E,[y,s,t]),insert:q.useCallback(B,[y,s,t]),update:q.useCallback(L,[y,s,t]),replace:q.useCallback(j,[y,s,t]),fields:q.useMemo(()=>c.map((C,b)=>({...C,[n]:x.current[b]||be()})),[c,n])}}function ia(e={}){const r=q.useRef(void 0),t=q.useRef(void 0),[s,n]=q.useState({isDirty:!1,isValidating:!1,isLoading:ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:ie(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...e.formControl?e.formControl:na(e),formState:s},e.formControl&&e.defaultValues&&!ie(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const l=r.current.control;return l._options=e,Tt(()=>{const u=l._subscribe({formState:l._proxyFormState,callback:()=>n({...l._formState}),reRenderRoot:!0});return n(c=>({...c,isReady:!0})),l._formState.isReady=!0,u},[l]),q.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),q.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode),e.errors&&!X(e.errors)&&l._setErrors(e.errors)},[l,e.errors,e.mode,e.reValidateMode]),q.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),q.useEffect(()=>{if(l._proxyFormState.isDirty){const u=l._getDirty();u!==s.isDirty&&l._subjects.state.next({isDirty:u})}},[l,s.isDirty]),q.useEffect(()=>{e.values&&!ge(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,n(u=>({...u}))):l._resetDefaultValues()},[l,e.values]),q.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=os(s,l),r.current}function ke(){const e=Y.useRef(null),[r,t]=Y.useState(!1);return Y.useEffect(()=>()=>{e.current&&clearTimeout(e.current)},[]),{loading:r,trigger:(n,l=500)=>{e.current&&clearTimeout(e.current),t(!0),e.current=setTimeout(async()=>{await n(),t(!1)},l)}}}function ua(e,r){var t,s,n,l,u,c;switch(e==null?void 0:e.type){case"required":return`${r.label} is required`;case"minLength":return`${r.label} must be at least ${(s=(t=r.validation)==null?void 0:t.minLength)==null?void 0:s.value} characters`;case"maxLength":return`${r.label} must be at most ${(l=(n=r.validation)==null?void 0:n.maxLength)==null?void 0:l.value} characters`;case"pattern":return((c=(u=r.validation)==null?void 0:u.pattern)==null?void 0:c.message)??`${r.label} format is invalid`;default:return(e==null?void 0:e.message)??"Invalid value"}}function ce(e,r){return e?r.errorText?r.errorText:r.getErrorMessage?r.getErrorMessage(e):typeof e=="string"?e:typeof e=="object"&&"message"in e&&e.message?e.message:ua(e,r):""}const bs=Y.createContext({});function ae(){return Y.useContext(bs)}function V(...e){return e.filter(Boolean).join(" ")}const ne=({isUnstyled:e,className:r})=>o.jsx("span",{"aria-hidden":"true",className:r,style:e||r?void 0:{color:"#e53e3e",marginLeft:"2px",fontWeight:600},children:"*"});ne.__docgenInfo={description:`Accessible required-field asterisk. aria-hidden so screen readers don't read "*".`,methods:[],displayName:"RequiredMark",props:{isUnstyled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function Vt(e){const{control:r}=Z(),t=tt({control:r,name:e.dependsOn??"__no_field__"}),s=!!(e.getOptions||e.apiEndpoint),[n,l]=Y.useState(e.options??[]),[u,c]=Y.useState(s),[d,x]=Y.useState(null);return Y.useEffect(()=>{if(!s){l(e.options??[]);return}let g=!1;return(async()=>{c(!0),x(null);try{let m=[];if(e.getOptions){const y=e.getOptions(t);m=y instanceof Promise?await y:y}else if(e.apiEndpoint){const y=e.dependsOn&&t!=null&&t!==""?`${e.apiEndpoint}?${encodeURIComponent(e.dependsOn)}=${encodeURIComponent(String(t))}`:e.apiEndpoint,A=await fetch(y);if(!A.ok)throw new Error(`HTTP ${A.status}`);m=await A.json()}g||l(m??[])}catch{g||(x("Failed to load options."),l([]))}finally{g||c(!1)}})(),()=>{g=!0}},[e.getOptions,e.apiEndpoint,e.dependsOn,t]),{options:n,loading:u,fetchError:d}}const gs=({field:e,name:r,error:t})=>{var I;const{control:s,setValue:n,getValues:l,trigger:u}=Z(),{trigger:c}=ke(),d=ae(),x=e.theme==="dark",g=d.unstyled,{options:v,loading:m,fetchError:y}=Vt(e),A=!!(e.options||e.getOptions||e.apiEndpoint),{field:k,fieldState:{error:E}}=ue({name:r,control:s,defaultValue:e.defaultValue??(A?[]:!1),rules:{required:e.required,validate:(I=e.validation)==null?void 0:I.custom}}),B=N=>{e.onValueChangeDebounced&&c(()=>e.onValueChangeDebounced(N,{setValue:n,getValues:l,trigger:u}),e.debounceMs??500)},f=(N,$)=>{var G,ee,me;const O=!!((G=e.options)!=null&&G.length)?N.target.checked?[...k.value||[],$]:k.value.filter(ye=>ye!==$):N.target.checked;k.onChange(O),(ee=e.onChange)==null||ee.call(e,N),(me=e.onValueChange)==null||me.call(e,O,{setValue:n,getValues:l,trigger:u}),B(O),(t||E)&&e.showErrorOnBlur&&u(r)},M=!!(t||E),L=g?e.inputStyle:{width:"16px",height:"16px",accentColor:"#004DB2",cursor:e.disabled?"not-allowed":"pointer",...e.inputStyle},j=e.labelStyle??(g?void 0:{fontSize:"14px",color:x?"#e5e7eb":"#333"}),C=e.helpTextStyle??(g?void 0:{fontSize:"12px",marginTop:"4px",color:x?"#9ca3af":"#6b7280"}),b=e.errorStyle??(g?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),h=e.wrapperStyle??(g?void 0:{marginBottom:"1rem"}),_=e.checkBoxGroupStyle??(g?void 0:{display:"flex",flexDirection:"column",gap:"0.75rem"}),R=e.optionWrapperStyle??(g?void 0:{display:"flex",alignItems:"center",gap:"8px"});return o.jsxs("div",{className:V(d.wrapperClass,e.wrapperClass),style:h,children:[(e.checkboxLabel??e.label)&&o.jsxs("label",{htmlFor:r,className:V(d.labelClass,e.labelClass),style:j,children:[e.checkboxLabel??e.label,e.required&&o.jsx(ne,{isUnstyled:g,className:d.requiredMarkClass})]}),o.jsx("div",{className:V(d.checkboxGroupClass,e.checkboxGroupClass),style:A?_:R,children:A?m?o.jsx("span",{style:g?void 0:{fontSize:"13px",color:"#6b7280"},children:"Loading options…"}):y?o.jsx("span",{style:g?void 0:{fontSize:"13px",color:"#d97706"},children:y}):v.map(N=>{var G;const $=(G=k.value)==null?void 0:G.includes(N.value),W=`${r}-${N.value}`,O=N.helpTextAlignment??"underLabel";return o.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[o.jsxs("label",{htmlFor:W,className:V(d.optionWrapperClass,e.optionWrapperClass),style:{display:"flex",alignItems:"center",gap:"8px",cursor:e.disabled?"not-allowed":"pointer"},title:N.tooltip,children:[o.jsx("input",{id:W,type:"checkbox",value:N.value,checked:$,onChange:ee=>f(ee,N.value),onBlur:()=>{e.showErrorOnBlur&&u(r)},className:V(d.inputClass,e.inputClass),style:L,disabled:e.disabled||N.disabled,"aria-describedby":N.helpText?`${W}-desc`:void 0}),o.jsx("span",{children:N.label})]}),N.helpText&&o.jsx("div",{id:`${W}-desc`,role:"note",style:{...C,marginLeft:O==="underLabel"?"24px":"0"},children:N.helpText})]},N.value)}):o.jsxs("label",{className:V(d.optionWrapperClass,e.optionWrapperClass),style:R,children:[o.jsx("input",{id:r,type:"checkbox",className:V(d.inputClass,e.inputClass),style:L,checked:!!k.value,onChange:N=>f(N),onBlur:()=>{e.showErrorOnBlur&&u(r)},disabled:e.disabled,"aria-describedby":e.helpText?`${r}-description`:void 0}),o.jsx("span",{children:e.label})]})}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:C,children:e.helpText}),M&&o.jsx("p",{className:V(d.errorClass,e.errorClass),style:b,role:"alert",children:ce(t||E,e)})]})},ca=q.memo(gs);gs.__docgenInfo={description:"",methods:[],displayName:"CheckboxFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},register:{required:!0,tsType:{name:"any"},description:""},error:{required:!1,tsType:{name:"any"},description:""}}};const xs=({field:e,name:r,error:t})=>{var E;const{setValue:s,getValues:n,trigger:l,control:u}=Z(),{field:c}=ue({name:r,control:u,defaultValue:e.defaultValue??"",rules:{required:e.required,validate:(E=e.validation)==null?void 0:E.custom}}),d=ae(),x=e.theme==="dark",g=d.unstyled,v=e.wrapperStyle??(g?void 0:{marginBottom:"1rem"}),m=e.labelStyle??(g?void 0:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:x?"#e5e7eb":"#333"}),y=g?e.inputStyle:{padding:"10px",border:"1px solid",borderColor:t?"#f87171":x?"#4b5563":"#ccc",borderRadius:"6px",fontSize:"14px",width:"100%",backgroundColor:x?"#1f2937":"#fff",color:x?"#f9fafb":"#111827",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s ease-in-out",opacity:e.disabled?.6:1,cursor:e.disabled?"not-allowed":"text",...e.inputStyle},A=e.helpTextStyle??(g?void 0:{fontSize:"12px",marginTop:"4px",color:x?"#9ca3af":"#6b7280"}),k=e.errorStyle??(g?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"});return o.jsxs("div",{className:V(d.wrapperClass,e.wrapperClass),style:v,children:[o.jsxs("label",{htmlFor:r,className:V(d.labelClass,e.labelClass),style:m,children:[e.icon&&o.jsx("span",{children:e.icon}),o.jsx("span",{title:e.tooltip,children:e.label}),e.required&&o.jsx(ne,{isUnstyled:g,className:d.requiredMarkClass})]}),o.jsx("input",{id:r,type:"date",min:e.min,max:e.max,"aria-required":e.required,"aria-invalid":!!t,"aria-describedby":e.helpText?`${r}-description`:void 0,value:c.value??"",onChange:B=>{var f;c.onChange(B),(f=e.onValueChange)==null||f.call(e,B.target.value,{setValue:s,getValues:n,trigger:l}),t&&e.showErrorOnBlur&&l(r)},onBlur:B=>{var f;c.onBlur(),(f=e.onBlur)==null||f.call(e,B),e.showErrorOnBlur&&l(r)},className:V(d.inputClass,t?d.inputErrorClass:void 0,e.inputClass),style:y,disabled:e.disabled}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:A,children:e.helpText}),t&&o.jsx("p",{className:V(d.errorClass,e.errorClass),style:k,role:"alert",children:ce(t,e)})]})},da=q.memo(xs);xs.__docgenInfo={description:"",methods:[],displayName:"DateFieldComponent",props:{field:{required:!0,tsType:{name:"intersection",raw:"FormFieldSchema & { min?: string; max?: string }",elements:[{name:"FormFieldSchema"},{name:"signature",type:"object",raw:"{ min?: string; max?: string }",signature:{properties:[{key:"min",value:{name:"string",required:!1}},{key:"max",value:{name:"string",required:!1}}]}}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const fs=({field:e,name:r,error:t})=>{const{control:s}=Z(),{field:n}=ue({name:r,control:s,defaultValue:null,rules:{required:e.required}}),l=Y.useRef(null),u=ae(),c=e.theme==="dark",d=u.unstyled,x=n.value,g=x&&x.length>0?x.length===1?x[0].name:`${x.length} files selected`:"No file chosen",v=e.wrapperStyle??(d?void 0:{marginBottom:"1rem"}),m=e.labelStyle??(d?void 0:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:c?"#e5e7eb":"#333"}),y=e.helpTextStyle??(d?void 0:{fontSize:"12px",marginTop:"4px",color:c?"#9ca3af":"#6b7280"}),A=e.errorStyle??(d?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),k=d?void 0:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 16px",border:"1px solid",borderColor:t?"#f87171":c?"#4b5563":"#ccc",borderRadius:"6px",fontSize:"14px",backgroundColor:c?"#374151":"#f3f4f6",color:c?"#f9fafb":"#374151",cursor:e.disabled?"not-allowed":"pointer",opacity:e.disabled?.6:1,transition:"background-color 0.2s ease-in-out",userSelect:"none"},E=d?void 0:{fontSize:"13px",color:x&&x.length>0?c?"#f9fafb":"#111827":c?"#9ca3af":"#6b7280",marginLeft:"8px"};return o.jsxs("div",{className:V(u.wrapperClass,e.wrapperClass),style:v,children:[o.jsxs("label",{htmlFor:r,className:V(u.labelClass,e.labelClass),style:m,children:[e.icon&&o.jsx("span",{children:e.icon}),o.jsx("span",{title:e.tooltip,children:e.label}),e.required&&o.jsx(ne,{isUnstyled:d,className:u.requiredMarkClass})]}),o.jsx("input",{ref:l,id:r,type:"file",accept:e.accept,multiple:e.multiple,disabled:e.disabled,"aria-required":e.required,"aria-invalid":!!t,"aria-describedby":e.helpText?`${r}-description`:void 0,style:{display:"none"},onChange:B=>{n.onChange(B.target.files)}}),o.jsxs("div",{style:d?void 0:{display:"flex",alignItems:"center"},children:[o.jsx("button",{type:"button",onClick:()=>{var B;return!e.disabled&&((B=l.current)==null?void 0:B.click())},className:V(e.inputClass),style:k,disabled:e.disabled,"aria-controls":r,children:"Choose file"}),o.jsx("span",{style:E,children:g})]}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(u.helpTextClass,e.helpTextClass),style:y,children:e.helpText}),t&&o.jsx("p",{className:V(u.errorClass,e.errorClass),style:A,role:"alert",children:ce(t,e)})]})},pa=q.memo(fs);fs.__docgenInfo={description:"",methods:[],displayName:"FileFieldComponent",props:{field:{required:!0,tsType:{name:"intersection",raw:"FormFieldSchema & { accept?: string; multiple?: boolean }",elements:[{name:"FormFieldSchema"},{name:"signature",type:"object",raw:"{ accept?: string; multiple?: boolean }",signature:{properties:[{key:"accept",value:{name:"string",required:!1}},{key:"multiple",value:{name:"boolean",required:!1}}]}}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const vs=({field:e,name:r})=>{const{control:t}=Z(),s=ae(),n=s.unstyled,l=e.theme==="dark",{fields:u,append:c,remove:d}=oa({control:t,name:r}),x=e.addButtonLabel??"+ Add",g=e.removeButtonLabel??"Remove",v=e.wrapperStyle??(n?void 0:{marginBottom:"1rem"}),m=e.labelStyle??(n?void 0:{display:"block",marginBottom:"6px",fontWeight:500,fontSize:"14px",padding:0,color:l?"#e5e7eb":"#333"}),y=e.helpTextStyle??(n?void 0:{fontSize:"12px",marginTop:"4px",color:l?"#9ca3af":"#6b7280"}),A=n?{}:{border:`1px solid ${l?"#374151":"#e5e7eb"}`,borderRadius:"8px",padding:"12px",marginBottom:"8px",backgroundColor:l?"#1f2937":"#f9fafb",position:"relative"},k=n?{}:{marginTop:"8px",padding:"6px 14px",borderRadius:"6px",border:`1px dashed ${l?"#4b5563":"#d1d5db"}`,background:"transparent",cursor:"pointer",fontSize:"13px",color:l?"#9ca3af":"#6b7280"},E=n?{}:{position:"absolute",top:"8px",right:"8px",padding:"2px 8px",borderRadius:"4px",border:"1px solid transparent",background:"transparent",cursor:"pointer",fontSize:"11px",color:"#ef4444"};return o.jsxs("fieldset",{className:V(s.wrapperClass,e.wrapperClass),style:v,"aria-describedby":e.helpText?`${r}-description`:void 0,children:[e.label&&o.jsxs("legend",{className:V(s.labelClass,e.labelClass),style:m,children:[e.label,e.required&&o.jsx(ne,{isUnstyled:n,className:s.requiredMarkClass})]}),u.map((B,f)=>{var L;const M=`${r}.${f}`;return o.jsxs("div",{style:A,className:e.layoutClass,children:[u.length>0&&o.jsx("button",{type:"button",style:E,onClick:()=>d(f),"aria-label":`${g} row ${f+1}`,children:g}),o.jsx("div",{style:e.layoutStyle,children:(L=e.children)==null?void 0:L.map(j=>o.jsx(_e,{field:j,parentName:M},j.name))})]},B.id)}),o.jsx("button",{type:"button",style:k,onClick:()=>{var f;const B={};(f=e.children)==null||f.forEach(M=>{B[M.name]=M.defaultValue??""}),c(B)},children:x}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(s.helpTextClass,e.helpTextClass),style:y,children:e.helpText})]})},ma=q.memo(vs);vs.__docgenInfo={description:"",methods:[],displayName:"FieldArrayFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const Ss=({field:e,name:r,error:t})=>{var y,A;const{control:s}=Z(),n=ae(),l=e.theme==="dark",u=n.unstyled,{formState:{errors:c}}=ue({name:r,control:s,rules:{required:e.required,validate:(y=e.validation)==null?void 0:y.custom},defaultValue:e.defaultValue??{}}),d=c==null?void 0:c[r];tt({name:r,control:s});const x=e.wrapperStyle??(u?{}:{border:"none",margin:0,padding:0,marginBottom:"1rem"}),g=e.labelStyle??(u?void 0:{display:"block",marginBottom:"6px",fontWeight:500,fontSize:"14px",padding:0,color:l?"#e5e7eb":"#333"}),v=e.errorStyle??(u?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),m=e.helpTextStyle??(u?void 0:{fontSize:"12px",marginTop:"4px",color:l?"#9ca3af":"#6b7280"});return o.jsxs("fieldset",{className:V(n.wrapperClass,e.wrapperClass),style:x,"aria-describedby":e.helpText?`${r}-description`:void 0,children:[e.label&&o.jsxs("legend",{className:V(n.labelClass,e.labelClass),style:g,children:[e.label,e.required&&o.jsx(ne,{isUnstyled:u,className:n.requiredMarkClass})]}),o.jsx("div",{className:V(n.groupLayoutClass,e.layoutClass),style:e.layoutStyle,children:(A=e.children)==null?void 0:A.map(k=>o.jsx(_e,{field:k,parentName:r},k.name))}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(n.helpTextClass,e.helpTextClass),style:m,children:e.helpText}),(t||d)&&o.jsx("p",{className:V(n.errorClass,e.errorClass),style:v,role:"alert",children:ce(t||d,e)})]})},ya=q.memo(Ss);Ss.__docgenInfo={description:"",methods:[],displayName:"GroupFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const Cs=({field:e,parentName:r})=>{var l;const t=ae(),s=t.unstyled,n=e.layoutStyle??(s?{}:{display:"flex",gap:"1rem",alignItems:"flex-start"});return(l=e.multipleField)!=null&&l.length?o.jsx("div",{className:V(t.groupLayoutClass,e.layoutClass),style:n,children:e.multipleField.map(u=>o.jsx("div",{style:s?void 0:{flex:1,minWidth:0},children:o.jsx(_e,{field:u,parentName:r})},u.name))}):null},ha=q.memo(Cs);Cs.__docgenInfo={description:`Renders multiple sub-fields side-by-side in a single row.
Configure the row layout via field.layoutStyle / field.layoutClass.
Each sub-field in field.multipleField is a full FormFieldSchema.`,methods:[],displayName:"MultiFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},parentName:{required:!1,tsType:{name:"string"},description:""}}};const Fs=({field:e,name:r,error:t})=>{var L,j,C,b;const{setValue:s,getValues:n,trigger:l,control:u}=Z(),{field:c}=ue({name:r,control:u,defaultValue:e.defaultValue??"",rules:{required:e.required,pattern:(L=e.validation)==null?void 0:L.pattern,minLength:(j=e.validation)==null?void 0:j.minLength,maxLength:(C=e.validation)==null?void 0:C.maxLength,validate:(b=e.validation)==null?void 0:b.custom}}),d=ae(),{loading:x,trigger:g}=ke(),v=e.theme==="dark",m=e.type==="number",y=d.unstyled,A=Y.useCallback(h=>{var R,I;const _=m?+h.target.value:h.target.value;c.onChange(h),(R=e.onChange)==null||R.call(e,h),(I=e.onValueChange)==null||I.call(e,_,{setValue:s,getValues:n,trigger:l}),t&&e.showErrorOnBlur&&l(r),e.onValueChangeDebounced&&g(()=>e.onValueChangeDebounced(_,{setValue:s,getValues:n,trigger:l}),e.debounceMs??500)},[c,e,m,s,n,l,t,r,g]),k=e.wrapperStyle??(y?void 0:{marginBottom:"1rem"}),E=e.labelStyle??(y?void 0:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:v?"#e5e7eb":"#333"}),B=y?e.inputStyle:{padding:"10px",border:"1px solid",borderColor:t?"#f87171":v?"#4b5563":"#ccc",borderRadius:"6px",fontSize:"14px",width:"100%",backgroundColor:v?"#1f2937":"#fff",color:v?"#f9fafb":"#111827",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s ease-in-out",opacity:e.disabled?.6:1,cursor:e.disabled?"not-allowed":"text",...e.inputStyle},f=e.helpTextStyle??(y?void 0:{fontSize:"12px",marginTop:"4px",color:v?"#9ca3af":"#6b7280"}),M=e.errorStyle??(y?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"});return o.jsxs("div",{className:V(d.wrapperClass,e.wrapperClass),style:k,children:[o.jsxs("label",{htmlFor:r,className:V(d.labelClass,e.labelClass),style:E,children:[e.icon&&o.jsx("span",{children:e.icon}),o.jsx("span",{title:e.tooltip,children:e.label}),e.required&&o.jsx(ne,{isUnstyled:y,className:d.requiredMarkClass}),x&&o.jsx("span",{style:{fontSize:"0.75rem"},children:"⏳"})]}),o.jsx("input",{id:r,type:m?"number":"text",inputMode:e.inputMode??(m?"numeric":"text"),placeholder:e.placeholder,"aria-required":e.required,"aria-invalid":!!t,"aria-describedby":e.helpText?`${r}-description`:void 0,value:c.value??"",onChange:A,onBlur:h=>{var _;(_=e.onBlur)==null||_.call(e,h),e.showErrorOnBlur&&l(r)},onKeyDown:h=>{var _;if(e.allowedPattern){const R=h.key;!["Backspace","Delete","ArrowLeft","ArrowRight","Tab"].includes(R)&&!e.allowedPattern.test(R)&&h.preventDefault()}(_=e.onKeyDown)==null||_.call(e,h)},className:V(d.inputClass,t?d.inputErrorClass:void 0,e.inputClass),style:B,disabled:e.disabled}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:f,children:e.helpText}),t&&o.jsx("p",{className:V(d.errorClass,e.errorClass),style:M,role:"alert",children:ce(t,e)})]})},ba=q.memo(Fs);Fs.__docgenInfo={description:"",methods:[],displayName:"NumberFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const Ts=({field:e,name:r,error:t})=>{const{control:s,setValue:n,getValues:l,trigger:u}=Z(),{trigger:c}=ke(),d=ae(),{options:x,loading:g,fetchError:v}=Vt(e),m=e.theme==="dark",y=d.unstyled,{field:A,fieldState:{error:k}}=ue({name:r,control:s,rules:{required:e.required}}),E=(h,_)=>{var R,I;A.onChange(h),(R=e.onChange)==null||R.call(e,_),(I=e.onValueChange)==null||I.call(e,h,{setValue:n,getValues:l,trigger:u}),(t||k)&&e.showErrorOnBlur&&u(r),e.onValueChangeDebounced&&c(()=>e.onValueChangeDebounced(h,{setValue:n,getValues:l,trigger:u}),e.debounceMs??500)},B=e.wrapperStyle??(y?void 0:{marginBottom:"1rem"}),f=e.labelStyle??(y?void 0:{display:"block",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:m?"#e5e7eb":"#333"}),M=e.radioGroupStyle??(y?void 0:{display:"flex",flexDirection:e.inline?"row":"column",gap:"0.75rem",alignItems:e.inline?"center":"flex-start",flexWrap:e.inline?"wrap":"nowrap"}),L={width:"16px",height:"16px",accentColor:"#004DB2",cursor:e.disabled?"not-allowed":"pointer",transition:"all 0.2s ease",...e.inputStyle},j=e.helpTextStyle??(y?void 0:{fontSize:"12px",color:m?"#9ca3af":"#6b7280",marginTop:"4px"}),C=e.errorStyle??(y?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),b=!!(t||k);return o.jsxs("div",{className:V(d.wrapperClass,e.wrapperClass),style:B,children:[o.jsxs("label",{className:V(d.labelClass,e.labelClass),style:f,children:[e.label,e.required&&o.jsx(ne,{isUnstyled:y,className:d.requiredMarkClass}),g&&o.jsx("span",{style:{fontSize:"0.75rem"},children:" ⏳"})]}),o.jsxs("div",{className:V(d.radioGroupClass,e.radioGroupClass),style:M,children:[g&&o.jsx("span",{style:y?void 0:{fontSize:"13px",color:"#6b7280"},children:"Loading options…"}),!g&&v&&o.jsx("span",{style:y?void 0:{fontSize:"13px",color:"#d97706"},children:v}),!g&&x.map(h=>{const _=h.helpTextAlignment??"underLabel",R=`${r}-${h.value}`,I=A.value===h.value;return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[o.jsxs("label",{htmlFor:R,className:V(d.optionWrapperClass,e.optionWrapperClass),style:{display:"flex",alignItems:"center",gap:"8px",cursor:e.disabled?"not-allowed":"pointer"},title:h.tooltip,children:[o.jsx("input",{id:R,type:"radio",value:h.value,checked:I,onChange:N=>E(N.target.value,N),onBlur:()=>{e.showErrorOnBlur&&u(r)},className:V(d.inputClass,e.inputClass),style:y?e.inputStyle:L,disabled:e.disabled||h.disabled,"aria-describedby":h.helpText?`${R}-desc`:void 0}),o.jsx("span",{style:y?void 0:{fontSize:"14px",fontWeight:I?600:400,color:I?"#004DB2":void 0},children:h.label})]}),h.helpText&&o.jsx("div",{id:`${R}-desc`,role:"note",style:{...j,marginLeft:_==="underLabel"?"24px":"0"},children:h.helpText})]},h.value)})]}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:j,children:e.helpText}),b&&o.jsx("p",{className:V(d.errorClass,e.errorClass),style:C,role:"alert",children:ce(t||k,e)})]})},ga=q.memo(Ts);Ts.__docgenInfo={description:"",methods:[],displayName:"RadioFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},register:{required:!0,tsType:{name:"any"},description:""},error:{required:!1,tsType:{name:"any"},description:""}}};const _s=({field:e,name:r,error:t})=>{const{setValue:s,getValues:n,trigger:l,control:u}=Z(),c=e.max??5,{field:d}=ue({name:r,control:u,defaultValue:e.defaultValue??0,rules:{required:e.required?b=>b>0||"Please select a rating":void 0}}),[x,g]=Y.useState(-1),v=ae(),m=e.theme==="dark",y=v.unstyled,A=d.value??0,k=x>=0?x+1:A,E=e.wrapperStyle??(y?void 0:{marginBottom:"1rem"}),B=e.labelStyle??(y?void 0:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:m?"#e5e7eb":"#333"}),f=e.helpTextStyle??(y?void 0:{fontSize:"12px",marginTop:"4px",color:m?"#9ca3af":"#6b7280"}),M=e.errorStyle??(y?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),L=y?void 0:{display:"flex",gap:"4px",alignItems:"center"},j=b=>{if(!y)return{fontSize:"1.5rem",color:b?"#fbbf24":"#52525b",background:"none",border:"none",padding:"0 2px",cursor:e.disabled?"not-allowed":"pointer",opacity:e.disabled?.6:1,lineHeight:1,transition:"color 0.1s ease-in-out"}},C=b=>{var _;if(e.disabled)return;const h=A===b+1?0:b+1;d.onChange(h),(_=e.onValueChange)==null||_.call(e,h,{setValue:s,getValues:n,trigger:l})};return o.jsxs("div",{className:V(v.wrapperClass,e.wrapperClass),style:E,children:[o.jsxs("label",{className:V(v.labelClass,e.labelClass),style:B,children:[e.icon&&o.jsx("span",{children:e.icon}),o.jsx("span",{title:e.tooltip,children:e.label}),e.required&&o.jsx(ne,{isUnstyled:y,className:v.requiredMarkClass})]}),o.jsx("div",{role:"radiogroup","aria-label":e.label,"aria-required":e.required,"aria-invalid":!!t,"aria-describedby":e.helpText?`${r}-description`:void 0,style:L,className:V(e.inputClass),onMouseLeave:()=>g(-1),children:Array.from({length:c},(b,h)=>{const _=h<k;return o.jsx("button",{type:"button",role:"radio","aria-checked":A===h+1,"aria-label":`${h+1} star${h+1!==1?"s":""}`,onClick:()=>C(h),onMouseEnter:()=>!e.disabled&&g(h),disabled:e.disabled,style:j(_),className:y?void 0:_?"text-amber-400":"text-zinc-600",children:_?"★":"☆"},h)})}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(v.helpTextClass,e.helpTextClass),style:f,children:e.helpText}),t&&o.jsx("p",{className:V(v.errorClass,e.errorClass),style:M,role:"alert",children:ce(t,e)})]})},xa=q.memo(_s);_s.__docgenInfo={description:"",methods:[],displayName:"RatingFieldComponent",props:{field:{required:!0,tsType:{name:"intersection",raw:"FormFieldSchema & { max?: number }",elements:[{name:"FormFieldSchema"},{name:"signature",type:"object",raw:"{ max?: number }",signature:{properties:[{key:"max",value:{name:"number",required:!1}}]}}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const ws=({field:e,name:r,error:t})=>{const{control:s,setValue:n,getValues:l,trigger:u}=Z(),{field:c,fieldState:{error:d}}=ue({name:r,control:s,defaultValue:e.defaultValue??"",rules:{required:e.required}}),x=ae(),{options:g,loading:v,fetchError:m}=Vt(e),y=x.unstyled,A=!!(t||d),k=C=>{var h,_,R;const b=C.target.value;c.onChange(b),(h=e.onChange)==null||h.call(e,C),(_=e.onValueChange)==null||_.call(e,b,{setValue:n,getValues:l,trigger:u}),(R=e.onValueChangeDebounced)==null||R.call(e,b,{setValue:n,getValues:l,trigger:u}),A&&e.showErrorOnBlur&&u(r)},E=e.wrapperStyle??(y?void 0:{marginBottom:"1rem"}),B=e.labelStyle??(y?void 0:{display:"block",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:"#333"}),f=y?e.inputStyle:{padding:"10px",border:"1px solid",borderColor:A?"#f87171":"#ccc",borderRadius:"6px",fontSize:"14px",width:"100%",backgroundColor:"#fff",color:"#111827",outline:"none",boxSizing:"border-box",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",paddingRight:"2rem",cursor:e.disabled?"not-allowed":"pointer",...e.inputStyle},M=e.helpTextStyle??(y?void 0:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}),L=e.errorStyle??(y?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),j=g.find(C=>C.value===c.value);return o.jsxs("div",{className:V(x.wrapperClass,e.wrapperClass),style:E,children:[o.jsxs("label",{htmlFor:r,className:V(x.labelClass,e.labelClass),style:B,children:[e.label,e.required&&o.jsx(ne,{isUnstyled:y,className:x.requiredMarkClass}),v&&o.jsx("span",{style:{fontSize:"0.75rem"},children:" ⏳"})]}),o.jsxs("div",{style:y?void 0:{position:"relative",width:"100%"},children:[o.jsxs("select",{id:r,...c,onChange:k,onBlur:()=>{e.showErrorOnBlur&&u(r)},className:V(x.inputClass,A?x.inputErrorClass:void 0,e.inputClass),style:f,disabled:e.disabled||v,"aria-describedby":e.helpText?`${r}-description`:void 0,"aria-invalid":A,children:[o.jsx("option",{value:"",children:v?"Loading...":"Select..."}),g.map(C=>o.jsx("option",{value:C.value,disabled:C.disabled,title:C.tooltip,children:C.label},C.value))]}),!y&&o.jsx("span",{style:{position:"absolute",right:"0.75rem",top:"50%",transform:"translateY(-50%)",pointerEvents:"none",fontSize:"1rem",color:"#6b7280"},"aria-hidden":"true",children:"▼"})]}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(x.helpTextClass,e.helpTextClass),style:M,children:e.helpText}),(j==null?void 0:j.helpText)&&o.jsx("div",{style:{...M,marginTop:"2px"},children:j.helpText}),m&&o.jsx("p",{style:{color:"orange",fontSize:"0.875rem",marginTop:"4px"},children:m}),A&&o.jsx("p",{className:V(x.errorClass,e.errorClass),style:L,role:"alert",children:ce(t||d,e)})]})},fa=q.memo(ws);ws.__docgenInfo={description:"",methods:[],displayName:"SelectFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const Vs=({field:e,name:r,error:t})=>{const{setValue:s,getValues:n,trigger:l,control:u}=Z(),c=e.min??0,d=e.max??100,x=e.step??1,{field:g}=ue({name:r,control:u,defaultValue:e.defaultValue??c,rules:{required:e.required}}),v=ae(),m=e.theme==="dark",y=v.unstyled,A=e.wrapperStyle??(y?void 0:{marginBottom:"1rem"}),k=e.labelStyle??(y?void 0:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:m?"#e5e7eb":"#333"}),E=y?e.inputStyle:{width:"100%",accentColor:m?"#6366f1":"#4f46e5",opacity:e.disabled?.6:1,cursor:e.disabled?"not-allowed":"pointer",...e.inputStyle},B=e.helpTextStyle??(y?void 0:{fontSize:"12px",marginTop:"4px",color:m?"#9ca3af":"#6b7280"}),f=e.errorStyle??(y?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),M=y?void 0:{display:"flex",justifyContent:"space-between",fontSize:"12px",marginTop:"4px",color:m?"#9ca3af":"#6b7280"};return o.jsxs("div",{className:V(v.wrapperClass,e.wrapperClass),style:A,children:[o.jsxs("label",{htmlFor:r,className:V(v.labelClass,e.labelClass),style:k,children:[e.icon&&o.jsx("span",{children:e.icon}),o.jsx("span",{title:e.tooltip,children:e.label}),e.required&&o.jsx(ne,{isUnstyled:y,className:v.requiredMarkClass}),o.jsx("span",{style:y?void 0:{marginLeft:"auto",fontWeight:600,color:m?"#a5b4fc":"#4f46e5"},children:g.value})]}),o.jsx("input",{id:r,type:"range",min:c,max:d,step:x,"aria-required":e.required,"aria-invalid":!!t,"aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":g.value,"aria-describedby":e.helpText?`${r}-description`:void 0,value:g.value??c,onChange:L=>{var C;const j=Number(L.target.value);g.onChange(j),(C=e.onValueChange)==null||C.call(e,j,{setValue:s,getValues:n,trigger:l})},className:V(v.inputClass,e.inputClass),style:E,disabled:e.disabled}),o.jsxs("div",{style:M,children:[o.jsx("span",{children:c}),o.jsx("span",{children:d})]}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(v.helpTextClass,e.helpTextClass),style:B,children:e.helpText}),t&&o.jsx("p",{className:V(v.errorClass,e.errorClass),style:f,role:"alert",children:ce(t,e)})]})},va=q.memo(Vs);Vs.__docgenInfo={description:"",methods:[],displayName:"SliderFieldComponent",props:{field:{required:!0,tsType:{name:"intersection",raw:"FormFieldSchema & { min?: number; max?: number; step?: number }",elements:[{name:"FormFieldSchema"},{name:"signature",type:"object",raw:"{ min?: number; max?: number; step?: number }",signature:{properties:[{key:"min",value:{name:"number",required:!1}},{key:"max",value:{name:"number",required:!1}},{key:"step",value:{name:"number",required:!1}}]}}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const ks=({field:e,name:r,error:t})=>{var L,j,C,b;const{setValue:s,getValues:n,trigger:l,control:u}=Z(),{field:c}=ue({name:r,control:u,defaultValue:e.defaultValue??"",rules:{required:e.required,pattern:(L=e.validation)==null?void 0:L.pattern,minLength:(j=e.validation)==null?void 0:j.minLength,maxLength:(C=e.validation)==null?void 0:C.maxLength,validate:(b=e.validation)==null?void 0:b.custom}}),d=ae(),{loading:x,trigger:g}=ke(),v=d.unstyled,m=h=>{var R,I;const _=h.target.value;c.onChange(h),(R=e.onChange)==null||R.call(e,h),(I=e.onValueChange)==null||I.call(e,_,{setValue:s,getValues:n,trigger:l}),t&&e.showErrorOnBlur&&l(r),e.onValueChangeDebounced&&g(()=>e.onValueChangeDebounced(_,{setValue:s,getValues:n,trigger:l}),e.debounceMs??500)},y=e.wrapperStyle??(v?void 0:{marginBottom:"1rem"}),A=e.labelStyle??(v?void 0:{display:"block",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:"#333"}),k=v?e.inputStyle??{}:{padding:"10px",border:"1px solid",borderColor:t?"#f87171":"#ccc",borderRadius:"6px",fontSize:"14px",width:"100%",minHeight:"100px",backgroundColor:"#fff",color:"#111827",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s ease-in-out",opacity:e.disabled?.6:1,cursor:e.disabled?"not-allowed":"text",...e.inputStyle},E=e.helpTextStyle??(v?void 0:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}),B=e.errorStyle??(v?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"}),f=c.value??"",M=f.trim()===""?0:f.trim().split(/\s+/).length;return o.jsxs("div",{className:V(d.wrapperClass,e.wrapperClass),style:y,children:[o.jsxs("label",{htmlFor:r,className:V(d.labelClass,e.labelClass),style:A,children:[e.label,e.required&&o.jsx(ne,{isUnstyled:v,className:d.requiredMarkClass}),e.tooltip&&o.jsx("span",{title:e.tooltip,style:{marginLeft:"6px",cursor:"help"},children:"ℹ️"}),x&&o.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"6px"},children:"⏳"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"flex-start"},children:[e.prefixIcon&&o.jsx("span",{style:{marginRight:"6px"},children:e.prefixIcon}),o.jsx("textarea",{id:r,"aria-invalid":!!t,"aria-required":e.required,"aria-disabled":e.disabled,"aria-describedby":e.helpText?`${r}-description`:void 0,value:f,minLength:e.minLength,maxLength:e.maxLength,onChange:m,onBlur:h=>{var _;c.onBlur(),(_=e.onBlur)==null||_.call(e,h),e.showErrorOnBlur&&l(r)},className:V(d.inputClass,t?d.inputErrorClass:void 0,e.inputClass),style:k,disabled:e.disabled}),e.suffixIcon&&o.jsx("span",{style:{marginLeft:"6px"},children:e.suffixIcon})]}),e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:E,children:e.helpText}),(e.maxLength||e.showWordCount)&&o.jsxs("div",{style:{fontSize:"12px",marginTop:"4px",textAlign:"right",color:"#9ca3af"},children:[e.showWordCount&&o.jsxs("span",{children:[M," words"]}),e.maxLength&&o.jsxs("span",{children:[" ",f.length,"/",e.maxLength]})]}),t&&o.jsx("p",{className:V(d.errorClass,e.errorClass),style:B,role:"alert",children:ce(t,e)})]})},Sa=q.memo(ks);ks.__docgenInfo={description:"",methods:[],displayName:"TextAreaFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const qs=({field:e,name:r,error:t})=>{var M,L,j,C;const{setValue:s,getValues:n,trigger:l,control:u}=Z(),{field:c}=ue({name:r,control:u,defaultValue:e.defaultValue??"",rules:{required:e.required,pattern:(M=e.validation)==null?void 0:M.pattern,minLength:(L=e.validation)==null?void 0:L.minLength,maxLength:(j=e.validation)==null?void 0:j.maxLength,validate:(C=e.validation)==null?void 0:C.custom}}),d=ae(),{loading:x,trigger:g}=ke(),v=e.helpTextAlignment??"underLabel",m=d.unstyled,y=Y.useCallback(b=>{var R,I;const h=b.target.value,_=e.inputFormatter?e.inputFormatter(h):h;e.inputFormatter?c.onChange(_):c.onChange(b),(R=e.onChange)==null||R.call(e,b),(I=e.onValueChange)==null||I.call(e,_,{setValue:s,getValues:n,trigger:l}),t&&e.showErrorOnBlur&&l(r),e.onValueChangeDebounced&&g(()=>e.onValueChangeDebounced(_,{setValue:s,getValues:n,trigger:l}),e.debounceMs??500)},[e,s,n,l,c,g,t,r]),A=e.wrapperStyle??(m?void 0:{marginBottom:"1rem"}),k=e.labelStyle??(m?void 0:{display:"flex",alignItems:"center",gap:"0.4rem",marginBottom:"6px",fontWeight:500,fontSize:"14px",color:"#333"}),E=m?e.inputStyle:{padding:"10px",border:"1px solid",borderColor:t?"#f87171":"#ccc",borderRadius:"6px",fontSize:"14px",width:"100%",backgroundColor:"#fff",color:"#111827",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s ease-in-out",opacity:e.disabled?.6:1,cursor:e.disabled?"not-allowed":"text",...e.inputStyle},B=e.helpTextStyle??(m?void 0:{fontSize:"12px",marginTop:"4px",color:"#6b7280"}),f=e.errorStyle??(m?void 0:{color:"#d93025",marginTop:"6px",fontSize:"13px"});return o.jsxs("div",{className:V(d.wrapperClass,e.wrapperClass),style:A,children:[o.jsxs("label",{htmlFor:r,className:V(d.labelClass,e.labelClass),style:k,children:[e.label,e.required&&o.jsx(ne,{isUnstyled:m,className:d.requiredMarkClass}),e.icon,e.tooltip&&o.jsx("span",{title:e.tooltip,style:{cursor:"help",fontSize:"13px"},children:"❓"}),x&&o.jsx("span",{style:{fontSize:"0.75rem"},children:"⏳"})]}),v==="underLabel"&&e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:B,children:e.helpText}),o.jsx("input",{id:r,type:e.type,placeholder:e.placeholder,"aria-required":e.required,"aria-invalid":!!t,"aria-describedby":e.helpText?`${r}-description`:void 0,inputMode:e.inputMode,value:c.value??"",minLength:e.minLength,maxLength:e.maxLength,onChange:y,onBlur:b=>{var h;(h=e.onBlur)==null||h.call(e,b),e.showErrorOnBlur&&l(r)},onKeyDown:b=>{var h;if(e.allowedPattern){const _=b.key;!["Backspace","Delete","ArrowLeft","ArrowRight","Tab"].includes(_)&&!e.allowedPattern.test(_)&&b.preventDefault()}(h=e.onKeyDown)==null||h.call(e,b)},className:V(d.inputClass,t?d.inputErrorClass:void 0,e.inputClass),style:E,disabled:e.disabled}),v!=="underLabel"&&e.helpText&&o.jsx("p",{id:`${r}-description`,className:V(d.helpTextClass,e.helpTextClass),style:B,children:e.helpText}),t&&o.jsx("p",{className:V(d.errorClass,e.errorClass),style:f,role:"alert",children:ce(t,e)})]})},Qt=q.memo(qs);qs.__docgenInfo={description:"",methods:[],displayName:"TextFieldComponent",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"any"},description:""},register:{required:!0,tsType:{name:"any"},description:""}}};const Zt=(e,r)=>r.split(".").reduce((t,s)=>t==null?void 0:t[s],e),As=({field:e,parentName:r})=>{var y,A;const{register:t,formState:s,control:n,setValue:l,getValues:u}=Z(),c=r?`${r}.${e.name}`:e.name,d=Zt(s.errors,c),x=Y.useMemo(()=>{var k,E;return((E=(k=e.visibleWhen)==null?void 0:k.conditions)==null?void 0:E.map(B=>B.field))??[]},[]),g=tt({control:n,name:x});let v=!0;if((A=(y=e.visibleWhen)==null?void 0:y.conditions)!=null&&A.length){const{conditions:k,logic:E="AND"}=e.visibleWhen,B=k.map(({value:f,operator:M},L)=>{const j=g[L];switch(M){case"equals":return j===f;case"notEquals":return j!==f;case"in":return Array.isArray(f)&&f.includes(j);case"notIn":return Array.isArray(f)&&!f.includes(j);case"exists":return j!=null&&j!=="";case"notExists":return j==null||j==="";default:return!1}});v=E==="AND"?B.every(Boolean):B.some(Boolean)}if(Y.useEffect(()=>{!v&&!e.preserveValue&&Zt(u(),c)!==void 0&&l(c,e.defaultValue??"")},[v,c,e.defaultValue,e.preserveValue,u,l]),!v)return null;if(typeof e.render=="function")return e.render({name:c,error:d,register:t,defaultValue:e.defaultValue});if(e.overrideComponent){const k=e.overrideComponent;return o.jsx(k,{...e.overrideComponentProps??{},field:e,name:c,error:d,register:t})}const m={field:e,name:c,error:d,register:t};switch(e.type){case"text":case"email":return o.jsx(Qt,{...m});case"number":return o.jsx(ba,{...m});case"textarea":return o.jsx(Sa,{...m});case"select":return o.jsx(fa,{...m});case"radio":return o.jsx(ga,{...m});case"checkbox":return o.jsx(ca,{field:e,name:c,register:t});case"date":return o.jsx(da,{...m});case"file":return o.jsx(pa,{...m});case"slider":return o.jsx(va,{...m});case"rating":return o.jsx(xa,{...m});case"fieldArray":return o.jsx(ma,{...m});case"group":return o.jsx(ya,{...m});case"additionalEmail":return o.jsx(Qt,{...m,field:{...e,type:"email"}});case"multiField":return o.jsx(ha,{field:e,name:c,parentName:r});default:return null}},_e=q.memo(As);As.__docgenInfo={description:"",methods:[],displayName:"BaseFieldRenderer",props:{field:{required:!0,tsType:{name:"FormFieldSchema"},description:""},parentName:{required:!1,tsType:{name:"string"},description:""}}};const gt={padding:"0.75rem 1.5rem",background:"#2563eb",color:"#fff",border:"none",borderRadius:"0.5rem",fontWeight:600,boxShadow:"0 1px 2px 0 rgba(30,41,59,.06)",transition:"background 0.18s",cursor:"pointer"},xt={background:"#fff",boxShadow:"0 4px 24px 0 rgba(30, 41, 59, 0.10)",borderRadius:"1rem",padding:"1.5rem",display:"grid",gridTemplateColumns:"1fr",gap:"1.25rem 1.5rem",maxWidth:800},Ca=({schema:e,onSubmit:r,defaultValues:t,mode:s="onSubmit",formRef:n,theme:l={},formStyle:u,formClassName:c,submitButtonStyle:d,submitButtonClassName:x,resetButtonStyle:g,resetButtonClassName:v,submitLabel:m="Submit",resetLabel:y="Reset",extraActions:A,hideSubmitButton:k=!1,children:E,showReset:B=!1,onReset:f,columns:M,gap:L,maxWidth:j},C)=>{const b=ia({defaultValues:t,mode:s});Y.useImperativeHandle(C,()=>({form:b}),[b]),Y.useImperativeHandle(n,()=>({form:b}),[b]);const[h,_]=Y.useState(typeof window<"u"?window.innerWidth>=768:!1);Y.useEffect(()=>{const O=()=>_(window.innerWidth>=768);return window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]);const R=M??(h?2:1),I=l.unstyled,N=I?{display:"grid",gridTemplateColumns:`repeat(${R}, 1fr)`,...u}:{...xt,gridTemplateColumns:`repeat(${R}, 1fr)`,gap:L??xt.gap,maxWidth:j??xt.maxWidth,...u},$=I?d:{...gt,...d},W=I?g:{...gt,...g};return o.jsx(bs.Provider,{value:l,children:o.jsx(Us,{...b,children:o.jsxs("form",{onSubmit:b.handleSubmit(r),className:c,style:N,children:[E,e.map(O=>{const G=O.fullWidth?{gridColumn:"1 / -1"}:O.colSpan?{gridColumn:`span ${O.colSpan}`}:void 0;return G?o.jsx("div",{style:G,children:o.jsx(_e,{field:O})},O.name):o.jsx(_e,{field:O},O.name)}),(B||!k||(A==null?void 0:A.length))&&o.jsxs("div",{style:{gridColumn:"1 / -1",marginTop:"1rem",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[A==null?void 0:A.map((O,G)=>o.jsxs("button",{type:O.type??"button",onClick:O.onClick,style:I?O.style:{...gt,...O.style},className:V(l.extraButtonClass,O.className),children:[O.icon&&o.jsx("span",{style:{marginRight:8},children:O.icon}),O.label]},`extra-btn-${G}`)),B&&o.jsx("button",{type:"button",style:W,className:V(l.resetButtonClass,v),onClick:()=>{b.reset(),f==null||f()},children:y}),!k&&o.jsx("button",{type:"submit",style:$,className:V(l.submitButtonClass,x),children:m})]})]})})})},kt=q.forwardRef(Ca);kt.displayName="DynamicForm";kt.__docgenInfo={description:"",methods:[],displayName:"DynamicForm",props:{mode:{defaultValue:{value:'"onSubmit"',computed:!1},required:!1},theme:{defaultValue:{value:"{}",computed:!1},required:!1},submitLabel:{defaultValue:{value:'"Submit"',computed:!1},required:!1},resetLabel:{defaultValue:{value:'"Reset"',computed:!1},required:!1},hideSubmitButton:{defaultValue:{value:"false",computed:!1},required:!1},showReset:{defaultValue:{value:"false",computed:!1},required:!1}}};const wa={title:"DynamicForm",component:kt,args:{onSubmit:e=>alert(JSON.stringify(e,null,2)),submitLabel:"Submit"},argTypes:{columns:{control:{type:"select"},options:[1,2,3]}}},je={name:"Text / Email",args:{schema:[{name:"full_name",label:"Full Name",type:"text",required:!0,placeholder:"Jane Smith",helpText:"Enter your first and last name."},{name:"email",label:"Email Address",type:"email",required:!0,placeholder:"jane@example.com"},{name:"website",label:"Website",type:"text",placeholder:"https://",helpText:"Optional"}]}},Ne={name:"Number",args:{schema:[{name:"age",label:"Age",type:"number",min:0,max:120,step:1,required:!0},{name:"score",label:"Score (0–100)",type:"number",min:0,max:100,placeholder:"50"}]}},Ee={name:"Textarea",args:{schema:[{name:"bio",label:"Bio",type:"textarea",rows:5,placeholder:"Tell us about yourself…",showWordCount:!0,validation:{maxLength:{value:300,message:"Max 300 characters"}}}]}},De={name:"Select",args:{schema:[{name:"country",label:"Country",type:"select",required:!0,options:[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"}]}]}},Be={name:"Radio",args:{schema:[{name:"plan",label:"Choose a plan",type:"radio",required:!0,options:[{label:"Free — basic features",value:"free",helpText:"Great for personal projects"},{label:"Pro — $9/mo",value:"pro",helpText:"Unlimited everything"},{label:"Enterprise — custom",value:"enterprise",helpText:"Talk to sales"}]}]}},Le={name:"Checkbox",args:{schema:[{name:"terms",label:"I accept the terms and conditions",type:"checkbox",required:!0},{name:"interests",label:"Interests",type:"checkbox",options:[{label:"Frontend",value:"frontend"},{label:"Backend",value:"backend"},{label:"DevOps",value:"devops"},{label:"Design",value:"design"}]}]}},Re={name:"Date",args:{schema:[{name:"dob",label:"Date of Birth",type:"date",required:!0,max:new Date().toISOString().split("T")[0]},{name:"event_date",label:"Event Date",type:"date",min:new Date().toISOString().split("T")[0]}]}},Oe={name:"File Upload",args:{schema:[{name:"avatar",label:"Profile Picture",type:"file",accept:"image/*",helpText:"JPG, PNG, GIF up to 5MB"},{name:"documents",label:"Attachments",type:"file",accept:".pdf,.doc,.docx",multiple:!0}]}},Me={name:"Slider",args:{schema:[{name:"volume",label:"Volume",type:"slider",min:0,max:100,step:1,defaultValue:50},{name:"rating_scale",label:"Satisfaction (1–10)",type:"slider",min:1,max:10,step:1,defaultValue:5}]}},Ie={name:"Rating",args:{schema:[{name:"overall",label:"Overall Rating",type:"rating",starCount:5,required:!0},{name:"value",label:"Value for Money",type:"rating",starCount:10}]}},$e={name:"Conditional (visibleWhen)",args:{schema:[{name:"contact_method",label:"Preferred contact",type:"radio",required:!0,options:[{label:"Email",value:"email"},{label:"Phone",value:"phone"}]},{name:"email_address",label:"Email",type:"email",required:!0,placeholder:"you@example.com",visibleWhen:{conditions:[{field:"contact_method",operator:"equals",value:"email"}]}},{name:"phone_number",label:"Phone",type:"text",required:!0,placeholder:"+1 555 000 0000",visibleWhen:{conditions:[{field:"contact_method",operator:"equals",value:"phone"}]}}]}},We={name:"Validation rules",args:{schema:[{name:"username",label:"Username",type:"text",required:!0,validation:{minLength:{value:3,message:"At least 3 characters"},maxLength:{value:20,message:"At most 20 characters"},pattern:{value:/^[a-z0-9_]+$/,message:"Only lowercase letters, numbers, underscores"}}},{name:"password",label:"Password",type:"text",required:!0,validation:{minLength:{value:8,message:"At least 8 characters"}}}]}},Pe={name:"Multi-column (3 cols)",args:{columns:3,schema:[{name:"first_name",label:"First Name",type:"text",required:!0,placeholder:"Jane"},{name:"last_name",label:"Last Name",type:"text",required:!0,placeholder:"Smith"},{name:"email",label:"Email",type:"email",required:!0,placeholder:"jane@example.com"},{name:"address",label:"Address",type:"text",fullWidth:!0,placeholder:"123 Main St"},{name:"city",label:"City",type:"text",placeholder:"New York"},{name:"zip",label:"ZIP Code",type:"text",placeholder:"10001"},{name:"notes",label:"Notes",type:"textarea",rows:3,fullWidth:!0}]}},ze={name:"Field array (repeater)",args:{schema:[{name:"contacts",label:"Emergency Contacts",type:"fieldArray",addButtonLabel:"+ Add contact",removeButtonLabel:"Remove",children:[{name:"name",label:"Name",type:"text",required:!0,placeholder:"Full name"},{name:"phone",label:"Phone",type:"text",placeholder:"+1 555 000 0000"},{name:"rel",label:"Relationship",type:"select",options:[{label:"Spouse",value:"spouse"},{label:"Parent",value:"parent"},{label:"Sibling",value:"sibling"},{label:"Friend",value:"friend"}]}]}]}},rt=(e,r)=>new Promise(t=>setTimeout(()=>t(r),e)),Ue={name:"Async options — Select",args:{schema:[{name:"framework",label:"Favourite framework",type:"select",required:!0,helpText:"Options load after a 1 s simulated delay.",getOptions:()=>rt(1e3,[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Angular",value:"angular"}])}]}},Ge={name:"Async options — Dependent select (country → state)",args:{schema:[{name:"country",label:"Country",type:"select",required:!0,options:[{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"}]},{name:"state",label:"State / Province",type:"select",required:!0,dependsOn:"country",helpText:"Updates when you pick a country (800 ms simulated latency).",getOptions:e=>rt(800,{us:[{label:"California",value:"ca"},{label:"New York",value:"ny"},{label:"Texas",value:"tx"}],ca:[{label:"Ontario",value:"on"},{label:"British Columbia",value:"bc"},{label:"Quebec",value:"qc"}],au:[{label:"New South Wales",value:"nsw"},{label:"Victoria",value:"vic"},{label:"Queensland",value:"qld"}]}[e]??[])}]}},He={name:"Async options — Radio",args:{schema:[{name:"plan",label:"Choose a plan",type:"radio",required:!0,helpText:"Options load after a 900 ms simulated delay.",getOptions:()=>rt(900,[{label:"Free — basic features",value:"free",helpText:"Great for personal projects"},{label:"Pro — $9/mo",value:"pro",helpText:"Unlimited everything"},{label:"Enterprise — custom",value:"enterprise",helpText:"Talk to sales"}])}]}},Je={name:"Async options — Checkbox group",args:{schema:[{name:"interests",label:"Interests",type:"checkbox",helpText:"Options load after a 700 ms simulated delay.",getOptions:()=>rt(700,[{label:"Frontend",value:"frontend"},{label:"Backend",value:"backend"},{label:"DevOps",value:"devops"},{label:"Design",value:"design"},{label:"Mobile",value:"mobile"}])}]}},Ye={name:"Kitchen sink",args:{columns:2,schema:[{name:"first_name",label:"First Name",type:"text",required:!0,placeholder:"Jane"},{name:"last_name",label:"Last Name",type:"text",required:!0,placeholder:"Smith"},{name:"email",label:"Email",type:"email",required:!0,placeholder:"jane@example.com",fullWidth:!0},{name:"dob",label:"Date of Birth",type:"date"},{name:"age",label:"Age",type:"number",min:0,max:120},{name:"bio",label:"Bio",type:"textarea",rows:3,fullWidth:!0,showWordCount:!0},{name:"plan",label:"Plan",type:"select",required:!0,fullWidth:!0,options:[{label:"Free",value:"free"},{label:"Pro",value:"pro"}]},{name:"satisfaction",label:"Satisfaction",type:"rating",starCount:5,fullWidth:!0},{name:"avatar",label:"Profile picture",type:"file",accept:"image/*",fullWidth:!0},{name:"terms",label:"I accept the terms",type:"checkbox",required:!0,fullWidth:!0}]}};var Xt,er,tr;je.parameters={...je.parameters,docs:{...(Xt=je.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  name: "Text / Email",
  args: {
    schema: [{
      name: "full_name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Jane Smith",
      helpText: "Enter your first and last name."
    }, {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "jane@example.com"
    }, {
      name: "website",
      label: "Website",
      type: "text",
      placeholder: "https://",
      helpText: "Optional"
    }] satisfies FormFieldSchema[]
  }
}`,...(tr=(er=je.parameters)==null?void 0:er.docs)==null?void 0:tr.source}}};var rr,sr,ar;Ne.parameters={...Ne.parameters,docs:{...(rr=Ne.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  name: "Number",
  args: {
    schema: [{
      name: "age",
      label: "Age",
      type: "number",
      min: 0,
      max: 120,
      step: 1,
      required: true
    }, {
      name: "score",
      label: "Score (0–100)",
      type: "number",
      min: 0,
      max: 100,
      placeholder: "50"
    }] satisfies FormFieldSchema[]
  }
}`,...(ar=(sr=Ne.parameters)==null?void 0:sr.docs)==null?void 0:ar.source}}};var nr,lr,or;Ee.parameters={...Ee.parameters,docs:{...(nr=Ee.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  name: "Textarea",
  args: {
    schema: [{
      name: "bio",
      label: "Bio",
      type: "textarea",
      rows: 5,
      placeholder: "Tell us about yourself…",
      showWordCount: true,
      validation: {
        maxLength: {
          value: 300,
          message: "Max 300 characters"
        }
      }
    }] satisfies FormFieldSchema[]
  }
}`,...(or=(lr=Ee.parameters)==null?void 0:lr.docs)==null?void 0:or.source}}};var ir,ur,cr;De.parameters={...De.parameters,docs:{...(ir=De.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  name: "Select",
  args: {
    schema: [{
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      options: [{
        label: "United States",
        value: "us"
      }, {
        label: "United Kingdom",
        value: "uk"
      }, {
        label: "Canada",
        value: "ca"
      }, {
        label: "Australia",
        value: "au"
      }]
    }] satisfies FormFieldSchema[]
  }
}`,...(cr=(ur=De.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,pr,mr;Be.parameters={...Be.parameters,docs:{...(dr=Be.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  name: "Radio",
  args: {
    schema: [{
      name: "plan",
      label: "Choose a plan",
      type: "radio",
      required: true,
      options: [{
        label: "Free — basic features",
        value: "free",
        helpText: "Great for personal projects"
      }, {
        label: "Pro — $9/mo",
        value: "pro",
        helpText: "Unlimited everything"
      }, {
        label: "Enterprise — custom",
        value: "enterprise",
        helpText: "Talk to sales"
      }]
    }] satisfies FormFieldSchema[]
  }
}`,...(mr=(pr=Be.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var yr,hr,br;Le.parameters={...Le.parameters,docs:{...(yr=Le.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  name: "Checkbox",
  args: {
    schema: [{
      name: "terms",
      label: "I accept the terms and conditions",
      type: "checkbox",
      required: true
    }, {
      name: "interests",
      label: "Interests",
      type: "checkbox",
      options: [{
        label: "Frontend",
        value: "frontend"
      }, {
        label: "Backend",
        value: "backend"
      }, {
        label: "DevOps",
        value: "devops"
      }, {
        label: "Design",
        value: "design"
      }]
    }] satisfies FormFieldSchema[]
  }
}`,...(br=(hr=Le.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};var gr,xr,fr;Re.parameters={...Re.parameters,docs:{...(gr=Re.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  name: "Date",
  args: {
    schema: [{
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: true,
      max: new Date().toISOString().split("T")[0]
    }, {
      name: "event_date",
      label: "Event Date",
      type: "date",
      min: new Date().toISOString().split("T")[0]
    }] satisfies FormFieldSchema[]
  }
}`,...(fr=(xr=Re.parameters)==null?void 0:xr.docs)==null?void 0:fr.source}}};var vr,Sr,Cr;Oe.parameters={...Oe.parameters,docs:{...(vr=Oe.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  name: "File Upload",
  args: {
    schema: [{
      name: "avatar",
      label: "Profile Picture",
      type: "file",
      accept: "image/*",
      helpText: "JPG, PNG, GIF up to 5MB"
    }, {
      name: "documents",
      label: "Attachments",
      type: "file",
      accept: ".pdf,.doc,.docx",
      multiple: true
    }] satisfies FormFieldSchema[]
  }
}`,...(Cr=(Sr=Oe.parameters)==null?void 0:Sr.docs)==null?void 0:Cr.source}}};var Fr,Tr,_r;Me.parameters={...Me.parameters,docs:{...(Fr=Me.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  name: "Slider",
  args: {
    schema: [{
      name: "volume",
      label: "Volume",
      type: "slider",
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 50
    }, {
      name: "rating_scale",
      label: "Satisfaction (1–10)",
      type: "slider",
      min: 1,
      max: 10,
      step: 1,
      defaultValue: 5
    }] satisfies FormFieldSchema[]
  }
}`,...(_r=(Tr=Me.parameters)==null?void 0:Tr.docs)==null?void 0:_r.source}}};var wr,Vr,kr;Ie.parameters={...Ie.parameters,docs:{...(wr=Ie.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  name: "Rating",
  args: {
    schema: [{
      name: "overall",
      label: "Overall Rating",
      type: "rating",
      starCount: 5,
      required: true
    }, {
      name: "value",
      label: "Value for Money",
      type: "rating",
      starCount: 10
    }] satisfies FormFieldSchema[]
  }
}`,...(kr=(Vr=Ie.parameters)==null?void 0:Vr.docs)==null?void 0:kr.source}}};var qr,Ar,jr;$e.parameters={...$e.parameters,docs:{...(qr=$e.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  name: "Conditional (visibleWhen)",
  args: {
    schema: [{
      name: "contact_method",
      label: "Preferred contact",
      type: "radio",
      required: true,
      options: [{
        label: "Email",
        value: "email"
      }, {
        label: "Phone",
        value: "phone"
      }]
    }, {
      name: "email_address",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@example.com",
      visibleWhen: {
        conditions: [{
          field: "contact_method",
          operator: "equals",
          value: "email"
        }]
      }
    }, {
      name: "phone_number",
      label: "Phone",
      type: "text",
      required: true,
      placeholder: "+1 555 000 0000",
      visibleWhen: {
        conditions: [{
          field: "contact_method",
          operator: "equals",
          value: "phone"
        }]
      }
    }] satisfies FormFieldSchema[]
  }
}`,...(jr=(Ar=$e.parameters)==null?void 0:Ar.docs)==null?void 0:jr.source}}};var Nr,Er,Dr;We.parameters={...We.parameters,docs:{...(Nr=We.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  name: "Validation rules",
  args: {
    schema: [{
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      validation: {
        minLength: {
          value: 3,
          message: "At least 3 characters"
        },
        maxLength: {
          value: 20,
          message: "At most 20 characters"
        },
        pattern: {
          value: /^[a-z0-9_]+$/,
          message: "Only lowercase letters, numbers, underscores"
        }
      }
    }, {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
      validation: {
        minLength: {
          value: 8,
          message: "At least 8 characters"
        }
      }
    }] satisfies FormFieldSchema[]
  }
}`,...(Dr=(Er=We.parameters)==null?void 0:Er.docs)==null?void 0:Dr.source}}};var Br,Lr,Rr;Pe.parameters={...Pe.parameters,docs:{...(Br=Pe.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  name: "Multi-column (3 cols)",
  args: {
    columns: 3,
    schema: [{
      name: "first_name",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "Jane"
    }, {
      name: "last_name",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Smith"
    }, {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "jane@example.com"
    }, {
      name: "address",
      label: "Address",
      type: "text",
      fullWidth: true,
      placeholder: "123 Main St"
    }, {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "New York"
    }, {
      name: "zip",
      label: "ZIP Code",
      type: "text",
      placeholder: "10001"
    }, {
      name: "notes",
      label: "Notes",
      type: "textarea",
      rows: 3,
      fullWidth: true
    }] satisfies FormFieldSchema[]
  }
}`,...(Rr=(Lr=Pe.parameters)==null?void 0:Lr.docs)==null?void 0:Rr.source}}};var Or,Mr,Ir;ze.parameters={...ze.parameters,docs:{...(Or=ze.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  name: "Field array (repeater)",
  args: {
    schema: [{
      name: "contacts",
      label: "Emergency Contacts",
      type: "fieldArray",
      addButtonLabel: "+ Add contact",
      removeButtonLabel: "Remove",
      children: [{
        name: "name",
        label: "Name",
        type: "text",
        required: true,
        placeholder: "Full name"
      }, {
        name: "phone",
        label: "Phone",
        type: "text",
        placeholder: "+1 555 000 0000"
      }, {
        name: "rel",
        label: "Relationship",
        type: "select",
        options: [{
          label: "Spouse",
          value: "spouse"
        }, {
          label: "Parent",
          value: "parent"
        }, {
          label: "Sibling",
          value: "sibling"
        }, {
          label: "Friend",
          value: "friend"
        }]
      }]
    }] satisfies FormFieldSchema[]
  }
}`,...(Ir=(Mr=ze.parameters)==null?void 0:Mr.docs)==null?void 0:Ir.source}}};var $r,Wr,Pr;Ue.parameters={...Ue.parameters,docs:{...($r=Ue.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  name: "Async options — Select",
  args: {
    schema: [{
      name: "framework",
      label: "Favourite framework",
      type: "select",
      required: true,
      helpText: "Options load after a 1 s simulated delay.",
      getOptions: () => delay(1000, [{
        label: "React",
        value: "react"
      }, {
        label: "Vue",
        value: "vue"
      }, {
        label: "Svelte",
        value: "svelte"
      }, {
        label: "Angular",
        value: "angular"
      }])
    }] satisfies FormFieldSchema[]
  }
}`,...(Pr=(Wr=Ue.parameters)==null?void 0:Wr.docs)==null?void 0:Pr.source}}};var zr,Ur,Gr;Ge.parameters={...Ge.parameters,docs:{...(zr=Ge.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  name: "Async options — Dependent select (country → state)",
  args: {
    schema: [{
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      options: [{
        label: "United States",
        value: "us"
      }, {
        label: "Canada",
        value: "ca"
      }, {
        label: "Australia",
        value: "au"
      }]
    }, {
      name: "state",
      label: "State / Province",
      type: "select",
      required: true,
      dependsOn: "country",
      helpText: "Updates when you pick a country (800 ms simulated latency).",
      getOptions: (country: string) => {
        const map: Record<string, {
          label: string;
          value: string;
        }[]> = {
          us: [{
            label: "California",
            value: "ca"
          }, {
            label: "New York",
            value: "ny"
          }, {
            label: "Texas",
            value: "tx"
          }],
          ca: [{
            label: "Ontario",
            value: "on"
          }, {
            label: "British Columbia",
            value: "bc"
          }, {
            label: "Quebec",
            value: "qc"
          }],
          au: [{
            label: "New South Wales",
            value: "nsw"
          }, {
            label: "Victoria",
            value: "vic"
          }, {
            label: "Queensland",
            value: "qld"
          }]
        };
        return delay(800, map[country] ?? []);
      }
    }] satisfies FormFieldSchema[]
  }
}`,...(Gr=(Ur=Ge.parameters)==null?void 0:Ur.docs)==null?void 0:Gr.source}}};var Hr,Jr,Yr;He.parameters={...He.parameters,docs:{...(Hr=He.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  name: "Async options — Radio",
  args: {
    schema: [{
      name: "plan",
      label: "Choose a plan",
      type: "radio",
      required: true,
      helpText: "Options load after a 900 ms simulated delay.",
      getOptions: () => delay(900, [{
        label: "Free — basic features",
        value: "free",
        helpText: "Great for personal projects"
      }, {
        label: "Pro — $9/mo",
        value: "pro",
        helpText: "Unlimited everything"
      }, {
        label: "Enterprise — custom",
        value: "enterprise",
        helpText: "Talk to sales"
      }])
    }] satisfies FormFieldSchema[]
  }
}`,...(Yr=(Jr=He.parameters)==null?void 0:Jr.docs)==null?void 0:Yr.source}}};var Kr,Qr,Zr;Je.parameters={...Je.parameters,docs:{...(Kr=Je.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
  name: "Async options — Checkbox group",
  args: {
    schema: [{
      name: "interests",
      label: "Interests",
      type: "checkbox",
      helpText: "Options load after a 700 ms simulated delay.",
      getOptions: () => delay(700, [{
        label: "Frontend",
        value: "frontend"
      }, {
        label: "Backend",
        value: "backend"
      }, {
        label: "DevOps",
        value: "devops"
      }, {
        label: "Design",
        value: "design"
      }, {
        label: "Mobile",
        value: "mobile"
      }])
    }] satisfies FormFieldSchema[]
  }
}`,...(Zr=(Qr=Je.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var Xr,es,ts;Ye.parameters={...Ye.parameters,docs:{...(Xr=Ye.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
  name: "Kitchen sink",
  args: {
    columns: 2,
    schema: [{
      name: "first_name",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "Jane"
    }, {
      name: "last_name",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Smith"
    }, {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "jane@example.com",
      fullWidth: true
    }, {
      name: "dob",
      label: "Date of Birth",
      type: "date"
    }, {
      name: "age",
      label: "Age",
      type: "number",
      min: 0,
      max: 120
    }, {
      name: "bio",
      label: "Bio",
      type: "textarea",
      rows: 3,
      fullWidth: true,
      showWordCount: true
    }, {
      name: "plan",
      label: "Plan",
      type: "select",
      required: true,
      fullWidth: true,
      options: [{
        label: "Free",
        value: "free"
      }, {
        label: "Pro",
        value: "pro"
      }]
    }, {
      name: "satisfaction",
      label: "Satisfaction",
      type: "rating",
      starCount: 5,
      fullWidth: true
    }, {
      name: "avatar",
      label: "Profile picture",
      type: "file",
      accept: "image/*",
      fullWidth: true
    }, {
      name: "terms",
      label: "I accept the terms",
      type: "checkbox",
      required: true,
      fullWidth: true
    }] satisfies FormFieldSchema[]
  }
}`,...(ts=(es=Ye.parameters)==null?void 0:es.docs)==null?void 0:ts.source}}};const Va=["TextFields","NumberField","TextareaField","SelectField","RadioField","CheckboxField","DateField","FileField","SliderField","RatingField","ConditionalFields","ValidationRules","MultiColumnLayout","FieldArrayStory","AsyncSelect","DependentSelect","AsyncRadio","AsyncCheckbox","KitchenSink"];export{Je as AsyncCheckbox,He as AsyncRadio,Ue as AsyncSelect,Le as CheckboxField,$e as ConditionalFields,Re as DateField,Ge as DependentSelect,ze as FieldArrayStory,Oe as FileField,Ye as KitchenSink,Pe as MultiColumnLayout,Ne as NumberField,Be as RadioField,Ie as RatingField,De as SelectField,Me as SliderField,je as TextFields,Ee as TextareaField,We as ValidationRules,Va as __namedExportsOrder,wa as default};
