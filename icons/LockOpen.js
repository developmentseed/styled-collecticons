const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14,7h-1V4c0-2.206-1.794-4-4-4H7C4.794,0,3,1.794,3,4h2c0-1.103,0.897-2,2-2h2c1.103,0,2,0.897,2,2v3H8H2 C1.45,7,1,7.45,1,8v7c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1V8C15,7.45,14.55,7,14,7z M9,12.731V13.5c0,0.55-0.45,1-1,1 s-1-0.45-1-1v-0.769C6.403,12.384,6,11.741,6,11c0-1.103,0.897-2,2-2s2,0.897,2,2C10,11.741,9.597,12.384,9,12.731z' /></svg>
}

const LockOpen = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = LockOpen
