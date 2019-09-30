const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M13.5,11c-0.609,0-1.169,0.219-1.603,0.581l-6.9-3.45C5,8.088,5,8.044,5,8c0-0.044,0-0.088-0.003-0.131l6.9-3.45 C12.331,4.781,12.891,5,13.5,5C14.881,5,16,3.881,16,2.5S14.881,0,13.5,0S11,1.119,11,2.5c0,0.044,0,0.088,0.003,0.131l-6.9,3.45 C3.669,5.719,3.109,5.5,2.5,5.5C1.119,5.5,0,6.619,0,8s1.119,2.5,2.5,2.5c0.609,0,1.169-0.219,1.603-0.581l6.9,3.45 C11,13.412,11,13.456,11,13.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S14.881,11,13.5,11z' /></svg>
}

const Share2 = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Share2
