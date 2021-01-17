import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Home from './Home'

const stories = storiesOf('Screens', module)
stories
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Home', () => {
    const label = text('label', 'Home')

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          height: '100%',
          left: 0,
          width: '100%',
        }}>
        <Home>{label}</Home>
      </div>
    )
  })
