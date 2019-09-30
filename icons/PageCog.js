const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M14.706,4.206l-3.912-3.912C10.606,0.106,10.353,0,10.088,0H1v7h2V2h7v3h3v9H9v2h6V4.916C15,4.65,14.894,4.394,14.706,4.206 z M7.592,12.385L9,12.15v-1.288l-1.408-0.231c-0.069-0.25-0.166-0.482-0.288-0.697L8.137,8.77l-0.91-0.91L6.066,8.692 C5.847,8.573,5.618,8.473,5.377,8.407L5.146,7H3.857L3.626,8.407C3.382,8.473,3.15,8.573,2.934,8.692L1.771,7.86L0.86,8.77 l0.832,1.163c-0.119,0.219-0.219,0.447-0.285,0.691L0,10.856v1.288l1.408,0.231c0.066,0.244,0.166,0.475,0.285,0.691L0.86,14.23 l0.91,0.91l1.164-0.832c0.219,0.119,0.447,0.219,0.691,0.285L3.857,16h1.289l0.231-1.407c0.244-0.066,0.476-0.166,0.688-0.285 l1.164,0.832l0.91-0.91l-0.829-1.154C7.426,12.857,7.527,12.629,7.592,12.385z M4.492,12.788c-0.71,0-1.289-0.579-1.289-1.288 s0.579-1.288,1.289-1.288c0.71,0,1.289,0.575,1.289,1.288S5.202,12.788,4.492,12.788z' /></svg>
}

const PageCog = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = PageCog
