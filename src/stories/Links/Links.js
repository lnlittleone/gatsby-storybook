import styled from "@emotion/styled"
import {theme} from '../../theme'


export const NavLink = styled.a({
  textDecoration : 'none',
  fontSize : '1.5rem',
  color : theme.pink,
  fontFamily: theme.mainFont,
  padding : '0.8rem',
  boxSizing : 'border-box',

  '&:hover' : {
    color : theme.yellow,
    background: theme.main,
    borderRadius : '0.5rem',
  }
})

export const Links = styled.a({
  fontFamily: theme.mainFont,
  color : theme.mint,
  fontSize: '1.1rem',
  textDecoration: 'none',
  padding : '0 0.2rem'
})
