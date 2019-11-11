const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M7.734,0c0.334,0.184,1.469,0.938,1.469,2.297c0,1.203-1.941,4.791-1.188,5.722l4.812-6c0,0,1.197,1.456,0.478,2.688 c-0.747,1.281-2.588,2.781-3.325,3.897C9.524,9.294,9.746,9.663,9.746,9.663l5.834-3.194c0,0,0.469,1.391-0.641,2.391 c-1.172,1.056-3.931,1.475-3.931,2.575h4.006c0,0-0.409,1.216-1.184,1.384c-0.684,0.15-2.144-0.247-2.831,0.372 C10.271,13.847,9.456,16,7.015,16c-1.641,0-2.912-1.184-3.703-2.738c-0.913-1.797-1.938-2.663-2.991-2.881 c0,0,0.575-1.359,2.088-1.359c2.081,0,2.972,3.409,4.544,3.409c0.453,0,0.934-0.234,0.934-0.903c0-0.725-1.044-1.325-1.334-1.525 C5.862,9.522,5.309,8.756,5.665,7.472L7.734,0' /></svg>
}

const BrandHumanRights = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandHumanRights
