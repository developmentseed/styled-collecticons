const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M0,14.462h2.518V4.963H0V14.462z M0,3.83h2.518V1.538H0V3.83z M15.756,5.599c-0.163-0.744-0.468-1.435-0.916-2.074 c-0.558-0.79-1.288-1.333-2.189-1.629c-0.529-0.174-1.192-0.267-1.988-0.279H5.124v12.845h5.538c1.942,0,3.378-0.799,4.308-2.396 C15.657,10.88,16,9.434,16,7.725C16,7.051,15.919,6.343,15.756,5.599z M12.862,10.357c-0.5,1.249-1.385,1.874-2.653,1.874H7.73 V3.847h2.479c1.222,0,2.038,0.35,2.448,1.05c0.41,0.7,0.615,1.704,0.615,3.011C13.272,8.856,13.135,9.672,12.862,10.357z' /></svg>
}

const BrandId = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandId
