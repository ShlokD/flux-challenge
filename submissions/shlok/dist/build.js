(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var n,l,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function p(n,l,u){var t,i=arguments,o={};for(t in l)"key"!==t&&"ref"!==t&&(o[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===o[t]&&(o[t]=n.defaultProps[t]);return h(n,o,l&&l.key,l&&l.ref)}function h(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function v(n){return n.children}function y(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function x(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(w)}function w(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=N(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?d(o):r),T(t,o),i!=r&&m(o)))}function g(n,l,u,t,i,o,r,c,s){var p,h,v,y,m,x,w,g=u&&u.__k||e,_=g.length;if(c==f&&(c=null!=o?o[0]:_?d(u,0):null),p=0,l.__k=k(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(v=g[p])||v&&u.key==v.key&&u.type===v.type)g[p]=void 0;else for(h=0;h<_;h++){if((v=g[h])&&u.key==v.key&&u.type===v.type){g[h]=void 0;break}v=null}if(y=N(n,u,v=v||f,t,i,o,r,c,s),(h=u.ref)&&v.ref!=h&&(w||(w=[]),v.ref&&w.push(v.ref,null,u),w.push(h,u.__c||y,u)),null!=y){if(null==x&&(x=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==v||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(m=c,h=0;(m=m.nextSibling)&&h<_;h+=2)if(m==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return p++,u}),l.__e=x,null!=o&&"function"!=typeof l.type)for(p=o.length;p--;)null!=o[p]&&a(o[p]);for(p=_;p--;)null!=g[p]&&z(g[p],g[p]);if(w)for(p=0;p<w.length;p++)j(w[p],w[++p],w[++p])}function k(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)k(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?h(null,n,null,null):null!=n.__e||null!=n.__c?h(n.type,n.props,n.key,null):n):n);return u}function _(n,l,u,t,i){var o;for(o in u)o in l||C(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],t)}function b(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function C(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||b(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||b(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,P,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,P,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function P(l){this.l[l.type](n.event?n.event(l):l)}function N(l,u,t,i,o,r,f,e,c){var a,p,h,d,m,x,w,_,b,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(_=u.props,b=(a=P.contextType)&&i[a.__c],C=a?b?b.props.value:a.__:i,t.__c?w=(p=u.__c=t.__c).__=p.__E:("prototype"in P&&P.prototype.render?u.__c=p=new P(_,C):(u.__c=p=new y(_,C),p.constructor=P,p.render=A),b&&b.sub(p),p.props=_,p.state||(p.state={}),p.context=C,p.__n=i,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,P.getDerivedStateFromProps(_,p.__s))),d=p.props,m=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&_!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(_,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(_,p.__s,C)){for(p.props=_,p.state=p.__s,p.__d=!1,p.__v=u,u.__e=t.__e,u.__k=t.__k,p.__h.length&&f.push(p),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(_,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,m,x)})}p.context=C,p.props=_,p.state=p.__s,(a=n.__r)&&a(u),p.__d=!1,p.__v=u,p.__P=l,a=p.render(p.props,p.state,p.context),u.__k=k(null!=a&&a.type==v&&null==a.key?a.props.children:a),null!=p.getChildContext&&(i=s(s({},i),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(x=p.getSnapshotBeforeUpdate(d,m)),g(l,u,t,i,o,r,f,e,c),p.base=u.__e,p.__h.length&&f.push(p),w&&(p.__E=p.__=null),p.__e=null}else u.__e=$(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,t)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,t,i,o,r,c){var s,a,p,h,v,y=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),p=(y=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(y===f)for(y={},v=0;v<n.attributes.length;v++)y[n.attributes[v].name]=n.attributes[v].value;(h||p)&&(h&&p&&h.__html==p.__html||(n.innerHTML=h&&h.__html||""))}_(n,d,y,i,c),l.__k=l.props.children,h||g(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function j(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function z(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&j(i,null,u),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&z(i[r],u,t);null!=o&&a(o)}function A(n,l,u){return this.constructor(n,u)}function D(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=p(v,null,[l]),c=[],N(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),T(c,l)}n={__e:function(n,l){for(var u;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError)u.setState(u.constructor.getDerivedStateFromError(n));else{if(null==u.componentDidCatch)continue;u.componentDidCatch(n)}return x(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),x(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),x(this))},y.prototype.render=v,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0,exports.render=D,exports.hydrate=function(n,l){D(n,l,o)},exports.createElement=p,exports.h=p,exports.Fragment=v,exports.createRef=function(){return{}},exports.isValidElement=l,exports.Component=y,exports.cloneElement=function(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),h(n.type,l,l.key||n.key,l.ref||n.ref)},exports.createContext=function(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,x(n)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u},exports.toChildArray=k,exports._e=z,exports.options=n;


},{}],2:[function(require,module,exports){
const {
  h,
  render,
  Component
} = require("preact");

class NamesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h("ul", {
      className: "css-slots"
    });
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlanet: "Tattoine",
      jedis: []
    };
    this.currentUrl = "//localhost:3000/dark-jedis/3616";
    this.currentJedi = 0;
    this.onReceiveMessage = this.onReceiveMessage.bind(this);
  }

  onReceiveMessage(event) {
    const messageData = JSON.parse(event.data);
    this.setState({
      currentPlanet: messageData.name
    });
  }

  componentDidMount() {
    const {
      jedis
    } = this.state;
    this.planetSocket = new WebSocket("ws://localhost:4000");
    this.planetSocket.onmessage = this.onReceiveMessage;
    fetch(this.currentUrl).then(response => response.json()).then(responseJSON => {
      jedis.push(responseJSON);
    });
  }

  render() {
    const {
      currentPlanet,
      jedis
    } = this.state;
    return h("div", {
      class: "app-container"
    }, h("div", {
      class: "css-root"
    }, h("h1", {
      class: "css-planet-monitor"
    }, "Obi-Wan currently on ", currentPlanet)), h("section", {
      class: "css-scrollable-list"
    }, h("ul", {
      class: "css-slots"
    }, jedis.map(jedi => {
      return h("li", {
        class: "css-slot"
      }, h("h3", null, jedi.name, "n"), h("h6", null, "Homeworld: ", jedi.homeworld.name));
    }))), h("div", {
      class: "css-scroll-buttons"
    }, h("button", {
      class: "css-button-up"
    }), h("button", {
      class: "css-button-down"
    })));
  }

}

render(h(App, null), document.getElementById("app"));

},{"preact":1}]},{},[2]);
