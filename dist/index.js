var ee,h,Le,q,He,Ge,Re,te={},Ue=[],Sr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,t){for(var r in t)e[r]=t[r];return e}function Ve(e){var t=e.parentNode;t&&t.removeChild(e)}function I(e,t,r){var a,n,o,i={};for(o in t)o=="key"?a=t[o]:o=="ref"?n=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?ee.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return re(e,i,a,n,null)}function re(e,t,r,a,n){var o={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n==null?++Le:n};return n==null&&h.vnode!=null&&h.vnode(o),o}function z(e){return e.children}function D(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?H(e):null}function qe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return qe(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&q.push(e)&&!ae.__r++||Ge!==h.debounceRendering)&&((Ge=h.debounceRendering)||He)(ae)}function ae(){for(var e;ae.__r=q.length;)e=q.sort(function(t,r){return t.__v.__b-r.__v.__b}),q=[],e.some(function(t){var r,a,n,o,i,p;t.__d&&(i=(o=(r=t).__v).__e,(p=r.__P)&&(a=[],(n=P({},o)).__v=o.__v+1,he(p,o,n,r.__n,p.ownerSVGElement!==void 0,o.__h!=null?[i]:null,a,i==null?H(o):i,o.__h),Ke(a,o),o.__e!=i&&qe(o)))})}function Qe(e,t,r,a,n,o,i,p,c,u){var s,v,m,f,g,F,b,y=a&&a.__k||Ue,j=y.length;for(r.__k=[],s=0;s<t.length;s++)if((f=r.__k[s]=(f=t[s])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?re(null,f,null,null,f):Array.isArray(f)?re(z,{children:f},null,null,null):f.__b>0?re(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=r,f.__b=r.__b+1,(m=y[s])===null||m&&f.key==m.key&&f.type===m.type)y[s]=void 0;else for(v=0;v<j;v++){if((m=y[v])&&f.key==m.key&&f.type===m.type){y[v]=void 0;break}m=null}he(e,f,m=m||te,n,o,i,p,c,u),g=f.__e,(v=f.ref)&&m.ref!=v&&(b||(b=[]),m.ref&&b.push(m.ref,null,f),b.push(v,f.__c||g,f)),g!=null?(F==null&&(F=g),typeof f.type=="function"&&f.__k===m.__k?f.__d=c=Je(f,c,e):c=We(e,f,m,y,g,c),typeof r.type=="function"&&(r.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=H(m))}for(r.__e=F,s=j;s--;)y[s]!=null&&(typeof r.type=="function"&&y[s].__e!=null&&y[s].__e==r.__d&&(r.__d=H(a,s+1)),Ze(y[s],y[s]));if(b)for(s=0;s<b.length;s++)Ye(b[s],b[++s],b[++s])}function Je(e,t,r){for(var a,n=e.__k,o=0;n&&o<n.length;o++)(a=n[o])&&(a.__=e,t=typeof a.type=="function"?Je(a,t,r):We(r,a,a,n,a.__e,t));return t}function K(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){K(r,t)}):t.push(e)),t}function We(e,t,r,a,n,o){var i,p,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(r==null||n!=o||n.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(n),i=null;else{for(p=o,c=0;(p=p.nextSibling)&&c<a.length;c+=2)if(p==n)break e;e.insertBefore(n,o),i=o}return i!==void 0?i:n.nextSibling}function kr(e,t,r,a,n){var o;for(o in r)o==="children"||o==="key"||o in t||oe(e,o,null,r[o],a);for(o in t)n&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||oe(e,o,t[o],r[o],a)}function Xe(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||Sr.test(t)?r:r+"px"}function oe(e,t,r,a,n){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||Xe(e.style,t,"");if(r)for(t in r)a&&r[t]===a[t]||Xe(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?a||e.addEventListener(t,o?tt:et,o):e.removeEventListener(t,o?tt:et,o);else if(t!=="dangerouslySetInnerHTML"){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(i){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function et(e){this.l[e.type+!1](h.event?h.event(e):e)}function tt(e){this.l[e.type+!0](h.event?h.event(e):e)}function he(e,t,r,a,n,o,i,p,c){var u,s,v,m,f,g,F,b,y,j,Q,w=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(c=r.__h,p=t.__e=r.__e,t.__h=null,o=[p]),(u=h.__b)&&u(t);try{e:if(typeof w=="function"){if(b=t.props,y=(u=w.contextType)&&a[u.__c],j=u?y?y.props.value:u.__:a,r.__c?F=(s=t.__c=r.__c).__=s.__E:("prototype"in w&&w.prototype.render?t.__c=s=new w(b,j):(t.__c=s=new D(b,j),s.constructor=w,s.render=$r),y&&y.sub(s),s.props=b,s.state||(s.state={}),s.context=j,s.__n=a,v=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),w.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=P({},s.__s)),P(s.__s,w.getDerivedStateFromProps(b,s.__s))),m=s.props,f=s.state,v)w.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(w.getDerivedStateFromProps==null&&b!==m&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(b,j),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(b,s.__s,j)===!1||t.__v===r.__v){s.props=b,s.state=s.__s,t.__v!==r.__v&&(s.__d=!1),s.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(X){X&&(X.__=t)}),s.__h.length&&i.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(b,s.__s,j),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(m,f,g)})}s.context=j,s.props=b,s.state=s.__s,(u=h.__r)&&u(t),s.__d=!1,s.__v=t,s.__P=e,u=s.render(s.props,s.state,s.context),s.state=s.__s,s.getChildContext!=null&&(a=P(P({},a),s.getChildContext())),v||s.getSnapshotBeforeUpdate==null||(g=s.getSnapshotBeforeUpdate(m,f)),Q=u!=null&&u.type===z&&u.key==null?u.props.children:u,Qe(e,Array.isArray(Q)?Q:[Q],t,r,a,n,o,i,p,c),s.base=t.__e,t.__h=null,s.__h.length&&i.push(s),F&&(s.__E=s.__=null),s.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=xr(r.__e,t,r,a,n,o,i,c);(u=h.diffed)&&u(t)}catch(X){t.__v=null,(c||o!=null)&&(t.__e=p,t.__h=!!c,o[o.indexOf(p)]=null),h.__e(X,t,r)}}function Ke(e,t){h.__c&&h.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){h.__e(a,r.__v)}})}function xr(e,t,r,a,n,o,i,p){var c,u,s,v=r.props,m=t.props,f=t.type,g=0;if(f==="svg"&&(n=!0),o!=null){for(;g<o.length;g++)if((c=o[g])&&(c===e||(f?c.localName==f:c.nodeType==3))){e=c,o[g]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=n?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),o=null,p=!1}if(f===null)v===m||p&&e.data===m||(e.data=m);else{if(o=o&&ee.call(e.childNodes),u=(v=r.props||te).dangerouslySetInnerHTML,s=m.dangerouslySetInnerHTML,!p){if(o!=null)for(v={},g=0;g<e.attributes.length;g++)v[e.attributes[g].name]=e.attributes[g].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(kr(e,m,v,n,p),s)t.__k=[];else if(g=t.props.children,Qe(e,Array.isArray(g)?g:[g],t,r,a,n&&f!=="foreignObject",o,i,o?o[0]:r.__k&&H(r,0),p),o!=null)for(g=o.length;g--;)o[g]!=null&&Ve(o[g]);p||("value"in m&&(g=m.value)!==void 0&&(g!==e.value||f==="progress"&&!g)&&oe(e,"value",g,v.value,!1),"checked"in m&&(g=m.checked)!==void 0&&g!==e.checked&&oe(e,"checked",g,v.checked,!1))}return e}function Ye(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(a){h.__e(a,r)}}function Ze(e,t,r){var a,n;if(h.unmount&&h.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||Ye(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){h.__e(o,t)}a.base=a.__P=null}if(a=e.__k)for(n=0;n<a.length;n++)a[n]&&Ze(a[n],t,typeof e.type!="function");r||e.__e==null||Ve(e.__e),e.__e=e.__d=void 0}function $r(e,t,r){return this.constructor(e,r)}function ve(e,t,r){var a,n,o;h.__&&h.__(e,t),n=(a=typeof r=="function")?null:r&&r.__k||t.__k,o=[],he(t,e=(!a&&r||t).__k=I(z,null,[e]),n||te,te,t.ownerSVGElement!==void 0,!a&&r?[r]:n?null:t.firstChild?ee.call(t.childNodes):null,o,!a&&r?r:n?n.__e:t.firstChild,a),Ke(o,e)}function rt(e,t){var r={__c:t="__cC"+Re++,__:e,Consumer:function(a,n){return a.children(n)},Provider:function(a){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.some(_e)},this.sub=function(i){n.push(i);var p=i.componentWillUnmount;i.componentWillUnmount=function(){n.splice(n.indexOf(i),1),p&&p.call(i)}}),a.children}};return r.Provider.__=r.Consumer.contextType=r}ee=Ue.slice,h={__e:function(e,t){for(var r,a,n;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),n=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),n=r.__d),n)return r.__E=r}catch(o){e=o}throw e}},Le=0,D.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},r),this.props)),e&&P(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),_e(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},D.prototype.render=z,q=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ae.__r=0,Re=0;var G,k,at,ge=0,be=[],ot=h.__b,nt=h.__r,it=h.diffed,st=h.__c,lt=h.unmount;function J(e,t){h.__h&&h.__h(k,e,ge||t),ge=0;var r=k.__H||(k.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function N(e){return ge=1,Cr(ct,e)}function Cr(e,t,r){var a=J(G++,2);return a.t=e,a.__c||(a.__=[r?r(t):ct(void 0,t),function(n){var o=a.t(a.__[0],n);a.__[0]!==o&&(a.__=[o,a.__[1]],a.__c.setState({}))}],a.__c=k),a.__}function pt(e,t){var r=J(G++,3);!h.__s&&ye(r.__H,t)&&(r.__=e,r.__H=t,k.__H.__h.push(r))}function ut(e,t){var r=J(G++,4);!h.__s&&ye(r.__H,t)&&(r.__=e,r.__H=t,k.__h.push(r))}function dt(e,t){var r=J(G++,7);return ye(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function mt(e){var t=k.context[e.__c],r=J(G++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(k)),t.props.value):e.__}function jr(){be.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(ne),e.__H.__h.forEach(Se),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}),be=[]}h.__b=function(e){k=null,ot&&ot(e)},h.__r=function(e){nt&&nt(e),G=0;var t=(k=e.__c).__H;t&&(t.__h.forEach(ne),t.__h.forEach(Se),t.__h=[])},h.diffed=function(e){it&&it(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(be.push(t)!==1&&at===h.requestAnimationFrame||((at=h.requestAnimationFrame)||function(r){var a,n=function(){clearTimeout(o),ft&&cancelAnimationFrame(a),setTimeout(r)},o=setTimeout(n,100);ft&&(a=requestAnimationFrame(n))})(jr)),k=null},h.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ne),r.__h=r.__h.filter(function(a){return!a.__||Se(a)})}catch(a){t.some(function(n){n.__h&&(n.__h=[])}),t=[],h.__e(a,r.__v)}}),st&&st(e,t)},h.unmount=function(e){lt&&lt(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ne)}catch(r){h.__e(r,t.__v)}};var ft=typeof requestAnimationFrame=="function";function ne(e){var t=k;typeof e.__c=="function"&&e.__c(),k=t}function Se(e){var t=k;e.__c=e.__(),k=t}function ye(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function ct(e,t){return typeof t=="function"?t(e):t}function wr(e,t){for(var r in t)e[r]=t[r];return e}function _t(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function ht(e){this.props=e}(ht.prototype=new D).isPureReactComponent=!0,ht.prototype.shouldComponentUpdate=function(e,t){return _t(this.props,e)||_t(this.state,t)};var vt=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),vt&&vt(e)};var Dr=h.__e;h.__e=function(e,t,r){if(e.then){for(var a,n=t;n=n.__;)if((a=n.__c)&&a.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),a.__c(e,t)}Dr(e,t,r)};var gt=h.unmount;function ke(){this.__u=0,this.t=null,this.__b=null}function bt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ie(){this.u=null,this.o=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),gt&&gt(e)},(ke.prototype=new D).__c=function(e,t){var r=t.__c,a=this;a.t==null&&(a.t=[]),a.t.push(r);var n=bt(a.__v),o=!1,i=function(){o||(o=!0,r.__R=null,n?n(p):p())};r.__R=i;var p=function(){if(!--a.__u){if(a.state.__e){var u=a.state.__e;a.__v.__k[0]=function v(m,f,g){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function(F){return v(F,f,g)}),m.__c&&m.__c.__P===f&&(m.__e&&g.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=g)),m}(u,u.__c.__P,u.__c.__O)}var s;for(a.setState({__e:a.__b=null});s=a.t.pop();)s.forceUpdate()}},c=t.__h===!0;a.__u++||c||a.setState({__e:a.__b=a.__v.__k[0]}),e.then(i,i)},ke.prototype.componentWillUnmount=function(){this.t=[]},ke.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=function o(i,p,c){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),i.__c.__H=null),(i=wr({},i)).__c!=null&&(i.__c.__P===c&&(i.__c.__P=p),i.__c=null),i.__k=i.__k&&i.__k.map(function(u){return o(u,p,c)})),i}(this.__b,r,a.__O=a.__P)}this.__b=null}var n=t.__e&&I(z,null,e.fallback);return n&&(n.__h=null),[I(z,null,t.__e?null:e.children),n]};var yt=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(ie.prototype=new D).__e=function(e){var t=this,r=bt(t.__v),a=t.o.get(e);return a[0]++,function(n){var o=function(){t.props.revealOrder?(a.push(n),yt(t,e,a)):n()};r?r(o):o()}},ie.prototype.render=function(e){this.u=null,this.o=new Map;var t=K(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},ie.prototype.componentDidUpdate=ie.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){yt(e,r,t)})};var Mr=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Fr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Pr=typeof document!="undefined",Tr=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};D.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(D.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var St=h.event;function Er(){}function Ar(){return this.cancelBubble}function Or(){return this.defaultPrevented}h.event=function(e){return St&&(e=St(e)),e.persist=Er,e.isPropagationStopped=Ar,e.isDefaultPrevented=Or,e.nativeEvent=e};var kt={configurable:!0,get:function(){return this.class}},xt=h.vnode;h.vnode=function(e){var t=e.type,r=e.props,a=r;if(typeof t=="string"){var n=t.indexOf("-")===-1;for(var o in a={},r){var i=r[o];Pr&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in r&&i==null||(o==="defaultValue"&&"value"in r&&r.value==null?o="value":o==="download"&&i===!0?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Tr(r.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():n&&Fr.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),a[o]=i)}t=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=K(r.children).forEach(function(p){p.props.selected=a.value.indexOf(p.props.value)!=-1})),t=="select"&&a.defaultValue!=null&&(a.value=K(r.children).forEach(function(p){p.props.selected=a.multiple?a.defaultValue.indexOf(p.props.value)!=-1:a.defaultValue==p.props.value})),e.props=a}t&&r.class!=r.className&&(kt.enumerable="className"in r,r.className!=null&&(a.class=r.className),Object.defineProperty(a,"className",kt)),e.$$typeof=Mr,xt&&xt(e)};var $t=h.__r;h.__r=function(e){$t&&$t(e)};var xe=rt(),Ir=typeof window!="undefined"?ut:pt,zr=e=>(...t)=>{let r=mt(e),a=N({});return Ir(()=>r.on("@changed",(n,o)=>{t.some(p=>p in o)&&a[1]({})}),[]),dt(()=>{let n=r.get(),o={};return t.forEach(i=>{o[i]=n[i]}),o.dispatch=r.dispatch,o},[a[0]])},_=zr(xe);var $e=class extends Error{constructor(t){super("Validation error");this.validations=t}getValidations(){return this.validations}},W=$e;var Ct=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),Nr={get:async(e,t)=>{let{path:r,headers:a}=e.get().api;try{let n=await(await fetch(`${r}/${t}`,{headers:Ct(a)})).json();if(!n["hydra:member"])throw new Error("Invalid response");return n["hydra:member"]}catch(n){throw e.dispatch("moduleState/set","error"),n}},post:async({api:e,dispatch:t},r,a)=>{let{path:n,headers:o}=e,i={method:"POST",headers:Ct(o),body:JSON.stringify(a)};try{var p=await(await fetch(`${n}/${r}`,i)).json()}catch(c){throw t("moduleState/set","error"),c}if(p["@id"])return p;throw p.violations?new W(p.violations):(t("moduleState/set","error"),new Error("Invalid result"))}},C=Nr;var jt=function(e,t,r,a){var n;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],p=t[o]?(t[0]|=i?1:2,r[t[o++]]):t[++o];i===3?a[0]=p:i===4?a[1]=Object.assign(a[1]||{},p):i===5?(a[1]=a[1]||{})[t[++o]]=p:i===6?a[1][t[++o]]+=p+"":i?(n=e.apply(p,jt(e,p,r,["",null])),a.push(n),p[0]?t[0]|=2:(t[o-2]=0,t[o]=n)):a.push(p)}return a},wt=new Map;function Dt(e){var t=wt.get(this);return t||(t=new Map,wt.set(this,t)),(t=jt(this,t.get(e)||(t.set(e,t=function(r){for(var a,n,o=1,i="",p="",c=[0],u=function(m){o===1&&(m||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,i):o===3&&(m||i)?(c.push(3,m,i),o=2):o===2&&i==="..."&&m?c.push(4,m,0):o===2&&i&&!m?c.push(5,0,!0,i):o>=5&&((i||!m&&o===5)&&(c.push(o,0,i,n),o=6),m&&(c.push(o,m,0,n),o=6)),i=""},s=0;s<r.length;s++){s&&(o===1&&u(),u(s));for(var v=0;v<r[s].length;v++)a=r[s][v],o===1?a==="<"?(u(),c=[c],o=3):i+=a:o===4?i==="--"&&a===">"?(o=1,i=""):i=a+i[0]:p?a===p?p="":i+=a:a==='"'||a==="'"?p=a:a===">"?(u(),o=1):o&&(a==="="?(o=5,n=i,i=""):a==="/"&&(o<5||r[s][v+1]===">")?(u(),o===3&&(c=c[0]),o=c,(c=c[0]).push(2,0,o),o=0):a===" "||a==="	"||a===`
`||a==="\r"?(u(),o=2):i+=a),o===3&&i==="!--"&&(o=4,c=c[0])}return u(),c}(e)),t),arguments,[])).length>1?t:t[0]}var Br=(e,t,...r)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(a=>a.trim()).map(a=>a.indexOf("cvio-ab-")!==0?`cvio-ab-${a}`:a).join(" ")),I(e,t,...r)),l=Dt.bind(Br);var Ce=e=>{let{dispatch:t}=_();return l`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `};var se=e=>{let{appointment:t}=_("appointment");return l`
    <span class="fw-bold">
      ${t.start?$.formatDateTime(t.start):null}
    </span>
  `};var je={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja a foglal\xE1st?","All inputed data will be lost.":"Mindent megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pontfoglal\xE1s folytat\xE1sa","Cancel appointment":"Foglal\xE1s megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues is available for the selected process":"Egy munkat\xE1rsunk sem el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"Az \xD6n adatai",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m","Appointment details verification":"Foglal\xE1si adatok ellen\u0151rz\xE9se","Appointment summary":"Foglal\xE1si \xF6sszes\xEDt\u0151",Price:"\xC1r","Confirm appointment":"Id\u0151pontfoglal\xE1s j\xF3v\xE1hagy\xE1sa","%customer%'s examination":"%customer% vizsg\xE1lata","Your appointment have been recorded.":"Foglal\xE1s\xE1t r\xF6gz\xEDtett\xFCk.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsg\xE1lat kezdete: %start%, k\xE9rj\xFCk \xE9rkezzen 5 perccel kor\xE1bban.","If you have any further questions, please contact us through our customer service.":"Ha tov\xE1bbi k\xE9rd\xE9se van, keresse fel \xFCgyf\xE9lszolg\xE1latunkat.","Appointment booked!":"Id\u0151pont lefoglalva!","examiner: %examiner%":"v\xE9gzi: %examiner%","It takes up to %length% minutes":"Id\u0151tartam: %length% perc","I have accepted the privacy policy":l`Elfogadom az <${Ce}>adatkezelési tájékoztatóban<//> foglaltakat`,"I agree to the use of my medical records according to privacy policy":"Hozz\xE1j\xE1rulok eg\xE9szs\xE9g\xFCgyi adataim adatkezel\xE9si t\xE1j\xE9koztat\xF3ban foglaltak szerinti kezel\xE9s\xE9hez","Privacy policy":"Adatkezel\xE9si t\xE1j\xE9koztat\xF3",Close:"Bez\xE1r\xE1s","Start Time":"Id\u0151pont",Subject:"T\xE1rgy",Location:"Helysz\xEDn","Appointment booking":"Id\u0151pontfoglal\xE1s","Select eye examination type":"Vizsg\xE1latt\xEDpus v\xE1laszt\xE1sa","Select a vision expert":"L\xE1t\xE1sszak\xE9rt\u0151 v\xE1laszt\xE1sa","Select your desired appointment time":"Id\u0151pont v\xE1laszt\xE1sa","Enter customer details":"\xDCgyf\xE9ladatok megad\xE1sa"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepted the privacy policy":l`I accept the terms of <${Ce}>privacy policy<//>`,"Your appointment starts at startTime":l`Your appointment starts at <${se}//>`}},d=(e,t={},r)=>{r=r||_("language","translationOverrides");let a=r.language,n=je[a]||je[a.substring(0,2)]||je.en;e=r.translationOverrides[e]||n[e]||e;for(let o in t)e=e.replace(new RegExp("%"+o+"%","g"),t[o]);return e};var Mt=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function Y({appointment:e,calendars:t,calendarRoleCheckMode:r}){var a=e?e.eye_examination_process:null;let n=function(o,i){if(!o.only_specific_processes_allowed)return!0;let p=i["@id"].split("/"),c=parseInt(p[p.length-1]);return o.allowed_process_ids.indexOf(c)!=-1};return t.filter(function(o){if(!a||!a.highestRequiredRole)return!0;if(!n(o,a))return!1;for(let i=0;i<Mt.length;i++){let p=Mt[i];if(!(!o.user||o.user.roles.indexOf(p.name)==-1)&&(a.highestRequiredRole==p.name||r=="hierachical"&&p.includes.indexOf(a.highestRequiredRole)!=-1))return!0}return!1})}function T(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var we=5,Lr=e=>{var t=[new Date(e)];for(let r=0;r<we-1;r++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(r){for(let a=0;a<we;a++)if(T(this[a],r))return!0},t},le=[];function De(e){if(le.length)return le;for(var t=e||new Date,r=0;r<=100;r++)le.push(Lr(t)),t=new Date(t),t.setDate(t.getDate()+we);return le}function Z(e,t){return T(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var Me={hu:"%Y. %M. %D."},Ft=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),Pt=e=>{let{language:t}=_("language");var r=Me[t]||Me[t.substring(0,2)]||Me.hu;e=new Date(e);var a=e.getMonth()+1;return r.replace("%Y",e.getFullYear()).replace("%M",`${a<10?"0":""}${a}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},Hr=e=>Pt(e)+" "+Ft(e),$={formatTime:Ft,formatDate:Pt,formatDateTime:Hr};var Tt=["hu"],Et=e=>(e=e||_("language").language,Tt.indexOf(e)!=-1||Tt.indexOf(e.substring(0,2))!=-1),Gr=({first_name:e,last_name:t},r)=>Et(r)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),B={format:Gr,shouldSwitchNameOrder:Et};var L=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93","+..-..-...-...."],["\xC5land Islands","ax","358",""],["Albania (Shqip\xEBri)","al","355","+...(...)...-..."],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (\xD6sterreich)","at","43","+..(...)...-...."],["Azerbaijan (Az\u0259rbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973","+...-....-...."],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375","+...(..)...-..-.."],["Belgium (Belgi\xEB)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (B\xE9nin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (R\xE9publique centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (\u4E2D\u56FD)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["C\xF4te d\u2019Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Cura\xE7ao","cw","599","+...-...-....",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357","+...-..-...-..."],["Czech Republic (\u010Cesk\xE1 republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (Rep\xFAblica Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (F\xF8royar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane fran\xE7aise)","gf","594","+...-.....-...."],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guin\xE9e)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (\u9999\u6E2F)","hk","852","+... .... ...."],["Hungary (Magyarorsz\xE1g)","hu","36","+..(...)...-..."],["Iceland (\xCDsland)","is","354","+... ... ...."],["India (\u092D\u093E\u0930\u0924)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98","+..(...)...-...."],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (\u65E5\u672C)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962","+...-.-....-...."],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965","+...-....-...."],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996","+...(...)...-..."],["Laos (\u0EA5\u0EB2\u0EA7)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (\u6FB3\u9580)","mo","853","+...-....-...."],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (M\xE9xico)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212","+...-..-....-..."],["Mozambique (Mo\xE7ambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95","+..-...-..."],["Namibia (Namibi\xEB)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968","+...-..-...-..."],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970","+...-..-...-...."],["Panama (Panam\xE1)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Per\xFA)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974","+...-....-...."],["R\xE9union (La R\xE9union)","re","262","+...-.....-...."],["Romania (Rom\xE2nia)","ro","40","+..-..-...-...."],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239","+...-..-....."],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966","+...-..-...-...."],["Senegal (S\xE9n\xE9gal)","sn","221","+...-..-...-...."],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82","+..-..-...-...."],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211","+...-..-...-...."],["Spain (Espa\xF1a)","es","34","+.. ... ... ..."],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94","+..-..-...-...."],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963","+...-..-....-..."],["Taiwan (\u53F0\u7063)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (\u0E44\u0E17\u0E22)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216","+...-..-...-..."],["Turkey (T\xFCrkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380","+...(..)...-..-.."],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (O\u02BBzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Citt\xE0 del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Vi\u1EC7t Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],ce={},At={},Ot=function(e,t,r){t in ce||(ce[t]=[]);var a=r||0;ce[t][a]=e};for(var E=0;E<L.length;E++){if(x=L[E],L[E]={name:x[0],iso2:x[1],dialCode:x[2],priority:x[4]||0},x[3]&&(L[E].format=x[3]),x[5])for(L[E].hasAreaCodes=!0,pe=0;pe<x[5].length;pe++)It=x[2]+x[5][pe],Ot(x[1],It);At[L[E].iso2]=E,Ot(x[1],x[2],x[4])}var x,It,pe,Rr={allCountries:L,iso2Lookup:At,allCountryCodes:ce},Fe=Rr.allCountries;var Ur={hu_HU:{"06":"+36","36":"+36"}},Pe=(e,t)=>{let r=Ur[e]||{};t=(t||"").trim();var a=t.indexOf("+")==0;if(t=t.replace(/\D/g,""),!t.length)return null;a&&(t=`+${t}`),t.indexOf("00")==0&&(t=`+${t.substring(2)}`);for(let o=0;o<Object.keys(r).length;o++){let i=Object.keys(r)[o];if(t.indexOf(i)==0)return`${r[i]}.${t.substring(i.length)}`}for(let o=0;o<Fe.length;o++){let{dialCode:i}=Fe[o];if(t.indexOf(`+${i}`)==0)return`+${i}.${t.substring(i.length+1)}`}let n=Object.keys(r)[0];return`${n?r[n]:"+36"}.${t}`};function M(e,t,r){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate():null}var zt=e=>{let t={},r={},a={dispatch(n,o){if(n!=="@dispatch"&&a.dispatch("@dispatch",[n,o,t[n]]),t[n]){let i;t[n].forEach(p=>{let c=t[n].includes(p)&&p(r,o,a);c&&typeof c.then!="function"&&(r={...r,...c},i={...i,...c})}),i&&a.dispatch("@changed",i)}},get:()=>r,on(n,o){return(t[n]||(t[n]=[])).push(o),()=>{t[n]=t[n].filter(i=>i!==o)}}};return e.forEach(n=>{n&&n(a)}),a.dispatch("@init"),a};function Nt(e){e.on("@init",()=>({eyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:t},r)=>(r.length==1&&(e.dispatch("appointment/set",{eye_examination_process:r[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected")),{eyeExaminationProcesses:r}))}var Te=["process","calendar","appointment","customer","summary"];function Bt(e){var t=(a,n)=>Te.filter(o=>a.indexOf(o)!=-1&&o!=n),r=(a,n)=>Te.filter(o=>a.indexOf(o)!=-1||o==n);e.on("@init",()=>({currentStep:"process",availableSteps:Te,calendarStepShouldBeHidden:!1,showFirstAvailableUserItem:!0})),e.on("currentStep/set",({availableSteps:a,currentStep:n},o)=>(document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:a.indexOf(o)!=-1?o:n})),e.on("calendarStepShouldBeHidden/set",({availableSteps:a},n)=>({calendarStepShouldBeHidden:n,availableSteps:t(a,"calendar")})),e.on("showFirstAvailableUserItem/set",(a,n)=>({showFirstAvailableUserItem:n})),e.on("currentStep/next",({currentStep:a,availableSteps:n})=>{var o=n.indexOf(a);return document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:o<n.length-1?n[o+1]:a}}),e.on("currentStep/previous",({currentStep:a,availableSteps:n})=>{var o=n.indexOf(a);return document.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:o>0?n[o-1]:a}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:a,availableSteps:n,currentStep:o})=>{if(a.length==1)return document.querySelector(".cvio-ab-content").scrollTop=0,{availableSteps:n=t(n,"process"),currentStep:o=="process"?n[0]:o}}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:a,appointment:n,calendars:o,currentStep:i,calendarStepShouldBeHidden:p,calendarRoleCheckMode:c})=>{if(!p){var u=Y({appointment:n,calendars:o,calendarRoleCheckMode:c});return{availableSteps:r(a,"calendar")}}})}function Lt(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},r)=>({appointment:Object.assign(t,r)}))}function Ht(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},r)=>(t.headers=Object.assign(t.headers,r),{api:t})),e.on("api/setPath",({api:t},r)=>(t.path=r,{api:t}))}function Gt(e){e.on("@init",()=>({language:navigator.language,translationOverrides:{}})),e.on("language/set",(t,r)=>({language:r})),e.on("translationOverrides/set",(t,r)=>({translationOverrides:r}))}function ue(e,{visible:t}={visible:!1}){return r=>{r.on("@init",()=>({[e]:t})),r.on(`${e}/set`,(a,n)=>({[e]:n}))}}var Vr=["idle","loading","error","success"];function Rt(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},r)=>(r=Vr.indexOf(r)!=-1?r:t,r=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:r}))}function Ut(e){e.on("@init",()=>({store:null})),e.on("store/set",({store:t},r)=>({store:r}))}function Vt(e){e.on("@init",()=>({calendars:[],calendarRoleCheckMode:"hierachical"})),e.on("calendars/set",(t,r)=>({calendars:r.filter(({user:a})=>a)})),e.on("calendarRoleCheckMode/set",(t,r)=>({calendarRoleCheckMode:r}))}function qt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),{selectedDate:t}}),e.on("selectedDate/set",(t,r)=>({selectedDate:r}))}var qr=(e,t)=>{let{appointment:r,selectedCalendar:a,nextFreeSlots:n}=e,o=n[M(r,a,t)];return o&&o.status!="incomplete"},R=async(e,t)=>{let{appointment:r,selectedCalendar:a,firstEligibleTime:n}=e.get();if(!r.eye_examination_process||Kr(e,t)||qr(e.get(),t))return;let o=await C.get(e,`appointment_next_free_slots?${Jr(e,t)}`);if(o.length==0){var i=new Date(t);return i.setDate(t.getDate()+6),e.dispatch("nextFreeSlots/add",Kt(e,t,i)),R(e,i)}let p=new Date(o[o.length-1].start);var c=Kt(e,t,p),u=null;for(let s=0;s<o.length;s++){let v=o[s],m=new Date(v.start),f=M(r,a,m);c[f].length&&c[f][c[f].length-1].start==v.start||m<n||(c[f].status="incomplete",c[f].slots||(c[f].slots=[]),c[f].slots.push(v),u&&u!=f&&(c[u].status="complete"),u!=f&&(u=f))}return e.dispatch("nextFreeSlots/add",c),Z(p,t)&&p.setDate(t.getDate()+7),R(e,p)},Kr=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>21,Jr=(e,t)=>{let{appointment:r,selectedCalendar:a}=e.get();var n={process:r.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return a?n.calendar=a["@id"]:n.store=e.get().store["@id"],Object.keys(n).map(o=>`${o}=${n[o]}`).join("&")},Kt=(e,t,r)=>{let{appointment:a,selectedCalendar:n}=e.get();var o=new Date(t);o.setHours(0),o.setMinutes(0);for(var i={};o<=r;)i[M(a,n,o)]={status:"empty"},o.setDate(o.getDate()+1);return i};function Jt(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:t,firstEligibleTime:t}}),e.on("firstEligibleTime/set",(t,r)=>{var a=new Date;if(r=="now")return e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a};if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),r=="tomorrow")return{firstEligibleDate:a,firstEligibleTime:a};if(r=="tomorrowNoon"){var n=new Date(a);return n.setHours(12),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="plus24Hours"){var n=new Date;return n.setDate(n.getDate()+1),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="dayAfterTomorrow")return a.setDate(a.getDate()+1),e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a}}),e.on("selectedDate/set",async t=>{R(e,t.selectedDate)}),e.on("bookerInit",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("appointment/set",async t=>{t.currentStep=="appointment"&&R(e,t.selectedDate)}),e.on("nextFreeSlots/add",({nextFreeSlots:t},r)=>({nextFreeSlots:Object.assign(t,r)}))}var Wr=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},Yr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Zr=(e,t)=>{e==null||e===""||Yr.test(e.trim().toLowerCase())||t.errors.push("Invalid email address.")};function Wt(e){e.on("@init",()=>({customerForm:{},customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:t,customerFormGlobalErrors:r},a)=>({customerForm:Object.assign(t,a.customerForm||{}),customerFormGlobalErrors:a.customerFormGlobalErrors||r})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:r})=>{let{customer:a}=r;var n=!1;if(Object.keys(t).forEach(o=>{t[o].errors=[],t[o].required&&Wr(a[o],t[o]),o=="email"&&Zr(a[o],t[o]),t[o].errors.length&&(n=!0)}),n)return{customerForm:t,customerFormGlobalErrors:[]};e.dispatch("currentStep/next")})}function Yt(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(t,r)=>({headerTitle:r}))}function Zt(e){e.on("@init",()=>({priceComment:null})),e.on("priceComment/set",(t,r)=>({priceComment:r}))}function Qt(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(t,r)=>({booking:r}))}function Xt(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(t,r)=>({country:r}))}function er(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(t,r)=>({selectedCalendar:r}))}function tr(e){e.on("@init",()=>({privacyPolicy:null})),e.on("bookerInit",async t=>{var r=await C.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let a=0;a<r.length;a++)if(new Date(r[a].valid_until)>new Date)return e.dispatch("privacyPolicy/set",r[a]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(t,r)=>({privacyPolicy:r}))}var Qr=ue("closeConfirmModalState"),Xr=ue("globalModalState",{visible:!0}),ea=ue("privacyPolicyModalState"),rr=()=>zt([Nt,Bt,Lt,Rt,Gt,Ht,ea,Ut,Vt,qt,Jt,Wt,tr,Qr,Xr,Yt,Qt,Xt,er,Zt]);var Ee=e=>{let{currentStep:t,availableSteps:r,dispatch:a,booking:n}=_("currentStep","availableSteps","booking");return l`
    <button type="button" onClick=${()=>a("currentStep/previous")}
      class="${t==r[0]||n?"invisible":""} btn btn-outline-light">
      ←
    </button>
  `};var A=()=>l`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var O=e=>{let t=_(e.modalStateStore),r=t[e.modalStateStore],[a,n]=N(!1),[o,i]=N(!1),[p,c]=N(!1);r&&!a&&(i(!0),setTimeout(()=>{c(!0),n(!0)},0)),!r&&a&&(c(!1),setTimeout(()=>{i(!1),n(!1)},100));let u=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return l`
    <div class="modal text-dark fade ${p?"show":""}" tabindex="-1" style="${o?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?l`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${d(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?l`<p>${d(e.content)}</p>`:l`<${A}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?l`
            <div class="modal-footer">
              ${e.cancelButtonLabel?l`
                <button type="button" class="btn btn-secondary" onClick=${u}>
                  ${d(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?l`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${d(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var Ae=e=>{let{dispatch:t}=_();return l`
    <button type="button" class="btn btn-outline-light" onClick=${()=>t("closeConfirmModalState/set",!0)}>X</button>
    <${O} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${()=>t("close")}/>
  `};var ar=({customer:e,customerAddress:t})=>l`
      <div>
        <div class="mb-1">
          ${d("Your information")}:
        </div>
        <div class="fw-bold">
          ${e.first_name&&e.last_name?l`${d("Name")}: ${B.format(e)}`:""}
        </div>
        <div>
          ${e.birth?l`${d("Date of birth")}: ${$.formatDate(e.birth)}`:""}
        </div>
        <div>
          ${e.gender?l`${d("Gender")}: ${e.gender=="m"?"F\xE9rfi":"N\u0151"}`:""}
        </div>
        <div>
            ${e.ssn?l`${d("SSN")}: ${e.ssn}`:""}
        </div>
        <div>
          ${t?l`${d("Address")}: ${t}`:""}
        </div>
        <div>
          ${e.mobile?l`${d("Phone number")}: ${e.mobile}`:""}
        </div>
        <div>
          ${e.email?l`Email: ${e.email}`:""}
        </div>
      </div>
  `;var na=async e=>{try{var t=await ta(e)}catch(r){if(r instanceof W){ra(e,r);return}throw r}await aa(e,t),await oa(e,t),e.dispatch("moduleState/set","success")},ta=async e=>{let t=Object.assign({},e.appointment.customer,{country:e.country,mobile:e.appointment.customer.mobile?Pe(e.store.chain.language,e.appointment.customer.mobile):null});return Object.keys(t).forEach(r=>{typeof t[r]=="string"&&(t[r]=t[r].trim())}),await C.post(e,"customers",t)},ra=async(e,t)=>{let{customerForm:r}=e;var a=[];for(let n=0;n<t.getValidations().length;n++){let{propertyPath:o,message:i}=t.getValidations()[n];if(o==""){a.push(i);continue}r[o].errors||(r[o].errors=[]),r[o].errors.push(i)}e.dispatch("customerForm/set",{customerForm:r,customerFormGlobalErrors:a}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},aa=async(e,t)=>{await C.post(e,"customer_consents",{customer:t["@id"],approved_at:new Date,medical_records_allowed:!0,source:"api"})},oa=async(e,t)=>{let{appointment:r,language:a,translationOverrides:n}=e;await C.post(e,"appointment_events",Object.assign({},r,{customer:t["@id"],eye_examination_process:r.eye_examination_process["@id"],calendar:r.calendar["@id"],title:d("%customer%'s examination",{customer:B.format(t,a)},{language:a,translationOverrides:n}),status:"booked",should_send_confirmation_email:!0,should_send_reminder_email:!0}))},or=e=>{var t=_("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store","translationOverrides");let{booking:r,moduleState:a,dispatch:n}=t;return l`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{n("booking/set",!0);try{await na(t)}catch(i){throw n("moduleState/set","error"),i}}} disabled=${a!="idle"}
        class="btn btn-primary btn-lg">
        ${r&&a=="idle"?l`<${A}/>`:d("Confirm appointment")}
      </button>
    </div>
  `};var Oe={HUF:0},ia=(e,t)=>{var r=e.price_list.currency,a={style:"currency",currency:r};return Oe[r]!=null&&(a.maximumFractionDigits=Oe[r],a.minimumFractionDigits=Oe[r]),new Intl.NumberFormat(t,a)},de=({process:e})=>{if(!e)return l``;let t=e.process_services,{store:r,language:a}=_("store","language");var n=null,o=null,i=r.price_list.id;t.forEach(c=>{c.service.packagings.forEach(u=>{u.currentPrices.forEach(s=>{s.price_list.id==i&&((n==null||n>s.value)&&(n=s.value),(o==null||o<s.value)&&(o=s.value))})})});var p=ia(r,a);return n==null||o==null?l``:n==o?l`${p.format(n)}`:l`${p.format(n)} - ${p.format(o)}`};var me=e=>{let{appointment:t,language:r,currentStep:a,store:n,selectedCalendar:o,priceComment:i}=_("appointment","language","currentStep","store","selectedCalendar","priceComment");if(!!n){var p=["state","postal_code","city","street_address"],c=[];p.forEach(v=>{!t.customer[v]||c.push(t.customer[v])});var u=t.calendar||o,s={dateTimeStart:t.start?$.formatDateTime(t.start):null,dateTimeEnd:t.end?$.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:u?u.user.name:null,customer:t.customer,customerAddress:c.join(", "),storeAddress:n.postal_code+" "+n.city+", "+n.street_address};return l`
    <ul class="list-group${a=="summary"?"":" text-end"}">
      ${a!="summary"?l`<li class="list-group-item fw-bold">${d("Appointment summary")}</li>`:null}
      ${s.processName?l`
        <li class="list-group-item">
          <div>${d("Subject")}:</div>
          <div class="fw-bold">${s.processName}</div>
          <div>
            ${s.examinerName?l`${d("examiner: %examiner%",{examiner:s.examinerName})}`:null}
          </div>
        </li>
      `:""}
      ${s.dateTimeStart&&s.dateTimeEnd&&s.processLength?l`
        <li class="list-group-item">
          <div>${d("Start Time")}:</div>
          <div>
            <${se}//>
          </div>
          <div class="text-muted">
            ${d("It takes up to %length% minutes",{length:s.processLength})}
          </div>
        </li>
      `:""}
      ${a=="summary"?l`
        <li class="list-group-item">
          <${ar} customer=${s.customer} customerAddress=${s.customerAddress}/>
        </li>
      `:""}
      <li class="list-group-item">
        <div>${d("Location")}:</div>
        <div class="fw-bold">${n.name}</div>
        <div>${s.storeAddress}</div>
      </li>
      <li class="list-group-item">
        <div>${d("Price")}:</div>
        <div class="fw-bold"><${de} process=${s.process}/></div>
        <div>${i||""}</div>
      </li>
      ${a=="summary"?l`
          <li class="list-group-item">
            <${or}/>
          </li>
        `:""}
    </ul>
  `}};var U=e=>{let{currentStep:t,availableSteps:r}=_("currentStep","availableSteps"),a=r.indexOf(e.step),n=r.indexOf(t);if(r.indexOf(e.step)==-1)return l``;var o=t!="process"&&t!="summary";return l`
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
          ${o?l`
            <div class="d-none d-sm-block col-4 summarycard">
              <div class="p-1">
                <${me} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var nr=e=>{let{appointment:t,dispatch:r,currentStep:a}=_("appointment","currentStep"),n=()=>{a==="process"&&(r("appointment/set",{eye_examination_process:e.item}),r("currentStep/eyeExaminationProcessSelected"),r("currentStep/next"))};return l`
    <li class="row list-group-item ${t.eye_examination_process==e.item?"selected":""}" onClick=${n}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.item.name}</h4>
          <p class="${e.item.description&&e.item.description.length>0?"":"d-none"}">${e.item.description}</p>
          <span class="badge bg-primary me-1">${e.item.length} ${d("@abbrMinute")}</span>
          <span class="badge bg-primary"><${de} process=${e.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var ir=e=>{let{eyeExaminationProcesses:t}=_("eyeExaminationProcesses");return l`
    <ul class="list-group">
      ${t.length?t.map(r=>l`<${nr} item=${r} />`):l`<li class="list-group-item"><${A}/></li>`}
    </ul>
  `};var Ie=e=>{let{selectedCalendar:t,dispatch:r,currentStep:a}=_("selectedCalendar","currentStep"),n=()=>{a==="calendar"&&(r("selectedCalendar/set",e.item["@id"]?e.item:null),r("currentStep/next"))};return l`
    <li class="list-group-item${t==e.item||!e.item["@id"]&&!t?" selected":""}" onClick=${n}>
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
  `};var sr=e=>{let{appointment:t,showFirstAvailableUserItem:r,dispatch:a}=_("appointment","showFirstAvailableUserItem"),n=Y(_("calendars","appointment","calendarRoleCheckMode")),o={user:{name:d("First free"),description:d("For finding the nearest free time slot.")}},i=()=>a("currentStep/previous");return l`
    <ul class="list-group">
      ${t.eye_examination_process?n.length?l`
              ${r?l`<${Ie} item=${o} />`:""}
              ${n.map(p=>l`<${Ie} item=${p} />`)}
            `:l`
              <li class="list-group-item text-center">
                ${d("None of our colleagues is available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${i}">
                  ${d("Select another process")}
                </button>
              </li>
          `:""}
    </ul>
  `};var sa=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],lr=({date:e})=>{let{selectedDate:t,dispatch:r}=_("selectedDate"),a=()=>r("selectedDate/set",e);return l`
    <div class="col">
      <div class="card ${T(e,t)?"bg-primary text-light":""}" onClick="${a}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${T(e,t)?"":"text-muted"}">
            ${d(sa[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var cr=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:r,currentDateGroup:a,nextDateGroup:n}=t;return l`
    <div class="carousel-item
      ${r==e?"carousel-item-prev":""}
      ${a==e?"active":""}
      ${n==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(o=>l`<${lr} date=${o}/>`)}
      </div>
    </div>
  `};var la=["January","February","March","April","May","June","July","August","September","October","November","December"],pr=e=>{let{selectedDate:t,firstEligibleDate:r,dispatch:a}=_("selectedDate","firstEligibleDate"),n=De(r),o=()=>a("selectedDate/set",p[4]),i=()=>a("selectedDate/set",u[0]);var p,c,u;for(let v=0;v<n.length&&(p=n[v-1],c=n[v],u=n[v+1],!c.hasDate(t));v++);let s={previousDateGroup:p,currentDateGroup:c,nextDateGroup:u};return l`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${o}
        disabled=${!p}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${d(la[c[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${n.map(v=>l`<${cr} dateGroup=${v} visibleDateGroups=${s}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${i}
        disabled=${!u}>
        ${">"}
      </button>
    </div>
  `};var ur=e=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:n,dispatch:o}=_("selectedCalendar","appointment","nextFreeSlots","selectedDate");var i=new Date(r),p,c=!1;for(i.setDate(i.getDate()+1);a[p=M(n,t,i)];){if(a[p].status!=="empty"){c=!0;break}i.setDate(i.getDate()+1)}let u=()=>o("selectedDate/set",i);return l`
    <li class="list-group-item p-4 text-center">
      <h5>${d("There are no free appointment times for this day")}</h5>
      ${c?l`
          <div class="text-muted">
            ${d("The next free slot is available on %date%",{date:$.formatDate(i)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${u}">${d("Go to date")}</button>
        `:l`
          <button class="btn m-2 btn-primary" onClick="${u}">
            ${d("Click here to search for the next free appointment")}
          </button>
        `}
    </li>
  `};var dr=e=>{let{appointment:t,calendars:r,dispatch:a,currentStep:n}=_("appointment","calendars","currentStep"),o=()=>{if(n==="appointment"){var i=null;for(let p=0;p<r.length;p++)if(e.slot.calendar["@id"]==r[p]["@id"])var i=r[p];if(!i)throw new Error("Could not find calendar");a("appointment/set",{start:e.slot.start,end:e.slot.end,calendar:i}),a("currentStep/next")}};return l`
    <li class="list-group-item${Z(new Date(t.start),new Date(e.slot.start))?" selected":""}" onClick=${o}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${$.formatTime(e.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var mr=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=_("selectedCalendar","selectedDate","nextFreeSlots","appointment");var n=M(r,t,e);return l`
    <${pr}/>
    <ul class="list-group mt-3">
      ${a[n]?a[n].status=="empty"?l`<${ur}/>`:a[n].slots.map(o=>l`<${dr} slot=${o}/>`):l`<li class="list-group-item"><${A}/></li>`}
    </ul>
  `};var fr=e=>{let{appointment:t,dispatch:r}=_("appointment"),a=n=>{let{value:o}=n.target;var{customer:i}=t;i[e.property]=o,r("appointment/set",{customer:i})};return l`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${a}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var S=e=>{let{customerForm:t}=_("customerForm");if(!!t[e.property]){var r=t[e.property];return l`
    <div class="${e.class||"col-sm"} needs-validation p-1 mb-2 w-100">
      ${e.label?l`
          <label class="form-label text-truncate">
            ${r.required?l`<span class="text-danger">*</span> `:""}
            ${d(e.label)}
          </label>
        `:null}
      <${e.inputClass||fr} property=${e.property}
        invalid=${r.errors&&r.errors.length?"was-validated":""}/>
      ${r.errors&&r.errors.length?r.errors.map(a=>l`<div class="invalid-feedback">${d(a)}</div>`):""}
    </div>
  `}};var V=e=>{let t=r=>{let{value:a}=r.target;e.onInput(a)};return l`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?l`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:r,label:a})=>l`<option value="${r}">${a}</option>`)}
    </select>
  `};var ca=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),_r=e=>{let{appointment:t,dispatch:r}=_("appointment"),a=(c,u)=>{var{customer:s}=t;u==""?s[e.property]=null:(s[e.property]=s[e.property]||new Date("2000-01-01"),s[e.property][`set${c}`](u)),r("appointment/set",{customer:s})},n=t.customer[e.property];var o=[];for(let c=1900;c<=new Date().getFullYear();c++)o.push({value:c,label:c});var i=[];for(let c=1;c<=12;c++)i.push({value:c-1,label:c<10?`0${c}`:c});var p=[];for(let c=1;c<=ca(n);c++)p.push({value:c,label:c<10?`0${c}`:c});return l`
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
  `};var hr=e=>{let{appointment:t,dispatch:r}=_("appointment");return l`
    <${V} onInput=${n=>{var{customer:o}=t;o[e.property]=n,r("appointment/set",{customer:o})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${d("Not specified")}"
        options=${[{value:"m",label:d("Male")},{value:"f",label:d("Female")}]}/>
  `};var vr=e=>{let{appointment:t,privacyPolicy:r,dispatch:a}=_("appointment","privacyPolicy"),n=()=>{var{customer:i}=t;i[e.property]=!i[e.property]||null,a("appointment/set",{customer:i})},o=()=>a("privacyPolicyModalState/set",!1);return l`
    <${O} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${r?l([r.content]):""}"
      approveButtonLabel="Close"
      onApprove=${o}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${n}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${d("I have accepted the privacy policy")}
      </label>
    </div>
  `};var gr=e=>{let{appointment:t,dispatch:r}=_("appointment"),a=()=>{var{customer:n}=t;n[e.property]=!n[e.property]||null,r("appointment/set",{customer:n})};return l`
    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${a}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${d("I agree to the use of my medical records according to privacy policy")}
      </label>
    </div>
  `};var br=e=>{let{customerForm:t,customerFormGlobalErrors:r,dispatch:a}=_("customerForm","customerFormGlobalErrors","language"),n=()=>{a("customerForm/validateAndNext")};return l`
    <div class="card p-2">
      ${r&&r.length?l`
          <div class="row mx-2 text-danger">
            ${r.map(o=>l`<p>${o}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${B.shouldSwitchNameOrder()?l`
            <${S} property="last_name" label="Last name"/>
            <${S} property="first_name" label="First name"/>
          `:l`
            <${S} property="first_name" label="First name"/>
            <${S} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${S} class="col-lg-5" property="birth" label="Birth" inputClass=${_r}/>
        <${S} property="gender" label="Gender" inputClass=${hr}/>
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
      <div class="row mx-2">
        <${S} property="acceptPrivacyPolicy" inputClass=${vr}/>
      </div>
      <div class="row mx-2">
        <${S} property="acceptMedicalRecordsUse" inputClass=${gr}/>
      </div>
      <button class="mx-2 btn btn-primary" onClick=${n}>${d("Next")}</button>
    </div>
  `};var ze=e=>l`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${U} step="process" wrappedComponent=${ir}/>
        <${U} step="calendar" wrappedComponent=${sr}/>
        <${U} step="appointment" wrappedComponent=${mr}/>
        <${U} step="customer" wrappedComponent=${br}/>
        <${U} step="summary" wrappedComponent=${me}/>
      </div>
    </div>
  `;var Ne=e=>{let{moduleState:t,appointment:r,dispatch:a}=_("moduleState","appointment"),n=()=>a("close");switch(t){case"success":return l`
        <${O} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${d("Your appointment have been recorded.")}
            ${d("The examination will start at %start%, please arrive 5 minutes early.",{start:$.formatTime(r.start)})}
            ${d("If you have any further questions, please contact us through our customer service.")}
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
  `};var yr=e=>{let{headerTitle:t,currentStep:r}=_("headerTitle","currentStep");switch(r){case"process":var a=d("Select eye examination type");break;case"calendar":var a=d("Select a vision expert");break;case"appointment":var a=d("Select your desired appointment time");break;case"customer":var a=d("Enter customer details");break;default:var a=d("Appointment details verification");break}return l`
    <div class="booker-header bg-primary bg-gradient text-light p-2">
      <div class="container col-sm-10 col-md-8">
        <div class="row">
          <div class="col-8">
            <h3 class="text-truncate">
              ${t||d("Appointment booking")}
            </h3>
            <h5 class="text-truncate">
              ${a}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${Ee}/>
              <${Ae}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    `};var pa=e=>l`
    <${Be} colors=${e.colors}/>
    <div class="booker-widget fixed-top">
      <${xe.Provider} value=${e.store}>
        <${Ne}/>
        <${yr}/>
        <div class="bg-body content">
          <${ze}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `,fe=class{constructor(t){var r=rr();this.store=r,this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode).then(()=>Promise.all([this.loadEyeExaminationProcesses(),this.loadCalendars()])).then(()=>{r.dispatch("moduleState/set","idle"),this.store.dispatch("bookerInit")}),t.calendarStepShouldBeHidden&&r.dispatch("calendarStepShouldBeHidden/set",t.calendarStepShouldBeHidden),t.calendarRoleCheckMode&&r.dispatch("calendarRoleCheckMode/set",t.calendarRoleCheckMode),t.showFirstAvailableUserItem!==void 0&&r.dispatch("showFirstAvailableUserItem/set",t.showFirstAvailableUserItem),t.firstEligibleTime&&r.dispatch("firstEligibleTime/set",t.firstEligibleTime),t.language&&r.dispatch("language/set",t.language),t.translationOverrides&&r.dispatch("translationOverrides/set",t.translationOverrides),t.headerTitle&&r.dispatch("headerTitle/set",t.headerTitle),t.country&&r.dispatch("country/set",t.country),t.priceComment&&r.dispatch("priceComment/set",t.priceComment),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:r}){var a={};r=["first_name","last_name","acceptPrivacyPolicy","acceptMedicalRecordsUse"].concat(r||["email"]),["first_name","last_name","acceptPrivacyPolicy","acceptMedicalRecordsUse"].concat(t||["mobile","email"]).forEach(n=>{a[n]={required:r.indexOf(n)!=-1}}),this.store.dispatch("customerForm/set",{customerForm:a})}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){var r=await C.get(this.store,`stores?code=${t}`);this.store.dispatch("store/set",r[0])}async loadEyeExaminationProcesses(){var t=this.store.get().store,r=await C.get(this.store,`eye_examination_processes?hasLength&chain=${t.chain["@id"]}`);this.store.dispatch("eyeExaminationProcesses/set",r)}async loadCalendars(){this.store.dispatch("calendars/set",await C.get(this.store,`appointment_calendars?groups[]=userProfilePictureRead&store=${this.store.get().store["@id"]}`))}createElementAndRender({parentElement:t,colors:r}){var a=document.createElement("div");(t||document.body).appendChild(a),ve(l`<${pa} store=${this.store} colors=${r}/>`,a),this.store.on("close",()=>a.remove())}getStore(){return this.store}},ua=fe;window.ClearvisioAppointmentBooker=fe;export{ua as default};
