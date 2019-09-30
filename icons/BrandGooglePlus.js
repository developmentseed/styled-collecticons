const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.544,7.272V5.816h-1.456v1.456h-1.453v1.453h1.456v1.456h1.459V8.725H16V7.272L14.544,7.272L14.544,7.272z M5.091,7.272 v1.747h2.891c-0.116,0.75-0.872,2.197-2.887,2.197c-1.737,0-3.156-1.441-3.156-3.216s1.416-3.216,3.153-3.216 c0.991,0,1.653,0.422,2.031,0.784l1.381-1.328C7.616,3.409,6.466,2.909,5.094,2.909C2.275,2.909,0,5.191,0,8 s2.275,5.091,5.091,5.091c2.941,0,4.887-2.066,4.887-4.975c0-0.334-0.038-0.591-0.081-0.844L5.091,7.272L5.091,7.272z' /></svg>
}

const BrandGooglePlus = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandGooglePlus
