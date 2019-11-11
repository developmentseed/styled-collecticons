const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M5,16L5,4.8L2.4,7.4L1,6L7,0L7,16L5,16ZM11,11.2L13.6,8.6L15,10L9,16L9,0L11,0L11,11.2Z' /></svg>
}

const SwapVertical = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = SwapVertical
