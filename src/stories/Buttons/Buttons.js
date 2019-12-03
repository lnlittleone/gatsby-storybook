import React from 'react';
import styled from '@emotion/styled';
import {theme} from '../../theme'

export const SimpleButton = styled.button({
  background : theme.main,
  fontSize : '1rem',
  borderRadius :'3rem',
  padding: '0.5 1rem',
  color : theme.typo,
  textAlign: 'center',
  border : 'none',
  fontFamily : theme.mainFont,

  '&:hover' :{
    background : theme.mint,
    color: theme.secondaryColor,
  }
})

export const Checkbox = styled.input({
  background: theme.mint,
   '& + label' : {
    color : theme.purple,
    fontFamily : theme.mainFont
   }
})
