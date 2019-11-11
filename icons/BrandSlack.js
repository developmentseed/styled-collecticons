const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,10.111c0,0.925,0.756,1.681,1.681,1.681c0.925,0,1.681-0.756,1.681-1.681V8.43H1.681C0.756,8.43,0,9.186,0,10.111z M16,5.889c0-0.925-0.756-1.681-1.681-1.681c-0.925,0-1.681,0.756-1.681,1.681V7.57h1.681C15.244,7.57,16,6.814,16,5.889z M10.111,7.57c0.925,0,1.681-0.756,1.681-1.681V1.681C11.792,0.756,11.036,0,10.111,0C9.186,0,8.43,0.756,8.43,1.681v4.208 C8.43,6.814,9.186,7.57,10.111,7.57z M5.889,8.43c-0.925,0-1.681,0.756-1.681,1.681v4.208C4.208,15.244,4.964,16,5.889,16 c0.925,0,1.681-0.756,1.681-1.681v-4.208C7.57,9.186,6.814,8.43,5.889,8.43z M5.889,4.208H1.681C0.756,4.208,0,4.964,0,5.889 C0,6.814,0.756,7.57,1.681,7.57h4.208c0.925,0,1.681-0.756,1.681-1.681C7.57,4.964,6.814,4.208,5.889,4.208z M5.889,0 C4.964,0,4.208,0.756,4.208,1.681c0,0.925,0.756,1.681,1.681,1.681H7.57V1.681C7.57,0.756,6.814,0,5.889,0z M14.319,8.43h-4.208 c-0.925,0-1.681,0.756-1.681,1.681c0,0.925,0.756,1.681,1.681,1.681h4.208c0.925,0,1.681-0.756,1.681-1.681 C16,9.186,15.244,8.43,14.319,8.43z M10.111,12.638H8.43v1.681C8.43,15.244,9.186,16,10.111,16c0.925,0,1.681-0.756,1.681-1.681 C11.792,13.394,11.036,12.638,10.111,12.638z' /></svg>
}

const BrandSlack = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandSlack