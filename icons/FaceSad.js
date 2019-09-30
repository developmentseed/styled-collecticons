const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,8C6.134,8 4.569,9.275 4.125,11L6.269,11C6.616,10.403 7.263,10 8,10C8.738,10 9.384,10.403 9.731,11L11.875,11C11.431,9.275 9.863,8 8,8ZM5,7C5.553,7 6,6.553 6,6C6,5.447 5.553,5 5,5C4.447,5 4,5.447 4,6C4,6.553 4.447,7 5,7ZM8,0C3.581,0 0,3.581 0,8C0,12.419 3.581,16 8,16C12.419,16 16,12.419 16,8C16,3.581 12.419,0 8,0ZM12.244,12.244C11.109,13.375 9.603,14 8,14C6.397,14 4.891,13.375 3.756,12.244C2.625,11.109 2,9.603 2,8C2,6.397 2.625,4.891 3.756,3.756C4.891,2.625 6.397,2 8,2C9.603,2 11.109,2.625 12.244,3.756C13.375,4.891 14,6.397 14,8C14,9.603 13.375,11.109 12.244,12.244ZM11,5C10.447,5 10,5.447 10,6C10,6.553 10.447,7 11,7C11.553,7 12,6.553 12,6C12,5.447 11.553,5 11,5Z' /></svg>
}

const FaceSad = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = FaceSad
