import { h } from 'preact';
import htm from 'htm';

var wrappedH = (type, props, ...children) => {
  if (props && props.class) {
    props.class = props.class.trim().split(' ')
      .filter((className) => className.trim())
      .map((className) => className.indexOf('cvio-ab-') !== 0 ? `cvio-ab-${className}` : className)
      .join(' ');
  }

  return h(type, props, ...children);
}

export default htm.bind(wrappedH);
