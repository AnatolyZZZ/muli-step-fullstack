import { useSelector, useDispatch } from "react-redux"
import steps from '../form-data.json';
import './Control.css'
import {changeUnValid, setStep, changeValid} from  '../actions';
import { useNavigate } from "react-router-dom";


export const Control = (props) => {
    const fields = useSelector(state => state.fields);
    const plan = useSelector(state => state.options.plan);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const step = useSelector(state => state.current_step);


    const checkEmpty = async (name) => {
        if (fields[name] === "") {
            dispatch(changeUnValid(name));
            return false
        } else return true
    }

    const checkPlan = async () => {
        if (plan === null) {
            dispatch(changeUnValid('plan'));
            return false
        } else return true
    }

    const checkEmail = async () => {
        const reg = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!fields['email'].match(reg)) {
            dispatch(changeUnValid('email'));
            return false
        } else {
            try {
                const para = {
                    method : 'POST',
                    headers :{"Content-Type" : "application/json"},
                    body : JSON.stringify({email: fields['email']})
                }
                // console.log(para);
                const res =  await fetch('/api/users/check', para);
                const msg_json = await res.json();
                const msg = msg_json.msg;
                // console.log(msg)
                if (msg === "user already exists") {
                    dispatch(changeUnValid('email_not_occupied'))
                    return false
                } else if (msg === "email not found") {
                    dispatch(changeValid('email_not_occupied'))
                    return true
                }
                
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }

    const firstCheck  = async () => {
        let go = await checkEmpty('name');
        go = go & await checkEmail();
        go = go & await checkEmpty('phone');
        if (go) {
            return true
        } else return false
    }
    

    const goNext = async () => {
        let go = false;
        switch (step) {
            case 0 :
                go = await firstCheck();
                if (go) {
                    dispatch(setStep(step + 1));
                    localStorage.setItem('ignore', false);
                }
                break;
            case 1 :
                go = await checkPlan();
                if (go) {
                    dispatch(setStep(step + 1));
                }
                break;
            case steps.steps.length - 1 :
                navigate('/final')
                break;
            default :
                dispatch(setStep(step + 1));
        }

    }
    // different for last step
    let nextStep = "Next Step"
    let classes = "forwardBtn"
    if (step === steps.steps.length - 1) {
        nextStep = "Confirm";
        classes = "forwardBtn purpleBtn"
    }
    return <div className="flex-between confirmation">
        {(step === 0) ? <div></div> : <button className="backBtn" onClick={(e) => {dispatch(setStep(step - 1))}}>Go Back</button>}
        <button className={classes} onClick={(e) => {goNext()}}>{nextStep}</button>
    </div>
}