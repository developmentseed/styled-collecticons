const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M16,3.038c-0.589,0.261-1.221,0.438-1.885,0.517c0.678-0.406,1.198-1.05,1.443-1.816c-0.634,0.376-1.337,0.649-2.085,0.797 c-0.599-0.638-1.452-1.037-2.396-1.037c-1.813,0-3.283,1.47-3.283,3.282c0,0.257,0.029,0.508,0.085,0.748 c-2.728-0.137-5.147-1.444-6.766-3.43C0.831,2.584,0.669,3.148,0.669,3.75c0,1.139,0.579,2.144,1.46,2.732 C1.592,6.465,1.086,6.317,0.643,6.071c0,0.014,0,0.027,0,0.041c0,1.59,1.132,2.917,2.633,3.219C3,9.406,2.71,9.447,2.411,9.447 c-0.212,0-0.417-0.021-0.618-0.059c0.418,1.304,1.63,2.253,3.066,2.28c-1.123,0.88-2.539,1.405-4.077,1.405 c-0.265,0-0.526-0.016-0.783-0.046c1.453,0.931,3.178,1.475,5.032,1.475c6.038,0,9.34-5.002,9.34-9.34 c0-0.142-0.003-0.284-0.01-0.425C15.003,4.274,15.56,3.696,16,3.038z' /></svg>
}

const BrandTwitter = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandTwitter
