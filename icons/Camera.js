const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M6,8.5c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2S6,7.397,6,8.5z M15,3h-3.5C11.25,2,11,1,10,1H6C5,1,4.75,2,4.5,3H1 C0.45,3,0,3.45,0,4v9c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V4C16,3.45,15.55,3,15,3z M8,12.5c-2.209,0-4-1.791-4-4s1.791-4,4-4 s4,1.791,4,4S10.209,12.5,8,12.5z' /></svg>
}

const Camera = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Camera
