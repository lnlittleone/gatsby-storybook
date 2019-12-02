import React from 'react';
import {storiesOf} from '@storybook/react'
import { withKnobs, text } from "@storybook/addon-knobs";
import { SimpleButton } from "./Buttons"
import { action } from "@storybook/addon-actions"


storiesOf("Buttons", module).addDecorator(withKnobs)
  .add("Simple button", ()=> {
    const label = text('Text', 'button text')
    return <SimpleButton  onClick={action('you clicked me')}>{label}</SimpleButton>
  })

