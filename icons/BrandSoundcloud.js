const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M2.035,7.791c-0.05,0-0.091,0.041-0.094,0.094L1.8,9.638l0.141,1.694c0.003,0.053,0.044,0.091,0.094,0.091 c0.05,0,0.091-0.041,0.094-0.091l0.159-1.694L2.129,7.884C2.125,7.828,2.085,7.791,2.035,7.791z M2.676,7.903 c-0.056,0-0.104,0.047-0.107,0.106L2.435,9.635l0.134,1.71c0.003,0.059,0.05,0.106,0.106,0.106c0.056,0,0.103-0.047,0.106-0.106 l0.15-1.71L2.782,8.009C2.779,7.95,2.732,7.903,2.676,7.903z M3.319,6.872c-0.066,0-0.119,0.053-0.122,0.119L3.072,9.635l0.125,1.71 c0.003,0.066,0.056,0.119,0.122,0.119c0.066,0,0.119-0.053,0.122-0.119l0.141-1.71L3.441,6.99C3.435,6.922,3.382,6.872,3.319,6.872z M1.4,7.85c-0.044,0-0.075,0.034-0.081,0.078l-0.15,1.707l0.15,1.644c0.003,0.047,0.038,0.078,0.081,0.078 c0.041,0,0.075-0.034,0.081-0.078L1.65,9.635L1.482,7.928C1.475,7.881,1.444,7.85,1.4,7.85z M0.181,8.681 c-0.034,0-0.059,0.025-0.066,0.063L0,9.635l0.116,0.875c0.003,0.038,0.031,0.063,0.066,0.063c0.031,0,0.059-0.025,0.063-0.063 l0.138-0.875L0.244,8.747C0.241,8.706,0.213,8.681,0.181,8.681z M0.772,8.131c-0.034,0-0.063,0.028-0.066,0.066L0.55,9.635 l0.156,1.407c0.003,0.038,0.031,0.066,0.066,0.066c0.034,0,0.063-0.025,0.066-0.066l0.178-1.407L0.838,8.197 C0.835,8.159,0.806,8.131,0.772,8.131z M3.957,6.262c-0.072,0-0.131,0.059-0.134,0.134L3.707,9.644l0.116,1.697 c0.003,0.075,0.063,0.134,0.134,0.134c0.072,0,0.131-0.059,0.134-0.134l0.131-1.697L4.091,6.397 C4.088,6.318,4.029,6.262,3.957,6.262z M7.405,5.403C7.373,5.381,7.333,5.368,7.292,5.368S7.214,5.381,7.183,5.402 c-0.056,0.038-0.094,0.1-0.094,0.169v0.038L7.014,9.635c0,0.003,0.078,1.635,0.078,1.635c0,0.003,0,0.003,0,0.006 c0.003,0.047,0.019,0.088,0.047,0.122c0.038,0.044,0.094,0.075,0.156,0.075c0.056,0,0.106-0.022,0.141-0.059 c0.038-0.038,0.059-0.088,0.063-0.144l0.009-0.163l0.078-1.469L7.501,5.571C7.492,5.5,7.458,5.44,7.405,5.403z M14.034,7.537 c-0.269,0-0.528,0.053-0.763,0.153c-0.156-1.775-1.644-3.166-3.46-3.166c-0.444,0-0.878,0.088-1.26,0.234 C8.402,4.815,8.364,4.874,8.361,4.99v6.248c0.003,0.122,0.094,0.216,0.213,0.225c0.006,0,5.457,0,5.457,0 c1.088,0,1.969-0.872,1.969-1.96C16.003,8.419,15.122,7.537,14.034,7.537z M6.617,6.031c-0.103,0-0.188,0.084-0.191,0.188 L6.342,9.635l0.084,1.644c0.003,0.103,0.084,0.188,0.191,0.188c0.103,0,0.188-0.081,0.191-0.188l0.094-1.644L6.808,6.218 C6.804,6.112,6.72,6.031,6.617,6.031z M8.073,5.018C8.042,4.999,8.005,4.987,7.964,4.987c-0.053,0-0.1,0.019-0.138,0.05 c-0.047,0.041-0.078,0.1-0.081,0.166v0.022L7.658,9.638l0.044,0.816l0.044,0.794c0,0.119,0.1,0.216,0.216,0.216 c0.119,0,0.216-0.097,0.216-0.216v0.003l0.097-1.61L8.177,5.206C8.18,5.124,8.136,5.056,8.073,5.018z M5.948,5.915 c-0.097,0-0.175,0.078-0.175,0.175L5.679,9.635l0.094,1.653c0.003,0.097,0.078,0.175,0.175,0.175s0.172-0.078,0.175-0.175 l0.103-1.653L6.123,6.087C6.12,5.99,6.042,5.915,5.948,5.915z M5.282,5.834c-0.088,0-0.159,0.072-0.163,0.163l-0.1,3.638l0.1,1.669 c0.003,0.091,0.075,0.159,0.163,0.159s0.159-0.072,0.163-0.159l0.113-1.669L5.445,5.996C5.442,5.906,5.37,5.834,5.282,5.834z M4.623,5.968c-0.081,0-0.147,0.066-0.15,0.147l-0.11,3.52l0.109,1.682c0.003,0.081,0.069,0.147,0.15,0.147s0.144-0.066,0.15-0.147 l0.122-1.682l-0.121-3.52C4.767,6.031,4.701,5.968,4.623,5.968z' /></svg>
}

const BrandSoundcloud = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandSoundcloud
