const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M15.117,0H0.883C0.395,0,0,0.395,0,0.883v14.234C0,15.605,0.395,16,0.883,16h7.664V9.812H6.469V7.391h2.078V5.608 c0-2.067,1.262-3.192,3.106-3.192c0.883,0,1.642,0.066,1.863,0.095v2.16l-1.271,0.001c-1.003,0-1.197,0.477-1.197,1.176v1.543h2.398 l-0.312,2.422h-2.086V16h4.07C15.605,16,16,15.605,16,15.117V0.883C16,0.395,15.605,0,15.117,0z' /></svg>
}

const BrandFacebook = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalalign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandFacebook
