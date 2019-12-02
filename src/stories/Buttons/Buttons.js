import React from 'react';
import styled from '@emotion/styled';

export const SimpleButton = styled.button({
  background : 'purple',
  fontSize : '1rem',
  borderRadius :'0.5rem',
  padding: '0.35rem',
  color : 'beige',
  textAlign: 'center',
  border : 'none',
  fontFamily : 'Trebuchet, Arial, sans-serif',

  '&:hover' :{
    background : 'pink',
    color: 'grey'
  }
})
