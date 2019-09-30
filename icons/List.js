const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M4,3v2h12V3H4z M0,5h2V3H0V5z M4,9h12V7H4V9z M0,9h2V7H0V9z M4,13h12v-2H4V13z M0,13h2v-2H0V13z' /></svg>
}

const List = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = List
