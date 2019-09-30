const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M9.053,13.581c-0.003-0.322,0.084-0.6,0.219-0.891c-0.288,0.253-0.403,0.541-0.506,0.931c0.028-0.456,0.25-3.45,0.25-3.6 c0.766-2.188,0.425-8.722,1.4-9.534C9.291,0.691,8.913,1.841,8.55,2.753C8.194,1.681,8.475,1,7.294,0.625 c0.944,0.8,0.756,1.491,0.95,2.594c-0.566-0.734-0.391-1.65-1.041-2.4C7.019,0.628,6.406,0.162,6.406,0.162 c0,0.028,0.491,1.009,0.581,1.528c0.091,0.519,0.306,1.556,0.275,1.938C7.341,5.747,7.875,7.8,8.241,9.878 c0.059,0.353,0.244,1.391,0.244,1.391L8.525,11.7c-0.066-0.284-0.125-0.541-0.163-0.65c-0.106-0.312-0.366-1.103-0.428-1.431 C7.044,7.787,5.416,4.2,3.241,3.669C4.475,4.763,5.803,6.206,6.1,7.6C5.437,6.669,2.831,4.681,1.772,3.956 c1.997,2.072,3.6,4.219,5.337,6.522c0.503,0.653,1.131,1.978,1.178,2.278c0.034,0.222,0.075,1.05,0.1,1.559 c-0.972-2.344-1.506-3.534-3.297-4.587C4.784,9.566,3.834,9.237,3.834,9.237c0.431,0.475,0.959,0.5,1.353,1.166 C4.372,9.869,3.525,9.775,2.594,9.744c2.991,1.547,4.606,1.978,5.616,4.95C8.291,15.181,8.169,15.55,8.178,16h0.669 c-0.003-0.316,0.003-0.616,0-0.678c0.031-0.206,0.041-0.831,0.131-1.022c0.312-0.794,0.819-1.169,1.525-1.631 C9.862,12.875,9.541,12.797,9.053,13.581z M11.997,6.578c-0.247,0.234-0.978,1.162-0.978,1.162c0.044-1.312,0.372-2.719,1.209-3.7 c-1.163,0.762-1.822,2.644-2.125,3.794c-0.119,0.463-1.497,3.144-0.856,4.584c0.125-0.525,0.422-1.038,0.75-1.487 c0.153-0.203,0.794-1.228,1.438-2.688c0.566-1.469,1.491-2.328,2.8-3.056C13.25,5.338,12.687,5.906,11.997,6.578z' /></svg>
}

const BrandDevelopmentSeed2 = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandDevelopmentSeed2
