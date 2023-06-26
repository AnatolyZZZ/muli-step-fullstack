import { setField, changeValid } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMsg } from "./ErrorMsg";

export const FreeForm = (props) => {
    const dispatch = useDispatch();
    const valid = useSelector(state => state.valid);
    const fields = useSelector(state => state.fields);

    return <>
        {props.questions.map((elt, idx) => {
            const classes = valid[elt.var] ? 'text-input' : 'text-input wrong-field'
            return <div key={idx}>
                        <div className='flex-between'>
                            <p className='label'>{elt.name}</p>
                            <ErrorMsg var={elt.var}/>
                        </div>
                        <input 
                            key={idx}  
                            placeholder={elt.placeholder} 
                            value={fields[elt.var]}
                            onChange={(e) => {
                                dispatch(setField(elt.var, e.target.value));
                                dispatch(changeValid(elt.var));
                                if (elt.var === 'email') {
                                    dispatch(changeValid('email_not_occupied'))
                                }
                            }} 
                            type='text'
                            className={classes}
                        />
                    </div>
         })}
    </>
    
}