const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0.292,15.001l0.707,0.707c0.389,0.389,1.025,0.389,1.414,0l3.675-3.675C7.08,12.646,8.249,13,9.5,13 c3.59,0,6.5-2.91,6.5-6.5S13.09,0,9.5,0S3,2.91,3,6.5c0,1.251,0.354,2.42,0.967,3.412l-3.675,3.675 C-0.097,13.976-0.097,14.612,0.292,15.001z M9.5,11c-1.202,0-2.332-0.468-3.182-1.318C5.468,8.832,5,7.702,5,6.5 s0.468-2.332,1.318-3.182S8.298,2,9.5,2s2.332,0.468,3.182,1.318C13.532,4.168,14,5.298,14,6.5s-0.468,2.332-1.318,3.182 C11.832,10.532,10.702,11,9.5,11z' /></svg>
}

const MagnifierRight = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = MagnifierRight
