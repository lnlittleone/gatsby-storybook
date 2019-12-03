import styled from "@emotion/styled"
import {theme} from '../../theme'

export const Tags = styled.div({
  width : '3rem',
  height : '3rem',
  borderRadius : '1rem',
  color : theme.typo,
  backgroundColor : theme.orange,
  display : 'flex',
  justifyContent :'center',
  alignItems : 'center',
  fontFamily : theme.mainFont,
})
