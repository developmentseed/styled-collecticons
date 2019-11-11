const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M1,1h4v4H1V1z M6,1h4v4H6V1z M11,1h4v4h-4V1z M1,6h4v4H1V6z M6,6h4v4H6V6z M11,6h4v4h-4V6z M1,11h4v4H1V11z M6,11h4v4H6V11z M11,11h4v4h-4V11z' /></svg>
}

const LayoutGrid3X3 = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = LayoutGrid3X3
