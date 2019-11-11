import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { ArrowDown } from '../icons/ArrowDown';


storiesOf('ArrowDown', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () => 
  <ArrowDown
    size='1rem'
    fill={select('fill', ['black', 'green', 'grey', 'red'], 'black')}
    verticalalign={select('verticalalign', ['top', 'bottom', 'middle'], 'top')}
    />, {
  notes: 'Here are some notes on how to use this arrow icon.',
}
  )
