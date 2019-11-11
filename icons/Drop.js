const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,13c2,0,4.497-1.5,4-4C11,9,6,13,8,13z M8,0c0,0-7,5-7,10c0,4,3.688,6,7,6s7-2,7-6C15,5,8,0,8,0z M12.606,11.687 c-0.244,0.456-0.6,0.866-1.062,1.209c-0.466,0.35-1.019,0.622-1.641,0.816C9.294,13.9,8.637,14,8,14s-1.294-0.1-1.903-0.288 c-0.622-0.191-1.175-0.466-1.641-0.816c-0.463-0.347-0.819-0.753-1.062-1.209C3.131,11.194,3,10.625,3,10 c0-0.788,0.278-1.684,0.825-2.669c0.494-0.891,1.2-1.831,2.094-2.794C6.659,3.741,7.406,3.056,8,2.553 c0.594,0.503,1.341,1.184,2.084,1.984c0.894,0.966,1.6,1.906,2.094,2.794C12.722,8.316,13,9.212,13,10 C13,10.625,12.866,11.194,12.606,11.687z' /></svg>
}

const Drop = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Drop
