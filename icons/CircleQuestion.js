const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M8,10.5c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1c0.552,0,1-0.448,1-1C9,10.948,8.552,10.5,8,10.5z M8,0 C3.582,0,0,3.582,0,8c0,4.418,3.582,8,8,8s8-3.582,8-8C16,3.582,12.418,0,8,0z M12.243,12.243C11.109,13.376,9.603,14,8,14 s-3.109-0.624-4.243-1.757C2.624,11.109,2,9.603,2,8s0.624-3.109,1.757-4.243C4.891,2.624,6.397,2,8,2s3.109,0.624,4.243,1.757 C13.376,4.891,14,6.397,14,8C14,9.603,13.376,11.109,12.243,12.243z M7.927,3.755c-2.248,0-2.76,1.695-2.802,2.906h1.571 c0.028-0.256,0.101-1.418,1.221-1.418c0.672,0,1.206,0.406,1.206,1.175c0,0.695-0.724,1.155-1.303,1.711 C7.241,8.685,7.168,9.325,7.168,9.824V10c0.146,0,1.615,0,1.615,0V9.824c0-1.256,1.967-1.594,1.967-3.541 C10.75,5.059,9.874,3.755,7.927,3.755z' /></svg>
}

const CircleQuestion = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = CircleQuestion
