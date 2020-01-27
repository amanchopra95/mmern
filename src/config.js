const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development'

/**
 * Contains configuration of the app.
 * Database config 
 * Authentication secret keys
 */

const NEWLINE = '\n'
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
const RE_NEWLINES = /\\n/g
const NEWLINES_MATCH = /\n|\r|\r\n/

 const parse = (src) => {
   let obj = {}
    src.toString().split(NEWLINES_MATCH).forEach((line, index) => {
      const keyValueArr = line.match(RE_INI_KEY_VAL)
      if (keyValueArr != null) {
        const key = keyValueArr[1]
        let val = (keyValueArr[2] || '')
        const end = val.length - 1
        const isDoubleQuoted = val[0] === '"' && val[end] === '"'
        const isSingleQuoted = val[0] === "'" && val[end] === "'"

        if (isSingleQuoted || isDoubleQuoted) {
          val = val.subString(1,end)

          if (isDoubleQuoted) {
            val = val.replace(RE_NEWLINES, NEWLINE)
          }
        } else {
          val = val.trim()
        }
        obj[key] = val
      }
    })
    return obj
 }

 const getEnvFile = (envName) => {
  if (envName) {
    return fs.readFileSync(`.env.${envName}`, 'utf-8');
  } else {
    return fs.readFileSync(`.env`, 'utf-8');
  }
  
 }

 const setEnvToProcess = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
      process.env[key] = obj[key]
    }
  })
 }

 const config = () => {
   let obj
   switch (env) {
    case 'production':
      // Production Config
      require('dotenv').config()
      // env = parse(getEnvFile('production'))
      // setEnvToProcess(env)
      break;
    case 'development':
        // Development Config
        // require('dotenv').config({ path: __dirname + `/.env.${env}` })
        obj = parse(getEnvFile('development'))
        setEnvToProcess(obj)
        break;
    case 'staging':
        // Staging Config
        // require('dotenv').config({ path: __dirname + `/.env.${env}` })
        obj = parse(getEnvFile('staging'));
        setEnvToProcess(obj)
        break;
    default:
        require('dotenv').config()
        // env = parse(getEnvFile('production'))
        // setEnvToProcess(env)
   }
 };

 module.exports = config

