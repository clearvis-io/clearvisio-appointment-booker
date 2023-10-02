var te,h,Be,q,Ge,He,Re,re={},Ve=[],jr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,t){for(var r in t)e[r]=t[r];return e}function Ue(e){var t=e.parentNode;t&&t.removeChild(e)}function z(e,t,r){var a,n,o,i={};for(o in t)o=="key"?a=t[o]:o=="ref"?n=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?te.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return ae(e,i,a,n,null)}function ae(e,t,r,a,n){var o={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n==null?++Be:n};return n==null&&h.vnode!=null&&h.vnode(o),o}function O(e){return e.children}function A(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?G(e):null}function qe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return qe(e)}}function he(e){(!e.__d&&(e.__d=!0)&&q.push(e)&&!oe.__r++||He!==h.debounceRendering)&&((He=h.debounceRendering)||Ge)(oe)}function oe(){for(var e;oe.__r=q.length;)e=q.sort(function(t,r){return t.__v.__b-r.__v.__b}),q=[],e.some(function(t){var r,a,n,o,i,p;t.__d&&(i=(o=(r=t).__v).__e,(p=r.__P)&&(a=[],(n=P({},o)).__v=o.__v+1,ve(p,o,n,r.__n,p.ownerSVGElement!==void 0,o.__h!=null?[i]:null,a,i==null?G(o):i,o.__h),Je(a,o),o.__e!=i&&qe(o)))})}function Qe(e,t,r,a,n,o,i,p,c,m){var l,v,d,f,b,w,g,y=a&&a.__k||Ve,$=y.length;for(r.__k=[],l=0;l<t.length;l++)if((f=r.__k[l]=(f=t[l])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?ae(null,f,null,null,f):Array.isArray(f)?ae(O,{children:f},null,null,null):f.__b>0?ae(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=r,f.__b=r.__b+1,(d=y[l])===null||d&&f.key==d.key&&f.type===d.type)y[l]=void 0;else for(v=0;v<$;v++){if((d=y[v])&&f.key==d.key&&f.type===d.type){y[v]=void 0;break}d=null}ve(e,f,d=d||re,n,o,i,p,c,m),b=f.__e,(v=f.ref)&&d.ref!=v&&(g||(g=[]),d.ref&&g.push(d.ref,null,f),g.push(v,f.__c||b,f)),b!=null?(w==null&&(w=b),typeof f.type=="function"&&f.__k===d.__k?f.__d=c=Ke(f,c,e):c=Ye(e,f,d,y,b,c),typeof r.type=="function"&&(r.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=G(d))}for(r.__e=w,l=$;l--;)y[l]!=null&&(typeof r.type=="function"&&y[l].__e!=null&&y[l].__e==r.__d&&(r.__d=G(a,l+1)),Ze(y[l],y[l]));if(g)for(l=0;l<g.length;l++)We(g[l],g[++l],g[++l])}function Ke(e,t,r){for(var a,n=e.__k,o=0;n&&o<n.length;o++)(a=n[o])&&(a.__=e,t=typeof a.type=="function"?Ke(a,t,r):Ye(r,a,a,n,a.__e,t));return t}function J(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){J(r,t)}):t.push(e)),t}function Ye(e,t,r,a,n,o){var i,p,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(r==null||n!=o||n.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(n),i=null;else{for(p=o,c=0;(p=p.nextSibling)&&c<a.length;c+=2)if(p==n)break e;e.insertBefore(n,o),i=o}return i!==void 0?i:n.nextSibling}function Cr(e,t,r,a,n){var o;for(o in r)o==="children"||o==="key"||o in t||ne(e,o,null,r[o],a);for(o in t)n&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||ne(e,o,t[o],r[o],a)}function Xe(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||jr.test(t)?r:r+"px"}function ne(e,t,r,a,n){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||Xe(e.style,t,"");if(r)for(t in r)a&&r[t]===a[t]||Xe(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?a||e.addEventListener(t,o?tt:et,o):e.removeEventListener(t,o?tt:et,o);else if(t!=="dangerouslySetInnerHTML"){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(i){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function et(e){this.l[e.type+!1](h.event?h.event(e):e)}function tt(e){this.l[e.type+!0](h.event?h.event(e):e)}function ve(e,t,r,a,n,o,i,p,c){var m,l,v,d,f,b,w,g,y,$,X,D=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(c=r.__h,p=t.__e=r.__e,t.__h=null,o=[p]),(m=h.__b)&&m(t);try{e:if(typeof D=="function"){if(g=t.props,y=(m=D.contextType)&&a[m.__c],$=m?y?y.props.value:m.__:a,r.__c?w=(l=t.__c=r.__c).__=l.__E:("prototype"in D&&D.prototype.render?t.__c=l=new D(g,$):(t.__c=l=new A(g,$),l.constructor=D,l.render=Dr),y&&y.sub(l),l.props=g,l.state||(l.state={}),l.context=$,l.__n=a,v=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),D.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=P({},l.__s)),P(l.__s,D.getDerivedStateFromProps(g,l.__s))),d=l.props,f=l.state,v)D.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(D.getDerivedStateFromProps==null&&g!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(g,$),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(g,l.__s,$)===!1||t.__v===r.__v){l.props=g,l.state=l.__s,t.__v!==r.__v&&(l.__d=!1),l.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(ee){ee&&(ee.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(g,l.__s,$),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,f,b)})}l.context=$,l.props=g,l.state=l.__s,(m=h.__r)&&m(t),l.__d=!1,l.__v=t,l.__P=e,m=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(a=P(P({},a),l.getChildContext())),v||l.getSnapshotBeforeUpdate==null||(b=l.getSnapshotBeforeUpdate(d,f)),X=m!=null&&m.type===O&&m.key==null?m.props.children:m,Qe(e,Array.isArray(X)?X:[X],t,r,a,n,o,i,p,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),w&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=wr(r.__e,t,r,a,n,o,i,c);(m=h.diffed)&&m(t)}catch(ee){t.__v=null,(c||o!=null)&&(t.__e=p,t.__h=!!c,o[o.indexOf(p)]=null),h.__e(ee,t,r)}}function Je(e,t){h.__c&&h.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){h.__e(a,r.__v)}})}function wr(e,t,r,a,n,o,i,p){var c,m,l,v=r.props,d=t.props,f=t.type,b=0;if(f==="svg"&&(n=!0),o!=null){for(;b<o.length;b++)if((c=o[b])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,o[b]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=n?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),o=null,p=!1}if(f===null)v===d||p&&e.data===d||(e.data=d);else{if(o=o&&te.call(e.childNodes),m=(v=r.props||re).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!p){if(o!=null)for(v={},b=0;b<e.attributes.length;b++)v[e.attributes[b].name]=e.attributes[b].value;(l||m)&&(l&&(m&&l.__html==m.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Cr(e,d,v,n,p),l)t.__k=[];else if(b=t.props.children,Qe(e,Array.isArray(b)?b:[b],t,r,a,n&&f!=="foreignObject",o,i,o?o[0]:r.__k&&G(r,0),p),o!=null)for(b=o.length;b--;)o[b]!=null&&Ue(o[b]);p||("value"in d&&(b=d.value)!==void 0&&(b!==e.value||f==="progress"&&!b)&&ne(e,"value",b,v.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==e.checked&&ne(e,"checked",b,v.checked,!1))}return e}function We(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(a){h.__e(a,r)}}function Ze(e,t,r){var a,n;if(h.unmount&&h.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||We(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){h.__e(o,t)}a.base=a.__P=null}if(a=e.__k)for(n=0;n<a.length;n++)a[n]&&Ze(a[n],t,typeof e.type!="function");r||e.__e==null||Ue(e.__e),e.__e=e.__d=void 0}function Dr(e,t,r){return this.constructor(e,r)}function be(e,t,r){var a,n,o;h.__&&h.__(e,t),n=(a=typeof r=="function")?null:r&&r.__k||t.__k,o=[],ve(t,e=(!a&&r||t).__k=z(O,null,[e]),n||re,re,t.ownerSVGElement!==void 0,!a&&r?[r]:n?null:t.firstChild?te.call(t.childNodes):null,o,!a&&r?r:n?n.__e:t.firstChild,a),Je(o,e)}function rt(e,t){var r={__c:t="__cC"+Re++,__:e,Consumer:function(a,n){return a.children(n)},Provider:function(a){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.some(he)},this.sub=function(i){n.push(i);var p=i.componentWillUnmount;i.componentWillUnmount=function(){n.splice(n.indexOf(i),1),p&&p.call(i)}}),a.children}};return r.Provider.__=r.Consumer.contextType=r}te=Ve.slice,h={__e:function(e,t){for(var r,a,n;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),n=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),n=r.__d),n)return r.__E=r}catch(o){e=o}throw e}},Be=0,A.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},r),this.props)),e&&P(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),he(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),he(this))},A.prototype.render=O,q=[],Ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,oe.__r=0,Re=0;var H,k,at,ge=0,ye=[],ot=h.__b,nt=h.__r,it=h.diffed,st=h.__c,lt=h.unmount;function K(e,t){h.__h&&h.__h(k,e,ge||t),ge=0;var r=k.__H||(k.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function I(e){return ge=1,Ar(ct,e)}function Ar(e,t,r){var a=K(H++,2);return a.t=e,a.__c||(a.__=[r?r(t):ct(void 0,t),function(n){var o=a.t(a.__[0],n);a.__[0]!==o&&(a.__=[o,a.__[1]],a.__c.setState({}))}],a.__c=k),a.__}function pt(e,t){var r=K(H++,3);!h.__s&&Se(r.__H,t)&&(r.__=e,r.__H=t,k.__H.__h.push(r))}function ut(e,t){var r=K(H++,4);!h.__s&&Se(r.__H,t)&&(r.__=e,r.__H=t,k.__h.push(r))}function mt(e,t){var r=K(H++,7);return Se(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function dt(e){var t=k.context[e.__c],r=K(H++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(k)),t.props.value):e.__}function Mr(){ye.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(ie),e.__H.__h.forEach(ke),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}),ye=[]}h.__b=function(e){k=null,ot&&ot(e)},h.__r=function(e){nt&&nt(e),H=0;var t=(k=e.__c).__H;t&&(t.__h.forEach(ie),t.__h.forEach(ke),t.__h=[])},h.diffed=function(e){it&&it(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ye.push(t)!==1&&at===h.requestAnimationFrame||((at=h.requestAnimationFrame)||function(r){var a,n=function(){clearTimeout(o),ft&&cancelAnimationFrame(a),setTimeout(r)},o=setTimeout(n,100);ft&&(a=requestAnimationFrame(n))})(Mr)),k=null},h.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ie),r.__h=r.__h.filter(function(a){return!a.__||ke(a)})}catch(a){t.some(function(n){n.__h&&(n.__h=[])}),t=[],h.__e(a,r.__v)}}),st&&st(e,t)},h.unmount=function(e){lt&&lt(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ie)}catch(r){h.__e(r,t.__v)}};var ft=typeof requestAnimationFrame=="function";function ie(e){var t=k;typeof e.__c=="function"&&e.__c(),k=t}function ke(e){var t=k;e.__c=e.__(),k=t}function Se(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function ct(e,t){return typeof t=="function"?t(e):t}function Pr(e,t){for(var r in t)e[r]=t[r];return e}function _t(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function ht(e){this.props=e}(ht.prototype=new A).isPureReactComponent=!0,ht.prototype.shouldComponentUpdate=function(e,t){return _t(this.props,e)||_t(this.state,t)};var vt=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),vt&&vt(e)};var Tr=h.__e;h.__e=function(e,t,r){if(e.then){for(var a,n=t;n=n.__;)if((a=n.__c)&&a.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),a.__c(e,t)}Tr(e,t,r)};var bt=h.unmount;function xe(){this.__u=0,this.t=null,this.__b=null}function gt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function se(){this.u=null,this.o=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),bt&&bt(e)},(xe.prototype=new A).__c=function(e,t){var r=t.__c,a=this;a.t==null&&(a.t=[]),a.t.push(r);var n=gt(a.__v),o=!1,i=function(){o||(o=!0,r.__R=null,n?n(p):p())};r.__R=i;var p=function(){if(!--a.__u){if(a.state.__e){var m=a.state.__e;a.__v.__k[0]=function v(d,f,b){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(w){return v(w,f,b)}),d.__c&&d.__c.__P===f&&(d.__e&&b.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=b)),d}(m,m.__c.__P,m.__c.__O)}var l;for(a.setState({__e:a.__b=null});l=a.t.pop();)l.forceUpdate()}},c=t.__h===!0;a.__u++||c||a.setState({__e:a.__b=a.__v.__k[0]}),e.then(i,i)},xe.prototype.componentWillUnmount=function(){this.t=[]},xe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=function o(i,p,c){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(m){typeof m.__c=="function"&&m.__c()}),i.__c.__H=null),(i=Pr({},i)).__c!=null&&(i.__c.__P===c&&(i.__c.__P=p),i.__c=null),i.__k=i.__k&&i.__k.map(function(m){return o(m,p,c)})),i}(this.__b,r,a.__O=a.__P)}this.__b=null}var n=t.__e&&z(O,null,e.fallback);return n&&(n.__h=null),[z(O,null,t.__e?null:e.children),n]};var yt=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(se.prototype=new A).__e=function(e){var t=this,r=gt(t.__v),a=t.o.get(e);return a[0]++,function(n){var o=function(){t.props.revealOrder?(a.push(n),yt(t,e,a)):n()};r?r(o):o()}},se.prototype.render=function(e){this.u=null,this.o=new Map;var t=J(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},se.prototype.componentDidUpdate=se.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){yt(e,r,t)})};var Fr=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Nr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Er=typeof document!="undefined",zr=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};A.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(A.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var St=h.event;function Or(){}function Ir(){return this.cancelBubble}function Lr(){return this.defaultPrevented}h.event=function(e){return St&&(e=St(e)),e.persist=Or,e.isPropagationStopped=Ir,e.isDefaultPrevented=Lr,e.nativeEvent=e};var kt={configurable:!0,get:function(){return this.class}},xt=h.vnode;h.vnode=function(e){var t=e.type,r=e.props,a=r;if(typeof t=="string"){var n=t.indexOf("-")===-1;for(var o in a={},r){var i=r[o];Er&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in r&&i==null||(o==="defaultValue"&&"value"in r&&r.value==null?o="value":o==="download"&&i===!0?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!zr(r.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():n&&Nr.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),a[o]=i)}t=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=J(r.children).forEach(function(p){p.props.selected=a.value.indexOf(p.props.value)!=-1})),t=="select"&&a.defaultValue!=null&&(a.value=J(r.children).forEach(function(p){p.props.selected=a.multiple?a.defaultValue.indexOf(p.props.value)!=-1:a.defaultValue==p.props.value})),e.props=a}t&&r.class!=r.className&&(kt.enumerable="className"in r,r.className!=null&&(a.class=r.className),Object.defineProperty(a,"className",kt)),e.$$typeof=Fr,xt&&xt(e)};var $t=h.__r;h.__r=function(e){$t&&$t(e)};var $e=rt(),Br=typeof window!="undefined"?ut:pt,Gr=e=>(...t)=>{let r=dt(e),a=I({});return Br(()=>r.on("@changed",(n,o)=>{t.some(p=>p in o)&&a[1]({})}),[]),mt(()=>{let n=r.get(),o={};return t.forEach(i=>{o[i]=n[i]}),o.dispatch=r.dispatch,o},[a[0]])},_=Gr($e);var je=class extends Error{constructor(t){super("Validation error");this.validations=t}getValidations(){return this.validations}},Y=je;var jt=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),Hr={get:async(e,t)=>{var n;let{path:r,headers:a}=e.get().api;try{let o=await(await fetch(`${r}/${t}`,{headers:jt(a)})).json();if(typeof o!="object")throw new Error("Invalid response");return(n=o["hydra:member"])!=null?n:o}catch(o){throw e.dispatch("moduleState/set","error"),o}},post:async({api:e,dispatch:t},r,a)=>{let{path:n,headers:o}=e,i={method:"POST",headers:jt(o),body:JSON.stringify(a)};try{var p=await(await fetch(`${n}/${r}`,i)).json()}catch(c){throw t("moduleState/set","error"),c}if(p["@id"])return p;throw p.violations?new Y(p.violations):(t("moduleState/set","error"),new Error("Invalid result"))}},j=Hr;var Ct=function(e,t,r,a){var n;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],p=t[o]?(t[0]|=i?1:2,r[t[o++]]):t[++o];i===3?a[0]=p:i===4?a[1]=Object.assign(a[1]||{},p):i===5?(a[1]=a[1]||{})[t[++o]]=p:i===6?a[1][t[++o]]+=p+"":i?(n=e.apply(p,Ct(e,p,r,["",null])),a.push(n),p[0]?t[0]|=2:(t[o-2]=0,t[o]=n)):a.push(p)}return a},wt=new Map;function Dt(e){var t=wt.get(this);return t||(t=new Map,wt.set(this,t)),(t=Ct(this,t.get(e)||(t.set(e,t=function(r){for(var a,n,o=1,i="",p="",c=[0],m=function(d){o===1&&(d||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,d,i):o===3&&(d||i)?(c.push(3,d,i),o=2):o===2&&i==="..."&&d?c.push(4,d,0):o===2&&i&&!d?c.push(5,0,!0,i):o>=5&&((i||!d&&o===5)&&(c.push(o,0,i,n),o=6),d&&(c.push(o,d,0,n),o=6)),i=""},l=0;l<r.length;l++){l&&(o===1&&m(),m(l));for(var v=0;v<r[l].length;v++)a=r[l][v],o===1?a==="<"?(m(),c=[c],o=3):i+=a:o===4?i==="--"&&a===">"?(o=1,i=""):i=a+i[0]:p?a===p?p="":i+=a:a==='"'||a==="'"?p=a:a===">"?(m(),o=1):o&&(a==="="?(o=5,n=i,i=""):a==="/"&&(o<5||r[l][v+1]===">")?(m(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):a===" "||a==="	"||a===`
`||a==="\r"?(m(),o=2):i+=a),o===3&&i==="!--"&&(o=4,c=c[0])}return m(),c}(e)),t),arguments,[])).length>1?t:t[0]}var Rr=(e,t,...r)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(a=>a.trim()).map(a=>a.indexOf("cvio-ab-")!==0?`cvio-ab-${a}`:a).join(" ")),z(e,t,...r)),s=Dt.bind(Rr);var W=e=>{let{dispatch:t,privacyPolicyLink:r}=_("privacyPolicyLink");return r?s`
      <a class="link-primary" href="${r}" target="_new">
        ${e.children}
      </a>
    `:s`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `};var le=e=>{let{appointment:t}=_("appointment");return s`
    <span class="fw-bold">
      ${t.start?C.formatDateTime(t.start):null}
    </span>
  `};var Ce={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja a foglal\xE1st?","All inputed data will be lost.":"Mindent megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pontfoglal\xE1s folytat\xE1sa","Cancel appointment":"Foglal\xE1s megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues is available for the selected process":"Egy munkat\xE1rsunk sem el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"Az \xD6n adatai",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m","Appointment details verification":"Foglal\xE1si adatok ellen\u0151rz\xE9se","Appointment summary":"Foglal\xE1si \xF6sszes\xEDt\u0151",Price:"\xC1r","Confirm appointment":"Id\u0151pontfoglal\xE1s j\xF3v\xE1hagy\xE1sa","%customer%'s examination":"%customer% vizsg\xE1lata","Your appointment have been recorded.":"Foglal\xE1s\xE1t r\xF6gz\xEDtett\xFCk.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsg\xE1lat kezdete: %start%, k\xE9rj\xFCk \xE9rkezzen 5 perccel kor\xE1bban.","If you have any further questions, please contact us through our customer service.":"Ha k\xE9rd\xE9se van vagy szeretn\xE9 m\xF3dos\xEDtani a foglal\xE1s\xE1t, k\xE9rj\xFCk keresse szak\xFCzlet\xFCnket.","Appointment booked!":"Id\u0151pont lefoglalva!","examiner: %examiner%":"v\xE9gzi: %examiner%","It takes up to %length% minutes":"Id\u0151tartam: %length% perc","I have accepted the privacy policy":s`Elfogadom az <${W}>adatkezelési tájékoztatóban<//> foglaltakat`,"I agree to the use of my medical records according to privacy policy":"Hozz\xE1j\xE1rulok eg\xE9szs\xE9g\xFCgyi adataim adatkezel\xE9si t\xE1j\xE9koztat\xF3ban foglaltak szerinti kezel\xE9s\xE9hez","Privacy policy":"Adatkezel\xE9si t\xE1j\xE9koztat\xF3",Close:"Bez\xE1r\xE1s","Start Time":"Id\u0151pont",Subject:"T\xE1rgy",Location:"Helysz\xEDn","Appointment booking":"Id\u0151pontfoglal\xE1s","Select eye examination type":"Vizsg\xE1latt\xEDpus v\xE1laszt\xE1sa","Select a vision expert":"L\xE1t\xE1sszak\xE9rt\u0151 v\xE1laszt\xE1sa","Select your desired appointment time":"Id\u0151pont v\xE1laszt\xE1sa","Enter customer details":"\xDCgyf\xE9ladatok megad\xE1sa",Comment:"Megjegyz\xE9s","change date":"id\u0151pont cser\xE9je"},ro:{"Are you sure you want to cancel this appointment?":"Sunte\u021Bi sigur c\u0103 dori\u021Bi s\u0103 renun\u021Ba\u021Bi la programare?","All inputed data will be lost.":"Datele \xEEntroduse se vor pierde.","No, continue editing appointment":"Nu, continuare programare.","Cancel appointment":"\xCEntreruperea program\u0103rii","Appointment booking failed":"Programare nereu\u0219it\u0103.","Due to an unexpected error appointment could not be booked, please restart the process":"A ap\u0103rut o eroare. V\u0103 rug\u0103m, \xEEncepe\u021Bi din nou procesul.","None of our colleagues is available for the selected process":"Nu avem angaja\u021Bi disponibili pentru protocolul selectat.","First free":"Primul liber","For finding the nearest free time slot.":"\xCEn cel mai scurt timp.","@abbrSunday":"D","@abbrMonday":"L","@abbrTuesday":"M","@abbrWednesday":"Mi","@abbrThursday":"J","@abbrFriday":"V","@abbrSaturday":"S",January:"Ianuarie",February:"Februarie",March:"Martie",April:"Aprilie",May:"Mai",June:"Junie",July:"Julie",August:"August",September:"Septembrie",October:"Octombrie",November:"Noiembrie",December:"Decembrie","There are no free appointment times for this day":"Nu sunt ore libere la data selectat\u0103.","The next free slot is available on %date%":"Urm\u0103torul timp liber este: %date%","Go to date":"Salt la dat\u0103","Click here to search for the next free appointment":"Click aici pentru c\u0103utarea urm\u0103torului timp liber","Last name":"Nume","First name":"Prenume",Birth:"Data na\u0219tere",Gender:"Gen",SSN:"CNP",Country:"\u021Aara",State:"Megye","Postal code":"Cod po\u0219tal",City:"Ora\u0219","Street address":"Strada",Mobile:"Num\u0103r de tel mobil","Select another process":"Selectare protocol diferit","@abbrMinute":"min.","Not specified":"Nu e specificat",Male:"B\u0103rbat",Female:"Femeie",Next:"Mai departe","This field is required.":"Acest c\u0103mp este necesar.","Invalid email address.":"Adresa da mail gre\u0219it\u0103.","Your information":"Datele personale",Name:"Nume","Date of birth":"Data na\u0219tere",Address:"Adresa","Phone number":"Num\u0103r de telefon","Appointment details verification":"Verificare datele rezerv\u0103rii","Appointment summary":"Sumar rezervare",Price:"Pre\u021B","Confirm appointment":"Rezervare","%customer%'s examination":"Consulta\u021Bie %customer%","Your appointment have been recorded.":"Rezervare salvat\u0103","The examination will start at %start%, please arrive 5 minutes early.":"V\u0103 rug\u0103m s\u0103 v\u0103 prezenta\u021Bi cu 5 minute mai devreme. Ora inceperii rezerv\u0103rii: %start%","If you have any further questions, please contact us through our customer service.":"Dac\u0103 ave\u021Bi alte \xEEntreb\u0103ri, v\u0103 rug\u0103m contacta\u021Bi serviciul clien\u021Bi.","Appointment booked!":"Programare rezervat\u0103!","examiner: %examiner%":"examinator: %examiner%","It takes up to %length% minutes":"Durata: %length% minute","I have accepted the privacy policy":s`Accept <${W}>Termenile și condițiile<//>`,"I agree to the use of my medical records according to privacy policy":"Dau acordul pentru prelucrarea datelor medicale conform Termenilor \u0219i condi\u021Biilor generale.","Privacy policy":"Termeni \u0219i condi\u021Bii",Close:"\xCEnchidere","Start Time":"Data",Subject:"Subiect",Location:"Loca\u021Bie","Appointment booking":"Programare","Select eye examination type":"Selectare tip de examinare","Select a vision expert":"Selectare specialist \xEEn vedere","Select your desired appointment time":"Selectare dat\u0103 \u0219i or\u0103","Enter customer details":"Datele clientului","change date":"modificare dat\u0103"},hr:{"Are you sure you want to cancel this appointment?":"Jeste li sigurni da \u017Eelite otkazati ovaj termin?","All inputed data will be lost.":"Svi uneseni podaci bit \u0107e izgubljeni.","No, continue editing appointment":"Ne, nastavi s ure\u0111ivanjem termina","Cancel appointment":"Otka\u017Ei termin","Appointment booking failed":"Rezervacija termina nije uspjela","Due to an unexpected error appointment could not be booked, please restart the process":"Zbog neo\u010Dekivane pogre\u0161ke termin nije mogu\u0107e rezervirati, molimo ponovno pokrenite proces","None of our colleagues is available for the selected process":"Nitko od na\u0161ih kolega nije dostupan za odabrani proces","First free":"Prvo slobodno","For finding the nearest free time slot.":"Da odaberete \u0161to raniji termin.","@abbrSunday":"N","@abbrMonday":"P","@abbrTuesday":"U","@abbrWednesday":"S","@abbrThursday":"\u010C","@abbrFriday":"P","@abbrSaturday":"S",January:"Sije\u010Dnja",February:"Velja\u010Da",March:"O\u017Eujak",April:"Travanj",May:"Svibanj",June:"Lipanj",July:"Srpanj",August:"Kolovoz",September:"Rujan",October:"Listopad",November:"Studeni",December:"Prosinac","There are no free appointment times for this day":"Za ovaj dan nema slobodnih termina","The next free slot is available on %date%":"Datum sljede\u0107eg slobodnog termina je %date%","Go to date":"Sko\u010Di na datum","Click here to search for the next free appointment":"Kliknite ovdje za tra\u017Eenje sljede\u0107eg slobodnog termina","Last name":"Prezime","First name":"Ime",Birth:"Datum ro\u0111enja",Gender:"Spol",SSN:"MBO broj",Country:"Zemlja",State:"Dr\u017Eava","Postal code":"Po\u0161tanski broj",City:"Grad","Street address":"Ulica",Mobile:"Mobilni","Select another process":"Odaberite drugi protokol","@abbrMinute":"m.","Not specified":"Nije specificirano",Male:"Mu\u0161karac",Female:"\u017Dena",Next:"Sljede\u0107i","This field is required.":"Ovo polje je obavezno.","Invalid email address.":"Pogre\u0161na adresa e-maila.","Your information":"Va\u0161i podaci",Name:"Ime","Date of birth":"Datum ro\u0111enja",Address:"Adresa","Phone number":"Broj telefona","Appointment details verification":"Provjerite detalje rezervacije","Appointment summary":"Sa\u017Eetak rezervacije",Price:"Cjena","Confirm appointment":"Odobrenje rezervacije termina","%customer%'s examination":"%customer% pregleda","Your appointment have been recorded.":"Va\u0161a rezervacija je zabilje\u017Eena.","The examination will start at %start%, please arrive 5 minutes early.":"Po\u010Detak pregleda: %start%, molimo do\u0111ite 5 minuta ranije.","If you have any further questions, please contact us through our customer service.":"Ako imate dodatnih pitanja, obratite nam se putem na\u0161e korisni\u010Dke slu\u017Ebe.","Appointment booked!":"Termin rezerviran!","examiner: %examiner%":"ispitiva\u010D: %examiner%","It takes up to %length% minutes":"Trajanje: %length% minuta","I have accepted the privacy policy":s`Prihvaćam <${W}>što je zapisano<//> u informativnom listu za upravljanje podacima`,"I agree to the use of my medical records according to privacy policy":"Pristajem na obradu mojih zdravstvenih podataka u skladu s informacijama o upravljanju podacima","Privacy policy":"Informativni list za upravljanje podatke",Close:"Zatvaranje","Start Time":"Vrijeme po\u010Detka",Subject:"Objekat",Location:"Mjesto","Appointment booking":"Zaka\u017Eite termin","Select eye examination type":"Izbor vrste pregleda","Select a vision expert":"Odaberite stru\u010Dnjaka za vid","Select your desired appointment time":"Odaberite \u017Eeljeno vrijeme termina","Enter customer details":"Unos podataka o klijentu"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepted the privacy policy":s`I accept the terms of <${W}>privacy policy<//>`,"Your appointment starts at startTime":s`Your appointment starts at <${le}//>`,"change date":"change date"}},u=(e,t={},r)=>{r=r||_("language","translationOverrides");let a=r.language,n=Ce[a]||Ce[a.substring(0,2)]||Ce.en;e=r.translationOverrides[e]||n[e]||e;for(let o in t)e=e.replace(new RegExp("%"+o+"%","g"),t[o]);return e};var At=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function Z({appointment:e,calendars:t,calendarRoleCheckMode:r}){var a=e?e.eye_examination_process:null;let n=function(o,i){if(!o.only_specific_processes_allowed)return!0;let p=i["@id"].split("/"),c=parseInt(p[p.length-1]);return o.allowed_process_ids.indexOf(c)!=-1};return t.filter(function(o){if(!a||!a.highestRequiredRole)return!0;if(typeof o.online_reservation_allowed!="undefined"&&o.online_reservation_allowed==!1||!n(o,a))return!1;for(let i=0;i<At.length;i++){let p=At[i];if(!(!o.user||o.user.roles.indexOf(p.name)==-1)&&(a.highestRequiredRole==p.name||r=="hierachical"&&p.includes.indexOf(a.highestRequiredRole)!=-1))return!0}return!1})}function T(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var we=5,Vr=e=>{var t=[new Date(e)];for(let r=0;r<we-1;r++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(r){for(let a=0;a<we;a++)if(T(this[a],r))return!0},t},ce=[];function De(e){if(ce.length)return ce;for(var t=e||new Date,r=0;r<=100;r++)ce.push(Vr(t)),t=new Date(t),t.setDate(t.getDate()+we);return ce}function Q(e,t){return T(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var Ae={hu:"%Y. %M. %D."},Mt=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),Pt=e=>{let{language:t}=_("language");var r=Ae[t]||Ae[t.substring(0,2)]||Ae.hu;e=new Date(e);var a=e.getMonth()+1;return r.replace("%Y",e.getFullYear()).replace("%M",`${a<10?"0":""}${a}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},Ur=e=>Pt(e)+" "+Mt(e),C={formatTime:Mt,formatDate:Pt,formatDateTime:Ur};var Tt=["hu"],Ft=e=>(e=e||_("language").language,Tt.indexOf(e)!=-1||Tt.indexOf(e.substring(0,2))!=-1),qr=({first_name:e,last_name:t},r)=>Ft(r)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),L={format:qr,shouldSwitchNameOrder:Ft};var B=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93","+..-..-...-...."],["\xC5land Islands","ax","358",""],["Albania (Shqip\xEBri)","al","355","+...(...)...-..."],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (\xD6sterreich)","at","43","+..(...)...-...."],["Azerbaijan (Az\u0259rbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973","+...-....-...."],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375","+...(..)...-..-.."],["Belgium (Belgi\xEB)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (B\xE9nin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (R\xE9publique centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (\u4E2D\u56FD)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["C\xF4te d\u2019Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Cura\xE7ao","cw","599","+...-...-....",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357","+...-..-...-..."],["Czech Republic (\u010Cesk\xE1 republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (Rep\xFAblica Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (F\xF8royar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane fran\xE7aise)","gf","594","+...-.....-...."],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guin\xE9e)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (\u9999\u6E2F)","hk","852","+... .... ...."],["Hungary (Magyarorsz\xE1g)","hu","36","+..(...)...-..."],["Iceland (\xCDsland)","is","354","+... ... ...."],["India (\u092D\u093E\u0930\u0924)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98","+..(...)...-...."],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (\u65E5\u672C)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962","+...-.-....-...."],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965","+...-....-...."],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996","+...(...)...-..."],["Laos (\u0EA5\u0EB2\u0EA7)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (\u6FB3\u9580)","mo","853","+...-....-...."],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (M\xE9xico)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212","+...-..-....-..."],["Mozambique (Mo\xE7ambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95","+..-...-..."],["Namibia (Namibi\xEB)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968","+...-..-...-..."],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970","+...-..-...-...."],["Panama (Panam\xE1)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Per\xFA)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974","+...-....-...."],["R\xE9union (La R\xE9union)","re","262","+...-.....-...."],["Romania (Rom\xE2nia)","ro","40","+..-..-...-...."],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239","+...-..-....."],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966","+...-..-...-...."],["Senegal (S\xE9n\xE9gal)","sn","221","+...-..-...-...."],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82","+..-..-...-...."],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211","+...-..-...-...."],["Spain (Espa\xF1a)","es","34","+.. ... ... ..."],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94","+..-..-...-...."],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963","+...-..-....-..."],["Taiwan (\u53F0\u7063)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (\u0E44\u0E17\u0E22)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216","+...-..-...-..."],["Turkey (T\xFCrkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380","+...(..)...-..-.."],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (O\u02BBzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Citt\xE0 del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Vi\u1EC7t Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],pe={},Nt={},Et=function(e,t,r){t in pe||(pe[t]=[]);var a=r||0;pe[t][a]=e};for(var F=0;F<B.length;F++){if(x=B[F],B[F]={name:x[0],iso2:x[1],dialCode:x[2],priority:x[4]||0},x[3]&&(B[F].format=x[3]),x[5])for(B[F].hasAreaCodes=!0,ue=0;ue<x[5].length;ue++)zt=x[2]+x[5][ue],Et(x[1],zt);Nt[B[F].iso2]=F,Et(x[1],x[2],x[4])}var x,zt,ue,Jr={allCountries:B,iso2Lookup:Nt,allCountryCodes:pe},Me=Jr.allCountries;var Kr={hu_HU:{"06":"+36","36":"+36"}},Pe=(e,t)=>{let r=Kr[e]||{};t=(t||"").trim();var a=t.indexOf("+")==0;if(t=t.replace(/\D/g,""),!t.length)return null;a&&(t=`+${t}`),t.indexOf("00")==0&&(t=`+${t.substring(2)}`);for(let o=0;o<Object.keys(r).length;o++){let i=Object.keys(r)[o];if(t.indexOf(i)==0)return`${r[i]}.${t.substring(i.length)}`}for(let o=0;o<Me.length;o++){let{dialCode:i}=Me[o];if(t.indexOf(`+${i}`)==0)return`+${i}.${t.substring(i.length+1)}`}let n=Object.keys(r)[0];return`${n?r[n]:"+36"}.${t}`};function M(e,t,r){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate():null}var Ot=e=>{let t={},r={},a={dispatch(n,o){if(n!=="@dispatch"&&a.dispatch("@dispatch",[n,o,t[n]]),t[n]){let i;t[n].forEach(p=>{let c=t[n].includes(p)&&p(r,o,a);c&&typeof c.then!="function"&&(r={...r,...c},i={...i,...c})}),i&&a.dispatch("@changed",i)}},get:()=>r,on(n,o){return(t[n]||(t[n]=[])).push(o),()=>{t[n]=t[n].filter(i=>i!==o)}}};return e.forEach(n=>{n&&n(a)}),a.dispatch("@init"),a};function It(e){e.on("@init",()=>({eyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:t},r)=>(r.length==1&&(e.dispatch("appointment/set",{eye_examination_process:r[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected")),{eyeExaminationProcesses:r}))}var Te=["process","calendar","appointment","customer","summary"];function Lt(e){var t=(a,n)=>Te.filter(o=>a.indexOf(o)!=-1&&o!=n),r=(a,n)=>Te.filter(o=>a.indexOf(o)!=-1||o==n);e.on("@init",()=>({currentStep:"process",availableSteps:Te,calendarStepShouldBeHidden:!1,showFirstAvailableUserItem:!0})),e.on("currentStep/set",({availableSteps:a,currentStep:n},o)=>(document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:a.indexOf(o)!=-1?o:n})),e.on("calendarStepShouldBeHidden/set",({availableSteps:a},n)=>({calendarStepShouldBeHidden:n,availableSteps:t(a,"calendar")})),e.on("showFirstAvailableUserItem/set",(a,n)=>({showFirstAvailableUserItem:n})),e.on("currentStep/next",({currentStep:a,availableSteps:n})=>{var o=n.indexOf(a);return document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:o<n.length-1?n[o+1]:a}}),e.on("currentStep/previous",({currentStep:a,availableSteps:n})=>{var o=n.indexOf(a);return document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:o>0?n[o-1]:a}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:a,availableSteps:n,currentStep:o})=>{if(a.length==1)return document.querySelector(".cvio-ab-content").scrollTop=0,{availableSteps:n=t(n,"process"),currentStep:o=="process"?n[0]:o}}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:a,appointment:n,calendars:o,currentStep:i,calendarStepShouldBeHidden:p,calendarRoleCheckMode:c})=>{if(!p){var m=Z({appointment:n,calendars:o,calendarRoleCheckMode:c});return{availableSteps:r(a,"calendar")}}})}function Bt(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},r)=>({appointment:Object.assign(t,r)})),e.on("showAppointmentComment/set",(t,r)=>({showAppointmentComment:r})),e.on("constantAppointmentCommentText/set",(t,r)=>({constantAppointmentCommentText:r}))}function Gt(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},r)=>(t.headers=Object.assign(t.headers,r),{api:t})),e.on("api/setPath",({api:t},r)=>(t.path=r,{api:t}))}function Ht(e){e.on("@init",()=>({language:navigator.language,translationOverrides:{}})),e.on("language/set",(t,r)=>({language:r})),e.on("translationOverrides/set",(t,r)=>({translationOverrides:r}))}function me(e,{visible:t}={visible:!1}){return r=>{r.on("@init",()=>({[e]:t})),r.on(`${e}/set`,(a,n)=>({[e]:n}))}}var Yr=["idle","loading","error","success"];function Rt(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},r)=>(r=Yr.indexOf(r)!=-1?r:t,r=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:r}))}function Vt(e){e.on("@init",()=>({store:null})),e.on("store/set",({store:t},r)=>({store:r}))}function Ut(e){e.on("@init",()=>({calendars:[],calendarRoleCheckMode:"hierachical"})),e.on("calendars/set",(t,r)=>({calendars:r.filter(({user:a})=>a)})),e.on("calendarRoleCheckMode/set",(t,r)=>({calendarRoleCheckMode:r}))}function qt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),{selectedDate:t}}),e.on("selectedDate/set",(t,r)=>({selectedDate:r}))}var Wr=(e,t)=>{let{appointment:r,selectedCalendar:a,nextFreeSlots:n}=e,o=n[M(r,a,t)];return o&&o.status!="incomplete"},R=async(e,t)=>{let{appointment:r,selectedCalendar:a,firstEligibleTime:n}=e.get();if(!r.eye_examination_process||Zr(e,t)||Wr(e.get(),t))return;let o=await j.get(e,`appointment_next_free_slots?${Qr(e,t)}`);if(o.length==0){var i=new Date(t);return i.setDate(t.getDate()+6),e.dispatch("nextFreeSlots/add",Jt(e,t,i)),R(e,i)}let p=new Date(o[o.length-1].start);var c=Jt(e,t,p),m=null;for(let l=0;l<o.length;l++){let v=o[l],d=new Date(v.start),f=M(r,a,d);c[f].length&&c[f][c[f].length-1].start==v.start||d<n||(c[f].status="incomplete",c[f].slots||(c[f].slots=[]),c[f].slots.push(v),m&&m!=f&&(c[m].status="complete"),m!=f&&(m=f))}return e.dispatch("nextFreeSlots/add",c),Q(p,t)&&p.setDate(t.getDate()+7),R(e,p)},Zr=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>21,Qr=(e,t)=>{let{appointment:r,selectedCalendar:a}=e.get();var n={process:r.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return a?n.calendar=a["@id"]:n.store=e.get().store["@id"],Object.keys(n).map(o=>`${o}=${n[o]}`).join("&")},Jt=(e,t,r)=>{let{appointment:a,selectedCalendar:n}=e.get();var o=new Date(t);o.setHours(0),o.setMinutes(0);for(var i={};o<=r;)i[M(a,n,o)]={status:"empty"},o.setDate(o.getDate()+1);return i};function Kt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:t,firstEligibleTime:t,autoselectNextFreeSlot:!1}}),e.on("firstEligibleTime/set",(t,r)=>{var a=new Date;if(r=="now")return e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a};if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),r=="tomorrow")return{firstEligibleDate:a,firstEligibleTime:a};if(r=="tomorrowNoon"){var n=new Date(a);return n.setHours(12),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="plus24Hours"){var n=new Date;return n.setDate(n.getDate()+1),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="dayAfterTomorrow")return a.setDate(a.getDate()+1),e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a}}),e.on("selectedDate/set",async t=>{R(e,t.selectedDate)}),e.on("bookerInit",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("appointment/set",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("appointment/selectSlot",async({appointment:t,calendars:r,currentStep:a,autoselectNextFreeSlot:n},o)=>{if(a==="appointment"){var i=null;for(let p=0;p<r.length;p++)if(o.calendar["@id"]==r[p]["@id"])var i=r[p];if(!i)throw new Error("Could not find calendar");e.dispatch("appointment/set",{start:o.start,end:o.end,calendar:i}),e.dispatch("currentStep/next")}}),e.on("autoselectNextFreeSlot/set",(t,r)=>({autoselectNextFreeSlot:r})),e.on("nextFreeSlots/add",({nextFreeSlots:t,autoselectNextFreeSlot:r},a)=>{var n={nextFreeSlots:Object.assign(t,a)};if(!r)return n;for(let o in t)if(t[o].status!="empty"&&t[o].slots.length>0){e.dispatch("appointment/selectSlot",t[o].slots[0]),n.autoselectNextFreeSlot=!1;break}return n})}var Xr=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},ea=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ta=(e,t)=>{e==null||e===""||ea.test(e.trim().toLowerCase())||t.errors.push("Invalid email address.")};function Yt(e){e.on("@init",()=>({customerForm:{},customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:t,customerFormGlobalErrors:r},a)=>({customerForm:Object.assign(t,a.customerForm||{}),customerFormGlobalErrors:a.customerFormGlobalErrors||r})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:r})=>{let{customer:a}=r;var n=!1;if(Object.keys(t).forEach(o=>{t[o].errors=[],t[o].required&&Xr(a[o],t[o]),o=="email"&&ta(a[o],t[o]),t[o].errors.length&&(n=!0)}),n)return{customerForm:t,customerFormGlobalErrors:[]};e.dispatch("currentStep/next")})}function Wt(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(t,r)=>({headerTitle:r}))}function Zt(e){e.on("@init",()=>({priceComment:null})),e.on("priceComment/set",(t,r)=>({priceComment:r}))}function Qt(e){e.on("@init",()=>({showPrice:!0})),e.on("showPrice/set",(t,r)=>({showPrice:r}))}function Xt(e){e.on("@init",()=>({showExaminerName:null})),e.on("showExaminerName/set",(t,r)=>({showExaminerName:r}))}function er(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(t,r)=>({booking:r}))}function tr(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(t,r)=>({country:r}))}function rr(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(t,r)=>({selectedCalendar:r}))}function ar(e){e.on("@init",()=>({privacyPolicy:null,privacyPolicyLink:null,medicalConsent:"explicit"})),e.on("bookerInit",async t=>{var r=await j.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let a=0;a<r.length;a++)if(new Date(r[a].valid_until)>new Date)return e.dispatch("privacyPolicy/set",r[a]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(t,r)=>({privacyPolicy:r})),e.on("privacyPolicyLink/set",(t,r)=>({privacyPolicyLink:r})),e.on("medicalConsent/set",(t,r)=>({medicalConsent:r}))}function or(e){e.on("@init",()=>({locationName:null,locationAddress:null,showLocation:!0})),e.on("locationName/set",(t,r)=>({locationName:r})),e.on("locationAddress/set",(t,r)=>({locationAddress:r})),e.on("showLocation/set",(t,r)=>({showLocation:r}))}var ra=me("closeConfirmModalState"),aa=me("globalModalState",{visible:!0}),oa=me("privacyPolicyModalState"),nr=()=>Ot([It,Lt,Bt,Rt,Ht,Gt,oa,Vt,Ut,qt,Kt,Yt,ar,ra,aa,Wt,er,tr,rr,Zt,Qt,Xt,or]);var Fe=e=>{let{currentStep:t,availableSteps:r,dispatch:a,booking:n}=_("currentStep","availableSteps","booking");return s`
    <button type="button" onClick=${()=>a("currentStep/previous")}
      class="${t==r[0]||n?"invisible":""} btn btn-outline-light">
      ←
    </button>
  `};var N=()=>s`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var E=e=>{let t=_(e.modalStateStore),r=t[e.modalStateStore],[a,n]=I(!1),[o,i]=I(!1),[p,c]=I(!1);r&&!a&&(i(!0),setTimeout(()=>{c(!0),n(!0)},0)),!r&&a&&(c(!1),setTimeout(()=>{i(!1),n(!1)},100));let m=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return s`
    <div class="modal text-dark fade ${p?"show":""}" tabindex="-1" style="${o?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?s`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${u(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?s`<p>${u(e.content)}</p>`:s`<${N}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?s`
            <div class="modal-footer">
              ${e.cancelButtonLabel?s`
                <button type="button" class="btn btn-secondary" onClick=${m}>
                  ${u(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?s`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${u(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var Ne=e=>{let{dispatch:t}=_();return s`
    <button type="button" class="btn btn-outline-light" onClick=${()=>t("closeConfirmModalState/set",!0)}>X</button>
    <${E} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${()=>t("close")}/>
  `};var ir=({customer:e,customerAddress:t})=>s`
      <div>
        <div class="mb-1">
          ${u("Your information")}:
        </div>
        <div class="fw-bold">
          ${e.first_name&&e.last_name?s`${u("Name")}: ${L.format(e)}`:""}
        </div>
        <div>
          ${e.birth?s`${u("Date of birth")}: ${C.formatDate(e.birth)}`:""}
        </div>
        <div>
          ${e.gender?s`${u("Gender")}: ${e.gender=="m"?"F\xE9rfi":"N\u0151"}`:""}
        </div>
        <div>
            ${e.ssn?s`${u("SSN")}: ${e.ssn}`:""}
        </div>
        <div>
          ${t?s`${u("Address")}: ${t}`:""}
        </div>
        <div>
          ${e.mobile?s`${u("Phone number")}: ${e.mobile}`:""}
        </div>
        <div>
          ${e.email?s`Email: ${e.email}`:""}
        </div>
      </div>
  `;var ca=async e=>{try{var t=await na(e)}catch(r){if(r instanceof Y){ia(e,r);return}throw r}await sa(e,t),await la(e,t),e.dispatch("moduleState/set","success")},na=async e=>{let t=Object.assign({},e.appointment.customer,{medical_records_allowed:e.medicalConsent!="disabled"?!0:null,country:e.country,mobile:e.appointment.customer.mobile?Pe(e.store.chain.language,e.appointment.customer.mobile):null});return Object.keys(t).forEach(r=>{typeof t[r]=="string"&&(t[r]=t[r].trim())}),await j.post(e,"customers",t)},ia=async(e,t)=>{let{customerForm:r}=e;var a=[];for(let n=0;n<t.getValidations().length;n++){let{propertyPath:o,message:i}=t.getValidations()[n];if(o==""){a.push(i);continue}r[o].errors||(r[o].errors=[]),r[o].errors.push(i)}e.dispatch("customerForm/set",{customerForm:r,customerFormGlobalErrors:a}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},sa=async(e,t)=>{await j.post(e,"customer_consents",{customer:t["@id"],approved_at:new Date,medical_records_allowed:e.medicalConsent!="disabled",source:"api"})},la=async(e,t)=>{let{appointment:r,language:a,translationOverrides:n,constantAppointmentCommentText:o}=e,i=o||"";r.comment&&(i=(i?i+`

`:"")+r.comment),await j.post(e,"appointment_events",Object.assign({},r,{customer:t["@id"],eye_examination_process:r.eye_examination_process["@id"],calendar:r.calendar["@id"],comment:i||void 0,title:u("%customer%'s examination",{customer:L.format(t,a)},{language:a,translationOverrides:n}),status:"booked",should_send_confirmation_email:!0,should_send_reminder_email:!0,source:"online"}))},sr=e=>{var t=_("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store","translationOverrides","constantAppointmentCommentText","medicalConsent");let{booking:r,moduleState:a,dispatch:n}=t;return s`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{n("booking/set",!0);try{await ca(t)}catch(i){throw n("moduleState/set","error"),i}}} disabled=${a!="idle"}
        class="btn btn-primary btn-lg">
        ${r&&a=="idle"?s`<${N}/>`:u("Confirm appointment")}
      </button>
    </div>
  `};var Ee={HUF:0},pa=(e,t)=>{var r=e.price_list.currency,a={style:"currency",currency:r};return Ee[r]!=null&&(a.maximumFractionDigits=Ee[r],a.minimumFractionDigits=Ee[r]),new Intl.NumberFormat(t,a)},de=({process:e})=>{if(!e)return s``;let{store:t,language:r,showPrice:a}=_("store","language","showPrice");if(!a)return s``;let n=e.process_services;var o=null,i=null,p=t.price_list.id;n.forEach(m=>{m.service.packagings.forEach(l=>{l.currentPrices.forEach(v=>{v.price_list.id==p&&((o==null||o>v.value)&&(o=v.value),(i==null||i<v.value)&&(i=v.value))})})});var c=pa(t,r);return o==null||i==null?s``:o==i?s`${c.format(o)}`:s`${c.format(o)} - ${c.format(i)}`};var fe=e=>{let{appointment:t,language:r,currentStep:a,store:n,selectedCalendar:o,priceComment:i,showPrice:p,showExaminerName:c,locationName:m,locationAddress:l,showLocation:v,dispatch:d}=_("appointment","language","currentStep","store","selectedCalendar","priceComment","showPrice","showExaminerName","locationName","locationAddress","showLocation");if(!n)return;var f=["state","postal_code","city","street_address"],b=[];f.forEach($=>{!t.customer[$]||b.push(t.customer[$])});var w=t.calendar||o,g={dateTimeStart:t.start?C.formatDateTime(t.start):null,dateTimeEnd:t.end?C.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:c&&w?w.user.name:null,customer:t.customer,customerAddress:b.join(", "),showLocation:v,locationName:m!==null?m:n.name,locationAddress:l!==null?l:n.postal_code+" "+n.city+", "+n.street_address,appointmentComment:t.comment};let y=()=>{d("currentStep/set","appointment")};return s`
    <ul class="list-group${a=="summary"?"":" text-end"}">
      ${a!="summary"?s`<li class="list-group-item fw-bold">${u("Appointment summary")}</li>`:null}
      ${g.processName?s`
        <li class="list-group-item">
          <div>${u("Subject")}:</div>
          <div class="fw-bold">${g.processName}</div>
          <div>
            ${g.examinerName?s`${u("examiner: %examiner%",{examiner:g.examinerName})}`:null}
          </div>
        </li>
      `:""}
      ${g.dateTimeStart&&g.dateTimeEnd&&g.processLength?s`
        <li class="list-group-item">
          <div>${u("Start Time")}:</div>
          <div>
            <${le}//>
          </div>
          <div class="text-muted">
            ${u("It takes up to %length% minutes",{length:g.processLength})}
          </div>
          <div class="fs-6">
            <a href="#" onClick="${y}">${u("change date")}</a>
          </div>
        </li>
      `:""}
      ${a=="summary"?s`
        <li class="list-group-item">
          <${ir} customer=${g.customer} customerAddress=${g.customerAddress}/>
        </li>
      `:""}
      ${a=="summary"&&g.appointmentComment?s`
        <li class="list-group-item">
          ${u("Comment")}: ${g.appointmentComment}
        </li>
      `:""}
      ${g.showLocation?s`
            <li class="list-group-item">
              <div>${u("Location")}:</div>
              <div class="fw-bold">${g.locationName}</div>
              <div>${g.locationAddress}</div>
            </li>
        `:""}
      <li class="list-group-item">
        ${p?s`
          <div>${u("Price")}:</div>
          <div class="fw-bold"><${de} process=${g.process}/></div>
        `:""}
        <div>${i||""}</div>
      </li>
      ${a=="summary"?s`
          <li class="list-group-item">
            <${sr}/>
          </li>
        `:""}
    </ul>
  `};var V=e=>{let{currentStep:t,availableSteps:r}=_("currentStep","availableSteps"),a=r.indexOf(e.step),n=r.indexOf(t);if(r.indexOf(e.step)==-1)return s``;var o=t!="process"&&t!="summary";return s`
    <div class="carousel-item
      ${n-1==a?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${n+1==a?"carousel-item-next":""}
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
                <${fe} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var lr=e=>{let{appointment:t,dispatch:r,currentStep:a}=_("appointment","currentStep"),n=()=>{a==="process"&&(r("appointment/set",{eye_examination_process:e.item}),r("currentStep/eyeExaminationProcessSelected"),r("currentStep/next"))};return s`
    <li class="row list-group-item ${t.eye_examination_process==e.item?"selected":""}" onClick=${n}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.item.name}</h4>
          <p class="${e.item.description&&e.item.description.length>0?"":"d-none"}">${e.item.description}</p>
          <span class="badge bg-primary me-1">${e.item.length} ${u("@abbrMinute")}</span>
          <span class="badge bg-primary"><${de} process=${e.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var cr=e=>{let{eyeExaminationProcesses:t}=_("eyeExaminationProcesses");return s`
    <ul class="list-group">
      ${t.length?t.map(r=>s`<${lr} item=${r} />`):s`<li class="list-group-item"><${N}/></li>`}
    </ul>
  `};var ze=e=>{let{selectedCalendar:t,dispatch:r,currentStep:a}=_("selectedCalendar","currentStep"),n=()=>{a==="calendar"&&(r("selectedCalendar/set",e.item["@id"]?e.item:null),r("currentStep/next"))};return s`
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
  `};var pr=e=>{let{appointment:t,showFirstAvailableUserItem:r,dispatch:a}=_("appointment","showFirstAvailableUserItem"),n=Z(_("calendars","appointment","calendarRoleCheckMode")),o={user:{name:u("First free"),description:u("For finding the nearest free time slot.")}},i=()=>a("currentStep/previous");return s`
    <ul class="list-group">
      ${t.eye_examination_process?n.length?s`
              ${r?s`<${ze} item=${o} />`:""}
              ${n.map(p=>s`<${ze} item=${p} />`)}
            `:s`
              <li class="list-group-item text-center">
                ${u("None of our colleagues is available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${i}">
                  ${u("Select another process")}
                </button>
              </li>
          `:""}
    </ul>
  `};var ua=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],ur=({date:e})=>{let{selectedDate:t,dispatch:r}=_("selectedDate"),a=()=>r("selectedDate/set",e);return s`
    <div class="col">
      <div class="card ${T(e,t)?"bg-primary text-light":""}" onClick="${a}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${T(e,t)?"":"text-muted"}">
            ${u(ua[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var mr=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:r,currentDateGroup:a,nextDateGroup:n}=t;return s`
    <div class="carousel-item
      ${r==e?"carousel-item-prev":""}
      ${a==e?"active":""}
      ${n==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(o=>s`<${ur} date=${o}/>`)}
      </div>
    </div>
  `};var ma=["January","February","March","April","May","June","July","August","September","October","November","December"],dr=e=>{let{selectedDate:t,firstEligibleDate:r,dispatch:a}=_("selectedDate","firstEligibleDate"),n=De(r),o=()=>a("selectedDate/set",p[4]),i=()=>a("selectedDate/set",m[0]);var p,c,m;for(let v=0;v<n.length&&(p=n[v-1],c=n[v],m=n[v+1],!c.hasDate(t));v++);let l={previousDateGroup:p,currentDateGroup:c,nextDateGroup:m};return s`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${o}
        disabled=${!p}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${u(ma[c[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${n.map(v=>s`<${mr} dateGroup=${v} visibleDateGroups=${l}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${i}
        disabled=${!m}>
        ${">"}
      </button>
    </div>
  `};var fr=e=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:n,dispatch:o}=_("selectedCalendar","appointment","nextFreeSlots","selectedDate");var i=new Date(r),p,c=!1;for(i.setDate(i.getDate()+1);a[p=M(n,t,i)];){if(a[p].status!=="empty"){c=!0;break}i.setDate(i.getDate()+1)}let m=()=>o("selectedDate/set",i);return s`
    <li class="list-group-item p-4 text-center">
      <h5>${u("There are no free appointment times for this day")}</h5>
      ${c?s`
          <div class="text-muted">
            ${u("The next free slot is available on %date%",{date:C.formatDate(i)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${m}">${u("Go to date")}</button>
        `:s`
          <button class="btn m-2 btn-primary" onClick="${m}">
            ${u("Click here to search for the next free appointment")}
          </button>
        `}
    </li>
  `};var _r=e=>{let{dispatch:t,appointment:r}=_("appointment"),a=()=>{t("appointment/selectSlot",e.slot)};return s`
    <li class="list-group-item${Q(new Date(r.start),new Date(e.slot.start))?" selected":""}" onClick=${a}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${C.formatTime(e.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var hr=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=_("selectedCalendar","selectedDate","nextFreeSlots","appointment");var n=M(r,t,e);return s`
    <${dr}/>
    <ul class="list-group mt-3">
      ${a[n]?a[n].status=="empty"?s`<${fr}/>`:a[n].slots.map(o=>s`<${_r} slot=${o}/>`):s`<li class="list-group-item"><${N}/></li>`}
    </ul>
  `};var vr=e=>{let{appointment:t,dispatch:r}=_("appointment"),a=n=>{let{value:o}=n.target;var{customer:i}=t;i[e.property]=o,r("appointment/set",{customer:i})};return s`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${a}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var S=e=>{let{customerForm:t}=_("customerForm");if(!!t[e.property]){var r=t[e.property];return s`
    <div class="${e.class||"col-sm"} needs-validation p-1 mb-2 w-100">
      ${e.label?s`
          <label class="form-label text-truncate">
            ${r.required?s`<span class="text-danger">*</span> `:""}
            ${u(e.label)}
          </label>
        `:null}
      <${e.inputClass||vr} property=${e.property}
        invalid=${r.errors&&r.errors.length?"was-validated":""}/>
      ${r.errors&&r.errors.length?r.errors.map(a=>s`<div class="invalid-feedback">${u(a)}</div>`):""}
    </div>
  `}};var br=e=>{let{appointment:t,showAppointmentComment:r,dispatch:a}=_("appointment","showAppointmentComment");if(!r)return s``;let n=o=>{let{value:i}=o.target;t.comment=i,a("appointment/set",t)};return s`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">${u("Comment")}</label>
          <textarea class="form-control" value=${t.comment||""} onInput=${n}></textarea>
        </div>
      </div>
    `};var U=e=>{let t=r=>{let{value:a}=r.target;e.onInput(a)};return s`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?s`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:r,label:a})=>s`<option value="${r}">${a}</option>`)}
    </select>
  `};var da=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),gr=e=>{let{appointment:t,dispatch:r}=_("appointment"),a=(c,m)=>{var{customer:l}=t;m==""?l[e.property]=null:(l[e.property]=l[e.property]||new Date("2000-01-01"),l[e.property][`set${c}`](m)),r("appointment/set",{customer:l})},n=t.customer[e.property];var o=[];for(let c=1900;c<=new Date().getFullYear();c++)o.push({value:c,label:c});var i=[];for(let c=1;c<=12;c++)i.push({value:c-1,label:c<10?`0${c}`:c});var p=[];for(let c=1;c<=da(n);c++)p.push({value:c,label:c<10?`0${c}`:c});return s`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${U} invalid=${e.invalid} onInput=${c=>a("FullYear",c)}
        value=${n?n.getFullYear():""} emptySelection="----" options=${o}
         disabled=${!!t.customer["@id"]}/>
      <${U} invalid=${e.invalid} onInput=${c=>a("Month",c)}
        value=${n?n.getMonth():""} emptySelection="--" options=${i}
         disabled=${!!t.customer["@id"]}/>
      <${U} invalid=${e.invalid} onInput=${c=>a("Date",c)}
        value=${n?n.getDate():""} emptySelection="--" options=${p}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `};var yr=e=>{let{appointment:t,dispatch:r}=_("appointment");return s`
    <${U} onInput=${n=>{var{customer:o}=t;o[e.property]=n,r("appointment/set",{customer:o})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${u("Not specified")}"
        options=${[{value:"m",label:u("Male")},{value:"f",label:u("Female")}]}/>
  `};var Sr=e=>{let{appointment:t,privacyPolicy:r,dispatch:a}=_("appointment","privacyPolicy"),n=()=>{var{customer:i}=t;i[e.property]=!i[e.property]||null,a("appointment/set",{customer:i})},o=()=>a("privacyPolicyModalState/set",!1);return s`
    <${E} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${r?s([r.content]):""}"
      approveButtonLabel="Close"
      onApprove=${o}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${n}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${u("I have accepted the privacy policy")}
      </label>
    </div>
  `};var kr=e=>{let{appointment:t,dispatch:r}=_("appointment"),a=()=>{var{customer:n}=t;n[e.property]=!n[e.property]||null,r("appointment/set",{customer:n})};return s`
    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${a}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${u("I agree to the use of my medical records according to privacy policy")}
      </label>
    </div>
  `};var xr=e=>{let{customerForm:t,customerFormGlobalErrors:r,medicalConsent:a,dispatch:n}=_("customerForm","customerFormGlobalErrors","language","medicalConsent"),o=()=>{n("customerForm/validateAndNext")};return s`
    <div class="card p-2">
      ${r&&r.length?s`
          <div class="row mx-2 text-danger">
            ${r.map(i=>s`<p>${i}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${L.shouldSwitchNameOrder()?s`
            <${S} property="last_name" label="Last name"/>
            <${S} property="first_name" label="First name"/>
          `:s`
            <${S} property="first_name" label="First name"/>
            <${S} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${S} class="col-lg-5" property="birth" label="Birth" inputClass=${gr}/>
        <${S} property="gender" label="Gender" inputClass=${yr}/>
        <${S} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${S} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${S} property="postal_code" label="Postal code"/><${S} property="city" label="City"/>
      </div>
      <div class="row mx-2">
        <${S} property="street_address" label="Street address"/>
      </div>
      <div class="row mx-2">
        <${S} property="mobile" label="Mobile"/><${S} property="email" label="Email"/>
      </div>
      <${br}/>
      <div class="row mx-2">
        <${S} property="acceptPrivacyPolicy" inputClass=${Sr}/>
      </div>
      ${a=="explicit"?s`
          <div class="row mx-2">
            <${S} property="acceptMedicalRecordsUse" inputClass=${kr}/>
          </div>
        `:""}
      <button class="mx-2 btn btn-primary" onClick=${o}>${u("Next")}</button>
    </div>
  `};var Oe=e=>s`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${V} step="process" wrappedComponent=${cr}/>
        <${V} step="calendar" wrappedComponent=${pr}/>
        <${V} step="appointment" wrappedComponent=${hr}/>
        <${V} step="customer" wrappedComponent=${xr}/>
        <${V} step="summary" wrappedComponent=${fe}/>
      </div>
    </div>
  `;var Ie=e=>{let{moduleState:t,appointment:r,dispatch:a}=_("moduleState","appointment"),n=()=>a("close");switch(t){case"success":return s`
        <${E} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${u("Your appointment have been recorded.")}
            ${u("The examination will start at %start%, please arrive 5 minutes early.",{start:C.formatTime(r.start)})}
            ${u("If you have any further questions, please contact us through our customer service.")}
          "
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;case"error":return s`
        <${E} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Due to an unexpected error appointment could not be booked, please restart the process"
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;default:return s`
        <${E} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `}};var Le=({colors:e})=>{if(e=e||{},Object.keys(e).length!=0)return s`
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
  `};var $r=e=>{let{headerTitle:t,currentStep:r}=_("headerTitle","currentStep");switch(r){case"process":var a=u("Select eye examination type");break;case"calendar":var a=u("Select a vision expert");break;case"appointment":var a=u("Select your desired appointment time");break;case"customer":var a=u("Enter customer details");break;default:var a=u("Appointment details verification");break}return s`
    <div class="booker-header bg-primary bg-gradient text-light p-2">
      <div class="container col-sm-10 col-md-8">
        <div class="row">
          <div class="col-8">
            <h3 class="text-truncate">
              ${t||u("Appointment booking")}
            </h3>
            <h5 class="text-truncate">
              ${a}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${Fe}/>
              <${Ne}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    `};var fa=e=>s`
    <${Le} colors=${e.colors}/>
    <div class="booker-widget fixed-top">
      <${$e.Provider} value=${e.store}>
        <${Ie}/>
        <${$r}/>
        <div class="bg-body content">
          <${Oe}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `,_e=class{constructor(t){var r=nr();this.store=r,t.medicalConsent||(t.medicalConsent="explicit"),this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode).then(()=>Promise.all([this.loadEyeExaminationProcesses(t),this.loadCalendars()])).then(()=>{r.dispatch("moduleState/set","idle"),this.store.dispatch("bookerInit")}),t.calendarStepShouldBeHidden&&r.dispatch("calendarStepShouldBeHidden/set",t.calendarStepShouldBeHidden),t.calendarRoleCheckMode&&r.dispatch("calendarRoleCheckMode/set",t.calendarRoleCheckMode),t.showFirstAvailableUserItem!==void 0&&r.dispatch("showFirstAvailableUserItem/set",t.showFirstAvailableUserItem),t.showExaminerName!==void 0&&r.dispatch("showExaminerName/set",t.showExaminerName),t.firstEligibleTime&&r.dispatch("firstEligibleTime/set",t.firstEligibleTime),t.language&&r.dispatch("language/set",t.language),t.translationOverrides&&r.dispatch("translationOverrides/set",t.translationOverrides),t.headerTitle&&r.dispatch("headerTitle/set",t.headerTitle),t.country&&r.dispatch("country/set",t.country),t.priceComment&&r.dispatch("priceComment/set",t.priceComment),t.showPrice!==void 0&&r.dispatch("showPrice/set",t.showPrice),t.privacyPolicyLink&&r.dispatch("privacyPolicyLink/set",t.privacyPolicyLink),t.showAppointmentComment&&r.dispatch("showAppointmentComment/set",t.showAppointmentComment),t.autoselectNextFreeSlot&&r.dispatch("autoselectNextFreeSlot/set",t.autoselectNextFreeSlot),t.constantAppointmentCommentText&&r.dispatch("constantAppointmentCommentText/set",t.constantAppointmentCommentText),t.locationName!==void 0&&r.dispatch("locationName/set",t.locationName),t.locationAddress!==void 0&&r.dispatch("locationAddress/set",t.locationAddress),t.showLocation!==void 0&&r.dispatch("showLocation/set",t.showLocation),r.dispatch("medicalConsent/set",t.medicalConsent),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:r,medicalConsent:a}){var n={};r=["first_name","last_name","acceptPrivacyPolicy"].concat(a!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(r||["email"]),["first_name","last_name","acceptPrivacyPolicy"].concat(a!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(t||["mobile","email"]).forEach(o=>{n[o]={required:r.indexOf(o)!=-1}}),this.store.dispatch("customerForm/set",{customerForm:n})}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){var r=await j.get(this.store,`stores?code=${t}`);this.store.dispatch("store/set",r[0])}async loadEyeExaminationProcesses({eyeExaminationProcessId:t}){var r=this.store.get().store;if(t)var a=[await j.get(this.store,`eye_examination_processes/${t}`)].filter(n=>n);else var a=await j.get(this.store,`eye_examination_processes?hasLength&chain=${r.chain["@id"]}`);this.store.dispatch("eyeExaminationProcesses/set",a)}async loadCalendars(){this.store.dispatch("calendars/set",await j.get(this.store,`appointment_calendars?groups[]=userProfilePictureRead&store=${this.store.get().store["@id"]}`))}createElementAndRender({parentElement:t,colors:r}){var a=document.createElement("div");(t||document.body).appendChild(a),be(s`<${fa} store=${this.store} colors=${r}/>`,a),this.store.on("close",()=>a.remove())}getStore(){return this.store}},_a=_e;window.ClearvisioAppointmentBooker=_e;export{_a as default};
