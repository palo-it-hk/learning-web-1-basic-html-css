import * as log from "loglevel"
import { logLevel } from './config'

log.setLevel(log.levels[logLevel.toUpperCase() as keyof log.LogLevel])
export default log
