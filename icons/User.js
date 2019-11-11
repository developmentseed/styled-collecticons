const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,8c2.209,0,4-1.791,4-4s-1.791-4-4-4S4,1.791,4,4S5.791,8,8,8z M12,10H4c-2.209,0-4,1.791-4,4v2h16v-2 C16,11.791,14.209,10,12,10z' /></svg>
}

const User = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = User
