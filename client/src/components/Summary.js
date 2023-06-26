import { useSelector, useDispatch } from "react-redux";
import steps from '../form-data.json';
import { setStep } from "../actions";
import './Summary.css'

export const Summary = (props) => {
    const plan = useSelector(state => state.options.plan);
    let sum = 0;
    const yearly = useSelector(state => state.yearly);
    const _yearly = yearly === 'monthly' ? 'Monthly' : 'Yearly';
    const __yearly = yearly === 'monthly' ? 'per month' : 'per year';
    const add_ons_set = useSelector(state => state.multichoice.add_ons);
    const add_ons = Array.from(add_ons_set);
    sum += Number(steps.steps[1].options[yearly][plan].price.slice(1,-3));

    const dispatch = useDispatch();
    return <><div className="summary colored-background">
        <div className="flex-between summary-item align-center underlined-item">
            <div>
                <p className="planName">{steps.steps[1].options[yearly][plan].name} ({_yearly})</p>
                <p className="feature link"  onClick={(e) => dispatch(setStep(1))}>Change</p>
            </div>
            <p className="planName">{steps.steps[1].options[yearly][plan].price}</p>
        </div>
        {add_ons.map((elt, idx) => {
            sum += Number(steps.steps[2].options[yearly][elt].price.slice(2, -3));
            return <div className="flex-between summary-item align-center" key={idx}>
                        <p className="add-on-name">{steps.steps[2].options[yearly][elt].name}</p>
                        <p className="add-on-summary-price">{steps.steps[2].options[yearly][elt].price}</p>
                    </div>
        })}
    </div>
    <div className="flex-between summary align-center">
        <p className="add-on-name">Total ({__yearly})</p>
        <p className="final-price">+${sum}/{yearly === 'monthly' ? 'mo' : 'yr'}</p>
    </div>
    </>
}