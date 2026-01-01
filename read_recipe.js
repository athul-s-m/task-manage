export const readTasks = (filepath) => {
  const content = Deno.readTextFile(filepath)
    .then((content) => content.split("\n"))
    .then((content) => content.map((x) => x.split(",")));
  return content;
};
