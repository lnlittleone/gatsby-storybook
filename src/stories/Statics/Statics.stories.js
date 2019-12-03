import React from 'react';
import {storiesOf} from "@storybook/react"
import { text, withKnobs } from "@storybook/addon-knobs"
import { SiteHeader } from "./Header"
import { SiteFooter } from "./Footer"
import { NavLink } from "../Links/Links"

storiesOf('Headers & Footers', module).addDecorator(withKnobs)
  .add('Header', ()=> {return <SiteHeader>
    <nav>
      <NavLink href="#" target="_blank">Home</NavLink>
      <NavLink href="#" target="_blank">About</NavLink>
      <NavLink href="#" target="_blank">Contact</NavLink>
    </nav>
  </SiteHeader>})
  .add('Footer', ()=> {
    const copyright = text('copyright', "Built in by your humble servant")
    return <SiteFooter>
    <p>{copyright}</p>
  </SiteFooter>})
