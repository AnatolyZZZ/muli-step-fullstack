import steps from '../form-data.json';
import { useSelector } from 'react-redux';
import { Control } from './Control';
import { FreeForm } from './FreeForm';
import { Options } from './Options';
import { MultiChoice } from './MultiChoice';
import { Summary } from './Summary';
import './Step.css'

export const Step = (props) => {
const step_id = useSelector(state => state.current_step);
const yearly = useSelector(state => state.yearly);

// variables to use in labels 

const cur = steps.steps[step_id];
const type = cur.type;



let mainBlock;
switch (type) {
    case 'freeform' : 
        mainBlock = <FreeForm questions ={cur.questions}/>
    break;
    case 'options' :
        mainBlock = <Options options = {cur.options} header = {cur.header} var={cur.var}/>
    break;
    case 'multichoice' :
        mainBlock = <MultiChoice options = {cur.options[yearly]} var={cur.var}/>
        break;
    case 'summary' :
        mainBlock = <Summary/>
        break;
    default :
        mainBlock = <></>

}



    return <div className='step'>
            <div className='step-content'>
                <div className='container mooved'>
                    <h2 className='step-header'>{cur.header}</h2>
                    <h3 className='step-subheader'>{cur.subheader}</h3>
                    {mainBlock}
                </div> 
            </div>
            <div className='container'>
                <Control/>
            </div>
            
        </div>
}