import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsServices {
  addJob(formData) {
    const newJob = new Job(formData)
    ProxyState.jobs = [newJob, ...ProxyState.jobs]
  }
}

export const jobsService = new JobsServices()