import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>

        {/* Less Button */}
        <button
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>

        {/* More Button */}
        <button 
            className={classes.More} 
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;