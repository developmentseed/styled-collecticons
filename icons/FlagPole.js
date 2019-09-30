const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M2.009,0H1.991C1.444,0,1,0.444,1,0.991V16h2V0.991C3,0.444,2.556,0,2.009,0z M16,1H4v8h12l-4-4L16,1z' /></svg>
}

const FlagPole = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = FlagPole
