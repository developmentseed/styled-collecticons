const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M11.685,2.886L11.686,2.886L14.586,-0.014L16,1.4L13.345,4.055C15.264,5.792 16,8 16,8C16,8 14,14 8,14C6.537,14 5.312,13.643 4.296,13.104L1.4,16L-0.014,14.586L2.64,11.932L2.64,11.932L4.055,10.516L4.055,10.516L5.472,9.1L5.472,9.1L11.685,2.886ZM5.806,11.594C6.444,11.846 7.173,12 8,12C11.479,12 13.214,9.267 13.832,8C13.519,7.356 12.917,6.338 11.949,5.49C11.97,5.658 12,5.825 12,6C12,8.209 10.209,10 8,10C7.81,10 7.622,9.987 7.439,9.961L5.806,11.594ZM1.669,10.902C0.478,9.435 0,8 0,8C0,8 2,2 8,2C8.828,2 9.579,2.114 10.26,2.311L4.549,8.023C4.2,7.429 4,6.738 4,6C4,5.826 4.03,5.66 4.051,5.491C3.082,6.34 2.481,7.358 2.168,8C2.361,8.396 2.661,8.932 3.088,9.484L1.669,10.902Z' /></svg>
}

const EyeDisabled = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = EyeDisabled
