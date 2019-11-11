const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg id='collecticon-' x='0px' y='0px' width='16px' height='16px' viewBox='0 0 16 16' enableBackground='new 0 0 16 16' xmlSpace='preserve' preserveAspectRatio='xMidYMid meet' {...props}><rect id='svgGrid' y={0} fill='none' width='100%' height='100%' /><path d='M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z' /></svg>
}

const HamburguerMenu = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = HamburguerMenu
