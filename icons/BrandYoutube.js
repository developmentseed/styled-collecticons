const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M6.364,10.379L6.364,5.621L10.545,8L6.364,10.379ZM15.666,4.124C15.482,3.431 14.939,2.885 14.251,2.7C13.003,2.364 8,2.364 8,2.364C8,2.364 2.997,2.364 1.749,2.7C1.061,2.885 0.518,3.431 0.334,4.124C0,5.38 0,8 0,8C0,8 0,10.62 0.334,11.876C0.518,12.569 1.061,13.115 1.749,13.3C2.997,13.636 8,13.636 8,13.636C8,13.636 13.003,13.636 14.251,13.3C14.939,13.115 15.482,12.569 15.666,11.876C16,10.62 16,8 16,8C16,8 16,5.38 15.666,4.124' /></svg>
}

const BrandYoutube = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandYoutube
