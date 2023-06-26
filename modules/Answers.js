import {db} from '../config/db.js';

export const insertAnswer = async (body) => {
    // console.log('body in insertAnswer', body)
    // console.log('fields in insertAnswer', body.fields)
    // console.log('pltypy addons =>',typeof(body.multichoice.add_ons))
    const dataToInsert = {...body.fields, addons : JSON.stringify(body.multichoice.add_ons), yearly : body.yearly, plan : body.options.plan};
    // console.log('to insert', dataToInsert)
    return db('allusers')
    .insert(dataToInsert)
    .returning('*')
    .catch(err => console.log('error', err)) 
}