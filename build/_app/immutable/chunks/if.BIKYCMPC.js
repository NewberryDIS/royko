import{k as T,S as r,o as x,l as A,m as N,s as m,n as D,q as u,t as h,v as g,g as _,U as d,i as I,d as S,w as k,x as O,H as L,y as j,z as b,A as w,B as E,E as q}from"./runtime.B8797RO6.js";import{h as z,g as R,i as B}from"./disclose-version.pq9OkSJN.js";function y(e,t=!0,s=null){if(typeof e=="object"&&e!=null&&!T(e)){if(r in e){const n=e[r];if(n.t===e||n.p===e)return n.p}const i=k(e);if(i===x||i===A){const n=new Proxy(e,F);return N(e,r,{value:{s:new Map,v:m(0),a:D(e),i:t,p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function v(e,t=1){u(e,e.v+t)}const F={defineProperty(e,t,s){if(s.value){const i=e[r],n=i.s.get(t);n!==void 0&&u(n,y(s.value,i.i,i))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[r],i=s.s.get(t),n=s.a,f=delete e[t];if(n&&f){const a=s.s.get("length"),o=e.length-1;a!==void 0&&a.v!==o&&u(a,o)}return i!==void 0&&u(i,d),f&&v(s.v),f},get(e,t,s){var f;if(t===r)return Reflect.get(e,r);const i=e[r];let n=i.s.get(t);if(n===void 0&&(!(t in e)||(f=h(e,t))!=null&&f.writable)&&(n=(i.i?m:g)(y(e[t],i.i,i)),i.s.set(t,n)),n!==void 0){const a=_(n);return a===d?void 0:a}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[r].s.get(t);n&&(s.value=_(n))}return s},has(e,t){var f;if(t===r)return!0;const s=e[r],i=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||I!==null&&(!i||(f=h(e,t))!=null&&f.writable))&&(n===void 0&&(n=(s.i?m:g)(i?y(e[t],s.i,s):d),s.s.set(t,n)),_(n)===d)?!1:i},set(e,t,s,i){const n=e[r];let f=n.s.get(t);f===void 0&&(S(()=>i[t]),f=n.s.get(t)),f!==void 0&&u(f,y(s,n.i,n));const a=n.a,o=!(t in e);if(a&&t==="length")for(let c=s;c<e.length;c+=1){const l=n.s.get(c+"");l!==void 0&&u(l,d)}if(e[t]=s,o){if(a){const c=n.s.get("length"),l=e.length;c!==void 0&&c.v!==l&&u(c,l)}v(n.v)}return!0},ownKeys(e){const t=e[r];return _(t.v),Reflect.ownKeys(e)}};function M(e,t,s,i=null,n=!1){var f=null,a=null,o=null,c=n?q:0;O(()=>{if(o===(o=!!t()))return;let l=!1;if(z){const P=e.data===L;o===P&&(j(B),R(!1),l=!0)}o?(f?b(f):f=w(()=>s(e)),a&&E(a,()=>{a=null})):(a?b(a):i&&(a=w(()=>i(e))),f&&E(f,()=>{f=null})),l&&R(!0)},c)}export{M as i,y as p};
