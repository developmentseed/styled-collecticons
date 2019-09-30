const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M3.997,12.445c2.072,0,3.059-0.972,3.059-0.972L6.469,9.88c0,0-0.953,1.062-2.381,1.062c-1.266,0-2.162-1.1-2.162-2.859 c0-2.253,1.138-3.059,2.253-3.059c1.613,0,2.125,1.044,2.566,2.381l0.588,1.831c0.588,1.778,1.688,3.206,4.856,3.206 c2.272,0,3.812-0.697,3.812-2.528c0-1.484-0.844-2.253-2.419-2.622l-1.172-0.256c-0.806-0.184-1.044-0.512-1.044-1.062 c0-0.622,0.494-0.991,1.3-0.991c0.878,0,1.356,0.331,1.428,1.119l1.831-0.219c-0.147-1.65-1.284-2.328-3.153-2.328 c-1.65,0-3.262,0.622-3.262,2.622c0,1.247,0.606,2.034,2.125,2.4l1.247,0.294c0.934,0.219,1.247,0.606,1.247,1.137 c0,0.678-0.659,0.953-1.906,0.953c-1.85,0-2.622-0.972-3.059-2.309L8.556,6.82C7.791,4.436,6.562,3.558,4.125,3.558 C1.428,3.558,0,5.261,0,8.158C0,10.942,1.428,12.445,3.997,12.445z' /></svg>
}

const BrandLastfm = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandLastfm
