const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M12.707,11.293l-1.414,1.414L8,9.414l-3.293,3.293 l-1.414-1.414L6.586,8L3.293,4.707l1.414-1.414L8,6.586l3.293-3.293l1.414,1.414L9.414,8L12.707,11.293z' /></svg>
}

const DiscXmark = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = DiscXmark
