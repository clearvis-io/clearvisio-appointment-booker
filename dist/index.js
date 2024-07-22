var Pe,x,mr,_e,fr,hr,_r,Fe={},vr=[],Lo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function q(e,t){for(var r in t)e[r]=t[r];return e}function gr(e){var t=e.parentNode;t&&t.removeChild(e)}function Q(e,t,r){var a,o,n,s={};for(n in t)n=="key"?a=t[n]:n=="ref"?o=t[n]:s[n]=t[n];if(arguments.length>2&&(s.children=arguments.length>3?Pe.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)s[n]===void 0&&(s[n]=e.defaultProps[n]);return Ee(e,s,a,o,null)}function Ee(e,t,r,a,o){var n={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++mr:o};return o==null&&x.vnode!=null&&x.vnode(n),n}function ee(e){return e.children}function z(e,t){this.props=e,this.context=t}function ce(e,t){if(t==null)return e.__?ce(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?ce(e):null}function br(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return br(e)}}function st(e){(!e.__d&&(e.__d=!0)&&_e.push(e)&&!Oe.__r++||hr!==x.debounceRendering)&&((hr=x.debounceRendering)||fr)(Oe)}function Oe(){for(var e;Oe.__r=_e.length;)e=_e.sort(function(t,r){return t.__v.__b-r.__v.__b}),_e=[],e.some(function(t){var r,a,o,n,s,p;t.__d&&(s=(n=(r=t).__v).__e,(p=r.__P)&&(a=[],(o=q({},n)).__v=n.__v+1,lt(p,n,o,r.__n,p.ownerSVGElement!==void 0,n.__h!=null?[s]:null,a,s==null?ce(n):s,n.__h),yr(a,n),n.__e!=s&&br(n)))})}function jr(e,t,r,a,o,n,s,p,u,f){var c,S,v,b,g,k,$,w=a&&a.__k||vr,O=w.length;for(r.__k=[],c=0;c<t.length;c++)if((b=r.__k[c]=(b=t[c])==null||typeof b=="boolean"?null:typeof b=="string"||typeof b=="number"||typeof b=="bigint"?Ee(null,b,null,null,b):Array.isArray(b)?Ee(ee,{children:b},null,null,null):b.__b>0?Ee(b.type,b.props,b.key,null,b.__v):b)!=null){if(b.__=r,b.__b=r.__b+1,(v=w[c])===null||v&&b.key==v.key&&b.type===v.type)w[c]=void 0;else for(S=0;S<O;S++){if((v=w[S])&&b.key==v.key&&b.type===v.type){w[S]=void 0;break}v=null}lt(e,b,v=v||Fe,o,n,s,p,u,f),g=b.__e,(S=b.ref)&&v.ref!=S&&($||($=[]),v.ref&&$.push(v.ref,null,b),$.push(S,b.__c||g,b)),g!=null?(k==null&&(k=g),typeof b.type=="function"&&b.__k===v.__k?b.__d=u=Sr(b,u,e):u=xr(e,b,v,w,g,u),typeof r.type=="function"&&(r.__d=u)):u&&v.__e==u&&u.parentNode!=e&&(u=ce(v))}for(r.__e=k,c=O;c--;)w[c]!=null&&(typeof r.type=="function"&&w[c].__e!=null&&w[c].__e==r.__d&&(r.__d=ce(a,c+1)),$r(w[c],w[c]));if($)for(c=0;c<$.length;c++)kr($[c],$[++c],$[++c])}function Sr(e,t,r){for(var a,o=e.__k,n=0;o&&n<o.length;n++)(a=o[n])&&(a.__=e,t=typeof a.type=="function"?Sr(a,t,r):xr(r,a,a,o,a.__e,t));return t}function ve(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){ve(r,t)}):t.push(e)),t}function xr(e,t,r,a,o,n){var s,p,u;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(r==null||o!=n||o.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(o),s=null;else{for(p=n,u=0;(p=p.nextSibling)&&u<a.length;u+=2)if(p==o)break e;e.insertBefore(o,n),s=n}return s!==void 0?s:o.nextSibling}function zo(e,t,r,a,o){var n;for(n in r)n==="children"||n==="key"||n in t||Ne(e,n,null,r[n],a);for(n in t)o&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||r[n]===t[n]||Ne(e,n,t[n],r[n],a)}function wr(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||Lo.test(t)?r:r+"px"}function Ne(e,t,r,a,o){var n;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||wr(e.style,t,"");if(r)for(t in r)a&&r[t]===a[t]||wr(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?a||e.addEventListener(t,n?Dr:Cr,n):e.removeEventListener(t,n?Dr:Cr,n);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(s){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Cr(e){this.l[e.type+!1](x.event?x.event(e):e)}function Dr(e){this.l[e.type+!0](x.event?x.event(e):e)}function lt(e,t,r,a,o,n,s,p,u){var f,c,S,v,b,g,k,$,w,O,K,N=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(u=r.__h,p=t.__e=r.__e,t.__h=null,n=[p]),(f=x.__b)&&f(t);try{e:if(typeof N=="function"){if($=t.props,w=(f=N.contextType)&&a[f.__c],O=f?w?w.props.value:f.__:a,r.__c?k=(c=t.__c=r.__c).__=c.__E:("prototype"in N&&N.prototype.render?t.__c=c=new N($,O):(t.__c=c=new z($,O),c.constructor=N,c.render=Bo),w&&w.sub(c),c.props=$,c.state||(c.state={}),c.context=O,c.__n=a,S=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),N.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=q({},c.__s)),q(c.__s,N.getDerivedStateFromProps($,c.__s))),v=c.props,b=c.state,S)N.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(N.getDerivedStateFromProps==null&&$!==v&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps($,O),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate($,c.__s,O)===!1||t.__v===r.__v){c.props=$,c.state=c.__s,t.__v!==r.__v&&(c.__d=!1),c.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(J){J&&(J.__=t)}),c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate($,c.__s,O),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(v,b,g)})}c.context=O,c.props=$,c.state=c.__s,(f=x.__r)&&f(t),c.__d=!1,c.__v=t,c.__P=e,f=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(a=q(q({},a),c.getChildContext())),S||c.getSnapshotBeforeUpdate==null||(g=c.getSnapshotBeforeUpdate(v,b)),K=f!=null&&f.type===ee&&f.key==null?f.props.children:f,jr(e,Array.isArray(K)?K:[K],t,r,a,o,n,s,p,u),c.base=t.__e,t.__h=null,c.__h.length&&s.push(c),k&&(c.__E=c.__=null),c.__e=!1}else n==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Ro(r.__e,t,r,a,o,n,s,u);(f=x.diffed)&&f(t)}catch(J){t.__v=null,(u||n!=null)&&(t.__e=p,t.__h=!!u,n[n.indexOf(p)]=null),x.__e(J,t,r)}}function yr(e,t){x.__c&&x.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){x.__e(a,r.__v)}})}function Ro(e,t,r,a,o,n,s,p){var u,f,c,S=r.props,v=t.props,b=t.type,g=0;if(b==="svg"&&(o=!0),n!=null){for(;g<n.length;g++)if((u=n[g])&&(u===e||(b?u.localName==b:u.nodeType==3))){e=u,n[g]=null;break}}if(e==null){if(b===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),n=null,p=!1}if(b===null)S===v||p&&e.data===v||(e.data=v);else{if(n=n&&Pe.call(e.childNodes),f=(S=r.props||Fe).dangerouslySetInnerHTML,c=v.dangerouslySetInnerHTML,!p){if(n!=null)for(S={},g=0;g<e.attributes.length;g++)S[e.attributes[g].name]=e.attributes[g].value;(c||f)&&(c&&(f&&c.__html==f.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(zo(e,v,S,o,p),c)t.__k=[];else if(g=t.props.children,jr(e,Array.isArray(g)?g:[g],t,r,a,o&&b!=="foreignObject",n,s,n?n[0]:r.__k&&ce(r,0),p),n!=null)for(g=n.length;g--;)n[g]!=null&&gr(n[g]);p||("value"in v&&(g=v.value)!==void 0&&(g!==e.value||b==="progress"&&!g)&&Ne(e,"value",g,S.value,!1),"checked"in v&&(g=v.checked)!==void 0&&g!==e.checked&&Ne(e,"checked",g,S.checked,!1))}return e}function kr(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(a){x.__e(a,r)}}function $r(e,t,r){var a,o;if(x.unmount&&x.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||kr(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(n){x.__e(n,t)}a.base=a.__P=null}if(a=e.__k)for(o=0;o<a.length;o++)a[o]&&$r(a[o],t,typeof e.type!="function");r||e.__e==null||gr(e.__e),e.__e=e.__d=void 0}function Bo(e,t,r){return this.constructor(e,r)}function ct(e,t,r){var a,o,n;x.__&&x.__(e,t),o=(a=typeof r=="function")?null:r&&r.__k||t.__k,n=[],lt(t,e=(!a&&r||t).__k=Q(ee,null,[e]),o||Fe,Fe,t.ownerSVGElement!==void 0,!a&&r?[r]:o?null:t.firstChild?Pe.call(t.childNodes):null,n,!a&&r?r:o?o.__e:t.firstChild,a),yr(n,e)}function Mr(e,t){var r={__c:t="__cC"+_r++,__:e,Consumer:function(a,o){return a.children(o)},Provider:function(a){var o,n;return this.getChildContext||(o=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&o.some(st)},this.sub=function(s){o.push(s);var p=s.componentWillUnmount;s.componentWillUnmount=function(){o.splice(o.indexOf(s),1),p&&p.call(s)}}),a.children}};return r.Provider.__=r.Consumer.contextType=r}Pe=vr.slice,x={__e:function(e,t){for(var r,a,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),o=r.__d),o)return r.__E=r}catch(n){e=n}throw e}},mr=0,z.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=q({},this.state),typeof e=="function"&&(e=e(q({},r),this.props)),e&&q(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),st(this))},z.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),st(this))},z.prototype.render=ee,_e=[],fr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Oe.__r=0,_r=0;var de,P,Ar,dt=0,pt=[],Tr=x.__b,Pr=x.__r,Fr=x.diffed,Er=x.__c,Or=x.unmount;function ge(e,t){x.__h&&x.__h(P,e,dt||t),dt=0;var r=P.__H||(P.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function te(e){return dt=1,Ho(Nr,e)}function Ho(e,t,r){var a=ge(de++,2);return a.t=e,a.__c||(a.__=[r?r(t):Nr(void 0,t),function(o){var n=a.t(a.__[0],o);a.__[0]!==n&&(a.__=[n,a.__[1]],a.__c.setState({}))}],a.__c=P),a.__}function Ir(e,t){var r=ge(de++,3);!x.__s&&ut(r.__H,t)&&(r.__=e,r.__H=t,P.__H.__h.push(r))}function Lr(e,t){var r=ge(de++,4);!x.__s&&ut(r.__H,t)&&(r.__=e,r.__H=t,P.__h.push(r))}function zr(e,t){var r=ge(de++,7);return ut(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Rr(e){var t=P.context[e.__c],r=ge(de++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(P)),t.props.value):e.__}function Go(){pt.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Ie),e.__H.__h.forEach(mt),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}),pt=[]}x.__b=function(e){P=null,Tr&&Tr(e)},x.__r=function(e){Pr&&Pr(e),de=0;var t=(P=e.__c).__H;t&&(t.__h.forEach(Ie),t.__h.forEach(mt),t.__h=[])},x.diffed=function(e){Fr&&Fr(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(pt.push(t)!==1&&Ar===x.requestAnimationFrame||((Ar=x.requestAnimationFrame)||function(r){var a,o=function(){clearTimeout(n),Br&&cancelAnimationFrame(a),setTimeout(r)},n=setTimeout(o,100);Br&&(a=requestAnimationFrame(o))})(Go)),P=null},x.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Ie),r.__h=r.__h.filter(function(a){return!a.__||mt(a)})}catch(a){t.some(function(o){o.__h&&(o.__h=[])}),t=[],x.__e(a,r.__v)}}),Er&&Er(e,t)},x.unmount=function(e){Or&&Or(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Ie)}catch(r){x.__e(r,t.__v)}};var Br=typeof requestAnimationFrame=="function";function Ie(e){var t=P;typeof e.__c=="function"&&e.__c(),P=t}function mt(e){var t=P;e.__c=e.__(),P=t}function ut(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function Nr(e,t){return typeof t=="function"?t(e):t}function Vo(e,t){for(var r in t)e[r]=t[r];return e}function Hr(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function Gr(e){this.props=e}(Gr.prototype=new z).isPureReactComponent=!0,Gr.prototype.shouldComponentUpdate=function(e,t){return Hr(this.props,e)||Hr(this.state,t)};var Vr=x.__b;x.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Vr&&Vr(e)};var Uo=x.__e;x.__e=function(e,t,r){if(e.then){for(var a,o=t;o=o.__;)if((a=o.__c)&&a.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),a.__c(e,t)}Uo(e,t,r)};var Ur=x.unmount;function ft(){this.__u=0,this.t=null,this.__b=null}function qr(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Le(){this.u=null,this.o=null}x.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Ur&&Ur(e)},(ft.prototype=new z).__c=function(e,t){var r=t.__c,a=this;a.t==null&&(a.t=[]),a.t.push(r);var o=qr(a.__v),n=!1,s=function(){n||(n=!0,r.__R=null,o?o(p):p())};r.__R=s;var p=function(){if(!--a.__u){if(a.state.__e){var f=a.state.__e;a.__v.__k[0]=function S(v,b,g){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(k){return S(k,b,g)}),v.__c&&v.__c.__P===b&&(v.__e&&g.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=g)),v}(f,f.__c.__P,f.__c.__O)}var c;for(a.setState({__e:a.__b=null});c=a.t.pop();)c.forceUpdate()}},u=t.__h===!0;a.__u++||u||a.setState({__e:a.__b=a.__v.__k[0]}),e.then(s,s)},ft.prototype.componentWillUnmount=function(){this.t=[]},ft.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=function n(s,p,u){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),s.__c.__H=null),(s=Vo({},s)).__c!=null&&(s.__c.__P===u&&(s.__c.__P=p),s.__c=null),s.__k=s.__k&&s.__k.map(function(f){return n(f,p,u)})),s}(this.__b,r,a.__O=a.__P)}this.__b=null}var o=t.__e&&Q(ee,null,e.fallback);return o&&(o.__h=null),[Q(ee,null,t.__e?null:e.children),o]};var Wr=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(Le.prototype=new z).__e=function(e){var t=this,r=qr(t.__v),a=t.o.get(e);return a[0]++,function(o){var n=function(){t.props.revealOrder?(a.push(o),Wr(t,e,a)):o()};r?r(n):n()}},Le.prototype.render=function(e){this.u=null,this.o=new Map;var t=ve(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Le.prototype.componentDidUpdate=Le.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){Wr(e,r,t)})};var qo=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Wo=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ko=typeof document!="undefined",Jo=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};z.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(z.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Kr=x.event;function Yo(){}function Zo(){return this.cancelBubble}function Xo(){return this.defaultPrevented}x.event=function(e){return Kr&&(e=Kr(e)),e.persist=Yo,e.isPropagationStopped=Zo,e.isDefaultPrevented=Xo,e.nativeEvent=e};var Jr={configurable:!0,get:function(){return this.class}},Yr=x.vnode;x.vnode=function(e){var t=e.type,r=e.props,a=r;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var n in a={},r){var s=r[n];Ko&&n==="children"&&t==="noscript"||n==="value"&&"defaultValue"in r&&s==null||(n==="defaultValue"&&"value"in r&&r.value==null?n="value":n==="download"&&s===!0?s="":/ondoubleclick/i.test(n)?n="ondblclick":/^onchange(textarea|input)/i.test(n+t)&&!Jo(r.type)?n="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(n)?n=n.toLowerCase():o&&Wo.test(n)?n=n.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),a[n]=s)}t=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=ve(r.children).forEach(function(p){p.props.selected=a.value.indexOf(p.props.value)!=-1})),t=="select"&&a.defaultValue!=null&&(a.value=ve(r.children).forEach(function(p){p.props.selected=a.multiple?a.defaultValue.indexOf(p.props.value)!=-1:a.defaultValue==p.props.value})),e.props=a}t&&r.class!=r.className&&(Jr.enumerable="className"in r,r.className!=null&&(a.class=r.className),Object.defineProperty(a,"className",Jr)),e.$$typeof=qo,Yr&&Yr(e)};var Zr=x.__r;x.__r=function(e){Zr&&Zr(e)};var ht=Mr(),Qo=typeof window!="undefined"?Lr:Ir,ei=e=>(...t)=>{let r=Rr(e),a=te({});return Qo(()=>r.on("@changed",(o,n)=>{t.some(p=>p in n)&&a[1]({})}),[]),zr(()=>{let o=r.get(),n={};return t.forEach(s=>{n[s]=o[s]}),n.dispatch=r.dispatch,n},[a[0]])},h=ei(ht);var _t=class extends Error{constructor(t){super("Validation error");this.validations=t}getValidations(){return this.validations}},be=_t;var Xr=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),ti={get:async(e,t)=>{var o;let{path:r,headers:a}=e.get().api;try{let n=await(await fetch(`${r}/${t}`,{headers:Xr(a)})).json();if(typeof n!="object")throw new Error("Invalid response");return(o=n["hydra:member"])!=null?o:n}catch(n){throw e.dispatch("moduleState/set","error"),n}},post:async({api:e,dispatch:t},r,a)=>{let{path:o,headers:n}=e,s={method:"POST",headers:Xr(n),body:JSON.stringify(a)};try{var p=await(await fetch(`${o}/${r}`,s)).json()}catch(u){throw t("moduleState/set","error"),u}if(p["@id"])return p;throw p.violations?new be(p.violations):(t("moduleState/set","error"),new Error("Invalid result"))}},D=ti;var Qr=function(e,t,r,a){var o;t[0]=0;for(var n=1;n<t.length;n++){var s=t[n++],p=t[n]?(t[0]|=s?1:2,r[t[n++]]):t[++n];s===3?a[0]=p:s===4?a[1]=Object.assign(a[1]||{},p):s===5?(a[1]=a[1]||{})[t[++n]]=p:s===6?a[1][t[++n]]+=p+"":s?(o=e.apply(p,Qr(e,p,r,["",null])),a.push(o),p[0]?t[0]|=2:(t[n-2]=0,t[n]=o)):a.push(p)}return a},ea=new Map;function ta(e){var t=ea.get(this);return t||(t=new Map,ea.set(this,t)),(t=Qr(this,t.get(e)||(t.set(e,t=function(r){for(var a,o,n=1,s="",p="",u=[0],f=function(v){n===1&&(v||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,v,s):n===3&&(v||s)?(u.push(3,v,s),n=2):n===2&&s==="..."&&v?u.push(4,v,0):n===2&&s&&!v?u.push(5,0,!0,s):n>=5&&((s||!v&&n===5)&&(u.push(n,0,s,o),n=6),v&&(u.push(n,v,0,o),n=6)),s=""},c=0;c<r.length;c++){c&&(n===1&&f(),f(c));for(var S=0;S<r[c].length;S++)a=r[c][S],n===1?a==="<"?(f(),u=[u],n=3):s+=a:n===4?s==="--"&&a===">"?(n=1,s=""):s=a+s[0]:p?a===p?p="":s+=a:a==='"'||a==="'"?p=a:a===">"?(f(),n=1):n&&(a==="="?(n=5,o=s,s=""):a==="/"&&(n<5||r[c][S+1]===">")?(f(),n===3&&(u=u[0]),n=u,(u=u[0]).push(2,0,n),n=0):a===" "||a==="	"||a===`
`||a==="\r"?(f(),n=2):s+=a),n===3&&s==="!--"&&(n=4,u=u[0])}return f(),u}(e)),t),arguments,[])).length>1?t:t[0]}var ri=(e,t,...r)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(a=>a.trim()).map(a=>a.indexOf("cvio-ab-")!==0?`cvio-ab-${a}`:a).join(" ")),Q(e,t,...r)),l=ta.bind(ri);var ye=e=>{let{dispatch:t,privacyPolicyLink:r}=h("privacyPolicyLink");return r?l`
      <a class="link-primary" href="${r}" target="_new">
        ${e.children}
      </a>
    `:l`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `};var ze=e=>{let{appointment:t}=h("appointment");return l`
    <span class="fw-bold">
      ${t.start?M.formatDateTime(t.start):null}
    </span>
  `};var vt={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja a foglal\xE1st?","All inputed data will be lost.":"Mindent megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pontfoglal\xE1s folytat\xE1sa","Cancel appointment":"Foglal\xE1s megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues is available for the selected process":"Egy munkat\xE1rsunk sem el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Search in progress...":"Keres\xE9s folyamatban...","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"Az \xD6n adatai",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m","Appointment details verification":"Foglal\xE1si adatok ellen\u0151rz\xE9se","Appointment summary":"Foglal\xE1si \xF6sszes\xEDt\u0151",Price:"\xC1r","Confirm appointment":"Id\u0151pontfoglal\xE1s j\xF3v\xE1hagy\xE1sa","%customer%'s examination":"%customer% vizsg\xE1lata","Your appointment have been recorded.":"Foglal\xE1s\xE1t r\xF6gz\xEDtett\xFCk.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsg\xE1lat kezdete: %start%, k\xE9rj\xFCk \xE9rkezzen 5 perccel kor\xE1bban.","If you have any further questions, please contact us through our customer service.":"Ha k\xE9rd\xE9se van vagy szeretn\xE9 m\xF3dos\xEDtani a foglal\xE1s\xE1t, k\xE9rj\xFCk keresse szak\xFCzlet\xFCnket.","Appointment booked!":"Id\u0151pont lefoglalva!","examiner: %examiner%":"v\xE9gzi: %examiner%","It takes up to %length% minutes":"Id\u0151tartam: %length% perc","I have accepted the privacy policy":l`Elfogadom az <${ye}>adatkezelési tájékoztatóban<//> foglaltakat`,"I agree to the use of my medical records according to privacy policy":"Hozz\xE1j\xE1rulok eg\xE9szs\xE9g\xFCgyi adataim adatkezel\xE9si t\xE1j\xE9koztat\xF3ban foglaltak szerinti kezel\xE9s\xE9hez","Privacy policy":"Adatkezel\xE9si t\xE1j\xE9koztat\xF3",Close:"Bez\xE1r\xE1s","Start Time":"Id\u0151pont",Subject:"T\xE1rgy",Location:"Helysz\xEDn","Appointment booking":"Id\u0151pontfoglal\xE1s","Select eye examination type":"Vizsg\xE1latt\xEDpus v\xE1laszt\xE1sa","Select a vision expert":"L\xE1t\xE1sszak\xE9rt\u0151 v\xE1laszt\xE1sa","Select your desired appointment time":"Id\u0151pont v\xE1laszt\xE1sa","Enter customer details":"\xDCgyf\xE9ladatok megad\xE1sa",Comment:"Megjegyz\xE9s","change date":"id\u0151pont cser\xE9je","More...":"B\u0151vebben...","Detailed description":"R\xE9szletes le\xEDr\xE1s",Morning:"D\xE9lel\u0151tt",Afternoon:"D\xE9lut\xE1n",Evening:"Este","Store selection":"\xDCzlet v\xE1laszt\xE1sa"},ro:{"Are you sure you want to cancel this appointment?":"Sunte\u021Bi sigur c\u0103 dori\u021Bi s\u0103 renun\u021Ba\u021Bi la programare?","All inputed data will be lost.":"Datele \xEEntroduse se vor pierde.","No, continue editing appointment":"Nu, continuare programare.","Cancel appointment":"\xCEntreruperea program\u0103rii","Appointment booking failed":"Programare nereu\u0219it\u0103.","Due to an unexpected error appointment could not be booked, please restart the process":"A ap\u0103rut o eroare. V\u0103 rug\u0103m, \xEEncepe\u021Bi din nou procesul.","None of our colleagues is available for the selected process":"Nu avem angaja\u021Bi disponibili pentru protocolul selectat.","First free":"Primul liber","For finding the nearest free time slot.":"\xCEn cel mai scurt timp.","@abbrSunday":"D","@abbrMonday":"L","@abbrTuesday":"M","@abbrWednesday":"Mi","@abbrThursday":"J","@abbrFriday":"V","@abbrSaturday":"S",January:"Ianuarie",February:"Februarie",March:"Martie",April:"Aprilie",May:"Mai",June:"Junie",July:"Julie",August:"August",September:"Septembrie",October:"Octombrie",November:"Noiembrie",December:"Decembrie","There are no free appointment times for this day":"Nu sunt ore libere la data selectat\u0103.","The next free slot is available on %date%":"Urm\u0103torul timp liber este: %date%","Go to date":"Salt la dat\u0103","Click here to search for the next free appointment":"Click aici pentru c\u0103utarea urm\u0103torului timp liber","Search in progress...":"C\u0103utare \xEEn curs...","Last name":"Nume","First name":"Prenume",Birth:"Data na\u0219tere",Gender:"Gen",SSN:"CNP",Country:"\u021Aara",State:"Megye","Postal code":"Cod po\u0219tal",City:"Ora\u0219","Street address":"Strada",Mobile:"Num\u0103r de tel mobil","Select another process":"Selectare protocol diferit","@abbrMinute":"min.","Not specified":"Nu e specificat",Male:"B\u0103rbat",Female:"Femeie",Next:"Mai departe","This field is required.":"Acest c\u0103mp este necesar.","Invalid email address.":"Adresa da mail gre\u0219it\u0103.","Your information":"Datele personale",Name:"Nume","Date of birth":"Data na\u0219tere",Address:"Adresa","Phone number":"Num\u0103r de telefon","Appointment details verification":"Verificare datele rezerv\u0103rii","Appointment summary":"Sumar rezervare",Price:"Pre\u021B","Confirm appointment":"Rezervare","%customer%'s examination":"Consulta\u021Bie %customer%","Your appointment have been recorded.":"Rezervare salvat\u0103.","The examination will start at %start%, please arrive 5 minutes early.":"V\u0103 rug\u0103m s\u0103 v\u0103 prezenta\u021Bi cu 5 minute mai devreme. Ora inceperii rezerv\u0103rii: %start%.","If you have any further questions, please contact us through our customer service.":"Dac\u0103 ave\u021Bi alte \xEEntreb\u0103ri, v\u0103 rug\u0103m contacta\u021Bi serviciul clien\u021Bi.","Appointment booked!":"Programare rezervat\u0103!","examiner: %examiner%":"examinator: %examiner%","It takes up to %length% minutes":"Durata: %length% minute","I have accepted the privacy policy":l`Accept <${ye}>Termenile și condițiile<//>`,"I agree to the use of my medical records according to privacy policy":"Dau acordul pentru prelucrarea datelor medicale conform Termenilor \u0219i condi\u021Biilor generale.","Privacy policy":"Termeni \u0219i condi\u021Bii",Close:"\xCEnchidere","Start Time":"Data",Subject:"Subiect",Location:"Loca\u021Bie","Appointment booking":"Programare","Select eye examination type":"Selectare tip de examinare","Select a vision expert":"Selectare specialist \xEEn vedere","Select your desired appointment time":"Selectare dat\u0103 \u0219i or\u0103","Enter customer details":"Datele clientului","change date":"modificare dat\u0103",Morning:"\xCEnainte de mas\u0103",Afternoon:"Dup\u0103 mas\u0103",Evening:"Seara","Store selection":"Selectare magazin"},hr:{"Are you sure you want to cancel this appointment?":"Jeste li sigurni da \u017Eelite otkazati ovaj termin?","All inputed data will be lost.":"Svi uneseni podaci bit \u0107e izgubljeni.","No, continue editing appointment":"Ne, nastavi s ure\u0111ivanjem termina","Cancel appointment":"Otka\u017Ei termin","Appointment booking failed":"Rezervacija termina nije uspjela","Due to an unexpected error appointment could not be booked, please restart the process":"Zbog neo\u010Dekivane pogre\u0161ke termin nije mogu\u0107e rezervirati, molimo ponovno pokrenite proces","None of our colleagues is available for the selected process":"Nitko od na\u0161ih kolega nije dostupan za odabrani proces","First free":"Prvo slobodno","For finding the nearest free time slot.":"Da odaberete \u0161to raniji termin.","@abbrSunday":"N","@abbrMonday":"P","@abbrTuesday":"U","@abbrWednesday":"S","@abbrThursday":"\u010C","@abbrFriday":"P","@abbrSaturday":"S",January:"Sije\u010Dnja",February:"Velja\u010Da",March:"O\u017Eujak",April:"Travanj",May:"Svibanj",June:"Lipanj",July:"Srpanj",August:"Kolovoz",September:"Rujan",October:"Listopad",November:"Studeni",December:"Prosinac","There are no free appointment times for this day":"Za ovaj dan nema slobodnih termina","The next free slot is available on %date%":"Datum sljede\u0107eg slobodnog termina je %date%","Go to date":"Sko\u010Di na datum","Click here to search for the next free appointment":"Tra\u017Eenje sljede\u0107eg slobodnog termina","Search in progress...":"Pretra\u017Eivanje je u tijeku...","Last name":"Prezime","First name":"Ime",Birth:"Datum ro\u0111enja",Gender:"Spol",SSN:"MBO broj",Country:"Zemlja",State:"Dr\u017Eava","Postal code":"Po\u0161tanski broj",City:"Grad","Street address":"Ulica",Mobile:"Mobilni","Select another process":"Odaberite drugi protokol","@abbrMinute":"m.","Not specified":"Nije specificirano",Male:"Mu\u0161karac",Female:"\u017Dena",Next:"Sljede\u0107i","This field is required.":"Ovo polje je obavezno.","Invalid email address.":"Pogre\u0161na adresa e-maila.","Your information":"Va\u0161i podaci",Name:"Ime","Date of birth":"Datum ro\u0111enja",Address:"Adresa","Phone number":"Broj telefona","Appointment details verification":"Provjerite detalje rezervacije","Appointment summary":"Sa\u017Eetak rezervacije",Price:"Cjena","Confirm appointment":"Odobrenje rezervacije termina","%customer%'s examination":"%customer% pregleda","Your appointment have been recorded.":"Va\u0161a rezervacija je zabilje\u017Eena.","The examination will start at %start%, please arrive 5 minutes early.":"Po\u010Detak pregleda: %start%, molimo do\u0111ite 5 minuta ranije.","If you have any further questions, please contact us through our customer service.":"Ako imate dodatnih pitanja, obratite nam se putem na\u0161e korisni\u010Dke slu\u017Ebe.","Appointment booked!":"Termin rezerviran!","examiner: %examiner%":"ispitiva\u010D: %examiner%","It takes up to %length% minutes":"Trajanje: %length% minuta","I have accepted the privacy policy":l`Prihvaćam <${ye}>što je zapisano<//> u informativnom listu za upravljanje podacima`,"I agree to the use of my medical records according to privacy policy":"Pristajem na obradu mojih zdravstvenih podataka u skladu s informacijama o upravljanju podacima","Privacy policy":"Informativni list za upravljanje podatke",Close:"Zatvaranje","Start Time":"Vrijeme po\u010Detka",Subject:"Objekat",Location:"Mjesto","Appointment booking":"Zaka\u017Eite termin","Select eye examination type":"Izbor vrste pregleda","Select a vision expert":"Odaberite stru\u010Dnjaka za vid","Select your desired appointment time":"Odaberite \u017Eeljeno vrijeme termina","Enter customer details":"Unos podataka o klijentu","change date":"promijeni termin",Morning:"Prijepodne",Afternoon:"Poslijepodne",Evening:"Ve\u010Der","Store selection":"Odabir trgovine"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepted the privacy policy":l`I accept the terms of <${ye}>privacy policy<//>`,"Your appointment starts at startTime":l`Your appointment starts at <${ze}//>`,"change date":"change date"}},_=(e,t={},r)=>{r=r||h("language","translationOverrides");let a=r.language,o=vt[a]||vt[a.substring(0,2)]||vt.en;e=r.translationOverrides[e]||o[e]||e;for(let n in t)e=e.replace(new RegExp("%"+n+"%","g"),t[n]);return e};var ra=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function Re(e,t,r){let a=function(o,n){if(!o.only_specific_processes_allowed)return!0;let s=n["@id"].split("/"),p=parseInt(s[s.length-1]);return o.allowed_process_ids.indexOf(p)!=-1};if(typeof t.online_reservation_allowed!="undefined"&&t.online_reservation_allowed==!1||!a(t,e))return!1;for(let o=0;o<ra.length;o++){let n=ra[o];if(!(!t.user||t.user.roles.indexOf(n.name)==-1)&&(e.highestRequiredRole==n.name||r=="hierachical"&&n.includes.indexOf(e.highestRequiredRole)!=-1))return!0}return!1}function Se({appointment:e,calendars:t,calendarRoleCheckMode:r}){var a=e?e.eye_examination_process:null;return(t||[]).filter(function(o){return!a||!a.highestRequiredRole?!0:Re(a,o,r)})}function R(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var gt=5,ai=e=>{var t=[new Date(e)];for(let r=0;r<gt-1;r++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(r){for(let a=0;a<gt;a++)if(R(this[a],r))return!0},t},Be=[];function bt(e){if(Be.length)return Be;for(var t=e||new Date,r=0;r<=100;r++)Be.push(ai(t)),t=new Date(t),t.setDate(t.getDate()+gt);return Be}function xe(e,t){return R(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var yt={hu:"%Y. %M. %D."},aa=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),na=e=>{let{language:t}=h("language");var r=yt[t]||yt[t.substring(0,2)]||yt.hu;e=new Date(e);var a=e.getMonth()+1;return r.replace("%Y",e.getFullYear()).replace("%M",`${a<10?"0":""}${a}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},ni=e=>na(e)+" "+aa(e),M={formatTime:aa,formatDate:na,formatDateTime:ni};var oa=["hu"],ia=e=>(e=e||h("language").language,oa.indexOf(e)!=-1||oa.indexOf(e.substring(0,2))!=-1),oi=({first_name:e,last_name:t},r)=>ia(r)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),re={format:oi,shouldSwitchNameOrder:ia};var ii=({postal_code:e,city:t,street_address:r})=>{let{language:a}=h("language"),o=e||"",n=t||"",s=r||"",p=[o,n,s].filter(f=>f.trim()).length;if(p===0)return"";if(p===1)return(n||s||"").trim();let u;switch(a){case"ro":case"hr":u=`${s}, ${o} ${n}`;break;case"hu":default:u=`${o} ${n}, ${s}`}return u.trim()},pe={formatAddress:ii};var ae=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93","+..-..-...-...."],["\xC5land Islands","ax","358",""],["Albania (Shqip\xEBri)","al","355","+...(...)...-..."],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (\xD6sterreich)","at","43","+..(...)...-...."],["Azerbaijan (Az\u0259rbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973","+...-....-...."],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375","+...(..)...-..-.."],["Belgium (Belgi\xEB)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (B\xE9nin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (R\xE9publique centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (\u4E2D\u56FD)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["C\xF4te d\u2019Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Cura\xE7ao","cw","599","+...-...-....",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357","+...-..-...-..."],["Czech Republic (\u010Cesk\xE1 republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (Rep\xFAblica Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (F\xF8royar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane fran\xE7aise)","gf","594","+...-.....-...."],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guin\xE9e)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (\u9999\u6E2F)","hk","852","+... .... ...."],["Hungary (Magyarorsz\xE1g)","hu","36","+..(...)...-..."],["Iceland (\xCDsland)","is","354","+... ... ...."],["India (\u092D\u093E\u0930\u0924)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98","+..(...)...-...."],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (\u65E5\u672C)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962","+...-.-....-...."],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965","+...-....-...."],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996","+...(...)...-..."],["Laos (\u0EA5\u0EB2\u0EA7)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (\u6FB3\u9580)","mo","853","+...-....-...."],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (M\xE9xico)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212","+...-..-....-..."],["Mozambique (Mo\xE7ambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95","+..-...-..."],["Namibia (Namibi\xEB)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968","+...-..-...-..."],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970","+...-..-...-...."],["Panama (Panam\xE1)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Per\xFA)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974","+...-....-...."],["R\xE9union (La R\xE9union)","re","262","+...-.....-...."],["Romania (Rom\xE2nia)","ro","40","+..-..-...-...."],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239","+...-..-....."],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966","+...-..-...-...."],["Senegal (S\xE9n\xE9gal)","sn","221","+...-..-...-...."],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82","+..-..-...-...."],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211","+...-..-...-...."],["Spain (Espa\xF1a)","es","34","+.. ... ... ..."],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94","+..-..-...-...."],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963","+...-..-....-..."],["Taiwan (\u53F0\u7063)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (\u0E44\u0E17\u0E22)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216","+...-..-...-..."],["Turkey (T\xFCrkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380","+...(..)...-..-.."],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (O\u02BBzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Citt\xE0 del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Vi\u1EC7t Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],He={},sa={},la=function(e,t,r){t in He||(He[t]=[]);var a=r||0;He[t][a]=e};for(var W=0;W<ae.length;W++){if(F=ae[W],ae[W]={name:F[0],iso2:F[1],dialCode:F[2],priority:F[4]||0},F[3]&&(ae[W].format=F[3]),F[5])for(ae[W].hasAreaCodes=!0,Ge=0;Ge<F[5].length;Ge++)ca=F[2]+F[5][Ge],la(F[1],ca);sa[ae[W].iso2]=W,la(F[1],F[2],F[4])}var F,ca,Ge,si={allCountries:ae,iso2Lookup:sa,allCountryCodes:He},St=si.allCountries;var li={hu_HU:{"06":"+36","36":"+36"},hr_HR:{"0":"+385"},ro_RO:{"0":"+40"}},xt=(e,t)=>{let r=li[e]||{};t=(t||"").trim();var a=t.indexOf("+")==0;if(t=t.replace(/\D/g,""),!t.length)return null;a&&(t=`+${t}`),t.indexOf("00")==0&&(t=`+${t.substring(2)}`);for(let n=0;n<Object.keys(r).length;n++){let s=Object.keys(r)[n];if(t.indexOf(s)==0)return`${r[s]}.${t.substring(s.length)}`}for(let n=0;n<St.length;n++){let{dialCode:s}=St[n];if(t.indexOf(`+${s}`)==0)return`+${s}.${t.substring(s.length+1)}`}let o=Object.keys(r)[0];return`${o?r[o]:"+36"}.${t}`};function E(e,t,r){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate():null}function kt(e,t,r){return e.filter(function(a){if(!a.highestRequiredRole)return!0;for(let o=0;o<(t||[]).length;o++)if(Re(a,t[o],r))return!0;return!1})}function ke(e,t){return e!=="embedded"&&e!=="embedded-safe"||t=="large"?"col-sm-10 col-md-8":t==="medium"?"col-sm-10":""}var da=e=>{let t={},r={},a={dispatch(o,n){if(o!=="@dispatch"&&a.dispatch("@dispatch",[o,n,t[o]]),t[o]){let s;t[o].forEach(p=>{let u=t[o].includes(p)&&p(r,n,a);u&&typeof u.then!="function"&&(r={...r,...u},s={...s,...u})}),s&&a.dispatch("@changed",s)}},get:()=>r,on(o,n){return(t[o]||(t[o]=[])).push(n),()=>{t[o]=t[o].filter(s=>s!==n)}}};return e.forEach(o=>{o&&o(a)}),a.dispatch("@init"),a};function pa(e){e.on("@init",()=>({eyeExaminationProcesses:[],eyeExaminationProcessId:null,unfilteredEyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:r},a)=>(a.length==1&&(e.dispatch("appointment/set",{eye_examination_process:a[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected")),{eyeExaminationProcesses:a})),e.on("eyeExaminationProcessId/set",(r,a)=>({eyeExaminationProcessId:a})),e.on("unfilteredEyeExaminationProcesses/set",(r,a)=>({unfilteredEyeExaminationProcesses:a})),e.on("store/set",async({eyeExaminationProcessId:r},a)=>{var o=null;r?o=[await D.get(e,`eye_examination_processes/${r}`)].filter(p=>p):o=await D.get(e,`eye_examination_processes?hasLength&chain=${a.chain["@id"]}`),e.dispatch("unfilteredEyeExaminationProcesses/set",o);let{calendars:n,calendarRoleCheckMode:s}=e.get();n&&n.length&&t(o,n,s)}),e.on("calendars/set",async({unfilteredEyeExaminationProcesses:r},a)=>{let{calendarRoleCheckMode:o}=e.get();r&&r.length&&t(r,a,o)});function t(r,a,o){e.dispatch("eyeExaminationProcesses/set",kt(r,a,o))}}var $t=["storeSelection","process","calendar","appointment","customer","summary"];function ua(e){var t=(a,o)=>$t.filter(n=>a.indexOf(n)!=-1&&n!=o),r=(a,o)=>$t.filter(n=>a.indexOf(n)!=-1||n==o);e.on("@init",()=>({currentStep:"storeSelection",availableSteps:$t,calendarStepShouldBeHidden:!1,showFirstAvailableUserItem:!0})),e.on("currentStep/set",({availableSteps:a,currentStep:o,rootElement:n},s)=>(n.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:a.indexOf(s)!=-1?s:o})),e.on("calendarStepShouldBeHidden/set",({availableSteps:a},o)=>({calendarStepShouldBeHidden:o,availableSteps:t(a,"calendar")})),e.on("showFirstAvailableUserItem/set",(a,o)=>({showFirstAvailableUserItem:o})),e.on("currentStep/next",({currentStep:a,availableSteps:o,rootElement:n})=>{var s=o.indexOf(a);return n.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:s<o.length-1?o[s+1]:a}}),e.on("currentStep/previous",({currentStep:a,availableSteps:o,rootElement:n})=>{var s=o.indexOf(a);return n.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:s>0?o[s-1]:a}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:a,availableSteps:o,currentStep:n,rootElement:s})=>a.length==1?(s.querySelector(".cvio-ab-content").scrollTop=0,n=="process"&&(n=o.filter(p=>p!="storeSelection"&&p!="process")[0]),{availableSteps:o=t(o,"process"),currentStep:n}):{availableSteps:o=r(o,"process")}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:a,appointment:o,calendars:n,currentStep:s,calendarStepShouldBeHidden:p,calendarRoleCheckMode:u})=>{if(!p){var f=Se({appointment:o,calendars:n,calendarRoleCheckMode:u});return{availableSteps:r(a,"calendar")}}}),e.on("store/setStoreSelection/set",({availableSteps:a,currentStep:o},n)=>{if(n=="no")return{availableSteps:a=t(a,"storeSelection"),currentStep:o=="storeSelection"?a[0]:o}})}function ma(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},r)=>({appointment:Object.assign(t,r)})),e.on("showAppointmentComment/set",(t,r)=>({showAppointmentComment:r})),e.on("appointmentCommentRequired/set",(t,r)=>({appointmentCommentRequired:r})),e.on("constantAppointmentCommentText/set",(t,r)=>({constantAppointmentCommentText:r}))}function fa(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},r)=>(t.headers=Object.assign(t.headers,r),{api:t})),e.on("api/setPath",({api:t},r)=>(t.path=r,{api:t}))}function ha(e){e.on("@init",()=>({language:navigator.language,translationOverrides:{}})),e.on("language/set",(t,r)=>({language:r})),e.on("translationOverrides/set",(t,r)=>({translationOverrides:r}))}function $e(e,{visible:t}={visible:!1}){return r=>{r.on("@init",()=>({[e]:t})),r.on(`${e}/set`,(a,o)=>({[e]:o}))}}var ci=["idle","loading","error","success"];function _a(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},r)=>(r=ci.indexOf(r)!=-1?r:t,r=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:r})),e.on("eyeExaminationProcesses/set",({moduleState:t},r)=>{t!=="idle"&&(e.dispatch("moduleState/set","idle"),e.dispatch("bookerInit"))})}function va(e){e.on("@init",()=>({store:null,storeSelection:"no",stores:null})),e.on("store/set",({storeSelection:r,stores:a},o)=>(r!=="no"&&a==null&&t(o,r),{store:o}));async function t({chain:r},a){e.dispatch("stores/set",await D.get(e,a=="all"?"stores":`stores?chain=${r["@id"]}`))}e.on("stores/set",(r,a)=>({stores:a})),e.on("store/setStoreSelection/set",(r,a)=>({storeSelection:a}))}function ga(e){e.on("@init",()=>({calendars:[],calendarRoleCheckMode:"hierachical"})),e.on("calendars/set",(t,r)=>r!==null?{calendars:r.filter(({user:a})=>a)}:{calendars:null}),e.on("calendarRoleCheckMode/set",(t,r)=>({calendarRoleCheckMode:r})),e.on("store/set",async(t,r)=>{e.dispatch("calendars/set",null);var a=await D.get(e,`appointment_calendars?groups[]=userProfilePictureRead&store=${r["@id"]}`);e.dispatch("calendars/set",a)})}function ba(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),{selectedDate:t}}),e.on("selectedDate/set",(t,r)=>({selectedDate:r}))}var di=(e,t)=>{let{appointment:r,selectedCalendar:a,nextFreeSlots:o,selectedDate:n,calendarRange:s}=e,p=n.getFullYear(),u=n.getMonth(),f=s=="fiveDays"?n.getDate()+7:new Date(p,u+1,0).getDate();for(let c=n.getDate();c<=f;c++){let S=o[E(r,a,new Date(p,u,c))];if(S==null||S.status=="incomplete")return!1}return!0},pi=async(e,t)=>{let{selectedDate:r,calendarRange:a}=e.get();if(a=="fiveDays")return;let o=r.getFullYear(),n=r.getMonth(),s=Object.keys(t).sort().pop(),p=t[s],u=/(?<=^(?:[^-]*-){2})(.*)/,f=s.match(u)[1].split("-");var c=new Date(f[0],parseInt(f[1])-1,parseInt(f[2]));p.status!=="incomplete"&&(c=new Date(f[0],parseInt(f[1])-1,parseInt(f[2])+1)),c<=new Date(o,n+1,0)&&ue(e,c)},ue=async(e,t)=>{let{appointment:r,selectedCalendar:a,firstEligibleTime:o,calendarRange:n}=e.get();if(e.dispatch("nextFreeSlotLoading/set",!0),!r.eye_examination_process||ui(e,t)||di(e.get(),t)){e.dispatch("nextFreeSlotLoading/set",!1);return}let s=await D.get(e,`appointment_next_free_slots?${mi(e,t)}`);if(s.length==0){let S=new Date(t);return S.setDate(t.getDate()+6),e.dispatch("nextFreeSlots/add",ya(e,t,S)),ue(e,S)}let p=new Date(s[s.length-1].start),u=ya(e,t,p);var f=null;for(let S=0;S<s.length;S++){let v=s[S],b=new Date(v.start),g=E(r,a,b);if(!(b<o)){for(let k=0;k<(u[g].slots||[]).length;k++)if(u[g].slots[k]["@id"]==v["@id"]){u[g].status="complete";continue}var c=!1;for(let k of u[g].slots||[])if(k["@id"]==v["@id"]||k.start==v.start){c=!0;break}c||(u[g].status=="empty"&&(u[g].status="incomplete"),u[g].slots||(u[g].slots=[]),u[g].slots.push(v),f&&f!=g&&(u[f].status="complete"),f!=g&&(f=g))}}e.dispatch("nextFreeSlots/add",u),pi(e,u)},ui=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>90,mi=(e,t)=>{let{appointment:r,selectedCalendar:a}=e.get(),o={process:r.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return a?o.calendar=a["@id"]:o.store=e.get().store["@id"],Object.keys(o).map(n=>`${n}=${o[n]}`).join("&")},ya=(e,t,r)=>{let{appointment:a,selectedCalendar:o,nextFreeSlots:n}=e.get(),s=new Date(t);s.setHours(0),s.setMinutes(0);let p={};for(;s<=r;){let u=E(a,o,s);p[u]=n[u]||{status:"empty"},s.setDate(s.getDate()+1)}return p};function Sa(e){e.on("@init",()=>{let t=new Date;return t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:t,firstEligibleTime:t,autoselectNextFreeSlot:!1,nextFreeSlotLoading:!1}}),e.on("firstEligibleTime/set",(t,r)=>{let a=new Date;if(r=="now")return e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a};if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),r=="tomorrow")return{firstEligibleDate:a,firstEligibleTime:a};if(r=="tomorrowNoon"){let o=new Date(a);return o.setHours(12),{firstEligibleDate:a,firstEligibleTime:o}}if(r=="plus24Hours"){let o=new Date;return o.setDate(o.getDate()+1),{firstEligibleDate:a,firstEligibleTime:o}}if(r=="dayAfterTomorrow")return a.setDate(a.getDate()+1),e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a}}),e.on("selectedDate/set",async t=>{ue(e,t.selectedDate)}),e.on("bookerInit",async t=>{t.currentStep=="appointment"&&ue(e,t.selectedDate)}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&ue(e,t.selectedDate)}),e.on("appointment/set",async t=>{t.currentStep=="appointment"&&ue(e,t.selectedDate)}),e.on("appointment/selectSlot",async({appointment:t,calendars:r,currentStep:a,autoselectNextFreeSlot:o},n)=>{if(a==="appointment"){var s=null;for(let p=0;p<r.length;p++)if(n.calendar["@id"]==r[p]["@id"])var s=r[p];if(!s)throw new Error("Could not find calendar");e.dispatch("appointment/set",{start:n.start,end:n.end,calendar:s}),e.dispatch("currentStep/next")}}),e.on("autoselectNextFreeSlot/set",(t,r)=>({autoselectNextFreeSlot:r})),e.on("nextFreeSlots/add",({nextFreeSlots:t,autoselectNextFreeSlot:r},a)=>{let o={nextFreeSlots:Object.assign(t,a)};if(!r)return o;for(let n in t)if(t[n].status!="empty"&&t[n].slots.length>0){e.dispatch("appointment/selectSlot",t[n].slots[0]),o.autoselectNextFreeSlot=!1;break}return o}),e.on("nextFreeSlotLoading/set",(t,r)=>({nextFreeSlotLoading:r}))}var fi=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},hi=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,_i=(e,t)=>{e==null||e===""||hi.test(e.trim().toLowerCase())||t.errors.push("Invalid email address.")};function xa(e){e.on("@init",()=>({customerForm:{},commentError:null,customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:t,customerFormGlobalErrors:r,commentError:a},o)=>({customerForm:Object.assign(t,o.customerForm||{}),customerFormGlobalErrors:o.customerFormGlobalErrors||r,commentError:o.commentError===void 0?a:o.commentError})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:r,appointmentCommentRequired:a})=>{let{customer:o}=r;var n=!1,s=null;if(a&&!(r.comment||"").trim()&&(n=!0,s="This field is required."),Object.keys(t).forEach(p=>{t[p].errors=[],t[p].required&&fi(o[p],t[p]),p=="email"&&_i(o[p],t[p]),t[p].errors.length&&(n=!0)}),n)return{customerForm:t,customerFormGlobalErrors:[],commentError:s};e.dispatch("currentStep/next")})}function ka(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(t,r)=>({headerTitle:r}))}function $a(e){e.on("@init",()=>({calendarRange:"fiveDays",timeSlotMode:"singleColumn"})),e.on("timeSelectionUi/timeSlotMode/set",(t,r)=>({timeSlotMode:r})),e.on("timeSelectionUi/calendarRange/set",(t,r)=>({calendarRange:r}))}function ja(e){e.on("@init",()=>({priceComment:null})),e.on("priceComment/set",(t,r)=>({priceComment:r}))}function wa(e){e.on("@init",()=>({showPrice:!0})),e.on("showPrice/set",(t,r)=>({showPrice:r}))}function Ca(e){e.on("@init",()=>({showExaminerName:null})),e.on("showExaminerName/set",(t,r)=>({showExaminerName:r}))}function Da(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(t,r)=>({booking:r}))}function Ma(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(t,r)=>({country:r}))}function Aa(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(t,r)=>({selectedCalendar:r}))}function Ta(e){e.on("@init",()=>({privacyPolicy:null,privacyPolicyLink:null,medicalConsent:"explicit"})),e.on("bookerInit",async t=>{var r=await D.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let a=0;a<r.length;a++)if(new Date(r[a].valid_until)>new Date)return e.dispatch("privacyPolicy/set",r[a]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(t,r)=>({privacyPolicy:r})),e.on("privacyPolicyLink/set",(t,r)=>({privacyPolicyLink:r})),e.on("medicalConsent/set",(t,r)=>({medicalConsent:r}))}function Pa(e){e.on("@init",()=>({locationName:null,locationAddress:null,showLocation:!0})),e.on("locationName/set",(t,r)=>({locationName:r})),e.on("locationAddress/set",(t,r)=>({locationAddress:r})),e.on("showLocation/set",(t,r)=>({showLocation:r}))}function Fa(e){e.on("@init",()=>({style:"fullScreen"})),e.on("style/set",(t,r)=>({style:r}))}function Ea(e){e.on("@init",()=>({rootElement:null})),e.on("rootElement/set",(t,r)=>({rootElement:r}))}function Oa(e){e.on("@init",()=>({parentWidth:null})),e.on("parentWidth/set",(t,r)=>({parentWidth:r}))}var Ve=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function gi(e,t,r){return r={path:t,exports:{},require:function(a,o){return vi(a,o==null?r.path:o)}},e(r,r.exports),r.exports}function vi(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var jt=gi(function(e,t){var r=200,a="__lodash_hash_undefined__",o=9007199254740991,n="[object Arguments]",s="[object Array]",p="[object Boolean]",u="[object Date]",f="[object Error]",c="[object Function]",S="[object GeneratorFunction]",v="[object Map]",b="[object Number]",g="[object Object]",k="[object Promise]",$="[object RegExp]",w="[object Set]",O="[object String]",K="[object Symbol]",N="[object WeakMap]",J="[object ArrayBuffer]",je="[object DataView]",Ft="[object Float32Array]",Et="[object Float64Array]",Ot="[object Int8Array]",Nt="[object Int16Array]",It="[object Int32Array]",Lt="[object Uint8Array]",zt="[object Uint8ClampedArray]",Rt="[object Uint16Array]",Bt="[object Uint32Array]",mn=/[\\^$.*+?()[\]{}|]/g,fn=/\w*$/,hn=/^\[object .+?Constructor\]$/,_n=/^(?:0|[1-9]\d*)$/,j={};j[n]=j[s]=j[J]=j[je]=j[p]=j[u]=j[Ft]=j[Et]=j[Ot]=j[Nt]=j[It]=j[v]=j[b]=j[g]=j[$]=j[w]=j[O]=j[K]=j[Lt]=j[zt]=j[Rt]=j[Bt]=!0,j[f]=j[c]=j[N]=!1;var vn=typeof Ve=="object"&&Ve&&Ve.Object===Object&&Ve,gn=typeof self=="object"&&self&&self.Object===Object&&self,G=vn||gn||Function("return this")(),Ht=t&&!t.nodeType&&t,Gt=Ht&&!0&&e&&!e.nodeType&&e,bn=Gt&&Gt.exports===Ht;function yn(i,d){return i.set(d[0],d[1]),i}function Sn(i,d){return i.add(d),i}function xn(i,d){for(var m=-1,y=i?i.length:0;++m<y&&d(i[m],m,i)!==!1;);return i}function kn(i,d){for(var m=-1,y=d.length,C=i.length;++m<y;)i[C+m]=d[m];return i}function Vt(i,d,m,y){var C=-1,T=i?i.length:0;for(y&&T&&(m=i[++C]);++C<T;)m=d(m,i[C],C,i);return m}function $n(i,d){for(var m=-1,y=Array(i);++m<i;)y[m]=d(m);return y}function jn(i,d){return i==null?void 0:i[d]}function Ut(i){var d=!1;if(i!=null&&typeof i.toString!="function")try{d=!!(i+"")}catch(m){}return d}function qt(i){var d=-1,m=Array(i.size);return i.forEach(function(y,C){m[++d]=[C,y]}),m}function Ye(i,d){return function(m){return i(d(m))}}function Wt(i){var d=-1,m=Array(i.size);return i.forEach(function(y){m[++d]=y}),m}var wn=Array.prototype,Cn=Function.prototype,we=Object.prototype,Ze=G["__core-js_shared__"],Kt=function(){var i=/[^.]+$/.exec(Ze&&Ze.keys&&Ze.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Jt=Cn.toString,U=we.hasOwnProperty,Ce=we.toString,Dn=RegExp("^"+Jt.call(U).replace(mn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Yt=bn?G.Buffer:void 0,Zt=G.Symbol,Xt=G.Uint8Array,Mn=Ye(Object.getPrototypeOf,Object),An=Object.create,Tn=we.propertyIsEnumerable,Pn=wn.splice,Qt=Object.getOwnPropertySymbols,Fn=Yt?Yt.isBuffer:void 0,En=Ye(Object.keys,Object),Xe=se(G,"DataView"),fe=se(G,"Map"),Qe=se(G,"Promise"),et=se(G,"Set"),tt=se(G,"WeakMap"),he=se(Object,"create"),On=X(Xe),Nn=X(fe),In=X(Qe),Ln=X(et),zn=X(tt),er=Zt?Zt.prototype:void 0,tr=er?er.valueOf:void 0;function Y(i){var d=-1,m=i?i.length:0;for(this.clear();++d<m;){var y=i[d];this.set(y[0],y[1])}}function Rn(){this.__data__=he?he(null):{}}function Bn(i){return this.has(i)&&delete this.__data__[i]}function Hn(i){var d=this.__data__;if(he){var m=d[i];return m===a?void 0:m}return U.call(d,i)?d[i]:void 0}function Gn(i){var d=this.__data__;return he?d[i]!==void 0:U.call(d,i)}function Vn(i,d){var m=this.__data__;return m[i]=he&&d===void 0?a:d,this}Y.prototype.clear=Rn,Y.prototype.delete=Bn,Y.prototype.get=Hn,Y.prototype.has=Gn,Y.prototype.set=Vn;function V(i){var d=-1,m=i?i.length:0;for(this.clear();++d<m;){var y=i[d];this.set(y[0],y[1])}}function Un(){this.__data__=[]}function qn(i){var d=this.__data__,m=De(d,i);if(m<0)return!1;var y=d.length-1;return m==y?d.pop():Pn.call(d,m,1),!0}function Wn(i){var d=this.__data__,m=De(d,i);return m<0?void 0:d[m][1]}function Kn(i){return De(this.__data__,i)>-1}function Jn(i,d){var m=this.__data__,y=De(m,i);return y<0?m.push([i,d]):m[y][1]=d,this}V.prototype.clear=Un,V.prototype.delete=qn,V.prototype.get=Wn,V.prototype.has=Kn,V.prototype.set=Jn;function oe(i){var d=-1,m=i?i.length:0;for(this.clear();++d<m;){var y=i[d];this.set(y[0],y[1])}}function Yn(){this.__data__={hash:new Y,map:new(fe||V),string:new Y}}function Zn(i){return Me(this,i).delete(i)}function Xn(i){return Me(this,i).get(i)}function Qn(i){return Me(this,i).has(i)}function eo(i,d){return Me(this,i).set(i,d),this}oe.prototype.clear=Yn,oe.prototype.delete=Zn,oe.prototype.get=Xn,oe.prototype.has=Qn,oe.prototype.set=eo;function ie(i){this.__data__=new V(i)}function to(){this.__data__=new V}function ro(i){return this.__data__.delete(i)}function ao(i){return this.__data__.get(i)}function no(i){return this.__data__.has(i)}function oo(i,d){var m=this.__data__;if(m instanceof V){var y=m.__data__;if(!fe||y.length<r-1)return y.push([i,d]),this;m=this.__data__=new oe(y)}return m.set(i,d),this}ie.prototype.clear=to,ie.prototype.delete=ro,ie.prototype.get=ao,ie.prototype.has=no,ie.prototype.set=oo;function io(i,d){var m=nt(i)||To(i)?$n(i.length,String):[],y=m.length,C=!!y;for(var T in i)(d||U.call(i,T))&&!(C&&(T=="length"||Co(T,y)))&&m.push(T);return m}function rr(i,d,m){var y=i[d];(!(U.call(i,d)&&ir(y,m))||m===void 0&&!(d in i))&&(i[d]=m)}function De(i,d){for(var m=i.length;m--;)if(ir(i[m][0],d))return m;return-1}function so(i,d){return i&&ar(d,ot(d),i)}function rt(i,d,m,y,C,T,L){var I;if(y&&(I=T?y(i,C,T,L):y(i)),I!==void 0)return I;if(!Ae(i))return i;var cr=nt(i);if(cr){if(I=$o(i),!d)return So(i,I)}else{var le=Z(i),dr=le==c||le==S;if(Fo(i))return fo(i,d);if(le==g||le==n||dr&&!T){if(Ut(i))return T?i:{};if(I=jo(dr?{}:i),!d)return xo(i,so(I,i))}else{if(!j[le])return T?i:{};I=wo(i,le,rt,d)}}L||(L=new ie);var pr=L.get(i);if(pr)return pr;if(L.set(i,I),!cr)var ur=m?ko(i):ot(i);return xn(ur||i,function(it,Te){ur&&(Te=it,it=i[Te]),rr(I,Te,rt(it,d,m,y,Te,i,L))}),I}function lo(i){return Ae(i)?An(i):{}}function co(i,d,m){var y=d(i);return nt(i)?y:kn(y,m(i))}function po(i){return Ce.call(i)}function uo(i){if(!Ae(i)||Mo(i))return!1;var d=lr(i)||Ut(i)?Dn:hn;return d.test(X(i))}function mo(i){if(!or(i))return En(i);var d=[];for(var m in Object(i))U.call(i,m)&&m!="constructor"&&d.push(m);return d}function fo(i,d){if(d)return i.slice();var m=new i.constructor(i.length);return i.copy(m),m}function at(i){var d=new i.constructor(i.byteLength);return new Xt(d).set(new Xt(i)),d}function ho(i,d){var m=d?at(i.buffer):i.buffer;return new i.constructor(m,i.byteOffset,i.byteLength)}function _o(i,d,m){var y=d?m(qt(i),!0):qt(i);return Vt(y,yn,new i.constructor)}function vo(i){var d=new i.constructor(i.source,fn.exec(i));return d.lastIndex=i.lastIndex,d}function go(i,d,m){var y=d?m(Wt(i),!0):Wt(i);return Vt(y,Sn,new i.constructor)}function bo(i){return tr?Object(tr.call(i)):{}}function yo(i,d){var m=d?at(i.buffer):i.buffer;return new i.constructor(m,i.byteOffset,i.length)}function So(i,d){var m=-1,y=i.length;for(d||(d=Array(y));++m<y;)d[m]=i[m];return d}function ar(i,d,m,y){m||(m={});for(var C=-1,T=d.length;++C<T;){var L=d[C],I=y?y(m[L],i[L],L,m,i):void 0;rr(m,L,I===void 0?i[L]:I)}return m}function xo(i,d){return ar(i,nr(i),d)}function ko(i){return co(i,ot,nr)}function Me(i,d){var m=i.__data__;return Do(d)?m[typeof d=="string"?"string":"hash"]:m.map}function se(i,d){var m=jn(i,d);return uo(m)?m:void 0}var nr=Qt?Ye(Qt,Object):No,Z=po;(Xe&&Z(new Xe(new ArrayBuffer(1)))!=je||fe&&Z(new fe)!=v||Qe&&Z(Qe.resolve())!=k||et&&Z(new et)!=w||tt&&Z(new tt)!=N)&&(Z=function(i){var d=Ce.call(i),m=d==g?i.constructor:void 0,y=m?X(m):void 0;if(y)switch(y){case On:return je;case Nn:return v;case In:return k;case Ln:return w;case zn:return N}return d});function $o(i){var d=i.length,m=i.constructor(d);return d&&typeof i[0]=="string"&&U.call(i,"index")&&(m.index=i.index,m.input=i.input),m}function jo(i){return typeof i.constructor=="function"&&!or(i)?lo(Mn(i)):{}}function wo(i,d,m,y){var C=i.constructor;switch(d){case J:return at(i);case p:case u:return new C(+i);case je:return ho(i,y);case Ft:case Et:case Ot:case Nt:case It:case Lt:case zt:case Rt:case Bt:return yo(i,y);case v:return _o(i,y,m);case b:case O:return new C(i);case $:return vo(i);case w:return go(i,y,m);case K:return bo(i)}}function Co(i,d){return d=d==null?o:d,!!d&&(typeof i=="number"||_n.test(i))&&i>-1&&i%1==0&&i<d}function Do(i){var d=typeof i;return d=="string"||d=="number"||d=="symbol"||d=="boolean"?i!=="__proto__":i===null}function Mo(i){return!!Kt&&Kt in i}function or(i){var d=i&&i.constructor,m=typeof d=="function"&&d.prototype||we;return i===m}function X(i){if(i!=null){try{return Jt.call(i)}catch(d){}try{return i+""}catch(d){}}return""}function Ao(i){return rt(i,!0,!0)}function ir(i,d){return i===d||i!==i&&d!==d}function To(i){return Po(i)&&U.call(i,"callee")&&(!Tn.call(i,"callee")||Ce.call(i)==n)}var nt=Array.isArray;function sr(i){return i!=null&&Eo(i.length)&&!lr(i)}function Po(i){return Oo(i)&&sr(i)}var Fo=Fn||Io;function lr(i){var d=Ae(i)?Ce.call(i):"";return d==c||d==S}function Eo(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=o}function Ae(i){var d=typeof i;return!!i&&(d=="object"||d=="function")}function Oo(i){return!!i&&typeof i=="object"}function ot(i){return sr(i)?io(i):mo(i)}function No(){return[]}function Io(){return!1}e.exports=Ao});function Na(e){e.on("bookerInit",t=>({intialStoreContent:jt(t)})),e.on("resetStore",({intialStoreContent:t})=>jt(t))}function Ia(e){e.on("@init",()=>({showProcessLength:!0})),e.on("showProcessLength/set",(t,r)=>({showProcessLength:r}))}var bi=$e("closeConfirmModalState"),yi=$e("globalModalState",{visible:!0}),Si=$e("privacyPolicyModalState"),xi=$e("detailedDescriptionModalState"),La=()=>da([ga,pa,ua,ma,_a,ha,fa,Si,va,ba,Sa,xa,Ta,bi,yi,ka,Da,Ma,Aa,ja,wa,Ca,Pa,xi,$a,Fa,Ea,Oa,Na,Ia]);var wt=e=>{let{currentStep:t,availableSteps:r,dispatch:a,booking:o}=h("currentStep","availableSteps","booking");return l`
    <button type="button" onClick=${()=>a("currentStep/previous")}
      class="${t==r[0]||o?"invisible":""} btn btn-outline-light">
      ←
    </button>
  `};var B=()=>l`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var H=e=>{let t=h(e.modalStateStore),r=t[e.modalStateStore],[a,o]=te(!1),[n,s]=te(!1),[p,u]=te(!1);r&&!a&&(s(!0),setTimeout(()=>{u(!0),o(!0)},0)),!r&&a&&(u(!1),setTimeout(()=>{s(!1),o(!1)},100));let f=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return l`
    <div class="modal text-dark fade ${p?"show":""}" tabindex="-1" style="${n?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?l`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${_(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?l`<p>${_(e.content)}</p>`:l`<${B}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?l`
            <div class="modal-footer">
              ${e.cancelButtonLabel?l`
                <button type="button" class="btn btn-secondary" onClick=${f}>
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
  `};var Ct=e=>{let{dispatch:t}=h();return l`
    <button type="button" class="btn btn-outline-light" onClick=${()=>t("closeConfirmModalState/set",!0)}>X</button>
    <${H} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${()=>t("close")}/>
  `};var za=({customer:e,customerAddress:t})=>l`
      <div>
        <div class="mb-1">
          ${_("Your information")}:
        </div>
        <div class="fw-bold">
          ${e.first_name&&e.last_name?l`${_("Name")}: ${re.format(e)}`:""}
        </div>
        <div>
          ${e.birth?l`${_("Date of birth")}: ${M.formatDate(e.birth)}`:""}
        </div>
        <div>
          ${e.gender?l`${_("Gender")}: ${e.gender=="m"?"F\xE9rfi":"N\u0151"}`:""}
        </div>
        <div>
            ${e.ssn?l`${_("SSN")}: ${e.ssn}`:""}
        </div>
        <div>
          ${t?l`${_("Address")}: ${t}`:""}
        </div>
        <div>
          ${e.mobile?l`${_("Phone number")}: ${e.mobile}`:""}
        </div>
        <div>
          ${e.email?l`Email: ${e.email}`:""}
        </div>
      </div>
  `;var Ci=async e=>{try{var t=await ki(e)}catch(r){if(r instanceof be){$i(e,r);return}throw r}await ji(e,t),await wi(e,t),e.dispatch("moduleState/set","success")},ki=async e=>{let t=Object.assign({},e.appointment.customer,{medical_records_allowed:e.medicalConsent!="disabled"?!0:null,country:e.country,mobile:e.appointment.customer.mobile?xt(e.store.chain.language,e.appointment.customer.mobile):null});return"birth"in t&&(t.birth=Di(t.birth)),Object.keys(t).forEach(r=>{typeof t[r]=="string"&&(t[r]=t[r].trim())}),await D.post(e,"customers",t)},Di=e=>{if(!e||!(e instanceof Date))return null;let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}T00:00:00+00:00`},$i=async(e,t)=>{let{customerForm:r}=e;var a=[];for(let o=0;o<t.getValidations().length;o++){let{propertyPath:n,message:s}=t.getValidations()[o];if(n==""){a.push(s);continue}r[n].errors||(r[n].errors=[]),r[n].errors.push(s)}e.dispatch("customerForm/set",{customerForm:r,customerFormGlobalErrors:a}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},ji=async(e,t)=>{await D.post(e,"customer_consents",{customer:t["@id"],approved_at:new Date,medical_records_allowed:e.medicalConsent!="disabled",source:"api"})},wi=async(e,t)=>{let{appointment:r,language:a,translationOverrides:o,constantAppointmentCommentText:n}=e,s=n||"";r.comment&&(s=(s?s+`

`:"")+r.comment),await D.post(e,"appointment_events",Object.assign({},r,{customer:t["@id"],eye_examination_process:r.eye_examination_process["@id"],calendar:r.calendar["@id"],comment:s||void 0,title:_("%customer%'s examination",{customer:re.format(t,a)},{language:a,translationOverrides:o}),status:"booked",should_send_confirmation_email:!0,should_send_reminder_email:!0,source:"online"}))},Ra=e=>{var t=h("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store","translationOverrides","constantAppointmentCommentText","medicalConsent");let{booking:r,moduleState:a,dispatch:o}=t;return l`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{o("booking/set",!0);try{await Ci(t)}catch(s){throw o("moduleState/set","error"),s}}} disabled=${a!="idle"}
        class="btn btn-primary btn-lg">
        ${r&&a=="idle"?l`<${B}/>`:_("Confirm appointment")}
      </button>
    </div>
  `};var Dt={HUF:0},Mi=(e,t)=>{var r=e.price_list.currency,a={style:"currency",currency:r};return Dt[r]!=null&&(a.maximumFractionDigits=Dt[r],a.minimumFractionDigits=Dt[r]),new Intl.NumberFormat(t,a)},Ue=({process:e})=>{if(!e)return l``;let{store:t,language:r,showPrice:a}=h("store","language","showPrice");if(!a)return l``;let o=e.process_services;var n=null,s=null,p=t.price_list.id;o.forEach(f=>{f.service.packagings.forEach(c=>{c.currentPrices.forEach(S=>{S.price_list.id==p&&((n==null||n>S.value)&&(n=S.value),(s==null||s<S.value)&&(s=S.value))})})});var u=Mi(t,r);return n==null||s==null?l``:n==s?l`${u.format(n)}`:l`${u.format(n)} - ${u.format(s)}`};var qe=e=>{let{appointment:t,language:r,currentStep:a,store:o,selectedCalendar:n,priceComment:s,showPrice:p,showExaminerName:u,locationName:f,locationAddress:c,showLocation:S,dispatch:v}=h("appointment","language","currentStep","store","selectedCalendar","priceComment","showPrice","showExaminerName","locationName","locationAddress","showLocation");if(!o)return;var b=t.calendar||n,g={dateTimeStart:t.start?M.formatDateTime(t.start):null,dateTimeEnd:t.end?M.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:u&&b?b.user.name:null,customer:t.customer,customerAddress:pe.formatAddress(t.customer),showLocation:S,locationName:f!==null?f:o.name,locationAddress:c!==null?c:pe.formatAddress(o),appointmentComment:t.comment};let k=()=>{v("currentStep/set","appointment")};return l`
    <ul class="list-group${a=="summary"?"":" text-end"}">
      ${a!="summary"?l`<li class="list-group-item fw-bold">${_("Appointment summary")}</li>`:null}
      ${g.processName?l`
        <li class="list-group-item">
          <div>${_("Subject")}:</div>
          <div class="fw-bold">${g.processName}</div>
          <div>
            ${g.examinerName?l`${_("examiner: %examiner%",{examiner:g.examinerName})}`:null}
          </div>
        </li>
      `:""}
      ${g.dateTimeStart&&g.dateTimeEnd&&g.processLength?l`
        <li class="list-group-item">
          <div>${_("Start Time")}:</div>
          <div>
            <${ze}//>
          </div>
          <div class="text-muted">
            ${_("It takes up to %length% minutes",{length:g.processLength})}
          </div>
          <div class="fs-6">
            <a href="#" onClick="${k}">${_("change date")}</a>
          </div>
        </li>
      `:""}
      ${a=="summary"?l`
        <li class="list-group-item">
          <${za} customer=${g.customer} customerAddress=${g.customerAddress}/>
        </li>
      `:""}
      ${a=="summary"&&g.appointmentComment?l`
        <li class="list-group-item">
          ${_("Comment")}: ${g.appointmentComment}
        </li>
      `:""}
      ${g.showLocation?l`
            <li class="list-group-item">
              <div>${_("Location")}:</div>
              <div class="fw-bold">${g.locationName}</div>
              <div>${g.locationAddress}</div>
            </li>
        `:""}
      <li class="list-group-item">
        ${p?l`
          <div>${_("Price")}:</div>
          <div class="fw-bold"><${Ue} process=${g.process}/></div>
        `:""}
        <div>${s||""}</div>
      </li>
      ${a=="summary"?l`
          <li class="list-group-item">
            <${Ra}/>
          </li>
        `:""}
    </ul>
  `};var ne=e=>{let{currentStep:t,availableSteps:r,style:a,parentWidth:o}=h("currentStep","availableSteps","style","parentWidth"),n=r.indexOf(e.step),s=r.indexOf(t);if(r.indexOf(e.step)==-1)return l``;var p=t!="process"&&t!="summary"&&t!="storeSelection";return(a==="embedded"||a==="embedded-safe")&&o==="small"&&(p=!1),l`
    <div class="carousel-item
      ${s-1==n?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${s+1==n?"carousel-item-next":""}
    ">
      <div class="container-sm p-1 ${ke(a,o)} ${a}-container">
        <div class="row">
          <div class="${p?"col col-sm-8":"col"}">
            <div class="p-1">
              <${e.wrappedComponent}/>
            </div>
          </div>
          ${p?l`
            <div class="d-none d-sm-block col-4 summarycard">
              <div class="p-1">
                <${qe} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var Ba=e=>{let{appointment:t,dispatch:r,currentStep:a,showProcessLength:o}=h("appointment","currentStep","showProcessLength"),n=()=>{a==="process"&&(r("appointment/set",{eye_examination_process:e.item}),r("currentStep/eyeExaminationProcessSelected"),r("currentStep/next"))},s=p=>{p.stopPropagation(),r("detailedDescriptionModalState/set",e.item.detailed_description)};return l`
    <li class="row list-group-item ${t.eye_examination_process==e.item?"selected":""}" onClick=${n}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.item.name}</h4>
          <p class="${e.item.description&&e.item.description.length>0?"":"d-none"}">
            ${e.item.description}
            ${e.item.detailed_description&&e.item.detailed_description.length>0?l` <a href="#" onClick=${s}>${_("More...")}</a>`:""}
          </p>
          ${o?l`<span class="badge bg-primary me-1">${e.item.length} ${_("@abbrMinute")}</span>`:""}
          <span class="badge bg-primary"><${Ue} process=${e.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var Ha=e=>{let{eyeExaminationProcesses:t}=h("eyeExaminationProcesses"),{detailedDescriptionModalState:r,dispatch:a}=h("detailedDescriptionModalState"),o=()=>a("detailedDescriptionModalState/set",!1);return l`
    <ul class="list-group">
      ${t.length?t.map(n=>l`<${Ba} item=${n} />`):l`<li class="list-group-item"><${B}/></li>`}
    </ul>

    <${H} modalStateStore="detailedDescriptionModalState"
      title="Detailed description"
      content=${r?l([r]):!1}
      approveButtonLabel="Close"
      onApprove=${o}
    />
  `};var Mt=e=>{let{selectedCalendar:t,dispatch:r,currentStep:a}=h("selectedCalendar","currentStep"),o=()=>{a==="calendar"&&(r("selectedCalendar/set",e.item["@id"]?e.item:null),r("currentStep/next"))};return l`
    <li class="list-group-item${t==e.item||!e.item["@id"]&&!t?" selected":""}" onClick=${o}>
      <div class="row">
        <div class="col-auto">
          <div class="avatar me-2">
            ${e.item.user.profile_picture?l`<img class="image" src="data:image/*;base64,${e.item.user.profile_picture}"/>`:l`<h2 class="p-1 text-muted text-center image">?</h2>`}
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
  `};var Ga=()=>l`
    <li class="list-group-item">
      <div class="row">
        <div class="col-auto">
          <div class="avatar me-2">
              <img class="placeholder image"/>
          </div>
        </div>
        <div class="col-8">
          <div class="placeholder fw-bold col-6"></div>
          <div class="card-body">
            <p class="card-text placeholder-glow">
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
            </p>
          </div>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-auto">
          <div class="avatar me-2">
              <img class="placeholder image"/>
          </div>
        </div>
        <div class="col-8">
          <div class="placeholder fw-bold col-6"></div>
          <div class="card-body">
            <p class="card-text placeholder-glow">
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
            </p>
          </div>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>`;var Va=e=>{let{appointment:t,showFirstAvailableUserItem:r,dispatch:a}=h("appointment","showFirstAvailableUserItem"),o=Se(h("calendars","appointment","calendarRoleCheckMode")),n={user:{name:_("First free"),description:_("For finding the nearest free time slot.")}},s=()=>a("currentStep/previous");return l`
    <ul class="list-group">
      ${t.eye_examination_process&&o?o.length?l`
              ${r?l`<${Mt} item=${n} />`:""}
              ${o.map(p=>l`<${Mt} item=${p} />`)}
            `:l`
              <li class="list-group-item text-center">
                ${_("None of our colleagues is available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${s}">
                  ${_("Select another process")}
                </button>
              </li>
          `:l`<${Ga}/>`}
    </ul>
  `};var Ai=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],Ua=({date:e})=>{let{selectedDate:t,dispatch:r}=h("selectedDate"),a=()=>r("selectedDate/set",e);return l`
    <div class="col">
      <div class="card ${R(e,t)?"bg-primary text-light":""}" onClick="${a}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${R(e,t)?"":"text-muted"}">
            ${_(Ai[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var qa=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:r,currentDateGroup:a,nextDateGroup:o}=t;return l`
    <div class="carousel-item
      ${r==e?"carousel-item-prev":""}
      ${a==e?"active":""}
      ${o==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(n=>l`<${Ua} date=${n}/>`)}
      </div>
    </div>
  `};var Ti=["January","February","March","April","May","June","July","August","September","October","November","December"],Wa=e=>{let{selectedDate:t,firstEligibleDate:r,dispatch:a}=h("selectedDate","firstEligibleDate"),o=bt(r),n=()=>a("selectedDate/set",p[4]),s=()=>a("selectedDate/set",f[0]);var p,u,f;for(let S=0;S<o.length&&(p=o[S-1],u=o[S],f=o[S+1],!u.hasDate(t));S++);let c={previousDateGroup:p,currentDateGroup:u,nextDateGroup:f};return l`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${n}
        disabled=${!p}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${_(Ti[u[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${o.map(S=>l`<${qa} dateGroup=${S} visibleDateGroups=${c}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${s}
        disabled=${!f}>
        ${">"}
      </button>
    </div>
  `};var Ka=({day:e})=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:o,dispatch:n}=h("selectedCalendar","appointment","nextFreeSlots","selectedDate"),s=a[E(o,t,e)],p=u=>{n("selectedDate/set",u)};return e<new Date||s&&s.status=="empty"?l`<td class='table-active disabled'>${e.getDate()}</td>`:s?l`
    <td class=${R(e,r)?"bg-primary text-light":"active-cell"} 
      onClick="${()=>p(e)}"
    >
      ${e.getDate()}
    </td>
  `:l`<td class="placeholder">${e.getDate()}</td>`};var Pi=["January","February","March","April","May","June","July","August","September","October","November","December"],Fi=["@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday","@abbrSunday"],Ja=()=>{let{selectedCalendar:e,selectedDate:t,nextFreeSlots:r,appointment:a,dispatch:o}=h("selectedCalendar","appointment","nextFreeSlots","selectedDate"),n=t.getFullYear(),s=t.getMonth(),p=new Date(n,s+1,0).getDate(),u=new Date<new Date(n,s,0),f=new Date(n,s,1),c=[],S=[];var v=!0;for(let k=t.getDate();k<=p;k++){let $=r[E(a,e,new Date(n,s,k))];if($==null||$.status=="incomplete"){v=!1;break}}for(let k=0;k<(f.getDay()||7)-1;k++)c.push(null);for(let k=1;k<=p;k++)c.push(new Date(n,s,k));for(let k=0;k<c.length;k+=7)S.push(c.slice(k,k+7));let b=()=>{o("selectedDate/set",new Date(n,s+1,1))};return l`
    <div class="container text-center calendar px-0">
      <div class="row">
        <div class="col">
          <table class="table table caption-top placeholder-glow">
            <caption class="text-center display-6">
              <button
                class="btn btn-outline-secondary month-previus ${u&&v?null:"disabled"}" 
                onClick="${()=>{o("selectedDate/set",new Date(n,s,0))}}"
              >
                ${"<"}
              </button>
              ${n+" "+_(Pi[s])}
              <button class="btn btn-outline-secondary month-next ${v?null:"disabled"}" onClick="${b}">
                ${">"}
              </button>
            </caption>
            <thead>
              <tr>
                ${Fi.map(k=>l`<th scope="col">${_(k)}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${S.map(k=>l`
                <tr>
                  ${k.map($=>$?l`
                      <${Ka} day=${$}/>
                    `:l`<td></td>`)}
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `};var We=e=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:o,dispatch:n,nextFreeSlotLoading:s}=h("selectedCalendar","appointment","nextFreeSlots","selectedDate","nextFreeSlotLoading");var p=new Date(r),u,f=!1;for(p.setDate(p.getDate()+1);a[u=E(o,t,p)];){if(a[u].status!=="empty"){f=!0;break}p.setDate(p.getDate()+1)}let c=()=>n("selectedDate/set",p);return l`
    <li class="list-group-item p-4 text-center">
      <h5>${_("There are no free appointment times for this day")}</h5>
      ${f?l`
          <div class="text-muted">
            ${_("The next free slot is available on %date%",{date:M.formatDate(p)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${c}">${_("Go to date")}</button>
        `:s?l`
              <div class="text-muted">
                ${_("Search in progress...")}
              </div>
            `:l`
              <button class="btn m-2 btn-primary" onClick="${c}">
                ${_("Click here to search for the next free appointment")}
              </button>
            `}
    </li>
  `};var Ya=e=>{let{dispatch:t,appointment:r}=h("appointment"),a=()=>{t("appointment/selectSlot",e.slot)};return l`
    <li class="list-group-item${xe(new Date(r.start),new Date(e.slot.start))?" selected":""}" onClick=${a}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${M.formatTime(e.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var Za=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=h("selectedCalendar","selectedDate","nextFreeSlots","appointment");var o=E(r,t,e);return l`
    <ul class="list-group mt-3">
      ${a[o]?a[o].status=="empty"?l`<${We}/>`:a[o].slots.map(n=>l`<${Ya} slot=${n}/>`):l`<li class="list-group-item"><${B}/></li>`}
    </ul>
  `};var Xa=({slot:e})=>{let{dispatch:t,appointment:r}=h("appointment"),a=()=>{t("appointment/selectSlot",e)},o=xe(new Date(r.start),new Date(e.start));return l`
    <button class="btn btn-outline-secondary m-1 ${o?" selected":""}" onClick=${a}>
      ${M.formatTime(e.start)}
    </button>
  `};var Ke=({title:e,slots:t})=>t.length?l`
      <div class="pt-3">
        <h4>${_(e)}:</h4>
        ${t.map(r=>l`<${Xa} slot=${r}/>`)}
      </div>
      `:null;var Qa=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=h("selectedCalendar","selectedDate","nextFreeSlots","appointment"),o=E(r,t,e),n=[],s=[],p=[],u=a[o]?a[o].slots:[];for(let f of u||[]){let c=new Date(f.start);c.getHours()<12?n.push(f):c.getHours()<18?s.push(f):p.push(f)}return l`
    <div class="grid">
      ${a[o]?a[o].status=="empty"?l`<${We}/>`:l`
            <${Ke} title=${"Morning"} slots=${n}/>
            <${Ke} title=${"Afternoon"} slots=${s}/>
            <${Ke} title=${"Evening"} slots=${p}/>
          `:l`<li class="list-group-item"><${B}/></li>`}
    </div>
  `};var en=()=>{let{calendarRange:e,timeSlotMode:t}=h("calendarRange","timeSlotMode");return l`
    <${e=="fiveDays"?Wa:Ja}/>
    <${t=="singleColumn"?Za:Qa}/>
  `};var tn=e=>{let{appointment:t,dispatch:r}=h("appointment"),a=o=>{let{value:n}=o.target;var{customer:s}=t;s[e.property]=n,r("appointment/set",{customer:s})};return l`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${a}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var A=e=>{let{customerForm:t}=h("customerForm");if(!!t[e.property]){var r=t[e.property];return l`
    <div class="${e.class||"col-sm"} needs-validation p-1 mb-2 w-100">
      ${e.label?l`
          <label class="form-label text-truncate">
            ${r.required?l`<span class="text-danger">*</span> `:""}
            ${_(e.label)}
          </label>
        `:null}
      <${e.inputClass||tn} property=${e.property}
        invalid=${r.errors&&r.errors.length?"was-validated":""}/>
      ${r.errors&&r.errors.length?r.errors.map(a=>l`<div class="invalid-feedback">${_(a)}</div>`):""}
    </div>
  `}};var rn=e=>{let{appointment:t,showAppointmentComment:r,appointmentCommentRequired:a,commentError:o,dispatch:n}=h("appointment","showAppointmentComment","appointmentCommentRequired","commentError");if(!r)return l``;let s=p=>{let{value:u}=p.target;t.comment=u,n("appointment/set",t),n("customerForm/set",{commentError:null})};return l`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">
            ${a?l`<span class="text-danger">*</span> `:""}
            ${_("Comment")}
          </label>
          <textarea
            class="${o?"is-invalid":""} form-control" value=${t.comment||""} onInput=${s}
            invalid=${o?"was-validated":""}
          ></textarea>
          ${o?l`<div class="invalid-feedback">${_(o)}</div>`:""}
        </div>
      </div>
    `};var me=e=>{let t=r=>{let{value:a}=r.target;e.onInput(a)};return l`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?l`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:r,label:a})=>l`<option value="${r}">${a}</option>`)}
    </select>
  `};var Ei=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),an=e=>{let{appointment:t,dispatch:r}=h("appointment"),a=(u,f)=>{var{customer:c}=t;f==""?c[e.property]=null:(c[e.property]=c[e.property]||new Date("2000-01-01"),c[e.property][`set${u}`](f)),r("appointment/set",{customer:c})},o=t.customer[e.property];var n=[];for(let u=1900;u<=new Date().getFullYear();u++)n.push({value:u,label:u});var s=[];for(let u=1;u<=12;u++)s.push({value:u-1,label:u<10?`0${u}`:u});var p=[];for(let u=1;u<=Ei(o);u++)p.push({value:u,label:u<10?`0${u}`:u});return l`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${me} invalid=${e.invalid} onInput=${u=>a("FullYear",u)}
        value=${o?o.getFullYear():""} emptySelection="----" options=${n}
         disabled=${!!t.customer["@id"]}/>
      <${me} invalid=${e.invalid} onInput=${u=>a("Month",u)}
        value=${o?o.getMonth():""} emptySelection="--" options=${s}
         disabled=${!!t.customer["@id"]}/>
      <${me} invalid=${e.invalid} onInput=${u=>a("Date",u)}
        value=${o?o.getDate():""} emptySelection="--" options=${p}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `};var nn=e=>{let{appointment:t,dispatch:r}=h("appointment");return l`
    <${me} onInput=${o=>{var{customer:n}=t;n[e.property]=o,r("appointment/set",{customer:n})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${_("Not specified")}"
        options=${[{value:"m",label:_("Male")},{value:"f",label:_("Female")}]}/>
  `};var on=e=>{let{appointment:t,privacyPolicy:r,dispatch:a}=h("appointment","privacyPolicy"),o=()=>{var{customer:s}=t;s[e.property]=!s[e.property]||null,a("appointment/set",{customer:s})},n=()=>a("privacyPolicyModalState/set",!1);return l`
    <${H} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${r?l([r.content]):""}"
      approveButtonLabel="Close"
      onApprove=${n}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${o}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${_("I have accepted the privacy policy")}
      </label>
    </div>
  `};var sn=e=>{let{appointment:t,dispatch:r}=h("appointment"),a=()=>{var{customer:o}=t;o[e.property]=!o[e.property]||null,r("appointment/set",{customer:o})};return l`
    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${a}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${_("I agree to the use of my medical records according to privacy policy")}
      </label>
    </div>
  `};var ln=e=>{let{customerForm:t,customerFormGlobalErrors:r,medicalConsent:a,dispatch:o}=h("customerForm","customerFormGlobalErrors","language","medicalConsent"),n=()=>{o("customerForm/validateAndNext")};return l`
    <div class="card p-2">
      ${r&&r.length?l`
          <div class="row mx-2 text-danger">
            ${r.map(s=>l`<p>${s}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${re.shouldSwitchNameOrder()?l`
            <${A} property="last_name" label="Last name"/>
            <${A} property="first_name" label="First name"/>
          `:l`
            <${A} property="first_name" label="First name"/>
            <${A} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${A} class="col-lg-5" property="birth" label="Birth" inputClass=${an}/>
        <${A} property="gender" label="Gender" inputClass=${nn}/>
        <${A} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${A} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${A} property="postal_code" label="Postal code"/><${A} property="city" label="City"/>
      </div>
      <div class="row mx-2">
        <${A} property="street_address" label="Street address"/>
      </div>
      <div class="row mx-2">
        <${A} property="mobile" label="Mobile"/><${A} property="email" label="Email"/>
      </div>
      <${rn}/>
      <div class="row mx-2">
        <${A} property="acceptPrivacyPolicy" inputClass=${on}/>
      </div>
      ${a=="explicit"?l`
          <div class="row mx-2">
            <${A} property="acceptMedicalRecordsUse" inputClass=${sn}/>
          </div>
        `:""}
      <button class="mx-2 btn btn-primary" onClick=${n}>${_("Next")}</button>
    </div>
  `};var cn=({item:e})=>{let{store:t,dispatch:r,currentStep:a}=h("store","currentStep"),o=()=>{a==="storeSelection"&&(r("store/set",e),r("currentStep/next"))},n=pe.formatAddress(e);return l`
    <li class="storeItem row list-group-item ${t==e?"selected":""}" onClick=${o}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.name}</h4>
          ${e.phone?l`<span class="iconHolder">\u{1F57B}</span> ${e.phone}<br/>`:""}
          ${e.email?l`<span class="iconHolder">\u{2709}</span> ${e.email}<br/>`:""}
          ${n?l`<span class="iconHolder">\u{1F588}</span> ${n}`:""}
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var dn=()=>l`
    <li class="list-group-item">
      <div class="row">
        <div class="col-auto">
        </div>
        <div class="col-8">
          <div class="placeholder fw-bold col-6"></div>
          <div class="card-body">
            <p class="card-text placeholder-glow">
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
            </p>
          </div>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-auto">
        </div>
        <div class="col-8">
          <div class="placeholder fw-bold col-6"></div>
          <div class="card-body">
            <p class="card-text placeholder-glow">
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
              <span class="placeholder m-1 placeholder-lg"></span>
            </p>
          </div>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>`;var pn=e=>{let{stores:t}=h("stores");return t!==null?(t.sort((r,a)=>r.name.localeCompare(a.name)),t.map(r=>l`<${cn} item=${r}/>`)):l`<${dn}/>`};var At=e=>l`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${ne} step="storeSelection" wrappedComponent=${pn}/>
        <${ne} step="process" wrappedComponent=${Ha}/>
        <${ne} step="calendar" wrappedComponent=${Va}/>
        <${ne} step="appointment" wrappedComponent=${en}/>
        <${ne} step="customer" wrappedComponent=${ln}/>
        <${ne} step="summary" wrappedComponent=${qe}/>
      </div>
    </div>
  `;var Tt=e=>{let{moduleState:t,appointment:r,dispatch:a,style:o}=h("moduleState","appointment","style"),n=()=>{o=="embedded"||o=="embedded-safe"?a("resetStore"):a("close")};switch(t){case"success":return l`
        <${H} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${_("Your appointment have been recorded.")}
            ${_("The examination will start at %start%, please arrive 5 minutes early.",{start:M.formatTime(r.start)})}
            ${_("If you have any further questions, please contact us through our customer service.")}
          "
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;case"error":return l`
        <${H} modalStateStore="globalModalState"
          headerClasses="bg-danger text-light"
          contentClasses="text-danger"
          approveButtonClasses="btn-danger"
          title="Appointment booking failed"
          content="Due to an unexpected error appointment could not be booked, please restart the process"
          approveButtonLabel="OK"
          onApprove=${n}/>
      `;default:return l`
        <${H} modalClasses="modal-fullscreen" modalStateStore="globalModalState"/>
      `}};var Pt=({colors:e})=>{if(e=e||{},Object.keys(e).length!=0)return l`
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
  `};var un=e=>{let{headerTitle:t,currentStep:r,style:a,parentWidth:o}=h("headerTitle","currentStep","style","parentWidth");switch(r){case"storeSelection":var n=_("Store selection");break;case"process":var n=_("Select eye examination type");break;case"calendar":var n=_("Select a vision expert");break;case"appointment":var n=_("Select your desired appointment time");break;case"customer":var n=_("Enter customer details");break;default:var n=_("Appointment details verification");break}return l`
    <div class="booker-header bg-primary bg-gradient text-light p-2 ${a}-header">
      <div class="container ${ke(a,o)} ${a}-header-container">
        <div class="row">
          <div class="col-8 px-1">
            <h3 class="text-truncate">
              ${t||_("Appointment booking")}
            </h3>
            <h5 class="text-truncate">
              ${n}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${wt}/>
              ${a==="embedded"||a==="embedded-safe"?"":l`<${Ct}/>`}
            </div>
          </div>
        </div>
      </div>
    </div>
    `};var Oi=e=>l`
    <${Pt} colors=${e.colors}/>
    <div class="booker-widget fixed-top ${e.style}">
      <${ht.Provider} value=${e.store}>
        <${Tt}/>
        <${un}/>
        <div class="bg-body content ${e.style}-content">
          <${At}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `,Je=class{constructor(t){var a;var r=La();this.store=r,t.medicalConsent||(t.medicalConsent="explicit"),this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode),t.calendarStepShouldBeHidden&&r.dispatch("calendarStepShouldBeHidden/set",t.calendarStepShouldBeHidden),t.calendarRoleCheckMode&&r.dispatch("calendarRoleCheckMode/set",t.calendarRoleCheckMode),t.showFirstAvailableUserItem!==void 0&&r.dispatch("showFirstAvailableUserItem/set",t.showFirstAvailableUserItem),t.showExaminerName!==void 0&&r.dispatch("showExaminerName/set",t.showExaminerName),t.firstEligibleTime&&r.dispatch("firstEligibleTime/set",t.firstEligibleTime),t.language&&r.dispatch("language/set",t.language),t.translationOverrides&&r.dispatch("translationOverrides/set",t.translationOverrides),t.headerTitle&&r.dispatch("headerTitle/set",t.headerTitle),t.country&&r.dispatch("country/set",t.country),t.priceComment&&r.dispatch("priceComment/set",t.priceComment),t.showPrice!==void 0&&r.dispatch("showPrice/set",t.showPrice),t.privacyPolicyLink&&r.dispatch("privacyPolicyLink/set",t.privacyPolicyLink),t.showAppointmentComment&&r.dispatch("showAppointmentComment/set",t.showAppointmentComment),t.appointmentCommentRequired&&r.dispatch("appointmentCommentRequired/set",t.appointmentCommentRequired),t.autoselectNextFreeSlot&&r.dispatch("autoselectNextFreeSlot/set",t.autoselectNextFreeSlot),t.constantAppointmentCommentText&&r.dispatch("constantAppointmentCommentText/set",t.constantAppointmentCommentText),t.locationName!==void 0&&r.dispatch("locationName/set",t.locationName),t.locationAddress!==void 0&&r.dispatch("locationAddress/set",t.locationAddress),t.showLocation!==void 0&&r.dispatch("showLocation/set",t.showLocation),t.confirmationStatus!==void 0&&r.dispatch("appointment/set",{confirmation_status:t.confirmationStatus}),t.showProcessLength!==void 0&&r.dispatch("showProcessLength/set",t.showProcessLength),t.timeSlotMode&&r.dispatch("timeSelectionUi/timeSlotMode/set",t.timeSlotMode),t.calendarRange&&r.dispatch("timeSelectionUi/calendarRange/set",t.calendarRange),t.style&&r.dispatch("style/set",t.style),t.eyeExaminationProcessId&&r.dispatch("eyeExaminationProcessId/set",t.eyeExaminationProcessId),r.dispatch("store/setStoreSelection/set",(a=t.storeSelection)!=null?a:"no"),r.dispatch("medicalConsent/set",t.medicalConsent),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:r,medicalConsent:a}){var o={};r=["first_name","last_name","acceptPrivacyPolicy"].concat(a!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(r||["email"]),["first_name","last_name","acceptPrivacyPolicy"].concat(a!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(t||["mobile","email"]).forEach(n=>{o[n]={required:r.indexOf(n)!=-1}}),this.store.dispatch("customerForm/set",{customerForm:o})}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){var r=await D.get(this.store,`stores?code=${t}`);this.store.dispatch("store/set",r[0])}async loadCSSFiles(t,r){for(let a=0;a<t.length;a++)try{let o=await fetch(t[a]);if(!o.ok)throw new Error("Failed to load CSS file");let n=await o.text();n=n.replace(/:root\s*{/,":host {");let s=document.createElement("style");s.textContent=n,r.appendChild(s)}catch(o){console.error("Error loading CSS:",o)}}dispatchParentWidth(t){t.clientWidth<=576?this.store.dispatch("parentWidth/set","small"):t.clientWidth<=768?this.store.dispatch("parentWidth/set","medium"):this.store.dispatch("parentWidth/set","large")}createElementAndRender({parentElement:t,colors:r,cssUrls:a}){if(this.store.get().style=="embedded-safe"){this.dispatchParentWidth(t);let s=t.attachShadow({mode:"open"});var o=document.createElement("div");o.id="embeddedShadowBooker",this.loadCSSFiles(a,s),s.appendChild(o)}else{var o=document.createElement("div");(t||document.body).appendChild(o)}this.store.dispatch("rootElement/set",o),ct(l`<${Oi} store=${this.store} colors=${r} style=${this.store.get().style}/>`,o);let n=function(s){this.dispatchParentWidth(t)}.bind(this);window.addEventListener("resize",n),this.store.on("close",()=>{o.remove(),window.removeEventListener("resize",n),t&&t.remove()})}getStore(){return this.store}},Ni=Je;window.ClearvisioAppointmentBooker=Je;export{Ni as default};
