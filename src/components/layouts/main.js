import React from 'react'

const Main = ({classes, subclasses, children, ...rest}) => {
    if(typeof subclasses !== undefined )
        return (
            <div
                {...rest}
                className={typeof classes !== undefined ? classes: null} >
                <div 
                    className={subclasses} >
                    {children}
                </div>
            </div>
        )
    
    return (
        <div 
            {...rest}
            className={typeof classes !== undefined ? classes: null} >
            {children}
        </div>
    )
}

export default Main
