var ae,v,Ue,q,Ve,qe,Ke,re={},Je=[],Ea=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,t){for(var a in t)e[a]=t[a];return e}function We(e){var t=e.parentNode;t&&t.removeChild(e)}function O(e,t,a){var r,n,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?n=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?ae.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return oe(e,i,r,n,null)}function oe(e,t,a,r,n){var o={type:e,props:t,key:a,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n==null?++Ue:n};return n==null&&v.vnode!=null&&v.vnode(o),o}function z(e){return e.children}function P(e,t){this.props=e,this.context=t}function R(e,t){if(t==null)return e.__?R(e.__,e.__.__k.indexOf(e)+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?R(e):null}function Ye(e){var t,a;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null){e.__e=e.__c.base=a.__e;break}return Ye(e)}}function ge(e){(!e.__d&&(e.__d=!0)&&q.push(e)&&!ne.__r++||qe!==v.debounceRendering)&&((qe=v.debounceRendering)||Ve)(ne)}function ne(){for(var e;ne.__r=q.length;)e=q.sort(function(t,a){return t.__v.__b-a.__v.__b}),q=[],e.some(function(t){var a,r,n,o,i,p;t.__d&&(i=(o=(a=t).__v).__e,(p=a.__P)&&(r=[],(n=E({},o)).__v=o.__v+1,ye(p,o,n,a.__n,p.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i==null?R(o):i,o.__h),Ze(r,o),o.__e!=i&&Ye(o)))})}function at(e,t,a,r,n,o,i,p,c,d){var l,_,f,h,g,y,b,S=r&&r.__k||Je,w=S.length;for(a.__k=[],l=0;l<t.length;l++)if((h=a.__k[l]=(h=t[l])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?oe(null,h,null,null,h):Array.isArray(h)?oe(z,{children:h},null,null,null):h.__b>0?oe(h.type,h.props,h.key,null,h.__v):h)!=null){if(h.__=a,h.__b=a.__b+1,(f=S[l])===null||f&&h.key==f.key&&h.type===f.type)S[l]=void 0;else for(_=0;_<w;_++){if((f=S[_])&&h.key==f.key&&h.type===f.type){S[_]=void 0;break}f=null}ye(e,h,f=f||re,n,o,i,p,c,d),g=h.__e,(_=h.ref)&&f.ref!=_&&(b||(b=[]),f.ref&&b.push(f.ref,null,h),b.push(_,h.__c||g,h)),g!=null?(y==null&&(y=g),typeof h.type=="function"&&h.__k===f.__k?h.__d=c=Qe(h,c,e):c=Xe(e,h,f,S,g,c),typeof a.type=="function"&&(a.__d=c)):c&&f.__e==c&&c.parentNode!=e&&(c=R(f))}for(a.__e=y,l=w;l--;)S[l]!=null&&(typeof a.type=="function"&&S[l].__e!=null&&S[l].__e==a.__d&&(a.__d=R(r,l+1)),tt(S[l],S[l]));if(b)for(l=0;l<b.length;l++)et(b[l],b[++l],b[++l])}function Qe(e,t,a){for(var r,n=e.__k,o=0;n&&o<n.length;o++)(r=n[o])&&(r.__=e,t=typeof r.type=="function"?Qe(r,t,a):Xe(a,r,r,n,r.__e,t));return t}function K(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(a){K(a,t)}):t.push(e)),t}function Xe(e,t,a,r,n,o){var i,p,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(a==null||n!=o||n.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(n),i=null;else{for(p=o,c=0;(p=p.nextSibling)&&c<r.length;c+=2)if(p==n)break e;e.insertBefore(n,o),i=o}return i!==void 0?i:n.nextSibling}function Na(e,t,a,r,n){var o;for(o in a)o==="children"||o==="key"||o in t||ie(e,o,null,a[o],r);for(o in t)n&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||a[o]===t[o]||ie(e,o,t[o],a[o],r)}function rt(e,t,a){t[0]==="-"?e.setProperty(t,a):e[t]=a==null?"":typeof a!="number"||Ea.test(t)?a:a+"px"}function ie(e,t,a,r,n){var o;e:if(t==="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)a&&t in a||rt(e.style,t,"");if(a)for(t in a)r&&a[t]===r[t]||rt(e.style,t,a[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=a,a?r||e.addEventListener(t,o?nt:ot,o):e.removeEventListener(t,o?nt:ot,o);else if(t!=="dangerouslySetInnerHTML"){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=a==null?"":a;break e}catch(i){}typeof a=="function"||(a!=null&&(a!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,a):e.removeAttribute(t))}}function ot(e){this.l[e.type+!1](v.event?v.event(e):e)}function nt(e){this.l[e.type+!0](v.event?v.event(e):e)}function ye(e,t,a,r,n,o,i,p,c){var d,l,_,f,h,g,y,b,S,w,ee,M=t.type;if(t.constructor!==void 0)return null;a.__h!=null&&(c=a.__h,p=t.__e=a.__e,t.__h=null,o=[p]),(d=v.__b)&&d(t);try{e:if(typeof M=="function"){if(b=t.props,S=(d=M.contextType)&&r[d.__c],w=d?S?S.props.value:d.__:r,a.__c?y=(l=t.__c=a.__c).__=l.__E:("prototype"in M&&M.prototype.render?t.__c=l=new M(b,w):(t.__c=l=new P(b,w),l.constructor=M,l.render=za),S&&S.sub(l),l.props=b,l.state||(l.state={}),l.context=w,l.__n=r,_=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),M.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=E({},l.__s)),E(l.__s,M.getDerivedStateFromProps(b,l.__s))),f=l.props,h=l.state,_)M.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(M.getDerivedStateFromProps==null&&b!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,w),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,w)===!1||t.__v===a.__v){l.props=b,l.state=l.__s,t.__v!==a.__v&&(l.__d=!1),l.__v=t,t.__e=a.__e,t.__k=a.__k,t.__k.forEach(function(te){te&&(te.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,w),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,h,g)})}l.context=w,l.props=b,l.state=l.__s,(d=v.__r)&&d(t),l.__d=!1,l.__v=t,l.__P=e,d=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(r=E(E({},r),l.getChildContext())),_||l.getSnapshotBeforeUpdate==null||(g=l.getSnapshotBeforeUpdate(f,h)),ee=d!=null&&d.type===z&&d.key==null?d.props.children:d,at(e,Array.isArray(ee)?ee:[ee],t,a,r,n,o,i,p,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),y&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===a.__v?(t.__k=a.__k,t.__e=a.__e):t.__e=Oa(a.__e,t,a,r,n,o,i,c);(d=v.diffed)&&d(t)}catch(te){t.__v=null,(c||o!=null)&&(t.__e=p,t.__h=!!c,o[o.indexOf(p)]=null),v.__e(te,t,a)}}function Ze(e,t){v.__c&&v.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(r){r.call(a)})}catch(r){v.__e(r,a.__v)}})}function Oa(e,t,a,r,n,o,i,p){var c,d,l,_=a.props,f=t.props,h=t.type,g=0;if(h==="svg"&&(n=!0),o!=null){for(;g<o.length;g++)if((c=o[g])&&(c===e||(h?c.localName==h:c.nodeType==3))){e=c,o[g]=null;break}}if(e==null){if(h===null)return document.createTextNode(f);e=n?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,f.is&&f),o=null,p=!1}if(h===null)_===f||p&&e.data===f||(e.data=f);else{if(o=o&&ae.call(e.childNodes),d=(_=a.props||re).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,!p){if(o!=null)for(_={},g=0;g<e.attributes.length;g++)_[e.attributes[g].name]=e.attributes[g].value;(l||d)&&(l&&(d&&l.__html==d.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Na(e,f,_,n,p),l)t.__k=[];else if(g=t.props.children,at(e,Array.isArray(g)?g:[g],t,a,r,n&&h!=="foreignObject",o,i,o?o[0]:a.__k&&R(a,0),p),o!=null)for(g=o.length;g--;)o[g]!=null&&We(o[g]);p||("value"in f&&(g=f.value)!==void 0&&(g!==e.value||h==="progress"&&!g)&&ie(e,"value",g,_.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==e.checked&&ie(e,"checked",g,_.checked,!1))}return e}function et(e,t,a){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,a)}}function tt(e,t,a){var r,n;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||et(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){v.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(n=0;n<r.length;n++)r[n]&&tt(r[n],t,typeof e.type!="function");a||e.__e==null||We(e.__e),e.__e=e.__d=void 0}function za(e,t,a){return this.constructor(e,a)}function Se(e,t,a){var r,n,o;v.__&&v.__(e,t),n=(r=typeof a=="function")?null:a&&a.__k||t.__k,o=[],ye(t,e=(!r&&a||t).__k=O(z,null,[e]),n||re,re,t.ownerSVGElement!==void 0,!r&&a?[a]:n?null:t.firstChild?ae.call(t.childNodes):null,o,!r&&a?a:n?n.__e:t.firstChild,r),Ze(o,e)}function it(e,t){var a={__c:t="__cC"+Ke++,__:e,Consumer:function(r,n){return r.children(n)},Provider:function(r){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.some(ge)},this.sub=function(i){n.push(i);var p=i.componentWillUnmount;i.componentWillUnmount=function(){n.splice(n.indexOf(i),1),p&&p.call(i)}}),r.children}};return a.Provider.__=a.Consumer.contextType=a}ae=Je.slice,v={__e:function(e,t){for(var a,r,n;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),n=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e),n=a.__d),n)return a.__E=a}catch(o){e=o}throw e}},Ue=0,P.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},a),this.props)),e&&E(a,e),e!=null&&this.__v&&(t&&this.__h.push(t),ge(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ge(this))},P.prototype.render=z,q=[],Ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne.__r=0,Ke=0;var H,$,st,ke=0,xe=[],lt=v.__b,ct=v.__r,pt=v.diffed,dt=v.__c,mt=v.unmount;function J(e,t){v.__h&&v.__h($,e,ke||t),ke=0;var a=$.__H||($.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function I(e){return ke=1,Ia(ut,e)}function Ia(e,t,a){var r=J(H++,2);return r.t=e,r.__c||(r.__=[a?a(t):ut(void 0,t),function(n){var o=r.t(r.__[0],n);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=$),r.__}function ft(e,t){var a=J(H++,3);!v.__s&&$e(a.__H,t)&&(a.__=e,a.__H=t,$.__H.__h.push(a))}function ht(e,t){var a=J(H++,4);!v.__s&&$e(a.__H,t)&&(a.__=e,a.__H=t,$.__h.push(a))}function _t(e,t){var a=J(H++,7);return $e(a.__H,t)&&(a.__=e(),a.__H=t,a.__h=e),a.__}function vt(e){var t=$.context[e.__c],a=J(H++,9);return a.c=e,t?(a.__==null&&(a.__=!0,t.sub($)),t.props.value):e.__}function La(){xe.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(se),e.__H.__h.forEach(je),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}),xe=[]}v.__b=function(e){$=null,lt&&lt(e)},v.__r=function(e){ct&&ct(e),H=0;var t=($=e.__c).__H;t&&(t.__h.forEach(se),t.__h.forEach(je),t.__h=[])},v.diffed=function(e){pt&&pt(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(xe.push(t)!==1&&st===v.requestAnimationFrame||((st=v.requestAnimationFrame)||function(a){var r,n=function(){clearTimeout(o),bt&&cancelAnimationFrame(r),setTimeout(a)},o=setTimeout(n,100);bt&&(r=requestAnimationFrame(n))})(La)),$=null},v.__c=function(e,t){t.some(function(a){try{a.__h.forEach(se),a.__h=a.__h.filter(function(r){return!r.__||je(r)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],v.__e(r,a.__v)}}),dt&&dt(e,t)},v.unmount=function(e){mt&&mt(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(se)}catch(a){v.__e(a,t.__v)}};var bt=typeof requestAnimationFrame=="function";function se(e){var t=$;typeof e.__c=="function"&&e.__c(),$=t}function je(e){var t=$;e.__c=e.__(),$=t}function $e(e,t){return!e||e.length!==t.length||t.some(function(a,r){return a!==e[r]})}function ut(e,t){return typeof t=="function"?t(e):t}function Ba(e,t){for(var a in t)e[a]=t[a];return e}function gt(e,t){for(var a in e)if(a!=="__source"&&!(a in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function yt(e){this.props=e}(yt.prototype=new P).isPureReactComponent=!0,yt.prototype.shouldComponentUpdate=function(e,t){return gt(this.props,e)||gt(this.state,t)};var St=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),St&&St(e)};var Ra=v.__e;v.__e=function(e,t,a){if(e.then){for(var r,n=t;n=n.__;)if((r=n.__c)&&r.__c)return t.__e==null&&(t.__e=a.__e,t.__k=a.__k),r.__c(e,t)}Ra(e,t,a)};var kt=v.unmount;function Ce(){this.__u=0,this.t=null,this.__b=null}function xt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function le(){this.u=null,this.o=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),kt&&kt(e)},(Ce.prototype=new P).__c=function(e,t){var a=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(a);var n=xt(r.__v),o=!1,i=function(){o||(o=!0,a.__R=null,n?n(p):p())};a.__R=i;var p=function(){if(!--r.__u){if(r.state.__e){var d=r.state.__e;r.__v.__k[0]=function _(f,h,g){return f&&(f.__v=null,f.__k=f.__k&&f.__k.map(function(y){return _(y,h,g)}),f.__c&&f.__c.__P===h&&(f.__e&&g.insertBefore(f.__e,f.__d),f.__c.__e=!0,f.__c.__P=g)),f}(d,d.__c.__P,d.__c.__O)}var l;for(r.setState({__e:r.__b=null});l=r.t.pop();)l.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(i,i)},Ce.prototype.componentWillUnmount=function(){this.t=[]},Ce.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var a=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(i,p,c){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(d){typeof d.__c=="function"&&d.__c()}),i.__c.__H=null),(i=Ba({},i)).__c!=null&&(i.__c.__P===c&&(i.__c.__P=p),i.__c=null),i.__k=i.__k&&i.__k.map(function(d){return o(d,p,c)})),i}(this.__b,a,r.__O=r.__P)}this.__b=null}var n=t.__e&&O(z,null,e.fallback);return n&&(n.__h=null),[O(z,null,t.__e?null:e.children),n]};var $t=function(e,t,a){if(++a[1]===a[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(a=e.u;a;){for(;a.length>3;)a.pop()();if(a[1]<a[0])break;e.u=a=a[2]}};(le.prototype=new P).__e=function(e){var t=this,a=xt(t.__v),r=t.o.get(e);return r[0]++,function(n){var o=function(){t.props.revealOrder?(r.push(n),$t(t,e,r)):n()};a?a(o):o()}},le.prototype.render=function(e){this.u=null,this.o=new Map;var t=K(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var a=t.length;a--;)this.o.set(t[a],this.u=[1,0,this.u]);return e.children},le.prototype.componentDidUpdate=le.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,a){$t(e,a,t)})};var Ha=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Ga=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ua=typeof document!="undefined",Va=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var jt=v.event;function qa(){}function Ka(){return this.cancelBubble}function Ja(){return this.defaultPrevented}v.event=function(e){return jt&&(e=jt(e)),e.persist=qa,e.isPropagationStopped=Ka,e.isDefaultPrevented=Ja,e.nativeEvent=e};var Ct={configurable:!0,get:function(){return this.class}},wt=v.vnode;v.vnode=function(e){var t=e.type,a=e.props,r=a;if(typeof t=="string"){var n=t.indexOf("-")===-1;for(var o in r={},a){var i=a[o];Ua&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in a&&i==null||(o==="defaultValue"&&"value"in a&&a.value==null?o="value":o==="download"&&i===!0?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Va(a.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():n&&Ga.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),r[o]=i)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=K(a.children).forEach(function(p){p.props.selected=r.value.indexOf(p.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=K(a.children).forEach(function(p){p.props.selected=r.multiple?r.defaultValue.indexOf(p.props.value)!=-1:r.defaultValue==p.props.value})),e.props=r}t&&a.class!=a.className&&(Ct.enumerable="className"in a,a.className!=null&&(r.class=a.className),Object.defineProperty(r,"className",Ct)),e.$$typeof=Ha,wt&&wt(e)};var Dt=v.__r;v.__r=function(e){Dt&&Dt(e)};var we=it(),Wa=typeof window!="undefined"?ht:ft,Ya=e=>(...t)=>{let a=vt(e),r=I({});return Wa(()=>a.on("@changed",(n,o)=>{t.some(p=>p in o)&&r[1]({})}),[]),_t(()=>{let n=a.get(),o={};return t.forEach(i=>{o[i]=n[i]}),o.dispatch=a.dispatch,o},[r[0]])},u=Ya(we);var De=class extends Error{constructor(t){super("Validation error");this.validations=t}getValidations(){return this.validations}},W=De;var Mt=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),Za={get:async(e,t)=>{var n;let{path:a,headers:r}=e.get().api;try{let o=await(await fetch(`${a}/${t}`,{headers:Mt(r)})).json();if(typeof o!="object")throw new Error("Invalid response");return(n=o["hydra:member"])!=null?n:o}catch(o){throw e.dispatch("moduleState/set","error"),o}},post:async({api:e,dispatch:t},a,r)=>{let{path:n,headers:o}=e,i={method:"POST",headers:Mt(o),body:JSON.stringify(r)};try{var p=await(await fetch(`${n}/${a}`,i)).json()}catch(c){throw t("moduleState/set","error"),c}if(p["@id"])return p;throw p.violations?new W(p.violations):(t("moduleState/set","error"),new Error("Invalid result"))}},D=Za;var Pt=function(e,t,a,r){var n;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],p=t[o]?(t[0]|=i?1:2,a[t[o++]]):t[++o];i===3?r[0]=p:i===4?r[1]=Object.assign(r[1]||{},p):i===5?(r[1]=r[1]||{})[t[++o]]=p:i===6?r[1][t[++o]]+=p+"":i?(n=e.apply(p,Pt(e,p,a,["",null])),r.push(n),p[0]?t[0]|=2:(t[o-2]=0,t[o]=n)):r.push(p)}return r},At=new Map;function Tt(e){var t=At.get(this);return t||(t=new Map,At.set(this,t)),(t=Pt(this,t.get(e)||(t.set(e,t=function(a){for(var r,n,o=1,i="",p="",c=[0],d=function(f){o===1&&(f||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,f,i):o===3&&(f||i)?(c.push(3,f,i),o=2):o===2&&i==="..."&&f?c.push(4,f,0):o===2&&i&&!f?c.push(5,0,!0,i):o>=5&&((i||!f&&o===5)&&(c.push(o,0,i,n),o=6),f&&(c.push(o,f,0,n),o=6)),i=""},l=0;l<a.length;l++){l&&(o===1&&d(),d(l));for(var _=0;_<a[l].length;_++)r=a[l][_],o===1?r==="<"?(d(),c=[c],o=3):i+=r:o===4?i==="--"&&r===">"?(o=1,i=""):i=r+i[0]:p?r===p?p="":i+=r:r==='"'||r==="'"?p=r:r===">"?(d(),o=1):o&&(r==="="?(o=5,n=i,i=""):r==="/"&&(o<5||a[l][_+1]===">")?(d(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):r===" "||r==="	"||r===`
`||r==="\r"?(d(),o=2):i+=r),o===3&&i==="!--"&&(o=4,c=c[0])}return d(),c}(e)),t),arguments,[])).length>1?t:t[0]}var Qa=(e,t,...a)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(r=>r.trim()).map(r=>r.indexOf("cvio-ab-")!==0?`cvio-ab-${r}`:r).join(" ")),O(e,t,...a)),s=Tt.bind(Qa);var Y=e=>{let{dispatch:t,privacyPolicyLink:a}=u("privacyPolicyLink");return a?s`
      <a class="link-primary" href="${a}" target="_new">
        ${e.children}
      </a>
    `:s`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `};var ce=e=>{let{appointment:t}=u("appointment");return s`
    <span class="fw-bold">
      ${t.start?k.formatDateTime(t.start):null}
    </span>
  `};var Me={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja a foglal\xE1st?","All inputed data will be lost.":"Mindent megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pontfoglal\xE1s folytat\xE1sa","Cancel appointment":"Foglal\xE1s megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues is available for the selected process":"Egy munkat\xE1rsunk sem el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Search in progress...":"Keres\xE9s folyamatban...","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"Az \xD6n adatai",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m","Appointment details verification":"Foglal\xE1si adatok ellen\u0151rz\xE9se","Appointment summary":"Foglal\xE1si \xF6sszes\xEDt\u0151",Price:"\xC1r","Confirm appointment":"Id\u0151pontfoglal\xE1s j\xF3v\xE1hagy\xE1sa","%customer%'s examination":"%customer% vizsg\xE1lata","Your appointment have been recorded.":"Foglal\xE1s\xE1t r\xF6gz\xEDtett\xFCk.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsg\xE1lat kezdete: %start%, k\xE9rj\xFCk \xE9rkezzen 5 perccel kor\xE1bban.","If you have any further questions, please contact us through our customer service.":"Ha k\xE9rd\xE9se van vagy szeretn\xE9 m\xF3dos\xEDtani a foglal\xE1s\xE1t, k\xE9rj\xFCk keresse szak\xFCzlet\xFCnket.","Appointment booked!":"Id\u0151pont lefoglalva!","examiner: %examiner%":"v\xE9gzi: %examiner%","It takes up to %length% minutes":"Id\u0151tartam: %length% perc","I have accepted the privacy policy":s`Elfogadom az <${Y}>adatkezelési tájékoztatóban<//> foglaltakat`,"I agree to the use of my medical records according to privacy policy":"Hozz\xE1j\xE1rulok eg\xE9szs\xE9g\xFCgyi adataim adatkezel\xE9si t\xE1j\xE9koztat\xF3ban foglaltak szerinti kezel\xE9s\xE9hez","Privacy policy":"Adatkezel\xE9si t\xE1j\xE9koztat\xF3",Close:"Bez\xE1r\xE1s","Start Time":"Id\u0151pont",Subject:"T\xE1rgy",Location:"Helysz\xEDn","Appointment booking":"Id\u0151pontfoglal\xE1s","Select eye examination type":"Vizsg\xE1latt\xEDpus v\xE1laszt\xE1sa","Select a vision expert":"L\xE1t\xE1sszak\xE9rt\u0151 v\xE1laszt\xE1sa","Select your desired appointment time":"Id\u0151pont v\xE1laszt\xE1sa","Enter customer details":"\xDCgyf\xE9ladatok megad\xE1sa",Comment:"Megjegyz\xE9s","change date":"id\u0151pont cser\xE9je","More...":"B\u0151vebben...","Detailed description":"R\xE9szletes le\xEDr\xE1s",Morning:"D\xE9lel\u0151tt",Afternoon:"D\xE9lut\xE1n",Evening:"Este"},ro:{"Are you sure you want to cancel this appointment?":"Sunte\u021Bi sigur c\u0103 dori\u021Bi s\u0103 renun\u021Ba\u021Bi la programare?","All inputed data will be lost.":"Datele \xEEntroduse se vor pierde.","No, continue editing appointment":"Nu, continuare programare.","Cancel appointment":"\xCEntreruperea program\u0103rii","Appointment booking failed":"Programare nereu\u0219it\u0103.","Due to an unexpected error appointment could not be booked, please restart the process":"A ap\u0103rut o eroare. V\u0103 rug\u0103m, \xEEncepe\u021Bi din nou procesul.","None of our colleagues is available for the selected process":"Nu avem angaja\u021Bi disponibili pentru protocolul selectat.","First free":"Primul liber","For finding the nearest free time slot.":"\xCEn cel mai scurt timp.","@abbrSunday":"D","@abbrMonday":"L","@abbrTuesday":"M","@abbrWednesday":"Mi","@abbrThursday":"J","@abbrFriday":"V","@abbrSaturday":"S",January:"Ianuarie",February:"Februarie",March:"Martie",April:"Aprilie",May:"Mai",June:"Junie",July:"Julie",August:"August",September:"Septembrie",October:"Octombrie",November:"Noiembrie",December:"Decembrie","There are no free appointment times for this day":"Nu sunt ore libere la data selectat\u0103.","The next free slot is available on %date%":"Urm\u0103torul timp liber este: %date%","Go to date":"Salt la dat\u0103","Click here to search for the next free appointment":"Click aici pentru c\u0103utarea urm\u0103torului timp liber","Search in progress...":"C\u0103utare \xEEn curs...","Last name":"Nume","First name":"Prenume",Birth:"Data na\u0219tere",Gender:"Gen",SSN:"CNP",Country:"\u021Aara",State:"Megye","Postal code":"Cod po\u0219tal",City:"Ora\u0219","Street address":"Strada",Mobile:"Num\u0103r de tel mobil","Select another process":"Selectare protocol diferit","@abbrMinute":"min.","Not specified":"Nu e specificat",Male:"B\u0103rbat",Female:"Femeie",Next:"Mai departe","This field is required.":"Acest c\u0103mp este necesar.","Invalid email address.":"Adresa da mail gre\u0219it\u0103.","Your information":"Datele personale",Name:"Nume","Date of birth":"Data na\u0219tere",Address:"Adresa","Phone number":"Num\u0103r de telefon","Appointment details verification":"Verificare datele rezerv\u0103rii","Appointment summary":"Sumar rezervare",Price:"Pre\u021B","Confirm appointment":"Rezervare","%customer%'s examination":"Consulta\u021Bie %customer%","Your appointment have been recorded.":"Rezervare salvat\u0103.","The examination will start at %start%, please arrive 5 minutes early.":"V\u0103 rug\u0103m s\u0103 v\u0103 prezenta\u021Bi cu 5 minute mai devreme. Ora inceperii rezerv\u0103rii: %start%.","If you have any further questions, please contact us through our customer service.":"Dac\u0103 ave\u021Bi alte \xEEntreb\u0103ri, v\u0103 rug\u0103m contacta\u021Bi serviciul clien\u021Bi.","Appointment booked!":"Programare rezervat\u0103!","examiner: %examiner%":"examinator: %examiner%","It takes up to %length% minutes":"Durata: %length% minute","I have accepted the privacy policy":s`Accept <${Y}>Termenile și condițiile<//>`,"I agree to the use of my medical records according to privacy policy":"Dau acordul pentru prelucrarea datelor medicale conform Termenilor \u0219i condi\u021Biilor generale.","Privacy policy":"Termeni \u0219i condi\u021Bii",Close:"\xCEnchidere","Start Time":"Data",Subject:"Subiect",Location:"Loca\u021Bie","Appointment booking":"Programare","Select eye examination type":"Selectare tip de examinare","Select a vision expert":"Selectare specialist \xEEn vedere","Select your desired appointment time":"Selectare dat\u0103 \u0219i or\u0103","Enter customer details":"Datele clientului","change date":"modificare dat\u0103",Morning:"\xCEnainte de mas\u0103",Afternoon:"Dup\u0103 mas\u0103",Evening:"Seara"},hr:{"Are you sure you want to cancel this appointment?":"Jeste li sigurni da \u017Eelite otkazati ovaj termin?","All inputed data will be lost.":"Svi uneseni podaci bit \u0107e izgubljeni.","No, continue editing appointment":"Ne, nastavi s ure\u0111ivanjem termina","Cancel appointment":"Otka\u017Ei termin","Appointment booking failed":"Rezervacija termina nije uspjela","Due to an unexpected error appointment could not be booked, please restart the process":"Zbog neo\u010Dekivane pogre\u0161ke termin nije mogu\u0107e rezervirati, molimo ponovno pokrenite proces","None of our colleagues is available for the selected process":"Nitko od na\u0161ih kolega nije dostupan za odabrani proces","First free":"Prvo slobodno","For finding the nearest free time slot.":"Da odaberete \u0161to raniji termin.","@abbrSunday":"N","@abbrMonday":"P","@abbrTuesday":"U","@abbrWednesday":"S","@abbrThursday":"\u010C","@abbrFriday":"P","@abbrSaturday":"S",January:"Sije\u010Dnja",February:"Velja\u010Da",March:"O\u017Eujak",April:"Travanj",May:"Svibanj",June:"Lipanj",July:"Srpanj",August:"Kolovoz",September:"Rujan",October:"Listopad",November:"Studeni",December:"Prosinac","There are no free appointment times for this day":"Za ovaj dan nema slobodnih termina","The next free slot is available on %date%":"Datum sljede\u0107eg slobodnog termina je %date%","Go to date":"Sko\u010Di na datum","Click here to search for the next free appointment":"Tra\u017Eenje sljede\u0107eg slobodnog termina","Search in progress...":"Pretra\u017Eivanje je u tijeku...","Last name":"Prezime","First name":"Ime",Birth:"Datum ro\u0111enja",Gender:"Spol",SSN:"MBO broj",Country:"Zemlja",State:"Dr\u017Eava","Postal code":"Po\u0161tanski broj",City:"Grad","Street address":"Ulica",Mobile:"Mobilni","Select another process":"Odaberite drugi protokol","@abbrMinute":"m.","Not specified":"Nije specificirano",Male:"Mu\u0161karac",Female:"\u017Dena",Next:"Sljede\u0107i","This field is required.":"Ovo polje je obavezno.","Invalid email address.":"Pogre\u0161na adresa e-maila.","Your information":"Va\u0161i podaci",Name:"Ime","Date of birth":"Datum ro\u0111enja",Address:"Adresa","Phone number":"Broj telefona","Appointment details verification":"Provjerite detalje rezervacije","Appointment summary":"Sa\u017Eetak rezervacije",Price:"Cjena","Confirm appointment":"Odobrenje rezervacije termina","%customer%'s examination":"%customer% pregleda","Your appointment have been recorded.":"Va\u0161a rezervacija je zabilje\u017Eena.","The examination will start at %start%, please arrive 5 minutes early.":"Po\u010Detak pregleda: %start%, molimo do\u0111ite 5 minuta ranije.","If you have any further questions, please contact us through our customer service.":"Ako imate dodatnih pitanja, obratite nam se putem na\u0161e korisni\u010Dke slu\u017Ebe.","Appointment booked!":"Termin rezerviran!","examiner: %examiner%":"ispitiva\u010D: %examiner%","It takes up to %length% minutes":"Trajanje: %length% minuta","I have accepted the privacy policy":s`Prihvaćam <${Y}>što je zapisano<//> u informativnom listu za upravljanje podacima`,"I agree to the use of my medical records according to privacy policy":"Pristajem na obradu mojih zdravstvenih podataka u skladu s informacijama o upravljanju podacima","Privacy policy":"Informativni list za upravljanje podatke",Close:"Zatvaranje","Start Time":"Vrijeme po\u010Detka",Subject:"Objekat",Location:"Mjesto","Appointment booking":"Zaka\u017Eite termin","Select eye examination type":"Izbor vrste pregleda","Select a vision expert":"Odaberite stru\u010Dnjaka za vid","Select your desired appointment time":"Odaberite \u017Eeljeno vrijeme termina","Enter customer details":"Unos podataka o klijentu","change date":"promijeni termin",Morning:"Prijepodne",Afternoon:"Poslijepodne",Evening:"Ve\u010Der"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepted the privacy policy":s`I accept the terms of <${Y}>privacy policy<//>`,"Your appointment starts at startTime":s`Your appointment starts at <${ce}//>`,"change date":"change date"}},m=(e,t={},a)=>{a=a||u("language","translationOverrides");let r=a.language,n=Me[r]||Me[r.substring(0,2)]||Me.en;e=a.translationOverrides[e]||n[e]||e;for(let o in t)e=e.replace(new RegExp("%"+o+"%","g"),t[o]);return e};var Ft=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function pe(e,t,a){let r=function(n,o){if(!n.only_specific_processes_allowed)return!0;let i=o["@id"].split("/"),p=parseInt(i[i.length-1]);return n.allowed_process_ids.indexOf(p)!=-1};if(typeof t.online_reservation_allowed!="undefined"&&t.online_reservation_allowed==!1||!r(t,e))return!1;for(let n=0;n<Ft.length;n++){let o=Ft[n];if(!(!t.user||t.user.roles.indexOf(o.name)==-1)&&(e.highestRequiredRole==o.name||a=="hierachical"&&o.includes.indexOf(e.highestRequiredRole)!=-1))return!0}return!1}function Z({appointment:e,calendars:t,calendarRoleCheckMode:a}){var r=e?e.eye_examination_process:null;return t.filter(function(n){return!r||!r.highestRequiredRole?!0:pe(r,n,a)})}function A(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var Pe=5,Xa=e=>{var t=[new Date(e)];for(let a=0;a<Pe-1;a++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(a){for(let r=0;r<Pe;r++)if(A(this[r],a))return!0},t},de=[];function Ae(e){if(de.length)return de;for(var t=e||new Date,a=0;a<=100;a++)de.push(Xa(t)),t=new Date(t),t.setDate(t.getDate()+Pe);return de}function Q(e,t){return A(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var Te={hu:"%Y. %M. %D."},Et=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),Nt=e=>{let{language:t}=u("language");var a=Te[t]||Te[t.substring(0,2)]||Te.hu;e=new Date(e);var r=e.getMonth()+1;return a.replace("%Y",e.getFullYear()).replace("%M",`${r<10?"0":""}${r}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},er=e=>Nt(e)+" "+Et(e),k={formatTime:Et,formatDate:Nt,formatDateTime:er};var Ot=["hu"],zt=e=>(e=e||u("language").language,Ot.indexOf(e)!=-1||Ot.indexOf(e.substring(0,2))!=-1),tr=({first_name:e,last_name:t},a)=>zt(a)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),L={format:tr,shouldSwitchNameOrder:zt};var B=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93","+..-..-...-...."],["\xC5land Islands","ax","358",""],["Albania (Shqip\xEBri)","al","355","+...(...)...-..."],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (\xD6sterreich)","at","43","+..(...)...-...."],["Azerbaijan (Az\u0259rbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973","+...-....-...."],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375","+...(..)...-..-.."],["Belgium (Belgi\xEB)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (B\xE9nin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (R\xE9publique centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (\u4E2D\u56FD)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["C\xF4te d\u2019Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Cura\xE7ao","cw","599","+...-...-....",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357","+...-..-...-..."],["Czech Republic (\u010Cesk\xE1 republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (Rep\xFAblica Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (F\xF8royar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane fran\xE7aise)","gf","594","+...-.....-...."],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guin\xE9e)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (\u9999\u6E2F)","hk","852","+... .... ...."],["Hungary (Magyarorsz\xE1g)","hu","36","+..(...)...-..."],["Iceland (\xCDsland)","is","354","+... ... ...."],["India (\u092D\u093E\u0930\u0924)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98","+..(...)...-...."],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (\u65E5\u672C)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962","+...-.-....-...."],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965","+...-....-...."],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996","+...(...)...-..."],["Laos (\u0EA5\u0EB2\u0EA7)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (\u6FB3\u9580)","mo","853","+...-....-...."],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (M\xE9xico)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212","+...-..-....-..."],["Mozambique (Mo\xE7ambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95","+..-...-..."],["Namibia (Namibi\xEB)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968","+...-..-...-..."],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970","+...-..-...-...."],["Panama (Panam\xE1)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Per\xFA)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974","+...-....-...."],["R\xE9union (La R\xE9union)","re","262","+...-.....-...."],["Romania (Rom\xE2nia)","ro","40","+..-..-...-...."],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239","+...-..-....."],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966","+...-..-...-...."],["Senegal (S\xE9n\xE9gal)","sn","221","+...-..-...-...."],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82","+..-..-...-...."],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211","+...-..-...-...."],["Spain (Espa\xF1a)","es","34","+.. ... ... ..."],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94","+..-..-...-...."],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963","+...-..-....-..."],["Taiwan (\u53F0\u7063)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (\u0E44\u0E17\u0E22)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216","+...-..-...-..."],["Turkey (T\xFCrkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380","+...(..)...-..-.."],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (O\u02BBzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Citt\xE0 del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Vi\u1EC7t Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],me={},It={},Lt=function(e,t,a){t in me||(me[t]=[]);var r=a||0;me[t][r]=e};for(var N=0;N<B.length;N++){if(j=B[N],B[N]={name:j[0],iso2:j[1],dialCode:j[2],priority:j[4]||0},j[3]&&(B[N].format=j[3]),j[5])for(B[N].hasAreaCodes=!0,ue=0;ue<j[5].length;ue++)Bt=j[2]+j[5][ue],Lt(j[1],Bt);It[B[N].iso2]=N,Lt(j[1],j[2],j[4])}var j,Bt,ue,ar={allCountries:B,iso2Lookup:It,allCountryCodes:me},Fe=ar.allCountries;var rr={hu_HU:{"06":"+36","36":"+36"},hr_HR:{"0":"+385"},ro_RO:{"0":"+40"}},Ee=(e,t)=>{let a=rr[e]||{};t=(t||"").trim();var r=t.indexOf("+")==0;if(t=t.replace(/\D/g,""),!t.length)return null;r&&(t=`+${t}`),t.indexOf("00")==0&&(t=`+${t.substring(2)}`);for(let o=0;o<Object.keys(a).length;o++){let i=Object.keys(a)[o];if(t.indexOf(i)==0)return`${a[i]}.${t.substring(i.length)}`}for(let o=0;o<Fe.length;o++){let{dialCode:i}=Fe[o];if(t.indexOf(`+${i}`)==0)return`+${i}.${t.substring(i.length+1)}`}let n=Object.keys(a)[0];return`${n?a[n]:"+36"}.${t}`};function C(e,t,a){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate():null}function Ne(e,t,a){return e.filter(function(r){if(!r.highestRequiredRole)return!0;for(let n=0;n<t.length;n++)if(pe(r,t[n],a))return!0;return!1})}var Rt=e=>{let t={},a={},r={dispatch(n,o){if(n!=="@dispatch"&&r.dispatch("@dispatch",[n,o,t[n]]),t[n]){let i;t[n].forEach(p=>{let c=t[n].includes(p)&&p(a,o,r);c&&typeof c.then!="function"&&(a={...a,...c},i={...i,...c})}),i&&r.dispatch("@changed",i)}},get:()=>a,on(n,o){return(t[n]||(t[n]=[])).push(o),()=>{t[n]=t[n].filter(i=>i!==o)}}};return e.forEach(n=>{n&&n(r)}),r.dispatch("@init"),r};function Ht(e){e.on("@init",()=>({eyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:t},a)=>(a.length==1&&(e.dispatch("appointment/set",{eye_examination_process:a[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected")),{eyeExaminationProcesses:a}))}var Oe=["process","calendar","appointment","customer","summary"];function Gt(e){var t=(r,n)=>Oe.filter(o=>r.indexOf(o)!=-1&&o!=n),a=(r,n)=>Oe.filter(o=>r.indexOf(o)!=-1||o==n);e.on("@init",()=>({currentStep:"process",availableSteps:Oe,calendarStepShouldBeHidden:!1,showFirstAvailableUserItem:!0})),e.on("currentStep/set",({availableSteps:r,currentStep:n},o)=>(document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:r.indexOf(o)!=-1?o:n})),e.on("calendarStepShouldBeHidden/set",({availableSteps:r},n)=>({calendarStepShouldBeHidden:n,availableSteps:t(r,"calendar")})),e.on("showFirstAvailableUserItem/set",(r,n)=>({showFirstAvailableUserItem:n})),e.on("currentStep/next",({currentStep:r,availableSteps:n})=>{var o=n.indexOf(r);return document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:o<n.length-1?n[o+1]:r}}),e.on("currentStep/previous",({currentStep:r,availableSteps:n})=>{var o=n.indexOf(r);return document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:o>0?n[o-1]:r}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:r,availableSteps:n,currentStep:o})=>{if(r.length==1)return document.querySelector(".cvio-ab-content").scrollTop=0,{availableSteps:n=t(n,"process"),currentStep:o=="process"?n[0]:o}}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:r,appointment:n,calendars:o,currentStep:i,calendarStepShouldBeHidden:p,calendarRoleCheckMode:c})=>{if(!p){var d=Z({appointment:n,calendars:o,calendarRoleCheckMode:c});return{availableSteps:a(r,"calendar")}}})}function Ut(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},a)=>({appointment:Object.assign(t,a)})),e.on("showAppointmentComment/set",(t,a)=>({showAppointmentComment:a})),e.on("constantAppointmentCommentText/set",(t,a)=>({constantAppointmentCommentText:a}))}function Vt(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},a)=>(t.headers=Object.assign(t.headers,a),{api:t})),e.on("api/setPath",({api:t},a)=>(t.path=a,{api:t}))}function qt(e){e.on("@init",()=>({language:navigator.language,translationOverrides:{}})),e.on("language/set",(t,a)=>({language:a})),e.on("translationOverrides/set",(t,a)=>({translationOverrides:a}))}function X(e,{visible:t}={visible:!1}){return a=>{a.on("@init",()=>({[e]:t})),a.on(`${e}/set`,(r,n)=>({[e]:n}))}}var or=["idle","loading","error","success"];function Kt(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},a)=>(a=or.indexOf(a)!=-1?a:t,a=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:a}))}function Jt(e){e.on("@init",()=>({store:null})),e.on("store/set",({store:t},a)=>({store:a}))}function Wt(e){e.on("@init",()=>({calendars:[],calendarRoleCheckMode:"hierachical"})),e.on("calendars/set",(t,a)=>({calendars:a.filter(({user:r})=>r)})),e.on("calendarRoleCheckMode/set",(t,a)=>({calendarRoleCheckMode:a}))}function Yt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),{selectedDate:t}}),e.on("selectedDate/set",(t,a)=>({selectedDate:a}))}var nr=(e,t)=>{let{appointment:a,selectedCalendar:r,nextFreeSlots:n,selectedDate:o,calendarRange:i}=e,p=o.getFullYear(),c=o.getMonth(),d=i=="fiveDays"?o.getDate()+7:new Date(p,c+1,0).getDate();for(let l=o.getDate();l<=d;l++){let _=n[C(a,r,new Date(p,c,l))];if(_==null||_.status=="incomplete")return!1}return!0},ir=async(e,t)=>{let{selectedDate:a,calendarRange:r}=e.get();if(r=="fiveDays")return;let n=a.getFullYear(),o=a.getMonth(),i=Object.keys(t).sort().pop(),p=t[i],c=/(?<=^(?:[^-]*-){2})(.*)/,d=i.match(c)[1].split("-");var l=new Date(d[0],parseInt(d[1])-1,parseInt(d[2]));p.status!=="incomplete"&&(l=new Date(d[0],parseInt(d[1])-1,parseInt(d[2])+1)),l<=new Date(n,o+1,0)&&G(e,l)},G=async(e,t)=>{let{appointment:a,selectedCalendar:r,firstEligibleTime:n,calendarRange:o}=e.get();if(e.dispatch("nextFreeSlotLoading/set",!0),!a.eye_examination_process||sr(e,t)||nr(e.get(),t)){e.dispatch("nextFreeSlotLoading/set",!1);return}let i=await D.get(e,`appointment_next_free_slots?${lr(e,t)}`);if(i.length==0){let l=new Date(t);return l.setDate(t.getDate()+6),e.dispatch("nextFreeSlots/add",Zt(e,t,l)),G(e,l)}let p=new Date(i[i.length-1].start),c=Zt(e,t,p);var d=null;for(let l=0;l<i.length;l++){let _=i[l],f=new Date(_.start),h=C(a,r,f);c[h].length&&c[h][c[h].length-1].start==_.start||f<n||(c[h].status="incomplete",c[h].slots||(c[h].slots=[]),c[h].slots.push(_),d&&d!=h&&(c[d].status="complete"),d!=h&&(d=h))}e.dispatch("nextFreeSlots/add",c),ir(e,c)},sr=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>90,lr=(e,t)=>{let{appointment:a,selectedCalendar:r}=e.get(),n={process:a.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return r?n.calendar=r["@id"]:n.store=e.get().store["@id"],Object.keys(n).map(o=>`${o}=${n[o]}`).join("&")},Zt=(e,t,a)=>{let{appointment:r,selectedCalendar:n}=e.get(),o=new Date(t);o.setHours(0),o.setMinutes(0);let i={};for(;o<=a;)i[C(r,n,o)]={status:"empty"},o.setDate(o.getDate()+1);return i};function Qt(e){e.on("@init",()=>{let t=new Date;return t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:t,firstEligibleTime:t,autoselectNextFreeSlot:!1,nextFreeSlotLoading:!1}}),e.on("firstEligibleTime/set",(t,a)=>{let r=new Date;if(a=="now")return e.dispatch("selectedDate/set",r),{firstEligibleDate:r,firstEligibleTime:r};if(r.setDate(r.getDate()+1),r.setHours(0),r.setMinutes(0),r.setSeconds(0),a=="tomorrow")return{firstEligibleDate:r,firstEligibleTime:r};if(a=="tomorrowNoon"){let n=new Date(r);return n.setHours(12),{firstEligibleDate:r,firstEligibleTime:n}}if(a=="plus24Hours"){let n=new Date;return n.setDate(n.getDate()+1),{firstEligibleDate:r,firstEligibleTime:n}}if(a=="dayAfterTomorrow")return r.setDate(r.getDate()+1),e.dispatch("selectedDate/set",r),{firstEligibleDate:r,firstEligibleTime:r}}),e.on("selectedDate/set",async t=>{G(e,t.selectedDate)}),e.on("bookerInit",async t=>{t.currentStep=="appointment"&&G(e,t.selectedDate)}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&G(e,t.selectedDate)}),e.on("appointment/set",async t=>{t.currentStep=="appointment"&&G(e,t.selectedDate)}),e.on("appointment/selectSlot",async({appointment:t,calendars:a,currentStep:r,autoselectNextFreeSlot:n},o)=>{if(r==="appointment"){var i=null;for(let p=0;p<a.length;p++)if(o.calendar["@id"]==a[p]["@id"])var i=a[p];if(!i)throw new Error("Could not find calendar");e.dispatch("appointment/set",{start:o.start,end:o.end,calendar:i}),e.dispatch("currentStep/next")}}),e.on("autoselectNextFreeSlot/set",(t,a)=>({autoselectNextFreeSlot:a})),e.on("nextFreeSlots/add",({nextFreeSlots:t,autoselectNextFreeSlot:a},r)=>{let n={nextFreeSlots:Object.assign(t,r)};if(!a)return n;for(let o in t)if(t[o].status!="empty"&&t[o].slots.length>0){e.dispatch("appointment/selectSlot",t[o].slots[0]),n.autoselectNextFreeSlot=!1;break}return n}),e.on("nextFreeSlotLoading/set",(t,a)=>({nextFreeSlotLoading:a}))}var cr=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},pr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,dr=(e,t)=>{e==null||e===""||pr.test(e.trim().toLowerCase())||t.errors.push("Invalid email address.")};function Xt(e){e.on("@init",()=>({customerForm:{},customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:t,customerFormGlobalErrors:a},r)=>({customerForm:Object.assign(t,r.customerForm||{}),customerFormGlobalErrors:r.customerFormGlobalErrors||a})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:a})=>{let{customer:r}=a;var n=!1;if(Object.keys(t).forEach(o=>{t[o].errors=[],t[o].required&&cr(r[o],t[o]),o=="email"&&dr(r[o],t[o]),t[o].errors.length&&(n=!0)}),n)return{customerForm:t,customerFormGlobalErrors:[]};e.dispatch("currentStep/next")})}function ea(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(t,a)=>({headerTitle:a}))}function ta(e){e.on("@init",()=>({calendarRange:"fiveDays",timeSlotMode:"singleColumn"})),e.on("timeSelectionUi/timeSlotMode/set",(t,a)=>({timeSlotMode:a})),e.on("timeSelectionUi/calendarRange/set",(t,a)=>({calendarRange:a}))}function aa(e){e.on("@init",()=>({priceComment:null})),e.on("priceComment/set",(t,a)=>({priceComment:a}))}function ra(e){e.on("@init",()=>({showPrice:!0})),e.on("showPrice/set",(t,a)=>({showPrice:a}))}function oa(e){e.on("@init",()=>({showExaminerName:null})),e.on("showExaminerName/set",(t,a)=>({showExaminerName:a}))}function na(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(t,a)=>({booking:a}))}function ia(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(t,a)=>({country:a}))}function sa(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(t,a)=>({selectedCalendar:a}))}function la(e){e.on("@init",()=>({privacyPolicy:null,privacyPolicyLink:null,medicalConsent:"explicit"})),e.on("bookerInit",async t=>{var a=await D.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let r=0;r<a.length;r++)if(new Date(a[r].valid_until)>new Date)return e.dispatch("privacyPolicy/set",a[r]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(t,a)=>({privacyPolicy:a})),e.on("privacyPolicyLink/set",(t,a)=>({privacyPolicyLink:a})),e.on("medicalConsent/set",(t,a)=>({medicalConsent:a}))}function ca(e){e.on("@init",()=>({locationName:null,locationAddress:null,showLocation:!0})),e.on("locationName/set",(t,a)=>({locationName:a})),e.on("locationAddress/set",(t,a)=>({locationAddress:a})),e.on("showLocation/set",(t,a)=>({showLocation:a}))}var mr=X("closeConfirmModalState"),ur=X("globalModalState",{visible:!0}),fr=X("privacyPolicyModalState"),hr=X("detailedDescriptionModalState"),pa=()=>Rt([Ht,Gt,Ut,Kt,qt,Vt,fr,Jt,Wt,Yt,Qt,Xt,la,mr,ur,ea,na,ia,sa,aa,ra,oa,ca,hr,ta]);var ze=e=>{let{currentStep:t,availableSteps:a,dispatch:r,booking:n}=u("currentStep","availableSteps","booking");return s`
    <button type="button" onClick=${()=>r("currentStep/previous")}
      class="${t==a[0]||n?"invisible":""} btn btn-outline-light">
      ←
    </button>
  `};var T=()=>s`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var F=e=>{let t=u(e.modalStateStore),a=t[e.modalStateStore],[r,n]=I(!1),[o,i]=I(!1),[p,c]=I(!1);a&&!r&&(i(!0),setTimeout(()=>{c(!0),n(!0)},0)),!a&&r&&(c(!1),setTimeout(()=>{i(!1),n(!1)},100));let d=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return s`
    <div class="modal text-dark fade ${p?"show":""}" tabindex="-1" style="${o?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?s`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${m(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?s`<p>${m(e.content)}</p>`:s`<${T}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?s`
            <div class="modal-footer">
              ${e.cancelButtonLabel?s`
                <button type="button" class="btn btn-secondary" onClick=${d}>
                  ${m(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?s`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${m(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var Ie=e=>{let{dispatch:t}=u();return s`
    <button type="button" class="btn btn-outline-light" onClick=${()=>t("closeConfirmModalState/set",!0)}>X</button>
    <${F} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${()=>t("close")}/>
  `};var da=({customer:e,customerAddress:t})=>s`
      <div>
        <div class="mb-1">
          ${m("Your information")}:
        </div>
        <div class="fw-bold">
          ${e.first_name&&e.last_name?s`${m("Name")}: ${L.format(e)}`:""}
        </div>
        <div>
          ${e.birth?s`${m("Date of birth")}: ${k.formatDate(e.birth)}`:""}
        </div>
        <div>
          ${e.gender?s`${m("Gender")}: ${e.gender=="m"?"F\xE9rfi":"N\u0151"}`:""}
        </div>
        <div>
            ${e.ssn?s`${m("SSN")}: ${e.ssn}`:""}
        </div>
        <div>
          ${t?s`${m("Address")}: ${t}`:""}
        </div>
        <div>
          ${e.mobile?s`${m("Phone number")}: ${e.mobile}`:""}
        </div>
        <div>
          ${e.email?s`Email: ${e.email}`:""}
        </div>
      </div>
  `;var yr=async e=>{try{var t=await _r(e)}catch(a){if(a instanceof W){vr(e,a);return}throw a}await br(e,t),await gr(e,t),e.dispatch("moduleState/set","success")},_r=async e=>{let t=Object.assign({},e.appointment.customer,{medical_records_allowed:e.medicalConsent!="disabled"?!0:null,country:e.country,mobile:e.appointment.customer.mobile?Ee(e.store.chain.language,e.appointment.customer.mobile):null});return Object.keys(t).forEach(a=>{typeof t[a]=="string"&&(t[a]=t[a].trim())}),await D.post(e,"customers",t)},vr=async(e,t)=>{let{customerForm:a}=e;var r=[];for(let n=0;n<t.getValidations().length;n++){let{propertyPath:o,message:i}=t.getValidations()[n];if(o==""){r.push(i);continue}a[o].errors||(a[o].errors=[]),a[o].errors.push(i)}e.dispatch("customerForm/set",{customerForm:a,customerFormGlobalErrors:r}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},br=async(e,t)=>{await D.post(e,"customer_consents",{customer:t["@id"],approved_at:new Date,medical_records_allowed:e.medicalConsent!="disabled",source:"api"})},gr=async(e,t)=>{let{appointment:a,language:r,translationOverrides:n,constantAppointmentCommentText:o}=e,i=o||"";a.comment&&(i=(i?i+`

`:"")+a.comment),await D.post(e,"appointment_events",Object.assign({},a,{customer:t["@id"],eye_examination_process:a.eye_examination_process["@id"],calendar:a.calendar["@id"],comment:i||void 0,title:m("%customer%'s examination",{customer:L.format(t,r)},{language:r,translationOverrides:n}),status:"booked",should_send_confirmation_email:!0,should_send_reminder_email:!0,source:"online"}))},ma=e=>{var t=u("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store","translationOverrides","constantAppointmentCommentText","medicalConsent");let{booking:a,moduleState:r,dispatch:n}=t;return s`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{n("booking/set",!0);try{await yr(t)}catch(i){throw n("moduleState/set","error"),i}}} disabled=${r!="idle"}
        class="btn btn-primary btn-lg">
        ${a&&r=="idle"?s`<${T}/>`:m("Confirm appointment")}
      </button>
    </div>
  `};var Le={HUF:0},Sr=(e,t)=>{var a=e.price_list.currency,r={style:"currency",currency:a};return Le[a]!=null&&(r.maximumFractionDigits=Le[a],r.minimumFractionDigits=Le[a]),new Intl.NumberFormat(t,r)},fe=({process:e})=>{if(!e)return s``;let{store:t,language:a,showPrice:r}=u("store","language","showPrice");if(!r)return s``;let n=e.process_services;var o=null,i=null,p=t.price_list.id;n.forEach(d=>{d.service.packagings.forEach(l=>{l.currentPrices.forEach(_=>{_.price_list.id==p&&((o==null||o>_.value)&&(o=_.value),(i==null||i<_.value)&&(i=_.value))})})});var c=Sr(t,a);return o==null||i==null?s``:o==i?s`${c.format(o)}`:s`${c.format(o)} - ${c.format(i)}`};var he=e=>{let{appointment:t,language:a,currentStep:r,store:n,selectedCalendar:o,priceComment:i,showPrice:p,showExaminerName:c,locationName:d,locationAddress:l,showLocation:_,dispatch:f}=u("appointment","language","currentStep","store","selectedCalendar","priceComment","showPrice","showExaminerName","locationName","locationAddress","showLocation");if(!n)return;var h=["state","postal_code","city","street_address"],g=[];h.forEach(w=>{!t.customer[w]||g.push(t.customer[w])});var y=t.calendar||o,b={dateTimeStart:t.start?k.formatDateTime(t.start):null,dateTimeEnd:t.end?k.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:c&&y?y.user.name:null,customer:t.customer,customerAddress:g.join(", "),showLocation:_,locationName:d!==null?d:n.name,locationAddress:l!==null?l:n.postal_code+" "+n.city+", "+n.street_address,appointmentComment:t.comment};let S=()=>{f("currentStep/set","appointment")};return s`
    <ul class="list-group${r=="summary"?"":" text-end"}">
      ${r!="summary"?s`<li class="list-group-item fw-bold">${m("Appointment summary")}</li>`:null}
      ${b.processName?s`
        <li class="list-group-item">
          <div>${m("Subject")}:</div>
          <div class="fw-bold">${b.processName}</div>
          <div>
            ${b.examinerName?s`${m("examiner: %examiner%",{examiner:b.examinerName})}`:null}
          </div>
        </li>
      `:""}
      ${b.dateTimeStart&&b.dateTimeEnd&&b.processLength?s`
        <li class="list-group-item">
          <div>${m("Start Time")}:</div>
          <div>
            <${ce}//>
          </div>
          <div class="text-muted">
            ${m("It takes up to %length% minutes",{length:b.processLength})}
          </div>
          <div class="fs-6">
            <a href="#" onClick="${S}">${m("change date")}</a>
          </div>
        </li>
      `:""}
      ${r=="summary"?s`
        <li class="list-group-item">
          <${da} customer=${b.customer} customerAddress=${b.customerAddress}/>
        </li>
      `:""}
      ${r=="summary"&&b.appointmentComment?s`
        <li class="list-group-item">
          ${m("Comment")}: ${b.appointmentComment}
        </li>
      `:""}
      ${b.showLocation?s`
            <li class="list-group-item">
              <div>${m("Location")}:</div>
              <div class="fw-bold">${b.locationName}</div>
              <div>${b.locationAddress}</div>
            </li>
        `:""}
      <li class="list-group-item">
        ${p?s`
          <div>${m("Price")}:</div>
          <div class="fw-bold"><${fe} process=${b.process}/></div>
        `:""}
        <div>${i||""}</div>
      </li>
      ${r=="summary"?s`
          <li class="list-group-item">
            <${ma}/>
          </li>
        `:""}
    </ul>
  `};var U=e=>{let{currentStep:t,availableSteps:a}=u("currentStep","availableSteps"),r=a.indexOf(e.step),n=a.indexOf(t);if(a.indexOf(e.step)==-1)return s``;var o=t!="process"&&t!="summary";return s`
    <div class="carousel-item
      ${n-1==r?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${n+1==r?"carousel-item-next":""}
    ">
      <div class="container-sm p-1 col-sm-10 col-md-8">
        <div class="row">
          <div class="${o?"col col-sm-8":"col"}">
            <div class="p-1">
              <${e.wrappedComponent}/>
            </div>
          </div>
          ${o?s`
            <div class="d-none d-sm-block col-4 summarycard">
              <div class="p-1">
                <${he} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var ua=e=>{let{appointment:t,dispatch:a,currentStep:r}=u("appointment","currentStep"),n=()=>{r==="process"&&(a("appointment/set",{eye_examination_process:e.item}),a("currentStep/eyeExaminationProcessSelected"),a("currentStep/next"))},o=i=>{i.stopPropagation(),a("detailedDescriptionModalState/set",e.item.detailed_description)};return s`
    <li class="row list-group-item ${t.eye_examination_process==e.item?"selected":""}" onClick=${n}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.item.name}</h4>
          <p class="${e.item.description&&e.item.description.length>0?"":"d-none"}">
            ${e.item.description}
            ${e.item.detailed_description&&e.item.detailed_description.length>0?s` <a href="#" onClick=${o}>${m("More...")}</a>`:""}
          </p>
          <span class="badge bg-primary me-1">${e.item.length} ${m("@abbrMinute")}</span>
          <span class="badge bg-primary"><${fe} process=${e.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var fa=e=>{let{eyeExaminationProcesses:t}=u("eyeExaminationProcesses"),{detailedDescriptionModalState:a,dispatch:r}=u("detailedDescriptionModalState"),n=()=>r("detailedDescriptionModalState/set",!1);return s`
    <ul class="list-group">
      ${t.length?t.map(o=>s`<${ua} item=${o} />`):s`<li class="list-group-item"><${T}/></li>`}
    </ul>

    <${F} modalStateStore="detailedDescriptionModalState"
      title="Detailed description"
      content=${a?s([a]):!1}
      approveButtonLabel="Close"
      onApprove=${n}
    />
  `};var Be=e=>{let{selectedCalendar:t,dispatch:a,currentStep:r}=u("selectedCalendar","currentStep"),n=()=>{r==="calendar"&&(a("selectedCalendar/set",e.item["@id"]?e.item:null),a("currentStep/next"))};return s`
    <li class="list-group-item${t==e.item||!e.item["@id"]&&!t?" selected":""}" onClick=${n}>
      <div class="row">
        <div class="col-auto">
          <div class="avatar me-2">
            ${e.item.user.profile_picture?s`<img class="image" src="data:image/*;base64,${e.item.user.profile_picture}"/>`:s`<h2 class="p-1 text-muted text-center image">?</h2>`}
          </div>
        </div>
        <div class="col-8">
          <div class="fw-bold">${e.item.user.name}</div>
          ${e.item.user.description||""}
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var ha=e=>{let{appointment:t,showFirstAvailableUserItem:a,dispatch:r}=u("appointment","showFirstAvailableUserItem"),n=Z(u("calendars","appointment","calendarRoleCheckMode")),o={user:{name:m("First free"),description:m("For finding the nearest free time slot.")}},i=()=>r("currentStep/previous");return s`
    <ul class="list-group">
      ${t.eye_examination_process?n.length?s`
              ${a?s`<${Be} item=${o} />`:""}
              ${n.map(p=>s`<${Be} item=${p} />`)}
            `:s`
              <li class="list-group-item text-center">
                ${m("None of our colleagues is available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${i}">
                  ${m("Select another process")}
                </button>
              </li>
          `:""}
    </ul>
  `};var kr=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],_a=({date:e})=>{let{selectedDate:t,dispatch:a}=u("selectedDate"),r=()=>a("selectedDate/set",e);return s`
    <div class="col">
      <div class="card ${A(e,t)?"bg-primary text-light":""}" onClick="${r}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${A(e,t)?"":"text-muted"}">
            ${m(kr[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var va=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:a,currentDateGroup:r,nextDateGroup:n}=t;return s`
    <div class="carousel-item
      ${a==e?"carousel-item-prev":""}
      ${r==e?"active":""}
      ${n==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(o=>s`<${_a} date=${o}/>`)}
      </div>
    </div>
  `};var xr=["January","February","March","April","May","June","July","August","September","October","November","December"],ba=e=>{let{selectedDate:t,firstEligibleDate:a,dispatch:r}=u("selectedDate","firstEligibleDate"),n=Ae(a),o=()=>r("selectedDate/set",p[4]),i=()=>r("selectedDate/set",d[0]);var p,c,d;for(let _=0;_<n.length&&(p=n[_-1],c=n[_],d=n[_+1],!c.hasDate(t));_++);let l={previousDateGroup:p,currentDateGroup:c,nextDateGroup:d};return s`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${o}
        disabled=${!p}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${m(xr[c[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${n.map(_=>s`<${va} dateGroup=${_} visibleDateGroups=${l}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${i}
        disabled=${!d}>
        ${">"}
      </button>
    </div>
  `};var ga=({day:e})=>{let{selectedCalendar:t,selectedDate:a,nextFreeSlots:r,appointment:n,dispatch:o}=u("selectedCalendar","appointment","nextFreeSlots","selectedDate"),i=r[C(n,t,e)],p=c=>{o("selectedDate/set",c)};return e<new Date||i&&i.status=="empty"?s`<td class='table-active disabled'>${e.getDate()}</td>`:i?s`
    <td class=${A(e,a)?"bg-primary text-light":"active-cell"} 
      onClick="${()=>p(e)}"
    >
      ${e.getDate()}
    </td>
  `:s`<td class="placeholder">${e.getDate()}</td>`};var $r=["January","February","March","April","May","June","July","August","September","October","November","December"],jr=["@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday","@abbrSunday"],ya=()=>{let{selectedCalendar:e,selectedDate:t,nextFreeSlots:a,appointment:r,dispatch:n}=u("selectedCalendar","appointment","nextFreeSlots","selectedDate"),o=t.getFullYear(),i=t.getMonth(),p=new Date(o,i+1,0).getDate(),c=new Date<new Date(o,i,0),d=new Date(o,i,1),l=[],_=[];var f=!0;for(let y=t.getDate();y<=p;y++){let b=a[C(r,e,new Date(o,i,y))];if(b==null||b.status=="incomplete"){f=!1;break}}for(let y=0;y<(d.getDay()||7)-1;y++)l.push(null);for(let y=1;y<=p;y++)l.push(new Date(o,i,y));for(let y=0;y<l.length;y+=7)_.push(l.slice(y,y+7));let h=()=>{n("selectedDate/set",new Date(o,i+1,1))};return s`
    <div class="container text-center calendar px-0">
      <div class="row">
        <div class="col">
          <table class="table table caption-top placeholder-glow">
            <caption class="text-center display-6">
              <button
                class="btn btn-outline-secondary month-previus ${c&&f?null:"disabled"}" 
                onClick="${()=>{n("selectedDate/set",new Date(o,i,0))}}"
              >
                ${"<"}
              </button>
              ${o+" "+m($r[i])}
              <button class="btn btn-outline-secondary month-next ${f?null:"disabled"}" onClick="${h}">
                ${">"}
              </button>
            </caption>
            <thead>
              <tr>
                ${jr.map(y=>s`<th scope="col">${m(y)}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${_.map(y=>s`
                <tr>
                  ${y.map(b=>b?s`
                      <${ga} day=${b}/>
                    `:s`<td></td>`)}
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `};var _e=e=>{let{selectedCalendar:t,selectedDate:a,nextFreeSlots:r,appointment:n,dispatch:o,nextFreeSlotLoading:i}=u("selectedCalendar","appointment","nextFreeSlots","selectedDate","nextFreeSlotLoading");var p=new Date(a),c,d=!1;for(p.setDate(p.getDate()+1);r[c=C(n,t,p)];){if(r[c].status!=="empty"){d=!0;break}p.setDate(p.getDate()+1)}let l=()=>o("selectedDate/set",p);return s`
    <li class="list-group-item p-4 text-center">
      <h5>${m("There are no free appointment times for this day")}</h5>
      ${d?s`
          <div class="text-muted">
            ${m("The next free slot is available on %date%",{date:k.formatDate(p)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${l}">${m("Go to date")}</button>
        `:i?s`
              <div class="text-muted">
                ${m("Search in progress...")}
              </div>
            `:s`
              <button class="btn m-2 btn-primary" onClick="${l}">
                ${m("Click here to search for the next free appointment")}
              </button>
            `}
    </li>
  `};var Sa=e=>{let{dispatch:t,appointment:a}=u("appointment"),r=()=>{t("appointment/selectSlot",e.slot)};return s`
    <li class="list-group-item${Q(new Date(a.start),new Date(e.slot.start))?" selected":""}" onClick=${r}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${k.formatTime(e.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var ka=()=>{let{selectedDate:e,selectedCalendar:t,appointment:a,nextFreeSlots:r}=u("selectedCalendar","selectedDate","nextFreeSlots","appointment");var n=C(a,t,e);return s`
    <ul class="list-group mt-3">
      ${r[n]?r[n].status=="empty"?s`<${_e}/>`:r[n].slots.map(o=>s`<${Sa} slot=${o}/>`):s`<li class="list-group-item"><${T}/></li>`}
    </ul>
  `};var xa=({slot:e})=>{let{dispatch:t,appointment:a}=u("appointment"),r=()=>{t("appointment/selectSlot",e)},n=Q(new Date(a.start),new Date(e.start));return s`
    <button class="btn btn-outline-secondary m-1 ${n?" selected":""}" onClick=${r}>
      ${k.formatTime(e.start)}
    </button>
  `};var ve=({title:e,slots:t})=>t.length?s`
      <div class="pt-3">
        <h4>${m(e)}:</h4>
        ${t.map(a=>s`<${xa} slot=${a}/>`)}
      </div>
      `:null;var $a=()=>{let{selectedDate:e,selectedCalendar:t,appointment:a,nextFreeSlots:r}=u("selectedCalendar","selectedDate","nextFreeSlots","appointment"),n=C(a,t,e),o=[],i=[],p=[],c=r[n]?r[n].slots:[];for(let d in c){let l=c[d],_=new Date(l.start);_.getHours()<12?o.push(l):_.getHours()<18?i.push(l):p.push(l)}return s`
    <div class="grid">
      ${r[n]?r[n].status=="empty"?s`<${_e}/>`:s`
            <${ve} title=${"Morning"} slots=${o}/>
            <${ve} title=${"Afternoon"} slots=${i}/>
            <${ve} title=${"Evening"} slots=${p}/>
          `:s`<li class="list-group-item"><${T}/></li>`}
    </div>
  `};var ja=()=>{let{calendarRange:e,timeSlotMode:t}=u("calendarRange","timeSlotMode");return s`
    <${e=="fiveDays"?ba:ya}/>
    <${t=="singleColumn"?ka:$a}/>
  `};var Ca=e=>{let{appointment:t,dispatch:a}=u("appointment"),r=n=>{let{value:o}=n.target;var{customer:i}=t;i[e.property]=o,a("appointment/set",{customer:i})};return s`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${r}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var x=e=>{let{customerForm:t}=u("customerForm");if(!!t[e.property]){var a=t[e.property];return s`
    <div class="${e.class||"col-sm"} needs-validation p-1 mb-2 w-100">
      ${e.label?s`
          <label class="form-label text-truncate">
            ${a.required?s`<span class="text-danger">*</span> `:""}
            ${m(e.label)}
          </label>
        `:null}
      <${e.inputClass||Ca} property=${e.property}
        invalid=${a.errors&&a.errors.length?"was-validated":""}/>
      ${a.errors&&a.errors.length?a.errors.map(r=>s`<div class="invalid-feedback">${m(r)}</div>`):""}
    </div>
  `}};var wa=e=>{let{appointment:t,showAppointmentComment:a,dispatch:r}=u("appointment","showAppointmentComment");if(!a)return s``;let n=o=>{let{value:i}=o.target;t.comment=i,r("appointment/set",t)};return s`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">${m("Comment")}</label>
          <textarea class="form-control" value=${t.comment||""} onInput=${n}></textarea>
        </div>
      </div>
    `};var V=e=>{let t=a=>{let{value:r}=a.target;e.onInput(r)};return s`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?s`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:a,label:r})=>s`<option value="${a}">${r}</option>`)}
    </select>
  `};var Cr=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),Da=e=>{let{appointment:t,dispatch:a}=u("appointment"),r=(c,d)=>{var{customer:l}=t;d==""?l[e.property]=null:(l[e.property]=l[e.property]||new Date("2000-01-01"),l[e.property][`set${c}`](d)),a("appointment/set",{customer:l})},n=t.customer[e.property];var o=[];for(let c=1900;c<=new Date().getFullYear();c++)o.push({value:c,label:c});var i=[];for(let c=1;c<=12;c++)i.push({value:c-1,label:c<10?`0${c}`:c});var p=[];for(let c=1;c<=Cr(n);c++)p.push({value:c,label:c<10?`0${c}`:c});return s`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${V} invalid=${e.invalid} onInput=${c=>r("FullYear",c)}
        value=${n?n.getFullYear():""} emptySelection="----" options=${o}
         disabled=${!!t.customer["@id"]}/>
      <${V} invalid=${e.invalid} onInput=${c=>r("Month",c)}
        value=${n?n.getMonth():""} emptySelection="--" options=${i}
         disabled=${!!t.customer["@id"]}/>
      <${V} invalid=${e.invalid} onInput=${c=>r("Date",c)}
        value=${n?n.getDate():""} emptySelection="--" options=${p}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `};var Ma=e=>{let{appointment:t,dispatch:a}=u("appointment");return s`
    <${V} onInput=${n=>{var{customer:o}=t;o[e.property]=n,a("appointment/set",{customer:o})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${m("Not specified")}"
        options=${[{value:"m",label:m("Male")},{value:"f",label:m("Female")}]}/>
  `};var Pa=e=>{let{appointment:t,privacyPolicy:a,dispatch:r}=u("appointment","privacyPolicy"),n=()=>{var{customer:i}=t;i[e.property]=!i[e.property]||null,r("appointment/set",{customer:i})},o=()=>r("privacyPolicyModalState/set",!1);return s`
    <${F} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${a?s([a.content]):""}"
      approveButtonLabel="Close"
      onApprove=${o}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${n}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${m("I have accepted the privacy policy")}
      </label>
    </div>
  `};var Aa=e=>{let{appointment:t,dispatch:a}=u("appointment"),r=()=>{var{customer:n}=t;n[e.property]=!n[e.property]||null,a("appointment/set",{customer:n})};return s`
    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${r}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${m("I agree to the use of my medical records according to privacy policy")}
      </label>
    </div>
  `};var Ta=e=>{let{customerForm:t,customerFormGlobalErrors:a,medicalConsent:r,dispatch:n}=u("customerForm","customerFormGlobalErrors","language","medicalConsent"),o=()=>{n("customerForm/validateAndNext")};return s`
    <div class="card p-2">
      ${a&&a.length?s`
          <div class="row mx-2 text-danger">
            ${a.map(i=>s`<p>${i}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${L.shouldSwitchNameOrder()?s`
            <${x} property="last_name" label="Last name"/>
            <${x} property="first_name" label="First name"/>
          `:s`
            <${x} property="first_name" label="First name"/>
            <${x} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${x} class="col-lg-5" property="birth" label="Birth" inputClass=${Da}/>
        <${x} property="gender" label="Gender" inputClass=${Ma}/>
        <${x} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${x} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${x} property="postal_code" label="Postal code"/><${x} property="city" label="City"/>
      </div>
      <div class="row mx-2">
        <${x} property="street_address" label="Street address"/>
      </div>
      <div class="row mx-2">
        <${x} property="mobile" label="Mobile"/><${x} property="email" label="Email"/>
      </div>
      <${wa}/>
      <div class="row mx-2">
        <${x} property="acceptPrivacyPolicy" inputClass=${Pa}/>
      </div>
      ${r=="explicit"?s`
          <div class="row mx-2">
            <${x} property="acceptMedicalRecordsUse" inputClass=${Aa}/>
          </div>
        `:""}
      <button class="mx-2 btn btn-primary" onClick=${o}>${m("Next")}</button>
    </div>
  `};var Re=e=>s`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${U} step="process" wrappedComponent=${fa}/>
        <${U} step="calendar" wrappedComponent=${ha}/>
        <${U} step="appointment" wrappedComponent=${ja}/>
        <${U} step="customer" wrappedComponent=${Ta}/>
        <${U} step="summary" wrappedComponent=${he}/>
      </div>
    </div>
  `;var He=e=>{let{moduleState:t,appointment:a,dispatch:r}=u("moduleState","appointment"),n=()=>r("close");switch(t){case"success":return s`
        <${F} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${m("Your appointment have been recorded.")}
            ${m("The examination will start at %start%, please arrive 5 minutes early.",{start:k.formatTime(a.start)})}
            ${m("If you have any further questions, please contact us through our customer service.")}
          "
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;case"error":return s`
        <${F} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Due to an unexpected error appointment could not be booked, please restart the process"
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;default:return s`
        <${F} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `}};var Ge=({colors:e})=>{if(e=e||{},Object.keys(e).length!=0)return s`
    <style>
      ${e.background?`
          .cvio-ab-bg-body {
            background-color: ${e.background} !important;
          }
        `:""}
      ${e.contentBackground?`
          .cvio-ab-list-group-item, .cvio-ab-card, .cvio-ab-modal-content {
            background-color: ${e.contentBackground} !important;
          }
        `:""}
      ${e.text?`
          .cvio-ab-fixed-top, .cvio-ab-list-group-item {
            color: ${e.text} !important;
          }
        `:""}
      ${e.primary?`
          .cvio-ab-bg-primary, .cvio-ab-btn-primary {
            background-color: ${e.primary} !important;
          }
          .cvio-ab-text-primary, .cvio-ab-link-primary {
            color: ${e.primary} !important;
          }
          .cvio-ab-form-check-input:checked {
            background-color: ${e.primary} !important;
            border-color: ${e.primary} !important;
          }
        `:""}
      ${e.danger?`
          .cvio-ab-bg-danger, .cvio-ab-btn-danger {
            background-color: ${e.danger} !important;
          }
          .cvio-ab-text-danger, .cvio-ab-link-danger, .cvio-ab-invalid-feedback {
            color: ${e.danger} !important;
          }
          .cvio-ab-form-control.cvio-ab-is-invalid {
            border-color: ${e.danger} !important;
          }
        `:""}
      ${e.success?`
          .cvio-ab-bg-success, .cvio-ab-btn-success {
            background-color: ${e.success} !important;
          }
          .cvio-ab-text-success, .cvio-ab-link-success {
            color: ${e.success} !important;
          }
        `:""}
    </style>
  `};var Fa=e=>{let{headerTitle:t,currentStep:a}=u("headerTitle","currentStep");switch(a){case"process":var r=m("Select eye examination type");break;case"calendar":var r=m("Select a vision expert");break;case"appointment":var r=m("Select your desired appointment time");break;case"customer":var r=m("Enter customer details");break;default:var r=m("Appointment details verification");break}return s`
    <div class="booker-header bg-primary bg-gradient text-light p-2">
      <div class="container col-sm-10 col-md-8">
        <div class="row">
          <div class="col-8 px-1">
            <h3 class="text-truncate">
              ${t||m("Appointment booking")}
            </h3>
            <h5 class="text-truncate">
              ${r}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${ze}/>
              <${Ie}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    `};var wr=e=>s`
    <${Ge} colors=${e.colors}/>
    <div class="booker-widget fixed-top">
      <${we.Provider} value=${e.store}>
        <${He}/>
        <${Fa}/>
        <div class="bg-body content">
          <${Re}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `,be=class{constructor(t){var a=pa();this.store=a,t.medicalConsent||(t.medicalConsent="explicit"),this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode).then(()=>Promise.all([this.loadEyeExaminationProcesses(t),this.loadCalendars()])).then(([r,n])=>{this.store.dispatch("eyeExaminationProcesses/set",Ne(r,n,t.calendarRoleCheckMode)),this.store.dispatch("calendars/set",n),a.dispatch("moduleState/set","idle"),this.store.dispatch("bookerInit")}),t.calendarStepShouldBeHidden&&a.dispatch("calendarStepShouldBeHidden/set",t.calendarStepShouldBeHidden),t.calendarRoleCheckMode&&a.dispatch("calendarRoleCheckMode/set",t.calendarRoleCheckMode),t.showFirstAvailableUserItem!==void 0&&a.dispatch("showFirstAvailableUserItem/set",t.showFirstAvailableUserItem),t.showExaminerName!==void 0&&a.dispatch("showExaminerName/set",t.showExaminerName),t.firstEligibleTime&&a.dispatch("firstEligibleTime/set",t.firstEligibleTime),t.language&&a.dispatch("language/set",t.language),t.translationOverrides&&a.dispatch("translationOverrides/set",t.translationOverrides),t.headerTitle&&a.dispatch("headerTitle/set",t.headerTitle),t.country&&a.dispatch("country/set",t.country),t.priceComment&&a.dispatch("priceComment/set",t.priceComment),t.showPrice!==void 0&&a.dispatch("showPrice/set",t.showPrice),t.privacyPolicyLink&&a.dispatch("privacyPolicyLink/set",t.privacyPolicyLink),t.showAppointmentComment&&a.dispatch("showAppointmentComment/set",t.showAppointmentComment),t.autoselectNextFreeSlot&&a.dispatch("autoselectNextFreeSlot/set",t.autoselectNextFreeSlot),t.constantAppointmentCommentText&&a.dispatch("constantAppointmentCommentText/set",t.constantAppointmentCommentText),t.locationName!==void 0&&a.dispatch("locationName/set",t.locationName),t.locationAddress!==void 0&&a.dispatch("locationAddress/set",t.locationAddress),t.showLocation!==void 0&&a.dispatch("showLocation/set",t.showLocation),t.confirmationStatus!==void 0&&a.dispatch("appointment/set",{confirmation_status:t.confirmationStatus}),t.timeSlotMode&&a.dispatch("timeSelectionUi/timeSlotMode/set",t.timeSlotMode),t.calendarRange&&a.dispatch("timeSelectionUi/calendarRange/set",t.calendarRange),a.dispatch("medicalConsent/set",t.medicalConsent),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:a,medicalConsent:r}){var n={};a=["first_name","last_name","acceptPrivacyPolicy"].concat(r!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(a||["email"]),["first_name","last_name","acceptPrivacyPolicy"].concat(r!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(t||["mobile","email"]).forEach(o=>{n[o]={required:a.indexOf(o)!=-1}}),this.store.dispatch("customerForm/set",{customerForm:n})}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){var a=await D.get(this.store,`stores?code=${t}`);this.store.dispatch("store/set",a[0])}async loadEyeExaminationProcesses({eyeExaminationProcessId:t}){if(t)return[await D.get(this.store,`eye_examination_processes/${t}`)].filter(r=>r);var a=this.store.get().store;return await D.get(this.store,`eye_examination_processes?hasLength&chain=${a.chain["@id"]}`)}async loadCalendars(){return await D.get(this.store,`appointment_calendars?groups[]=userProfilePictureRead&store=${this.store.get().store["@id"]}`)}createElementAndRender({parentElement:t,colors:a}){var r=document.createElement("div");(t||document.body).appendChild(r),Se(s`<${wr} store=${this.store} colors=${a}/>`,r),this.store.on("close",()=>r.remove())}getStore(){return this.store}},Dr=be;window.ClearvisioAppointmentBooker=be;export{Dr as default};
