const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M16,14L16,16L0,16L0,14L16,14ZM13.292,4.39C13.109,4.141 13,3.833 13,3.5C13,2.672 13.672,2 14.5,2C15.328,2 16,2.672 16,3.5C16,4.328 15.328,5 14.5,5C14.483,5 14.466,5 14.448,4.999L10.708,10.61C10.891,10.859 11,11.167 11,11.5C11,12.328 10.328,13 9.5,13C8.672,13 8,12.328 8,11.5C8,11.193 8.092,10.907 8.251,10.67L5.626,6.995C5.584,6.998 5.542,7 5.5,7C5.458,7 5.416,6.998 5.374,6.995L2.749,10.67C2.908,10.907 3,11.193 3,11.5C3,12.328 2.328,13 1.5,13C0.672,13 0,12.328 0,11.5C0,10.672 0.672,10 1.5,10C1.542,10 1.584,10.002 1.626,10.005L4.251,6.33C4.092,6.093 4,5.807 4,5.5C4,4.672 4.672,4 5.5,4C6.328,4 7,4.672 7,5.5C7,5.807 6.908,6.093 6.749,6.33L9.374,10.005C9.416,10.002 9.458,10 9.5,10C9.517,10 9.534,10 9.552,10.001L13.292,4.39Z' /></svg>
}

const ChartLine = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = ChartLine
