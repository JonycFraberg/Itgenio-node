
import React from "react";
const Notifications = (props) =>{
    const unreadNotifications = props.notes
    return (
        <div>
            <h1>Привет</h1>
            {unreadNotifications.length >= 0 ?
            (
                <h2>
                    У вас {unreadNotifications.length} {unreadNotifications.length === 1 ? 'новое уведомление': 'новых уведомлений'}
                </h2>
            ):
            (
                <h2> 
                    У вас нет новых уведомлений
                </h2>
            )
                
            }
        </div>
    )
}


export default Notifications