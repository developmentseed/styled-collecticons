const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,6.999v2.002h16V6.999H0z M7,3.828V6h2V3.828l1.586,1.586L12,4L8,0L4,4l1.414,1.414L7,3.828z M9,12.172V10H7v2.172 l-1.586-1.586L4,12l4,4l4-4l-1.414-1.414L9,12.172z' /></svg>
}

const ResizeCenterVertical = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ResizeCenterVertical
