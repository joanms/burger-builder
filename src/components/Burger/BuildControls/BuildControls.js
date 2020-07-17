import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Tomato', type: 'tomato'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Patty', type: 'patty'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                diabled={props.disabled[ctrl.type]} />
        ))}
    </div>
);

export default buildControls;