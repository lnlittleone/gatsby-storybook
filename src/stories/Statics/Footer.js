import styled from "@emotion/styled"
import {theme} from '../../theme'

export const SiteFooter = styled.footer({
  backgroundColor : theme.secondaryColor,
  left: 0,
  bottom : 0,
  position: 'absolute',
  width:'100%',
  display:'flex',
  justifyContent : 'center',
  alignItems : 'center',
  height: '3.5rem',
  color: theme.typo,
  fontFamily: theme.mainFont,
})
