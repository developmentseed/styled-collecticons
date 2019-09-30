import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const { TrashBin } = require('../index')

const Button = styled.button`
  background-color: #efefef;
  padding: 10px;
  line-height: 1em;
  font-size: 1em;
`

const Trash = styled(TrashBin)`
  margin-right: 5px;
`

function Example () {
  return <div>
    <h1>Icons</h1>
    <Button>
      <Trash fill='red' size='1em' />
      Delete
    </Button>
  </div>
}

const container = document.createElement('div')
document.body.appendChild(container)
ReactDOM.render(<Example />, container)
