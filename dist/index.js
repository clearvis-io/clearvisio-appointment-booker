var ze,k,vr,ge,_r,br,yr,Ee={},Sr=[],Kn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function q(e,t){for(var r in t)e[r]=t[r];return e}function kr(e){var t=e.parentNode;t&&t.removeChild(e)}function ee(e,t,r){var a,n,o,s={};for(o in t)o=="key"?a=t[o]:o=="ref"?n=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?ze.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return Fe(e,s,a,n,null)}function Fe(e,t,r,a,n){var o={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:n==null?++vr:n};return n==null&&k.vnode!=null&&k.vnode(o),o}function te(e){return e.children}function L(e,t){this.props=e,this.context=t}function de(e,t){if(t==null)return e.__?de(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?de(e):null}function xr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return xr(e)}}function ct(e){(!e.__d&&(e.__d=!0)&&ge.push(e)&&!Ne.__r++||br!==k.debounceRendering)&&((br=k.debounceRendering)||_r)(Ne)}function Ne(){for(var e;Ne.__r=ge.length;)e=ge.sort(function(t,r){return t.__v.__b-r.__v.__b}),ge=[],e.some(function(t){var r,a,n,o,s,c;t.__d&&(s=(o=(r=t).__v).__e,(c=r.__P)&&(a=[],(n=q({},o)).__v=o.__v+1,dt(c,o,n,r.__n,c.ownerSVGElement!==void 0,o.__h!=null?[s]:null,a,s==null?de(o):s,o.__h),$r(a,o),o.__e!=s&&xr(o)))})}function Tr(e,t,r,a,n,o,s,c,p,h){var d,S,v,b,_,x,$,j=a&&a.__k||Sr,F=j.length;for(r.__k=[],d=0;d<t.length;d++)if((b=r.__k[d]=(b=t[d])==null||typeof b=="boolean"?null:typeof b=="string"||typeof b=="number"||typeof b=="bigint"?Fe(null,b,null,null,b):Array.isArray(b)?Fe(te,{children:b},null,null,null):b.__b>0?Fe(b.type,b.props,b.key,null,b.__v):b)!=null){if(b.__=r,b.__b=r.__b+1,(v=j[d])===null||v&&b.key==v.key&&b.type===v.type)j[d]=void 0;else for(S=0;S<F;S++){if((v=j[S])&&b.key==v.key&&b.type===v.type){j[S]=void 0;break}v=null}dt(e,b,v=v||Ee,n,o,s,c,p,h),_=b.__e,(S=b.ref)&&v.ref!=S&&($||($=[]),v.ref&&$.push(v.ref,null,b),$.push(S,b.__c||_,b)),_!=null?(x==null&&(x=_),typeof b.type=="function"&&b.__k===v.__k?b.__d=p=jr(b,p,e):p=wr(e,b,v,j,_,p),typeof r.type=="function"&&(r.__d=p)):p&&v.__e==p&&p.parentNode!=e&&(p=de(v))}for(r.__e=x,d=F;d--;)j[d]!=null&&(typeof r.type=="function"&&j[d].__e!=null&&j[d].__e==r.__d&&(r.__d=de(a,d+1)),Dr(j[d],j[d]));if($)for(d=0;d<$.length;d++)Cr($[d],$[++d],$[++d])}function jr(e,t,r){for(var a,n=e.__k,o=0;n&&o<n.length;o++)(a=n[o])&&(a.__=e,t=typeof a.type=="function"?jr(a,t,r):wr(r,a,a,n,a.__e,t));return t}function ve(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){ve(r,t)}):t.push(e)),t}function wr(e,t,r,a,n,o){var s,c,p;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(r==null||n!=o||n.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(n),s=null;else{for(c=o,p=0;(c=c.nextSibling)&&p<a.length;p+=2)if(c==n)break e;e.insertBefore(n,o),s=o}return s!==void 0?s:n.nextSibling}function Wn(e,t,r,a,n){var o;for(o in r)o==="children"||o==="key"||o in t||Ie(e,o,null,r[o],a);for(o in t)n&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||Ie(e,o,t[o],r[o],a)}function Pr(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||Kn.test(t)?r:r+"px"}function Ie(e,t,r,a,n){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||Pr(e.style,t,"");if(r)for(t in r)a&&r[t]===a[t]||Pr(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?a||e.addEventListener(t,o?Mr:Ar,o):e.removeEventListener(t,o?Mr:Ar,o);else if(t!=="dangerouslySetInnerHTML"){if(n)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(s){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Ar(e){this.l[e.type+!1](k.event?k.event(e):e)}function Mr(e){this.l[e.type+!0](k.event?k.event(e):e)}function dt(e,t,r,a,n,o,s,c,p){var h,d,S,v,b,_,x,$,j,F,J,N=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(p=r.__h,c=t.__e=r.__e,t.__h=null,o=[c]),(h=k.__b)&&h(t);try{e:if(typeof N=="function"){if($=t.props,j=(h=N.contextType)&&a[h.__c],F=h?j?j.props.value:h.__:a,r.__c?x=(d=t.__c=r.__c).__=d.__E:("prototype"in N&&N.prototype.render?t.__c=d=new N($,F):(t.__c=d=new L($,F),d.constructor=N,d.render=Yn),j&&j.sub(d),d.props=$,d.state||(d.state={}),d.context=F,d.__n=a,S=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),N.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=q({},d.__s)),q(d.__s,N.getDerivedStateFromProps($,d.__s))),v=d.props,b=d.state,S)N.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(N.getDerivedStateFromProps==null&&$!==v&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps($,F),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate($,d.__s,F)===!1||t.__v===r.__v){d.props=$,d.state=d.__s,t.__v!==r.__v&&(d.__d=!1),d.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(Y){Y&&(Y.__=t)}),d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate($,d.__s,F),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(v,b,_)})}d.context=F,d.props=$,d.state=d.__s,(h=k.__r)&&h(t),d.__d=!1,d.__v=t,d.__P=e,h=d.render(d.props,d.state,d.context),d.state=d.__s,d.getChildContext!=null&&(a=q(q({},a),d.getChildContext())),S||d.getSnapshotBeforeUpdate==null||(_=d.getSnapshotBeforeUpdate(v,b)),J=h!=null&&h.type===te&&h.key==null?h.props.children:h,Tr(e,Array.isArray(J)?J:[J],t,r,a,n,o,s,c,p),d.base=t.__e,t.__h=null,d.__h.length&&s.push(d),x&&(d.__E=d.__=null),d.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Jn(r.__e,t,r,a,n,o,s,p);(h=k.diffed)&&h(t)}catch(Y){t.__v=null,(p||o!=null)&&(t.__e=c,t.__h=!!p,o[o.indexOf(c)]=null),k.__e(Y,t,r)}}function $r(e,t){k.__c&&k.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){k.__e(a,r.__v)}})}function Jn(e,t,r,a,n,o,s,c){var p,h,d,S=r.props,v=t.props,b=t.type,_=0;if(b==="svg"&&(n=!0),o!=null){for(;_<o.length;_++)if((p=o[_])&&(p===e||(b?p.localName==b:p.nodeType==3))){e=p,o[_]=null;break}}if(e==null){if(b===null)return document.createTextNode(v);e=n?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),o=null,c=!1}if(b===null)S===v||c&&e.data===v||(e.data=v);else{if(o=o&&ze.call(e.childNodes),h=(S=r.props||Ee).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!c){if(o!=null)for(S={},_=0;_<e.attributes.length;_++)S[e.attributes[_].name]=e.attributes[_].value;(d||h)&&(d&&(h&&d.__html==h.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(Wn(e,v,S,n,c),d)t.__k=[];else if(_=t.props.children,Tr(e,Array.isArray(_)?_:[_],t,r,a,n&&b!=="foreignObject",o,s,o?o[0]:r.__k&&de(r,0),c),o!=null)for(_=o.length;_--;)o[_]!=null&&kr(o[_]);c||("value"in v&&(_=v.value)!==void 0&&(_!==e.value||b==="progress"&&!_)&&Ie(e,"value",_,S.value,!1),"checked"in v&&(_=v.checked)!==void 0&&_!==e.checked&&Ie(e,"checked",_,S.checked,!1))}return e}function Cr(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(a){k.__e(a,r)}}function Dr(e,t,r){var a,n;if(k.unmount&&k.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||Cr(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){k.__e(o,t)}a.base=a.__P=null}if(a=e.__k)for(n=0;n<a.length;n++)a[n]&&Dr(a[n],t,typeof e.type!="function");r||e.__e==null||kr(e.__e),e.__e=e.__d=void 0}function Yn(e,t,r){return this.constructor(e,r)}function pt(e,t,r){var a,n,o;k.__&&k.__(e,t),n=(a=typeof r=="function")?null:r&&r.__k||t.__k,o=[],dt(t,e=(!a&&r||t).__k=ee(te,null,[e]),n||Ee,Ee,t.ownerSVGElement!==void 0,!a&&r?[r]:n?null:t.firstChild?ze.call(t.childNodes):null,o,!a&&r?r:n?n.__e:t.firstChild,a),$r(o,e)}function zr(e,t){var r={__c:t="__cC"+yr++,__:e,Consumer:function(a,n){return a.children(n)},Provider:function(a){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&n.some(ct)},this.sub=function(s){n.push(s);var c=s.componentWillUnmount;s.componentWillUnmount=function(){n.splice(n.indexOf(s),1),c&&c.call(s)}}),a.children}};return r.Provider.__=r.Consumer.contextType=r}ze=Sr.slice,k={__e:function(e,t){for(var r,a,n;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),n=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),n=r.__d),n)return r.__E=r}catch(o){e=o}throw e}},vr=0,L.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=q({},this.state),typeof e=="function"&&(e=e(q({},r),this.props)),e&&q(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),ct(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ct(this))},L.prototype.render=te,ge=[],_r=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ne.__r=0,yr=0;var pe,z,Er,ut=0,mt=[],Fr=k.__b,Nr=k.__r,Ir=k.diffed,Or=k.__c,Lr=k.unmount;function _e(e,t){k.__h&&k.__h(z,e,ut||t),ut=0;var r=z.__H||(z.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function re(e){return ut=1,Zn(Rr,e)}function Zn(e,t,r){var a=_e(pe++,2);return a.t=e,a.__c||(a.__=[r?r(t):Rr(void 0,t),function(n){var o=a.t(a.__[0],n);a.__[0]!==o&&(a.__=[o,a.__[1]],a.__c.setState({}))}],a.__c=z),a.__}function Br(e,t){var r=_e(pe++,3);!k.__s&&ft(r.__H,t)&&(r.__=e,r.__H=t,z.__H.__h.push(r))}function Hr(e,t){var r=_e(pe++,4);!k.__s&&ft(r.__H,t)&&(r.__=e,r.__H=t,z.__h.push(r))}function Gr(e,t){var r=_e(pe++,7);return ft(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Vr(e){var t=z.context[e.__c],r=_e(pe++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(z)),t.props.value):e.__}function Xn(){mt.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(Oe),e.__H.__h.forEach(ht),e.__H.__h=[]}catch(t){e.__H.__h=[],k.__e(t,e.__v)}}),mt=[]}k.__b=function(e){z=null,Fr&&Fr(e)},k.__r=function(e){Nr&&Nr(e),pe=0;var t=(z=e.__c).__H;t&&(t.__h.forEach(Oe),t.__h.forEach(ht),t.__h=[])},k.diffed=function(e){Ir&&Ir(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(mt.push(t)!==1&&Er===k.requestAnimationFrame||((Er=k.requestAnimationFrame)||function(r){var a,n=function(){clearTimeout(o),Ur&&cancelAnimationFrame(a),setTimeout(r)},o=setTimeout(n,100);Ur&&(a=requestAnimationFrame(n))})(Xn)),z=null},k.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Oe),r.__h=r.__h.filter(function(a){return!a.__||ht(a)})}catch(a){t.some(function(n){n.__h&&(n.__h=[])}),t=[],k.__e(a,r.__v)}}),Or&&Or(e,t)},k.unmount=function(e){Lr&&Lr(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(Oe)}catch(r){k.__e(r,t.__v)}};var Ur=typeof requestAnimationFrame=="function";function Oe(e){var t=z;typeof e.__c=="function"&&e.__c(),z=t}function ht(e){var t=z;e.__c=e.__(),z=t}function ft(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function Rr(e,t){return typeof t=="function"?t(e):t}function Qn(e,t){for(var r in t)e[r]=t[r];return e}function qr(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function Kr(e){this.props=e}(Kr.prototype=new L).isPureReactComponent=!0,Kr.prototype.shouldComponentUpdate=function(e,t){return qr(this.props,e)||qr(this.state,t)};var Wr=k.__b;k.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Wr&&Wr(e)};var ei=k.__e;k.__e=function(e,t,r){if(e.then){for(var a,n=t;n=n.__;)if((a=n.__c)&&a.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),a.__c(e,t)}ei(e,t,r)};var Jr=k.unmount;function gt(){this.__u=0,this.t=null,this.__b=null}function Yr(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Le(){this.u=null,this.o=null}k.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Jr&&Jr(e)},(gt.prototype=new L).__c=function(e,t){var r=t.__c,a=this;a.t==null&&(a.t=[]),a.t.push(r);var n=Yr(a.__v),o=!1,s=function(){o||(o=!0,r.__R=null,n?n(c):c())};r.__R=s;var c=function(){if(!--a.__u){if(a.state.__e){var h=a.state.__e;a.__v.__k[0]=function S(v,b,_){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(x){return S(x,b,_)}),v.__c&&v.__c.__P===b&&(v.__e&&_.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=_)),v}(h,h.__c.__P,h.__c.__O)}var d;for(a.setState({__e:a.__b=null});d=a.t.pop();)d.forceUpdate()}},p=t.__h===!0;a.__u++||p||a.setState({__e:a.__b=a.__v.__k[0]}),e.then(s,s)},gt.prototype.componentWillUnmount=function(){this.t=[]},gt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=function o(s,c,p){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),s.__c.__H=null),(s=Qn({},s)).__c!=null&&(s.__c.__P===p&&(s.__c.__P=c),s.__c=null),s.__k=s.__k&&s.__k.map(function(h){return o(h,c,p)})),s}(this.__b,r,a.__O=a.__P)}this.__b=null}var n=t.__e&&ee(te,null,e.fallback);return n&&(n.__h=null),[ee(te,null,t.__e?null:e.children),n]};var Zr=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(Le.prototype=new L).__e=function(e){var t=this,r=Yr(t.__v),a=t.o.get(e);return a[0]++,function(n){var o=function(){t.props.revealOrder?(a.push(n),Zr(t,e,a)):n()};r?r(o):o()}},Le.prototype.render=function(e){this.u=null,this.o=new Map;var t=ve(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Le.prototype.componentDidUpdate=Le.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){Zr(e,r,t)})};var ti=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,ri=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ai=typeof document!="undefined",oi=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};L.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(L.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Xr=k.event;function ni(){}function ii(){return this.cancelBubble}function si(){return this.defaultPrevented}k.event=function(e){return Xr&&(e=Xr(e)),e.persist=ni,e.isPropagationStopped=ii,e.isDefaultPrevented=si,e.nativeEvent=e};var Qr={configurable:!0,get:function(){return this.class}},ea=k.vnode;k.vnode=function(e){var t=e.type,r=e.props,a=r;if(typeof t=="string"){var n=t.indexOf("-")===-1;for(var o in a={},r){var s=r[o];ai&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in r&&s==null||(o==="defaultValue"&&"value"in r&&r.value==null?o="value":o==="download"&&s===!0?s="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!oi(r.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():n&&ri.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),a[o]=s)}t=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=ve(r.children).forEach(function(c){c.props.selected=a.value.indexOf(c.props.value)!=-1})),t=="select"&&a.defaultValue!=null&&(a.value=ve(r.children).forEach(function(c){c.props.selected=a.multiple?a.defaultValue.indexOf(c.props.value)!=-1:a.defaultValue==c.props.value})),e.props=a}t&&r.class!=r.className&&(Qr.enumerable="className"in r,r.className!=null&&(a.class=r.className),Object.defineProperty(a,"className",Qr)),e.$$typeof=ti,ea&&ea(e)};var ta=k.__r;k.__r=function(e){ta&&ta(e)};var vt=zr(),li=typeof window!="undefined"?Hr:Br,ci=e=>(...t)=>{let r=Vr(e),a=re({});return li(()=>r.on("@changed",(n,o)=>{t.some(c=>c in o)&&a[1]({})}),[]),Gr(()=>{let n=r.get(),o={};return t.forEach(s=>{o[s]=n[s]}),o.dispatch=r.dispatch,o},[a[0]])},g=ci(vt);var _t=class extends Error{constructor(t){super("Validation error");this.validations=t}getValidations(){return this.validations}},be=_t;var ra=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),bt={get:async(e,t)=>{var n;let{path:r,headers:a}=e.get().api;try{let o=await fetch(`${r}/${t}`,{headers:ra(a)});if(o.status<200||o.status>299){let c=new Error("Unexpected api response");throw c.code=o.status,c}let s=await o.json();if(typeof s!="object")throw new Error("Invalid response");return(n=s["hydra:member"])!=null?n:s}catch(o){throw e.dispatch("moduleState/set","error"),o}},post:async(e,t,r)=>bt.doRequest(e,"POST",t,r),doRequest:async({api:e,dispatch:t},r,a,n)=>{a=`${e.path}/${a}`;let{headers:o}=e,s={method:r,headers:ra(o),body:JSON.stringify(n)};try{var c=await(await fetch(a,s)).json()}catch(p){throw t("moduleState/set","error"),p}if(c["@id"])return c;throw c.violations?new be(c.violations):(t("moduleState/set","error"),new Error("Invalid result"))},put:async(e,t,r)=>{let a=t.split("/"),n=a[a.length-2],o=a[a.length-1];return bt.doRequest(e,"PUT",`${n}/${o}`,r)}},C=bt;var aa=function(e,t,r,a){var n;t[0]=0;for(var o=1;o<t.length;o++){var s=t[o++],c=t[o]?(t[0]|=s?1:2,r[t[o++]]):t[++o];s===3?a[0]=c:s===4?a[1]=Object.assign(a[1]||{},c):s===5?(a[1]=a[1]||{})[t[++o]]=c:s===6?a[1][t[++o]]+=c+"":s?(n=e.apply(c,aa(e,c,r,["",null])),a.push(n),c[0]?t[0]|=2:(t[o-2]=0,t[o]=n)):a.push(c)}return a},oa=new Map;function na(e){var t=oa.get(this);return t||(t=new Map,oa.set(this,t)),(t=aa(this,t.get(e)||(t.set(e,t=function(r){for(var a,n,o=1,s="",c="",p=[0],h=function(v){o===1&&(v||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,v,s):o===3&&(v||s)?(p.push(3,v,s),o=2):o===2&&s==="..."&&v?p.push(4,v,0):o===2&&s&&!v?p.push(5,0,!0,s):o>=5&&((s||!v&&o===5)&&(p.push(o,0,s,n),o=6),v&&(p.push(o,v,0,n),o=6)),s=""},d=0;d<r.length;d++){d&&(o===1&&h(),h(d));for(var S=0;S<r[d].length;S++)a=r[d][S],o===1?a==="<"?(h(),p=[p],o=3):s+=a:o===4?s==="--"&&a===">"?(o=1,s=""):s=a+s[0]:c?a===c?c="":s+=a:a==='"'||a==="'"?c=a:a===">"?(h(),o=1):o&&(a==="="?(o=5,n=s,s=""):a==="/"&&(o<5||r[d][S+1]===">")?(h(),o===3&&(p=p[0]),o=p,(p=p[0]).push(2,0,o),o=0):a===" "||a==="	"||a===`
`||a==="\r"?(h(),o=2):s+=a),o===3&&s==="!--"&&(o=4,p=p[0])}return h(),p}(e)),t),arguments,[])).length>1?t:t[0]}var di=(e,t,...r)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(a=>a.trim()).map(a=>a.indexOf("cvio-ab-")!==0?`cvio-ab-${a}`:a).join(" ")),ee(e,t,...r)),l=na.bind(di);var ye=e=>{let{dispatch:t,privacyPolicyLink:r}=g("privacyPolicyLink");return r?l`
      <a class="link-primary" href="${r}" target="_new">
        ${e.children}
      </a>
    `:l`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `};var Re=e=>{let{appointment:t}=g("appointment");return l`
    <span class="fw-bold">
      ${t.start?P.formatDateTime(t.start):null}
    </span>
  `};var yt={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszak\xEDtja a foglal\xE1st?","All inputed data will be lost.":"Minden megadott adat el fog veszni.","No, continue editing appointment":"Nem, id\u0151pontfoglal\xE1s folytat\xE1sa","Cancel appointment":"Foglal\xE1s megszak\xEDt\xE1sa","Appointment booking failed":"Id\u0151pontfoglal\xE1s nem siker\xFClt","Due to an unexpected error appointment could not be booked, please restart the process":"Az id\u0151pontfoglal\xE1s k\xF6zben nem v\xE1rt hiba t\xF6rt\xE9nt, k\xE9rj\xFCk kezdje \xFAjra a folyamatot","None of our colleagues is available for the selected process":"Egy munkat\xE1rsunk sem el\xE9rhet\u0151 a v\xE1lasztott protokollhoz","First free":"Els\u0151 szabad","For finding the nearest free time slot.":"A lehet\u0151 legkor\xE1bbi id\u0151pont v\xE1laszt\xE1s\xE1hoz.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Janu\xE1r",February:"Febru\xE1r",March:"M\xE1rcius",April:"\xC1prilis",May:"M\xE1jus",June:"J\xFAnius",July:"J\xFAlius",August:"Augusztus",September:"Szeptember",October:"Okt\xF3ber",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad id\u0151pontok erre a napra","The next free slot is available on %date%":"A k\xF6vetkez\u0151 szabad id\u0151pont d\xE1tuma: %date%","Go to date":"Ugr\xE1s d\xE1tumra","Click here to search for the next free appointment":"Kattintson ide a k\xF6vetkez\u0151 szabad id\u0151pont keres\xE9s\xE9hez","Search in progress...":"Keres\xE9s folyamatban...","Last name":"Vezet\xE9kn\xE9v","First name":"Keresztn\xE9v",Birth:"Sz\xFClet\xE9si d\xE1tum",Gender:"Nem",SSN:"TAJ sz\xE1m",Country:"Orsz\xE1g",State:"\xC1llam","Postal code":"Ir\xE1ny\xEDt\xF3sz\xE1m",City:"V\xE1ros","Street address":"Utca",Mobile:"Mobil","Select another process":"M\xE1sik protokoll v\xE1laszt\xE1sa","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"F\xE9rfi",Female:"N\u0151",Next:"Tov\xE1bb","This field is required.":"Ez a mez\u0151 k\xF6telez\u0151.","Invalid email address.":"Hib\xE1s email c\xEDm.","Your information":"Az \xD6n adatai",Name:"N\xE9v","Date of birth":"Sz\xFClet\xE9si d\xE1tum",Address:"C\xEDm","Phone number":"Telefonsz\xE1m","Appointment details verification":"Foglal\xE1si adatok ellen\u0151rz\xE9se","Appointment summary":"Foglal\xE1si \xF6sszes\xEDt\u0151",Price:"\xC1r","Confirm appointment":"Id\u0151pontfoglal\xE1s j\xF3v\xE1hagy\xE1sa","%customer%'s examination":"%customer% vizsg\xE1lata","Your appointment have been recorded.":"Foglal\xE1s\xE1t r\xF6gz\xEDtett\xFCk.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsg\xE1lat kezdete: %start%, k\xE9rj\xFCk \xE9rkezzen 5 perccel kor\xE1bban.","If you have any further questions, please contact us through our customer service.":"Ha k\xE9rd\xE9se van vagy szeretn\xE9 m\xF3dos\xEDtani a foglal\xE1s\xE1t, k\xE9rj\xFCk keresse szak\xFCzlet\xFCnket.","Appointment booked!":"Id\u0151pont lefoglalva!","examiner: %examiner%":"v\xE9gzi: %examiner%","It takes up to %length% minutes":"Id\u0151tartam: %length% perc","I have accepted the privacy policy":l`Elfogadom az <${ye}>adatkezelési tájékoztatóban<//> foglaltakat`,"I agree to the use of my medical records according to privacy policy":"Hozz\xE1j\xE1rulok eg\xE9szs\xE9g\xFCgyi adataim adatkezel\xE9si t\xE1j\xE9koztat\xF3ban foglaltak szerinti kezel\xE9s\xE9hez","Privacy policy":"Adatkezel\xE9si t\xE1j\xE9koztat\xF3",Close:"Bez\xE1r\xE1s","Start Time":"Id\u0151pont",Subject:"T\xE1rgy",Location:"Helysz\xEDn","Appointment booking":"Id\u0151pontfoglal\xE1s","Select eye examination type":"Vizsg\xE1latt\xEDpus v\xE1laszt\xE1sa","Select a vision expert":"L\xE1t\xE1sszak\xE9rt\u0151 v\xE1laszt\xE1sa","Select your desired appointment time":"Id\u0151pont v\xE1laszt\xE1sa","Enter customer details":"\xDCgyf\xE9ladatok megad\xE1sa",Comment:"Megjegyz\xE9s","change date":"id\u0151pont cser\xE9je","More...":"B\u0151vebben...","Detailed description":"R\xE9szletes le\xEDr\xE1s",Morning:"D\xE9lel\u0151tt",Afternoon:"D\xE9lut\xE1n",Evening:"Este","Booking the appointment":"Id\u0151pont lefoglal\xE1sa","Event draft":"Esem\xE9ny piszkozat","Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.":"Hiba! Id\u0151pontfoglal\xE1s nem lehets\xE9ges! Az id\u0151pontfoglal\xF3 be\xE1ll\xEDt\xE1si hib\xE1ja miatt nem lehets\xE9ges az online id\u0151pontfoglal\xE1s. K\xE9rj\xFCk keresse szak\xFCzlet\xFCnket a %mail% email c\xEDmen vagy jelezze nek\xFCnk ezt a hib\xE1t a telefonos id\u0151pontk\xE9r\xE9s sor\xE1n:","There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.":"Az id\u0151pontfoglal\xF3 be\xE1ll\xEDt\xE1si hib\xE1ja miatt nem lehets\xE9ges az online id\u0151pontfoglal\xE1s. K\xE9rj\xFCk keresse szak\xFCzlet\xFCnket \xE9s jelezze nek\xFCnk ezt a hib\xE1t a telefonos id\u0151pontk\xE9r\xE9s sor\xE1n: Nincs email c\xEDm be\xE1ll\xEDtva a szak\xFCzlethez.","There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.":"Az id\u0151pontfoglal\xF3 be\xE1ll\xEDt\xE1si hib\xE1ja miatt nem lehets\xE9ges az online id\u0151pontfoglal\xE1s. K\xE9rj\xFCk keresse szak\xFCzlet\xFCnket a %tel% telefonsz\xE1mon \xE9s jelezze nek\xFCnk ezt a hib\xE1t a telefonos id\u0151pontk\xE9r\xE9s sor\xE1n: Nincs email c\xEDm be\xE1ll\xEDtva a szak\xFCzlethez.","There is no calendar created for this store.":"Nincs napt\xE1r l\xE9trehozva az \xFCzlethez.","There is no office hourse configured for this specialist.":"Nincs munka\xF3ra be\xE1ll\xEDtva a l\xE1t\xE1sszak\xE9rt\u0151knek.","The eye examination process configured for this appointment booker has been removed.":"Az id\u0151pontfoglal\xF3ban be\xE1ll\xEDtott vizsg\xE1lati protokollt id\u0151k\xF6zben t\xF6r\xF6lt\xE9k.","There is no email address configured for this store.":"Nincs email c\xEDm be\xE1ll\xEDtva a szak\xFCzlethez.","The lenght isn\u2019t configured for the eye examination processes.":"A vizsg\xE1lati protokollokhoz nincs id\u0151tartam megadva.","Invalid API key or inactive API user.":"Hib\xE1s API kulcs vagy inakt\xEDv API felhaszn\xE1l\xF3.","Invalid store code":"T\xE9ves \xFCzlet k\xF3d","Error! Appointments can not be created!":"Hiba! Id\u0151pontfoglal\xE1s nem lehets\xE9ges!","There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.":"Az id\u0151pontfoglal\xF3 be\xE1ll\xEDt\xE1si hib\xE1ja miatt nem lehets\xE9ges az online id\u0151pontfoglal\xE1s. K\xE9rj\xFCk keresse szak\xFCzlet\xFCnket a %tel% telefonsz\xE1mon vagy %email% email c\xEDmen \xE9s jelezze nek\xFCnk ezt a hib\xE1t a telefonos id\u0151pontk\xE9r\xE9s sor\xE1n:","Store selection":"\xDCzlet v\xE1laszt\xE1sa","There are no eye examination processes configured in the store network or the length of them is not configured.":"Nincs vizsg\xE1lati protokoll a bolth\xE1l\xF3zatban, vagy a hossza nincs be\xE1ll\xEDtva."},ro:{"Are you sure you want to cancel this appointment?":"Sunte\u021Bi sigur c\u0103 dori\u021Bi s\u0103 renun\u021Ba\u021Bi la programare?","All inputed data will be lost.":"Datele \xEEntroduse se vor pierde.","No, continue editing appointment":"Nu, continuare programare.","Cancel appointment":"\xCEntreruperea program\u0103rii","Appointment booking failed":"Programare nereu\u0219it\u0103.","Due to an unexpected error appointment could not be booked, please restart the process":"A ap\u0103rut o eroare. V\u0103 rug\u0103m, \xEEncepe\u021Bi din nou procesul.","None of our colleagues is available for the selected process":"Nu avem angaja\u021Bi disponibili pentru protocolul selectat.","First free":"Primul liber","For finding the nearest free time slot.":"\xCEn cel mai scurt timp.","@abbrSunday":"D","@abbrMonday":"L","@abbrTuesday":"M","@abbrWednesday":"Mi","@abbrThursday":"J","@abbrFriday":"V","@abbrSaturday":"S",January:"Ianuarie",February:"Februarie",March:"Martie",April:"Aprilie",May:"Mai",June:"Junie",July:"Julie",August:"August",September:"Septembrie",October:"Octombrie",November:"Noiembrie",December:"Decembrie","There are no free appointment times for this day":"Nu sunt ore libere la data selectat\u0103.","The next free slot is available on %date%":"Urm\u0103torul timp liber este: %date%","Go to date":"Salt la dat\u0103","Click here to search for the next free appointment":"Click aici pentru c\u0103utarea urm\u0103torului timp liber","Search in progress...":"C\u0103utare \xEEn curs...","Last name":"Nume","First name":"Prenume",Birth:"Data na\u0219tere",Gender:"Gen",SSN:"CNP",Country:"\u021Aara",State:"Megye","Postal code":"Cod po\u0219tal",City:"Ora\u0219","Street address":"Strada",Mobile:"Num\u0103r de tel mobil","Select another process":"Selectare protocol diferit","@abbrMinute":"min.","Not specified":"Nu e specificat",Male:"B\u0103rbat",Female:"Femeie",Next:"Mai departe","This field is required.":"Acest c\u0103mp este necesar.","Invalid email address.":"Adresa da mail gre\u0219it\u0103.","Your information":"Datele personale",Name:"Nume","Date of birth":"Data na\u0219tere",Address:"Adresa","Phone number":"Num\u0103r de telefon","Appointment details verification":"Verificare datele rezerv\u0103rii","Appointment summary":"Sumar rezervare",Price:"Pre\u021B","Confirm appointment":"Rezervare","%customer%'s examination":"Consulta\u021Bie %customer%","Your appointment have been recorded.":"Rezervare salvat\u0103.","The examination will start at %start%, please arrive 5 minutes early.":"V\u0103 rug\u0103m s\u0103 v\u0103 prezenta\u021Bi cu 5 minute mai devreme. Ora inceperii rezerv\u0103rii: %start%.","If you have any further questions, please contact us through our customer service.":"Dac\u0103 ave\u021Bi alte \xEEntreb\u0103ri, v\u0103 rug\u0103m contacta\u021Bi serviciul clien\u021Bi.","Appointment booked!":"Programare rezervat\u0103!","examiner: %examiner%":"examinator: %examiner%","It takes up to %length% minutes":"Durata: %length% minute","I have accepted the privacy policy":l`Accept <${ye}>Termenile și condițiile<//>`,"I agree to the use of my medical records according to privacy policy":"Dau acordul pentru prelucrarea datelor medicale conform Termenilor \u0219i condi\u021Biilor generale.","Privacy policy":"Termeni \u0219i condi\u021Bii",Close:"\xCEnchidere","Start Time":"Data",Subject:"Subiect",Location:"Loca\u021Bie","Appointment booking":"Programare","Select eye examination type":"Selectare tip de examinare","Select a vision expert":"Selectare specialist \xEEn vedere","Select your desired appointment time":"Selectare dat\u0103 \u0219i or\u0103","Enter customer details":"Datele clientului","change date":"modificare dat\u0103",Morning:"\xCEnainte de mas\u0103",Afternoon:"Dup\u0103 mas\u0103",Evening:"Seara","Booking the appointment":"Rezervarea unei program\u0103ri","Event draft":"Eveniment schi\u021B\u0103","Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.":"Eroare! Programarea nu se poate rezerva! Rezervarea online a program\u0103rilor nu este posibil\u0103 din cauza unei erori de configurare \xEEn sistemul de rezervare a program\u0103rilor. V\u0103 rug\u0103m s\u0103 contacta\u021Bi magazinul la adresa de e-mail %mail% \u0219i s\u0103 ne informa\u021Bi despre aceast\u0103 eroare \xEEn timpul solicit\u0103rii de programare telefonic\u0103","There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.":"Rezervarea online nu este posibil\u0103 din cauza unei erori de configurare \xEEn calendarul de rezervare. V\u0103 rug\u0103m contacta\u021Bi magazinul, informa\u021Bi-ne despre aceast\u0103 eroare \xEEn timpul solicit\u0103rii de programare telefonic\u0103: Nu a fost setat\u0103 nicio adres\u0103 de e-mail pentru magazinul de specialitate.","There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.":"Rezervarea online nu este posibil\u0103 din cauza unei erori de configurare \xEEn calendarul de rezervare. V\u0103 rug\u0103m contacta\u021Bi magazinul telefonic ( %tel% ), informa\u021Bi-ne despre aceast\u0103 eroare \xEEn timpul solicit\u0103rii de programare telefonic\u0103: Nu a fost setat\u0103 nicio adres\u0103 de e-mail pentru magazinul de specialitate.","There is no calendar created for this store.":"Nu a fost creat calendar pentru acest magazin.","There is no office hourse configured for this specialist.":"Nu exist\u0103 ore de lucru pentru speciali\u0219tii \xEEn vedere.","The eye examination process configured for this appointment booker has been removed.":"Protocolul de examinare stabilit la programare a fost anulat \xEEntre timp.","There is no email address configured for this store.":"Nu exist\u0103 nicio adres\u0103 de e-mail setat\u0103 pentru magazinul specializat.","The lenght isn\u2019t configured for the eye examination processes.":"Nu este specificat\u0103 durat\u0103 pentru protocoalele de examinare.","Invalid API key or inactive API user.":"Cheie API gre\u0219it\u0103 sau utilizator API inactiv.","Invalid store code":"Cod magazin gre\u0219it","Error! Appointments can not be created!":"Eroare! Programarea nu se poate rezerva!","There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.":"Eroare! Programarea nu se poate rezerva! Rezervarea online a program\u0103rilor nu este posibil\u0103 din cauza unei erori de configurare \xEEn sistemul de rezervare a program\u0103rilor. V\u0103 rug\u0103m s\u0103 contacta\u021Bi magazinul la num\u0103rul de telefon %tel% sau adresa de e-mail %email% \u0219i s\u0103 ne raporta\u021Bi aceast\u0103 eroare atunci c\xE2nd solicita\u021Bi o programare prin telefon:","Store selection":"Selectare magazin","There are no eye examination processes configured in the store network or the length of them is not configured.":"Nu exist\u0103 protocol de consula\u021Bie \xEEn magazin sau durata protocolului nu este specificat."},hr:{"Are you sure you want to cancel this appointment?":"Jeste li sigurni da \u017Eelite otkazati ovaj termin?","All inputed data will be lost.":"Svi uneseni podaci bit \u0107e izgubljeni.","No, continue editing appointment":"Ne, nastavi s ure\u0111ivanjem termina","Cancel appointment":"Otka\u017Ei termin","Appointment booking failed":"Rezervacija termina nije uspjela","Due to an unexpected error appointment could not be booked, please restart the process":"Zbog neo\u010Dekivane pogre\u0161ke termin nije mogu\u0107e rezervirati, molimo ponovno pokrenite proces","None of our colleagues is available for the selected process":"Nitko od na\u0161ih kolega nije dostupan za odabrani proces","First free":"Prvo slobodno","For finding the nearest free time slot.":"Da odaberete \u0161to raniji termin.","@abbrSunday":"N","@abbrMonday":"P","@abbrTuesday":"U","@abbrWednesday":"S","@abbrThursday":"\u010C","@abbrFriday":"P","@abbrSaturday":"S",January:"Sije\u010Dnja",February:"Velja\u010Da",March:"O\u017Eujak",April:"Travanj",May:"Svibanj",June:"Lipanj",July:"Srpanj",August:"Kolovoz",September:"Rujan",October:"Listopad",November:"Studeni",December:"Prosinac","There are no free appointment times for this day":"Za ovaj dan nema slobodnih termina","The next free slot is available on %date%":"Datum sljede\u0107eg slobodnog termina je %date%","Go to date":"Sko\u010Di na datum","Click here to search for the next free appointment":"Tra\u017Eenje sljede\u0107eg slobodnog termina","Search in progress...":"Pretra\u017Eivanje je u tijeku...","Last name":"Prezime","First name":"Ime",Birth:"Datum ro\u0111enja",Gender:"Spol",SSN:"MBO broj",Country:"Zemlja",State:"Dr\u017Eava","Postal code":"Po\u0161tanski broj",City:"Grad","Street address":"Ulica",Mobile:"Mobilni","Select another process":"Odaberite drugi protokol","@abbrMinute":"m.","Not specified":"Nije specificirano",Male:"Mu\u0161karac",Female:"\u017Dena",Next:"Sljede\u0107i","This field is required.":"Ovo polje je obavezno.","Invalid email address.":"Pogre\u0161na adresa e-maila.","Your information":"Va\u0161i podaci",Name:"Ime","Date of birth":"Datum ro\u0111enja",Address:"Adresa","Phone number":"Broj telefona","Appointment details verification":"Provjerite detalje rezervacije","Appointment summary":"Sa\u017Eetak rezervacije",Price:"Cjena","Confirm appointment":"Odobrenje rezervacije termina","%customer%'s examination":"%customer% pregleda","Your appointment have been recorded.":"Va\u0161a rezervacija je zabilje\u017Eena.","The examination will start at %start%, please arrive 5 minutes early.":"Po\u010Detak pregleda: %start%, molimo do\u0111ite 5 minuta ranije.","If you have any further questions, please contact us through our customer service.":"Ako imate dodatnih pitanja, obratite nam se putem na\u0161e korisni\u010Dke slu\u017Ebe.","Appointment booked!":"Termin rezerviran!","examiner: %examiner%":"ispitiva\u010D: %examiner%","It takes up to %length% minutes":"Trajanje: %length% minuta","I have accepted the privacy policy":l`Prihvaćam <${ye}>što je zapisano<//> u informativnom listu za upravljanje podacima`,"I agree to the use of my medical records according to privacy policy":"Pristajem na obradu mojih zdravstvenih podataka u skladu s informacijama o upravljanju podacima","Privacy policy":"Informativni list za upravljanje podatke",Close:"Zatvaranje","Start Time":"Vrijeme po\u010Detka",Subject:"Objekat",Location:"Mjesto","Appointment booking":"Zaka\u017Eite termin","Select eye examination type":"Izbor vrste pregleda","Select a vision expert":"Odaberite stru\u010Dnjaka za vid","Select your desired appointment time":"Odaberite \u017Eeljeno vrijeme termina","Enter customer details":"Unos podataka o klijentu","change date":"promijeni termin",Morning:"Prijepodne",Afternoon:"Poslijepodne",Evening:"Ve\u010Der","Booking the appointment":"Rezerviranje termina","Event draft":"Skica za doga\u0111aj","Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.":"Gre\u0161ka! Rezervacija termina nije mogu\u0107a! Online rezervacija termina nije mogu\u0107a zbog gre\u0161ke u konfiguraciji sustava za rezervaciju termina. Kontaktirajte na\u0161u optiku na e-mail adresu %mail% i prijavite nam ovu pogre\u0161ku tijekom telefonskog zahtjeva za termin.","There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.":"Online rezervacija termina nije mogu\u0107a zbog gre\u0161ke u konfiguraciji sustava za rezervaciju termina. Kontaktirajte na\u0161u optiku i prijavite nam ovu pogre\u0161ku tijekom telefonskog zahtjeva za termin. Nije postavljena e-mail adresa za optiku.","There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.":"Online rezervacija termina nije mogu\u0107a zbog gre\u0161ke u konfiguraciji sustava za rezervaciju termina. Nazovite na\u0161u optiku na telefonski broj %tel% i prijavite nam ovu pogre\u0161ku tijekom telefonskog zahtjeva za termin. Nije postavljena e-mail adresa za optiku.","There is no calendar created for this store.":"Kalendar nije napravljen za optiku.","There is no office hourse configured for this specialist.":"Za specijaliste za vid nije odre\u0111eno radno vrijeme.","The eye examination process configured for this appointment booker has been removed.":"Zadan protokol pregleda kod rezervacija termina je u me\u0111uvremenu izbrisan.","There is no email address configured for this store.":"Nije postavljena e-mail adresa za optiku.","The lenght isn\u2019t configured for the eye examination processes.":"Kod protokola pregleda nije navedeno trajanje.","Invalid API key or inactive API user.":"Lo\u0161 API klju\u010D ili neaktivan API korisnik.","Invalid store code":"Pogre\u0161an kod optike","Error! Appointments can not be created!":"Gre\u0161ka! Rezervacija termina nije mogu\u0107a!","There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.":"Online rezervacija termina nije mogu\u0107a zbog gre\u0161ke u konfiguraciji sustava za rezervaciju termina. Kontaktirajte na\u0161u optiku na %tel% telefonski broj ili na %email% email adresu i  prijavite nam ovu pogre\u0161ku tijekom telefonskog zahtjeva za termin. ","Store selection":"Odabir trgovine","There are no eye examination processes configured in the store network or the length of them is not configured.":"U optici nije postavljen protokol pregleda ili nije odre\u0111eno duljina pregleda."},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepted the privacy policy":l`I accept the terms of <${ye}>privacy policy<//>`,"Your appointment starts at startTime":l`Your appointment starts at <${Re}//>`,"change date":"change date"}},f=(e,t={},r)=>{r=r||g("language","translationOverrides");let a=r.language,n=yt[a]||yt[a.substring(0,2)]||yt.en;e=r.translationOverrides[e]||n[e]||e;for(let o in t)e=e.replace(new RegExp("%"+o+"%","g"),t[o]);return e};var ia=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function Be(e,t,r){let a=function(n,o){if(!n.only_specific_processes_allowed)return!0;let s=o["@id"].split("/"),c=parseInt(s[s.length-1]);return n.allowed_process_ids.indexOf(c)!=-1};if(typeof t.online_reservation_allowed!="undefined"&&t.online_reservation_allowed==!1||!a(t,e))return!1;for(let n=0;n<ia.length;n++){let o=ia[n];if(!(!t.user||t.user.roles.indexOf(o.name)==-1)&&(e.highestRequiredRole==o.name||r=="hierachical"&&o.includes.indexOf(e.highestRequiredRole)!=-1))return!0}return!1}function Se({appointment:e,calendars:t,calendarRoleCheckMode:r}){var a=e?e.eye_examination_process:null;return(t||[]).filter(function(n){return!a||!a.highestRequiredRole?!0:Be(a,n,r)})}function R(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var St=5,pi=e=>{var t=[new Date(e)];for(let r=0;r<St-1;r++)e=new Date(e),e.setDate(e.getDate()+1),t.push(e);return t.hasDate=function(r){for(let a=0;a<St;a++)if(R(this[a],r))return!0},t},He=[];function kt(e){if(He.length)return He;for(var t=e||new Date,r=0;r<=100;r++)He.push(pi(t)),t=new Date(t),t.setDate(t.getDate()+St);return He}function ke(e,t){return R(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var xt={hu:"%Y. %M. %D."},sa=e=>(e=new Date(e),`${e.getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`),la=e=>{let{language:t}=g("language");var r=xt[t]||xt[t.substring(0,2)]||xt.hu;e=new Date(e);var a=e.getMonth()+1;return r.replace("%Y",e.getFullYear()).replace("%M",`${a<10?"0":""}${a}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},ui=e=>la(e)+" "+sa(e),P={formatTime:sa,formatDate:la,formatDateTime:ui};var ca=["hu"],da=e=>(e=e||g("language").language,ca.indexOf(e)!=-1||ca.indexOf(e.substring(0,2))!=-1),mi=({first_name:e,last_name:t},r)=>da(r)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),ae={format:mi,shouldSwitchNameOrder:da};var fi=({postal_code:e,city:t,street_address:r})=>{let{language:a}=g("language"),n=e||"",o=t||"",s=r||"",c=[n,o,s].filter(h=>h.trim()).length;if(c===0)return"";if(c===1)return(o||s||"").trim();let p;switch(a){case"ro":case"hr":p=`${s}, ${n} ${o}`;break;case"hu":default:p=`${n} ${o}, ${s}`}return p.trim()},ue={formatAddress:fi};var oe=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93","+..-..-...-...."],["\xC5land Islands","ax","358",""],["Albania (Shqip\xEBri)","al","355","+...(...)...-..."],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (\xD6sterreich)","at","43","+..(...)...-...."],["Azerbaijan (Az\u0259rbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973","+...-....-...."],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375","+...(..)...-..-.."],["Belgium (Belgi\xEB)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (B\xE9nin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (R\xE9publique centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (\u4E2D\u56FD)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["C\xF4te d\u2019Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Cura\xE7ao","cw","599","+...-...-....",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357","+...-..-...-..."],["Czech Republic (\u010Cesk\xE1 republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (Rep\xFAblica Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (F\xF8royar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane fran\xE7aise)","gf","594","+...-.....-...."],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guin\xE9e)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (\u9999\u6E2F)","hk","852","+... .... ...."],["Hungary (Magyarorsz\xE1g)","hu","36","+..(...)...-..."],["Iceland (\xCDsland)","is","354","+... ... ...."],["India (\u092D\u093E\u0930\u0924)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98","+..(...)...-...."],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (\u65E5\u672C)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962","+...-.-....-...."],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965","+...-....-...."],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996","+...(...)...-..."],["Laos (\u0EA5\u0EB2\u0EA7)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (\u6FB3\u9580)","mo","853","+...-....-...."],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (M\xE9xico)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212","+...-..-....-..."],["Mozambique (Mo\xE7ambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95","+..-...-..."],["Namibia (Namibi\xEB)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968","+...-..-...-..."],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970","+...-..-...-...."],["Panama (Panam\xE1)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Per\xFA)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974","+...-....-...."],["R\xE9union (La R\xE9union)","re","262","+...-.....-...."],["Romania (Rom\xE2nia)","ro","40","+..-..-...-...."],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239","+...-..-....."],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966","+...-..-...-...."],["Senegal (S\xE9n\xE9gal)","sn","221","+...-..-...-...."],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82","+..-..-...-...."],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211","+...-..-...-...."],["Spain (Espa\xF1a)","es","34","+.. ... ... ..."],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94","+..-..-...-...."],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963","+...-..-....-..."],["Taiwan (\u53F0\u7063)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (\u0E44\u0E17\u0E22)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216","+...-..-...-..."],["Turkey (T\xFCrkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380","+...(..)...-..-.."],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (O\u02BBzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Citt\xE0 del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Vi\u1EC7t Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],Ge={},pa={},ua=function(e,t,r){t in Ge||(Ge[t]=[]);var a=r||0;Ge[t][a]=e};for(var K=0;K<oe.length;K++){if(E=oe[K],oe[K]={name:E[0],iso2:E[1],dialCode:E[2],priority:E[4]||0},E[3]&&(oe[K].format=E[3]),E[5])for(oe[K].hasAreaCodes=!0,Ve=0;Ve<E[5].length;Ve++)ma=E[2]+E[5][Ve],ua(E[1],ma);pa[oe[K].iso2]=K,ua(E[1],E[2],E[4])}var E,ma,Ve,hi={allCountries:oe,iso2Lookup:pa,allCountryCodes:Ge},$t=hi.allCountries;var gi={hu_HU:{"06":"+36","36":"+36"},hr_HR:{"0":"+385"},ro_RO:{"0":"+40"}},jt=(e,t)=>{let r=gi[e]||{};t=(t||"").trim();var a=t.indexOf("+")==0;if(t=t.replace(/\D/g,""),!t.length)return null;a&&(t=`+${t}`),t.indexOf("00")==0&&(t=`+${t.substring(2)}`);for(let o=0;o<Object.keys(r).length;o++){let s=Object.keys(r)[o];if(t.indexOf(s)==0)return`${r[s]}.${t.substring(s.length)}`}for(let o=0;o<$t.length;o++){let{dialCode:s}=$t[o];if(t.indexOf(`+${s}`)==0)return`+${s}.${t.substring(s.length+1)}`}let n=Object.keys(r)[0];return`${n?r[n]:"+36"}.${t}`};function D(e,t,r){if(!!e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate():null}function wt(e,t,r){return e.filter(function(a){if(!a.highestRequiredRole)return!0;for(let n=0;n<(t||[]).length;n++)if(Be(a,t[n],r))return!0;return!1})}function xe(e,t){return e!=="embedded"&&e!=="embedded-safe"||t=="large"?"col-sm-10 col-md-8":t==="medium"?"col-sm-10":""}var fa=e=>{let t={},r={},a={dispatch(n,o){if(n!=="@dispatch"&&a.dispatch("@dispatch",[n,o,t[n]]),t[n]){let s;t[n].forEach(c=>{let p=t[n].includes(c)&&c(r,o,a);p&&typeof p.then!="function"&&(r={...r,...p},s={...s,...p})}),s&&a.dispatch("@changed",s)}},get:()=>r,on(n,o){return(t[n]||(t[n]=[])).push(o),()=>{t[n]=t[n].filter(s=>s!==o)}}};return e.forEach(n=>{n&&n(a)}),a.dispatch("@init"),a};function ha(e){e.on("@init",()=>({eyeExaminationProcesses:[],eyeExaminationProcessId:null,unfilteredEyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:r},a)=>(a.length==1&&(e.dispatch("appointment/set",{eye_examination_process:a[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected")),{eyeExaminationProcesses:a})),e.on("eyeExaminationProcessId/set",(r,a)=>({eyeExaminationProcessId:a})),e.on("unfilteredEyeExaminationProcesses/set",(r,a)=>({unfilteredEyeExaminationProcesses:a})),e.on("store/set",async({eyeExaminationProcessId:r},a)=>{var n=null;r?(n=[await C.get(e,`eye_examination_processes/${r}`)].filter(c=>c),n[0].length==null&&e.dispatch("moduleState/set","error.noLength")):(n=await C.get(e,`eye_examination_processes?hasLength&chain=${a.chain["@id"]}`),n.length==0&&e.dispatch("moduleState/set","error.noProcessOrLength")),e.dispatch("unfilteredEyeExaminationProcesses/set",n);let{calendars:o,calendarRoleCheckMode:s}=e.get();o&&o.length&&t(n,o,s)}),e.on("calendars/set",async({unfilteredEyeExaminationProcesses:r},a)=>{let{calendarRoleCheckMode:n}=e.get();r&&r.length&&t(r,a,n)});function t(r,a,n){e.dispatch("eyeExaminationProcesses/set",wt(r,a,n))}}var Ct=["storeSelection","process","calendar","appointment","customer","summary"];function ga(e){var t=(a,n)=>Ct.filter(o=>a.indexOf(o)!=-1&&o!=n),r=(a,n)=>Ct.filter(o=>a.indexOf(o)!=-1||o==n);e.on("@init",()=>({currentStep:"storeSelection",availableSteps:Ct,calendarStepShouldBeHidden:!1,showFirstAvailableUserItem:!0})),e.on("currentStep/set",({availableSteps:a,currentStep:n,rootElement:o},s)=>(o.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:a.indexOf(s)!=-1?s:n})),e.on("calendarStepShouldBeHidden/set",({availableSteps:a},n)=>({calendarStepShouldBeHidden:n,availableSteps:t(a,"calendar")})),e.on("showFirstAvailableUserItem/set",(a,n)=>({showFirstAvailableUserItem:n})),e.on("currentStep/next",({currentStep:a,availableSteps:n,rootElement:o})=>{var s=n.indexOf(a);return o.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:s<n.length-1?n[s+1]:a}}),e.on("currentStep/previous",({currentStep:a,availableSteps:n,rootElement:o})=>{var s=n.indexOf(a);return o.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:s>0?n[s-1]:a}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:a,availableSteps:n,currentStep:o,rootElement:s})=>a.length==1?(s.querySelector(".cvio-ab-content").scrollTop=0,o=="process"&&(o=n.filter(c=>c!="storeSelection"&&c!="process")[0]),{availableSteps:n=t(n,"process"),currentStep:o}):{availableSteps:n=r(n,"process")}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:a,appointment:n,calendars:o,currentStep:s,calendarStepShouldBeHidden:c,calendarRoleCheckMode:p})=>{if(!c){var h=Se({appointment:n,calendars:o,calendarRoleCheckMode:p});return{availableSteps:r(a,"calendar")}}}),e.on("store/setStoreSelection/set",({availableSteps:a,currentStep:n},o)=>{if(o=="no")return{availableSteps:a=t(a,"storeSelection"),currentStep:n=="storeSelection"?a[0]:n}})}function va(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:t},r)=>({appointment:Object.assign(t,r)})),e.on("showAppointmentComment/set",(t,r)=>({showAppointmentComment:r})),e.on("appointmentCommentRequired/set",(t,r)=>({appointmentCommentRequired:r})),e.on("constantAppointmentCommentText/set",(t,r)=>({constantAppointmentCommentText:r}))}function _a(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:t},r)=>(t.headers=Object.assign(t.headers,r),{api:t})),e.on("api/setPath",({api:t},r)=>(t.path=r,{api:t}))}function ba(e){e.on("@init",()=>({language:navigator.language,translationOverrides:{}})),e.on("language/set",(t,r)=>({language:r})),e.on("translationOverrides/set",(t,r)=>({translationOverrides:r}))}function $e(e,{visible:t}={visible:!1}){return r=>{r.on("@init",()=>({[e]:t})),r.on(`${e}/set`,(a,n)=>({[e]:n}))}}var vi=["idle","loading","error","success","error.storeCode","error.403","error.noLength","error.storeEmail","error.missingConfiguredProcessId","error.noProcessOrLength"];function ya(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},r)=>{if(t.indexOf("error")!==0)return r=vi.indexOf(r)!=-1?r:t,r=="idle"?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:r}}),e.on("eyeExaminationProcesses/set",({moduleState:t},r)=>{t!=="idle"&&(e.dispatch("moduleState/set","idle"),e.dispatch("bookerInit"))})}function Sa(e){e.on("@init",()=>({store:null,storeSelection:"no",stores:null})),e.on("store/set",({storeSelection:r,stores:a},n)=>(r!=="no"&&a==null&&t(n,r),n.email||e.dispatch("moduleState/set","error.storeEmail"),{store:n}));async function t({chain:r},a){let n=await C.get(e,a=="all"?"appointment_calendars":`appointment_calendars?store.chain=${r["@id"]}`),o={};for(let s of n)s.user&&s.store&&(o[s.store["@id"]]=s.store);e.dispatch("stores/set",Object.values(o).sort((s,c)=>s.name.localeCompare(c.name)))}e.on("stores/set",(r,a)=>({stores:a})),e.on("store/setStoreSelection/set",(r,a)=>({storeSelection:a}))}function ka(e){e.on("@init",()=>({calendars:[],calendarRoleCheckMode:"hierachical"})),e.on("calendars/set",(t,r)=>r!==null?{calendars:r.filter(({user:a})=>a)}:{calendars:null}),e.on("calendarRoleCheckMode/set",(t,r)=>({calendarRoleCheckMode:r})),e.on("store/set",async(t,r)=>{e.dispatch("calendars/set",null);var a=await C.get(e,`appointment_calendars?groups[]=userProfilePictureRead&store=${r["@id"]}`);e.dispatch("calendars/set",a)})}function xa(e){e.on("@init",()=>{var t=new Date;return t.setDate(t.getDate()+1),{selectedDate:t}}),e.on("selectedDate/set",(t,r)=>({selectedDate:r})),e.on("currentStep/next",t=>{let{firstEligibleTime:r}=t;if(t.currentStep=="appointment")return{selectedDate:r}})}var _i=(e,t)=>{let{appointment:r,selectedCalendar:a,nextFreeSlots:n,selectedDate:o,calendarRange:s}=e,c=o.getFullYear(),p=o.getMonth(),h=s=="fiveDays"?o.getDate()+7:new Date(c,p+1,0).getDate();for(let d=o.getDate();d<=h;d++){let S=n[D(r,a,new Date(c,p,d))];if(S==null||S.status=="incomplete")return!1}return!0},Dt=e=>{let{initialNextFreeSlotsLoading:t,selectedDate:r,nextFreeSlots:a,appointment:n,selectedCalendar:o}=e.get();if(e.dispatch("nextFreeSlotLoading/set",!1),!t)return;let s=D(n,o,r);if(a[s]&&(a[s].status=="complete"||a[s].status=="incomplete"))return;let c=new Date(r);for(;a[D(n,o,c)];){let p=a[D(n,o,c)];if(p.status=="complete"||p.status=="incomplete"){e.dispatch("selectedDate/set",c);return}c.setDate(c.getDate()+1)}},bi=async(e,t)=>{let{selectedDate:r,calendarRange:a}=e.get();if(a=="fiveDays"){Dt(e);return}let n=r.getFullYear(),o=r.getMonth(),s=Object.keys(t).sort().pop(),c=t[s],p=/(?<=^(?:[^-]*-){2})(.*)/,h=s.match(p)[1].split("-");var d=new Date(h[0],parseInt(h[1])-1,parseInt(h[2]));c.status!=="incomplete"&&(d=new Date(h[0],parseInt(h[1])-1,parseInt(h[2])+1)),d<=new Date(n,o+1,0)?je(e,d):Dt(e)},je=async(e,t)=>{let{appointment:r,selectedCalendar:a,firstEligibleTime:n,calendarRange:o}=e.get();if(e.dispatch("nextFreeSlotLoading/set",!0),!r.eye_examination_process||yi(e,t)||_i(e.get(),t)){Dt(e);return}let s=await C.get(e,`appointment_next_free_slots?${Si(e,t)}`);if(s.length==0){let S=new Date(t);return S.setDate(t.getDate()+6),e.dispatch("nextFreeSlots/add",$a(e,t,S)),je(e,S)}let c=new Date(s[s.length-1].start),p=$a(e,t,c);var h=null;for(let S=0;S<s.length;S++){let v=s[S],b=new Date(v.start),_=D(r,a,b);if(!(b<n)){for(let x=0;x<(p[_].slots||[]).length;x++)if(p[_].slots[x]["@id"]==v["@id"]){p[_].status="complete";continue}var d=!1;for(let x of p[_].slots||[])if(x["@id"]==v["@id"]||x.start==v.start){d=!0;break}d||(p[_].status=="empty"&&(p[_].status="incomplete"),p[_].slots||(p[_].slots=[]),p[_].slots.push(v),h&&h!=_&&(p[h].status="complete"),h!=_&&(h=_))}}e.dispatch("nextFreeSlots/add",p),bi(e,p)},yi=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>90,Si=(e,t)=>{let{appointment:r,selectedCalendar:a}=e.get(),n={process:r.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return a?n.calendar=a["@id"]:n.store=e.get().store["@id"],Object.keys(n).map(o=>`${o}=${n[o]}`).join("&")},$a=(e,t,r)=>{let{appointment:a,selectedCalendar:n,nextFreeSlots:o}=e.get(),s=new Date(t);s.setHours(0),s.setMinutes(0);let c={};for(;s<=r;){let p=D(a,n,s);c[p]=o[p]||{status:"empty"},s.setDate(s.getDate()+1)}return c};function ja(e){e.on("@init",()=>{let t=new Date;return t.setDate(t.getDate()+1),t.setHours(0),t.setMinutes(0),t.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:t,firstEligibleTime:t,autoselectNextFreeSlot:!1,nextFreeSlotLoading:!1}}),e.on("firstEligibleTime/set",(t,r)=>{let a=new Date;if(r=="now")return e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a};if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),r=="tomorrow")return{firstEligibleDate:a,firstEligibleTime:a};if(r=="tomorrowNoon"){let n=new Date(a);return n.setHours(12),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="plus24Hours"){let n=new Date;return n.setDate(n.getDate()+1),{firstEligibleDate:a,firstEligibleTime:n}}if(r=="dayAfterTomorrow")return a.setDate(a.getDate()+1),e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a}}),e.on("selectedDate/set",async t=>{je(e,t.selectedDate)}),e.on("bookerInit",async t=>{t.currentStep=="appointment"&&(e.dispatch("initialNextFreeSlotsLoading/set",!0),je(e,t.selectedDate))}),e.on("currentStep/next",async t=>{t.currentStep=="appointment"&&je(e,t.selectedDate)}),e.on("autoselectNextFreeSlot/set",(t,r)=>({autoselectNextFreeSlot:r})),e.on("nextFreeSlots/add",({nextFreeSlots:t,autoselectNextFreeSlot:r},a)=>{let n={nextFreeSlots:Object.assign(t,a)};if(!r)return n;for(let o in t)if(t[o].status!="empty"&&t[o].slots.length>0){e.dispatch("appointment/selectSlot",t[o].slots[0]),n.autoselectNextFreeSlot=!1;break}return n}),e.on("nextFreeSlotLoading/set",(t,r)=>({nextFreeSlotLoading:r}))}var ki=(e,t)=>{(e==null||e==="")&&t.errors.push("This field is required.")},xi=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,$i=(e,t)=>{e==null||e===""||xi.test(e.trim().toLowerCase())||t.errors.push("Invalid email address.")};function wa(e){e.on("@init",()=>({customerForm:{},commentError:null,customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:t,customerFormGlobalErrors:r,commentError:a},n)=>({customerForm:Object.assign(t,n.customerForm||{}),customerFormGlobalErrors:n.customerFormGlobalErrors||r,commentError:n.commentError===void 0?a:n.commentError})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:r,appointmentCommentRequired:a})=>{let{customer:n}=r;var o=!1,s=null;if(a&&!(r.comment||"").trim()&&(o=!0,s="This field is required."),Object.keys(t).forEach(c=>{t[c].errors=[],t[c].required&&ki(n[c],t[c]),c=="email"&&$i(n[c],t[c]),t[c].errors.length&&(o=!0)}),o)return{customerForm:t,customerFormGlobalErrors:[],commentError:s};e.dispatch("currentStep/next")})}function Ca(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(t,r)=>({headerTitle:r}))}function Da(e){e.on("@init",()=>({calendarRange:"fiveDays",timeSlotMode:"singleColumn"})),e.on("timeSelectionUi/timeSlotMode/set",(t,r)=>({timeSlotMode:r})),e.on("timeSelectionUi/calendarRange/set",(t,r)=>({calendarRange:r}))}function Ta(e){e.on("@init",()=>({priceComment:null})),e.on("priceComment/set",(t,r)=>({priceComment:r}))}function Pa(e){e.on("@init",()=>({showPrice:!0})),e.on("showPrice/set",(t,r)=>({showPrice:r}))}function Aa(e){e.on("@init",()=>({showExaminerName:null})),e.on("showExaminerName/set",(t,r)=>({showExaminerName:r}))}function Ma(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(t,r)=>({booking:r}))}function za(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(t,r)=>({country:r}))}function Ea(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(t,r)=>({selectedCalendar:r}))}function Fa(e){e.on("@init",()=>({privacyPolicy:null,privacyPolicyLink:null,medicalConsent:"explicit"})),e.on("bookerInit",async t=>{var r=await C.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let a=0;a<r.length;a++)if(new Date(r[a].valid_until)>new Date)return e.dispatch("privacyPolicy/set",r[a]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(t,r)=>({privacyPolicy:r})),e.on("privacyPolicyLink/set",(t,r)=>({privacyPolicyLink:r})),e.on("medicalConsent/set",(t,r)=>({medicalConsent:r}))}function Na(e){e.on("@init",()=>({locationName:null,locationAddress:null,showLocation:!0})),e.on("locationName/set",(t,r)=>({locationName:r})),e.on("locationAddress/set",(t,r)=>({locationAddress:r})),e.on("showLocation/set",(t,r)=>({showLocation:r}))}function Ia(e){e.on("@init",()=>({slotSelection:{inProgress:!1,errorMessage:null}})),e.on("slotSelection/inProgress/set",({slotSelection:t},r)=>({slotSelection:{...t,inProgress:r}})),e.on("slotSelection/errorMessage/set",({slotSelection:t},r)=>({slotSelection:{...t,errorMessage:r}})),e.on("appointment/selectSlot",async(t,r)=>{let{appointment:a,calendars:n,currentStep:o}=t;if(o==="appointment"){var s=null;for(let p=0;p<n.length;p++)if(r.calendar["@id"]==n[p]["@id"])var s=n[p];if(!s)throw new Error("Could not find calendar");e.dispatch("slotSelection/inProgress/set",!0);try{let p={title:f("Event draft",{},t),calendar:s["@id"],status:"draft",start:r.start,end:r.end,source:"online"},h={...t,dispatch:e.dispatch};var c=(a.id?await C.put(h,a.id,p):await C.post(h,"appointment_events",p))["@id"];e.dispatch("slotSelection/errorMessage/set",null)}catch(p){e.dispatch("slotSelection/errorMessage/set","Nem siker\xFClt a foglal\xE1s v\xE1lasszon m\xE1sik id\u0151pontot vagy kezdje \xFAjra.");return}finally{e.dispatch("slotSelection/inProgress/set",!1)}e.dispatch("appointment/set",{start:r.start,end:r.end,calendar:s,id:c}),e.dispatch("currentStep/next")}})}function Oa(e){e.on("@init",()=>({style:"fullScreen"})),e.on("style/set",(t,r)=>({style:r}))}function La(e){e.on("@init",()=>({rootElement:null})),e.on("rootElement/set",(t,r)=>({rootElement:r}))}function Ra(e){e.on("@init",()=>({parentWidth:null})),e.on("parentWidth/set",(t,r)=>({parentWidth:r}))}var Ue=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function wi(e,t,r){return r={path:t,exports:{},require:function(a,n){return ji(a,n==null?r.path:n)}},e(r,r.exports),r.exports}function ji(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Tt=wi(function(e,t){var r=200,a="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",s="[object Array]",c="[object Boolean]",p="[object Date]",h="[object Error]",d="[object Function]",S="[object GeneratorFunction]",v="[object Map]",b="[object Number]",_="[object Object]",x="[object Promise]",$="[object RegExp]",j="[object Set]",F="[object String]",J="[object Symbol]",N="[object WeakMap]",Y="[object ArrayBuffer]",we="[object DataView]",It="[object Float32Array]",Ot="[object Float64Array]",Lt="[object Int8Array]",Rt="[object Int16Array]",Bt="[object Int32Array]",Ht="[object Uint8Array]",Gt="[object Uint8ClampedArray]",Vt="[object Uint16Array]",Ut="[object Uint32Array]",ko=/[\\^$.*+?()[\]{}|]/g,xo=/\w*$/,$o=/^\[object .+?Constructor\]$/,jo=/^(?:0|[1-9]\d*)$/,w={};w[o]=w[s]=w[Y]=w[we]=w[c]=w[p]=w[It]=w[Ot]=w[Lt]=w[Rt]=w[Bt]=w[v]=w[b]=w[_]=w[$]=w[j]=w[F]=w[J]=w[Ht]=w[Gt]=w[Vt]=w[Ut]=!0,w[h]=w[d]=w[N]=!1;var wo=typeof Ue=="object"&&Ue&&Ue.Object===Object&&Ue,Co=typeof self=="object"&&self&&self.Object===Object&&self,G=wo||Co||Function("return this")(),qt=t&&!t.nodeType&&t,Kt=qt&&!0&&e&&!e.nodeType&&e,Do=Kt&&Kt.exports===qt;function To(i,u){return i.set(u[0],u[1]),i}function Po(i,u){return i.add(u),i}function Ao(i,u){for(var m=-1,y=i?i.length:0;++m<y&&u(i[m],m,i)!==!1;);return i}function Mo(i,u){for(var m=-1,y=u.length,T=i.length;++m<y;)i[T+m]=u[m];return i}function Wt(i,u,m,y){var T=-1,M=i?i.length:0;for(y&&M&&(m=i[++T]);++T<M;)m=u(m,i[T],T,i);return m}function zo(i,u){for(var m=-1,y=Array(i);++m<i;)y[m]=u(m);return y}function Eo(i,u){return i==null?void 0:i[u]}function Jt(i){var u=!1;if(i!=null&&typeof i.toString!="function")try{u=!!(i+"")}catch(m){}return u}function Yt(i){var u=-1,m=Array(i.size);return i.forEach(function(y,T){m[++u]=[T,y]}),m}function Xe(i,u){return function(m){return i(u(m))}}function Zt(i){var u=-1,m=Array(i.size);return i.forEach(function(y){m[++u]=y}),m}var Fo=Array.prototype,No=Function.prototype,Ce=Object.prototype,Qe=G["__core-js_shared__"],Xt=function(){var i=/[^.]+$/.exec(Qe&&Qe.keys&&Qe.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Qt=No.toString,U=Ce.hasOwnProperty,De=Ce.toString,Io=RegExp("^"+Qt.call(U).replace(ko,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),er=Do?G.Buffer:void 0,tr=G.Symbol,rr=G.Uint8Array,Oo=Xe(Object.getPrototypeOf,Object),Lo=Object.create,Ro=Ce.propertyIsEnumerable,Bo=Fo.splice,ar=Object.getOwnPropertySymbols,Ho=er?er.isBuffer:void 0,Go=Xe(Object.keys,Object),et=le(G,"DataView"),fe=le(G,"Map"),tt=le(G,"Promise"),rt=le(G,"Set"),at=le(G,"WeakMap"),he=le(Object,"create"),Vo=Q(et),Uo=Q(fe),qo=Q(tt),Ko=Q(rt),Wo=Q(at),or=tr?tr.prototype:void 0,nr=or?or.valueOf:void 0;function Z(i){var u=-1,m=i?i.length:0;for(this.clear();++u<m;){var y=i[u];this.set(y[0],y[1])}}function Jo(){this.__data__=he?he(null):{}}function Yo(i){return this.has(i)&&delete this.__data__[i]}function Zo(i){var u=this.__data__;if(he){var m=u[i];return m===a?void 0:m}return U.call(u,i)?u[i]:void 0}function Xo(i){var u=this.__data__;return he?u[i]!==void 0:U.call(u,i)}function Qo(i,u){var m=this.__data__;return m[i]=he&&u===void 0?a:u,this}Z.prototype.clear=Jo,Z.prototype.delete=Yo,Z.prototype.get=Zo,Z.prototype.has=Xo,Z.prototype.set=Qo;function V(i){var u=-1,m=i?i.length:0;for(this.clear();++u<m;){var y=i[u];this.set(y[0],y[1])}}function en(){this.__data__=[]}function tn(i){var u=this.__data__,m=Te(u,i);if(m<0)return!1;var y=u.length-1;return m==y?u.pop():Bo.call(u,m,1),!0}function rn(i){var u=this.__data__,m=Te(u,i);return m<0?void 0:u[m][1]}function an(i){return Te(this.__data__,i)>-1}function on(i,u){var m=this.__data__,y=Te(m,i);return y<0?m.push([i,u]):m[y][1]=u,this}V.prototype.clear=en,V.prototype.delete=tn,V.prototype.get=rn,V.prototype.has=an,V.prototype.set=on;function ie(i){var u=-1,m=i?i.length:0;for(this.clear();++u<m;){var y=i[u];this.set(y[0],y[1])}}function nn(){this.__data__={hash:new Z,map:new(fe||V),string:new Z}}function sn(i){return Pe(this,i).delete(i)}function ln(i){return Pe(this,i).get(i)}function cn(i){return Pe(this,i).has(i)}function dn(i,u){return Pe(this,i).set(i,u),this}ie.prototype.clear=nn,ie.prototype.delete=sn,ie.prototype.get=ln,ie.prototype.has=cn,ie.prototype.set=dn;function se(i){this.__data__=new V(i)}function pn(){this.__data__=new V}function un(i){return this.__data__.delete(i)}function mn(i){return this.__data__.get(i)}function fn(i){return this.__data__.has(i)}function hn(i,u){var m=this.__data__;if(m instanceof V){var y=m.__data__;if(!fe||y.length<r-1)return y.push([i,u]),this;m=this.__data__=new ie(y)}return m.set(i,u),this}se.prototype.clear=pn,se.prototype.delete=un,se.prototype.get=mn,se.prototype.has=fn,se.prototype.set=hn;function gn(i,u){var m=it(i)||Rn(i)?zo(i.length,String):[],y=m.length,T=!!y;for(var M in i)(u||U.call(i,M))&&!(T&&(M=="length"||Nn(M,y)))&&m.push(M);return m}function ir(i,u,m){var y=i[u];(!(U.call(i,u)&&dr(y,m))||m===void 0&&!(u in i))&&(i[u]=m)}function Te(i,u){for(var m=i.length;m--;)if(dr(i[m][0],u))return m;return-1}function vn(i,u){return i&&sr(u,st(u),i)}function ot(i,u,m,y,T,M,O){var I;if(y&&(I=M?y(i,T,M,O):y(i)),I!==void 0)return I;if(!Ae(i))return i;var mr=it(i);if(mr){if(I=zn(i),!u)return Pn(i,I)}else{var ce=X(i),fr=ce==d||ce==S;if(Hn(i))return xn(i,u);if(ce==_||ce==o||fr&&!M){if(Jt(i))return M?i:{};if(I=En(fr?{}:i),!u)return An(i,vn(I,i))}else{if(!w[ce])return M?i:{};I=Fn(i,ce,ot,u)}}O||(O=new se);var hr=O.get(i);if(hr)return hr;if(O.set(i,I),!mr)var gr=m?Mn(i):st(i);return Ao(gr||i,function(lt,Me){gr&&(Me=lt,lt=i[Me]),ir(I,Me,ot(lt,u,m,y,Me,i,O))}),I}function _n(i){return Ae(i)?Lo(i):{}}function bn(i,u,m){var y=u(i);return it(i)?y:Mo(y,m(i))}function yn(i){return De.call(i)}function Sn(i){if(!Ae(i)||On(i))return!1;var u=ur(i)||Jt(i)?Io:$o;return u.test(Q(i))}function kn(i){if(!cr(i))return Go(i);var u=[];for(var m in Object(i))U.call(i,m)&&m!="constructor"&&u.push(m);return u}function xn(i,u){if(u)return i.slice();var m=new i.constructor(i.length);return i.copy(m),m}function nt(i){var u=new i.constructor(i.byteLength);return new rr(u).set(new rr(i)),u}function $n(i,u){var m=u?nt(i.buffer):i.buffer;return new i.constructor(m,i.byteOffset,i.byteLength)}function jn(i,u,m){var y=u?m(Yt(i),!0):Yt(i);return Wt(y,To,new i.constructor)}function wn(i){var u=new i.constructor(i.source,xo.exec(i));return u.lastIndex=i.lastIndex,u}function Cn(i,u,m){var y=u?m(Zt(i),!0):Zt(i);return Wt(y,Po,new i.constructor)}function Dn(i){return nr?Object(nr.call(i)):{}}function Tn(i,u){var m=u?nt(i.buffer):i.buffer;return new i.constructor(m,i.byteOffset,i.length)}function Pn(i,u){var m=-1,y=i.length;for(u||(u=Array(y));++m<y;)u[m]=i[m];return u}function sr(i,u,m,y){m||(m={});for(var T=-1,M=u.length;++T<M;){var O=u[T],I=y?y(m[O],i[O],O,m,i):void 0;ir(m,O,I===void 0?i[O]:I)}return m}function An(i,u){return sr(i,lr(i),u)}function Mn(i){return bn(i,st,lr)}function Pe(i,u){var m=i.__data__;return In(u)?m[typeof u=="string"?"string":"hash"]:m.map}function le(i,u){var m=Eo(i,u);return Sn(m)?m:void 0}var lr=ar?Xe(ar,Object):Un,X=yn;(et&&X(new et(new ArrayBuffer(1)))!=we||fe&&X(new fe)!=v||tt&&X(tt.resolve())!=x||rt&&X(new rt)!=j||at&&X(new at)!=N)&&(X=function(i){var u=De.call(i),m=u==_?i.constructor:void 0,y=m?Q(m):void 0;if(y)switch(y){case Vo:return we;case Uo:return v;case qo:return x;case Ko:return j;case Wo:return N}return u});function zn(i){var u=i.length,m=i.constructor(u);return u&&typeof i[0]=="string"&&U.call(i,"index")&&(m.index=i.index,m.input=i.input),m}function En(i){return typeof i.constructor=="function"&&!cr(i)?_n(Oo(i)):{}}function Fn(i,u,m,y){var T=i.constructor;switch(u){case Y:return nt(i);case c:case p:return new T(+i);case we:return $n(i,y);case It:case Ot:case Lt:case Rt:case Bt:case Ht:case Gt:case Vt:case Ut:return Tn(i,y);case v:return jn(i,y,m);case b:case F:return new T(i);case $:return wn(i);case j:return Cn(i,y,m);case J:return Dn(i)}}function Nn(i,u){return u=u==null?n:u,!!u&&(typeof i=="number"||jo.test(i))&&i>-1&&i%1==0&&i<u}function In(i){var u=typeof i;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?i!=="__proto__":i===null}function On(i){return!!Xt&&Xt in i}function cr(i){var u=i&&i.constructor,m=typeof u=="function"&&u.prototype||Ce;return i===m}function Q(i){if(i!=null){try{return Qt.call(i)}catch(u){}try{return i+""}catch(u){}}return""}function Ln(i){return ot(i,!0,!0)}function dr(i,u){return i===u||i!==i&&u!==u}function Rn(i){return Bn(i)&&U.call(i,"callee")&&(!Ro.call(i,"callee")||De.call(i)==o)}var it=Array.isArray;function pr(i){return i!=null&&Gn(i.length)&&!ur(i)}function Bn(i){return Vn(i)&&pr(i)}var Hn=Ho||qn;function ur(i){var u=Ae(i)?De.call(i):"";return u==d||u==S}function Gn(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=n}function Ae(i){var u=typeof i;return!!i&&(u=="object"||u=="function")}function Vn(i){return!!i&&typeof i=="object"}function st(i){return pr(i)?gn(i):kn(i)}function Un(){return[]}function qn(){return!1}e.exports=Ln});function Ba(e){e.on("bookerInit",t=>({intialStoreContent:Tt(t)})),e.on("resetStore",({intialStoreContent:t})=>Tt(t))}function Ha(e){e.on("@init",()=>({showProcessLength:!0})),e.on("showProcessLength/set",(t,r)=>({showProcessLength:r}))}function Ga(e){e.on("@init",()=>({confirmationType:"email"})),e.on("confirmationType/set",(t,r)=>({confirmationType:r}))}function Va(e){e.on("@init",()=>({reminderType:"email"})),e.on("reminderType/set",(t,r)=>({reminderType:r}))}function Ua(e){e.on("@init",()=>({initialNextFreeSlotsLoading:!0})),e.on("initialNextFreeSlotsLoading/set",(t,r)=>({initialNextFreeSlotsLoading:r})),e.on("nextFreeSlotLoading/set",(t,r)=>{if(!r)return{initialNextFreeSlotsLoading:!1}}),e.on("currentStep/next",t=>{if(t.currentStep=="appointment")return{initialNextFreeSlotsLoading:!0}})}var Ci=$e("closeConfirmModalState"),Di=$e("globalModalState",{visible:!0}),Ti=$e("privacyPolicyModalState"),Pi=$e("detailedDescriptionModalState"),qa=()=>fa([ka,ha,ga,va,ya,ba,_a,Ti,Sa,xa,ja,wa,Fa,Ci,Di,Ca,Ma,za,Ea,Ta,Pa,Aa,Na,Pi,Da,Ia,Oa,La,Ra,Ba,Ha,Ga,Va,Ua]);var Pt=e=>{let{currentStep:t,availableSteps:r,dispatch:a,booking:n}=g("currentStep","availableSteps","booking");return l`
    <button type="button" onClick=${()=>a("currentStep/previous")}
      class="${t==r[0]||n?"invisible":""} btn btn-outline-light">
      ←
    </button>
  `};var B=()=>l`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `;var H=e=>{let t=g(e.modalStateStore),r=t[e.modalStateStore],[a,n]=re(!1),[o,s]=re(!1),[c,p]=re(!1);r&&!a&&(s(!0),setTimeout(()=>{p(!0),n(!0)},0)),!r&&a&&(p(!1),setTimeout(()=>{s(!1),n(!1)},100));let h=()=>t.dispatch(`${e.modalStateStore}/set`,!1);return l`
    <div class="modal text-dark fade ${c?"show":""}" tabindex="-1" style="${o?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?l`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${f(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?l`<p>${f(e.content)}</p>`:l`<${B}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?l`
            <div class="modal-footer">
              ${e.cancelButtonLabel?l`
                <button type="button" class="btn btn-secondary" onClick=${h}>
                  ${f(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?l`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${f(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var At=e=>{let t=g("appointment","api"),{dispatch:r}=t;return l`
    <button type="button" class="btn btn-outline-light" onClick=${()=>r("closeConfirmModalState/set",!0)}>X</button>
    <${H} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${async()=>{let{appointment:o}=t;o.id&&await C.put(t,o.id,{cancelled_at:new Date}),r("close")}}/>
  `};var Ka=({customer:e,customerAddress:t})=>l`
      <div>
        <div class="mb-1">
          ${f("Your information")}:
        </div>
        <div class="fw-bold">
          ${e.first_name&&e.last_name?l`${f("Name")}: ${ae.format(e)}`:""}
        </div>
        <div>
          ${e.birth?l`${f("Date of birth")}: ${P.formatDate(e.birth)}`:""}
        </div>
        <div>
          ${e.gender?l`${f("Gender")}: ${e.gender=="m"?"F\xE9rfi":"N\u0151"}`:""}
        </div>
        <div>
            ${e.ssn?l`${f("SSN")}: ${e.ssn}`:""}
        </div>
        <div>
          ${t?l`${f("Address")}: ${t}`:""}
        </div>
        <div>
          ${e.mobile?l`${f("Phone number")}: ${e.mobile}`:""}
        </div>
        <div>
          ${e.email?l`Email: ${e.email}`:""}
        </div>
      </div>
  `;var Fi=async e=>{try{var t=await Ai(e)}catch(r){if(r instanceof be){Mi(e,r);return}throw r}await zi(e,t),await Ei(e,t),e.dispatch("moduleState/set","success")},Ai=async e=>{let t=Object.assign({},e.appointment.customer,{medical_records_allowed:e.medicalConsent!="disabled"?!0:null,country:e.country,mobile:e.appointment.customer.mobile?jt(e.store.chain.language,e.appointment.customer.mobile):null});return"birth"in t&&(t.birth=Ni(t.birth)),Object.keys(t).forEach(r=>{typeof t[r]=="string"&&(t[r]=t[r].trim())}),await C.post(e,"customers",t)},Ni=e=>{if(!e||!(e instanceof Date))return null;let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${a}T00:00:00+00:00`},Mi=async(e,t)=>{let{customerForm:r}=e;var a=[];for(let n=0;n<t.getValidations().length;n++){let{propertyPath:o,message:s}=t.getValidations()[n];if(o==""){a.push(s);continue}r[o].errors||(r[o].errors=[]),r[o].errors.push(s)}e.dispatch("customerForm/set",{customerForm:r,customerFormGlobalErrors:a}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},zi=async(e,t)=>{await C.post(e,"customer_consents",{customer:t["@id"],approved_at:new Date,medical_records_allowed:e.medicalConsent!="disabled",source:"api"})},Ei=async(e,t)=>{let{appointment:r,language:a,translationOverrides:n,constantAppointmentCommentText:o,confirmationType:s,reminderType:c}=e,p=o||"";r.comment&&(p=(p?p+`

`:"")+r.comment),await C.put(e,r.id,Object.assign({},r,{customer:t["@id"],eye_examination_process:r.eye_examination_process["@id"],calendar:r.calendar["@id"],comment:p||void 0,title:f("%customer%'s examination",{customer:ae.format(t,a)},{language:a,translationOverrides:n}),status:"booked",should_send_confirmation_email:s=="email"||s=="both",should_send_confirmation_sms:s=="sms"||s=="both",should_send_reminder_email:c=="email"||c=="both",should_send_reminder_sms:c=="sms"||c=="both",source:"online"}))},Wa=e=>{var t=g("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store","translationOverrides","constantAppointmentCommentText","medicalConsent","confirmationType","reminderType");let{booking:r,moduleState:a,dispatch:n}=t;return l`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{n("booking/set",!0);try{await Fi(t)}catch(s){throw n("moduleState/set","error"),s}}} disabled=${a!="idle"}
        class="btn btn-primary btn-lg">
        ${r&&a=="idle"?l`<${B}/>`:f("Confirm appointment")}
      </button>
    </div>
  `};var Mt={HUF:0},Ii=(e,t)=>{var r=e.price_list.currency,a={style:"currency",currency:r};return Mt[r]!=null&&(a.maximumFractionDigits=Mt[r],a.minimumFractionDigits=Mt[r]),new Intl.NumberFormat(t,a)},qe=({process:e})=>{if(!e)return l``;let{store:t,language:r,showPrice:a}=g("store","language","showPrice");if(!a)return l``;let n=e.process_services;var o=null,s=null,c=t.price_list.id;n.forEach(h=>{h.service.packagings.forEach(d=>{d.currentPrices.forEach(S=>{S.price_list.id==c&&((o==null||o>S.value)&&(o=S.value),(s==null||s<S.value)&&(s=S.value))})})});var p=Ii(t,r);return o==null||s==null?l``:o==s?l`${p.format(o)}`:l`${p.format(o)} - ${p.format(s)}`};var Ke=e=>{let{appointment:t,language:r,currentStep:a,store:n,selectedCalendar:o,priceComment:s,showPrice:c,showExaminerName:p,locationName:h,locationAddress:d,showLocation:S,dispatch:v}=g("appointment","language","currentStep","store","selectedCalendar","priceComment","showPrice","showExaminerName","locationName","locationAddress","showLocation");if(!n)return;var b=t.calendar||o,_={dateTimeStart:t.start?P.formatDateTime(t.start):null,dateTimeEnd:t.end?P.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:p&&b?b.user.name:null,customer:t.customer,customerAddress:ue.formatAddress(t.customer),showLocation:S,locationName:h!==null?h:n.name,locationAddress:d!==null?d:ue.formatAddress(n),appointmentComment:t.comment};let x=()=>{v("currentStep/set","appointment")};return l`
    <ul class="list-group${a=="summary"?"":" text-end"}">
      ${a!="summary"?l`<li class="list-group-item fw-bold">${f("Appointment summary")}</li>`:null}
      ${_.processName?l`
        <li class="list-group-item">
          <div>${f("Subject")}:</div>
          <div class="fw-bold">${_.processName}</div>
          <div>
            ${_.examinerName?l`${f("examiner: %examiner%",{examiner:_.examinerName})}`:null}
          </div>
        </li>
      `:""}
      ${_.dateTimeStart&&_.dateTimeEnd&&_.processLength?l`
        <li class="list-group-item">
          <div>${f("Start Time")}:</div>
          <div>
            <${Re}//>
          </div>
          <div class="text-muted">
            ${f("It takes up to %length% minutes",{length:_.processLength})}
          </div>
          <div class="fs-6">
            <a href="#" onClick="${x}">${f("change date")}</a>
          </div>
        </li>
      `:""}
      ${a=="summary"?l`
        <li class="list-group-item">
          <${Ka} customer=${_.customer} customerAddress=${_.customerAddress}/>
        </li>
      `:""}
      ${a=="summary"&&_.appointmentComment?l`
        <li class="list-group-item">
          ${f("Comment")}: ${_.appointmentComment}
        </li>
      `:""}
      ${_.showLocation?l`
            <li class="list-group-item">
              <div>${f("Location")}:</div>
              <div class="fw-bold">${_.locationName}</div>
              <div>${_.locationAddress}</div>
            </li>
        `:""}
      <li class="list-group-item">
        ${c?l`
          <div>${f("Price")}:</div>
          <div class="fw-bold"><${qe} process=${_.process}/></div>
        `:""}
        <div>${s||""}</div>
      </li>
      ${a=="summary"?l`
          <li class="list-group-item">
            <${Wa}/>
          </li>
        `:""}
    </ul>
  `};var ne=e=>{let{currentStep:t,availableSteps:r,style:a,parentWidth:n}=g("currentStep","availableSteps","style","parentWidth"),o=r.indexOf(e.step),s=r.indexOf(t);if(r.indexOf(e.step)==-1)return l``;var c=t!="process"&&t!="summary"&&t!="storeSelection";return(a==="embedded"||a==="embedded-safe")&&n==="small"&&(c=!1),l`
    <div class="carousel-item
      ${s-1==o?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${s+1==o?"carousel-item-next":""}
    ">
      <div class="container-sm p-1 ${xe(a,n)} ${a}-container">
        <div class="row">
          <div class="${c?"col col-sm-8":"col"}">
            <div class="p-1">
              <${e.wrappedComponent}/>
            </div>
          </div>
          ${c?l`
            <div class="d-none d-sm-block col-4 summarycard">
              <div class="p-1">
                <${Ke} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `};var Ja=e=>{let{appointment:t,dispatch:r,currentStep:a,showProcessLength:n}=g("appointment","currentStep","showProcessLength"),o=()=>{a==="process"&&(r("appointment/set",{eye_examination_process:e.item}),r("currentStep/eyeExaminationProcessSelected"),r("currentStep/next"))},s=c=>{c.stopPropagation(),r("detailedDescriptionModalState/set",e.item.detailed_description)};return l`
    <li class="row list-group-item ${t.eye_examination_process==e.item?"selected":""}" onClick=${o}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.item.name}</h4>
          <p class="${e.item.description&&e.item.description.length>0?"":"d-none"}">
            ${e.item.description}
            ${e.item.detailed_description&&e.item.detailed_description.length>0?l` <a href="#" onClick=${s}>${f("More...")}</a>`:""}
          </p>
          ${n?l`<span class="badge bg-primary me-1">${e.item.length} ${f("@abbrMinute")}</span>`:""}
          <span class="badge bg-primary"><${qe} process=${e.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var We=({message:e})=>l`
    <div class="alert alert-danger mt-3" role="alert">
      ${e}
    </div>
  `;var Ya=e=>{let{eyeExaminationProcesses:t,detailedDescriptionModalState:r,store:a,calendars:n,dispatch:o}=g("eyeExaminationProcesses","store","calendars"),s=()=>o("detailedDescriptionModalState/set",!1);return t.length==0||!a?l`
      <ul class="list-group">
        <li class="list-group-item"><${B}/></li>
      </ul>
    `:t.length?l`
      <ul class="list-group">
        ${t.map(c=>l`<${Ja} item=${c} />`)}
      </ul>
      <${H} modalStateStore="detailedDescriptionModalState"
        title="Detailed description"
        content=${r?l([r]):!1}
        approveButtonLabel="Close"
        onApprove=${s}
      />
    `:l`
    <ul class="list-group">
      <${We} message="
        ${a.phone?f("There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.",{mail:a.email,tel:a.phone}):f("Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.",{mail:a.email})}
        ${n&&n.length?f("There is no office hourse configured for this specialist."):f("There is no calendar created for this store.")}
      "/>
    </ul>
  `};var zt=e=>{let{selectedCalendar:t,dispatch:r,currentStep:a}=g("selectedCalendar","currentStep"),n=()=>{a==="calendar"&&(r("selectedCalendar/set",e.item["@id"]?e.item:null),r("currentStep/next"))};return l`
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
  `};var Za=()=>l`
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
    </li>`;var Xa=e=>{let{appointment:t,showFirstAvailableUserItem:r,dispatch:a}=g("appointment","showFirstAvailableUserItem"),n=Se(g("calendars","appointment","calendarRoleCheckMode")),o={user:{name:f("First free"),description:f("For finding the nearest free time slot.")}},s=()=>a("currentStep/previous");return l`
    <ul class="list-group">
      ${t.eye_examination_process&&n?n.length?l`
              ${r?l`<${zt} item=${o} />`:""}
              ${n.map(c=>l`<${zt} item=${c} />`)}
            `:l`
              <li class="list-group-item text-center">
                ${f("None of our colleagues is available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${s}">
                  ${f("Select another process")}
                </button>
              </li>
          `:l`<${Za}/>`}
    </ul>
  `};var Oi=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],Qa=({date:e})=>{let{selectedDate:t,dispatch:r}=g("selectedDate"),a=()=>r("selectedDate/set",e);return l`
    <div class="col">
      <div class="card ${R(e,t)?"bg-primary text-light":""}" onClick="${a}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${R(e,t)?"":"text-muted"}">
            ${f(Oi[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `};var eo=({dateGroup:e,visibleDateGroups:t})=>{let{previousDateGroup:r,currentDateGroup:a,nextDateGroup:n}=t;return l`
    <div class="carousel-item
      ${r==e?"carousel-item-prev":""}
      ${a==e?"active":""}
      ${n==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(o=>l`<${Qa} date=${o}/>`)}
      </div>
    </div>
  `};var Li=["January","February","March","April","May","June","July","August","September","October","November","December"],to=e=>{let{selectedDate:t,firstEligibleDate:r,dispatch:a}=g("selectedDate","firstEligibleDate","dispatch"),n=kt(r),o=()=>a("selectedDate/set",c[4]),s=()=>a("selectedDate/set",h[0]);var c,p,h;for(let S=0;S<n.length&&(c=n[S-1],p=n[S],h=n[S+1],!p.hasDate(t));S++);let d={previousDateGroup:c,currentDateGroup:p,nextDateGroup:h};return l`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${o}
        disabled=${!c}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${f(Li[p[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${n.map(S=>l`<${eo} dateGroup=${S} visibleDateGroups=${d}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${s}
        disabled=${!h}>
        ${">"}
      </button>
    </div>
  `};var ro=({day:e})=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:n,dispatch:o,firstEligibleDate:s}=g("selectedCalendar","appointment","nextFreeSlots","selectedDate","firstEligibleDate"),c=a[D(n,t,e)],p=h=>{o("selectedDate/set",h)};return e<new Date(s).setHours(0,0,0,0)||c&&c.status=="empty"?l`<td class='table-active disabled'>${e.getDate()}</td>`:c?l`
    <td class=${R(e,r)?"bg-primary text-light":"active-cell"} 
      onClick="${()=>p(e)}"
    >
      ${e.getDate()}
    </td>
  `:l`<td class="placeholder">${e.getDate()}</td>`};var Ri=["January","February","March","April","May","June","July","August","September","October","November","December"],Bi=["@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday","@abbrSunday"],ao=()=>{let{selectedCalendar:e,selectedDate:t,nextFreeSlots:r,appointment:a,dispatch:n}=g("selectedCalendar","appointment","nextFreeSlots","selectedDate"),o=t.getFullYear(),s=t.getMonth(),c=new Date(o,s+1,0).getDate(),p=new Date<new Date(o,s,0),h=new Date(o,s,1),d=[],S=[];var v=!0;for(let x=t.getDate();x<=c;x++){let $=r[D(a,e,new Date(o,s,x))];if($==null||$.status=="incomplete"){v=!1;break}}for(let x=0;x<(h.getDay()||7)-1;x++)d.push(null);for(let x=1;x<=c;x++)d.push(new Date(o,s,x));for(let x=0;x<d.length;x+=7)S.push(d.slice(x,x+7));let b=()=>{let x=new Date(o,s+1,0).getDate();for(let $=1;$<=x;$++){let j=r[D(a,e,new Date(o,s+1,$))];if(j&&(j.status=="complete"||j.status=="incomplete")){n("selectedDate/set",new Date(o,s+1,$));return}}n("selectedDate/set",new Date(o,s+1,1)),n("initialNextFreeSlotsLoading/set",!0)};return l`
    <div class="container text-center calendar px-0">
      <div class="row">
        <div class="col">
          <table class="table table caption-top placeholder-glow">
            <caption class="text-center display-6">
              <button
                class="btn btn-outline-secondary month-previus ${p&&v?null:"disabled"}" 
                onClick="${()=>{let x=new Date(o,s,0).getDate();for(let $=1;$<=x;$++){let j=r[D(a,e,new Date(o,s-1,$))];if(j&&j.status=="complete"){n("selectedDate/set",new Date(o,s-1,$));return}}n("selectedDate/set",new Date(o,s-1,1))}}"
              >
                ${"<"}
              </button>
              ${o+" "+f(Ri[s])}
              <button class="btn btn-outline-secondary month-next ${v?null:"disabled"}" onClick="${b}">
                ${">"}
              </button>
            </caption>
            <thead>
              <tr>
                ${Bi.map(x=>l`<th scope="col">${f(x)}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${S.map(x=>l`
                <tr>
                  ${x.map($=>$?l`
                      <${ro} day=${$}/>
                    `:l`<td></td>`)}
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `};var Je=e=>{let{selectedCalendar:t,selectedDate:r,nextFreeSlots:a,appointment:n,dispatch:o,nextFreeSlotLoading:s}=g("selectedCalendar","appointment","nextFreeSlots","selectedDate","nextFreeSlotLoading");var c=new Date(r),p,h=!1;for(c.setDate(c.getDate()+1);a[p=D(n,t,c)];){if(a[p].status!=="empty"){h=!0;break}c.setDate(c.getDate()+1)}let d=()=>o("selectedDate/set",c);return l`
    <li class="list-group-item p-4 text-center">
      <h5>${f("There are no free appointment times for this day")}</h5>
      ${h?l`
          <div class="text-muted">
            ${f("The next free slot is available on %date%",{date:P.formatDate(c)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${d}">${f("Go to date")}</button>
        `:s?l`
              <div class="text-muted">
                ${f("Search in progress...")}
              </div>
            `:l`
              <button class="btn m-2 btn-primary" onClick="${d}">
                ${f("Click here to search for the next free appointment")}
              </button>
            `}
    </li>
  `};var oo=e=>{let{dispatch:t,appointment:r}=g("appointment"),a=()=>{t("appointment/selectSlot",e.slot)};return l`
    <li class="list-group-item${ke(new Date(r.start),new Date(e.slot.start))?" selected":""}" onClick=${a}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${P.formatTime(e.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var no=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=g("selectedCalendar","selectedDate","nextFreeSlots","appointment");var n=D(r,t,e);return l`
    <ul class="list-group mt-3">
      ${a[n]?a[n].status=="empty"?l`<${Je}/>`:a[n].slots.map(o=>l`<${oo} slot=${o}/>`):l`<li class="list-group-item"><${B}/></li>`}
    </ul>
  `};var io=({slot:e})=>{let{dispatch:t,appointment:r}=g("appointment"),a=()=>{t("appointment/selectSlot",e)},n=ke(new Date(r.start),new Date(e.start));return l`
    <button class="btn btn-outline-secondary m-1 ${n?" selected":""}" onClick=${a}>
      ${P.formatTime(e.start)}
    </button>
  `};var Ye=({title:e,slots:t})=>t.length?l`
      <div class="pt-3">
        <h4>${f(e)}:</h4>
        ${t.map(r=>l`<${io} slot=${r}/>`)}
      </div>
      `:null;var so=()=>{let{selectedDate:e,selectedCalendar:t,appointment:r,nextFreeSlots:a}=g("selectedCalendar","selectedDate","nextFreeSlots","appointment"),n=D(r,t,e),o=[],s=[],c=[],p=a[n]?a[n].slots:[];for(let h of p||[]){let d=new Date(h.start);d.getHours()<12?o.push(h):d.getHours()<18?s.push(h):c.push(h)}return l`
    <div class="grid">
      ${a[n]?a[n].status=="empty"?l`<${Je}/>`:l`
            <${Ye} title=${"Morning"} slots=${o}/>
            <${Ye} title=${"Afternoon"} slots=${s}/>
            <${Ye} title=${"Evening"} slots=${c}/>
          `:l`<li class="list-group-item"><${B}/></li>`}
    </div>
  `};var lo=()=>l`
    <ul class="list-inline text-center">
      <li class="list-inline-item">
        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
      </li>
      <li class="list-inline-item">
        ${f("Booking the appointment")}
      </li>
    </ul>
  `;var co=()=>{let{calendarRange:e,timeSlotMode:t,slotSelection:r}=g("calendarRange","timeSlotMode","slotSelection");return l`
    ${r.inProgress?l`<${lo}/>`:l`
      <${e=="fiveDays"?to:ao}/>
      ${r.errorMessage!=null?l`<${We} message=${r.errorMessage}/>`:null}
      <${t=="singleColumn"?no:so}/>
    `}
  `};var po=e=>{let{appointment:t,dispatch:r}=g("appointment"),a=n=>{let{value:o}=n.target;var{customer:s}=t;s[e.property]=o,r("appointment/set",{customer:s})};return l`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${a}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `};var A=e=>{let{customerForm:t}=g("customerForm");if(!!t[e.property]){var r=t[e.property];return l`
    <div class="${e.class||"col-sm"} needs-validation p-1 mb-2 w-100">
      ${e.label?l`
          <label class="form-label text-truncate">
            ${r.required?l`<span class="text-danger">*</span> `:""}
            ${f(e.label)}
          </label>
        `:null}
      <${e.inputClass||po} property=${e.property}
        invalid=${r.errors&&r.errors.length?"was-validated":""}/>
      ${r.errors&&r.errors.length?r.errors.map(a=>l`<div class="invalid-feedback">${f(a)}</div>`):""}
    </div>
  `}};var uo=e=>{let{appointment:t,showAppointmentComment:r,appointmentCommentRequired:a,commentError:n,dispatch:o}=g("appointment","showAppointmentComment","appointmentCommentRequired","commentError");if(!r)return l``;let s=c=>{let{value:p}=c.target;t.comment=p,o("appointment/set",t),o("customerForm/set",{commentError:null})};return l`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">
            ${a?l`<span class="text-danger">*</span> `:""}
            ${f("Comment")}
          </label>
          <textarea
            class="${n?"is-invalid":""} form-control" value=${t.comment||""} onInput=${s}
            invalid=${n?"was-validated":""}
          ></textarea>
          ${n?l`<div class="invalid-feedback">${f(n)}</div>`:""}
        </div>
      </div>
    `};var me=e=>{let t=r=>{let{value:a}=r.target;e.onInput(a)};return l`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?l`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:r,label:a})=>l`<option value="${r}">${a}</option>`)}
    </select>
  `};var Hi=e=>(e=e||new Date,e=new Date(e.getFullYear(),e.getMonth()+1,0),e.getDate()),mo=e=>{let{appointment:t,dispatch:r}=g("appointment"),a=(p,h)=>{var{customer:d}=t;h==""?d[e.property]=null:(d[e.property]=d[e.property]||new Date("2000-01-01"),d[e.property][`set${p}`](h)),r("appointment/set",{customer:d})},n=t.customer[e.property];var o=[];for(let p=1900;p<=new Date().getFullYear();p++)o.push({value:p,label:p});var s=[];for(let p=1;p<=12;p++)s.push({value:p-1,label:p<10?`0${p}`:p});var c=[];for(let p=1;p<=Hi(n);p++)c.push({value:p,label:p<10?`0${p}`:p});return l`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${me} invalid=${e.invalid} onInput=${p=>a("FullYear",p)}
        value=${n?n.getFullYear():""} emptySelection="----" options=${o}
         disabled=${!!t.customer["@id"]}/>
      <${me} invalid=${e.invalid} onInput=${p=>a("Month",p)}
        value=${n?n.getMonth():""} emptySelection="--" options=${s}
         disabled=${!!t.customer["@id"]}/>
      <${me} invalid=${e.invalid} onInput=${p=>a("Date",p)}
        value=${n?n.getDate():""} emptySelection="--" options=${c}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `};var fo=e=>{let{appointment:t,dispatch:r}=g("appointment");return l`
    <${me} onInput=${n=>{var{customer:o}=t;o[e.property]=n,r("appointment/set",{customer:o})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${f("Not specified")}"
        options=${[{value:"m",label:f("Male")},{value:"f",label:f("Female")}]}/>
  `};var ho=e=>{let{appointment:t,privacyPolicy:r,dispatch:a}=g("appointment","privacyPolicy"),n=()=>{var{customer:s}=t;s[e.property]=!s[e.property]||null,a("appointment/set",{customer:s})},o=()=>a("privacyPolicyModalState/set",!1);return l`
    <${H} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${r?l([r.content]):""}"
      approveButtonLabel="Close"
      onApprove=${o}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${n}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${f("I have accepted the privacy policy")}
      </label>
    </div>
  `};var go=e=>{let{appointment:t,dispatch:r}=g("appointment"),a=()=>{var{customer:n}=t;n[e.property]=!n[e.property]||null,r("appointment/set",{customer:n})};return l`
    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${a}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${f("I agree to the use of my medical records according to privacy policy")}
      </label>
    </div>
  `};var vo=e=>{let{customerForm:t,customerFormGlobalErrors:r,medicalConsent:a,dispatch:n}=g("customerForm","customerFormGlobalErrors","language","medicalConsent"),o=()=>{n("customerForm/validateAndNext")};return l`
    <div class="card p-2">
      ${r&&r.length?l`
          <div class="row mx-2 text-danger">
            ${r.map(s=>l`<p>${s}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${ae.shouldSwitchNameOrder()?l`
            <${A} property="last_name" label="Last name"/>
            <${A} property="first_name" label="First name"/>
          `:l`
            <${A} property="first_name" label="First name"/>
            <${A} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${A} class="col-lg-5" property="birth" label="Birth" inputClass=${mo}/>
        <${A} property="gender" label="Gender" inputClass=${fo}/>
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
      <${uo}/>
      <div class="row mx-2">
        <${A} property="acceptPrivacyPolicy" inputClass=${ho}/>
      </div>
      ${a=="explicit"?l`
          <div class="row mx-2">
            <${A} property="acceptMedicalRecordsUse" inputClass=${go}/>
          </div>
        `:""}
      <button class="mx-2 btn btn-primary" onClick=${o}>${f("Next")}</button>
    </div>
  `};var _o=({item:e})=>{let{store:t,dispatch:r,currentStep:a}=g("store","currentStep"),n=()=>{a==="storeSelection"&&(r("store/set",e),r("currentStep/next"))},o=ue.formatAddress(e);return l`
    <li class="storeItem row list-group-item ${t==e?"selected":""}" onClick=${n}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.name}</h4>
          ${e.phone?l`<span class="iconHolder">\u{1F57B}</span> ${e.phone}<br/>`:""}
          ${e.email?l`<span class="iconHolder">\u{2709}</span> ${e.email}<br/>`:""}
          ${o?l`<span class="iconHolder">\u{1F588}</span> ${o}`:""}
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `};var bo=()=>l`
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
    </li>`;var yo=e=>{let{stores:t}=g("stores");return t!==null?(t.sort((r,a)=>r.name.localeCompare(a.name)),t.map(r=>l`<${_o} item=${r}/>`)):l`<${bo}/>`};var Et=e=>l`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${ne} step="storeSelection" wrappedComponent=${yo}/>
        <${ne} step="process" wrappedComponent=${Ya}/>
        <${ne} step="calendar" wrappedComponent=${Xa}/>
        <${ne} step="appointment" wrappedComponent=${co}/>
        <${ne} step="customer" wrappedComponent=${vo}/>
        <${ne} step="summary" wrappedComponent=${Ke}/>
      </div>
    </div>
  `;var W=({content:e})=>{let{dispatch:t,store:r}=g("moduleState","appointment","store");return l`
    <${H} modalStateStore="globalModalState"
    headerClasses="bg-danger text-light"
    contentClasses="text-danger"
    approveButtonClasses="btn-danger"
    title="Appointment booking failed"
    content=${e}
    approveButtonLabel="OK"
    onApprove=${()=>t("close")}/>
  `};var Ft=e=>{let{moduleState:t,appointment:r,dispatch:a,store:n,style:o}=g("moduleState","appointment","store","style");if(!t.startsWith("success")&&!t.startsWith("error"))return;var s,c;n!=null&&(s=n.phone,c=n.email);let p=()=>{o=="embedded"||o=="embedded-safe"?a("resetStore"):a("close")},h="There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.",d="Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.";switch(t){case"success":return l`
        <${H} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${f("Your appointment have been recorded.")}
            ${f("The examination will start at %start%, please arrive 5 minutes early.",{start:P.formatTime(r.start)})}
            ${f("If you have any further questions, please contact us through our customer service.")}
          "
          approveButtonLabel="OK"
          onApprove=${p}/>
      `;case"error":return l`
        <${W} content="${f("Due to an unexpected error appointment could not be booked, please restart the process")}"/>
      `;case"error.storeCode":return l`
        <${W} content="${s?f(h,{mail:c,tel:s}):f(d,{mail:c})} ${f("Invalid store code")}"/>
      `;case"error.403":return l`
        <${W} content="${s?f(h,{mail:c,tel:s}):f(d,{mail:c})} ${f("Invalid API key or inactive API user.")}"/>
      `;case"error.noLength":return l`
        <${W} content="${s?f(h,{mail:c,tel:s}):f(d,{mail:c})} ${f("The lenght isn\u2019t configured for the eye examination processes.")}"/>
      `;case"error.noProcessOrLength":return l`
        <${W} content="${s?f(h,{mail:c,tel:s}):f(d,{mail:c})} ${f("There are no eye examination processes configured in the store network or the length of them is not configured.")}"/>
      `;case"error.storeEmail":return l`
        <${W} content="${s?f("There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.",{tel:s}):f("There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.")}"/>
      `;case"error.missingConfiguredProcessId":return l`
        <${W} content="${s?f(h,{mail:c,tel:s}):f(d,{mail:c})} ${f("The eye examination process configured for this appointment booker has been removed.")}"/>
      `;default:throw new Error(`There was an unexpected error: ${t}`)}};var Nt=({colors:e})=>{if(e=e||{},Object.keys(e).length!=0)return l`
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
  `};var So=e=>{let{headerTitle:t,currentStep:r,style:a,parentWidth:n}=g("headerTitle","currentStep","style","parentWidth");switch(r){case"storeSelection":var o=f("Store selection");break;case"process":var o=f("Select eye examination type");break;case"calendar":var o=f("Select a vision expert");break;case"appointment":var o=f("Select your desired appointment time");break;case"customer":var o=f("Enter customer details");break;default:var o=f("Appointment details verification");break}return l`
    <div class="booker-header bg-primary bg-gradient text-light p-2 ${a}-header">
      <div class="container ${xe(a,n)} ${a}-header-container">
        <div class="row">
          <div class="col-8 px-1">
            <h3 class="text-truncate">
              ${t||f("Appointment booking")}
            </h3>
            <h5 class="text-truncate">
              ${o}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${Pt}/>
              ${a==="embedded"||a==="embedded-safe"?"":l`<${At}/>`}
            </div>
          </div>
        </div>
      </div>
    </div>
    `};var Gi=e=>l`
    <${Nt} colors=${e.colors}/>
    <div class="booker-widget fixed-top ${e.style}">
      <${vt.Provider} value=${e.store}>
        <${Ft}/>
        <${So}/>
        <div class="bg-body content ${e.style}-content">
          <${Et}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `,Ze=class{constructor(t){var a,n,o;var r=qa();this.store=r,t.medicalConsent||(t.medicalConsent="explicit"),this.setupCustomerFields(t),this.setupApi(t),this.loadStore(t.storeCode),t.calendarStepShouldBeHidden&&r.dispatch("calendarStepShouldBeHidden/set",t.calendarStepShouldBeHidden),t.calendarRoleCheckMode&&r.dispatch("calendarRoleCheckMode/set",t.calendarRoleCheckMode),t.showFirstAvailableUserItem!==void 0&&r.dispatch("showFirstAvailableUserItem/set",t.showFirstAvailableUserItem),t.showExaminerName!==void 0&&r.dispatch("showExaminerName/set",t.showExaminerName),t.firstEligibleTime&&r.dispatch("firstEligibleTime/set",t.firstEligibleTime),t.language&&r.dispatch("language/set",t.language),t.translationOverrides&&r.dispatch("translationOverrides/set",t.translationOverrides),t.headerTitle&&r.dispatch("headerTitle/set",t.headerTitle),t.country&&r.dispatch("country/set",t.country),t.priceComment&&r.dispatch("priceComment/set",t.priceComment),t.showPrice!==void 0&&r.dispatch("showPrice/set",t.showPrice),t.privacyPolicyLink&&r.dispatch("privacyPolicyLink/set",t.privacyPolicyLink),t.showAppointmentComment&&r.dispatch("showAppointmentComment/set",t.showAppointmentComment),t.appointmentCommentRequired&&r.dispatch("appointmentCommentRequired/set",t.appointmentCommentRequired),t.autoselectNextFreeSlot&&r.dispatch("autoselectNextFreeSlot/set",t.autoselectNextFreeSlot),t.constantAppointmentCommentText&&r.dispatch("constantAppointmentCommentText/set",t.constantAppointmentCommentText),t.locationName!==void 0&&r.dispatch("locationName/set",t.locationName),t.locationAddress!==void 0&&r.dispatch("locationAddress/set",t.locationAddress),t.showLocation!==void 0&&r.dispatch("showLocation/set",t.showLocation),t.confirmationStatus!==void 0&&r.dispatch("appointment/set",{confirmation_status:t.confirmationStatus}),t.showProcessLength!==void 0&&r.dispatch("showProcessLength/set",t.showProcessLength),t.timeSlotMode&&r.dispatch("timeSelectionUi/timeSlotMode/set",t.timeSlotMode),t.calendarRange&&r.dispatch("timeSelectionUi/calendarRange/set",t.calendarRange),t.style&&r.dispatch("style/set",t.style),t.eyeExaminationProcessId&&r.dispatch("eyeExaminationProcessId/set",t.eyeExaminationProcessId),r.dispatch("store/setStoreSelection/set",(a=t.storeSelection)!=null?a:"no"),r.dispatch("medicalConsent/set",t.medicalConsent),r.dispatch("confirmationType/set",(n=t.confirmationType)!=null?n:"email"),r.dispatch("reminderType/set",(o=t.reminderType)!=null?o:"email"),this.createElementAndRender(t)}setupCustomerFields({customerFields:t,requiredCustomerFields:r,medicalConsent:a}){var n={};r=["first_name","last_name","acceptPrivacyPolicy"].concat(a!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(r||["email"]),["first_name","last_name","acceptPrivacyPolicy"].concat(a!="disabled"?["acceptMedicalRecordsUse"]:[]).concat(t||["mobile","email"]).forEach(o=>{n[o]={required:r.indexOf(o)!=-1}}),this.store.dispatch("customerForm/set",{customerForm:n})}setupApi(t){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":t.storeCode},t.apiHeaders||{})),this.store.dispatch("api/setPath",t.apiPath)}async loadStore(t){try{var r=await C.get(this.store,`stores?code=${t}`);if(r[0]==null){this.store.dispatch("moduleState/set","error.storeCode");return}this.store.dispatch("store/set",r[0])}catch(a){a.code==403?this.store.dispatch("moduleState/set","error.403"):this.store.dispatch("moduleState/set","error.storeCode")}}async loadCSSFiles(t,r){for(let a=0;a<t.length;a++)try{let n=await fetch(t[a]);if(!n.ok)throw new Error("Failed to load CSS file");let o=await n.text();o=o.replace(/:root\s*{/,":host {");let s=document.createElement("style");s.textContent=o,r.appendChild(s)}catch(n){console.error("Error loading CSS:",n)}}dispatchParentWidth(t){t.clientWidth<=576?this.store.dispatch("parentWidth/set","small"):t.clientWidth<=768?this.store.dispatch("parentWidth/set","medium"):this.store.dispatch("parentWidth/set","large")}createElementAndRender({parentElement:t,colors:r,cssUrls:a}){if(this.store.get().style=="embedded-safe"){this.dispatchParentWidth(t);let s=t.attachShadow({mode:"open"});var n=document.createElement("div");n.id="embeddedShadowBooker",this.loadCSSFiles(a,s),s.appendChild(n)}else{var n=document.createElement("div");(t||document.body).appendChild(n)}this.store.dispatch("rootElement/set",n),pt(l`<${Gi} store=${this.store} colors=${r} style=${this.store.get().style}/>`,n);let o=function(s){this.dispatchParentWidth(t)}.bind(this);window.addEventListener("resize",o),this.store.on("close",()=>{n.remove(),window.removeEventListener("resize",o),t&&t.remove()})}getStore(){return this.store}},Vi=Ze;window.ClearvisioAppointmentBooker=Ze;export{Vi as default};
