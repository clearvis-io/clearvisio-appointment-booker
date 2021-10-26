var X,h,Le,K,He,Ge,Re,ee={},Ue=[],gr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function F(e,t){for(var r in t)e[r]=t[r];return e}function Ve(e){var t=e.parentNode;t&&t.removeChild(e)}function z(e,t,r){var a,n,o,i={};for(o in t)o=="key"?a=t[o]:o=="ref"?n=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?X.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return te(e,i,a,n,null)}function te(e,t,r,a,n){var o={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n==null?++Le:n};return n==null&&h.vnode!=null&&h.vnode(o),o}function N(e){return e.children}function D(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?H(e):null}function Ke(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ke(e)}}function me(e){(!e.__d&&(e.__d=!0)&&K.push(e)&&!re.__r++||Ge!==h.debounceRendering)&&((Ge=h.debounceRendering)||He)(re)}function re(){for(var e;re.__r=K.length;)e=K.sort(function(t,r){return t.__v.__b-r.__v.__b}),K=[],e.some(function(t){var r,a,n,o,i,p;t.__d&&(i=(o=(r=t).__v).__e,(p=r.__P)&&(a=[],(n=F({},o)).__v=o.__v+1,_e(p,o,n,r.__n,p.ownerSVGElement!==void 0,o.__h!=null?[i]:null,a,i==null?H(o):i,o.__h),qe(a,o),o.__e!=i&&Ke(o)))})}function Qe(e,t,r,a,n,o,i,p,c,u){var s,v,d,m,b,P,g,y=a&&a.__k||Ue,C=y.length;for(r.__k=[],s=0;s<t.length;s++)if((m=r.__k[s]=(m=t[s])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?te(null,m,null,null,m):Array.isArray(m)?te(N,{children:m},null,null,null):m.__b>0?te(m.type,m.props,m.key,null,m.__v):m)!=null){if(m.__=r,m.__b=r.__b+1,(d=y[s])===null||d&&m.key==d.key&&m.type===d.type)y[s]=void 0;else for(v=0;v<C;v++){if((d=y[v])&&m.key==d.key&&m.type===d.type){y[v]=void 0;break}d=null}_e(e,m,d=d||ee,n,o,i,p,c,u),b=m.__e,(v=m.ref)&&d.ref!=v&&(g||(g=[]),d.ref&&g.push(d.ref,null,m),g.push(v,m.__c||b,m)),b!=null?(P==null&&(P=b),typeof m.type=="function"&&m.__k===d.__k?m.__d=c=We(m,c,e):c=Je(e,m,d,y,b,c),typeof r.type=="function"&&(r.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=H(d))}for(r.__e=P,s=C;s--;)y[s]!=null&&(typeof r.type=="function"&&y[s].__e!=null&&y[s].__e==r.__d&&(r.__d=H(a,s+1)),Ze(y[s],y[s]));if(g)for(s=0;s<g.length;s++)Ye(g[s],g[++s],g[++s])}function We(e,t,r){for(var a,n=e.__k,o=0;n&&o<n.length;o++)(a=n[o])&&(a.__=e,t=typeof a.type=="function"?We(a,t,r):Je(r,a,a,n,a.__e,t));return t}function q(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){q(r,t)}):t.push(e)),t}function Je(e,t,r,a,n,o){var i,p,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(r==null||n!=o||n.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(n),i=null;else{for(p=o,c=0;(p=p.nextSibling)&&c<a.length;c+=2)if(p==n)break e;e.insertBefore(n,o),i=o}return i!==void 0?i:n.nextSibling}function yr(e,t,r,a,n){var o;for(o in r)o==="children"||o==="key"||o in t||ae(e,o,null,r[o],a);for(o in t)n&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||ae(e,o,t[o],r[o],a)}function Xe(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||gr.test(t)?r:r+"px"}function ae(e,t,r,a,n){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||Xe(e.style,t,"");if(r)for(t in r)a&&r[t]===a[t]||Xe(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?a||e.addEventListener(t,o?tt:et,o):e.removeEventListener(t,o?tt:et,o);else if(t!=="dangerouslySetInnerHTML"){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(i){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function et(e){this.l[e.type+!1](h.event?h.event(e):e)}function tt(e){this.l[e.type+!0](h.event?h.event(e):e)}function _e(e,t,r,a,n,o,i,p,c){var u,s,v,d,m,b,P,g,y,C,Z,j=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(c=r.__h,p=t.__e=r.__e,t.__h=null,o=[p]),(u=h.__b)&&u(t);try{e:if(typeof j=="function"){if(g=t.props,y=(u=j.contextType)&&a[u.__c],C=u?y?y.props.value:u.__:a,r.__c?P=(s=t.__c=r.__c).__=s.__E:("prototype"in j&&j.prototype.render?t.__c=s=new j(g,C):(t.__c=s=new D(g,C),s.constructor=j,s.render=kr),y&&y.sub(s),s.props=g,s.state||(s.state={}),s.context=C,s.__n=a,v=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),j.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=F({},s.__s)),F(s.__s,j.getDerivedStateFromProps(g,s.__s))),d=s.props,m=s.state,v)j.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(j.getDerivedStateFromProps==null&&g!==d&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,C),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,C)===!1||t.__v===r.__v){s.props=g,s.state=s.__s,t.__v!==r.__v&&(s.__d=!1),s.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(Q){Q&&(Q.__=t)}),s.__h.length&&i.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,C),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(d,m,b)})}s.context=C,s.props=g,s.state=s.__s,(u=h.__r)&&u(t),s.__d=!1,s.__v=t,s.__P=e,u=s.render(s.props,s.state,s.context),s.state=s.__s,s.getChildContext!=null&&(a=F(F({},a),s.getChildContext())),v||s.getSnapshotBeforeUpdate==null||(b=s.getSnapshotBeforeUpdate(d,m)),Z=u!=null&&u.type===N&&u.key==null?u.props.children:u,Qe(e,Array.isArray(Z)?Z:[Z],t,r,a,n,o,i,p,c),s.base=t.__e,t.__h=null,s.__h.length&&i.push(s),P&&(s.__E=s.__=null),s.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Sr(r.__e,t,r,a,n,o,i,c);(u=h.diffed)&&u(t)}catch(Q){t.__v=null,(c||o!=null)&&(t.__e=p,t.__h=!!c,o[o.indexOf(p)]=null),h.__e(Q,t,r)}}function qe(e,t){h.__c&&h.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){h.__e(a,r.__v)}})}function Sr(e,t,r,a,n,o,i,p){var c,u,s,v=r.props,d=t.props,m=t.type,b=0;if(m==="svg"&&(n=!0),o!=null){for(;b<o.length;b++)if((c=o[b])&&(c===e||(m?c.localName==m:c.nodeType==3))){e=c,o[b]=null;break}}if(e==null){if(m===null)return document.createTextNode(d);e=n?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),o=null,p=!1}if(m===null)v===d||p&&e.data===d||(e.data=d);else{if(o=o&&X.call(e.childNodes),u=(v=r.props||ee).dangerouslySetInnerHTML,s=d.dangerouslySetInnerHTML,!p){if(o!=null)for(v={},b=0;b<e.attributes.length;b++)v[e.attributes[b].name]=e.attributes[b].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(yr(e,d,v,n,p),s)t.__k=[];else if(b=t.props.children,Qe(e,Array.isArray(b)?b:[b],t,r,a,n&&m!=="foreignObject",o,i,o?o[0]:r.__k&&H(r,0),p),o!=null)for(b=o.length;b--;)o[b]!=null&&Ve(o[b]);p||("value"in d&&(b=d.value)!==void 0&&(b!==e.value||m==="progress"&&!b)&&ae(e,"value",b,v.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==e.checked&&ae(e,"checked",b,v.checked,!1))}return e}function Ye(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(a){h.__e(a,r)}}function Ze(e,t,r){var a,n;if(h.unmount&&h.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||Ye(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){h.__e(o,t)}a.base=a.__P=null}if(a=e.__k)for(n=0;n<a.length;n++)a[n]&&Ze(a[n],t,typeof e.type!="function");r||e.__e==null||Ve(e.__e),e.__e=e.__d=void 0}function kr(e,t,r){return this.constructor(e,r)}function fe(e,t,r){var a,n,o;h.__&&h.__(e,t),n=(a=typeof r=="function")?null:r&&r.__k||t.__k,o=[],_e(t,e=(!a&&r||t).__k=z(N,null,[e]),n||ee,ee,t.ownerSVGElement!==void 0,!a&&r?[r]:n?null:t.firstChild?X.call(t.childNodes):null,o,!a&&r?r:n?n.__e:t.firstChild,a),qe(o,e)}function rt(e,t){var r={__c:t="__cC"+Re++,__:e,Consumer:function(a,n){return a.children(n)},Provider:function(a){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.some(me)},this.sub=function(i){n.push(i);var p=i.componentWillUnmount;i.componentWillUnmount=function(){n.splice(n.indexOf(i),1),p&&p.call(i)}}),a.children}};return r.Provider.__=r.Consumer.contextType=r}X=Ue.slice,h={__e:function(e,t){for(var r,a,n;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),n=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),n=r.__d),n)return r.__E=r}catch(o){e=o}throw e}},Le=0,D.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},r),this.props)),e&&F(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),me(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),me(this))},D.prototype.render=N,K=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,re.__r=0,Re=0;var G,S,at,he=0,ve=[],ot=h.__b,nt=h.__r,it=h.diffed,st=h.__c,lt=h.unmount;function W(e,t){h.__h&&h.__h(S,e,he||t),he=0;var r=S.__H||(S.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function I(e){return he=1,xr(ct,e)}function xr(e,t,r){var a=W(G++,2);return a.t=e,a.__c||(a.__=[r?r(t):ct(void 0,t),function(n){var o=a.t(a.__[0],n);a.__[0]!==o&&(a.__=[o,a.__[1]],a.__c.setState({}))}],a.__c=S),a.__}function pt(e,t){var r=W(G++,3);!h.__s&&be(r.__H,t)&&(r.__=e,r.__H=t,S.__H.__h.push(r))}function ut(e,t){var r=W(G++,4);!h.__s&&be(r.__H,t)&&(r.__=e,r.__H=t,S.__h.push(r))}function dt(e,t){var r=W(G++,7);return be(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function mt(e){var t=S.context[e.__c],r=W(G++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(S)),t.props.value):e.__}function $r(){ve.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(oe),e.__H.__h.forEach(ge),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}),ve=[]}h.__b=function(e){S=null,ot&&ot(e)},h.__r=function(e){nt&&nt(e),G=0;var t=(S=e.__c).__H;t&&(t.__h.forEach(oe),t.__h.forEach(ge),t.__h=[])},h.diffed=function(e){it&&it(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ve.push(t)!==1&&at===h.requestAnimationFrame||((at=h.requestAnimationFrame)||function(r){var a,n=function(){clearTimeout(o),_t&&cancelAnimationFrame(a),setTimeout(r)},o=setTimeout(n,100);_t&&(a=requestAnimationFrame(n))})($r)),S=null},h.__c=function(e,t){t.some(function(r){try{r.__h.forEach(oe),r.__h=r.__h.filter(function(a){return!a.__||ge(a)})}catch(a){t.some(function(n){n.__h&&(n.__h=[])}),t=[],h.__e(a,r.__v)}}),st&&st(e,t)},h.unmount=function(e){lt&&lt(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(oe)}catch(r){h.__e(r,t.__v)}};var _t=typeof requestAnimationFrame=="function";function oe(e){var t=S;typeof e.__c=="function"&&e.__c(),S=t}function ge(e){var t=S;e.__c=e.__(),S=t}function be(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function ct(e,t){return typeof t=="function"?t(e):t}function wr(e,t){for(var r in t)e[r]=t[r];return e}function ft(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function ht(e){this.props=e}(ht.prototype=new D).isPureReactComponent=!0,ht.prototype.shouldComponentUpdate=function(e,t){return ft(this.props,e)||ft(this.state,t)};var vt=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),vt&&vt(e)};var Cr=h.__e;h.__e=function(e,t,r){if(e.then){for(var a,n=t;n=n.__;)if((a=n.__c)&&a.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),a.__c(e,t)}Cr(e,t,r)};var bt=h.unmount;function ye(){this.__u=0,this.t=null,this.__b=null}function gt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ne(){this.u=null,this.o=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),bt&&bt(e)},(ye.prototype=new D).__c=function(e,t){var r=t.__c,a=this;a.t==null&&(a.t=[]),a.t.push(r);var n=gt(a.__v),o=!1,i=function(){o||(o=!0,r.__R=null,n?n(p):p())};r.__R=i;var p=function(){if(!--a.__u){if(a.state.__e){var u=a.state.__e;a.__v.__k[0]=function v(d,m,b){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(P){return v(P,m,b)}),d.__c&&d.__c.__P===m&&(d.__e&&b.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=b)),d}(u,u.__c.__P,u.__c.__O)}var s;for(a.setState({__e:a.__b=null});s=a.t.pop();)s.forceUpdate()}},c=t.__h===!0;a.__u++||c||a.setState({__e:a.__b=a.__v.__k[0]}),e.then(i,i)},ye.prototype.componentWillUnmount=function(){this.t=[]},ye.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=function o(i,p,c){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),i.__c.__H=null),(i=wr({},i)).__c!=null&&(i.__c.__P===c&&(i.__c.__P=p),i.__c=null),i.__k=i.__k&&i.__k.map(function(u){return o(u,p,c)})),i}(this.__b,r,a.__O=a.__P)}this.__b=null}var n=t.__e&&z(N,null,e.fallback);return n&&(n.__h=null),[z(N,null,t.__e?null:e.children),n]};var yt=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(ne.prototype=new D).__e=function(e){var t=this,r=gt(t.__v),a=t.o.get(e);return a[0]++,function(n){var o=function(){t.props.revealOrder?(a.push(n),yt(t,e,a)):n()};r?r(o):o()}},ne.prototype.render=function(e){this.u=null,this.o=new Map;var t=q(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},ne.prototype.componentDidUpdate=ne.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){yt(e,r,t)})};var jr=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Dr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Mr=typeof document!="undefined",Pr=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};D.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(D.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var St=h.event;function Fr(){}function Tr(){return this.cancelBubble}function Er(){return this.defaultPrevented}h.event=function(e){return St&&(e=St(e)),e.persist=Fr,e.isPropagationStopped=Tr,e.isDefaultPrevented=Er,e.nativeEvent=e};var kt={configurable:!0,get:function(){return this.class}},xt=h.vnode;h.vnode=function(e){var t=e.type,r=e.props,a=r;if(typeof t=="string"){var n=t.indexOf("-")===-1;for(var o in a={},r){var i=r[o];Mr&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in r&&i==null||(o==="defaultValue"&&"value"in r&&r.value==null?o="value":o==="download"&&i===!0?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Pr(r.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():n&&Dr.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),a[o]=i)}t=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=q(r.children).forEach(function(p){p.props.selected=a.value.indexOf(p.props.value)!=-1})),t=="select"&&a.defaultValue!=null&&(a.value=q(r.children).forEach(function(p){p.props.selected=a.multiple?a.defaultValue.indexOf(p.props.value)!=-1:a.defaultValue==p.props.value})),e.props=a}t&&r.class!=r.className&&(kt.enumerable="className"in r,r.className!=null&&(a.class=r.className),Object.defineProperty(a,"className",kt)),e.$$typeof=jr,xt&&xt(e)};var $t=h.__r;h.__r=function(e){$t&&$t(e)};var Se=rt(),Ar=typeof window!="undefined"?ut:pt,Or=e=>(...t)=>{let r=mt(e),a=I({});return Ar(()=>r.on("@changed",(n,o)=>{t.some(p=>p in o)&&a[1]({})}),[]),dt(()=>{let n=r.get(),o={};return t.forEach(i=>{o[i]=n[i]}),o.dispatch=r.dispatch,o},[a[0]])},f=Or(Se);var ke=class extends Error{constructor(t){super("Validation error");this.validations=t}getValidations(){return this.validations}},J=ke;var wt=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),zr={get:async(e,t)=>{let{path:r,headers:a}=e.get().api;try{let n=await(await fetch(`${r}/${t}`,{headers:wt(a)})).json();if(!n["hydra:member"])throw new Error("Invalid response");return n["hydra:member"]}catch(n){throw e.dispatch("moduleState/set","error"),n}},post:async({api:e,dispatch:t},r,a)=>{let{path:n,headers:o}=e,i={method:"POST",headers:wt(o),body:JSON.stringify(a)};try{var p=await(await fetch(`${n}/${r}`,i)).json()}catch(c){throw t("moduleState/set","error"),c}if(p["@id"])return p;throw p.violations?new J(p.violations):(t("moduleState/set","error"),new Error("Invalid result"))}},w=zr;var Ct=function(e,t,r,a){var n;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],p=t[o]?(t[0]|=i?1:2,r[t[o++]]):t[++o];i===3?a[0]=p:i===4?a[1]=Object.assign(a[1]||{},p):i===5?(a[1]=a[1]||{})[t[++o]]=p:i===6?a[1][t[++o]]+=p+"":i?(n=e.apply(p,Ct(e,p,r,["",null])),a.push(n),p[0]?t[0]|=2:(t[o-2]=0,t[o]=n)):a.push(p)}return a},jt=new Map;function Dt(e){var t=jt.get(this);return t||(t=new Map,jt.set(this,t)),(t=Ct(this,t.get(e)||(t.set(e,t=function(r){for(var a,n,o=1,i="",p="",c=[0],u=function(d){o===1&&(d||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,i):o===3&&(d||i)?(c.push(3,d,i),o=2):o===2&&i==="..."&&d?c.push(4,d,0):o===2&&i&&!d?c.push(5,0,!0,i):o>=5&&((i||!d&&o===5)&&(c.push(o,0,i,n),o=6),d&&(c.push(o,d,0,n),o=6)),i=""},s=0;s<r.length;s++){s&&(o===1&&u(),u(s));for(var v=0;v<r[s].length;v++)a=r[s][v],o===1?a==="<"?(u(),c=[c],o=3):i+=a:o===4?i==="--"&&a===">"?(o=1,i=""):i=a+i[0]:p?a===p?p="":i+=a:a==='"'||a==="'"?p=a:a===">"?(u(),o=1):o&&(a==="="?(o=5,n=i,i=""):a==="/"&&(o<5||r[s][v+1]===">")?(u(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):a===" "||a==="	"||a===`
`||a==="\r"?(u(),o=2):i+=a),o===3&&i==="!--"&&(o=4,c=c[0])}return u(),c}(e)),t),arguments,[])).length>1?t:t[0]}var Nr=(e,t,...r)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(a=>a.trim()).map(a=>a.indexOf("cvio-ab-")!==0?`cvio-ab-${a}`:a).join(" ")),z(e,t,...r)),l=Dt.bind(Nr);var xe=e=>{let{dispatch:t}=f();return l`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `};var $e=e=>{let{appointment:t}=f("appointment");return l`
    <span class="fw-bold">
      ${t.start?$.formatDateTime(t.start):null}
    </span>
  `};var we={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja ezt az id\u0151pontot?","All inputed data will be lost.":"Mindent megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pont foglal\xE1s folytat\xE1sa","Cancel appointment":"Id\u0151pont megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues was available for the selected process":"Egy munkat\xE1rsunk sem volt el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"A te adataid",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m","Your appointment details":"Foglal\xE1s adatai",Price:"\xC1r","Book appointment":"Id\u0151pont foglal\xE1sa","%customer%'s examination":"%customer% vizsg\xE1lata","We have recorded you appointment.":"Id\u0151pontj\xE1t r\xF6gz\xEDtett\xFCk.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsg\xE1lat kezdete: %start%, k\xE9rj\xFCk \xE9rkezzen 5 perccel kor\xE1bban.","If you have any further questions, please contuct us through our customer service.":"Ha tov\xE1bbi k\xE9rd\xE9se van, keresse fel \xFCgyf\xE9lszolg\xE1latunkat.","Appointment booked!":"Id\u0151pont lefoglalva!","with: %examiner%":"vele: %examiner%","It takes up to %length% minutes":"%length% percet vesz ig\xE9nybe","I have accepeted the privacy policy":l`Elfogadom az <${xe}>adatkezelési szabályzatban<//> foglaltakat`,"Privacy policy":"Adatkezel\xE9si t\xE1j\xE9koztat\xF3",Close:"Bez\xE1r\xE1s","Your appointment starts at startTime":l`Az időpontja <${$e}//> időpontban kezdődik`,"Appointment booker":"Id\u0151pontfoglal\xF3","Select eye examination type":"V\xE1laszd ki a l\xE1t\xE1svizsg\xE1lat t\xEDpus\xE1t","Select a vision expert":"V\xE1lassz l\xE1t\xE1sszak\xE9rt\u0151t","Select your desired appointment time":"V\xE1lassz egy megfelel\u0151 id\u0151pontot","Add you contact details":"Add meg el\xE9rhet\u0151s\xE9geidet"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepeted the privacy policy":l`I have accepeted the <${xe}>privacy policy<//>`,"Your appointment starts at startTime":l`Your appointment starts at <${$e}//>`}},_=(e,t={},r)=>{r=r||f("language").language,e=(we[r]||we[r.substring(0,2)]||we.en)[e]||e;for(let n in t)e=e.replace(new RegExp("%"+n+"%","g"),t[n]);return e};var Mt=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function Y({appointment:e,calendars:t}){var r=e?e.eye_examination_process:null;return t.filter(function(a){if(!r)return!0;for(let n=0;n<Mt.length;n++){let o=Mt[n];if(!(!a.user||a.user.roles.indexOf(o.name)==-1)&&(r.highestRequiredRole==o.name||o.includes.indexOf(r.highestRequiredRole)!=-1))return!0}return!1})}function T(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var Ce=5,Ir=e=>{var t=[new Date(e)];for(let r=0;r<Ce-1;r++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(r){for(let a=0;a<Ce;a++)if(T(this[a],r))return!0},t},ie=[];function je(e){if(ie.length)return ie;for(var t=e||new Date,r=0;r<=100;r++)ie.push(Ir(t)),t=new Date(t),t.setDate(t.getDate()+Ce);return ie}function De(e,t){return T(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var Me={hu:"%Y. %M. %D."},Pt=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),Ft=e=>{let{language:t}=f("language");var r=Me[t]||Me[t.substring(0,2)]||Me.hu;e=new Date(e);var a=e.getMonth()+1;return r.replace("%Y",e.getFullYear()).replace("%M",`${a<10?"0":""}${a}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},Br=e=>Ft(e)+" "+Pt(e),$={formatTime:Pt,formatDate:Ft,formatDateTime:Br};var Tt=["hu"],Et=e=>(e=e||f("language").language,Tt.indexOf(e)!=-1||Tt.indexOf(e.substring(0,2))!=-1),Lr=({first_name:e,last_name:t},r)=>Et(r)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),B={format:Lr,shouldSwitchNameOrder:Et};var L=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93","+..-..-...-...."],["\xC5land Islands","ax","358",""],["Albania (Shqip\xEBri)","al","355","+...(...)...-..."],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (\xD6sterreich)","at","43","+..(...)...-...."],["Azerbaijan (Az\u0259rbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973","+...-....-...."],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375","+...(..)...-..-.."],["Belgium (Belgi\xEB)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (B\xE9nin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (R\xE9publique centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (\u4E2D\u56FD)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["C\xF4te d\u2019Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Cura\xE7ao","cw","599","+...-...-....",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357","+...-..-...-..."],["Czech Republic (\u010Cesk\xE1 republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (Rep\xFAblica Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (F\xF8royar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane fran\xE7aise)","gf","594","+...-.....-...."],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guin\xE9e)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (\u9999\u6E2F)","hk","852","+... .... ...."],["Hungary (Magyarorsz\xE1g)","hu","36","+..(...)...-..."],["Iceland (\xCDsland)","is","354","+... ... ...."],["India (\u092D\u093E\u0930\u0924)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98","+..(...)...-...."],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (\u65E5\u672C)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962","+...-.-....-...."],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965","+...-....-...."],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996","+...(...)...-..."],["Laos (\u0EA5\u0EB2\u0EA7)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (\u6FB3\u9580)","mo","853","+...-....-...."],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (M\xE9xico)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212","+...-..-....-..."],["Mozambique (Mo\xE7ambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95","+..-...-..."],["Namibia (Namibi\xEB)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968","+...-..-...-..."],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970","+...-..-...-...."],["Panama (Panam\xE1)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Per\xFA)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974","+...-....-...."],["R\xE9union (La R\xE9union)","re","262","+...-.....-...."],["Romania (Rom\xE2nia)","ro","40","+..-..-...-...."],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239","+...-..-....."],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966","+...-..-...-...."],["Senegal (S\xE9n\xE9gal)","sn","221","+...-..-...-...."],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82","+..-..-...-...."],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211","+...-..-...-...."],["Spain (Espa\xF1a)","es","34","+.. ... ... ..."],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94","+..-..-...-...."],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963","+...-..-....-..."],["Taiwan (\u53F0\u7063)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (\u0E44\u0E17\u0E22)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216","+...-..-...-..."],["Turkey (T\xFCrkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380","+...(..)...-..-.."],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (O\u02BBzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Citt\xE0 del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Vi\u1EC7t Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],se={},At={},Ot=function(e,t,r){t in se||(se[t]=[]);var a=r||0;se[t][a]=e};for(var E=0;E<L.length;E++){if(k=L[E],L[E]={name:k[0],iso2:k[1],dialCode:k[2],priority:k[4]||0},k[3]&&(L[E].format=k[3]),k[5])for(L[E].hasAreaCodes=!0,le=0;le<k[5].length;le++)zt=k[2]+k[5][le],Ot(k[1],zt);At[L[E].iso2]=E,Ot(k[1],k[2],k[4])}var k,zt,le,Hr={allCountries:L,iso2Lookup:At,allCountryCodes:se},Pe=Hr.allCountries;var Gr={hu_HU:{"06":"+36","36":"+36"}},Fe=(e,t)=>{let r=Gr[e]||{};t=(t||"").trim();var a=t.indexOf("+")==0;if(t=t.replace(/\D/g,""),!t.length)return null;a&&(t=`+${t}`),t.indexOf("00")==0&&(t=`+${t.substring(2)}`);for(let o=0;o<Object.keys(r).length;o++){let i=Object.keys(r)[o];if(t.indexOf(i)==0)return`${r[i]}.${t.substring(i.length)}`}for(let o=0;o<Pe.length;o++){let{dialCode:i}=Pe[o];if(t.indexOf(`+${i}`)==0)return`+${i}.${t.substring(i.length+1)}`}let n=Object.keys(r)[0];return`${n?r[n]:"+36"}.${t}`};function M(e,t,r){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate():null}var Nt=e=>{let t={},r={},a={dispatch(n,o){if(n!=="@dispatch"&&a.dispatch("@dispatch",[n,o,t[n]]),t[n]){let i;t[n].forEach(p=>{let c=t[n].includes(p)&&p(r,o,a);c&&typeof c.then!="function"&&(r={...r,...c},i={...i,...c})}),i&&a.dispatch("@changed",i)}},get:()=>r,on(n,o){return(t[n]||(t[n]=[])).push(o),()=>{t[n]=t[n].filter(i=>i!==o)}}};return e.forEach(n=>{n&&n(a)}),a.dispatch("@init"),a};function It(e){e.on("@init",()=>({eyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:t},r)=>(r.length==1&&(e.dispatch("appointment/set",{eye_examination_process:r[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected")),{eyeExaminationProcesses:r}))}var Te=["process","calendar","appointment","customer","summary"];function Bt(e){var t=(a,n)=>Te.filter(o=>a.indexOf(o)!=-1&&o!=n),r=(a,n)=>Te.filter(o=>a.indexOf(o)!=-1||o==n);e.on("@init",()=>({currentStep:"process",availableSteps:Te,calendarStepShouldBeHidden:!1})),e.on("currentStep/set",({availableSteps:a,currentStep:n},o)=>({currentStep:a.indexOf(o)!=-1?o:n})),e.on("calendarStepShouldBeHidden/set",({availableSteps:a},n)=>({calendarStepShouldBeHidden:n,availableSteps:t(a,"calendar")})),e.on("currentStep/next",({currentStep:a,availableSteps:n})=>{var o=n.indexOf(a);return{currentStep:o<n.length-1?n[o+1]:a}}),e.on("currentStep/previous",({currentStep:a,availableSteps:n})=>{var o=n.indexOf(a);return{currentStep:o>0?n[o-1]:a}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:a,availableSteps:n,currentStep:o})=>{if(a.length==1)return{availableSteps:n=t(n,"process"),currentStep:o=="process"?n[0]:o}}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:a,appointment:n,calendars:o,currentStep:i,calendarStepShouldBeHidden:p})=>{if(!p){var c=Y({appointment:n,calendars:o});return c.length==1?{appointment:Object.assign(n,{calendar:c[0]}),availableSteps:t(a,"calendar"),currentStep:i=="calendar"?"appointment":i}:{availableSteps:r(a,"calendar")}}})}function Lt(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},r)=>({appointment:Object.assign(t,r)}))}function Ht(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},r)=>(t.headers=Object.assign(t.headers,r),{api:t})),e.on("api/setPath",({api:t},r)=>(t.path=r,{api:t}))}function Gt(e){e.on("@init",()=>({language:navigator.language})),e.on("language/set",(t,r)=>({language:r}))}function ce(e,{visible:t}={visible:!1}){return r=>{r.on("@init",()=>({[e]:t})),r.on(`${e}/set`,(a,n)=>({[e]:n}))}}var Rr=["idle","loading","error","success"];function Rt(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},r)=>(r=Rr.indexOf(r)!=-1?r:t,r=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:r}))}function Ut(e){e.on("@init",()=>({store:null})),e.on("store/set",({store:t},r)=>({store:r}))}function Vt(e){e.on("@init",()=>({calendars:[]})),e.on("calendars/set",(t,r)=>({calendars:r.filter(({user:a})=>a)}))}function Kt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),{selectedDate:t}}),e.on("selectedDate/set",(t,r)=>({selectedDate:r}))}var Ur=(e,t)=>{let{appointment:r,selectedCalendar:a,nextFreeSlots:n}=e,o=n[M(r,a,t)];return o&&o.status!="incomplete"},R=async(e,t)=>{let{appointment:r,selectedCalendar:a,firstEligibleTime:n}=e.get();if(!r.eye_examination_process||Vr(e,t)||Ur(e.get(),t))return;let o=await w.get(e,`appointment_next_free_slots?${Kr(e,t)}`);if(o.length==0){var i=new Date(t);return i.setDate(t.getDate()+7),e.dispatch("nextFreeSlots/add",qt(e,t,i)),R(e,i)}let p=new Date(o[o.length-1].start);var c=qt(e,t,p),u=null;for(let s=0;s<o.length;s++){let v=o[s],d=new Date(v.start),m=M(r,a,d);c[m].length&&c[m][c[m].length-1].start==v.start||d<n||(c[m].status="incomplete",c[m].slots||(c[m].slots=[]),c[m].slots.push(v),u&&u!=m&&(c[u].status="complete"),u!=m&&(u=m))}return e.dispatch("nextFreeSlots/add",c),R(e,p)},Vr=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>21,Kr=(e,t)=>{let{appointment:r,selectedCalendar:a}=e.get();var n={process:r.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return a?n.calendar=a["@id"]:n.store=e.get().store["@id"],Object.keys(n).map(o=>`${o}=${n[o]}`).join("&")},qt=(e,t,r)=>{let{appointment:a,selectedCalendar:n}=e.get();var o=new Date(t);o.setHours(0),o.setMinutes(0);for(var i={};o<=r;)i[M(a,n,o)]={status:"empty"},o.setDate(o.getDate()+1);return i};function Wt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:t,firstEligibleTime:t}}),e.on("firstEligibleTime/set",(t,r)=>{var a=new Date;if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),r=="tomorrow")return{firstEligibleDate:a,firstEligibleTime:a};if(r=="tomorrowNoon"){var n=new Date(a);return n.setHours(12),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="plus24Hours"){var n=new Date;return n.setDate(n.getDate()+1),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="dayAfterTomorrow")return a.setDate(a.getDate()+1),e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a}}),e.on("selectedDate/set",async t=>{R(e,t.selectedDate)}),e.on("bookerInit",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("appointment/set",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("nextFreeSlots/add",({nextFreeSlots:t},r)=>({nextFreeSlots:Object.assign(t,r)}))}var qr=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},Wr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Jr=(e,t)=>{e==null||e===""||Wr.test(e.toLowerCase())||t.errors.push("Invalid email address.")};function Jt(e){e.on("@init",()=>({customerForm:{},customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:t,customerFormGlobalErrors:r},a)=>({customerForm:Object.assign(t,a.customerForm||{}),customerFormGlobalErrors:a.customerFormGlobalErrors||r})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:r})=>{let{customer:a}=r;var n=!1;if(Object.keys(t).forEach(o=>{t[o].errors=[],t[o].required&&qr(a[o],t[o]),o=="email"&&Jr(a[o],t[o]),t[o].errors.length&&(n=!0)}),n)return{customerForm:t,customerFormGlobalErrors:[]};e.dispatch("currentStep/next")})}function Yt(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(t,r)=>({headerTitle:r}))}function Zt(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(t,r)=>({booking:r}))}function Qt(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(t,r)=>({country:r}))}function Xt(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(t,r)=>({selectedCalendar:r}))}function er(e){e.on("@init",()=>({privacyPolicy:null})),e.on("bookerInit",async t=>{var r=await w.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let a=0;a<r.length;a++)if(new Date(r[a].valid_until)>new Date)return e.dispatch("privacyPolicy/set",r[a]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(t,r)=>({privacyPolicy:r}))}var Yr=ce("closeConfirmModalState"),Zr=ce("globalModalState",{visible:!0}),Qr=ce("privacyPolicyModalState"),tr=()=>Nt([It,Bt,Lt,Rt,Gt,Ht,Qr,Ut,Vt,Kt,Wt,Jt,er,Yr,Zr,Yt,Zt,Qt,Xt]);var Ee=e=>{let{currentStep:t,availableSteps:r,dispatch:a,booking:n}=f("currentStep","availableSteps","booking");return l`
    <button type="button" onClick=${()=>a("currentStep/previous")}
      class="${t==r[0]||n?"invisible":""} btn btn-outline-light mx-1">
      ←
    </button>
  `};var A=()=>l`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var O=e=>{let t=f(e.modalStateStore),r=t[e.modalStateStore],[a,n]=I(!1),[o,i]=I(!1),[p,c]=I(!1);r&&!a&&(i(!0),setTimeout(()=>{c(!0),n(!0)},0)),!r&&a&&(c(!1),setTimeout(()=>{i(!1),n(!1)},100));let u=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return l`
    <div class="modal text-dark fade ${p?"show":""}" tabindex="-1" style="${o?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?l`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${_(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?l`<p>${_(e.content)}</p>`:l`<${A}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?l`
            <div class="modal-footer">
              ${e.cancelButtonLabel?l`
                <button type="button" class="btn btn-secondary" onClick=${u}>
                  ${_(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?l`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${_(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var Ae=e=>{let{dispatch:t}=f();return l`
    <${O} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${()=>t("close")}/>

    <button type="button" class="float-end btn-close btn-close-white" onClick=${()=>t("closeConfirmModalState/set",!0)}></button>
  `};var rr=({customer:e,customerAddress:t})=>l`
      <div class="container">
        <div class="row fw-bold">
          <span>${_("Your information")}:</span>
        </div>
        <div class="row mt-2">
          ${e.first_name&&e.last_name?l`
            <span><span class="fw-bold">${_("Name")}:</span> ${B.format(e)}</span>
          `:""}
        </div>
        <div class="row">
          ${e.birth?l`
            <span><span class="fw-bold">${_("Date of birth")}:</span> ${$.formatDate(e.birth)}</span>
          `:""}
        </div>
        <div class="row">
          ${e.gender?l`
            <span><span class="fw-bold">${_("Gender")}: </span> ${e.gender=="m"?"F\xE9rfi":"N\u0151"}</span>
          `:""}
        </div>
        <div class="row">
            ${e.ssn?l`
                <span><span class="fw-bold">${_("SSN")}: </span> ${e.ssn}</span>
            `:""}
        </div>
        <div class="row">
          ${t?l`
            <span><span class="fw-bold">${_("Address")}: </span> ${t}</span>
          `:""}
        </div>
        <div class="row">
          ${e.mobile?l`
            <span><span class="fw-bold">${_("Phone number")}: </span> ${e.mobile}</span>
          `:""}
        </div>
        <div class="row">
          ${e.email?l`
            <span><span class="fw-bold">Email: </span> ${e.email}</span>
          `:""}
        </div>
      </div>
  `;var aa=async e=>{try{var t=await Xr(e)}catch(r){if(r instanceof J){ea(e,r);return}throw r}await ta(e,t),await ra(e,t),e.dispatch("moduleState/set","success")},Xr=async e=>await w.post(e,"customers",Object.assign({},e.appointment.customer,{country:e.country,mobile:e.appointment.customer.mobile?Fe(e.store.chain.language,e.appointment.customer.mobile):null})),ea=async(e,t)=>{let{customerForm:r}=e;var a=[];for(let n=0;n<t.getValidations().length;n++){let{propertyPath:o,message:i}=t.getValidations()[n];if(o==""){a.push(i);continue}r[o].errors||(r[o].errors=[]),r[o].errors.push(i)}e.dispatch("customerForm/set",{customerForm:r,customerFormGlobalErrors:a}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},ta=async(e,t)=>{await w.post(e,"customer_consents",{customer:t["@id"],approved_at:new Date,medical_records_allowed:!0,source:"api"})},ra=async(e,t)=>{let{appointment:r,language:a}=e;await w.post(e,"appointment_events",Object.assign({},r,{customer:t["@id"],eye_examination_process:r.eye_examination_process["@id"],calendar:r.calendar["@id"],title:_("%customer%'s examination",{customer:B.format(t,a)},a)}))},ar=e=>{var t=f("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store");let{booking:r,moduleState:a,dispatch:n}=t;return l`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{n("booking/set",!0);try{await aa(t)}catch(i){throw n("moduleState/set","error"),i}}} disabled=${a!="idle"}
        class="btn btn-primary btn-lg">
        ${r&&a=="idle"?l`<${A}/>`:_("Book appointment")}
      </button>
    </div>
  `};var Oe={HUF:0},oa=(e,t)=>{var r=e.price_list.currency,a={style:"currency",currency:r};return Oe[r]!=null&&(a.maximumFractionDigits=Oe[r],a.minimumFractionDigits=Oe[r]),new Intl.NumberFormat(t,a)},pe=({process:e})=>{if(!e)return l``;let t=e.process_services,{store:r,language:a}=f("store","language");var n=null,o=null,i=r.price_list.id;t.forEach(c=>{c.service.packagings.forEach(u=>{u.currentPrices.forEach(s=>{s.price_list.id==i&&((n==null||n>s.value)&&(n=s.value),(o==null||o<s.value)&&(o=s.value))})})});var p=oa(r,a);return n==null||o==null?l``:n==o?l`${p.format(n)}`:l`${p.format(n)} - ${p.format(o)}`};var ue=e=>{let{appointment:t,language:r,currentStep:a,store:n,selectedCalendar:o}=f("appointment","language","currentStep","store","selectedCalendar");if(!!n){var i=["state","postal_code","city","street_address"],p=[];i.forEach(s=>{!t.customer[s]||p.push(t.customer[s])});var c=t.calendar||o,u={dateTimeStart:t.start?$.formatDateTime(t.start):null,dateTimeEnd:t.end?$.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:c?c.user.name:null,customer:t.customer,customerAddress:p.join(", ")};return l`
    <ul class="list-group text-center">
      ${a!="summary"?l`<li class="list-group-item fw-bold">${_("Your appointment details")}</li>`:null}
      <li class="list-group-item">
        <div class="fw-bold">${n.name}</div>
        <div>${n.email}</div>
        <div>${n.phone}</div>
      </li>
      ${u.processName?l`
        <li class="list-group-item">
          <div>
            <span class="fw-bold">${u.processName}</span>
            ${u.examinerName?l`, ${_("with: %examiner%",{examiner:u.examinerName})}`:null}
          </div>
          <div>
            <span class="fw-bold">${_("Price")}:</span> <${pe} process=${u.process}/>
          </div>
        </li>
      `:""}
      ${u.dateTimeStart&&u.dateTimeEnd&&u.processLength?l`
        <li class="list-group-item">
          <div>
            ${_("Your appointment starts at startTime")}
          </div>
          <div class="text-muted">
            ${_("It takes up to %length% minutes",{length:u.processLength})}
          </div>
        </li>
      `:""}
      ${a=="summary"?l`
        <li class="list-group-item">
          <${rr} customer=${u.customer} customerAddress=${u.customerAddress}/>
        </li>
      `:""}
      ${a=="summary"?l`
          <li class="list-group-item">
            <${ar}/>
          </li>
        `:""}
    </ul>
  `}};var U=e=>{let{currentStep:t,availableSteps:r}=f("currentStep","availableSteps"),a=r.indexOf(e.step),n=r.indexOf(t);if(r.indexOf(e.step)==-1)return l``;var o=t!="process"&&t!="summary";return l`
    <div class="carousel-item
      ${n-1==a?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${n+1==a?"carousel-item-next":""}
    ">
      <div class="${o?"content container with summary":"content container-sm p-1 col-sm-6"}">
        <div class="row">
          <div class="${o?"col-8 content":"col"}">
            <div class="p-1">
              <${e.wrappedComponent}/>
            </div>
          </div>
          ${o?l`
            <div class="col-4 summarycard">
              <div class="p-1">
                <${ue} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var or=e=>{let{appointment:t,dispatch:r}=f("appointment");return l`
    <li class="user-select-none list-group-item" onClick=${()=>{r("appointment/set",{eye_examination_process:e.item}),r("currentStep/eyeExaminationProcessSelected"),r("currentStep/next")}}>
      <div class="form-check">
        <div class="container">
          <div class="row">
            <span class="col-6">
              <input class="form-check-input" type="radio"
                checked=${t.eye_examination_process==e.item} />
              <span class="ms-1 fw-bold">
                ${e.item.name}
              </span>
            </span>
            <span class="text-muted col-2">
              ${e.item.length} ${_("@abbrMinute")}
            </span>
            <span class="col-4 text-end"><${pe} process=${e.item}/></span>
          </div>
          <div class="row">
            <div class="col ms-1">${e.item.description||""}</div>
          </div>
        </div>
      </div>
    </li>
  `};var nr=e=>{let{eyeExaminationProcesses:t}=f("eyeExaminationProcesses");return l`
    <ul class="list-group">
      ${t.length?t.map(r=>l`<${or} item=${r} />`):l`<li class="list-group-item"><${A}/></li>`}
    </ul>
  `};var ze=e=>{let{selectedCalendar:t,dispatch:r}=f("selectedCalendar");return l`
    <li class="user-select-none list-group-item" onClick=${()=>{r("selectedCalendar/set",e.item["@id"]?e.item:null),r("currentStep/next")}}>
      <div class="avatar me-2 float-start">
        ${e.item.user.profile_picture?l`<img class="image" src="data:image/*;base64,${e.item.user.profile_picture}"/>`:l`<h2 class="p-1 text-muted text-center image">?</h2>`}
        <input class="form-check-input" type="radio"
          checked=${t==e.item||!e.item["@id"]&&!t} />
      </div>
      <div class="fw-bold">${e.item.user.name}</div>
      ${e.item.user.description||""}
    </li>
  `};var ir=e=>{let{appointment:t,dispatch:r}=f("appointment"),a=Y(f("calendars")),n={user:{name:_("First free"),description:_("For finding the nearest free time slot.")}},o=()=>r("currentStep/previous");return l`
    <ul class="list-group">
      ${t.eye_examination_process?a.length?l`
              <${ze} item=${n} />
              ${a.map(i=>l`<${ze} item=${i} />`)}
            `:l`
              <li class="list-group-item text-center">
                ${_("None of our colleagues was available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${o}">
                  ${_("Select another process")}
                </button>
              </li>
          `:""}
    </ul>
  `};var na=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],sr=({date:e})=>{let{selectedDate:t,dispatch:r}=f("selectedDate"),a=()=>r("selectedDate/set",e);return l`
    <div class="col">
      <div class="card ${T(e,t)?"bg-primary text-light":""}" onClick="${a}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${T(e,t)?"":"text-muted"}">
            ${_(na[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var lr=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:r,currentDateGroup:a,nextDateGroup:n}=t;return l`
    <div class="carousel-item
      ${r==e?"carousel-item-prev":""}
      ${a==e?"active":""}
      ${n==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(o=>l`<${sr} date=${o}/>`)}
      </div>
    </div>
  `};var ia=["January","February","March","April","May","June","July","August","September","October","November","December"],cr=e=>{let{selectedDate:t,firstEligibleDate:r,dispatch:a}=f("selectedDate","firstEligibleDate"),n=je(r),o=()=>a("selectedDate/set",p[4]),i=()=>a("selectedDate/set",u[0]);var p,c,u;for(let v=0;v<n.length&&(p=n[v-1],c=n[v],u=n[v+1],!c.hasDate(t));v++);let s={previousDateGroup:p,currentDateGroup:c,nextDateGroup:u};return l`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${o}
        disabled=${!p}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${_(ia[c[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${n.map(v=>l`<${lr} dateGroup=${v} visibleDateGroups=${s}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${i}
        disabled=${!u}>
        ${">"}
      </button>
    </div>
  `};var pr=e=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:n,dispatch:o}=f("selectedCalendar","appointment","nextFreeSlots","selectedDate");var i=new Date(r),p,c=!1;for(i.setDate(i.getDate()+1);a[p=M(n,t,i)];){if(a[p].status!=="empty"){c=!0;break}i.setDate(i.getDate()+1)}let u=()=>o("selectedDate/set",i);return l`
    <li class="list-group-item p-4 text-center">
      <h5>${_("There are no free appointment times for this day")}</h5>
      ${c?l`
          <div class="text-muted">
            ${_("The next free slot is available on %date%",{date:$.formatDate(i)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${u}">${_("Go to date")}</button>
        `:l`
          <button class="btn m-2 btn-primary" onClick="${u}">
            ${_("Click here to search for the next free appointment")}
          </button>
        `}
    </li>
  `};var ur=e=>{let{appointment:t,calendars:r,dispatch:a}=f("appointment","calendars");return l`
    <li class="list-group-item" onClick=${()=>{var o=null;for(let i=0;i<r.length;i++)if(e.slot.calendar["@id"]==r[i]["@id"])var o=r[i];if(!o)throw new Error("Could not find calendar");a("appointment/set",{start:e.slot.start,end:e.slot.end,calendar:o}),a("currentStep/next")}}>
      <div class="row">
        <div class="col col-1">
          <input class="form-check-input" type="radio"
            checked=${De(new Date(t.start),new Date(e.slot.start))} />
        </div>
        <div class="col text-center">${$.formatTime(e.slot.start)}</div>
      </div>
    </li>
  `};var dr=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=f("selectedCalendar","selectedDate","nextFreeSlots","appointment");var n=M(r,t,e);return l`
    <${cr}/>
    <ul class="list-group mt-3">
      ${a[n]?a[n].status=="empty"?l`<${pr}/>`:a[n].slots.map(o=>l`<${ur} slot=${o}/>`):l`<li class="list-group-item"><${A}/></li>`}
    </ul>
  `};var mr=e=>{let{appointment:t,dispatch:r}=f("appointment"),a=n=>{let{value:o}=n.target;var{customer:i}=t;i[e.property]=o,r("appointment/set",{customer:i})};return l`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${a}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var x=e=>{let{customerForm:t}=f("customerForm");if(!!t[e.property]){var r=t[e.property];return l`
    <div class="${e.class||"col"} needs-validation p-1 mb-2">
      ${e.label?l`
          <label class="form-label text-truncate">
            ${r.required?l`<span class="text-danger">*</span> `:""}
            ${_(e.label)}
          </label>
        `:null}
      <${e.inputClass||mr} property=${e.property}
        invalid=${r.errors&&r.errors.length?"was-validated":""}/>
      ${r.errors&&r.errors.length?r.errors.map(a=>l`<div class="invalid-feedback">${_(a)}</div>`):""}
    </div>
  `}};var V=e=>{let t=r=>{let{value:a}=r.target;e.onInput(a)};return l`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?l`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:r,label:a})=>l`<option value="${r}">${a}</option>`)}
    </select>
  `};var sa=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),_r=e=>{let{appointment:t,dispatch:r}=f("appointment"),a=(c,u)=>{var{customer:s}=t;u==""?s[e.property]=null:(s[e.property]=s[e.property]||new Date("2000-01-01"),s[e.property][`set${c}`](u)),r("appointment/set",{customer:s})},n=t.customer[e.property];var o=[];for(let c=1900;c<=new Date().getFullYear();c++)o.push({value:c,label:c});var i=[];for(let c=1;c<=12;c++)i.push({value:c-1,label:c<10?`0${c}`:c});var p=[];for(let c=1;c<=sa(n);c++)p.push({value:c,label:c<10?`0${c}`:c});return l`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${V} invalid=${e.invalid} onInput=${c=>a("FullYear",c)}
        value=${n?n.getFullYear():""} emptySelection="----" options=${o}
         disabled=${!!t.customer["@id"]}/>
      <${V} invalid=${e.invalid} onInput=${c=>a("Month",c)}
        value=${n?n.getMonth():""} emptySelection="--" options=${i}
         disabled=${!!t.customer["@id"]}/>
      <${V} invalid=${e.invalid} onInput=${c=>a("Date",c)}
        value=${n?n.getDate():""} emptySelection="--" options=${p}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `};var fr=e=>{let{appointment:t,dispatch:r}=f("appointment");return l`
    <${V} onInput=${n=>{var{customer:o}=t;o[e.property]=n,r("appointment/set",{customer:o})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${_("Not specified")}"
        options=${[{value:"m",label:_("Male")},{value:"f",label:_("Female")}]}/>
  `};var hr=e=>{let{appointment:t,privacyPolicy:r,dispatch:a}=f("appointment","privacyPolicy"),n=()=>{var{customer:i}=t;i[e.property]=!i[e.property]||null,a("appointment/set",{customer:i})},o=()=>a("privacyPolicyModalState/set",!1);return l`
    <${O} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${r?l([r.content]):""}"
      approveButtonLabel="Close"
      onApprove=${o}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${n}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${_("I have accepeted the privacy policy")}
      </label>
    </div>
  `};var vr=e=>{let{customerForm:t,customerFormGlobalErrors:r,dispatch:a}=f("customerForm","customerFormGlobalErrors","language"),n=()=>{a("customerForm/validateAndNext")};return l`
    <div class="card p-2">
      ${r&&r.length?l`
          <div class="row mx-2 text-danger">
            ${r.map(o=>l`<p>${o}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${B.shouldSwitchNameOrder()?l`
            <${x} property="last_name" label="Last name"/>
            <${x} property="first_name" label="First name"/>
          `:l`
            <${x} property="first_name" label="First name"/>
            <${x} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${x} class="col-lg-5" property="birth" label="Birth" inputClass=${_r}/>
        <${x} property="gender" label="Gender" inputClass=${fr}/>
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
      <div class="row mx-2">
        <${x} property="acceptPrivacyPolicy" inputClass=${hr}/>
      </div>
      <button class="mx-2 btn btn-primary" onClick=${n}>${_("Next")}</button>
    </div>
  `};var Ne=e=>l`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${U} step="process" wrappedComponent=${nr}/>
        <${U} step="calendar" wrappedComponent=${ir}/>
        <${U} step="appointment" wrappedComponent=${dr}/>
        <${U} step="customer" wrappedComponent=${vr}/>
        <${U} step="summary" wrappedComponent=${ue}/>
      </div>
    </div>
  `;var Ie=e=>{let{moduleState:t,appointment:r,dispatch:a}=f("moduleState","appointment"),n=()=>a("close");switch(t){case"success":return l`
        <${O} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${_("We have recorded you appointment.")}
            ${_("The examination will start at %start%, please arrive 5 minutes early.",{start:$.formatTime(r.start)})}
            ${_("If you have any further questions, please contuct us through our customer service.")}
          "
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;case"error":return l`
        <${O} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Due to an unexpected error appointment could not be booked, please restart the process"
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;default:return l`
        <${O} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `}};var Be=({colors:e})=>{if(e=e||{},Object.keys(e).length!=0)return l`
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
          .cvio-ab-form-control {
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
  `};var br=e=>{let{headerTitle:t,currentStep:r}=f("headerTitle","currentStep");switch(r){case"process":var a=_("Select eye examination type");break;case"calendar":var a=_("Select a vision expert");break;case"appointment":var a=_("Select your desired appointment time");break;case"customer":var a=_("Add you contact details");break;default:var a=_("Your appointment details");break}return l`
    <div class="bg-primary bg-gradient text-light p-2">
      <div class="container">
        <${Ae}/>
          <h3>
            <${Ee}/>
            ${t||_("Appointment booker")}
          </h3>
          <h5 class="ms-5">
            ${a}
          </h5>
       </div>
    </div>
    `};var la=e=>l`
    <${Be} colors=${e.colors}/>
    <div class="fixed-top">
      <${Se.Provider} value=${e.store}>
        <${Ie}/>
        <${br}/>
        <div class="bg-body content">
          <${Ne}/>
        </div>
      <//>
    </div>
  `,de=class{constructor(t){var r=tr();this.store=r,this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode).then(()=>Promise.all([this.loadEyeExaminationProcesses(),this.loadCalendars()])).then(()=>{r.dispatch("moduleState/set","idle"),this.store.dispatch("bookerInit")}),t.calendarStepShouldBeHidden&&r.dispatch("calendarStepShouldBeHidden/set",!0),t.firstEligibleTime&&r.dispatch("firstEligibleTime/set",t.firstEligibleTime),t.language&&r.dispatch("language/set",t.language),t.headerTitle&&r.dispatch("headerTitle/set",t.headerTitle),t.country&&r.dispatch("country/set",t.country),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:r}){var a={};r=["first_name","last_name","acceptPrivacyPolicy"].concat(r||["email"]),["first_name","last_name","acceptPrivacyPolicy"].concat(t||["mobile","email"]).forEach(n=>{a[n]={required:r.indexOf(n)!=-1}}),this.store.dispatch("customerForm/set",{customerForm:a})}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){var r=await w.get(this.store,`stores?code=${t}`);this.store.dispatch("store/set",r[0])}async loadEyeExaminationProcesses(){var t=this.store.get().store,r=await w.get(this.store,`eye_examination_processes?hasLength&chain=${t.chain["@id"]}`);this.store.dispatch("eyeExaminationProcesses/set",r)}async loadCalendars(){this.store.dispatch("calendars/set",await w.get(this.store,`appointment_calendars?groups[]=userProfilePictureRead&store=${this.store.get().store["@id"]}`))}createElementAndRender({parentElement:t,colors:r}){var a=document.createElement("div");(t||document.body).appendChild(a),fe(l`<${la} store=${this.store} colors=${r}/>`,a),this.store.on("close",()=>a.remove())}getStore(){return this.store}},ca=de;window.ClearvisioAppointmentBooker=de;export{ca as default};
