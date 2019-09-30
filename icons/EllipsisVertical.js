const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,4c1.103,0,2-0.897,2-2S9.103,0,8,0S6,0.897,6,2S6.897,4,8,4z M8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2 S9.103,6,8,6z M8,12c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S9.103,12,8,12z' /></svg>
}

const EllipsisVertical = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = EllipsisVertical
