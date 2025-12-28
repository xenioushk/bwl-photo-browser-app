import React, { useEffect, ReactNode } from "react"

interface PageProps {
  title: string
  children: ReactNode
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | Photo Browser Application`
    window.scroll(0, 0)
  }, [title])

  return <div>{children}</div>
}

export default Page
