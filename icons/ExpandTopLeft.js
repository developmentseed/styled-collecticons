const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M13,13H5V9H3v6h12V3H9v2h4V13z M2,8V3.413l6.294,6.294l1.413-1.413L3.412,2H8V0L0,0l0,8H2z' /></svg>
}

const ExpandTopLeft = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ExpandTopLeft
