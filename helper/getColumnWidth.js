export default function (style, parentWidth) {
  if ((style !== 'embedded' && style !== 'embedded-safe') || parentWidth == 'large') {
    return 'col-sm-10 col-md-8';
  }

  return parentWidth === 'medium' ? 'col-sm-10' : ''
}