const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,2C2,2 0,8 0,8C0,8 2,14 8,14C14,14 16,8 16,8C16,8 14,2 8,2ZM8,12C4.519,12 2.787,9.272 2.168,8C2.481,7.358 3.082,6.34 4.051,5.491C4.03,5.66 4,5.826 4,6C4,8.209 5.791,10 8,10C10.209,10 12,8.209 12,6C12,5.825 11.97,5.658 11.949,5.49C12.917,6.338 13.519,7.356 13.832,8C13.214,9.267 11.479,12 8,12Z' /></svg>
}

const Eye = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Eye
