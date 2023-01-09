import React, { FC } from "react"
import AppHead from "../AppHead/AppHead"
import BackgroundHeader from "../BackgroundHeader/BackgroundHeader"

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section>
      <BackgroundHeader />
      {children}
    </section>
  )
}

export default Layout
