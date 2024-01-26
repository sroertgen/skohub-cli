import { commands } from "./reconcile-publish_cmds/index.js"

export const command = 'reconcile-publish [command]'
export const desc = 'Run reconcile publish'
export const builder = (yargs) => {
  return yargs.command(commands)
}
export const handler = function(argv) { }
