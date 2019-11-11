const React = require('react')

const {
  default: styled
} = require('styled-components')

const BaseComponent = props => {
  return <svg width='100%' height='100%' viewBox='0 0 16 16' preserveAspectRatio='xMidYMid meet' {...props}><rect width='100%' height='100%' id='icon-bound' fill='none' /><path d='M15,0H1C0.447,0,0,0.447,0,1v14c0,0.553,0.447,1,1,1h7.178c-0.009-0.45,0.113-0.819,0.031-1.306 c-1.009-2.972-2.625-3.403-5.616-4.95c0.931,0.031,1.778,0.125,2.594,0.659C4.794,9.738,4.266,9.713,3.834,9.238 c0,0,0.95,0.328,1.256,0.491c1.791,1.053,2.325,2.244,3.297,4.587c-0.025-0.509-0.066-1.337-0.1-1.559 c-0.047-0.3-0.675-1.625-1.178-2.278c-1.737-2.303-3.341-4.45-5.338-6.522C2.831,4.681,5.438,6.669,6.1,7.6 C5.803,6.206,4.475,4.763,3.241,3.669C5.416,4.2,7.044,7.788,7.934,9.619c0.062,0.328,0.322,1.119,0.428,1.431 c0.038,0.109,0.097,0.366,0.163,0.65l-0.041-0.431c0,0-0.184-1.038-0.244-1.391c-0.366-2.078-0.9-4.131-0.978-6.25 c0.031-0.381-0.184-1.419-0.275-1.938c-0.091-0.519-0.581-1.5-0.581-1.528l0,0c0,0,0.613,0.466,0.797,0.656 c0.65,0.75,0.475,1.666,1.041,2.4C8.05,2.116,8.238,1.425,7.294,0.625C8.475,1,8.194,1.681,8.55,2.753 c0.363-0.913,0.741-2.062,1.866-2.266c-0.975,0.812-0.634,7.347-1.4,9.534c0,0.15-0.222,3.144-0.25,3.6 c0.103-0.391,0.219-0.678,0.506-0.931c-0.134,0.291-0.222,0.569-0.219,0.891c0.488-0.784,0.809-0.706,1.45-0.913 c-0.706,0.462-1.212,0.837-1.525,1.631c-0.091,0.191-0.1,0.816-0.131,1.022c0.003,0.062-0.003,0.359,0,0.675H15c0.553,0,1-0.447,1-1 V1C16,0.447,15.553,0,15,0z M11.434,8.244c-0.644,1.459-1.284,2.484-1.438,2.688c-0.328,0.45-0.625,0.962-0.75,1.488 c-0.641-1.441,0.738-4.122,0.856-4.584c0.303-1.15,0.962-3.031,2.125-3.794l0,0l0,0l0,0c-0.837,0.981-1.166,2.387-1.209,3.7 c0,0,0.731-0.928,0.978-1.162c0.691-0.672,1.253-1.241,2.238-1.391C12.925,5.916,12,6.775,11.434,8.244z' /></svg>
}

const BrandDevelopmentSeed = styled(BaseComponent)`
  display: inline-block;
  vertical-align: ${props => props.verticalAlign || 'top'};
  overflow: hidden;
  width: ${props => props.width || props.size || '1em'};
`
module.exports = BrandDevelopmentSeed