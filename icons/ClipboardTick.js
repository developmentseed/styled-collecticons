const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M11,2c0-0.6-0.4-1-1-1H9.4C9.2,0.4,8.7,0,8,0S6.8,0.4,6.6,1H6C5.4,1,5,1.4,5,2v2h6V2z M13,2h-1v2h1v10H3V4h1V2H3 C1.9,2,1,2.9,1,4v10c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V4C15,2.9,14.1,2,13,2z M7,9.7L5.2,8L3.8,9.4L7,12.6l5.2-5.7l-1.5-1.3L7,9.7 z' /></svg>
}

const ClipboardTick = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ClipboardTick
