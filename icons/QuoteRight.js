const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z' /></svg>
}

const QuoteRight = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = QuoteRight
