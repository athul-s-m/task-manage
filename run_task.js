import { task } from "./task.js";
import { readTasks } from "./read_recipe.js";

const FILE_PATH = "./recipe";

const invokeTask = (taskInfo, mode) => task(taskInfo, mode);

const seqentialInvokeTask = (jobs) =>
  jobs.reduce(
    (promise, job) => promise.then(() => invokeTask(job, "serial")),
    Promise.resolve("start"),
  );

const parallelInvokeTask = (jobs) =>
  Promise.all(jobs.map((job) => invokeTask(job, "parllel")));

const schedular = async (TASKS) => {
  for (const task of TASKS) {
    let result;

    if (task.length > 1) {
      result = await parallelInvokeTask(task);
    } else {
      result = await seqentialInvokeTask(task);
    }

    console.log(result);
  }
};

const main = (FILE_PATH) => {
  readTasks(FILE_PATH)
    .then((x) => schedular(x));
};

main(FILE_PATH);
