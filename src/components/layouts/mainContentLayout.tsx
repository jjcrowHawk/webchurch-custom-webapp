import React from 'react'
import PageHeader from '../organisms/PageHeader/PageHeader'
import { Box, Toolbar, useTheme } from '@mui/material';

type MainContentLayoutProps = {
  children: React.ReactNode,
};

export const MainContentLayout = ({ children }: MainContentLayoutProps) => {
  return (
    <div>
      <header>
        <PageHeader/>
      </header>
      <Box component="main" sx={{ pt: { xs: 7, sm: 8.5 } }}>
        { children }
      </Box>
    </div>
  )
}
