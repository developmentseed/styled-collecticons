const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M4,12H0v2h4v1h3v-4H4V12z M9,10h3V6H9v1H0v2h9V10z M3,5h3V1H3v1H0v2h3V5z M8,14h8v-2H8V14z M7,2v2h9V2H7z M13,9h3V7h-3V9z' /></svg>
}

const SlidersHorizontal = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = SlidersHorizontal
