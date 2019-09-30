const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M16,14L16,16L0,16L0,14L16,14ZM11,5L11,13L9,13L9,5L11,5ZM15,1L15,13L13,13L13,1L15,1ZM3,9L3,13L1,13L1,9L3,9ZM7,3L7,13L5,13L5,3L7,3Z' /></svg>
}

const ChartBars = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ChartBars
