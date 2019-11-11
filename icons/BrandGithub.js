const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path fillRule='evenodd' clipRule='evenodd' d='M7.999,0C3.582,0,0,3.582,0,8c0,3.534,2.292,6.533,5.471,7.591 c0.4,0.073,0.546-0.174,0.546-0.386c0-0.19-0.007-0.693-0.011-1.361c-2.225,0.483-2.695-1.072-2.695-1.072 c-0.364-0.924-0.888-1.17-0.888-1.17c-0.726-0.496,0.055-0.486,0.055-0.486c0.803,0.057,1.225,0.824,1.225,0.824 c0.714,1.223,1.872,0.87,2.328,0.665c0.073-0.517,0.279-0.87,0.508-1.069c-1.776-0.202-3.644-0.888-3.644-3.954 c0-0.873,0.312-1.587,0.823-2.147C3.637,5.233,3.362,4.419,3.798,3.318c0,0,0.672-0.215,2.2,0.82C6.636,3.961,7.32,3.872,8,3.869 c0.679,0.003,1.364,0.092,2.003,0.269c1.527-1.035,2.198-0.82,2.198-0.82c0.436,1.101,0.162,1.915,0.08,2.117 c0.513,0.559,0.822,1.273,0.822,2.147c0,3.073-1.87,3.75-3.653,3.948c0.287,0.247,0.543,0.735,0.543,1.481 c0,1.069-0.01,1.932-0.01,2.195c0,0.214,0.144,0.463,0.55,0.385C13.71,14.53,16,11.534,16,8C16,3.582,12.418,0,7.999,0z' /></svg>
}

const BrandGithub = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandGithub
