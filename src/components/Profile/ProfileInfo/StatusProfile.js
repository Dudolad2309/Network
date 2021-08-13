import React from "react";


class StatusProfile extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {


        this.setState({
            editMode: true,

        })


    }

    diactiveEditMode = () => {


        this.setState({
            editMode: false

        })

        this.props.updateStatus(this.state.status)

    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })


        }

    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activeEditMode}>{this.props.status||"No status"}</span>
                        </div>
                        }
                        {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.diactiveEditMode}
                                   value={this.state.status}/>
                        </div>
                        }
                    </div>
                </div>


            </div>
        );
    }
}
export default StatusProfile;
