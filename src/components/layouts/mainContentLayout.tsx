import React from 'react'
import PageHeader from '../organisms/PageHeader'

type MainContentLayoutProps = {
  children: React.ReactNode,
};

export const MainContentLayout = ({ children }: MainContentLayoutProps) => {
  return (
    <div>
      <PageHeader/>
      <main>{ children }</main>
    </div>
  )
}
