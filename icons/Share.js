const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M10,6v2h3v6H3V8h3V6H1v10h14V6H10z M7,3.328V11h2V3.328l1.834,1.834L12,4L8,0L4,4l1.166,1.166L7,3.328z' /></svg>
}

const Share = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Share
