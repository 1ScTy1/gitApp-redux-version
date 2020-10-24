import React from 'react'
import Markdown from 'markdown-to-jsx'
import { useSelector } from 'react-redux'

const Readme = () => {
  const readme = useSelector((s) => s.data.readme)

  return (
    <div>
      <Markdown className="markdown-body my-20">{readme}</Markdown>
    </div>
  )
}
export default Readme
