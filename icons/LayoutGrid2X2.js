const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M7,9L7,16L0,16L0,9L7,9ZM15,9L15,16L8,16L8,9L15,9ZM7,1L7,8L0,8L0,1L7,1ZM15,1L15,8L8,8L8,1L15,1Z' /></svg>
}

const LayoutGrid2X2 = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = LayoutGrid2X2
