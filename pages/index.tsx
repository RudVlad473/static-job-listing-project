import { Inter } from "@next/font/google"
import React from "react"
import { useReducer } from "react"

const FilterBar = React.lazy(() => import("../components/FilterBar/FilterBar"))
import { IJob } from "../components/Job/Job"
import JobsList from "../components/JobsList/JobsList"
import { FiltersContext } from "../context/FiltersContext"
import jobsFromLocalJson from "../data/data.json"
import styles from "../styles/components/_main-grid.module.scss"
import { getTagsFromJob } from "../utils/functions/getTagsFromJob"

const inter = Inter({ subsets: ["latin"] })

type JobsActionType = "FILTER" | "RESET"

export interface JobsActions {
  type: JobsActionType
  payload: string[]
}

const initialState: IJob[] = jobsFromLocalJson

function jobsReducer(jobs: IJob[], action: JobsActions): IJob[] {
  switch (action.type) {
    case "FILTER": {
      const filterTags = action.payload

      return jobs.filter((job) => {
        const concatedTags = getTagsFromJob(job).concat(filterTags)
        return (
          concatedTags.length - new Set(concatedTags).size >= filterTags.length
        )
      })
    }
    case "RESET": {
      return initialState
    }
  }

  return jobs
}

export const filterJobs = (
  filterTags: JobsActions["payload"]
): JobsActions => ({ type: "FILTER", payload: filterTags })
export const resetJobs = (): JobsActions => ({ type: "RESET", payload: [] })

type FilterTagsActionType = "ADD" | "DELETE" | "RESET"

export interface FilterTagsActions {
  type: FilterTagsActionType
  payload: string
}

function filterTagsReducer(
  filterTags: string[],
  action: FilterTagsActions
): string[] {
  const newFilterTag = action.payload
  switch (action.type) {
    case "ADD": {
      if (filterTags.indexOf(newFilterTag) === -1) {
        return filterTags.concat(action.payload)
      } else {
        return filterTags
      }
    }
    case "DELETE": {
      return filterTags.filter((filterTag) => filterTag !== newFilterTag)
    }
    case "RESET": {
      return []
    }
  }

  throw new Error("Such action type does not exist in filterTagsReducer")
}

export const addFilterTag = (
  filterTag: FilterTagsActions["payload"]
): FilterTagsActions => ({ type: "ADD", payload: filterTag })
export const deleteFilterTag = (
  filterTag: FilterTagsActions["payload"]
): FilterTagsActions => ({ type: "DELETE", payload: filterTag })
export const resetFilterTags = (): FilterTagsActions => ({
  type: "RESET",
  payload: "",
})

export default function Home() {
  const [jobs, dispatchJobs] = useReducer(jobsReducer, initialState)

  const [filterTags, dispatchFilterTags] = useReducer(filterTagsReducer, [])

  return (
    <FiltersContext.Provider value={dispatchFilterTags}>
      <main className={styles["main-grid"]}>
        <React.Suspense>
          <FilterBar {...{ filterTags, dispatchFilterTags, dispatchJobs }} />
        </React.Suspense>
        <JobsList jobs={jobs} />
      </main>
    </FiltersContext.Provider>
  )
}
