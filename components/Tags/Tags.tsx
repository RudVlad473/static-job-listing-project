import React, { FC, memo, useContext } from "react"
import { FiltersContext } from "../../context/FiltersContext"
import { addFilterTag } from "../../pages"
import Tag from "../Tag/Tag"
import styles from "./Tags.module.scss"

const Tags: FC<{ tags: string[] }> = ({ tags }) => {
  const dispatchFilterTags = useContext(FiltersContext)

  return (
    <ul className={styles["tags"]}>
      {tags.map((tag) => (
        <li
          key={tag}
          onClick={() => {
            dispatchFilterTags(addFilterTag(tag))
          }}>
          <Tag content={tag} />
        </li>
      ))}
    </ul>
  )
}

export default memo(Tags)
