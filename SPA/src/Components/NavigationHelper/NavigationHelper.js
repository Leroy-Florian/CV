import React, {useEffect} from 'react'
import './NavigationHelpers.css'

/**
 *
 *
 * @constructor
 * @this {}
 * @param {}
 */
export function NavigationHelper() {
    useEffect(() => {
        //todo animation sur les keypress / Click / click prolonger

    }, [])


    return (
        <div className={"key-container"}>
            <div>
            <span className={"key-Content"}><i className="fas fa-arrow-up"/></span>
            </div>
            <div>
            <span className={"key-Content"}><i className="fas fa-arrow-left"/></span>
            <span className={"key-Content"}><i className="fas fa-arrow-down"/></span>
            <span className={"key-Content"}><i className="fas fa-arrow-right"/></span>
            </div>
        </div>

    )
}
