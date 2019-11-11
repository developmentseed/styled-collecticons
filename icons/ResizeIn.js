const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M2,8L8,8L8,14L6,14L6,11.4L1.4,16L-0.014,14.586L4.572,10L2,10L2,8ZM8,2L10,2L10,4.6L14.6,0L16.014,1.414L11.428,6L14,6L14,8L8,8L8,2Z' /></svg>
}

const ResizeIn = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ResizeIn
