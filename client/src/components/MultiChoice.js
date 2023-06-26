import { useSelector, useDispatch} from "react-redux";
import { toggleSelected } from "../actions";
import { useEffect } from "react";


export const MultiChoice = (props) => {
    const multichoice = useSelector(state => state.multichoice[props.var])
    // this function checks if given checkbox have to be checked when element downloaded
    const chekBoxCheck = () => {
        const allCheckboxes = Array.from(document.querySelectorAll('.customCheckbox'));
        for (let elt of allCheckboxes) {
            const name = elt.name;
            // this will give 0 or -1
            const substr = name.indexOf(props.var);
            // therefore this will giv empty string or the rest of name wich is idx
            const idx = name.slice(substr+props.var.length)
            if (multichoice.indexOf(Number(idx)) !== -1) {
                elt.checked = true
            }
        }
    }
    useEffect(() => chekBoxCheck(), [])
    
    const dispatch = useDispatch();
    const yearly = useSelector(state => state.yearly);
    return <div className="add-ons">
        {props.options.map((elt, idx) => {
            return <label htmlFor={yearly + elt.name} key={idx} className='flex align-center option'>
                        <div><input 
                                className='customCheckbox'
                                type='checkbox'
                                name={props.var+idx}
                                id={yearly + elt.name}
                                onChange={(e) => dispatch(toggleSelected(props.var, idx))}
                        /></div>
                        <div className="flex-between wide align-center">
                            <div>
                                <p className='planName'>{elt.name}</p>
                                <p className="feature">{elt.feature}</p>
                            </div>
                                
                            <p className='add-on-price'>{elt.price}</p>
                        </div>
                    </label>
        })}
    </div> 
}