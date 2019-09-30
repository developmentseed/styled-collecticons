const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,4C5.791,4,4,5.791,4,8s1.791,4,4,4s4-1.791,4-4S10.209,4,8,4z M8,10.5c-1.378,0-2.5-1.122-2.5-2.5S6.622,5.5,8,5.5 s2.5,1.122,2.5,2.5S9.378,10.5,8,10.5z M8,7C7.447,7,7,7.447,7,8s0.447,1,1,1s1-0.447,1-1S8.553,7,8,7z M8,0C3.581,0,0,3.581,0,8 s3.581,8,8,8s8-3.581,8-8S12.419,0,8,0z M12.244,12.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756 C2.622,11.112,2,9.603,2,8s0.625-3.109,1.756-4.244C4.888,2.622,6.397,2,8,2s3.109,0.625,4.244,1.756C13.378,4.888,14,6.397,14,8 S13.375,11.109,12.244,12.244z' /></svg>
}

const Target = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Target
