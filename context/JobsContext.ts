import { createContext, Dispatch } from "react"
import { JobsActions } from "../pages"

export interface IJobsContext {
  dispatchJobs: Dispatch<JobsActions>
}

// Create a context
export const JobsContext = createContext<IJobsContext>({
  dispatchJobs: () => {}
})
