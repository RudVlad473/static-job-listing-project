import { FC, memo } from "react"
import { useJob } from "../../hooks/useJob"

import JobDetails from "../JobDetails/JobDetails"
import Tags from "../Tags/Tags"
import styles from "./Job.module.scss"

export interface IJob {
  id: number
  company: string
  logo: string
  new: boolean
  role: string
  level: string
  languages: string[]
  featured: boolean
  position: string
  postedAt: string
  contract: string
  location: string
  tools: string[]
}

const Job: FC<{ job: IJob }> = ({ job }) => {
  const [, , barStyles, tags] = useJob(job)

  return (
    <li className={barStyles}>
      <JobDetails job={job} />

      <hr className={styles["mobile-separator"]} />

      <Tags tags={tags} />
    </li>
  )
}

export default memo(Job)
