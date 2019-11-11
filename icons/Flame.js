const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M9.65,4.05C9.8,4.2,9.95,4.35,10.1,4.5c0.9,0.95,1.6,1.9,2.1,2.8c0.55,1,0.85,1.9,0.85,2.65c0,0.6-0.15,1.2-0.4,1.7 c-0.25,0.45-0.6,0.85-1.05,1.2c-0.45,0.35-1,0.6-1.65,0.8C9.3,13.9,8.65,14,8,14s-1.3-0.1-1.9-0.3s-1.15-0.45-1.65-0.8 C4,12.55,3.65,12.15,3.4,11.7C3.15,11.2,3,10.65,3,10c0-0.6,0.2-1.3,0.65-2.1C3.75,7.7,3.85,7.5,4,7.3c0.8,0.65,1.55,0.8,2.05,0.8 C6.9,8.1,7.7,7.7,8.35,7c0.4-0.5,0.75-1.1,1-1.85C9.45,4.8,9.55,4.45,9.65,4.05 M8,0c0,3.9-0.85,6.1-1.95,6.1C5.45,6.1,4.7,5.45,4,4 c-1.65,1.85-3,4-3,6c0,4,3.7,6,7,6l0,0c3.3,0,7-2,7-6C15,5,8,0,8,0L8,0z' /></svg>
}

const Flame = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Flame
