var K,m,De,z,Ce,Fe,Ee,q={},Te=[],Zt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function F(e,t){for(var r in t)e[r]=t[r];return e}function Me(e){var t=e.parentNode;t&&t.removeChild(e)}function P(e,t,r){var o,a,n,s={};for(n in t)n=="key"?o=t[n]:n=="ref"?a=t[n]:s[n]=t[n];if(arguments.length>2&&(s.children=arguments.length>3?K.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)s[n]===void 0&&(s[n]=e.defaultProps[n]);return V(e,s,o,a,null)}function V(e,t,r,o,a){var n={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++De:a};return a==null&&m.vnode!=null&&m.vnode(n),n}function A(e){return e.children}function j(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?N(e):null}function Pe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Pe(e)}}function ae(e){(!e.__d&&(e.__d=!0)&&z.push(e)&&!Z.__r++||Fe!==m.debounceRendering)&&((Fe=m.debounceRendering)||Ce)(Z)}function Z(){for(var e;Z.__r=z.length;)e=z.sort(function(t,r){return t.__v.__b-r.__v.__b}),z=[],e.some(function(t){var r,o,a,n,s,p;t.__d&&(s=(n=(r=t).__v).__e,(p=r.__P)&&(o=[],(a=F({},n)).__v=n.__v+1,se(p,n,a,r.__n,p.ownerSVGElement!==void 0,n.__h!=null?[s]:null,o,s==null?N(n):s,n.__h),Ae(o,n),n.__e!=s&&Pe(n)))})}function Ie(e,t,r,o,a,n,s,p,l,d){var i,b,u,_,v,C,g,y=o&&o.__k||Te,S=y.length;for(r.__k=[],i=0;i<t.length;i++)if((_=r.__k[i]=(_=t[i])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?V(null,_,null,null,_):Array.isArray(_)?V(A,{children:_},null,null,null):_.__b>0?V(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=r,_.__b=r.__b+1,(u=y[i])===null||u&&_.key==u.key&&_.type===u.type)y[i]=void 0;else for(b=0;b<S;b++){if((u=y[b])&&_.key==u.key&&_.type===u.type){y[b]=void 0;break}u=null}se(e,_,u=u||q,a,n,s,p,l,d),v=_.__e,(b=_.ref)&&u.ref!=b&&(g||(g=[]),u.ref&&g.push(u.ref,null,_),g.push(b,_.__c||v,_)),v!=null?(C==null&&(C=v),typeof _.type=="function"&&_.__k===u.__k?_.__d=l=Oe(_,l,e):l=Ne(e,_,u,y,v,l),typeof r.type=="function"&&(r.__d=l)):l&&u.__e==l&&l.parentNode!=e&&(l=N(u))}for(r.__e=C,i=S;i--;)y[i]!=null&&(typeof r.type=="function"&&y[i].__e!=null&&y[i].__e==r.__d&&(r.__d=N(o,i+1)),He(y[i],y[i]));if(g)for(i=0;i<g.length;i++)Le(g[i],g[++i],g[++i])}function Oe(e,t,r){for(var o,a=e.__k,n=0;a&&n<a.length;n++)(o=a[n])&&(o.__=e,t=typeof o.type=="function"?Oe(o,t,r):Ne(r,o,o,a,o.__e,t));return t}function B(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){B(r,t)}):t.push(e)),t}function Ne(e,t,r,o,a,n){var s,p,l;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(r==null||a!=n||a.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(a),s=null;else{for(p=n,l=0;(p=p.nextSibling)&&l<o.length;l+=2)if(p==a)break e;e.insertBefore(a,n),s=n}return s!==void 0?s:a.nextSibling}function Qt(e,t,r,o,a){var n;for(n in r)n==="children"||n==="key"||n in t||Q(e,n,null,r[n],o);for(n in t)a&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||r[n]===t[n]||Q(e,n,t[n],r[n],o)}function ze(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||Zt.test(t)?r:r+"px"}function Q(e,t,r,o,a){var n;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||ze(e.style,t,"");if(r)for(t in r)o&&r[t]===o[t]||ze(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?o||e.addEventListener(t,n?Re:Be,n):e.removeEventListener(t,n?Re:Be,n);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(s){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Be(e){this.l[e.type+!1](m.event?m.event(e):e)}function Re(e){this.l[e.type+!0](m.event?m.event(e):e)}function se(e,t,r,o,a,n,s,p,l){var d,i,b,u,_,v,C,g,y,S,J,k=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(l=r.__h,p=t.__e=r.__e,t.__h=null,n=[p]),(d=m.__b)&&d(t);try{e:if(typeof k=="function"){if(g=t.props,y=(d=k.contextType)&&o[d.__c],S=d?y?y.props.value:d.__:o,r.__c?C=(i=t.__c=r.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(g,S):(t.__c=i=new j(g,S),i.constructor=k,i.render=er),y&&y.sub(i),i.props=g,i.state||(i.state={}),i.context=S,i.__n=o,b=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=F({},i.__s)),F(i.__s,k.getDerivedStateFromProps(g,i.__s))),u=i.props,_=i.state,b)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&g!==u&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,S),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,S)===!1||t.__v===r.__v){i.props=g,i.state=i.__s,t.__v!==r.__v&&(i.__d=!1),i.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(Y){Y&&(Y.__=t)}),i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,S),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(u,_,v)})}i.context=S,i.props=g,i.state=i.__s,(d=m.__r)&&d(t),i.__d=!1,i.__v=t,i.__P=e,d=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(o=F(F({},o),i.getChildContext())),b||i.getSnapshotBeforeUpdate==null||(v=i.getSnapshotBeforeUpdate(u,_)),J=d!=null&&d.type===A&&d.key==null?d.props.children:d,Ie(e,Array.isArray(J)?J:[J],t,r,o,a,n,s,p,l),i.base=t.__e,t.__h=null,i.__h.length&&s.push(i),C&&(i.__E=i.__=null),i.__e=!1}else n==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Xt(r.__e,t,r,o,a,n,s,l);(d=m.diffed)&&d(t)}catch(Y){t.__v=null,(l||n!=null)&&(t.__e=p,t.__h=!!l,n[n.indexOf(p)]=null),m.__e(Y,t,r)}}function Ae(e,t){m.__c&&m.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){m.__e(o,r.__v)}})}function Xt(e,t,r,o,a,n,s,p){var l,d,i,b=r.props,u=t.props,_=t.type,v=0;if(_==="svg"&&(a=!0),n!=null){for(;v<n.length;v++)if((l=n[v])&&(l===e||(_?l.localName==_:l.nodeType==3))){e=l,n[v]=null;break}}if(e==null){if(_===null)return document.createTextNode(u);e=a?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,u.is&&u),n=null,p=!1}if(_===null)b===u||p&&e.data===u||(e.data=u);else{if(n=n&&K.call(e.childNodes),d=(b=r.props||q).dangerouslySetInnerHTML,i=u.dangerouslySetInnerHTML,!p){if(n!=null)for(b={},v=0;v<e.attributes.length;v++)b[e.attributes[v].name]=e.attributes[v].value;(i||d)&&(i&&(d&&i.__html==d.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Qt(e,u,b,a,p),i)t.__k=[];else if(v=t.props.children,Ie(e,Array.isArray(v)?v:[v],t,r,o,a&&_!=="foreignObject",n,s,n?n[0]:r.__k&&N(r,0),p),n!=null)for(v=n.length;v--;)n[v]!=null&&Me(n[v]);p||("value"in u&&(v=u.value)!==void 0&&(v!==e.value||_==="progress"&&!v)&&Q(e,"value",v,b.value,!1),"checked"in u&&(v=u.checked)!==void 0&&v!==e.checked&&Q(e,"checked",v,b.checked,!1))}return e}function Le(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(o){m.__e(o,r)}}function He(e,t,r){var o,a;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Le(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){m.__e(n,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&He(o[a],t,typeof e.type!="function");r||e.__e==null||Me(e.__e),e.__e=e.__d=void 0}function er(e,t,r){return this.constructor(e,r)}function ie(e,t,r){var o,a,n;m.__&&m.__(e,t),a=(o=typeof r=="function")?null:r&&r.__k||t.__k,n=[],se(t,e=(!o&&r||t).__k=P(A,null,[e]),a||q,q,t.ownerSVGElement!==void 0,!o&&r?[r]:a?null:t.firstChild?K.call(t.childNodes):null,n,!o&&r?r:a?a.__e:t.firstChild,o),Ae(n,e)}function Ge(e,t){var r={__c:t="__cC"+Ee++,__:e,Consumer:function(o,a){return o.children(a)},Provider:function(o){var a,n;return this.getChildContext||(a=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&a.some(ae)},this.sub=function(s){a.push(s);var p=s.componentWillUnmount;s.componentWillUnmount=function(){a.splice(a.indexOf(s),1),p&&p.call(s)}}),o.children}};return r.Provider.__=r.Consumer.contextType=r}K=Te.slice,m={__e:function(e,t){for(var r,o,a;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),a=r.__d),a)return r.__E=r}catch(n){e=n}throw e}},De=0,j.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},r),this.props)),e&&F(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),ae(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ae(this))},j.prototype.render=A,z=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Z.__r=0,Ee=0;var L,x,Ue,le=0,ce=[],We=m.__b,Je=m.__r,Ye=m.diffed,Ke=m.__c,qe=m.unmount;function R(e,t){m.__h&&m.__h(x,e,le||t),le=0;var r=x.__H||(x.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function O(e){return le=1,tr(Ve,e)}function tr(e,t,r){var o=R(L++,2);return o.t=e,o.__c||(o.__=[r?r(t):Ve(void 0,t),function(a){var n=o.t(o.__[0],a);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=x),o.__}function Ze(e,t){var r=R(L++,3);!m.__s&&pe(r.__H,t)&&(r.__=e,r.__H=t,x.__H.__h.push(r))}function Qe(e,t){var r=R(L++,4);!m.__s&&pe(r.__H,t)&&(r.__=e,r.__H=t,x.__h.push(r))}function Xe(e,t){var r=R(L++,7);return pe(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function et(e){var t=x.context[e.__c],r=R(L++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(x)),t.props.value):e.__}function rr(){ce.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(X),e.__H.__h.forEach(ue),e.__H.__h=[]}catch(t){e.__H.__h=[],m.__e(t,e.__v)}}),ce=[]}m.__b=function(e){x=null,We&&We(e)},m.__r=function(e){Je&&Je(e),L=0;var t=(x=e.__c).__H;t&&(t.__h.forEach(X),t.__h.forEach(ue),t.__h=[])},m.diffed=function(e){Ye&&Ye(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ce.push(t)!==1&&Ue===m.requestAnimationFrame||((Ue=m.requestAnimationFrame)||function(r){var o,a=function(){clearTimeout(n),tt&&cancelAnimationFrame(o),setTimeout(r)},n=setTimeout(a,100);tt&&(o=requestAnimationFrame(a))})(rr)),x=null},m.__c=function(e,t){t.some(function(r){try{r.__h.forEach(X),r.__h=r.__h.filter(function(o){return!o.__||ue(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],m.__e(o,r.__v)}}),Ke&&Ke(e,t)},m.unmount=function(e){qe&&qe(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(X)}catch(r){m.__e(r,t.__v)}};var tt=typeof requestAnimationFrame=="function";function X(e){var t=x;typeof e.__c=="function"&&e.__c(),x=t}function ue(e){var t=x;e.__c=e.__(),x=t}function pe(e,t){return!e||e.length!==t.length||t.some(function(r,o){return r!==e[o]})}function Ve(e,t){return typeof t=="function"?t(e):t}function or(e,t){for(var r in t)e[r]=t[r];return e}function rt(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function ot(e){this.props=e}(ot.prototype=new j).isPureReactComponent=!0,ot.prototype.shouldComponentUpdate=function(e,t){return rt(this.props,e)||rt(this.state,t)};var nt=m.__b;m.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),nt&&nt(e)};var nr=m.__e;m.__e=function(e,t,r){if(e.then){for(var o,a=t;a=a.__;)if((o=a.__c)&&o.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),o.__c(e,t)}nr(e,t,r)};var at=m.unmount;function de(){this.__u=0,this.t=null,this.__b=null}function st(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ee(){this.u=null,this.o=null}m.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),at&&at(e)},(de.prototype=new j).__c=function(e,t){var r=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(r);var a=st(o.__v),n=!1,s=function(){n||(n=!0,r.__R=null,a?a(p):p())};r.__R=s;var p=function(){if(!--o.__u){if(o.state.__e){var d=o.state.__e;o.__v.__k[0]=function b(u,_,v){return u&&(u.__v=null,u.__k=u.__k&&u.__k.map(function(C){return b(C,_,v)}),u.__c&&u.__c.__P===_&&(u.__e&&v.insertBefore(u.__e,u.__d),u.__c.__e=!0,u.__c.__P=v)),u}(d,d.__c.__P,d.__c.__O)}var i;for(o.setState({__e:o.__b=null});i=o.t.pop();)i.forceUpdate()}},l=t.__h===!0;o.__u++||l||o.setState({__e:o.__b=o.__v.__k[0]}),e.then(s,s)},de.prototype.componentWillUnmount=function(){this.t=[]},de.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function n(s,p,l){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(d){typeof d.__c=="function"&&d.__c()}),s.__c.__H=null),(s=or({},s)).__c!=null&&(s.__c.__P===l&&(s.__c.__P=p),s.__c=null),s.__k=s.__k&&s.__k.map(function(d){return n(d,p,l)})),s}(this.__b,r,o.__O=o.__P)}this.__b=null}var a=t.__e&&P(A,null,e.fallback);return a&&(a.__h=null),[P(A,null,t.__e?null:e.children),a]};var it=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(ee.prototype=new j).__e=function(e){var t=this,r=st(t.__v),o=t.o.get(e);return o[0]++,function(a){var n=function(){t.props.revealOrder?(o.push(a),it(t,e,o)):a()};r?r(n):n()}},ee.prototype.render=function(e){this.u=null,this.o=new Map;var t=B(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},ee.prototype.componentDidUpdate=ee.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){it(e,r,t)})};var ar=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,sr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ir=typeof document!="undefined",lr=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};j.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(j.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var lt=m.event;function cr(){}function pr(){return this.cancelBubble}function ur(){return this.defaultPrevented}m.event=function(e){return lt&&(e=lt(e)),e.persist=cr,e.isPropagationStopped=pr,e.isDefaultPrevented=ur,e.nativeEvent=e};var ct={configurable:!0,get:function(){return this.class}},pt=m.vnode;m.vnode=function(e){var t=e.type,r=e.props,o=r;if(typeof t=="string"){var a=t.indexOf("-")===-1;for(var n in o={},r){var s=r[n];ir&&n==="children"&&t==="noscript"||n==="value"&&"defaultValue"in r&&s==null||(n==="defaultValue"&&"value"in r&&r.value==null?n="value":n==="download"&&s===!0?s="":/ondoubleclick/i.test(n)?n="ondblclick":/^onchange(textarea|input)/i.test(n+t)&&!lr(r.type)?n="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(n)?n=n.toLowerCase():a&&sr.test(n)?n=n.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),o[n]=s)}t=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=B(r.children).forEach(function(p){p.props.selected=o.value.indexOf(p.props.value)!=-1})),t=="select"&&o.defaultValue!=null&&(o.value=B(r.children).forEach(function(p){p.props.selected=o.multiple?o.defaultValue.indexOf(p.props.value)!=-1:o.defaultValue==p.props.value})),e.props=o}t&&r.class!=r.className&&(ct.enumerable="className"in r,r.className!=null&&(o.class=r.className),Object.defineProperty(o,"className",ct)),e.$$typeof=ar,pt&&pt(e)};var ut=m.__r;m.__r=function(e){ut&&ut(e)};var me=Ge(),dr=typeof window!="undefined"?Qe:Ze,mr=e=>(...t)=>{let r=et(e),o=O({});return dr(()=>r.on("@changed",(a,n)=>{t.some(p=>p in n)&&o[1]({})}),[]),Xe(()=>{let a=r.get(),n={};return t.forEach(s=>{n[s]=a[s]}),n.dispatch=r.dispatch,n},[o[0]])},f=mr(me);var _r={get:async(e,t)=>{let{path:r,headers:o}=e.get().api;try{let a=await(await fetch(`${r}/${t}`,{headers:o})).json();if(!a["hydra:member"])throw new Error("Invalid response");return a["hydra:member"]}catch(a){throw e.dispatch("moduleState/set","error"),a}}},E=_r;var dt=function(e,t,r,o){var a;t[0]=0;for(var n=1;n<t.length;n++){var s=t[n++],p=t[n]?(t[0]|=s?1:2,r[t[n++]]):t[++n];s===3?o[0]=p:s===4?o[1]=Object.assign(o[1]||{},p):s===5?(o[1]=o[1]||{})[t[++n]]=p:s===6?o[1][t[++n]]+=p+"":s?(a=e.apply(p,dt(e,p,r,["",null])),o.push(a),p[0]?t[0]|=2:(t[n-2]=0,t[n]=a)):o.push(p)}return o},mt=new Map;function _t(e){var t=mt.get(this);return t||(t=new Map,mt.set(this,t)),(t=dt(this,t.get(e)||(t.set(e,t=function(r){for(var o,a,n=1,s="",p="",l=[0],d=function(u){n===1&&(u||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,u,s):n===3&&(u||s)?(l.push(3,u,s),n=2):n===2&&s==="..."&&u?l.push(4,u,0):n===2&&s&&!u?l.push(5,0,!0,s):n>=5&&((s||!u&&n===5)&&(l.push(n,0,s,a),n=6),u&&(l.push(n,u,0,a),n=6)),s=""},i=0;i<r.length;i++){i&&(n===1&&d(),d(i));for(var b=0;b<r[i].length;b++)o=r[i][b],n===1?o==="<"?(d(),l=[l],n=3):s+=o:n===4?s==="--"&&o===">"?(n=1,s=""):s=o+s[0]:p?o===p?p="":s+=o:o==='"'||o==="'"?p=o:o===">"?(d(),n=1):n&&(o==="="?(n=5,a=s,s=""):o==="/"&&(n<5||r[i][b+1]===">")?(d(),n===3&&(l=l[0]),n=l,(l=l[0]).push(2,0,n),n=0):o===" "||o==="	"||o===`
`||o==="\r"?(d(),n=2):s+=o),n===3&&s==="!--"&&(n=4,l=l[0])}return d(),l}(e)),t),arguments,[])).length>1?t:t[0]}var fr=(e,t,...r)=>(t&&t.class&&(t.class=t.class.trim().split(" ").map(o=>o.indexOf("cvio-ab-")!==0?`cvio-ab-${o}`:o).join(" ")),P(e,t,...r)),c=_t.bind(fr);var _e={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja ezt az id\u0151pontot?","All inputed data will be lost.":"Mindent megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pont foglal\xE1s folytat\xE1sa","Cancel appointment":"Id\u0151pont megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues was available for the selected process":"Egy munkat\xE1rsunk sem volt el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"A te adataid",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m."}},h=(e,t={})=>{let{language:r}=f("language");e=(_e[r]||_e[r.substring(0,2)]||_e.en)[e]||e;for(let a in t)e=e.replace(new RegExp("%"+a+"%","g"),t[a]);return e};var ft=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function G({appointment:e,calendars:t}){var r=e?e.eye_examination_process:null;return t.filter(function(o){if(!r)return!0;for(let a=0;a<ft.length;a++){let n=ft[a];if(!(!o.user||o.user.roles.indexOf(n.name)==-1)&&(r.highestRequiredRole==n.name||n.includes.indexOf(r.highestRequiredRole)!=-1))return!0}return!1})}function T(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var fe=5,hr=e=>{var t=[new Date(e)];for(let r=0;r<fe-1;r++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(r){for(let o=0;o<fe;o++)if(T(this[o],r))return!0},t},te=[];function he(){if(te.length)return te;for(var e=new Date,t=0;t<=100;t++)te.push(hr(e)),e=new Date(e),e.setDate(e.getDate()+fe);return te}function ve(e,t){return T(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var be={hu:"%Y. %M. %D."},ht=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),vt=e=>{let{language:t}=f("language");var r=be[t]||be[t.substring(0,2)]||be.hu;e=new Date(e);var o=e.getMonth()+1;return r.replace("%Y",e.getFullYear()).replace("%M",`${o<10?"0":""}${o}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},vr=e=>vt(e)+" "+ht(e),w={formatTime:ht,formatDate:vt,formatDateTime:vr};function D(e,t){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(e.calendar?e.calendar["@id"]:"NO_CALENDAR")+"-"+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate():null}var bt=e=>{let t={},r={},o={dispatch(a,n){if(a!=="@dispatch"&&o.dispatch("@dispatch",[a,n,t[a]]),t[a]){let s;t[a].forEach(p=>{let l=t[a].includes(p)&&p(r,n,o);l&&typeof l.then!="function"&&(r={...r,...l},s={...s,...l})}),s&&o.dispatch("@changed",s)}},get:()=>r,on(a,n){return(t[a]||(t[a]=[])).push(n),()=>{t[a]=t[a].filter(s=>s!==n)}}};return e.forEach(a=>{a&&a(o)}),o.dispatch("@init"),o};function gt(e){e.on("@init",()=>({eyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:t},r)=>({eyeExaminationProcesses:r}))}var ge=["process","calendar","appointment","customer","summary"];function yt(e){var t=(o,a)=>ge.filter(n=>o.indexOf(n)!=-1&&n!=a),r=(o,a)=>ge.filter(n=>o.indexOf(n)!=-1||n==a);e.on("@init",()=>({currentStep:"process",availableSteps:ge})),e.on("currentStep/next",({currentStep:o,availableSteps:a})=>{var n=a.indexOf(o);return{currentStep:n<a.length-1?a[n+1]:o}}),e.on("currentStep/previous",({currentStep:o,availableSteps:a})=>{var n=a.indexOf(o);return{currentStep:n>0?a[n-1]:o}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:o,availableSteps:a,currentStep:n})=>{if(o.length==1)return{availableSteps:a=t(a,"process"),currentStep:n=="process"?a[0]:n}}),e.on("appointment/set",({availableSteps:o,appointment:a,calendars:n,currentStep:s})=>{var p=G({appointment:a,calendars:n});if(p.length==1&&(!a.calendar||a.calendar["@id"]!=p[0]["@id"]))return{appointment:Object.assign(a,{calendar:p[0]}),availableSteps:t(o,"calendar"),currentStep:s=="calendar"?"appointment":s};if(p.length>1)return{availableSteps:r(o,"calendar")}})}function xt(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},r)=>({appointment:Object.assign(t,r)}))}function $t(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},r)=>(t.headers=Object.assign(t.headers,r),{api:t})),e.on("api/setPath",({api:t},r)=>(t.path=r,{api:t}))}function St(e){e.on("@init",()=>({language:navigator.language})),e.on("language/set",(t,r)=>({language:r}))}function ye(e,{visible:t}={visible:!1}){return r=>{r.on("@init",()=>({[e]:t})),r.on(`${e}/set`,(o,a)=>({[e]:a}))}}var br=["idle","loading","error"];function kt(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},r)=>(r=br.indexOf(r)!=-1?r:t,r=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:r}))}function jt(e){e.on("@init",()=>({store:null})),e.on("store/set",({store:t},r)=>({store:r}))}function wt(e){e.on("@init",()=>({calendars:[],calendarsLoaded:!1})),e.on("calendars/set",(t,r)=>({calendars:r.filter(({user:o})=>o),calendarsLoaded:!0})),e.on("apiInit",async()=>{e.dispatch("calendars/set",await E.get(e,`appointment_calendars?groups[]=userProfilePictureRead&tore=${e.get().store["@id"]}`))})}function Dt(e){e.on("@init",()=>({selectedDate:new Date})),e.on("selectedDate/set",(t,r)=>({selectedDate:r}))}var gr=(e,t)=>{let{appointment:r,nextFreeSlots:o}=e,a=o[D(r,t)];return a&&a.status!="incomplete"},U=async(e,t)=>{let{appointment:r}=e.get();if(!r.eye_examination_process||yr(e,t)||gr(e.get(),t))return;let o=await E.get(e,`appointment_next_free_slots?${xr(e,t)}`);if(o.length==0){var a=new Date(t);return a.setDate(t.getDate()+7),e.dispatch("nextFreeSlots/add",Ct(e,t,a)),U(e,a)}let n=new Date(o[o.length-1].start);var s=Ct(e,t,n),p=null;for(let l=0;l<o.length;l++){let d=o[l],i=D(r,new Date(d.start));s[i].length&&s[i][s[i].length-1].start==d.start||(s[i].status="incomplete",s[i].slots||(s[i].slots=[]),s[i].slots.push(d),p&&p!=i&&(s[p].status="complete"),p!=i&&(p=i))}return e.dispatch("nextFreeSlots/add",s),U(e,n)},yr=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>60,xr=(e,t)=>{let{appointment:r}=e.get();var o={process:r.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return r.calendar?o.calendar=r.calendar["@id"]:o.store=e.get().store["@id"],Object.keys(o).map(a=>`${a}=${o[a]}`).join("&")},Ct=(e,t,r)=>{let{appointment:o}=e.get();var a=new Date(t);a.setHours(0),a.setMinutes(0);for(var n={};a<=r;)n[D(o,a)]={status:"empty"},a.setDate(a.getDate()+1);return n};function Ft(e){e.on("@init",()=>({nextFreeSlots:{}})),e.on("selectedDate/set",async t=>{U(e,t.selectedDate)}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&U(e,t.selectedDate)}),e.on("appointment/set",async t=>{t.currentStep=="appointment"&&U(e,t.selectedDate)}),e.on("nextFreeSlots/add",({nextFreeSlots:t},r)=>({nextFreeSlots:Object.assign(t,r)}))}var $r=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},Sr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,kr=(e,t)=>{e==null||e===""||Sr.test(e.toLowerCase())||t.errors.push("Invalid email address.")};function Et(e){e.on("@init",()=>({customerForm:{}})),e.on("customerForm/set",({customerForm:t},r)=>({customerForm:Object.assign(t,r)})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:r})=>{let{customer:o}=r;var a=!1;if(Object.keys(t).forEach(n=>{t[n].errors=[],t[n].required&&$r(o[n],t[n]),n=="email"&&kr(o[n],t[n]),t[n].errors.length&&(a=!0)}),a)return{customerForm:t};e.dispatch("currentStep/next")})}function Tt(e){e.on("@init",()=>({header:{}})),e.on("header/set",(t,r)=>({header:r}))}var jr=ye("closeConfirmModalState"),wr=ye("globalModalState",{visible:!0}),Mt=()=>bt([gt,yt,xt,kt,St,$t,jt,wt,Dt,Ft,Et,jr,wr,Tt]);var xe=e=>{let{currentStep:t,availableSteps:r,dispatch:o}=f("currentStep","availableSteps");return c`
    <button type="button" onClick=${()=>o("currentStep/previous")}
      class="${t==r[0]?"invisible":""} btn btn-outline-light mx-1">
      ←
    </button>
  `};var M=()=>c`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var W=e=>{let t=f(e.modalStateStore),r=t[e.modalStateStore],[o,a]=O(!1),[n,s]=O(!1),[p,l]=O(!1);r&&!o&&(s(!0),setTimeout(()=>{l(!0),a(!0)},0)),!r&&o&&(l(!1),setTimeout(()=>{s(!1),a(!1)},100));let d=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return c`
    <div class="modal text-dark fade ${p?"show":""}" tabindex="-1" style="${n?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?c`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${h(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?c`<p>${h(e.content)}</p>`:c`<${M}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?c`
            <div class="modal-footer">
              ${e.cancelButtonLabel?c`
                <button type="button" class="btn btn-secondary" onClick=${d}>
                  ${h(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?c`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${h(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var $e=e=>{let{dispatch:t}=f();return c`
    <${W} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${()=>t("close")}/>

    <button type="button" class="float-end btn-close btn-close-white" onClick=${()=>t("closeConfirmModalState/set",!0)}></button>
  `};var H=e=>{let{currentStep:t,availableSteps:r}=f("currentStep","availableSteps"),o=r.indexOf(e.step),a=r.indexOf(t);return r.indexOf(e.step)==-1?c``:c`
    <div class="carousel-item
      ${a-1==o?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${a+1==o?"carousel-item-next":""}
    ">
      <div class="container-sm p-1 col-sm-6">
        <${e.wrappedComponent}/>
      </div>
    </div>
  `};var Se={HUF:0},Dr=(e,t)=>{var r=e.price_list.currency,o={style:"currency",currency:r};return Se[r]!=null&&(o.maximumFractionDigits=Se[r],o.minimumFractionDigits=Se[r]),new Intl.NumberFormat(t,o)},re=e=>{let{store:t,language:r}=f("store","language");var o=null,a=null,n=t.price_list.id;e.forEach(p=>{p.service.packagings.forEach(l=>{l.currentPrices.forEach(d=>{d.price_list.id==n&&((o==null||o>d.value)&&(o=d.value),(a==null||a<d.value)&&(a=d.value))})})});var s=Dr(t,r);return o==null||a==null?c``:o==a?c`${s.format(o)}`:c`${s.format(o)} - ${s.format(a)}`};var Pt=e=>{let{appointment:t,dispatch:r}=f("appointment");return c`
    <li class="user-select-none list-group-item" onClick=${()=>{r("appointment/set",{eye_examination_process:e.item}),r("currentStep/next")}}>
      <div class="form-check">
        <div class="container">
          <div class="row">
            <span class="col-5">
              <input class="form-check-input" type="radio"
                checked=${t.eye_examination_process==e.item} />
              <span class="ms-1 fw-bold">
                ${e.item.name}
              </span>
            </span>
            <span class="text-muted me-4 col-2">
              ${e.item.length} ${h("@abbrMinute")}
            </span>
            <span class="col-4 text-end">${re(e.item.process_services)}</span>
          </div>
          <div class="row">
            <div class="col ms-1">${e.item.description||""}</div>
          </div>
        </div>
      </div>
    </li>
  `};var At=e=>{let{eyeExaminationProcesses:t}=f("eyeExaminationProcesses");return c`
    <ul class="list-group">
      ${t.length?t.map(r=>c`<${Pt} item=${r} />`):c`<li class="list-group-item"><${M}/></li>`}
    </ul>
  `};var ke=e=>{let{appointment:t,dispatch:r}=f("appointment");return c`
    <li class="user-select-none list-group-item" onClick=${()=>{r("appointment/set",{calendar:e.item["@id"]?e.item:null}),r("currentStep/next")}}>
      <div class="avatar me-2 float-start">
        ${e.item.user.profile_picture?c`<img class="image" src="data:image/*;base64,${e.item.user.profile_picture}"/>`:c`<h2 class="p-1 text-muted text-center image">?</h2>`}
        <input class="form-check-input" type="radio" checked=${t.calendar==e.item} />
      </div>
      <div class="fw-bold">${e.item.user.name}</div>
      ${e.item.user.description||""}
    </li>
  `};var Ot=e=>{let{appointment:t,calendarsLoaded:r,dispatch:o}=f("appointment","calendarsLoaded"),a=G(f("calendars")),n={user:{name:h("First free"),description:h("For finding the nearest free time slot.")}},s=()=>o("currentStep/previous");return c`
    <ul class="list-group">
      ${t.eye_examination_process&&r?a.length?c`
              ${a.map(p=>c`<${ke} item=${p} />`)}
              <${ke} item=${n} />
            `:c`
              <li class="list-group-item text-center">
                ${h("None of our colleagues was available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${s}">
                  ${h("Select another process")}
                </button>
              </li>
          `:c`<li class="list-group-item"><${M}/></li>`}
    </ul>
  `};var Cr=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],Nt=({date:e})=>{let{selectedDate:t,dispatch:r}=f("selectedDate"),o=()=>r("selectedDate/set",e);return c`
    <div class="col">
      <div class="card ${T(e,t)?"bg-primary text-light":""}" onClick="${o}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${T(e,t)?"":"text-muted"}">
            ${h(Cr[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var Lt=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:r,currentDateGroup:o,nextDateGroup:a}=t;return c`
    <div class="carousel-item
      ${r==e?"carousel-item-prev":""}
      ${o==e?"active":""}
      ${a==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(n=>c`<${Nt} date=${n}/>`)}
      </div>
    </div>
  `};var Fr=["January","February","March","April","May","June","July","August","September","October","November","December"],Ht=e=>{let{selectedDate:t,dispatch:r}=f("selectedDate"),o=he(),a=()=>r("selectedDate/set",s[4]),n=()=>r("selectedDate/set",l[0]);var s,p,l;for(let i=0;i<o.length&&(s=o[i-1],p=o[i],l=o[i+1],!p.hasDate(t));i++);let d={previousDateGroup:s,currentDateGroup:p,nextDateGroup:l};return c`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${a}
        disabled=${!s}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${h(Fr[p[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${o.map(i=>c`<${Lt} dateGroup=${i} visibleDateGroups=${d}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${n}
        disabled=${!l}>
        ${">"}
      </button>
    </div>
  `};var It=e=>{let{selectedDate:t,nextFreeSlots:r,appointment:o,dispatch:a}=f("appointment","nextFreeSlots","selectedDate");var n=new Date(t),s,p=!1;for(n.setDate(n.getDate()+1);r[s=D(o,n)];){if(r[s].status!=="empty"){p=!0;break}n.setDate(n.getDate()+1)}let l=()=>a("selectedDate/set",n);return c`
    <li class="list-group-item p-4 text-center">
      <h5>${h("There are no free appointment times for this day")}</h5>
      ${p?c`
          <div class="text-muted">
            ${h("The next free slot is available on %date%",{date:w.formatDate(n)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${l}">${h("Go to date")}</button>
        `:c`
          <button class="btn m-2 btn-primary" onClick="${l}">
            ${h("Click here to search for the next free appointment")}
          </button>
        `}
    </li>
  `};var zt=e=>{let{appointment:t,dispatch:r}=f("appointment");return c`
    <li class="list-group-item" onClick=${()=>{r("appointment/set",{start:e.slot.start,end:e.slot.end}),r("currentStep/next")}}>
      <div class="row">
        <div class="col col-1">
          <input class="form-check-input" type="radio"
            checked=${ve(new Date(t.start),new Date(e.slot.start))} />
        </div>
        <div class="col text-center">${w.formatTime(e.slot.start)}</div>
      </div>
    </li>
  `};var Bt=()=>{let{selectedDate:e,appointment:t,nextFreeSlots:r}=f("selectedDate","nextFreeSlots","appointment");var o=D(t,e);return c`
    <${Ht}/>
    <ul class="list-group mt-3">
      ${r[o]?r[o].status=="empty"?c`<${It}/>`:r[o].slots.map(a=>c`<${zt} slot=${a}/>`):c`<li class="list-group-item"><${M}/></li>`}
    </ul>
  `};var Rt=e=>{let{appointment:t,dispatch:r}=f("appointment"),o=a=>{let{value:n}=a.target;var{customer:s}=t;s[e.property]=n,r("appointment/set",{customer:s})};return c`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${o}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var $=e=>{let{customerForm:t}=f("customerForm");if(!!t[e.property]){var r=t[e.property];return c`
    <div class="${e.class||"col"} needs-validation p-1 mb-2">
      <label class="form-label text-truncate">
        ${r.required?c`<span class="text-danger">*</span> `:""}
        ${h(e.label)}
      </label>
      <${e.inputClass||Rt} property=${e.property}
        invalid=${r.errors&&r.errors.length?"was-validated":""}/>
      ${r.errors&&r.errors.length?r.errors.map(o=>c`<div class="invalid-feedback">${h(o)}</div>`):""}
    </div>
  `}};var I=e=>{let t=r=>{let{value:o}=r.target;e.onInput(o)};return c`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?c`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:r,label:o})=>c`<option value="${r}">${o}</option>`)}
    </select>
  `};var Er=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),Gt=e=>{let{appointment:t,dispatch:r}=f("appointment"),o=(l,d)=>{var{customer:i}=t;d==""?i[e.property]=null:(i[e.property]=i[e.property]||new Date("2000-01-01"),i[e.property][`set${l}`](d)),r("appointment/set",{customer:i})},a=t.customer[e.property];var n=[];for(let l=1900;l<=new Date().getFullYear();l++)n.push({value:l,label:l});var s=[];for(let l=1;l<=12;l++)s.push({value:l-1,label:l<10?`0${l}`:l});var p=[];for(let l=1;l<=Er(a);l++)p.push({value:l,label:l<10?`0${l}`:l});return c`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${I} invalid=${e.invalid} onInput=${l=>o("FullYear",l)}
        value=${a?a.getFullYear():""} emptySelection="----" options=${n}
         disabled=${!!t.customer["@id"]}/>
      <${I} invalid=${e.invalid} onInput=${l=>o("Month",l)}
        value=${a?a.getMonth():""} emptySelection="--" options=${s}
         disabled=${!!t.customer["@id"]}/>
      <${I} invalid=${e.invalid} onInput=${l=>o("Date",l)}
        value=${a?a.getDate():""} emptySelection="--" options=${p}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `};var Ut=e=>{let{appointment:t,dispatch:r}=f("appointment");return c`
    <${I} onInput=${a=>{var{customer:n}=t;n[e.property]=a,r("appointment/set",{customer:n})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${h("Not specified")}"
        options=${[{value:"m",label:h("Male")},{value:"f",label:h("Female")}]}/>
  `};var Wt=["hu"],Jt=e=>{let{customerForm:t,language:r,dispatch:o}=f("customerForm","language"),a=Wt.indexOf(r)!=-1||Wt.indexOf(r.substring(0,2))!=-1,n=()=>{o("customerForm/validateAndNext")};return c`
    <div class="card p-2">
      <div class="row mx-2">
        ${a?c`
            <${$} property="last_name" label="Last name"/>
            <${$} property="first_name" label="First name"/>
          `:c`
            <${$} property="first_name" label="First name"/>
            <${$} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${$} class="col-lg-5" property="birth" label="Birth" inputClass=${Gt}/>
        <${$} property="gender" label="Gender" inputClass=${Ut}/>
        <${$} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${$} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${$} property="postal_code" label="Postal code"/><${$} property="city" label="City"/>
      </div>
      <div class="row mx-2">
        <${$} property="street_address" label="Street address"/>
      </div>
      <div class="row mx-2">
        <${$} property="mobile" label="Mobile"/><${$} property="email" label="Email"/>
      </div>
      <button class="mx-2 btn btn-primary" onClick=${n}>${h("Next")}</button>
    </div>
  `};var oe=({customer:e,customerAddress:t})=>c`
      <li class="list-group-item text-start">
        <div class="container">
          <div class="row fw-bold">
            <span>${h("Your information")}:</span>
          </div>
          <div class="row mt-2">
            <span><span class="fw-bold">${h("Name")}:</span> ${e.last_name} ${e.first_name}</span>
          </div>
          <div class="row">
            ${e.birth?c`
              <span><span class="fw-bold">${h("Date of birth")}:</span> ${w.formatDate(e.birth)}</span>
            `:""}
          </div>
          <div class="row">
            ${e.gender?c`
              <span><span class="fw-bold">${h("Gender")}: </span> ${e.gender=="m"?"F\xE9rfi":"N\u0151"}</span>
            `:""}
          </div>
          <div class="row">
              ${e.ssn?c`
                  <span><span class="fw-bold">${h("SSN")}: </span> ${e.ssn}</span>
              `:""}
          </div>
          <div class="row">
            ${t?c`
              <span><span class="fw-bold">${h("Address")}: </span> ${t}</span>
            `:""}
          </div>
          <div class="row">
            ${e.mobile?c`
              <span><span class="fw-bold">${h("Phone number")}: </span> ${e.mobile}</span>
            `:""}
          </div>
          <div class="row">
            ${e.email?c`
              <span><span class="fw-bold">Email: </span> ${e.email}</span>
            `:""}
          </div>
        </div>
      </li>
  `;var Yt=e=>c`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        You're appointment details
      </li>
      <li class="list-group-item">
        <div>
          The appointment starts at <span class="fw-bold">${e.dateTimeStart}</span>
        </div>
        <div class="text-muted">
          It takes ${e.processLength} minutes, ends at ${e.dateTimeEnd}
        </div>
      </li>
      <li class="list-group-item">
        <span class="fw-bold">${e.processName}</span> with ${e.examinerName}
      </li>
      ${oe({customer:e.customer,customerAddress:e.customerAddress})}
      <li class="list-group-item">
        <span class="fw-bold">Price:</span> ${e.processPrice}
      </li>
    </ul>
  `;var Kt=e=>c`
    <ul class="list-group text-center">
      <li class="list-group-item fw-bold">
        Foglalási adatai
      </li>
      <li class="list-group-item">
        <div>
          Az időpontja <span class="fw-bold">${e.dateTimeStart}</span> időpontban kezdődik
        </div>
        <div class="text-muted">
          ${e.processLength} percet vesz igénybe, ${e.dateTimeEnd}-ig tart
        </div>
      </li>
      <li class="list-group-item">
        <span class="fw-bold">${e.processName}</span>, vele: ${e.examinerName}
      </li>
      ${oe({customer:e.customer,customerAddress:e.customerAddress})}
      <li class="list-group-item">
        <span class="fw-bold">Ár:</span> ${e.processPrice}
      </li>
    </ul>
  `;var qt=e=>{let{appointment:t,language:r}=f("appointment","language");if(!(!t.eye_examination_process||!t.calendar||!t.start||!t.end)){var o=["state","postal_code","city","street_address"],a=[];o.forEach(s=>{!t.customer[s]||a.push(t.customer[s])});var n={dateTimeStart:w.formatDateTime(t.start),dateTimeEnd:w.formatDateTime(t.end),processLength:t.eye_examination_process.length,processName:t.eye_examination_process.name,processPrice:re(t.eye_examination_process.process_services),examinerName:t.calendar.user.name,customer:t.customer,customerAddress:a.join(", ")};return r=="hu-HU"?Kt(n):Yt(n)}};var je=e=>c`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${H} step="process" wrappedComponent=${At}/>
        <${H} step="calendar" wrappedComponent=${Ot}/>
        <${H} step="appointment" wrappedComponent=${Bt}/>
        <${H} step="customer" wrappedComponent=${Jt}/>
        <${H} step="summary" wrappedComponent=${qt}/>
      </div>
    </div>
  `;var we=e=>{let{moduleState:t,dispatch:r}=f("moduleState"),o=()=>r("close");return t=="error"?c`
      <${W} modalStateStore="globalModalState"
        headerClasses="bg-danger text-light"
        contentClasses="text-danger"
        approveButtonClasses="btn-danger"
        title="Appointment booking failed"
        content="Due to an unexpected error appointment could not be booked, please restart the process"
        approveButtonLabel="OK"
        onApprove=${o}/>
    `:c`
      <${W} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
    `};var Vt=e=>{let{header:t}=f("header");return c`
    <div class="bg-primary bg-gradient text-light p-2">
      <div class="container">
        <${$e}/>
          <h3>
            <${xe}/>
            ${t.title}
          </h3>
          <h5 class="ms-5">
            ${t.subtitle}
          </h5>
       </div>
    </div>
    `};var Tr=e=>c`
    <div class="fixed-top">
      <${me.Provider} value=${e.store}>
        <${we}/>
        <${Vt}/>
        <div class="bg-body content">
          <${je}/>
        </div>
      <//>
    </div>
  `,ne=class{constructor(t){var r=Mt();this.store=r,this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode).then(()=>this.loadEyeExaminationProcesses()).then(()=>{r.dispatch("moduleState/set","idle"),this.store.dispatch("apiInit")}),t.language&&r.dispatch("language/set",t.language),r.dispatch("header/set",t.header||{}),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:r}){var o={};r=["first_name","last_name"].concat(r||["email"]),["first_name","last_name"].concat(t||["mobile","email"]).forEach(a=>{o[a]={required:r.indexOf(a)!=-1}}),this.store.dispatch("customerForm/set",o)}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){var r=await E.get(this.store,`stores?code=${t}`);this.store.dispatch("store/set",r[0])}async loadEyeExaminationProcesses(){var t=this.store.get().store,r=await E.get(this.store,`eye_examination_processes?hasLength&chain=${t.chain["@id"]}`);this.store.dispatch("eyeExaminationProcesses/set",r)}createElementAndRender({parentElement:t}){var r=document.createElement("div");(t||document.body).appendChild(r),ie(c`<${Tr} store=${this.store}/>`,r),this.store.on("close",()=>r.remove())}getStore(){return this.store}},Mr=ne;window.ClearvisioAppointmentBooker=ne;export{Mr as default};
