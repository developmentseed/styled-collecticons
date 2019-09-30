const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M12.706,8.294l-1.416-1.416L9,9.172V0H7v9.172L4.706,6.878L3.291,8.294L8,13L12.706,8.294z M14,4v10H2V4H0v12h16V4H14z' /></svg>
}

const Download = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Download
