import Image from "next/image"
import { FC, useContext } from "react"
import { FiltersContext } from "../../context/FiltersContext"
import { deleteFilterTag } from "../../pages"
import Tag from "../Tag/Tag"
import styles from "./FilterTags.module.scss"

const FilterTags: FC<{ filterTags: string[] }> = ({ filterTags }) => {
  const dispatchFilterTags = useContext(FiltersContext)

  return (
    <ul className={styles["filter-tags"]}>
      {filterTags.map((filterTag) => (
        <li key={filterTag} className={styles["filter-tag"]}>
          <Tag content={filterTag} />
          <button
            className={styles["close-btn"]}
            onClick={() => {
              dispatchFilterTags(deleteFilterTag(filterTag))
            }}>
            <Image
              src={require("../../public/images/icon-remove.svg")}
              alt={"X"}
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FilterTags
