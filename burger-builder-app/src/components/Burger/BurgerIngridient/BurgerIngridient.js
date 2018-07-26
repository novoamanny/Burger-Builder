import React from 'react';

import classes from '.BurgerIngridient.css';

const burgerIngridient = (props) => {
    let ingridient = null;

    // Check for Ingridient
    switch(props.type){
        case ('bread-bottom'):
            ingridient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingridient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seed1}></div>
                    <div className={classes.Seed2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingridient = <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            ingridient = <div className={classes.Cheese}></div>
            break;
        case ('bacon'):
            ingridient = <div className={classes.Bacon}></div>
            break;
        case ('salad'):
            ingridient = <div className={classes.Salad}></div>
            break;
        default:
            ingridient = null;
    }
};

export default burgerIngridient;