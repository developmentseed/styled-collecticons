# styled-collecticons

The [collecticons icon library](https://collecticons.io) made available via react components, compatible with styled-components.

## Install

> Temporarily available via github repo until it is published

```
npm i developmentseed/styled-collecticons
```

## Usage

Import an icon:

```js
import { RssFeed } from 'styled-collecticons'
```

Import an icon directly from the icons directory:

```js
import RssFeed from 'styled-collecticons/icons/RssFeed'
```

> If your build system doesn't support tree shaking, importing the file directly can be useful for keeping builds small.

## Example

```js
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { TrashBin } from 'styled-collecticons'

const Button = styled.button`
  background-color: #efefef;
  padding: 10px;
  line-height: 1em;
  font-size: 1em;
`

const Trash = styled(TrashBin)`
  margin-right: 5px;
  fill: red;
`

function Example () {
  return <div>
    <h1>Icons</h1>
    <Button>
      <Trash size='1em' />
      Delete
    </Button>
  </div>
}
```

Try the example by running `npm run example-start`

## Development

Generate icons using `npm run create-icons`. This runs the scripts/create-icon-components.js file.

## License
[MIT](LICENSE.md)
