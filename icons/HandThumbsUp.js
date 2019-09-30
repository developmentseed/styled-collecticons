const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M3,6L3,15L0,15L0,6L3,6ZM15,5C15.265,5 15.52,5.105 15.707,5.293C15.895,5.48 16,5.735 16,6C16,7.167 16,9.025 16,9.723C16,9.904 15.951,10.082 15.857,10.238C15.455,10.908 14.295,12.842 13.583,14.029C13.221,14.631 12.57,15 11.868,15C10.397,15 7.805,15 6,15C5.47,15 4.961,14.789 4.586,14.414C4.211,14.039 4,13.53 4,13C4,10.745 4,7.197 4,5.702C4,5.247 4.155,4.807 4.438,4.452C5.477,3.154 8,0 8,0C8,0 8,0 8,0C8.552,0 9,0.448 9,1L9,5L15,5Z' /></svg>
}

const HandThumbsUp = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = HandThumbsUp
