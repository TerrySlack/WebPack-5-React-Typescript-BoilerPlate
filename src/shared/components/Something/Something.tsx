import React from 'react';
import classes from './Something.module.css';

console.log(`
classes: 
 ${JSON.stringify(classes)}
`);

const Test = () => {
  const m1 = 'mooHee';
  return <label className={classes.white}>This is Something</label>;
};

export default Test;
