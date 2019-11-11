const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const pump = require('pump')
const reader = require('folder-reader')
const through = require('through2')
const svgr = require('@svgr/core').default
const upperFirst = require('lodash.upperfirst')
const camelcase = require('lodash.camelcase')

const svgFilesDirectoryPath = path.join(__dirname, '..', 'node_modules/collecticons-lib/svg/')
const componentsDirectoryPath = path.join(__dirname, '..', 'icons')
const indexFilepath = path.join(__dirname, '..', 'index.js')

rimraf.sync(componentsDirectoryPath)
mkdirp.sync(componentsDirectoryPath)

const componentExports = []

async function writeFile (data, enc, next) {
  const componentName = upperFirst(camelcase(data.basename.replace('.svg', '')))
  const componentFilepath = path.join(componentsDirectoryPath, `${componentName}.js`)
  const file = data.file

  let component = await svgr(file, {
    template: createTemplate(componentName),
    prettier: false
  })

  componentExports.push(
    `const ${componentName} = require('./icons/${componentName}')
exports.${componentName} = ${componentName}`
  )

  // hack to get dynamic sizing
  component = component
    .replace(/width=\{16\}/g, 'width="100%"')
    .replace(/height=\{16\}/g, 'height="100%"')

  fs.writeFile(componentFilepath, component, next)
}

function end () {
  const content = componentExports.join('\n\n') + '\n'
  fs.writeFile(indexFilepath, content, (err) => {
    if (err) throw err
  })
}

pump(reader(svgFilesDirectoryPath), through.obj(writeFile, end)).on('error', (err) => {
  throw err
})

function createTemplate (componentName) {
  return function Template ({ template }, opts, { props, jsx }) {
    jsx.openingElement.attributes.push({
      type: 'JSXAttribute',
      name: { type: 'JSXIdentifier', name: 'preserveAspectRatio' },
      value: { type: 'StringLiteral', value: 'xMidYMid meet' }
    })

    return template.ast`const React = require('react')
      const { default: styled } = require('styled-components')

      const BaseComponent = (${props}) => {
        return ${jsx}
      }

      const ${componentName} = styled(BaseComponent)\`
  display: inline-block;
  vertical-align: \${(props) => props.verticalalign || 'top'};
  overflow: hidden;
  width: \${(props) => props.width || props.size || '1em' };
\`

      module.exports = ${componentName}
    `
  }
}
