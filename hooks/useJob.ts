import { useMemo } from "react"
import { IJob } from "../components/Job/Job"
import styles from "../components/Job/Job.module.scss"
import { getTagsFromJob } from "../utils/functions/getTagsFromJob"

const useJob = (job: IJob): [boolean, boolean, string, string[]] => {
  const barStyles = `${styles["job-bar"]} ${
    job.featured && styles["job-bar--featured"]
  } shadow`

  const isFeatured = job.featured
  const isNew = job.new

  const tags = useMemo(() => {
    return getTagsFromJob(job)
  }, [])

  return [isFeatured, isNew, barStyles, tags]
}

export { useJob }
