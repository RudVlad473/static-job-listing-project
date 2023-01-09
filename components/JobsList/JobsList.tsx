import React, { FC, memo } from "react"
import Job, { IJob } from "../Job/Job"
import NoJobs from "../NoJobs/NoJobs"
import styles from "./JobsList.module.scss"

const JobsList: FC<{ jobs: IJob[] }> = ({ jobs }) => {
  return (
    <ul className={styles["jobs-list"]}>
      {jobs.map((job) => <Job key={job.id} job={job} />) || <NoJobs />}
    </ul>
  )
}

export default memo(JobsList)
