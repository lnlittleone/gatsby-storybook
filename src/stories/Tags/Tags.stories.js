import { storiesOf} from "@storybook/react"
import { number, withKnobs } from "@storybook/addon-knobs"
import React from "react"
import { Tags } from "./Tags"

storiesOf('Tags', module).addDecorator(withKnobs)
  .add('Tags', ()=> {
    const nb = number('Number', 10)
    return <Tags>{nb}</Tags>
  })
