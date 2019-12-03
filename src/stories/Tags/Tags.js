import styled from "@emotion/styled"
import {theme} from '../../theme'


export const OrangeTag = styled.div({
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

export const PinkTag = styled.a({
  backgroundColor: theme.pink,
}).withComponent(OrangeTag)

export const YellowTag = styled.a({
  backgroundColor: theme.yellow,
}).withComponent(OrangeTag)

export const MintTag = styled.a({
  backgroundColor: theme.mint,
}).withComponent(OrangeTag)