import { storiesOf} from "@storybook/react"
import { number, withKnobs } from "@storybook/addon-knobs"
import React from "react"
import { MintTag, OrangeTag, PinkTag, YellowTag } from "./Tags"

storiesOf('Tags', module).addDecorator(withKnobs)
  .add('Orange tag', ()=> {
    const nb = number('Number', 10)
    return <OrangeTag>{nb}</OrangeTag>
  })
  .add('Pink Tag', ()=> {
    const nb = number('Number', 10)
    return <PinkTag>{nb}</PinkTag>
  })
  .add('Yellow Tag', ()=> {
    const nb = number('Number', 10)
    return <YellowTag>{nb}</YellowTag>
  })
  .add('Mint Tag', ()=> {
    const nb = number('Number', 10)
    return <MintTag>{nb}</MintTag>
  })

