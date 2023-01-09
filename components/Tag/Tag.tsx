import React, { FC } from "react"
import styles from "./Tag.module.scss"

const Tag: FC<{
  content: string
  //onClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void
}> = ({ content }) => {
  return (
    <div className={`${styles["tag"]}`}>
    
        {content}
      
    </div>
  )
}

export default Tag
