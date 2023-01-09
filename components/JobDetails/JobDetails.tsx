import React, { FC } from "react"
import { getImagePath } from "../../utils/functions/getImagePath"
import Badges from "../Badges/Badges"
import { IJob } from "../Job/Job"
import Image from "next/image"
import styles from "./JobDetails.module.scss"

const JobDetails: FC<{ job: IJob }> = ({ job }) => {
  return (
    <section className={styles["job-details"]}>
      <Image
        src={getImagePath(job.logo)}
        alt={job.company}
        className={styles["job-details__image"]}
      />
      <header className={styles["job-details__header"]}>
        <b className="blue-text">{job.company}</b>
        <Badges job={job} />
      </header>
      <h1
        className={`${styles["job-details__body"]} ellipsis-overflow`}
        title={job.position}>
        {job.position}
      </h1>
      <footer className={styles["job-details__footer"]}>
        <time className="muted-text">{job.postedAt}</time>
        <span className="muted-text">&middot;</span>

        <span className="muted-text">{job.contract}</span>
        <span className="muted-text">&middot;</span>

        <span className="muted-text">{job.location}</span>
      </footer>
    </section>
  )
}

export default JobDetails
