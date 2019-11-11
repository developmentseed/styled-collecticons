import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import ArrowSpinCcw from '../icons/ArrowSpinCcw';

storiesOf('ArrowSpinCcw', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('default', () => 
  <ArrowSpinCcw
    size='1rem'
    fill={select('fill', ['black', 'green', 'grey', 'red'], 'black')}
    verticalalign={select('verticalalign', ['top', 'bottom', 'middle'], 'top')}
    />, {
  notes: 'Here are some notes on how to use this arrow icon.',
}
  )
