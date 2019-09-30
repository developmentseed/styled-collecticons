const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z' /></svg>
}

const QuoteLeft = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = QuoteLeft
