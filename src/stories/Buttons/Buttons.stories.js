import React from 'react';
import {storiesOf} from '@storybook/react'
import { withKnobs, text } from "@storybook/addon-knobs";
import { SimpleButton } from "./Buttons"
import { action } from "@storybook/addon-actions"
import { Button } from '@storybook/react/demo';


storiesOf("Buttons", module).addDecorator(withKnobs)
  .add("Simple button", ()=> {
    const label = text('Text', 'button text')
    return <SimpleButton  onClick={action('you clicked me')}>{label}</SimpleButton>
  })
  .add('Button démo', ()=> {
    return  <Button onClick={action('clicked')}>Hello Button</Button>;
  })
  .add('Emoji', ()=>{
    return  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
  })



