import { spawn } from "child_process";

const install: (
  modules: string[],
  saveDevs: boolean,
  manager?: "npm" | "yarn",
  errHandle?: (err: string) => void
) => void = (modules, saveDevs, manager, errHandle) => {
  const isYarn = manager === "yarn";
  const dev = isYarn ? "-D" : "--dev";
  const cmd = isYarn ? "add" : "install";
  const exe = [cmd, dev, ...modules];
  const proc = spawn(isYarn ? "yarn" : "npm", exe);

  let err = "";

  if (proc.stderr) {
    proc.stderr.on("data", (data) => {
      err += data.toString();
      errHandle && errHandle(err);
    });
  }

  return proc;
};

const uninstall: (
  modules: string[],
  manager?: "npm" | "yarn",
  errHandle?: (err: string) => void
) => void = (modules, manager, errHandle) => {
  const isYarn = manager === "yarn";
  const cmd = isYarn ? "yarn remove" : "npm uninstall";
  const exe = `${cmd} ${modules.map((md) => md + " ")}`;
  const proc = spawn(exe);

  let err = "";

  if (proc.stderr) {
    proc.stderr.on("data", (data) => {
      err += data.toString();
      errHandle && errHandle(err);
    });
  }

  return proc;
};

export { install, uninstall };
