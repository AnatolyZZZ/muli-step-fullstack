import  {SET_FIELD, SET_PAYMENT, SET_OPTION, SET_STEP, CHANGE_VALID, CHANGE_UNVALID, TOGGLE_SELECTED, SET_LOADING} from '../actions/index.js'

const save = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
}
// to work with local storage not to frequantly lets make a trottled version of save function
const trottle = (fn, t) => {
    let arg;
    let blockUntil = -1;
    let tm;
    return function tr (...args) {
            if (Date.now() > blockUntil) {
                blockUntil = Date.now() + t;
                fn(...args);
            } else {
                clearTimeout(tm);
                arg = [...args];
                tm = setTimeout(()=>fn(...arg), blockUntil - Date.now())
            }
    }
}

const trotteledSave = trottle(save, 1000);


const basicState  = {
    fields : {name : '', email : '', phone : ''},
    valid : {name : true, email : true, phone : true, plan : true, email_not_occupied : true},
    current_step : 0,
    yearly : 'yearly',
    options : {plan : null},
    multichoice : {add_ons : []},
    loading : false
}
const memoState = localStorage.getItem('state')

export const reducer = (state = memoState ? JSON.parse(memoState) : basicState, action = {}) => {
    switch(action.type) {
        case SET_FIELD : 
            const res = {...state.fields};
            res[action.field] = action.payload;
            trotteledSave({...state, fields : res})
            return {...state, fields : res}
        case SET_PAYMENT :
            trotteledSave({...state, yearly : action.payload})
            return {...state, yearly : action.payload}
        case SET_OPTION :
            const _options = {...state.options};
            _options[action.name] = action.payload;
            trotteledSave({...state, options : _options})
            return {...state, options : _options}
        case SET_STEP :
            trotteledSave({...state, current_step : action.payload})
            return {...state, current_step : action.payload};
        case CHANGE_VALID : 
            const validation = {...state.valid};
            validation[action.payload] = true
            trotteledSave({...state, valid : validation})
            return {...state, valid : validation}
        case CHANGE_UNVALID : 
            const _validation = {...state.valid};
            _validation[action.payload] = false;
            trotteledSave({...state, valid : _validation})
            return {...state, valid : _validation};
        case TOGGLE_SELECTED :
            const multi = {...state.multichoice}
            const arr = multi[action.name];
            const idx = arr.findIndex(elt => elt === action.payload);
            if (idx === -1) {
                arr.push(action.payload);
            } else arr.splice(idx, 1);
            trotteledSave({...state, multichoice : multi})
            return {...state, multichoice : multi}
        case SET_LOADING : 
            return {...state, loading: action.payload}
        default : 
            return {...state}
    }
}