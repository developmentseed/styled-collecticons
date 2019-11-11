const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg id='collecticon-' x='0px' y='0px' width='16px' height='16px' viewBox='0 0 16 16' enableBackground='new 0 0 16 16' xmlSpace='preserve' preserveAspectRatio='xMidYMid meet' {...props}><rect id='svgGrid' y={0} fill='none' width='100%' height='100%' /><polygon points='12.414,14.586 5.828,8 12.414,1.414 11,0 3,8 11,16 ' /></svg>
}

const ChevronLeft = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ChevronLeft
