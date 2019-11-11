const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M6.794,12.794C6.316,13.269,5.681,13.531,5,13.531s-1.316-0.262-1.794-0.738c-0.987-0.988-0.987-2.597,0-3.584L5.5,6.916 L4.084,5.5L1.791,7.794c-1.766,1.769-1.766,4.644,0.003,6.413C2.647,15.062,3.784,15.531,5,15.531s2.353-0.469,3.206-1.325 l2.294-2.294L9.084,10.5L6.794,12.794z M14.206,1.794C13.353,0.938,12.216,0.469,11,0.469S8.647,0.938,7.794,1.794L5.5,4.084 L6.916,5.5l2.294-2.294C9.684,2.731,10.319,2.469,11,2.469s1.316,0.263,1.794,0.737c0.988,0.987,0.988,2.597,0,3.584L10.5,9.084 l1.416,1.416l2.294-2.294C15.975,6.438,15.975,3.562,14.206,1.794z M11.706,5.706l-1.416-1.416l-6,6l1.416,1.416L11.706,5.706z' /></svg>
}

const Link = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Link
