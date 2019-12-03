import styled from "@emotion/styled"
import {theme} from '../../theme'


export const NavLink = styled.a({
  textDecoration : 'none',
  fontSize : '1.5rem',
  color : theme.pink,
  fontFamily: theme.mainFont,
  padding : '0 1rem',

  '&:hover' : {
    color : theme.yellow,
    background: theme.main,
    borderRadius : '0.5rem',
  }
})
