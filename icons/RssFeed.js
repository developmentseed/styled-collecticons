const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M1,5v2c1.081,0,2.128,0.211,3.113,0.628c0.952,0.403,1.808,0.98,2.543,1.715s1.312,1.591,1.715,2.543 C8.789,12.872,9,13.919,9,15h2C11,9.477,6.523,5,1,5z M4,10c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S5.105,10,4,10z M1,1v2 c1.621,0,3.192,0.317,4.67,0.942c1.429,0.604,2.712,1.47,3.815,2.573c1.103,1.103,1.968,2.386,2.573,3.815 C12.683,11.808,13,13.379,13,15h2C15,7.268,8.732,1,1,1z' /></svg>
}

const RssFeed = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = RssFeed
