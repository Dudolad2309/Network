import {sendMessageActiveCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedir";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {state: state}
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessages: (onChangeMessage) => {
            dispatch(sendMessageActiveCreator(onChangeMessage));
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);