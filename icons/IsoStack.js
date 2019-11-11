const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,9L0,5l8-4l8,4L8,9z M14.397,7.2L16,8l-8,4L0,8l1.603-0.8L8,10.397L14.397,7.2z M14.397,10.2L16,11l-8,4l-8-4l1.603-0.8 L8,13.397L14.397,10.2z' /></svg>
}

const IsoStack = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = IsoStack
