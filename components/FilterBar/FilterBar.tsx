import React, { Dispatch, useEffect } from "react"
import {
  filterJobs,
  FilterTagsActions,
  JobsActions,
  resetFilterTags,
  resetJobs,
} from "../../pages"
import FilterTags from "../FilterTags/FilterTags"
import Tag from "../Tag/Tag"
import styles from "./FilterBar.module.scss"

const FilterBar = ({
  dispatchJobs,
  filterTags,
  dispatchFilterTags,
}: {
  dispatchJobs: Dispatch<JobsActions>
  filterTags: string[]
  dispatchFilterTags: Dispatch<FilterTagsActions>
}) => {
  const areFilterTags: boolean = filterTags.length > 0

  useEffect(() => {
    if (areFilterTags) {
      dispatchJobs(filterJobs(filterTags))
    }

    return () => {
      dispatchJobs(resetJobs())
    }
  }, [filterTags])

  function resetFilters(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()

    dispatchJobs(resetJobs())
    dispatchFilterTags(resetFilterTags())
  }

  return (
    <div
      className={`${styles["filter-bar"]} shadow`}
      style={{ opacity: areFilterTags ? 1 : 0 }}>
      {areFilterTags ? (
        <>
          <FilterTags filterTags={filterTags} />
          <a
            className={`${styles["clear-btn"]} blue-text`}
            onClick={resetFilters}>
            Clear
          </a>
        </>
      ) : (
        <Tag content={"dummy tag"} />
      )}
    </div>
  )
}

export default FilterBar
