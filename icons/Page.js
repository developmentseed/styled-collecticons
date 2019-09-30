const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.706,4.206l-3.913-3.913C10.606,0.106,10.353,0,10.087,0H1v16h14V4.916C15,4.65,14.894,4.394,14.706,4.206z M13,14H3V2h7 v3h3V14z' /></svg>
}

const Page = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Page
