import { useSelector } from "react-redux";

export const ErrorMsg = (props) => {
    const cur_state_ok = useSelector(state => state.valid[props.var]);
    const not_occupied = useSelector(state => state.valid['email_not_occupied']);
    // console.log(not_occupied)
    let msg;
    switch (props.var) {
        case 'email' :
            msg = !not_occupied ? 'This email is occupied'  : 'Email is invalid'
            break;
        case 'plan' :
            msg = 'Please choose option'
            break;
        default :
            msg = 'This field is required'
    }
    let classes = !cur_state_ok || (!not_occupied && props.var === 'email') ? 'error label' : 'invisible label';
    return <p className={classes}>{msg}</p>
}