const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M16,12.5C16,11.837 15.737,11.201 15.268,10.732C14.799,10.263 14.163,10 13.5,10C11.447,10 8.553,10 6.5,10C5.837,10 5.201,10.263 4.732,10.732C4.263,11.201 4,11.837 4,12.5C4,14.147 4,15 4,15L16,15C16,15 16,14.147 16,12.5ZM3,13L0,13C0,13 0,12.147 0,10.5C0,9.837 0.263,9.201 0.732,8.732C1.201,8.263 1.837,8 2.5,8L6.536,8C6.754,8.376 7.031,8.714 7.355,9L6.5,9C4.567,9 3,10.567 3,12.5L3,13ZM10,3C11.656,3 13,4.344 13,6C13,7.656 11.656,9 10,9C8.344,9 7,7.656 7,6C7,4.344 8.344,3 10,3ZM6.126,6.997C6.084,6.999 6.042,7 6,7C4.344,7 3,5.656 3,4C3,2.344 4.344,1 6,1C7.026,1 7.932,1.516 8.473,2.302C7.022,2.903 6,4.333 6,6C6,6.344 6.044,6.679 6.126,6.997Z' /></svg>
}

const Users = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = Users
