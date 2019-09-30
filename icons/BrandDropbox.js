const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8.011,3.76L4.005,6.317l4.005,2.557L4.005,11.43L0,8.852l4.005-2.557L0,3.76l4.005-2.557L8.011,3.76z M3.984,12.24 l4.005-2.557l4.005,2.557l-4.005,2.557L3.984,12.24z M8.011,8.852l4.005-2.557L8.011,3.76l3.984-2.557L16,3.76l-4.005,2.557 L16,8.874l-4.005,2.557L8.011,8.852z' /></svg>
}

const BrandDropbox = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandDropbox
