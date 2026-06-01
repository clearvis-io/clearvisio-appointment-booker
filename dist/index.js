var e,t,n,a,r,o,i,s,l,c,u,d,p,m,h,f=Object.create,v=Object.defineProperty,_=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,b=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,k=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),S=(e,t,n)=>(n=null!=e?f(b(e)):{},((e,t,n,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(var r,o=g(t),i=0,s=o.length;i<s;i++)r=o[i],y.call(e,r)||r===n||v(e,r,{get:(e=>t[e]).bind(null,r),enumerable:!(a=_(t,r))||a.enumerable});return e})(!t&&e&&e.__esModule?n:v(n,"default",{value:e,enumerable:!0}),e)),$={},x=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,C=Array.isArray;function j(e,t){for(var n in t)e[n]=t[n];return e}function z(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function P(t,n,a){var r,o,i,s={};for(i in n)"key"==i?r=n[i]:"ref"==i?o=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):a),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===s[i]&&(s[i]=t.defaultProps[i]);return D(t,s,r,o,null)}function D(e,a,r,o,i){var s={type:e,props:a,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==i?++n:i,__i:-1,__u:0};return null==i&&null!=t.vnode&&t.vnode(s),s}function T(e){return e.children}function A(e,t){this.props=e,this.context=t}function M(e,t){if(null==t)return e.__?M(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?M(e):null}function E(e){if(e.__P&&e.__d){var n=e.__v,a=n.__e,r=[],o=[],i=j({},n);i.__v=n.__v+1,t.vnode&&t.vnode(i),q(e.__P,i,n,e.__n,e.__P.namespaceURI,32&n.__u?[a]:null,r,null==a?M(n):a,!!(32&n.__u),o),i.__v=n.__v,i.__.__k[i.__i]=i,V(r,i,o),n.__e=n.__=null,i.__e!=a&&F(i)}}function F(e){if(null!=(e=e.__)&&null!=e.__c)return e.__e=e.__c.base=null,e.__k.some(function(t){if(null!=t&&null!=t.__e)return e.__e=e.__c.base=t.__e}),F(e)}function N(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!O.__r++||r!=t.debounceRendering)&&((r=t.debounceRendering)||o)(O)}function O(){try{for(var e,t=1;a.length;)a.length>t&&a.sort(i),e=a.shift(),t=a.length,E(e)}finally{a.length=O.__r=0}}function I(e,t,n,a,r,o,i,s,l,c,u){var d,p,m,h,f,v,_,g=a&&a.__k||x,b=t.length;for(l=function(e,t,n,a,r){var o,i,s,l,c,u=n.length,d=u,p=0;for(e.__k=new Array(r),o=0;o<r;o++)null!=(i=t[o])&&"boolean"!=typeof i&&"function"!=typeof i?("string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?i=e.__k[o]=D(null,i,null,null,null):C(i)?i=e.__k[o]=D(T,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?i=e.__k[o]=D(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[o]=i,l=o+p,i.__=e,i.__b=e.__b+1,s=null,-1!=(c=i.__i=B(i,n,l,d))&&(d--,(s=n[c])&&(s.__u|=2)),null==s||null==s.__v?(-1==c&&(r>u?p--:r<u&&p++),"function"!=typeof i.type&&(i.__u|=4)):c!=l&&(c==l-1?p--:c==l+1?p++:(c>l?p--:p++,i.__u|=4))):e.__k[o]=null;if(d)for(o=0;o<u;o++)null!=(s=n[o])&&!(2&s.__u)&&(s.__e==a&&(a=M(s)),Z(s,s));return a}(n,t,g,l,b),d=0;d<b;d++)null!=(m=n.__k[d])&&(p=-1!=m.__i&&g[m.__i]||$,m.__i=d,v=q(e,m,p,r,o,i,s,l,c,u),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&Y(p.ref,null,m),u.push(m.ref,m.__c||h,m)),null==f&&null!=h&&(f=h),(_=!!(4&m.__u))||p.__k===m.__k?(l=L(m,l,e,_),_&&p.__e&&(p.__e=null)):"function"==typeof m.type&&void 0!==v?l=v:h&&(l=h.nextSibling),m.__u&=-7);return n.__e=f,l}function L(e,t,n,a){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=L(r[o],t,n,a));return t}e.__e!=t&&(a&&(t&&e.type&&!t.parentNode&&(t=M(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function R(e,t){return t=t||[],null==e||"boolean"==typeof e||(C(e)?e.some(function(e){R(e,t)}):t.push(e)),t}function B(e,t,n,a){var r,o,i,s=e.key,l=e.type,c=t[n],u=null!=c&&!(2&c.__u);if(null===c&&null==s||u&&s==c.key&&l==c.type)return n;if(a>(u?1:0))for(r=n-1,o=n+1;r>=0||o<t.length;)if(null!=(c=t[i=r>=0?r--:o++])&&!(2&c.__u)&&s==c.key&&l==c.type)return i;return-1}function H(e,t,n){"-"==t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||w.test(t)?n:n+"px"}function U(e,t,n,a,r){var o,i;e:if("style"==t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof a&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||H(e.style,t,"");if(n)for(t in n)a&&n[t]==a[t]||H(e.style,t,n[t])}else if("o"==t[0]&&"n"==t[1])o=t!=(t=t.replace(u,"$1")),i=t.toLowerCase(),t=i in e||"onFocusOut"==t||"onFocusIn"==t?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?a?n[c]=a[c]:(n[c]=d,e.addEventListener(t,o?m:p,o)):e.removeEventListener(t,o?m:p,o);else{if("http://www.w3.org/2000/svg"==r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n))}}function G(e){return function(n){if(this.l){var a=this.l[n.type+e];if(null==n[l])n[l]=d++;else if(n[l]<a[c])return;return a(t.event?t.event(n):n)}}}function q(e,n,a,r,o,i,s,l,c,u){var d,p,m,h,f,v,_,g,b,y,k,S,$,w,P,D=n.type;if(void 0!==n.constructor)return null;128&a.__u&&(c=!!(32&a.__u),i=[l=n.__e=a.__e]),(d=t.__b)&&d(n);e:if("function"==typeof D)try{if(g=n.props,b=D.prototype&&D.prototype.render,y=(d=D.contextType)&&r[d.__c],k=d?y?y.props.value:d.__:r,a.__c?_=(p=n.__c=a.__c).__=p.__E:(b?n.__c=p=new D(g,k):(n.__c=p=new A(g,k),p.constructor=D,p.render=X),y&&y.sub(p),p.state||(p.state={}),p.__n=r,m=p.__d=!0,p.__h=[],p._sb=[]),b&&null==p.__s&&(p.__s=p.state),b&&null!=D.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=j({},p.__s)),j(p.__s,D.getDerivedStateFromProps(g,p.__s))),h=p.props,f=p.state,p.__v=n,m)b&&null==D.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),b&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(b&&null==D.getDerivedStateFromProps&&g!==h&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,k),n.__v==a.__v||!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,k)){n.__v!=a.__v&&(p.props=g,p.state=p.__s,p.__d=!1),n.__e=a.__e,n.__k=a.__k,n.__k.some(function(e){e&&(e.__=n)}),x.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&s.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,k),b&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(h,f,v)})}if(p.context=k,p.props=g,p.__P=e,p.__e=!1,S=t.__r,$=0,b)p.state=p.__s,p.__d=!1,S&&S(n),d=p.render(p.props,p.state,p.context),x.push.apply(p.__h,p._sb),p._sb=[];else do{p.__d=!1,S&&S(n),d=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++$<25);p.state=p.__s,null!=p.getChildContext&&(r=j(j({},r),p.getChildContext())),b&&!m&&null!=p.getSnapshotBeforeUpdate&&(v=p.getSnapshotBeforeUpdate(h,f)),w=null!=d&&d.type===T&&null==d.key?J(d.props.children):d,l=I(e,C(w)?w:[w],n,a,r,o,i,s,l,c,u),p.base=n.__e,n.__u&=-161,p.__h.length&&s.push(p),_&&(p.__E=p.__=null)}catch(e){if(n.__v=null,c||null!=i)if(e.then){for(n.__u|=c?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,n.__e=l}else{for(P=i.length;P--;)z(i[P]);W(n)}else n.__e=a.__e,n.__k=a.__k,e.then||W(n);t.__e(e,n,a)}else null==i&&n.__v==a.__v?(n.__k=a.__k,n.__e=a.__e):l=n.__e=K(a.__e,n,a,r,o,i,s,c,u);return(d=t.diffed)&&d(n),128&n.__u?void 0:l}function W(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(W))}function V(e,n,a){for(var r=0;r<a.length;r++)Y(a[r],a[++r],a[++r]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function J(e){return"object"!=typeof e||null==e||e.__b>0?e:C(e)?e.map(J):j({},e)}function K(n,a,r,o,i,s,l,c,u){var d,p,m,h,f,v,_,g=r.props||$,b=a.props,y=a.type;if("svg"==y?i="http://www.w3.org/2000/svg":"math"==y?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=s)for(d=0;d<s.length;d++)if((f=s[d])&&"setAttribute"in f==!!y&&(y?f.localName==y:3==f.nodeType)){n=f,s[d]=null;break}if(null==n){if(null==y)return document.createTextNode(b);n=document.createElementNS(i,y,b.is&&b),c&&(t.__m&&t.__m(a,s),c=!1),s=null}if(null==y)g===b||c&&n.data==b||(n.data=b);else{if(s=s&&e.call(n.childNodes),!c&&null!=s)for(g={},d=0;d<n.attributes.length;d++)g[(f=n.attributes[d]).name]=f.value;for(d in g)f=g[d],"dangerouslySetInnerHTML"==d?m=f:"children"==d||d in b||"value"==d&&"defaultValue"in b||"checked"==d&&"defaultChecked"in b||U(n,d,null,f,i);for(d in b)f=b[d],"children"==d?h=f:"dangerouslySetInnerHTML"==d?p=f:"value"==d?v=f:"checked"==d?_=f:c&&"function"!=typeof f||g[d]===f||U(n,d,f,g[d],i);if(p)c||m&&(p.__html==m.__html||p.__html==n.innerHTML)||(n.innerHTML=p.__html),a.__k=[];else if(m&&(n.innerHTML=""),I("template"==a.type?n.content:n,C(h)?h:[h],a,r,o,"foreignObject"==y?"http://www.w3.org/1999/xhtml":i,s,l,s?s[0]:r.__k&&M(r,0),c,u),null!=s)for(d=s.length;d--;)z(s[d]);c||(d="value","progress"==y&&null==v?n.removeAttribute("value"):null!=v&&(v!==n[d]||"progress"==y&&!v||"option"==y&&v!=g[d])&&U(n,d,v,g[d],i),d="checked",null!=_&&_!=n[d]&&U(n,d,_,g[d],i))}return n}function Y(e,n,a){try{if("function"==typeof e){var r="function"==typeof e.__u;r&&e.__u(),r&&null==n||(e.__u=e(n))}else e.current=n}catch(e){t.__e(e,a)}}function Z(e,n,a){var r,o;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Y(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Z(r[o],n,a||"function"!=typeof e.type);a||z(e.__e),e.__c=e.__=e.__e=void 0}function X(e,t,n){return this.constructor(e,n)}e=x.slice,t={__e:function(e,t,n,a){for(var r,o,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,a||{}),i=r.__d),i)return r.__E=r}catch(t){e=t}throw e}},n=0,A.prototype.setState=function(e,t){var n=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=j({},this.state);"function"==typeof e&&(e=e(j({},n),this.props)),e&&j(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),N(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),N(this))},A.prototype.render=T,a=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0,s=Math.random().toString(8),l="__d"+s,c="__a"+s,u=/(PointerCapture)$|Capture$/i,d=0,p=G(!1),m=G(!0),h=0;var Q,ee,te,ne,ae=0,re=[],oe=t,ie=oe.__b,se=oe.__r,le=oe.diffed,ce=oe.__c,ue=oe.unmount,de=oe.__;function pe(e,t){oe.__h&&oe.__h(ee,e,ae||t),ae=0;var n=ee.__H||(ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function me(e){return ae=1,function(e,t,n){var a=pe(Q++,2);if(a.t=e,!a.__c&&(a.__=[n?n(t):ye(void 0,t),function(e){var t=a.__N?a.__N[0]:a.__[0],n=a.t(t,e);t!==n&&(a.__N=[n,a.__[1]],a.__c.setState({}))}],a.__c=ee,!ee.__f)){var r=function(e,t,n){if(!a.__c.__H)return!0;var r=a.__c.__H.__.filter(function(e){return e.__c});if(r.every(function(e){return!e.__N}))return!o||o.call(this,e,t,n);var i=a.__c.props!==e;return r.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(i=!0)}}),o&&o.call(this,e,t,n)||i};ee.__f=!0;var o=ee.shouldComponentUpdate,i=ee.componentWillUpdate;ee.componentWillUpdate=function(e,t,n){if(this.__e){var a=o;o=void 0,r(e,t,n),o=a}i&&i.call(this,e,t,n)},ee.shouldComponentUpdate=r}return a.__N||a.__}(ye,e)}function he(){for(var e;e=re.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(_e),t.__h.some(ge),t.__h=[]}catch(ee){t.__h=[],oe.__e(ee,e.__v)}}}oe.__b=function(e){ee=null,ie&&ie(e)},oe.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),de&&de(e,t)},oe.__r=function(e){se&&se(e),Q=0;var t=(ee=e.__c).__H;t&&(te===ee?(t.__h=[],ee.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(_e),t.__h.some(ge),t.__h=[],Q=0)),te=ee},oe.diffed=function(e){le&&le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==re.push(t)&&ne===oe.requestAnimationFrame||((ne=oe.requestAnimationFrame)||ve)(he)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),te=ee=null},oe.__c=function(e,t){t.some(function(e){try{e.__h.some(_e),e.__h=e.__h.filter(function(e){return!e.__||ge(e)})}catch(ee){t.some(function(e){e.__h&&(e.__h=[])}),t=[],oe.__e(ee,e.__v)}}),ce&&ce(e,t)},oe.unmount=function(e){ue&&ue(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{_e(e)}catch(e){t=e}}),n.__H=void 0,t&&oe.__e(t,n.__v))};var fe="function"==typeof requestAnimationFrame;function ve(e){var t,n=function(){clearTimeout(a),fe&&cancelAnimationFrame(t),setTimeout(e)},a=setTimeout(n,35);fe&&(t=requestAnimationFrame(n))}function _e(e){var t=ee,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),ee=t}function ge(e){var t=ee;e.__c=e.__(),ee=t}function be(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function ye(e,t){return"function"==typeof t?t(e):t}function ke(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var a in t)if("__source"!==a&&e[a]!==t[a])return!0;return!1}function Se(e,t){this.props=e,this.context=t}(Se.prototype=new A).isPureReactComponent=!0,Se.prototype.shouldComponentUpdate=function(e,t){return ke(this.props,e)||ke(this.state,t)};var $e=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$e&&$e(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var xe=t.__e;t.__e=function(e,t,n,a){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);xe(e,t,n,a)};var we=t.unmount;function Ce(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),e.__c.__H=null),null!=(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Ce(e,t,n)})),e}function je(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return je(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function ze(){this.__u=0,this.o=null,this.__b=null}function Pe(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function De(){this.i=null,this.l=null}t.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),we&&we(e)},(ze.prototype=new A).__c=function(e,t){var n=t.__c,a=this;null==a.o&&(a.o=[]),a.o.push(n);var r=Pe(a.__v),o=!1,i=function(){o||a.__z||(o=!0,n.__R=null,r?r(l):l())};n.__R=i;var s=n.__P;n.__P=null;var l=function(){if(! --a.__u){if(a.state.__a){var e=a.state.__a;a.__v.__k[0]=je(e,e.__c.__P,e.__c.__O)}var t;for(a.setState({__a:a.__b=null});t=a.o.pop();)t.__P=s,t.forceUpdate()}};a.__u++||32&t.__u||a.setState({__a:a.__b=a.__v.__k[0]}),e.then(i,i)},ze.prototype.componentWillUnmount=function(){this.o=[]},ze.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=Ce(this.__b,n,a.__O=a.__P)}this.__b=null}var r=t.__a&&P(T,null,e.fallback);return r&&(r.__u&=-33),[P(T,null,t.__a?null:e.children),r]};var Te=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(De.prototype=new A).__a=function(e){var t=this,n=Pe(t.__v),a=t.l.get(e);return a[0]++,function(r){var o=function(){t.props.revealOrder?(a.push(r),Te(t,e,a)):r()};n?n(o):o()}},De.prototype.render=function(e){this.i=null,this.l=/* @__PURE__ */new Map;var t=R(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},De.prototype.componentDidUpdate=De.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Te(e,n,t)})};var Ae="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Me=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ee=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Fe=/[A-Z0-9]/g,Ne="undefined"!=typeof document,Oe=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};A.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(A.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ie=t.event;t.event=function(e){return Ie&&(e=Ie(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Le={configurable:!0,get:function(){return this.class}},Re=t.vnode;t.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,a={},r=-1==n.indexOf("-");for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||Ne&&"children"===o&&"noscript"===n||"class"===o||"className"===o)){var s=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"translate"===s&&"no"===i?i=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?o="ondblclick":"onchange"!==s||"input"!==n&&"textarea"!==n||Oe(t.type)?"onfocus"===s?o="onfocusin":"onblur"===s?o="onfocusout":Ee.test(o)&&(o=s):s=o="oninput":r&&Me.test(o)?o=o.replace(Fe,"-$&").toLowerCase():null===i&&(i=void 0),"oninput"===s&&a[o=s]&&(o="oninputCapture"),a[o]=i}}"select"==n&&(a.multiple&&Array.isArray(a.value)&&(a.value=R(t.children).forEach(function(e){e.props.selected=-1!=a.value.indexOf(e.props.value)})),null!=a.defaultValue&&(a.value=R(t.children).forEach(function(e){e.props.selected=a.multiple?-1!=a.defaultValue.indexOf(e.props.value):a.defaultValue==e.props.value}))),t.class&&!t.className?(a.class=t.class,Object.defineProperty(a,"className",Le)):t.className&&(a.class=a.className=t.className),e.props=a}(e),e.$$typeof=Ae,Re&&Re(e)};var Be=t.__r;t.__r=function(e){Be&&Be(e),e.__c};var He=t.diffed;t.diffed=function(e){He&&He(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value)};var Ue,Ge=function(e){function t(e){var n,a;return this.getChildContext||(n=/* @__PURE__ */new Set,(a={})[t.__c]=this,this.getChildContext=function(){return a},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,N(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+h++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}(),qe="undefined"!=typeof window?function(e,t){var n=pe(Q++,4);!oe.__s&&be(n.__H,t)&&(n.__=e,n.u=t,ee.__h.push(n))}:function(e,t){var n=pe(Q++,3);!oe.__s&&be(n.__H,t)&&(n.__=e,n.u=t,ee.__H.__h.push(n))},We=(Ue=Ge,(...e)=>{let t=function(e){var t=ee.context[e.__c],n=pe(Q++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(ee)),t.props.value):e.__}(Ue),n=me({});return qe(()=>t.on("@changed",(t,a)=>{e.some(e=>e in a)&&n[1]({})}),[]),function(e,t){var n=pe(Q++,7);return be(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}(()=>{let n=t.get(),a={};return e.forEach(e=>{a[e]=n[e]}),a.dispatch=t.dispatch,a},[n[0]])}),Ve=class extends Error{constructor(e){super("Validation error"),this.validations=e}getValidations(){return this.validations}},Je=e=>Object.assign({accept:"application/ld+json","Content-Type":"application/ld+json"},e),Ke={get:async(e,t)=>{const{path:n,headers:a}=e.get().api;try{var r;const e=await fetch(`${n}/${t}`,{headers:Je(a)});if(e.status<200||e.status>299){const t=/* @__PURE__ */new Error("Unexpected api response");throw t.code=e.status,t}const o=await e.json();if("object"!=typeof o)throw new Error("Invalid response");return null!==(r=o["hydra:member"])&&void 0!==r?r:o}catch(o){throw e.dispatch("moduleState/set","error"),o}},post:async(e,t,n)=>Ke.doRequest(e,"POST",t,n),doRequest:async({api:e,dispatch:t},n,a,r)=>{a=`${e.path}/${a}`;const{headers:o}=e,i={method:n,headers:Je(o),body:JSON.stringify(r)};try{var s=await(await fetch(a,i)).json()}catch(l){throw t("moduleState/set","error"),l}if(s["@id"])return s;if(s.violations)throw new Ve(s.violations);throw t("moduleState/set","error"),new Error("Invalid result")},put:async(e,t,n)=>{const a=t.split("/"),r=a[a.length-2],o=a[a.length-1];return Ke.doRequest(e,"PUT",`${r}/${o}`,n)}},Ye=function(e,t,n,a){var r;t[0]=0;for(var o=1;o<t.length;o++){var i=t[o++],s=t[o]?(t[0]|=i?1:2,n[t[o++]]):t[++o];3===i?a[0]=s:4===i?a[1]=Object.assign(a[1]||{},s):5===i?(a[1]=a[1]||{})[t[++o]]=s:6===i?a[1][t[++o]]+=s+"":i?(r=e.apply(s,Ye(e,s,n,["",null])),a.push(r),s[0]?t[0]|=2:(t[o-2]=0,t[o]=r)):a.push(s)}return a},Ze=/* @__PURE__ */new Map;var Xe=function(e){var t=Ze.get(this);return t||(t=/* @__PURE__ */new Map,Ze.set(this,t)),(t=Ye(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,a=1,r="",o="",i=[0],s=function(e){1===a&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===a&&(e||r)?(i.push(3,e,r),a=2):2===a&&"..."===r&&e?i.push(4,e,0):2===a&&r&&!e?i.push(5,0,!0,r):a>=5&&((r||!e&&5===a)&&(i.push(a,0,r,n),a=6),e&&(i.push(a,e,0,n),a=6)),r=""},l=0;l<e.length;l++){l&&(1===a&&s(),s(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===a?"<"===t?(s(),i=[i],a=3):r+=t:4===a?"--"===r&&">"===t?(a=1,r=""):r=t+r[0]:o?t===o?o="":r+=t:'"'===t||"'"===t?o=t:">"===t?(s(),a=1):a&&("="===t?(a=5,n=r,r=""):"/"===t&&(a<5||">"===e[l][c+1])?(s(),3===a&&(i=i[0]),a=i,(i=i[0]).push(2,0,a),a=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),a=2):r+=t),3===a&&"!--"===r&&(a=4,i=i[0])}return s(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind((e,t,...n)=>(t&&t.class&&(t.class=t.class.trim().split(" ").filter(e=>e.trim()).map(e=>0!==e.indexOf("cvio-ab-")?`cvio-ab-${e}`:e).join(" ")),P(e,t,...n))),Qe=e=>{const{dispatch:t,privacyPolicyLink:n}=We("privacyPolicyLink");if(n)return Xe`
      <a class="link-primary" href="${n}" target="_new">
        ${e.children}
      </a>
    `;return Xe`
    <a class="link-primary" onClick=${()=>t("privacyPolicyModalState/set",!0)}>
      ${e.children}
    </a>
  `},et=e=>{const{appointment:t}=We("appointment");return Xe`
    <span class="fw-bold">
      ${t.start?ht.formatDateTime(t.start):null}
    </span>
  `},tt={hu:{"Are you sure you want to cancel this appointment?":"Biztosan megszakítja a foglalást?","All inputed data will be lost.":"Minden megadott adat el fog veszni.","No, continue editing appointment":"Nem, időpontfoglalás folytatása","Cancel appointment":"Foglalás megszakítása","Appointment booking failed":"Időpontfoglalás nem sikerült","Due to an unexpected error appointment could not be booked, please restart the process":"Az időpontfoglalás közben nem várt hiba történt, kérjük kezdje újra a folyamatot","None of our colleagues is available for the selected process":"Egy munkatársunk sem elérhető a választott protokollhoz","First free":"Első szabad","For finding the nearest free time slot.":"A lehető legkorábbi időpont választásához.","@abbrSunday":"V","@abbrMonday":"H","@abbrTuesday":"K","@abbrWednesday":"Sze","@abbrThursday":"Cs","@abbrFriday":"P","@abbrSaturday":"Szo",January:"Január",February:"Február",March:"Március",April:"Április",May:"Május",June:"Június",July:"Július",August:"Augusztus",September:"Szeptember",October:"Október",November:"November",December:"December","There are no free appointment times for this day":"Nincsenek szabad időpontok erre a napra","The next free slot is available on %date%":"A következő szabad időpont dátuma: %date%","Go to date":"Ugrás dátumra","Click here to search for the next free appointment":"Kattintson ide a következő szabad időpont kereséséhez","Search in progress...":"Keresés folyamatban...","Last name":"Vezetéknév","First name":"Keresztnév",Birth:"Születési dátum",Gender:"Nem",SSN:"TAJ szám",Country:"Ország",State:"Állam","Postal code":"Irányítószám",City:"Város","Street address":"Utca",Mobile:"Mobil","Select another process":"Másik protokoll választása","@abbrMinute":"p.","Not specified":"Nincs megadva",Male:"Férfi",Female:"Nő",Next:"Tovább","This field is required.":"Ez a mező kötelező.","Invalid email address.":"Hibás email cím.","Suspicious input detected: HTML tags are not allowed":"Gyanús bevitel észlelve: HTML tagek nem engedélyezettek","Your information":"Az Ön adatai",Name:"Név","Date of birth":"Születési dátum",Address:"Cím","Phone number":"Telefonszám","Appointment details verification":"Foglalási adatok ellenőrzése","Appointment summary":"Foglalási összesítő",Price:"Ár","Confirm appointment":"Időpontfoglalás jóváhagyása","%customer%'s examination":"%customer% vizsgálata","Your appointment have been recorded.":"Foglalását rögzítettük.","The examination will start at %start%, please arrive 5 minutes early.":"A vizsgálat kezdete: %start%, kérjük érkezzen 5 perccel korábban.","If you have any further questions, please contact us through our customer service.":"Ha kérdése van vagy szeretné módosítani a foglalását, kérjük keresse szaküzletünket.","Appointment booked!":"Időpont lefoglalva!","examiner: %examiner%":"végzi: %examiner%","It takes up to %length% minutes":"Időtartam: %length% perc","I have accepted the privacy policy":Xe`Elfogadom az <${Qe}>adatkezelési tájékoztatóban<//> foglaltakat`,"I agree to the use of my medical records according to privacy policy":"Hozzájárulok egészségügyi adataim adatkezelési tájékoztatóban foglaltak szerinti kezeléséhez","Privacy policy":"Adatkezelési tájékoztató",Close:"Bezárás","Start Time":"Időpont",Subject:"Tárgy",Location:"Helyszín","Appointment booking":"Időpontfoglalás","Select eye examination type":"Vizsgálattípus választása","Select a vision expert":"Látásszakértő választása","Select your desired appointment time":"Időpont választása","Enter customer details":"Ügyféladatok megadása",Comment:"Megjegyzés","change date":"időpont cseréje","More...":"Bővebben...","Detailed description":"Részletes leírás",Morning:"Délelőtt",Afternoon:"Délután",Evening:"Este","Booking the appointment":"Időpont lefoglalása","Event draft":"Esemény piszkozat","Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.":"Hiba! Időpontfoglalás nem lehetséges! Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a %mail% email címen vagy jelezze nekünk ezt a hibát a telefonos időpontkérés során:","There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.":"Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket és jelezze nekünk ezt a hibát a telefonos időpontkérés során: Nincs email cím beállítva a szaküzlethez.","There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.":"Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a %tel% telefonszámon és jelezze nekünk ezt a hibát a telefonos időpontkérés során: Nincs email cím beállítva a szaküzlethez.","There is no calendar created for this store.":"Nincs naptár létrehozva az üzlethez.","There is no office hourse configured for this specialist.":"Nincs munkaóra beállítva a látásszakértőknek.","The eye examination process configured for this appointment booker has been removed.":"Az időpontfoglalóban beállított vizsgálati protokollt időközben törölték.","There is no email address configured for this store.":"Nincs email cím beállítva a szaküzlethez.","The lenght isn’t configured for the eye examination processes.":"A vizsgálati protokollokhoz nincs időtartam megadva.","Invalid API key or inactive API user.":"Hibás API kulcs vagy inaktív API felhasználó.","Invalid store code":"Téves üzlet kód","Error! Appointments can not be created!":"Hiba! Időpontfoglalás nem lehetséges!","There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.":"Az időpontfoglaló beállítási hibája miatt nem lehetséges az online időpontfoglalás. Kérjük keresse szaküzletünket a %tel% telefonszámon vagy %email% email címen és jelezze nekünk ezt a hibát a telefonos időpontkérés során:","Store selection":"Üzlet választása","There are no eye examination processes configured in the store network or the length of them is not configured.":"Nincs vizsgálati protokoll a bolthálózatban, vagy a hossza nincs beállítva."},ro:{"Are you sure you want to cancel this appointment?":"Sunteți sigur că doriți să renunțați la programare?","All inputed data will be lost.":"Datele întroduse se vor pierde.","No, continue editing appointment":"Nu, continuare programare.","Cancel appointment":"Întreruperea programării","Appointment booking failed":"Programare nereușită.","Due to an unexpected error appointment could not be booked, please restart the process":"A apărut o eroare. Vă rugăm, începeți din nou procesul.","None of our colleagues is available for the selected process":"Nu avem angajați disponibili pentru protocolul selectat.","First free":"Primul liber","For finding the nearest free time slot.":"În cel mai scurt timp.","@abbrSunday":"D","@abbrMonday":"L","@abbrTuesday":"M","@abbrWednesday":"Mi","@abbrThursday":"J","@abbrFriday":"V","@abbrSaturday":"S",January:"Ianuarie",February:"Februarie",March:"Martie",April:"Aprilie",May:"Mai",June:"Junie",July:"Julie",August:"August",September:"Septembrie",October:"Octombrie",November:"Noiembrie",December:"Decembrie","There are no free appointment times for this day":"Nu sunt ore libere la data selectată.","The next free slot is available on %date%":"Următorul timp liber este: %date%","Go to date":"Salt la dată","Click here to search for the next free appointment":"Click aici pentru căutarea următorului timp liber","Search in progress...":"Căutare în curs...","Last name":"Nume","First name":"Prenume",Birth:"Data naștere",Gender:"Gen",SSN:"CNP",Country:"Țara",State:"Megye","Postal code":"Cod poștal",City:"Oraș","Street address":"Strada",Mobile:"Număr de tel mobil","Select another process":"Selectare protocol diferit","@abbrMinute":"min.","Not specified":"Nu e specificat",Male:"Bărbat",Female:"Femeie",Next:"Mai departe","This field is required.":"Acest cămp este necesar.","Invalid email address.":"Adresa da mail greșită.","Your information":"Datele personale",Name:"Nume","Date of birth":"Data naștere",Address:"Adresa","Phone number":"Număr de telefon","Appointment details verification":"Verifică datele rezervării","Appointment summary":"Sumar rezervare",Price:"Preț","Confirm appointment":"Rezervare","%customer%'s examination":"Consultație %customer%","Your appointment have been recorded.":"Consultația a fost programată","The examination will start at %start%, please arrive 5 minutes early.":"Vă rugăm să vă prezentați cu 5 minute mai devreme față de ora %start%.","If you have any further questions, please contact us through our customer service.":"Dacă aveți alte întrebări, vă rugăm să ne contactați.","Appointment booked!":"Programare rezervată!","examiner: %examiner%":"examinator: %examiner%","It takes up to %length% minutes":"Durata: %length% minute","I have accepted the privacy policy":Xe`Accept <${Qe}>Termenii și condițiile<//>`,"I agree to the use of my medical records according to privacy policy":"Sunt de acord cu prelucrarea datelor medicale conform Termenilor și condițiilor generale.","Privacy policy":"Termeni și condiții",Close:"Închidere","Start Time":"Data",Subject:"Subiect",Location:"Locație","Appointment booking":"Programare","Select eye examination type":"Selectează tipul de examinare dorit","Select a vision expert":"Alege specialistul în sănătatea ochilor","Select your desired appointment time":"Selectare dată și oră","Enter customer details":"Datele clientului","change date":"modificare dată",Morning:"Înainte de masă",Afternoon:"După masă",Evening:"Seara","Booking the appointment":"Rezervarea unei programări","Event draft":"Eveniment schiță","Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.":"Eroare! Programarea nu se poate rezerva! Rezervarea online a programărilor nu este posibilă din cauza unei erori de configurare în sistemul de rezervare a programărilor. Vă rugăm să contactați magazinul la adresa de e-mail %mail% și să ne informați despre această eroare în timpul solicitării de programare telefonică","There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.":"Rezervarea online nu este posibilă din cauza unei erori de configurare în calendarul de rezervare. Vă rugăm contactați magazinul, informați-ne despre această eroare în timpul solicitării de programare telefonică: Nu a fost setată nicio adresă de e-mail pentru magazinul de specialitate.","There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.":"Rezervarea online nu este posibilă din cauza unei erori de configurare în calendarul de rezervare. Vă rugăm contactați magazinul telefonic ( %tel% ), informați-ne despre această eroare în timpul solicitării de programare telefonică: Nu a fost setată nicio adresă de e-mail pentru magazinul de specialitate.","There is no calendar created for this store.":"Nu a fost creat calendar pentru acest magazin.","There is no office hourse configured for this specialist.":"Nu există ore de lucru pentru specialiștii în vedere.","The eye examination process configured for this appointment booker has been removed.":"Protocolul de examinare stabilit la programare a fost anulat între timp.","There is no email address configured for this store.":"Nu există nicio adresă de e-mail setată pentru magazinul specializat.","The lenght isn’t configured for the eye examination processes.":"Nu este specificată durată pentru protocoalele de examinare.","Invalid API key or inactive API user.":"Cheie API greșită sau utilizator API inactiv.","Invalid store code":"Cod magazin greșit","Error! Appointments can not be created!":"Eroare! Programarea nu se poate rezerva!","There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.":"Eroare! Programarea nu se poate rezerva! Rezervarea online a programărilor nu este posibilă din cauza unei erori de configurare în sistemul de rezervare a programărilor. Vă rugăm să contactați magazinul la numărul de telefon %tel% sau adresa de e-mail %email% și să ne raportați această eroare atunci când solicitați o programare prin telefon:","Store selection":"Selectare magazin","There are no eye examination processes configured in the store network or the length of them is not configured.":"Nu există protocol de consulație în magazin sau durata protocolului nu este specificat.","Suspicious input detected: HTML tags are not allowed":"Intrare suspectă detectată: etichetele HTML nu sunt permise"},hr:{"Are you sure you want to cancel this appointment?":"Jeste li sigurni da želite otkazati ovaj termin?","All inputed data will be lost.":"Svi uneseni podaci bit će izgubljeni.","No, continue editing appointment":"Ne, nastavi s uređivanjem termina","Cancel appointment":"Otkaži termin","Appointment booking failed":"Rezervacija termina nije uspjela","Due to an unexpected error appointment could not be booked, please restart the process":"Zbog neočekivane pogreške termin nije moguće rezervirati, molimo ponovno pokrenite proces","None of our colleagues is available for the selected process":"Nitko od naših kolega nije dostupan za odabrani proces","First free":"Prvo slobodno","For finding the nearest free time slot.":"Da odaberete što raniji termin.","@abbrSunday":"N","@abbrMonday":"P","@abbrTuesday":"U","@abbrWednesday":"S","@abbrThursday":"Č","@abbrFriday":"P","@abbrSaturday":"S",January:"Siječnja",February:"Veljača",March:"Ožujak",April:"Travanj",May:"Svibanj",June:"Lipanj",July:"Srpanj",August:"Kolovoz",September:"Rujan",October:"Listopad",November:"Studeni",December:"Prosinac","There are no free appointment times for this day":"Za ovaj dan nema slobodnih termina","The next free slot is available on %date%":"Datum sljedećeg slobodnog termina je %date%","Go to date":"Skoči na datum","Click here to search for the next free appointment":"Traženje sljedećeg slobodnog termina","Search in progress...":"Pretraživanje je u tijeku...","Last name":"Prezime","First name":"Ime",Birth:"Datum rođenja",Gender:"Spol",SSN:"MBO broj",Country:"Zemlja",State:"Država","Postal code":"Poštanski broj",City:"Grad","Street address":"Ulica",Mobile:"Mobilni","Select another process":"Odaberite drugi protokol","@abbrMinute":"m.","Not specified":"Nije specificirano",Male:"Muškarac",Female:"Žena",Next:"Sljedeći","This field is required.":"Ovo polje je obavezno.","Invalid email address.":"Pogrešna adresa e-maila.","Your information":"Vaši podaci",Name:"Ime","Date of birth":"Datum rođenja",Address:"Adresa","Phone number":"Broj telefona","Appointment details verification":"Provjerite detalje rezervacije","Appointment summary":"Sažetak rezervacije",Price:"Cjena","Confirm appointment":"Odobrenje rezervacije termina","%customer%'s examination":"%customer% pregleda","Your appointment have been recorded.":"Vaša rezervacija je zabilježena.","The examination will start at %start%, please arrive 5 minutes early.":"Početak pregleda: %start%, molimo dođite 5 minuta ranije.","If you have any further questions, please contact us through our customer service.":"Ako imate dodatnih pitanja, obratite nam se putem naše korisničke službe.","Appointment booked!":"Termin rezerviran!","examiner: %examiner%":"ispitivač: %examiner%","It takes up to %length% minutes":"Trajanje: %length% minuta","I have accepted the privacy policy":Xe`Prihvaćam <${Qe}>što je zapisano<//> u informativnom listu za upravljanje podacima`,"I agree to the use of my medical records according to privacy policy":"Pristajem na obradu mojih zdravstvenih podataka u skladu s informacijama o upravljanju podacima","Privacy policy":"Informativni list za upravljanje podatke",Close:"Zatvaranje","Start Time":"Vrijeme početka",Subject:"Objekat",Location:"Mjesto","Appointment booking":"Zakažite termin","Select eye examination type":"Izbor vrste pregleda","Select a vision expert":"Odaberite stručnjaka za vid","Select your desired appointment time":"Odaberite željeno vrijeme termina","Enter customer details":"Unos podataka o klijentu","change date":"promijeni termin",Morning:"Prijepodne",Afternoon:"Poslijepodne",Evening:"Večer","Booking the appointment":"Rezerviranje termina","Event draft":"Skica za događaj","Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.":"Greška! Rezervacija termina nije moguća! Online rezervacija termina nije moguća zbog greške u konfiguraciji sustava za rezervaciju termina. Kontaktirajte našu optiku na e-mail adresu %mail% i prijavite nam ovu pogrešku tijekom telefonskog zahtjeva za termin.","There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.":"Online rezervacija termina nije moguća zbog greške u konfiguraciji sustava za rezervaciju termina. Kontaktirajte našu optiku i prijavite nam ovu pogrešku tijekom telefonskog zahtjeva za termin. Nije postavljena e-mail adresa za optiku.","There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.":"Online rezervacija termina nije moguća zbog greške u konfiguraciji sustava za rezervaciju termina. Nazovite našu optiku na telefonski broj %tel% i prijavite nam ovu pogrešku tijekom telefonskog zahtjeva za termin. Nije postavljena e-mail adresa za optiku.","There is no calendar created for this store.":"Kalendar nije napravljen za optiku.","There is no office hourse configured for this specialist.":"Za specijaliste za vid nije određeno radno vrijeme.","The eye examination process configured for this appointment booker has been removed.":"Zadan protokol pregleda kod rezervacija termina je u međuvremenu izbrisan.","There is no email address configured for this store.":"Nije postavljena e-mail adresa za optiku.","The lenght isn’t configured for the eye examination processes.":"Kod protokola pregleda nije navedeno trajanje.","Invalid API key or inactive API user.":"Loš API ključ ili neaktivan API korisnik.","Invalid store code":"Pogrešan kod optike","Error! Appointments can not be created!":"Greška! Rezervacija termina nije moguća!","There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.":"Online rezervacija termina nije moguća zbog greške u konfiguraciji sustava za rezervaciju termina. Kontaktirajte našu optiku na %tel% telefonski broj ili na %email% email adresu i  prijavite nam ovu pogrešku tijekom telefonskog zahtjeva za termin. ","Store selection":"Odabir trgovine","There are no eye examination processes configured in the store network or the length of them is not configured.":"U optici nije postavljen protokol pregleda ili nije određeno duljina pregleda.","Suspicious input detected: HTML tags are not allowed":"Sumnjiv unos otkriven: HTML oznake nisu dopuštene"},en:{"@abbrSunday":"Sun","@abbrMonday":"Mon","@abbrTuesday":"Tue","@abbrWednesday":"Wed","@abbrThursday":"Thu","@abbrFriday":"Fri","@abbrSaturday":"Sat",January:"January",February:"February",March:"March",April:"April",May:"May",June:"June",July:"July",August:"August",September:"September",October:"October",November:"November",December:"December","@abbrMinute":"m.","I have accepted the privacy policy":Xe`I accept the terms of <${Qe}>privacy policy<//>`,"Your appointment starts at startTime":Xe`Your appointment starts at <${et}//>`,"change date":"change date"}},nt=(e,t={},n)=>{let a=(n=n||We("language","translationOverrides")).language;const r=tt[a]||tt[a.substring(0,2)]||tt.en;e=n.translationOverrides[e]||r[e]||e;for(const o in t)e=e.replace(new RegExp("%"+o+"%","g"),t[o]);return e},at=[{name:"ROLE_OPHTHALMOLOGIST",includes:["ROLE_CONTACTOLOGIST","ROLE_OPTOMETRIST"]},{name:"ROLE_CONTACTOLOGIST",includes:["ROLE_OPTOMETRIST"]},{name:"ROLE_OPTOMETRIST",includes:[]}];function rt(e,t,n){if(void 0!==t.online_reservation_allowed&&0==t.online_reservation_allowed)return!1;if(!function(e,t){if(!e.only_specific_processes_allowed)return!0;const n=t["@id"].split("/"),a=parseInt(n[n.length-1]);return-1!=e.allowed_process_ids.indexOf(a)}(t,e))return!1;if(!e.highestRequiredRole)return!0;for(let a=0;a<at.length;a++){let r=at[a];if(t.user&&-1!=t.user.roles.indexOf(r.name)){if(e.highestRequiredRole==r.name)return!0;if("hierachical"==n&&-1!=r.includes.indexOf(e.highestRequiredRole))return!0}}return!1}function ot({appointment:e,calendars:t,calendarRoleCheckMode:n}){var a=e?e.eye_examination_process:null;return(t||[]).filter(function(e){return!a||!a.highestRequiredRole||rt(a,e,n)})}function it(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()}var st=e=>{var t=[new Date(e)];for(let n=0;n<4;n++)(e=new Date(e)).setDate(e.getDate()+1),t.push(e);return t.hasDate=function(e){for(let t=0;t<5;t++)if(it(this[t],e))return!0},t},lt=[];function ct(e){if(lt.length)return lt;for(var t=e||/* @__PURE__ */new Date,n=0;n<=100;n++)lt.push(st(t)),(t=new Date(t)).setDate(t.getDate()+5);return lt}function ut(e,t){return it(e,t)&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}var dt={hu:"%Y. %M. %D."},pt=e=>`${(e=new Date(e)).getHours()}:${e.getMinutes()<10?"0":""}${e.getMinutes()}`,mt=e=>{const{language:t}=We("language");var n=dt[t]||dt[t.substring(0,2)]||dt.hu,a=(e=new Date(e)).getMonth()+1;return n.replace("%Y",e.getFullYear()).replace("%M",`${a<10?"0":""}${a}`).replace("%D",`${e.getDate()<10?"0":""}${e.getDate()}`)},ht={formatTime:pt,formatDate:mt,formatDateTime:e=>mt(e)+" "+pt(e)},ft=["hu"],vt=e=>(e=e||We("language").language,-1!=ft.indexOf(e)||-1!=ft.indexOf(e.substring(0,2))),_t=({first_name:e,last_name:t},n)=>vt(n)?`${(t||"").trim()} ${(e||"").trim()}`.trim():`${(e||"").trim()} ${(t||"").trim()}`.trim(),gt=vt,bt=({postal_code:e,city:t,street_address:n})=>{const{language:a}=We("language"),r=e||"",o=t||"",i=n||"",s=[r,o,i].filter(e=>e.trim()).length;if(0===s)return"";if(1===s)return(o||i||"").trim();let l;switch(a){case"ro":case"hr":l=`${i}, ${r} ${o}`;break;default:l=`${r} ${o}, ${i}`}return l.trim()},yt=/* @__PURE__ */k((e,t)=>{for(var n=[["Afghanistan (‫افغانستان‬‎)","af","93","+..-..-...-...."],["Åland Islands","ax","358",""],["Albania (Shqipëri)","al","355","+...(...)...-..."],["Algeria (‫الجزائر‬‎)","dz","213","+...-..-...-...."],["American Samoa","as","1684","+.(...)...-...."],["Andorra","ad","376","+...-...-..."],["Angola","ao","244","+...(...)...-..."],["Anguilla","ai","1264","+.(...)...-...."],["Antarctica","aq","672",""],["Antigua and Barbuda","ag","1268","+.(...)...-...."],["Argentina","ar","54","+..(...)...-...."],["Armenia (Հայաստան)","am","374","+...-..-...-..."],["Aruba","aw","297","+...-...-...."],["Australia","au","61","+.. ... ... ..."],["Austria (Österreich)","at","43","+..(...)...-...."],["Azerbaijan (Azərbaycan)","az","994","+...-..-...-..-.."],["Bahamas","bs","1242","+.(...)...-...."],["Bahrain (‫البحرين‬‎)","bh","973","+...-....-...."],["Bangladesh (বাংলাদেশ)","bd","880","+...-..-...-..."],["Barbados","bb","1246","+.(...)...-...."],["Belarus (Беларусь)","by","375","+...(..)...-..-.."],["Belgium (België)","be","32","+.. ... .. .. .."],["Belize","bz","501","+...-...-...."],["Benin (Bénin)","bj","229","+...-..-..-...."],["Bermuda","bm","1441","+.(...)...-...."],["Bhutan (འབྲུག)","bt","975","+...-.-...-..."],["Bolivia","bo","591","+...-.-...-...."],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387","+...-..-...."],["Botswana","bw","267","+...-..-...-..."],["Bouvet Island","bv","47",""],["Brazil (Brasil)","br","55","+..-..-....-...."],["British Indian Ocean Territory","io","246","+...-...-...."],["British Virgin Islands","vg","1284","+.(...)...-...."],["Brunei","bn","673","+...-...-...."],["Bulgaria (България)","bg","359","+...(...)...-..."],["Burkina Faso","bf","226","+...-..-..-...."],["Burundi (Uburundi)","bi","257","+...-..-..-...."],["Cambodia (កម្ពុជា)","kh","855","+...-..-...-..."],["Cameroon (Cameroun)","cm","237","+...-....-...."],["Canada","ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238","+...(...)..-.."],["Caribbean Netherlands","bq","599","+...-...-....",1],["Cayman Islands","ky","1345","+.(...)...-...."],["Central African Republic (République centrafricaine)","cf","236","+...-..-..-...."],["Chad (Tchad)","td","235","+...-..-..-..-.."],["Chile","cl","56","+..-.-....-...."],["China (中国)","cn","86","+.. ..-........"],["Christmas Island","cx","61",""],["Cocos (Keeling) Islands","cc","61",""],["Colombia","co","57","+..(...)...-...."],["Comoros (‫جزر القمر‬‎)","km","269","+...-..-....."],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243","+...(...)...-..."],["Congo (Republic) (Congo-Brazzaville)","cg","242","+...-..-...-...."],["Cook Islands","ck","682","+...-..-..."],["Costa Rica","cr","506","+... ....-...."],["Côte d’Ivoire","ci","225","+...-..-...-..."],["Croatia (Hrvatska)","hr","385","+...-..-...-..."],["Cuba","cu","53","+..-.-...-...."],["Curaçao","cw","599","+...-...-....",0],["Cyprus (Κύπρος)","cy","357","+...-..-...-..."],["Czech Republic (Česká republika)","cz","420","+...(...)...-..."],["Denmark (Danmark)","dk","45","+.. .. .. .. .."],["Djibouti","dj","253","+...-..-..-..-.."],["Dominica","dm","1767","+.(...)...-...."],["Dominican Republic (República Dominicana)","do","1","+.(...)...-....",2,["809","829","849"]],["Ecuador","ec","593","+...-.-...-...."],["Egypt (‫مصر‬‎)","eg","20","+..(...)...-...."],["El Salvador","sv","503","+... ....-...."],["Equatorial Guinea (Guinea Ecuatorial)","gq","240","+...-..-...-...."],["Eritrea","er","291","+...-.-...-..."],["Estonia (Eesti)","ee","372","+...-...-...."],["Ethiopia","et","251","+...-..-...-...."],["Falkland Islands (Islas Malvinas)","fk","500","+...-....."],["Faroe Islands (Føroyar)","fo","298","+...-...-..."],["Fiji","fj","679","+...-..-....."],["Finland (Suomi)","fi","358","+... .. .... ...."],["France","fr","33","+.. . .. .. .. .."],["French Guiana (Guyane française)","gf","594","+...-.....-...."],["French Polynesia (Polynésie française)","pf","689","+...-..-..-.."],["French Southern and Antarctic Lands","tf","262",""],["Gabon","ga","241","+...-.-..-..-.."],["Gambia","gm","220","+...(...)..-.."],["Georgia (საქართველო)","ge","995","+...(...)...-..."],["Germany (Deutschland)","de","49","+.. ... ......."],["Ghana (Gaana)","gh","233","+...(...)...-..."],["Gibraltar","gi","350","+...-...-....."],["Greece (Ελλάδα)","gr","30","+..(...)...-...."],["Greenland (Kalaallit Nunaat)","gl","299","+...-..-..-.."],["Grenada","gd","1473","+.(...)...-...."],["Guadeloupe","gp","590","",0],["Guam","gu","1671","+.(...)...-...."],["Guatemala","gt","502","+... ....-...."],["Guernsey","gg","44",""],["Guinea (Guinée)","gn","224","+...-..-...-..."],["Guinea-Bissau (Guiné Bissau)","gw","245","+...-.-......"],["Guyana","gy","592","+...-...-...."],["Haiti","ht","509","+... ....-...."],["Heard Island and McDonald Islands","hm","672",""],["Honduras","hn","504","+...-....-...."],["Hong Kong (香港)","hk","852","+... .... ...."],["Hungary (Magyarország)","hu","36","+..(...)...-..."],["Iceland (Ísland)","is","354","+... ... ...."],["India (भारत)","in","91","+.. .....-....."],["Indonesia","id","62","+..-..-...-.."],["Iran (‫ایران‬‎)","ir","98","+..(...)...-...."],["Iraq (‫العراق‬‎)","iq","964","+...(...)...-...."],["Ireland","ie","353","+... .. ......."],["Isle of Man","im","44",""],["Israel (‫ישראל‬‎)","il","972","+...-.-...-...."],["Italy (Italia)","it","39","+.. ... ......",0],["Jamaica","jm","1876","+.(...)...-...."],["Japan (日本)","jp","81","+.. ... .. ...."],["Jersey","je","44",""],["Jordan (‫الأردن‬‎)","jo","962","+...-.-....-...."],["Kazakhstan (Казахстан)","kz","7","+. ... ...-..-..",1],["Kenya","ke","254","+...-...-......"],["Kiribati","ki","686","+...-..-..."],["Kosovo","xk","383",""],["Kuwait (‫الكويت‬‎)","kw","965","+...-....-...."],["Kyrgyzstan (Кыргызстан)","kg","996","+...(...)...-..."],["Laos (ລາວ)","la","856","+...-..-...-..."],["Latvia (Latvija)","lv","371","+...-..-...-..."],["Lebanon (‫لبنان‬‎)","lb","961","+...-.-...-..."],["Lesotho","ls","266","+...-.-...-...."],["Liberia","lr","231","+...-..-...-..."],["Libya (‫ليبيا‬‎)","ly","218","+...-..-...-..."],["Liechtenstein","li","423","+...(...)...-...."],["Lithuania (Lietuva)","lt","370","+...(...)..-..."],["Luxembourg","lu","352","+...(...)...-..."],["Macau (澳門)","mo","853","+...-....-...."],["Macedonia (FYROM) (Македонија)","mk","389","+...-..-...-..."],["Madagascar (Madagasikara)","mg","261","+...-..-..-....."],["Malawi","mw","265","+...-.-....-...."],["Malaysia","my","60","+.. ..-....-...."],["Maldives","mv","960","+...-...-...."],["Mali","ml","223","+...-..-..-...."],["Malta","mt","356","+...-....-...."],["Marshall Islands","mh","692","+...-...-...."],["Martinique","mq","596","+...(...)..-..-.."],["Mauritania (‫موريتانيا‬‎)","mr","222","+...-..-..-...."],["Mauritius (Moris)","mu","230","+...-...-...."],["Mayotte","yt","262",""],["Mexico (México)","mx","52","+..-..-..-...."],["Micronesia","fm","691","+...-...-...."],["Moldova (Republica Moldova)","md","373","+...-....-...."],["Monaco","mc","377","+...-..-...-..."],["Mongolia (Монгол)","mn","976","+...-..-..-...."],["Montenegro (Crna Gora)","me","382","+...-..-...-..."],["Montserrat","ms","1664","+.(...)...-...."],["Morocco (‫المغرب‬‎)","ma","212","+...-..-....-..."],["Mozambique (Moçambique)","mz","258","+...-..-...-..."],["Myanmar (Burma) (မြန်မာ)","mm","95","+..-...-..."],["Namibia (Namibië)","na","264","+...-..-...-...."],["Nauru","nr","674","+...-...-...."],["Nepal (नेपाल)","np","977","+...-..-...-..."],["Netherlands (Nederland)","nl","31","+.. .. ........"],["New Caledonia (Nouvelle-Calédonie)","nc","687","+...-..-...."],["New Zealand","nz","64","+.. ...-...-...."],["Nicaragua","ni","505","+...-....-...."],["Niger (Nijar)","ne","227","+...-..-..-...."],["Nigeria","ng","234","+...-..-...-.."],["Niue","nu","683","+...-...."],["Norfolk Island","nf","672","+...-...-..."],["North Korea (조선 민주주의 인민 공화국)","kp","850","+...-...-..."],["Northern Mariana Islands","mp","1670","+.(...)...-...."],["Norway (Norge)","no","47","+.. ... .. ..."],["Oman (‫عُمان‬‎)","om","968","+...-..-...-..."],["Pakistan (‫پاکستان‬‎)","pk","92","+.. ...-......."],["Palau","pw","680","+...-...-...."],["Palestine (‫فلسطين‬‎)","ps","970","+...-..-...-...."],["Panama (Panamá)","pa","507","+...-...-...."],["Papua New Guinea","pg","675","+...(...)..-..."],["Paraguay","py","595","+...(...)...-..."],["Peru (Perú)","pe","51","+..(...)...-..."],["Philippines","ph","63","+.. ... ...."],["Pitcairn Islands","pn","64",""],["Poland (Polska)","pl","48","+.. ...-...-..."],["Portugal","pt","351","+...-..-...-...."],["Puerto Rico","pr","1","+. (...) ...-....",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974","+...-....-...."],["Réunion (La Réunion)","re","262","+...-.....-...."],["Romania (România)","ro","40","+..-..-...-...."],["Russia (Россия)","ru","7","+. ... ...-..-..",0],["Rwanda","rw","250","+...(...)...-..."],["Saint Barthélemy (Saint-Barthélemy)","bl","590","",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869","+.(...)...-...."],["Saint Lucia","lc","1758","+.(...)...-...."],["Saint Martin (Saint-Martin (partie française))","mf","590","",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784","+.(...)...-...."],["Samoa","ws","685","+...-..-...."],["San Marino","sm","378","+...-....-......"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239","+...-..-....."],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966","+...-..-...-...."],["Senegal (Sénégal)","sn","221","+...-..-...-...."],["Serbia (Србија)","rs","381","+...-..-...-...."],["Seychelles","sc","248","+...-.-...-..."],["Sierra Leone","sl","232","+...-..-......"],["Singapore","sg","65","+.. ....-...."],["Sint Maarten","sx","1721","+.(...)...-...."],["Slovakia (Slovensko)","sk","421","+...(...)...-..."],["Slovenia (Slovenija)","si","386","+...-..-...-..."],["Solomon Islands","sb","677","+...-....."],["Somalia (Soomaaliya)","so","252","+...-.-...-..."],["South Africa","za","27","+..-..-...-...."],["South Georgia and the South Sandwich Islands","gs","500",""],["South Korea (대한민국)","kr","82","+..-..-...-...."],["South Sudan (‫جنوب السودان‬‎)","ss","211","+...-..-...-...."],["Spain (España)","es","34","+.. ... ... ..."],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94","+..-..-...-...."],["Sudan (‫السودان‬‎)","sd","249","+...-..-...-...."],["Suriname","sr","597","+...-...-..."],["Svalbard and Jan Mayen","sj","47",""],["Swaziland","sz","268","+...-..-..-...."],["Sweden (Sverige)","se","46","+.. .. ... .. .."],["Switzerland (Schweiz)","ch","41","+.. .. ... .. .."],["Syria (‫سوريا‬‎)","sy","963","+...-..-....-..."],["Taiwan (台灣)","tw","886","+...-....-...."],["Tajikistan","tj","992","+...-..-...-...."],["Tanzania","tz","255","+...-..-...-...."],["Thailand (ไทย)","th","66","+..-..-...-..."],["Timor-Leste","tl","670","+...-...-...."],["Togo","tg","228","+...-..-...-..."],["Tokelau","tk","690","+...-...."],["Tonga","to","676","+...-....."],["Trinidad and Tobago","tt","1868","+.(...)...-...."],["Tunisia (‫تونس‬‎)","tn","216","+...-..-...-..."],["Turkey (Türkiye)","tr","90","+.. ... ... .. .."],["Turkmenistan","tm","993","+...-.-...-...."],["Turks and Caicos Islands","tc","1649","+.(...)...-...."],["Tuvalu","tv","688","+...-....."],["U.S. Virgin Islands","vi","1340","+.(...)...-...."],["Uganda","ug","256","+...(...)...-..."],["Ukraine (Україна)","ua","380","+...(..)...-..-.."],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971","+...-.-...-...."],["United Kingdom","gb","44","+.. .... ......"],["United States","us","1","+. (...) ...-....",0],["United States Minor Outlying Islands","um","1","",2],["Uruguay","uy","598","+...-.-...-..-.."],["Uzbekistan (Oʻzbekiston)","uz","998","+...-..-...-...."],["Vanuatu","vu","678","+...-....."],["Vatican City (Città del Vaticano)","va","39","+.. .. .... ....",1],["Venezuela","ve","58","+..(...)...-...."],["Vietnam (Việt Nam)","vn","84","+..-..-....-..."],["Wallis and Futuna","wf","681","+...-..-...."],["Western Sahara","eh","212","+...-..-...."],["Yemen (‫اليمن‬‎)","ye","967","+...-.-...-..."],["Zambia","zm","260","+...-..-...-...."],["Zimbabwe","zw","263","+...-.-......"]],a={},r={},o=function(e,t,n){t in a||(a[t]=[]);var r=n||0;a[t][r]=e},i=0;i<n.length;i++){var s=n[i];if(n[i]={name:s[0],iso2:s[1],dialCode:s[2],priority:s[4]||0},s[3]&&(n[i].format=s[3]),s[5]){n[i].hasAreaCodes=!0;for(var l=0;l<s[5].length;l++){var c=s[2]+s[5][l];o(s[1],c)}}r[n[i].iso2]=i,o(s[1],s[2],s[4])}t.exports={allCountries:n,iso2Lookup:r,allCountryCodes:a}}),kt=yt(),St={hu_HU:{"06":"+36",36:"+36"},hr_HR:{0:"+385"},ro_RO:{0:"+40"}},$t=(e,t)=>{const n=St[e]||{};var a=0==(t=(t||"").trim()).indexOf("+");if(!(t=t.replace(/\D/g,"")).length)return null;a&&(t=`+${t}`),0==t.indexOf("00")&&(t=`+${t.substring(2)}`);for(let o=0;o<Object.keys(n).length;o++){let e=Object.keys(n)[o];if(0==t.indexOf(e))return`${n[e]}.${t.substring(e.length)}`}for(let o=0;o<kt.allCountries.length;o++){let{dialCode:e}=kt.allCountries[o];if(0==t.indexOf(`+${e}`))return`+${e}.${t.substring(e.length+1)}`}const r=Object.keys(n)[0];return`${r?n[r]:"+36"}.${t}`};function xt(e,t,n){if(e)return e.eye_examination_process?e.eye_examination_process["@id"]+"-"+(t?t["@id"]:"NO_CALENDAR")+"-"+n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate():null}function wt(e,t){return"embedded"!==e&&"embedded-safe"!==e||"large"==t?"col-sm-10 col-md-8":"medium"===t?"col-sm-10":""}function Ct(e){function t(t,n,a){e.dispatch("eyeExaminationProcesses/set",function(e,t,n){return e.filter(function(e){for(let a=0;a<(t||[]).length;a++)if(rt(e,t[a],n))return!0;return!1})}(t,n,a))}e.on("@init",()=>({eyeExaminationProcesses:[],eyeExaminationProcessId:null,unfilteredEyeExaminationProcesses:[]})),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:t,appointment:n,currentStep:a,store:r},o)=>{if(1==o.length){var i,s,l;const t="storeSelection"===a||"process"===a,c=!(null==n?void 0:n.eye_examination_process),u=(null==n||null===(i=n.eye_examination_process)||void 0===i?void 0:i["@id"])!==o[0]["@id"],d=(null===(s=o[0])||void 0===s||null===(s=s.chain)||void 0===s?void 0:s["@id"])===(null==r||null===(l=r.chain)||void 0===l?void 0:l["@id"]);t&&d&&(c||u)&&(e.dispatch("appointment/set",{eye_examination_process:o[0]}),e.dispatch("currentStep/eyeExaminationProcessSelected"),e.dispatch("currentStep/next"))}return{eyeExaminationProcesses:o}}),e.on("eyeExaminationProcessId/set",(e,t)=>({eyeExaminationProcessId:t})),e.on("unfilteredEyeExaminationProcesses/set",(e,t)=>({unfilteredEyeExaminationProcesses:t})),e.on("store/set",async({eyeExaminationProcessId:n},a)=>{var r=null;n?null==(r=[await Ke.get(e,`eye_examination_processes/${n}`)].filter(e=>e))[0].length&&e.dispatch("moduleState/set","error.noLength"):0==(r=await Ke.get(e,`eye_examination_processes?hasLength&chain=${a.chain["@id"]}`)).length&&e.dispatch("moduleState/set","error.noProcessOrLength"),e.dispatch("unfilteredEyeExaminationProcesses/set",r);const{calendars:o,calendarRoleCheckMode:i}=e.get();o&&o.length>0&&o.every(e=>{var t;return(null==e||null===(t=e.store)||void 0===t?void 0:t["@id"])===a["@id"]})&&t(r,o,i)}),e.on("calendars/set",async({unfilteredEyeExaminationProcesses:n,store:a},r)=>{if(!r||0===r.length)return;if(!a)return;if(!r.every(e=>{var t;return(null==e||null===(t=e.store)||void 0===t?void 0:t["@id"])===a["@id"]}))return;if(!n||0===n.length)return;const{calendarRoleCheckMode:o}=e.get();t(n,r,o)})}var jt=["storeSelection","process","calendar","appointment","customer","summary"];function zt(e){var t=(e,t)=>jt.filter(n=>-1!=e.indexOf(n)&&n!=t),n=(e,t)=>jt.filter(n=>-1!=e.indexOf(n)||n==t);e.on("@init",()=>({currentStep:"storeSelection",availableSteps:jt,calendarStepShouldBeHidden:!1,showFirstAvailableUserItem:!0})),e.on("currentStep/set",({availableSteps:e,currentStep:t,rootElement:n},a)=>(n.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:-1!=e.indexOf(a)?a:t})),e.on("calendarStepShouldBeHidden/set",({availableSteps:e},n)=>({calendarStepShouldBeHidden:n,availableSteps:t(e,"calendar")})),e.on("showFirstAvailableUserItem/set",(e,t)=>({showFirstAvailableUserItem:t})),e.on("currentStep/next",({currentStep:e,availableSteps:t,rootElement:n})=>{var a=t.indexOf(e);return n.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:a<t.length-1?t[a+1]:e}}),e.on("currentStep/previous",({currentStep:e,availableSteps:t,rootElement:n})=>{var a=t.indexOf(e);return n.querySelector(".cvio-ab-content").scrollTop=0,{currentStep:a>0?t[a-1]:e}}),e.on("eyeExaminationProcesses/set",({eyeExaminationProcesses:e,availableSteps:a,currentStep:r,rootElement:o})=>1==e.length?(o.querySelector(".cvio-ab-content").scrollTop=0,"process"==r&&(r=a.filter(e=>"storeSelection"!=e&&"process"!=e)[0]),{availableSteps:a=t(a,"process"),currentStep:r}):{availableSteps:a=n(a,"process")}),e.on("currentStep/eyeExaminationProcessSelected",({availableSteps:e,appointment:t,calendars:a,currentStep:r,calendarStepShouldBeHidden:o,calendarRoleCheckMode:i})=>{if(!o)return ot({appointment:t,calendars:a,calendarRoleCheckMode:i}),{availableSteps:n(e,"calendar")}}),e.on("store/setStoreSelection/set",({availableSteps:e,currentStep:n},a)=>{if("no"==a)return{availableSteps:e=t(e,"storeSelection"),currentStep:"storeSelection"==n?e[0]:n}})}function Pt(e){e.on("@init",()=>({appointment:{customer:{}}})),e.on("appointment/set",({appointment:e},t)=>({appointment:Object.assign(e,t)})),e.on("showAppointmentComment/set",(e,t)=>({showAppointmentComment:t})),e.on("appointmentCommentRequired/set",(e,t)=>({appointmentCommentRequired:t})),e.on("constantAppointmentCommentText/set",(e,t)=>({constantAppointmentCommentText:t})),e.on("currentStep/set",({appointment:e},t)=>{if("storeSelection"===t)return{appointment:{customer:{}}}}),e.on("store/set",({appointment:t,store:n,currentStep:a},r)=>{if(n&&n["@id"]!==r["@id"])return e.dispatch("eyeExaminationProcesses/set",[]),e.dispatch("unfilteredEyeExaminationProcesses/set",[]),e.dispatch("currentStep/set","storeSelection"),{appointment:{customer:{}}}})}function Dt(e){e.on("@init",()=>({api:{headers:{Accept:"application/ld+json"},path:null}})),e.on("api/addHeaders",({api:e},t)=>(e.headers=Object.assign(e.headers,t),{api:e})),e.on("api/setPath",({api:e},t)=>(e.path=t,{api:e}))}function Tt(e){e.on("@init",()=>({language:navigator.language,translationOverrides:{}})),e.on("language/set",(e,t)=>({language:t})),e.on("translationOverrides/set",(e,t)=>({translationOverrides:t}))}function At(e,{visible:t}={visible:!1}){return n=>{n.on("@init",()=>({[e]:t})),n.on(`${e}/set`,(t,n)=>({[e]:n}))}}var Mt=["idle","loading","error","success","error.storeCode","error.403","error.noLength","error.storeEmail","error.missingConfiguredProcessId","error.noProcessOrLength"];function Et(e){e.on("@init",()=>({moduleState:"loading"})),e.on("moduleState/set",({moduleState:t},n)=>{if(0!==t.indexOf("error"))return"idle"==(n=-1!=Mt.indexOf(n)?n:t)?e.dispatch("globalModalState/set",!1):e.dispatch("globalModalState/set",!0),{moduleState:n}}),e.on("eyeExaminationProcesses/set",({moduleState:t},n)=>{"idle"!==t&&(e.dispatch("moduleState/set","idle"),e.dispatch("bookerInit"))})}function Ft(e){async function t(t,n){try{const a=await Ke.get(e,"all"===t?"appointment_calendars":`appointment_calendars?store.chain=${n["@id"]}`),r={};for(const e of a)e.user&&e.store&&e.online_reservation_allowed&&(r[e.store["@id"]]=e.store);e.dispatch("stores/set",Object.values(r).sort((e,t)=>e.name.localeCompare(t.name)))}catch(a){403==a.code?e.dispatch("moduleState/set","error.403"):e.dispatch("moduleState/set","error.stores")}}e.on("@init",()=>({store:null,storeSelection:"no",stores:null,storeCode:null})),e.on("store/set",(t,n)=>(n.email||e.dispatch("moduleState/set","error.storeEmail"),{store:n})),e.on("stores/set",(e,t)=>({stores:t})),e.on("storeCode/set",(e,t)=>({storeCode:t})),e.on("store/setStoreSelection/set",({storeCode:n},a)=>("no"===a||"onlyInSameChain"===a?async function(n,a){try{const r=await Ke.get(e,`stores?code=${n}`);if(null==r[0])return void e.dispatch("moduleState/set","error.storeCode");"onlyInSameChain"===a?t(a,r[0].chain):e.dispatch("store/set",r[0])}catch(r){403==r.code?e.dispatch("moduleState/set","error.403"):e.dispatch("moduleState/set","error.storeCode")}}(n,a):"all"===a&&t(a),{storeSelection:a}))}function Nt(e){e.on("@init",()=>({calendars:[],calendarRoleCheckMode:"hierachical"})),e.on("calendars/set",(e,t)=>null!==t?{calendars:t.filter(({user:e})=>e)}:{calendars:null}),e.on("calendarRoleCheckMode/set",(e,t)=>({calendarRoleCheckMode:t})),e.on("store/set",async(t,n)=>{e.dispatch("calendars/set",null);var a=await Ke.get(e,`appointment_calendars?groups[]=userProfilePictureRead&store=${n["@id"]}`);e.dispatch("calendars/set",a)}),e.on("currentStep/set",(e,t)=>{if("storeSelection"===t)return{calendars:null}})}function Ot(e){e.on("@init",()=>{var e=/* @__PURE__ */new Date;return e.setDate(e.getDate()+1),{selectedDate:e}}),e.on("selectedDate/set",(e,t)=>({selectedDate:t})),e.on("currentStep/next",e=>{const{firstEligibleTime:t}=e;if("appointment"==e.currentStep)return{selectedDate:t}})}var It=e=>{const{initialNextFreeSlotsLoading:t,selectedDate:n,nextFreeSlots:a,appointment:r,selectedCalendar:o}=e.get();if(e.dispatch("nextFreeSlotLoading/set",!1),!t)return;const i=xt(r,o,n);if(a[i]&&("complete"==a[i].status||"incomplete"==a[i].status))return;const s=new Date(n);for(;a[xt(r,o,s)];){const t=a[xt(r,o,s)];if("complete"==t.status||"incomplete"==t.status)return void e.dispatch("selectedDate/set",s);s.setDate(s.getDate()+1)}},Lt=async(e,t)=>{const{appointment:n,selectedCalendar:a,firstEligibleTime:r,calendarRange:o}=e.get();if(e.dispatch("nextFreeSlotLoading/set",!0),!n.eye_examination_process||Rt(e,t)||(e=>{const{appointment:t,selectedCalendar:n,nextFreeSlots:a,selectedDate:r,calendarRange:o}=e,i=r.getFullYear(),s=r.getMonth(),l="fiveDays"==o?r.getDate()+7:new Date(i,s+1,0).getDate();for(let c=r.getDate();c<=l;c++){const e=a[xt(t,n,new Date(i,s,c))];if(null==e||"incomplete"==e.status)return!1}return!0})(e.get()))return void It(e);const i=await Ke.get(e,`appointment_next_free_slots?${Bt(e,t)}`);if(0==i.length){const n=new Date(t);return n.setDate(t.getDate()+6),e.dispatch("nextFreeSlots/add",Ht(e,t,n)),Lt(e,n)}const s=Ht(e,t,new Date(i[i.length-1].start));var l=null;for(let u=0;u<i.length;u++){const e=i[u],t=new Date(e.start),o=xt(n,a,t);if(!(t<r)){for(let t=0;t<(s[o].slots||[]).length;t++)if(s[o].slots[t]["@id"]==e["@id"]){s[o].status="complete";continue}var c=!1;for(let t of s[o].slots||[])if(t["@id"]==e["@id"]||t.start==e.start){c=!0;break}c||("empty"==s[o].status&&(s[o].status="incomplete"),s[o].slots||(s[o].slots=[]),s[o].slots.push(e),l&&l!=o&&(s[l].status="complete"),l!=o&&(l=o))}}e.dispatch("nextFreeSlots/add",s),(async(e,t)=>{const{selectedDate:n,calendarRange:a}=e.get();if("fiveDays"==a)return void It(e);const r=n.getFullYear(),o=n.getMonth(),i=Object.keys(t).sort().pop(),s=t[i],l=i.match(/(?<=^(?:[^-]*-){2})(.*)/)[1].split("-");var c=new Date(l[0],parseInt(l[1])-1,parseInt(l[2]));"incomplete"!==s.status&&(c=new Date(l[0],parseInt(l[1])-1,parseInt(l[2])+1)),c<=new Date(r,o+1,0)?Lt(e,c):It(e)})(e,s)},Rt=(e,t)=>(t-e.get().selectedDate)/1e3/60/60/24>90,Bt=(e,t)=>{const{appointment:n,selectedCalendar:a}=e.get(),r={process:n.eye_examination_process["@id"],start:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};return a?r.calendar=a["@id"]:r.store=e.get().store["@id"],Object.keys(r).map(e=>`${e}=${r[e]}`).join("&")},Ht=(e,t,n)=>{const{appointment:a,selectedCalendar:r,nextFreeSlots:o}=e.get(),i=new Date(t);i.setHours(0),i.setMinutes(0);const s={};for(;i<=n;){const e=xt(a,r,i);s[e]=o[e]||{status:"empty"},i.setDate(i.getDate()+1)}return s};function Ut(e){e.on("@init",()=>{const e=/* @__PURE__ */new Date;return e.setDate(e.getDate()+1),e.setHours(0),e.setMinutes(0),e.setSeconds(0),{nextFreeSlots:{},firstEligibleDate:e,firstEligibleTime:e,autoselectNextFreeSlot:!1,nextFreeSlotLoading:!1}}),e.on("firstEligibleTime/set",(t,n)=>{const a=/* @__PURE__ */new Date;if("now"==n)return e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a};if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),"tomorrow"==n)return{firstEligibleDate:a,firstEligibleTime:a};if("tomorrowNoon"==n){const e=new Date(a);return e.setHours(12),{firstEligibleDate:a,firstEligibleTime:e}}if("plus24Hours"==n){const e=/* @__PURE__ */new Date;return e.setDate(e.getDate()+1),{firstEligibleDate:a,firstEligibleTime:e}}return"dayAfterTomorrow"==n?(a.setDate(a.getDate()+1),e.dispatch("selectedDate/set",a),{firstEligibleDate:a,firstEligibleTime:a}):void 0}),e.on("selectedDate/set",async t=>{Lt(e,t.selectedDate)}),e.on("bookerInit",async t=>{"appointment"==t.currentStep&&(e.dispatch("initialNextFreeSlotsLoading/set",!0),Lt(e,t.selectedDate))}),e.on("currentStep/next",async t=>{"appointment"==t.currentStep&&Lt(e,t.selectedDate)}),e.on("autoselectNextFreeSlot/set",(e,t)=>({autoselectNextFreeSlot:t})),e.on("nextFreeSlots/add",({nextFreeSlots:t,autoselectNextFreeSlot:n},a)=>{const r={nextFreeSlots:Object.assign(t,a)};if(!n)return r;for(let o in t)if("empty"!=t[o].status&&t[o].slots.length>0){e.dispatch("appointment/selectSlot",t[o].slots[0]),r.autoselectNextFreeSlot=!1;break}return r}),e.on("nextFreeSlotLoading/set",(e,t)=>({nextFreeSlotLoading:t})),e.on("store/set",()=>({nextFreeSlots:{}}))}var Gt=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function qt(e){e.on("@init",()=>({customerForm:{},commentError:null,customerFormGlobalErrors:[]})),e.on("customerForm/set",({customerForm:e,customerFormGlobalErrors:t,commentError:n},a)=>({customerForm:Object.assign(e,a.customerForm||{}),customerFormGlobalErrors:a.customerFormGlobalErrors||t,commentError:void 0===a.commentError?n:a.commentError})),e.on("customerForm/validateAndNext",({customerForm:t,appointment:n,appointmentCommentRequired:a})=>{const{customer:r}=n;var o=!1,i=null;if(a&&!(n.comment||"").trim()&&(o=!0,i="This field is required."),Object.keys(t).forEach(e=>{var n,a;t[e].errors=[],n=r[e],a=t[e],"string"==typeof n&&/(<(script|iframe|embed|object|svg|math|img|video|source|style|link|track|applet|bgsound|regexer|meta|base|form)|<[a-z]+\w.on)/i.test(n)&&a.errors.push("Suspicious input detected: HTML tags are not allowed"),t[e].required&&((e,t)=>{null!=e&&""!==e||t.errors.push("This field is required.")})(r[e],t[e]),"email"==e&&((e,t)=>{null!=e&&""!==e&&(Gt.test(e.trim().toLowerCase())||t.errors.push("Invalid email address."))})(r[e],t[e]),t[e].errors.length&&(o=!0)}),o)return{customerForm:t,customerFormGlobalErrors:[],commentError:i};e.dispatch("currentStep/next")})}function Wt(e){e.on("@init",()=>({headerTitle:null})),e.on("headerTitle/set",(e,t)=>({headerTitle:t}))}function Vt(e){e.on("@init",()=>({calendarRange:"fiveDays",timeSlotMode:"singleColumn"})),e.on("timeSelectionUi/timeSlotMode/set",(e,t)=>({timeSlotMode:t})),e.on("timeSelectionUi/calendarRange/set",(e,t)=>({calendarRange:t}))}function Jt(e){e.on("@init",()=>({priceComment:null})),e.on("priceComment/set",(e,t)=>({priceComment:t}))}function Kt(e){e.on("@init",()=>({showPrice:!0})),e.on("showPrice/set",(e,t)=>({showPrice:t}))}function Yt(e){e.on("@init",()=>({showExaminerName:null})),e.on("showExaminerName/set",(e,t)=>({showExaminerName:t}))}function Zt(e){e.on("@init",()=>({booking:!1})),e.on("booking/set",(e,t)=>({booking:t}))}function Xt(e){e.on("@init",()=>({country:"HU"})),e.on("country/set",(e,t)=>({country:t}))}function Qt(e){e.on("@init",()=>({selectedCalendar:null})),e.on("selectedCalendar/set",(e,t)=>({selectedCalendar:t})),e.on("store/set",()=>({selectedCalendar:null}))}function en(e){e.on("@init",()=>({privacyPolicy:null,privacyPolicyLink:null,medicalConsent:"explicit"})),e.on("bookerInit",async t=>{var n=await Ke.get(e,`privacy_policies?chain=${t.store.chain["@id"]}`);for(let a=0;a<n.length;a++)if(new Date(n[a].valid_until)>/* @__PURE__ */new Date)return e.dispatch("privacyPolicy/set",n[a]);throw new Error("Could not find privacy policy")}),e.on("privacyPolicy/set",(e,t)=>({privacyPolicy:t})),e.on("privacyPolicyLink/set",(e,t)=>({privacyPolicyLink:t})),e.on("medicalConsent/set",(e,t)=>({medicalConsent:t}))}function tn(e){e.on("@init",()=>({locationName:null,locationAddress:null,showLocation:!0})),e.on("locationName/set",(e,t)=>({locationName:t})),e.on("locationAddress/set",(e,t)=>({locationAddress:t})),e.on("showLocation/set",(e,t)=>({showLocation:t}))}function nn(e){e.on("@init",()=>({slotSelection:{inProgress:!1,errorMessage:null}})),e.on("slotSelection/inProgress/set",({slotSelection:e},t)=>({slotSelection:{...e,inProgress:t}})),e.on("slotSelection/errorMessage/set",({slotSelection:e},t)=>({slotSelection:{...e,errorMessage:t}})),e.on("appointment/selectSlot",async(t,n)=>{const{appointment:a,calendars:r,currentStep:o}=t;if("appointment"===o){var i=null;for(let e=0;e<r.length;e++)if(n.calendar["@id"]==r[e]["@id"])i=r[e];if(!i)throw new Error("Could not find calendar");e.dispatch("slotSelection/inProgress/set",!0);try{const r={title:nt("Event draft",{},t),calendar:i["@id"],status:"draft",start:n.start,end:n.end,source:"online"},o={...t,dispatch:e.dispatch};var s=(a.id?await Ke.put(o,a.id,r):await Ke.post(o,"appointment_events",r))["@id"];e.dispatch("slotSelection/errorMessage/set",null)}catch(l){return void e.dispatch("slotSelection/errorMessage/set","Nem sikerült a foglalás válasszon másik időpontot vagy kezdje újra.")}finally{e.dispatch("slotSelection/inProgress/set",!1)}e.dispatch("appointment/set",{start:n.start,end:n.end,calendar:i,id:s}),e.dispatch("currentStep/next")}})}function an(e){e.on("@init",()=>({style:"fullScreen"})),e.on("style/set",(e,t)=>({style:t}))}function rn(e){e.on("@init",()=>({rootElement:null})),e.on("rootElement/set",(e,t)=>({rootElement:t}))}function on(e){e.on("@init",()=>({parentWidth:null})),e.on("parentWidth/set",(e,t)=>({parentWidth:t}))}var sn=/* @__PURE__ */k((e,t)=>{var n="__lodash_hash_undefined__",a=9007199254740991,r="[object Arguments]",o="[object Boolean]",i="[object Date]",s="[object Function]",l="[object GeneratorFunction]",c="[object Map]",u="[object Number]",d="[object Object]",p="[object Promise]",m="[object RegExp]",h="[object Set]",f="[object String]",v="[object Symbol]",_="[object WeakMap]",g="[object ArrayBuffer]",b="[object DataView]",y="[object Float32Array]",k="[object Float64Array]",S="[object Int8Array]",$="[object Int16Array]",x="[object Int32Array]",w="[object Uint8Array]",C="[object Uint8ClampedArray]",j="[object Uint16Array]",z="[object Uint32Array]",P=/\w*$/,D=/^\[object .+?Constructor\]$/,T=/^(?:0|[1-9]\d*)$/,A={};A[r]=A["[object Array]"]=A[g]=A[b]=A[o]=A[i]=A[y]=A[k]=A[S]=A[$]=A[x]=A[c]=A[u]=A[d]=A[m]=A[h]=A[f]=A[v]=A[w]=A[C]=A[j]=A[z]=!0,A["[object Error]"]=A[s]=A[_]=!1;var M="object"==typeof global&&global&&global.Object===Object&&global,E="object"==typeof self&&self&&self.Object===Object&&self,F=M||E||Function("return this")(),N="object"==typeof e&&e&&!e.nodeType&&e,O=N&&"object"==typeof t&&t&&!t.nodeType&&t,I=O&&O.exports===N;function L(e,t){return e.set(t[0],t[1]),e}function R(e,t){return e.add(t),e}function B(e,t,n,a){var r=-1,o=e?e.length:0;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}function H(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(ie){}return t}function U(e){var t=-1,n=Array(e.size);return e.forEach(function(e,a){n[++t]=[a,e]}),n}function G(e,t){return function(n){return e(t(n))}}function q(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var W,V=Array.prototype,J=Function.prototype,K=Object.prototype,Y=F["__core-js_shared__"],Z=(W=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",X=J.toString,Q=K.hasOwnProperty,ee=K.toString,te=RegExp("^"+X.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=I?F.Buffer:void 0,ae=F.Symbol,re=F.Uint8Array,oe=G(Object.getPrototypeOf,Object),se=Object.create,le=K.propertyIsEnumerable,ce=V.splice,ue=Object.getOwnPropertySymbols,de=ne?ne.isBuffer:void 0,pe=G(Object.keys,Object),me=Ie(F,"DataView"),he=Ie(F,"Map"),fe=Ie(F,"Promise"),ve=Ie(F,"Set"),_e=Ie(F,"WeakMap"),ge=Ie(Object,"create"),be=Ue(me),ye=Ue(he),ke=Ue(fe),Se=Ue(ve),$e=Ue(_e),xe=ae?ae.prototype:void 0,we=xe?xe.valueOf:void 0;function Ce(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function je(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function ze(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function Pe(e){this.__data__=new je(e)}function De(e,t){var n=qe(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&We(e)}(e)&&Q.call(e,"callee")&&(!le.call(e,"callee")||ee.call(e)==r)}(e)?function(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}(e.length,String):[],a=n.length,o=!!a;for(var i in e)!t&&!Q.call(e,i)||o&&("length"==i||Be(i,a))||n.push(i);return n}function Te(e,t,n){var a=e[t];Q.call(e,t)&&Ge(a,n)&&(void 0!==n||t in e)||(e[t]=n)}function Ae(e,t){for(var n=e.length;n--;)if(Ge(e[n][0],t))return n;return-1}function Me(e,t,n,a,p,_,D){var T;if(a&&(T=_?a(e,p,_,D):a(e)),void 0!==T)return T;if(!Ke(e))return e;var M=qe(e);if(M){if(T=function(e){var t=e.length,n=e.constructor(t);t&&"string"==typeof e[0]&&Q.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!t)return function(e,t){var n=-1,a=e.length;t||(t=Array(a));for(;++n<a;)t[n]=e[n];return t}(e,T)}else{var E=Re(e),F=E==s||E==l;if(Ve(e))return function(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}(e,t);if(E==d||E==r||F&&!_){if(H(e))return _?e:{};if(T=function(e){return"function"!=typeof e.constructor||He(e)?{}:(t=oe(e),Ke(t)?se(t):{});var t}(F?{}:e),!t)return function(e,t){return Ne(e,Le(e),t)}(e,function(e,t){return e&&Ne(t,Ye(t),e)}(T,e))}else{if(!A[E])return _?e:{};T=function(e,t,n,a){var r=e.constructor;switch(t){case g:return Fe(e);case o:case i:return new r(+e);case b:return function(e,t){var n=t?Fe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,a);case y:case k:case S:case $:case x:case w:case C:case j:case z:return function(e,t){var n=t?Fe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}(e,a);case c:return function(e,t,n){return B(t?n(U(e),!0):U(e),L,new e.constructor)}(e,a,n);case u:case f:return new r(e);case m:return function(e){var t=new e.constructor(e.source,P.exec(e));return t.lastIndex=e.lastIndex,t}(e);case h:return function(e,t,n){return B(t?n(q(e),!0):q(e),R,new e.constructor)}(e,a,n);case v:return s=e,we?Object(we.call(s)):{}}var s}(e,E,Me,t)}}D||(D=new Pe);var N=D.get(e);if(N)return N;if(D.set(e,T),!M)var O=n?function(e){return function(e,t,n){var a=t(e);return qe(e)?a:function(e,t){for(var n=-1,a=t.length,r=e.length;++n<a;)e[r+n]=t[n];return e}(a,n(e))}(e,Ye,Le)}(e):Ye(e);return function(e,t){for(var n=-1,a=e?e.length:0;++n<a&&!1!==t(e[n],n,e););}(O||e,function(r,o){O&&(r=e[o=r]),Te(T,o,Me(r,t,n,a,o,e,D))}),T}function Ee(e){return!(!Ke(e)||(t=e,Z&&Z in t))&&(Je(e)||H(e)?te:D).test(Ue(e));var t}function Fe(e){var t=new e.constructor(e.byteLength);return new re(t).set(new re(e)),t}function Ne(e,t,n,a){n||(n={});for(var r=-1,o=t.length;++r<o;){var i=t[r],s=a?a(n[i],e[i],i,n,e):void 0;Te(n,i,void 0===s?e[i]:s)}return n}function Oe(e,t){var n,a,r=e.__data__;return("string"==(a=typeof(n=t))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==n:null===n)?r["string"==typeof t?"string":"hash"]:r.map}function Ie(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return Ee(n)?n:void 0}Ce.prototype.clear=function(){this.__data__=ge?ge(null):{}},Ce.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Ce.prototype.get=function(e){var t=this.__data__;if(ge){var a=t[e];return a===n?void 0:a}return Q.call(t,e)?t[e]:void 0},Ce.prototype.has=function(e){var t=this.__data__;return ge?void 0!==t[e]:Q.call(t,e)},Ce.prototype.set=function(e,t){return this.__data__[e]=ge&&void 0===t?n:t,this},je.prototype.clear=function(){this.__data__=[]},je.prototype.delete=function(e){var t=this.__data__,n=Ae(t,e);return!(n<0)&&(n==t.length-1?t.pop():ce.call(t,n,1),!0)},je.prototype.get=function(e){var t=this.__data__,n=Ae(t,e);return n<0?void 0:t[n][1]},je.prototype.has=function(e){return Ae(this.__data__,e)>-1},je.prototype.set=function(e,t){var n=this.__data__,a=Ae(n,e);return a<0?n.push([e,t]):n[a][1]=t,this},ze.prototype.clear=function(){this.__data__={hash:new Ce,map:new(he||je),string:new Ce}},ze.prototype.delete=function(e){return Oe(this,e).delete(e)},ze.prototype.get=function(e){return Oe(this,e).get(e)},ze.prototype.has=function(e){return Oe(this,e).has(e)},ze.prototype.set=function(e,t){return Oe(this,e).set(e,t),this},Pe.prototype.clear=function(){this.__data__=new je},Pe.prototype.delete=function(e){return this.__data__.delete(e)},Pe.prototype.get=function(e){return this.__data__.get(e)},Pe.prototype.has=function(e){return this.__data__.has(e)},Pe.prototype.set=function(e,t){var n=this.__data__;if(n instanceof je){var a=n.__data__;if(!he||a.length<199)return a.push([e,t]),this;n=this.__data__=new ze(a)}return n.set(e,t),this};var Le=ue?G(ue,Object):function(){return[]},Re=function(e){return ee.call(e)};function Be(e,t){return!!(t=null==t?a:t)&&("number"==typeof e||T.test(e))&&e>-1&&e%1==0&&e<t}function He(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||K)}function Ue(e){if(null!=e){try{return X.call(e)}catch(ie){}try{return e+""}catch(ie){}}return""}function Ge(e,t){return e===t||e!=e&&t!=t}(me&&Re(new me(/* @__PURE__ */new ArrayBuffer(1)))!=b||he&&Re(new he)!=c||fe&&Re(fe.resolve())!=p||ve&&Re(new ve)!=h||_e&&Re(new _e)!=_)&&(Re=function(e){var t=ee.call(e),n=t==d?e.constructor:void 0,a=n?Ue(n):void 0;if(a)switch(a){case be:return b;case ye:return c;case ke:return p;case Se:return h;case $e:return _}return t});var qe=Array.isArray;function We(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}(e.length)&&!Je(e)}var Ve=de||function(){return!1};function Je(e){var t=Ke(e)?ee.call(e):"";return t==s||t==l}function Ke(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ye(e){return We(e)?De(e):function(e){if(!He(e))return pe(e);var t=[];for(var n in Object(e))Q.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}t.exports=function(e){return Me(e,!0,!0)}}),ln=/* @__PURE__ */S(sn());function cn(e){e.on("bookerInit",e=>({intialStoreContent:(0,ln.default)(e)})),e.on("resetStore",({intialStoreContent:e})=>(0,ln.default)(e))}function un(e){e.on("@init",()=>({showProcessLength:!0})),e.on("showProcessLength/set",(e,t)=>({showProcessLength:t}))}function dn(e){e.on("@init",()=>({confirmationType:"email"})),e.on("confirmationType/set",(e,t)=>({confirmationType:t}))}function pn(e){e.on("@init",()=>({reminderType:"email"})),e.on("reminderType/set",(e,t)=>({reminderType:t}))}function mn(e){e.on("@init",()=>({initialNextFreeSlotsLoading:!0})),e.on("initialNextFreeSlotsLoading/set",(e,t)=>({initialNextFreeSlotsLoading:t})),e.on("nextFreeSlotLoading/set",(e,t)=>{if(!t)return{initialNextFreeSlotsLoading:!1}}),e.on("currentStep/next",e=>{if("appointment"==e.currentStep)return{initialNextFreeSlotsLoading:!0}})}var hn=At("closeConfirmModalState"),fn=At("globalModalState",{visible:!0}),vn=At("privacyPolicyModalState"),_n=At("detailedDescriptionModalState"),gn=e=>{const{currentStep:t,availableSteps:n,dispatch:a,booking:r}=We("currentStep","availableSteps","booking");return Xe`
    <button type="button" onClick=${()=>a("currentStep/previous")}
      class="${t==n[0]||r?"invisible":""} btn btn-outline-light">
      ←
    </button>
  `},bn=()=>Xe`
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
    </div>
  `,yn=e=>{const t=We(e.modalStateStore),n=t[e.modalStateStore],[a,r]=me(!1),[o,i]=me(!1),[s,l]=me(!1);n&&!a&&(i(!0),setTimeout(()=>{l(!0),r(!0)},0)),!n&&a&&(l(!1),setTimeout(()=>{i(!1),r(!1)},100));return Xe`
    <div class="modal text-dark fade ${s?"show":""}" tabindex="-1" style="${o?"display: block;":""}">
      <div class="modal-dialog ${e.modalClasses||""}">
        <div class="modal-content">
          ${e.title?Xe`
            <div class="${e.headerClasses||""} modal-header">
              <h5 class="modal-title">${nt(e.title)}</h5>
            </div>
          `:""}
          <div class="${e.contentClasses||""} modal-body">
            ${e.content?Xe`<p>${nt(e.content)}</p>`:Xe`<${bn}/>`}
          </div>
          ${e.approveButtonLabel||e.cancelButtonLabel?Xe`
            <div class="modal-footer">
              ${e.cancelButtonLabel?Xe`
                <button type="button" class="btn btn-secondary" onClick=${()=>t.dispatch(`${e.modalStateStore}/set`,!1)}>
                  ${nt(e.cancelButtonLabel)}
                </button>
              `:""}
              ${e.approveButtonLabel?Xe`
                <button type="button" class="btn btn-primary  ${e.approveButtonClasses||""}"
                  onClick=${e.onApprove}>
                  ${nt(e.approveButtonLabel)}
                </button>
              `:""}
            </div>
          `:""}
        </div>
      </div>
    </div>
  `},kn=e=>{const t=We("appointment","api"),{dispatch:n}=t;return Xe`
    <button type="button" class="btn btn-outline-light" onClick=${()=>n("closeConfirmModalState/set",!0)}>X</button>
    <${yn} modalStateStore="closeConfirmModalState"
      title="Are you sure you want to cancel this appointment?"
      content="All inputed data will be lost."
      cancelButtonLabel="No, continue editing appointment"
      approveButtonLabel="Cancel appointment"
      onApprove=${async()=>{const{appointment:e}=t;e.id&&await Ke.put(t,e.id,{cancelled_at:/* @__PURE__ */new Date}),n("close")}}/>
  `},Sn=({customer:e,customerAddress:t})=>Xe`
      <div>
        <div class="mb-1">
          ${nt("Your information")}:
        </div>
        <div class="fw-bold">
          ${e.first_name&&e.last_name?Xe`${nt("Name")}: ${_t(e)}`:""}
        </div>
        <div>
          ${e.birth?Xe`${nt("Date of birth")}: ${ht.formatDate(e.birth)}`:""}
        </div>
        <div>
          ${e.gender?Xe`${nt("Gender")}: ${"m"==e.gender?"Férfi":"Nő"}`:""}
        </div>
        <div>
            ${e.ssn?Xe`${nt("SSN")}: ${e.ssn}`:""}
        </div>
        <div>
          ${t?Xe`${nt("Address")}: ${t}`:""}
        </div>
        <div>
          ${e.mobile?Xe`${nt("Phone number")}: ${e.mobile}`:""}
        </div>
        <div>
          ${e.email?Xe`Email: ${e.email}`:""}
        </div>
      </div>
  `,$n=async e=>{let t=Object.assign({},e.appointment.customer,{medical_records_allowed:"disabled"!=e.medicalConsent||null,country:e.country,mobile:e.appointment.customer.mobile?$t(e.store.chain.language,e.appointment.customer.mobile):null});return"birth"in t&&(t.birth=xn(t.birth)),Object.keys(t).forEach(e=>{"string"==typeof t[e]&&(t[e]=t[e].trim())}),await Ke.post(e,"customers",t)},xn=e=>e&&e instanceof Date?`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}T00:00:00+00:00`:null,wn=async(e,t)=>{const{customerForm:n}=e;var a=[];for(let r=0;r<t.getValidations().length;r++){let{propertyPath:e,message:o}=t.getValidations()[r];""!=e?(n[e].errors||(n[e].errors=[]),n[e].errors.push(o)):a.push(o)}e.dispatch("customerForm/set",{customerForm:n,customerFormGlobalErrors:a}),e.dispatch("currentStep/set","customer"),e.dispatch("booking/set",!1)},Cn=async(e,t)=>{await Ke.post(e,"customer_consents",{customer:t["@id"],approved_at:/* @__PURE__ */new Date,medical_records_allowed:"disabled"!=e.medicalConsent,source:"api"})},jn=async(e,t)=>{const{appointment:n,language:a,translationOverrides:r,constantAppointmentCommentText:o,confirmationType:i,reminderType:s}=e;let l=o||"";n.comment&&(l=(l?l+"\n\n":"")+n.comment),await Ke.put(e,n.id,Object.assign({},n,{customer:t["@id"],eye_examination_process:n.eye_examination_process["@id"],calendar:n.calendar["@id"],comment:l||void 0,title:nt("%customer%'s examination",{customer:_t(t,a)},{language:a,translationOverrides:r}),status:"booked",should_send_confirmation_email:"email"==i||"both"==i,should_send_confirmation_sms:"sms"==i||"both"==i,should_send_reminder_email:"email"==s||"both"==s,should_send_reminder_sms:"sms"==s||"both"==s,source:"online"}))},zn=e=>{var t=We("appointment","api","booking","language","customerForm","customerFormGlobalErrors","country","moduleState","store","translationOverrides","constantAppointmentCommentText","medicalConsent","confirmationType","reminderType");const{booking:n,moduleState:a,dispatch:r}=t;return Xe`
    <div class="d-grid">
      <button type="button" onClick=${async()=>{r("booking/set",!0);try{await(async e=>{try{var t=await $n(e)}catch(n){if(n instanceof Ve)return void wn(e,n);throw n}await Cn(e,t),await jn(e,t),e.dispatch("moduleState/set","success")})(t)}catch(e){throw r("moduleState/set","error"),e}}} disabled=${"idle"!=a}
        class="btn btn-primary btn-lg">
        ${n&&"idle"==a?Xe`<${bn}/>`:nt("Confirm appointment")}
      </button>
    </div>
  `},Pn={HUF:0},Dn=({process:e})=>{if(!e)return Xe``;const{store:t,language:n,showPrice:a}=We("store","language","showPrice");if(!a)return Xe``;const r=e.process_services;var o=null,i=null,s=t.price_list.id;r.forEach(e=>{e.service.packagings.forEach(e=>{e.currentPrices.forEach(e=>{e.price_list.id==s&&((null==o||o>e.value)&&(o=e.value),(null==i||i<e.value)&&(i=e.value))})})});var l=((e,t)=>{var n=e.price_list.currency,a={style:"currency",currency:n};return null!=Pn[n]&&(a.maximumFractionDigits=Pn[n],a.minimumFractionDigits=Pn[n]),new Intl.NumberFormat(t,a)})(t,n);return null==o||null==i?Xe``:o==i?Xe`${l.format(o)}`:Xe`${l.format(o)} - ${l.format(i)}`},Tn=e=>{const{appointment:t,language:n,currentStep:a,store:r,selectedCalendar:o,priceComment:i,showPrice:s,showExaminerName:l,locationName:c,locationAddress:u,showLocation:d,dispatch:p}=We("appointment","language","currentStep","store","selectedCalendar","priceComment","showPrice","showExaminerName","locationName","locationAddress","showLocation");if(!r)return;var m=t.calendar||o,h={dateTimeStart:t.start?ht.formatDateTime(t.start):null,dateTimeEnd:t.end?ht.formatDateTime(t.end):null,processLength:t.eye_examination_process?t.eye_examination_process.length:null,processName:t.eye_examination_process?t.eye_examination_process.name:null,process:t.eye_examination_process,examinerName:l&&m?m.user.name:null,customer:t.customer,customerAddress:bt(t.customer),showLocation:d,locationName:null!==c?c:r.name,locationAddress:null!==u?u:bt(r),appointmentComment:t.comment};return Xe`
    <ul class="list-group${"summary"==a?"":" text-end"}">
      ${"summary"!=a?Xe`<li class="list-group-item fw-bold">${nt("Appointment summary")}</li>`:null}
      ${h.processName?Xe`
        <li class="list-group-item">
          <div>${nt("Subject")}:</div>
          <div class="fw-bold">${h.processName}</div>
          <div>
            ${h.examinerName?Xe`${nt("examiner: %examiner%",{examiner:h.examinerName})}`:null}
          </div>
        </li>
      `:""}
      ${h.dateTimeStart&&h.dateTimeEnd&&h.processLength?Xe`
        <li class="list-group-item">
          <div>${nt("Start Time")}:</div>
          <div>
            <${et}//>
          </div>
          <div class="text-muted">
            ${nt("It takes up to %length% minutes",{length:h.processLength})}
          </div>
          <div class="fs-6">
            <a href="#" onClick="${()=>{p("currentStep/set","appointment")}}">${nt("change date")}</a>
          </div>
        </li>
      `:""}
      ${"summary"==a?Xe`
        <li class="list-group-item">
          <${Sn} customer=${h.customer} customerAddress=${h.customerAddress}/>
        </li>
      `:""}
      ${"summary"==a&&h.appointmentComment?Xe`
        <li class="list-group-item">
          ${nt("Comment")}: ${h.appointmentComment}
        </li>
      `:""}
      ${h.showLocation?Xe`
            <li class="list-group-item">
              <div>${nt("Location")}:</div>
              <div class="fw-bold">${h.locationName}</div>
              <div>${h.locationAddress}</div>
            </li>
        `:""}
      <li class="list-group-item">
        ${s?Xe`
          <div>${nt("Price")}:</div>
          <div class="fw-bold"><${Dn} process=${h.process}/></div>
        `:""}
        <div>${i||""}</div>
      </li>
      ${"summary"==a?Xe`
          <li class="list-group-item">
            <${zn}/>
          </li>
        `:""}
    </ul>
  `},An=e=>{const{currentStep:t,availableSteps:n,style:a,parentWidth:r}=We("currentStep","availableSteps","style","parentWidth"),o=n.indexOf(e.step),i=n.indexOf(t);if(-1==n.indexOf(e.step))return Xe``;var s="process"!=t&&"summary"!=t&&"storeSelection"!=t;return"embedded"!==a&&"embedded-safe"!==a||"small"!==r||(s=!1),Xe`
    <div class="carousel-item
      ${i-1==o?"carousel-item-prev":""}
      ${t==e.step?"active":""}
      ${i+1==o?"carousel-item-next":""}
    ">
      <div class="container-sm p-1 ${wt(a,r)} ${a}-container">
        <div class="row">
          <div class="${s?"col col-sm-8":"col"}">
            <div class="p-1">
              <${e.wrappedComponent}/>
            </div>
          </div>
          ${s?Xe`
            <div class="d-none d-sm-block col-4 summarycard">
              <div class="p-1">
                <${Tn} props=${e}/>
              </div>
            </div>
          `:""}
        </div>
      </div>
    </div>
  `},Mn=e=>{const{appointment:t,dispatch:n,currentStep:a,showProcessLength:r}=We("appointment","currentStep","showProcessLength");return Xe`
    <li class="row list-group-item ${t.eye_examination_process==e.item?"selected":""}" onClick=${()=>{"process"===a&&(n("appointment/set",{eye_examination_process:e.item}),n("currentStep/eyeExaminationProcessSelected"),n("currentStep/next"))}}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.item.name}</h4>
          <p class="${e.item.description&&e.item.description.length>0?"":"d-none"}">
            ${e.item.description}
            ${e.item.detailed_description&&e.item.detailed_description.length>0?Xe` <a href="#" onClick=${t=>{t.stopPropagation(),n("detailedDescriptionModalState/set",e.item.detailed_description)}}>${nt("More...")}</a>`:""}
          </p>
          ${r?Xe`<span class="badge bg-primary me-1">${e.item.length} ${nt("@abbrMinute")}</span>`:""}
          <span class="badge bg-primary"><${Dn} process=${e.item}/></span>
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `},En=({message:e})=>Xe`
    <div class="alert alert-danger mt-3" role="alert">
      ${e}
    </div>
  `,Fn=e=>{const{eyeExaminationProcesses:t,detailedDescriptionModalState:n,store:a,calendars:r,dispatch:o}=We("eyeExaminationProcesses","detailedDescriptionModalState","store","calendars");return 0!=t.length&&a?t.length?Xe`
      <ul class="list-group">
        ${t.map(e=>Xe`<${Mn} item=${e} />`)}
      </ul>
      <${yn} modalStateStore="detailedDescriptionModalState"
        title="Detailed description"
        content=${!!n&&Xe([n])}
        approveButtonLabel="Close"
        onApprove=${()=>o("detailedDescriptionModalState/set",!1)}
      />
    `:Xe`
    <ul class="list-group">
      <${En} message="
        ${a.phone?nt("There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.",{mail:a.email,tel:a.phone}):nt("Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.",{mail:a.email})}
        ${r&&r.length?nt("There is no office hourse configured for this specialist."):nt("There is no calendar created for this store.")}
      "/>
    </ul>
  `:Xe`
      <ul class="list-group">
        <li class="list-group-item"><${bn}/></li>
      </ul>
    `},Nn=e=>{const{selectedCalendar:t,dispatch:n,currentStep:a}=We("selectedCalendar","currentStep");return Xe`
    <li class="list-group-item${t==e.item||!e.item["@id"]&&!t?" selected":""}" onClick=${()=>{"calendar"===a&&(n("selectedCalendar/set",e.item["@id"]?e.item:null),n("currentStep/next"))}}>
      <div class="row">
        <div class="col-auto">
          <div class="avatar me-2">
            ${e.item.user.profile_picture?Xe`<img class="image" src="data:image/*;base64,${e.item.user.profile_picture}"/>`:Xe`<h2 class="p-1 text-muted text-center image">?</h2>`}
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
  `},On=()=>Xe`
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
    </li>`,In=e=>{const{appointment:t,showFirstAvailableUserItem:n,dispatch:a}=We("appointment","showFirstAvailableUserItem"),r=ot(We("calendars","appointment","calendarRoleCheckMode")),o={user:{name:nt("First free"),description:nt("For finding the nearest free time slot.")}};return Xe`
    <ul class="list-group">
      ${t.eye_examination_process&&r?r.length?Xe`
              ${n?Xe`<${Nn} item=${o} />`:""}
              ${r.map(e=>Xe`<${Nn} item=${e} />`)}
            `:Xe`
              <li class="list-group-item text-center">
                ${nt("None of our colleagues is available for the selected process")}
                <button class="btn m-2 btn-primary" onClick="${()=>a("currentStep/previous")}">
                  ${nt("Select another process")}
                </button>
              </li>
          `:Xe`<${On}/>`}
    </ul>
  `},Ln=["@abbrSunday","@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday"],Rn=({date:e})=>{const{selectedDate:t,dispatch:n}=We("selectedDate");return Xe`
    <div class="col">
      <div class="card ${it(e,t)?"bg-primary text-light":""}" onClick="${()=>n("selectedDate/set",e)}">
        <div class="card-body user-select-none p-1">
          <h6 class="card-subtitle text-center ${it(e,t)?"":"text-muted"}">
            ${nt(Ln[e.getDay()])}
          </h6>
          <h5 class="card-title text-center">${e.getDate()}</h5>
        </div>
      </div>
    </div>
  `},Bn=({dateGroup:e,visibleDateGroups:t})=>{const{previousDateGroup:n,currentDateGroup:a,nextDateGroup:r}=t;return Xe`
    <div class="carousel-item
      ${n==e?"carousel-item-prev":""}
      ${a==e?"active":""}
      ${r==e?"carousel-item-next":""}
    ">
      <div class="row">
        ${e.map(e=>Xe`<${Rn} date=${e}/>`)}
      </div>
    </div>
  `},Hn=["January","February","March","April","May","June","July","August","September","October","November","December"],Un=e=>{const{selectedDate:t,firstEligibleDate:n,dispatch:a}=We("selectedDate","firstEligibleDate","dispatch"),r=ct(n);var o,i,s;for(let c=0;c<r.length&&(o=r[c-1],i=r[c],s=r[c+1],!i.hasDate(t));c++);const l={previousDateGroup:o,currentDateGroup:i,nextDateGroup:s};return Xe`
    <div class="dateSelection hstack gap-1">
      <button class="btn btn-outline-secondary" onClick=${()=>a("selectedDate/set",o[4])}
        disabled=${!o}>
        ${"<"}
      </button>
      <div class="carousel-container">
        <div>${nt(Hn[i[0].getMonth()])}</div>
        <div class="carousel slide">
          <div class="carousel-inner">
            ${r.map(e=>Xe`<${Bn} dateGroup=${e} visibleDateGroups=${l}/>`)}
          </div>
        </div>
      </div>
      <button class="btn btn-outline-secondary" onClick=${()=>a("selectedDate/set",s[0])}
        disabled=${!s}>
        ${">"}
      </button>
    </div>
  `},Gn=({day:e})=>{const{selectedCalendar:t,selectedDate:n,nextFreeSlots:a,appointment:r,dispatch:o,firstEligibleDate:i}=We("selectedCalendar","appointment","nextFreeSlots","selectedDate","firstEligibleDate"),s=a[xt(r,t,e)];return e<new Date(i).setHours(0,0,0,0)||s&&"empty"==s.status?Xe`<td class='table-active disabled'>${e.getDate()}</td>`:s?Xe`
    <td class=${it(e,n)?"bg-primary text-light":"active-cell"} 
      onClick="${()=>(e=>{o("selectedDate/set",e)})(e)}"
    >
      ${e.getDate()}
    </td>
  `:Xe`<td class="placeholder">${e.getDate()}</td>`},qn=["January","February","March","April","May","June","July","August","September","October","November","December"],Wn=["@abbrMonday","@abbrTuesday","@abbrWednesday","@abbrThursday","@abbrFriday","@abbrSaturday","@abbrSunday"],Vn=()=>{const{selectedCalendar:e,selectedDate:t,nextFreeSlots:n,appointment:a,dispatch:r}=We("selectedCalendar","appointment","nextFreeSlots","selectedDate"),o=t.getFullYear(),i=t.getMonth(),s=new Date(o,i+1,0).getDate(),l=/* @__PURE__ */new Date<new Date(o,i,0),c=new Date(o,i,1),u=[],d=[];var p=!0;for(let m=t.getDate();m<=s;m++){const t=n[xt(a,e,new Date(o,i,m))];if(null==t||"incomplete"==t.status){p=!1;break}}for(let m=0;m<(c.getDay()||7)-1;m++)u.push(null);for(let m=1;m<=s;m++)u.push(new Date(o,i,m));for(let m=0;m<u.length;m+=7)d.push(u.slice(m,m+7));return Xe`
    <div class="container text-center calendar px-0">
      <div class="row">
        <div class="col">
          <table class="table table caption-top placeholder-glow">
            <caption class="text-center display-6">
              <button
                class="btn btn-outline-secondary month-previus ${l&&p?null:"disabled"}" 
                onClick="${()=>{const t=new Date(o,i,0).getDate();for(let s=1;s<=t;s++){const t=n[xt(a,e,new Date(o,i-1,s))];if(t&&"complete"==t.status)return void r("selectedDate/set",new Date(o,i-1,s))}r("selectedDate/set",new Date(o,i-1,1))}}"
              >
                ${"<"}
              </button>
              ${o+" "+nt(qn[i])}
              <button class="btn btn-outline-secondary month-next ${p?null:"disabled"}" onClick="${()=>{const t=new Date(o,i+1,0).getDate();for(let s=1;s<=t;s++){const t=n[xt(a,e,new Date(o,i+1,s))];if(t&&("complete"==t.status||"incomplete"==t.status))return void r("selectedDate/set",new Date(o,i+1,s))}r("selectedDate/set",new Date(o,i+1,1)),r("initialNextFreeSlotsLoading/set",!0)}}">
                ${">"}
              </button>
            </caption>
            <thead>
              <tr>
                ${Wn.map(e=>Xe`<th scope="col">${nt(e)}</th>`)}
              </tr>
            </thead>
            <tbody>
              ${d.map(e=>Xe`
                <tr>
                  ${e.map(e=>e?Xe`
                      <${Gn} day=${e}/>
                    `:Xe`<td></td>`)}
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `},Jn=e=>{const{selectedCalendar:t,selectedDate:n,nextFreeSlots:a,appointment:r,dispatch:o,nextFreeSlotLoading:i}=We("selectedCalendar","appointment","nextFreeSlots","selectedDate","nextFreeSlotLoading");var s,l=new Date(n),c=!1;for(l.setDate(l.getDate()+1);a[s=xt(r,t,l)];){if("empty"!==a[s].status){c=!0;break}l.setDate(l.getDate()+1)}const u=()=>o("selectedDate/set",l);return Xe`
    <li class="list-group-item p-4 text-center">
      <h5>${nt("There are no free appointment times for this day")}</h5>
      ${c?Xe`
          <div class="text-muted">
            ${nt("The next free slot is available on %date%",{date:ht.formatDate(l)})}
          </div>
          <button class="btn m-2 btn-primary" onClick="${u}">${nt("Go to date")}</button>
        `:i?Xe`
              <div class="text-muted">
                ${nt("Search in progress...")}
              </div>
            `:Xe`
              <button class="btn m-2 btn-primary" onClick="${u}">
                ${nt("Click here to search for the next free appointment")}
              </button>
            `}
    </li>
  `},Kn=e=>{const{dispatch:t,appointment:n}=We("appointment");return Xe`
    <li class="list-group-item${ut(new Date(n.start),new Date(e.slot.start))?" selected":""}" onClick=${()=>{t("appointment/selectSlot",e.slot)}}>
      <div class="row align-items-center ms-2">
        <div class="col-11">${ht.formatTime(e.slot.start)}</div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `},Yn=()=>{const{selectedDate:e,selectedCalendar:t,appointment:n,nextFreeSlots:a}=We("selectedCalendar","selectedDate","nextFreeSlots","appointment");var r=xt(n,t,e);return Xe`
    <ul class="list-group mt-3">
      ${a[r]?"empty"==a[r].status?Xe`<${Jn}/>`:a[r].slots.map(e=>Xe`<${Kn} slot=${e}/>`):Xe`<li class="list-group-item"><${bn}/></li>`}
    </ul>
  `},Zn=({slot:e})=>{const{dispatch:t,appointment:n}=We("appointment");return Xe`
    <button class="btn btn-outline-secondary m-1 ${ut(new Date(n.start),new Date(e.start))?" selected":""}" onClick=${()=>{t("appointment/selectSlot",e)}}>
      ${ht.formatTime(e.start)}
    </button>
  `},Xn=({title:e,slots:t})=>t.length?Xe`
      <div class="pt-3">
        <h4>${nt(e)}:</h4>
        ${t.map(e=>Xe`<${Zn} slot=${e}/>`)}
      </div>
      `:null,Qn=()=>{const{selectedDate:e,selectedCalendar:t,appointment:n,nextFreeSlots:a}=We("selectedCalendar","selectedDate","nextFreeSlots","appointment"),r=xt(n,t,e),o=[],i=[],s=[],l=a[r]?a[r].slots:[];for(const c of l||[]){const e=new Date(c.start);e.getHours()<12?o.push(c):e.getHours()<18?i.push(c):s.push(c)}return Xe`
    <div class="grid">
      ${a[r]?"empty"==a[r].status?Xe`<${Jn}/>`:Xe`
            <${Xn} title=${"Morning"} slots=${o}/>
            <${Xn} title=${"Afternoon"} slots=${i}/>
            <${Xn} title=${"Evening"} slots=${s}/>
          `:Xe`<li class="list-group-item"><${bn}/></li>`}
    </div>
  `},ea=()=>Xe`
    <ul class="list-inline text-center">
      <li class="list-inline-item">
        <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
      </li>
      <li class="list-inline-item">
        ${nt("Booking the appointment")}
      </li>
    </ul>
  `,ta=()=>{const{calendarRange:e,timeSlotMode:t,slotSelection:n}=We("calendarRange","timeSlotMode","slotSelection");return Xe`
    ${n.inProgress?Xe`<${ea}/>`:Xe`
      <${"fiveDays"==e?Un:Vn}/>
      ${null!=n.errorMessage?Xe`<${En} message=${n.errorMessage}/>`:null}
      <${"singleColumn"==t?Yn:Qn}/>
    `}
  `},na=e=>{const{appointment:t,dispatch:n}=We("appointment");return Xe`
    <input type="text" class="${e.invalid?"is-invalid":""} form-control" onInput=${a=>{const{value:r}=a.target;var{customer:o}=t;o[e.property]=r,n("appointment/set",{customer:o})}}
      value=${t.customer[e.property]||""}
      disabled=${!!t.customer["@id"]} />
  `},aa=e=>{const{customerForm:t}=We("customerForm");if(t[e.property]){var n=t[e.property];return Xe`
    <div class="${e.class||"col-sm"} needs-validation p-1 mb-2 w-100">
      ${e.label?Xe`
          <label class="form-label text-truncate">
            ${n.required?Xe`<span class="text-danger">*</span> `:""}
            ${nt(e.label)}
          </label>
        `:null}
      <${e.inputClass||na} property=${e.property}
        invalid=${n.errors&&n.errors.length?"was-validated":""}/>
      ${n.errors&&n.errors.length?n.errors.map(e=>Xe`<div class="invalid-feedback">${nt(e)}</div>`):""}
    </div>
  `}},ra=e=>{const{appointment:t,showAppointmentComment:n,appointmentCommentRequired:a,commentError:r,dispatch:o}=We("appointment","showAppointmentComment","appointmentCommentRequired","commentError");if(!n)return Xe``;return Xe`
      <div class="row mx-2">
        <div class="p-1 mb-2 w-100">
          <label class="form-label text-truncate">
            ${a?Xe`<span class="text-danger">*</span> `:""}
            ${nt("Comment")}
          </label>
          <textarea
            class="${r?"is-invalid":""} form-control" value=${t.comment||""} onInput=${e=>{const{value:n}=e.target;t.comment=n,o("appointment/set",t),o("customerForm/set",{commentError:null})}}
            invalid=${r?"was-validated":""}
          ></textarea>
          ${r?Xe`<div class="invalid-feedback">${nt(r)}</div>`:""}
        </div>
      </div>
    `},oa=e=>Xe`
    <select type="text" class="form-select ${e.class||""} ${e.invalid?"is-invalid":""}"
      onInput=${t=>{const{value:n}=t.target;e.onInput(n)}} value=${e.value} disabled=${e.disabled}>
      ${e.emptySelection?Xe`<option value="">${e.emptySelection}</option>`:""}
      ${e.options.map(({value:e,label:t})=>Xe`<option value="${e}">${t}</option>`)}
    </select>
  `,ia=e=>(e=e||/* @__PURE__ */new Date,(e=new Date(e.getFullYear(),e.getMonth()+1,0)).getDate()),sa=e=>{const{appointment:t,dispatch:n}=We("appointment"),a=(a,r)=>{var{customer:o}=t;""==r?o[e.property]=null:(o[e.property]=o[e.property]||/* @__PURE__ */new Date("2000-01-01"),o[e.property][`set${a}`](r)),n("appointment/set",{customer:o})},r=t.customer[e.property];var o=[];for(let l=1900;l<=/* @__PURE__ */(new Date).getFullYear();l++)o.push({value:l,label:l});var i=[];for(let l=1;l<=12;l++)i.push({value:l-1,label:l<10?`0${l}`:l});var s=[];for(let l=1;l<=ia(r);l++)s.push({value:l,label:l<10?`0${l}`:l});return Xe`
    <div class="${e.invalid?"is-invalid":""} input-group">
      <${oa} invalid=${e.invalid} onInput=${e=>a("FullYear",e)}
        value=${r?r.getFullYear():""} emptySelection="----" options=${o}
         disabled=${!!t.customer["@id"]}/>
      <${oa} invalid=${e.invalid} onInput=${e=>a("Month",e)}
        value=${r?r.getMonth():""} emptySelection="--" options=${i}
         disabled=${!!t.customer["@id"]}/>
      <${oa} invalid=${e.invalid} onInput=${e=>a("Date",e)}
        value=${r?r.getDate():""} emptySelection="--" options=${s}
         disabled=${!!t.customer["@id"]}/>
    </div>
  `},la=e=>{const{appointment:t,dispatch:n}=We("appointment");return Xe`
    <${oa} onInput=${a=>{var{customer:r}=t;r[e.property]=a,n("appointment/set",{customer:r})}} invalid=${e.invalid} disabled=${!!t.customer["@id"]}
      value=${t.customer[e.property]||""} emptySelection="${nt("Not specified")}"
        options=${[{value:"m",label:nt("Male")},{value:"f",label:nt("Female")}]}/>
  `},ca=e=>{const{appointment:t,privacyPolicy:n,dispatch:a}=We("appointment","privacyPolicy");return Xe`
    <${yn} modalStateStore="privacyPolicyModalState"
      title="Privacy policy"
      content="${n?Xe([n.content]):""}"
      approveButtonLabel="Close"
      onApprove=${()=>a("privacyPolicyModalState/set",!1)}/>

    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${()=>{var{customer:n}=t;n[e.property]=!n[e.property]||null,a("appointment/set",{customer:n})}}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${nt("I have accepted the privacy policy")}
      </label>
    </div>
  `},ua=e=>{const{appointment:t,dispatch:n}=We("appointment");return Xe`
    <div class="form-check ${e.invalid?"is-invalid":""}" onClick=${()=>{var{customer:a}=t;a[e.property]=!a[e.property]||null,n("appointment/set",{customer:a})}}>
      <input class="form-check-input" type="checkbox"
        checked=${t.customer[e.property]||!1}/>
      <label class="form-check-label">
        ${nt("I agree to the use of my medical records according to privacy policy")}
      </label>
    </div>
  `},da=e=>{const{customerForm:t,customerFormGlobalErrors:n,medicalConsent:a,dispatch:r}=We("customerForm","customerFormGlobalErrors","language","medicalConsent");return Xe`
    <div class="card p-2">
      ${n&&n.length?Xe`
          <div class="row mx-2 text-danger">
            ${n.map(e=>Xe`<p>${e}</p>`)}
          </div>
        `:""}
      <div class="row mx-2">
        ${gt()?Xe`
            <${aa} property="last_name" label="Last name"/>
            <${aa} property="first_name" label="First name"/>
          `:Xe`
            <${aa} property="first_name" label="First name"/>
            <${aa} property="last_name" label="Last name"/>
          `}
      </div>
      <div class="row mx-2">
        <${aa} class="col-lg-5" property="birth" label="Birth" inputClass=${sa}/>
        <${aa} property="gender" label="Gender" inputClass=${la}/>
        <${aa} property="ssn" label="SSN"/>
      </div>
      <div class="row mx-2">
        <${aa} property="state" label="State"/>
      </div>
      <div class="row mx-2">
        <${aa} property="postal_code" label="Postal code"/><${aa} property="city" label="City"/>
      </div>
      <div class="row mx-2">
        <${aa} property="street_address" label="Street address"/>
      </div>
      <div class="row mx-2">
        <${aa} property="mobile" label="Mobile"/><${aa} property="email" label="Email"/>
      </div>
      <${ra}/>
      <div class="row mx-2">
        <${aa} property="acceptPrivacyPolicy" inputClass=${ca}/>
      </div>
      ${"explicit"==a?Xe`
          <div class="row mx-2">
            <${aa} property="acceptMedicalRecordsUse" inputClass=${ua}/>
          </div>
        `:""}
      <button class="mx-2 btn btn-primary" onClick=${()=>{r("customerForm/validateAndNext")}}>${nt("Next")}</button>
    </div>
  `},pa=({item:e})=>{const{store:t,dispatch:n,currentStep:a}=We("store","currentStep"),r=bt(e);return Xe`
    <li class="storeItem row list-group-item ${t==e?"selected":""}" onClick=${()=>{"storeSelection"===a&&(n("store/set",e),n("currentStep/next"))}}>
      <div class="row">
        <div class="col-11 p-0">
          <h4>${e.name}</h4>
          ${e.phone?Xe`<span class="iconHolder">\u{1F57B}</span> ${e.phone}<br/>`:""}
          ${e.email?Xe`<span class="iconHolder">\u{2709}</span> ${e.email}<br/>`:""}
          ${r?Xe`<span class="iconHolder">\u{1F588}</span> ${r}`:""}
        </div>
        <div class="col text-end p-2 next item icon">
          \u203A
        </div>
      </div>
    </li>
  `},ma=()=>Xe`
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
    </li>`,ha=e=>{const{stores:t}=We("stores");return null!==t?(t.sort((e,t)=>e.name.localeCompare(t.name)),t.map(e=>Xe`<${pa} item=${e}/>`)):Xe`<${ma}/>`},fa=e=>Xe`
    <div class="carousel slide">
      <div class="carousel-inner">
        <${An} step="storeSelection" wrappedComponent=${ha}/>
        <${An} step="process" wrappedComponent=${Fn}/>
        <${An} step="calendar" wrappedComponent=${In}/>
        <${An} step="appointment" wrappedComponent=${ta}/>
        <${An} step="customer" wrappedComponent=${da}/>
        <${An} step="summary" wrappedComponent=${Tn}/>
      </div>
    </div>
  `,va=({content:e})=>{const{dispatch:t,store:n}=We("moduleState","appointment","store");return Xe`
    <${yn} modalStateStore="globalModalState"
    headerClasses="bg-danger text-light"
    contentClasses="text-danger"
    approveButtonClasses="btn-danger"
    title="Appointment booking failed"
    content=${e}
    approveButtonLabel="OK"
    onApprove=${()=>t("close")}/>
  `},_a=e=>{const{moduleState:t,appointment:n,dispatch:a,store:r,style:o}=We("moduleState","appointment","store","style");if(!t.startsWith("success")&&!t.startsWith("error"))return;var i,s;null!=r&&(i=r.phone,s=r.email);const l=()=>{a("embedded"==o||"embedded-safe"==o?"resetStore":"close")},c="There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling our store (%tel%) and please mention the error then.",u="Error! Appointments can not be created! There is a configuration error in the appointment booker that prevents booking. Please contact our store on %mail% email address or book an appointment by calling us and please mention the error then.";switch(t){case"success":return Xe`
        <${yn} modalStateStore="globalModalState"
          headerClasses="bg-success text-light"
          contentClasses="text"
          approveButtonClasses="btn-success"
          title="Appointment booked!"
          content="
            ${nt("Your appointment have been recorded.")}
            ${nt("The examination will start at %start%, please arrive 5 minutes early.",{start:ht.formatTime(n.start)})}
            ${nt("If you have any further questions, please contact us through our customer service.")}
          "
          approveButtonLabel="OK"
          onApprove=${l}/>
      `;case"error":return Xe`
        <${va} content="${nt("Due to an unexpected error appointment could not be booked, please restart the process")}"/>
      `;case"error.storeCode":return Xe`
        <${va} content="${i?nt(c,{mail:s,tel:i}):nt(u,{mail:s})} ${nt("Invalid store code")}"/>
      `;case"error.403":return Xe`
        <${va} content="${i?nt(c,{mail:s,tel:i}):nt(u,{mail:s})} ${nt("Invalid API key or inactive API user.")}"/>
      `;case"error.noLength":return Xe`
        <${va} content="${i?nt(c,{mail:s,tel:i}):nt(u,{mail:s})} ${nt("The lenght isn’t configured for the eye examination processes.")}"/>
      `;case"error.noProcessOrLength":return Xe`
        <${va} content="${i?nt(c,{mail:s,tel:i}):nt(u,{mail:s})} ${nt("There are no eye examination processes configured in the store network or the length of them is not configured.")}"/>
      `;case"error.storeEmail":return Xe`
        <${va} content="${i?nt("There is a configuration error in the appointment booker that prevents booking. Please call our store (%tel%) to book an appointment us and please mention the error then: There is no email address configured for this store.",{tel:i}):nt("There is a configuration error in the appointment booker that prevents booking. Please call our store to book an appointment us and please mention the error then.")}"/>
      `;case"error.missingConfiguredProcessId":return Xe`
        <${va} content="${i?nt(c,{mail:s,tel:i}):nt(u,{mail:s})} ${nt("The eye examination process configured for this appointment booker has been removed.")}"/>
      `;default:throw new Error(`There was an unexpected error: ${t}`)}},ga=({colors:e})=>{if(e=e||{},0!=Object.keys(e).length)return Xe`
    <style>
      ${e.background?`\n          .cvio-ab-bg-body {\n            background-color: ${e.background} !important;\n          }\n        `:""}
      ${e.contentBackground?`\n          .cvio-ab-list-group-item, .cvio-ab-card, .cvio-ab-modal-content {\n            background-color: ${e.contentBackground} !important;\n          }\n        `:""}
      ${e.text?`\n          .cvio-ab-fixed-top, .cvio-ab-list-group-item {\n            color: ${e.text} !important;\n          }\n        `:""}
      ${e.primary?`\n          .cvio-ab-bg-primary, .cvio-ab-btn-primary {\n            background-color: ${e.primary} !important;\n          }\n          .cvio-ab-text-primary, .cvio-ab-link-primary {\n            color: ${e.primary} !important;\n          }\n          .cvio-ab-form-check-input:checked {\n            background-color: ${e.primary} !important;\n            border-color: ${e.primary} !important;\n          }\n        `:""}
      ${e.danger?`\n          .cvio-ab-bg-danger, .cvio-ab-btn-danger {\n            background-color: ${e.danger} !important;\n          }\n          .cvio-ab-text-danger, .cvio-ab-link-danger, .cvio-ab-invalid-feedback {\n            color: ${e.danger} !important;\n          }\n          .cvio-ab-form-control.cvio-ab-is-invalid {\n            border-color: ${e.danger} !important;\n          }\n        `:""}
      ${e.success?`\n          .cvio-ab-bg-success, .cvio-ab-btn-success {\n            background-color: ${e.success} !important;\n          }\n          .cvio-ab-text-success, .cvio-ab-link-success {\n            color: ${e.success} !important;\n          }\n        `:""}
    </style>
  `},ba=e=>{const{headerTitle:t,currentStep:n,style:a,parentWidth:r}=We("headerTitle","currentStep","style","parentWidth");switch(n){case"storeSelection":var o=nt("Store selection");break;case"process":o=nt("Select eye examination type");break;case"calendar":o=nt("Select a vision expert");break;case"appointment":o=nt("Select your desired appointment time");break;case"customer":o=nt("Enter customer details");break;default:o=nt("Appointment details verification")}return Xe`
    <div class="booker-header bg-primary bg-gradient text-light p-2 ${a}-header">
      <div class="container ${wt(a,r)} ${a}-header-container">
        <div class="row">
          <div class="col-8 px-1">
            <h3 class="text-truncate">
              ${t||nt("Appointment booking")}
            </h3>
            <h5 class="text-truncate">
              ${o}
            </h5>
          </div>
          <div class="col-4">
            <div class="btn-group btn-group-lg float-end" role="group" aria-label="Navigation buttons">
              <${gn}/>
              ${"embedded"===a||"embedded-safe"===a?"":Xe`<${kn}/>`}
            </div>
          </div>
        </div>
      </div>
    </div>
    `},ya=e=>Xe`
    <${ga} colors=${e.colors}/>
    <div class="booker-widget fixed-top ${e.style}">
      <${Ge.Provider} value=${e.store}>
        <${_a}/>
        <${ba}/>
        <div class="bg-body content ${e.style}-content">
          <${fa}/>
          <div class="content-spacer"></div>
        </div>
      <//>
    </div>
  `,ka=class{constructor(e){var t,n,a,r=(e=>{let t={},n={},a={dispatch(e,r){if("@dispatch"!==e&&a.dispatch("@dispatch",[e,r,t[e]]),t[e]){let o;t[e].forEach(i=>{let s=t[e].includes(i)&&i(n,r,a);s&&"function"!=typeof s.then&&(n={...n,...s},o={...o,...s})}),o&&a.dispatch("@changed",o)}},get:()=>n,on:(e,n)=>((t[e]||(t[e]=[])).push(n),()=>{t[e]=t[e].filter(e=>e!==n)})};return e.forEach(e=>{e&&e(a)}),a.dispatch("@init"),a})([Nt,Ct,zt,Pt,Et,Tt,Dt,vn,Ft,Ot,Ut,qt,en,hn,fn,Wt,Zt,Xt,Qt,Jt,Kt,Yt,tn,_n,Vt,nn,an,rn,on,cn,un,dn,pn,mn]);this.store=r,e.medicalConsent||(e.medicalConsent="explicit"),this.setupCustomerFields(e),this.setupApi(e);const o=null!==(t=e.storeSelection)&&void 0!==t?t:"no";r.dispatch("store/setStoreSelection/set",o),e.calendarStepShouldBeHidden&&r.dispatch("calendarStepShouldBeHidden/set",e.calendarStepShouldBeHidden),e.calendarRoleCheckMode&&r.dispatch("calendarRoleCheckMode/set",e.calendarRoleCheckMode),void 0!==e.showFirstAvailableUserItem&&r.dispatch("showFirstAvailableUserItem/set",e.showFirstAvailableUserItem),void 0!==e.showExaminerName&&r.dispatch("showExaminerName/set",e.showExaminerName),e.firstEligibleTime&&r.dispatch("firstEligibleTime/set",e.firstEligibleTime),e.language&&r.dispatch("language/set",e.language),e.translationOverrides&&r.dispatch("translationOverrides/set",e.translationOverrides),e.headerTitle&&r.dispatch("headerTitle/set",e.headerTitle),e.country&&r.dispatch("country/set",e.country),e.priceComment&&r.dispatch("priceComment/set",e.priceComment),void 0!==e.showPrice&&r.dispatch("showPrice/set",e.showPrice),e.privacyPolicyLink&&r.dispatch("privacyPolicyLink/set",e.privacyPolicyLink),e.showAppointmentComment&&r.dispatch("showAppointmentComment/set",e.showAppointmentComment),e.appointmentCommentRequired&&r.dispatch("appointmentCommentRequired/set",e.appointmentCommentRequired),e.autoselectNextFreeSlot&&r.dispatch("autoselectNextFreeSlot/set",e.autoselectNextFreeSlot),e.constantAppointmentCommentText&&r.dispatch("constantAppointmentCommentText/set",e.constantAppointmentCommentText),void 0!==e.locationName&&r.dispatch("locationName/set",e.locationName),void 0!==e.locationAddress&&r.dispatch("locationAddress/set",e.locationAddress),void 0!==e.showLocation&&r.dispatch("showLocation/set",e.showLocation),void 0!==e.confirmationStatus&&r.dispatch("appointment/set",{confirmation_status:e.confirmationStatus}),void 0!==e.showProcessLength&&r.dispatch("showProcessLength/set",e.showProcessLength),e.timeSlotMode&&r.dispatch("timeSelectionUi/timeSlotMode/set",e.timeSlotMode),e.calendarRange&&r.dispatch("timeSelectionUi/calendarRange/set",e.calendarRange),e.style&&r.dispatch("style/set",e.style),e.eyeExaminationProcessId&&r.dispatch("eyeExaminationProcessId/set",e.eyeExaminationProcessId),e.onSuccessCallback&&this.setupSuccessCallback(e.onSuccessCallback),r.dispatch("medicalConsent/set",e.medicalConsent),r.dispatch("confirmationType/set",null!==(n=e.confirmationType)&&void 0!==n?n:"email"),r.dispatch("reminderType/set",null!==(a=e.reminderType)&&void 0!==a?a:"email"),this.createElementAndRender(e)}setupSuccessCallback(e){this.store.on("moduleState/set",(t,n)=>{"success"===n&&e(this.store.get())})}setupCustomerFields({customerFields:e,requiredCustomerFields:t,medicalConsent:n}){var a={};t=["first_name","last_name","acceptPrivacyPolicy"].concat("disabled"!=n?["acceptMedicalRecordsUse"]:[]).concat(t||["email"]),["first_name","last_name","acceptPrivacyPolicy"].concat("disabled"!=n?["acceptMedicalRecordsUse"]:[]).concat(e||["mobile","email"]).forEach(e=>{a[e]={required:-1!=t.indexOf(e)}}),this.store.dispatch("customerForm/set",{customerForm:a})}setupApi(e){this.store.dispatch("api/addHeaders",Object.assign({"X-AUTH-API-STORE-CODE":e.storeCode},e.apiHeaders||{})),this.store.dispatch("api/setPath",e.apiPath),this.store.dispatch("storeCode/set",e.storeCode)}async loadCSSFiles(e,t){for(let a=0;a<e.length;a++)try{const n=await fetch(e[a]);if(!n.ok)throw new Error("Failed to load CSS file");let r=await n.text();r=r.replace(/:root\s*{/,":host {");const o=document.createElement("style");o.textContent=r,t.appendChild(o)}catch(n){console.error("Error loading CSS:",n)}}dispatchParentWidth(e){e.clientWidth<=576?this.store.dispatch("parentWidth/set","small"):e.clientWidth<=768?this.store.dispatch("parentWidth/set","medium"):this.store.dispatch("parentWidth/set","large")}async createElementAndRender({parentElement:n,colors:a,cssUrls:r}){if("embedded-safe"==this.store.get().style){this.dispatchParentWidth(n);const e=n.attachShadow({mode:"open"});(o=document.createElement("div")).id="embeddedShadowBooker",await this.loadCSSFiles(r,e),e.appendChild(o)}else{var o=document.createElement("div");(n||document.body).appendChild(o)}this.store.dispatch("rootElement/set",o),function(n,a,r){var o,i,s,l;a==document&&(a=document.documentElement),t.__&&t.__(n,a),i=(o="function"==typeof r)?null:r&&r.__k||a.__k,s=[],l=[],q(a,n=(!o&&r||a).__k=P(T,null,[n]),i||$,$,a.namespaceURI,!o&&r?[r]:i?null:a.firstChild?e.call(a.childNodes):null,s,!o&&r?r:i?i.__e:a.firstChild,o,l),V(s,n,l)}(Xe`<${ya} store=${this.store} colors=${a} style=${this.store.get().style}/>`,o);const i=function(e){this.dispatchParentWidth(n)}.bind(this);window.addEventListener("resize",i),this.store.on("close",()=>{o.remove(),window.removeEventListener("resize",i),n&&n.remove()})}getStore(){return this.store}};window.ClearvisioAppointmentBooker=ka;export{ka as default};