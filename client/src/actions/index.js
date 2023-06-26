const SET_FIELD = 'SET_FIELD', SET_PAYMENT = "SET_PAYMENT", SET_OPTION = 'SET_OPTION', SET_STEP = 'SET_STEP', CHANGE_VALID = 'CHANGE_VALID', CHANGE_UNVALID = 'CHANGE_UNVALID', TOGGLE_SELECTED='TOGGLE_SELECTED', SET_LOADING='SET_LOADING'

export {SET_FIELD, SET_PAYMENT, SET_OPTION, SET_STEP, CHANGE_VALID, CHANGE_UNVALID, TOGGLE_SELECTED, SET_LOADING}

export const setField = (name, str) => {
    return {
        type : SET_FIELD,
        field : name,
        payload : str
    }
}

export const setPayment = (yearly) => {
    return {
        type: SET_PAYMENT,
        payload : yearly
    }
}

export const setOption = (name, id) => {
    return {
        type : SET_OPTION,
        payload : id,
        name : name
    }
}

export const setStep = (id) => {
    return {
        type : SET_STEP,
        payload : id
    }
}

export const changeValid = (name) => {
    return {
        type : CHANGE_VALID,
        payload: name
    }
}

export const changeUnValid = (name) => {
    return {
        type : CHANGE_UNVALID,
        payload : name
    }
}

export const toggleSelected = (name, id) => {
    return {
        type : TOGGLE_SELECTED,
        payload : id,
        name : name
    }
}

export const setLoading = (val) => {
    return {
        type: SET_LOADING,
        payload : val
    }
}