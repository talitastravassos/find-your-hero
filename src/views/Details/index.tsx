import React from 'react'
// import styles from "./styles.module.scss";
import { RouteComponentProps } from 'react-router';

export default function Details(props: RouteComponentProps) {
    React.useEffect(() => {
        console.log(props)
        // eslint-disable-next-line    
    }, [])

    return (
        <div>
            <h1>Hero Details</h1>
        </div>
    )
}
