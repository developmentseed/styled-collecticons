const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M11,5L9,7V4L8,3L7,4v3L5,5H0v6h5l2-2v4h2V9l2,2h5V5H11z M2,10H1V6h1V10z M4,10H3V6h1V10z M13,10h-1V6h1V10z M15,10h-1V6h1 V10z' /></svg>
}

const BrandSatsummit = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandSatsummit
