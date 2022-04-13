import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { sandboxApi } from "./AxiosService.js";

class JobsServices {
  
  async getAllJobs() {
    const response = await sandboxApi.get('jobs')
    const jobs = response.data.map(j => new Job(j))
    ProxyState.jobs = jobs
  }
  
  async addJob(formData) {
    const response = await sandboxApi.post('jobs', formData)
    const newJob = new Job(response.data)
    ProxyState.jobs = [...ProxyState.jobs, newJob]
  }

  async editJob(formData) {
    const response = await sandboxApi.put('jobs/' +formData.id, formData)
    const job = new Job(response.data)
    const index = ProxyState.jobs.findIndex(j => j.id == job.id)
    ProxyState.jobs.splice(index, 1, job)
    ProxyState.jobs = ProxyState.jobs
  }


  async removeJob(id) {
    const response = await sandboxApi.delete('jobs/' +id)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)
  }
}

export const jobsService = new JobsServices()