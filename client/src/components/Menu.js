import steps from '../form-data.json';
import './Menu.css'
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '../actions';
import { useLocation } from 'react-router-dom';

export const Menu = (props) => {
    let page = useLocation().pathname;
    // console.log(page)
    const dispatch = useDispatch();
    const cur_step = useSelector(state => state.current_step);
    const steps_with_summary = steps.steps ;

    const go = (idx) => {
        if (idx < cur_step & page === "/") {
            dispatch(setStep(idx));
        }
    }

    return <div className='menu'>
        {steps_with_summary.map((elt, idx) => {
            let classes;
            if (idx > cur_step) {
                classes = 'menu-item inactive'
            } else if (idx === cur_step) {
                classes = 'menu-item'
            } else {
                classes = 'menu-item clickable'
            }
            if (page !== '/') {
                classes = 'menu-item'
            }
            const classes2 = (idx === cur_step) ?  'menu-number number-selected' : 'menu-number'
            return <div className={classes} key={idx} onClick={(e) => go(idx)}>
                        <div>
                        <div className={classes2}>
                            {idx + 1}
                        </div>
                        </div>
                        <div className='desktop-only menu-item-info'>
                            <h4>Step{idx + 1}</h4>
                            <h3>{elt.short}</h3>
                        </div>
                    </div>}
                )
        }       
    </div>
}