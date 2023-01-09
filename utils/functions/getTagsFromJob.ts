
import { IJob } from "./../../components/Job/Job";

function getTagsFromJob(job: IJob): string[] {
  return [job.role, job.level, ...job.languages]
}

export {getTagsFromJob}