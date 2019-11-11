const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M13,11H9v2h6V1H3v6h2V3h8V11z M0,8v8h8v-2H3.412l6.294-6.294L8.294,6.294L2,12.587V8H0z' /></svg>
}

const ExpandDownLeft = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ExpandDownLeft
