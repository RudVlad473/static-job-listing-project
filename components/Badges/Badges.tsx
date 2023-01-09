import React, { FC } from "react"
import Badge from "../Badge/Badge"
import { IJob } from "../Job/Job"
import styles from "./Badges.module.scss"

const Badges: FC<{ job: IJob }> = ({ job }) => {
  return (
    <div className={styles["badges"]}>
      {job.new && <Badge content={"NEW!"} color={"BLUE"} />}
      {job.featured && <Badge content={"FEATURED"} color={"BLACK"} />}
    </div>
  )
}

export default Badges
