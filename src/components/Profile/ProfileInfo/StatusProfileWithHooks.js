import React, {useEffect, useState} from "react";
import {Container, Input, Typography} from "@material-ui/core";


const StatusProfileWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activeEditMode = () => {
        setEditMode(true)
    }

    const deactivationEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }


    return (


        <Container>
            {!editMode &&
            <Typography variant="h4" onDoubleClick={activeEditMode}>
                {props.status || "No status"}
            </Typography>
            }
            {editMode &&
            <Typography variant="h4" paragraph>
                <Input color="secondary" defaultValue={status} onChange={onStatusChange} onBlur={deactivationEditMode}
                       autoFocus={true}/>
            </Typography>
            }
        </Container>


    );

}
export default StatusProfileWithHooks;



