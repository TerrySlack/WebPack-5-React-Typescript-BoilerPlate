import React from 'react'
import classes from './test.module.css'

console.log(`
classes: 
 ${JSON.stringify(classes)}
`)

const Test = () => {
  return <label className={classes.white}>This is a Test</label>
}

export default Test
