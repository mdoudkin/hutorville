import React from 'react'
import { CssBaseline } from '@material-ui/core'

import Header from './header'

export default ({ children }) => (
  <>
    <CssBaseline />
    <Header />
    {children}
  </>
)
