const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M6,2h4v1h2V2c0-1.1-0.9-2-2-2H6C4.9,0,4,0.9,4,2v1h2V2z M0,14c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V8H0V14z M7,9h2v1 c0,0.553-0.447,1-1,1s-1-0.447-1-1V9z M15,4H1C0.45,4,0,4.45,0,5v2h16V5C16,4.45,15.55,4,15,4z' /></svg>
}

const Briefcase = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Briefcase
