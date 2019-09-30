const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.706,4.206l-3.912-3.912C10.606,0.106,10.353,0,10.088,0H1v8H0v4h10V8H3V2h7v3h3v9H3v-1H1v3h14V4.916 C15,4.65,14.894,4.394,14.706,4.206z' /></svg>
}

const PageLabel = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = PageLabel
