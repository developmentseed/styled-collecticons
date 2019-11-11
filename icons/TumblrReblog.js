const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M2,5h10.672l-1.837,1.834L12,8l4-4l-4-4l-1.166,1.166L12.672,3H0v7l2-2V5z M14,11H3.328l1.838-1.834L4,8l-4,4l4,4 l1.166-1.166L3.328,13H16V6l-2,2V11z' /></svg>
}

const TumblrReblog = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = TumblrReblog
