import React from 'react'
import PageHeader from '../organisms/PageHeader'
import { Box, Toolbar, useTheme } from '@mui/material';

type MainContentLayoutProps = {
  children: React.ReactNode,
};

export const MainContentLayout = ({ children }: MainContentLayoutProps) => {
  const theme = useTheme();
  const appBarHeight = Number.parseFloat(theme.mixins.toolbar.minHeight?.toString() ?? "");

  return (
    <div>
      <header>
        <PageHeader/>
      </header>
      {/* <main style={{ paddingTop: appBarHeight / 2 }}>
        { children }
      </main> */}
      <Box component="main" sx={{ pt: { xs: 7, sm: 8 } }}>
        { children }
      </Box>
    </div>
  )
}
