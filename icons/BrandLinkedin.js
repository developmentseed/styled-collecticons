const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.815,0H1.18C0.53,0,0,0.517,0,1.153v13.694C0,15.485,0.53,16,1.18,16h13.636C15.467,16,16,15.485,16,14.847V1.153 C16,0.517,15.467,0,14.815,0z M4.746,13.634H2.371V5.999h2.376V13.634z M3.559,4.955c-0.762,0-1.377-0.617-1.377-1.377 c0-0.759,0.615-1.376,1.377-1.376c0.759,0,1.376,0.617,1.376,1.376C4.935,4.339,4.319,4.955,3.559,4.955z M13.633,13.634h-2.371 V9.922c0-0.886-0.017-2.025-1.233-2.025c-1.235,0-1.423,0.964-1.423,1.96v3.778H6.235V5.999h2.274v1.043h0.033 c0.317-0.6,1.091-1.233,2.245-1.233c2.401,0,2.845,1.581,2.845,3.638V13.634z' /></svg>
}

const BrandLinkedin = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandLinkedin
