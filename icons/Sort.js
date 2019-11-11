const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,11.5L4.706,8.878l-1.416,1.416L8,14l4.706-3.706l-1.416-1.416L8,11.5z M8,4.5l3.294,2.622l1.416-1.416L8,2L3.294,5.706 l1.416,1.416L8,4.5z' /></svg>
}

const Sort = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Sort
