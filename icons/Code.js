const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M12.294,3.294l-1.416,1.416L13.5,8l-2.622,3.294l1.416,1.416L16,8L12.294,3.294z M5.122,4.706L3.706,3.291L0,8l3.706,4.706 l1.416-1.416L2.5,8L5.122,4.706z M6,13h2l2-10H8L6,13z' /></svg>
}

const Code = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Code
