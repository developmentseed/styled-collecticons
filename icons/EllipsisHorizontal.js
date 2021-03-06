const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M4,8c0-1.103-0.897-2-2-2S0,6.897,0,8s0.897,2,2,2S4,9.103,4,8z M6,8c0,1.103,0.897,2,2,2s2-0.897,2-2S9.103,6,8,6 S6,6.897,6,8z M12,8c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S12,6.897,12,8z' /></svg>
}

const EllipsisHorizontal = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = EllipsisHorizontal
