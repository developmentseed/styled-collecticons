const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M4,13L2,13C1.47,13 0.961,12.789 0.586,12.414C0.211,12.039 0,11.53 0,11C0,9.257 0,6.743 0,5C0,4.47 0.211,3.961 0.586,3.586C0.961,3.211 1.47,3 2,3C5.074,3 10.926,3 14,3C14.53,3 15.039,3.211 15.414,3.586C15.789,3.961 16,4.47 16,5C16,6.743 16,9.257 16,11C16,11.53 15.789,12.039 15.414,12.414C15.039,12.789 14.53,13 14,13L8,13L4,16L4,13Z' /></svg>
}

const SpeechBalloon = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = SpeechBalloon
