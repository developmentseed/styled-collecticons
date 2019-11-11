const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,8c0,1.933,1.567,3.5,3.5,3.5S7,9.933,7,8S5.433,4.5,3.5,4.5S0,6.067,0,8z M9,8c0,1.933,1.567,3.5,3.5,3.5S16,9.933,16,8 s-1.567-3.5-3.5-3.5S9,6.067,9,8z' /></svg>
}

const BrandFlickr = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandFlickr
