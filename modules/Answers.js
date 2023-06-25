import {db} from '../config/db.js';

export const insertAnswer = async (body) => {
    console.log('body in insertAnswer', body)
    console.log('fields in insertAnswer', body.fields)
    const {email, name, phone} = {...body.fields}
    return db('AllUsers')
    .insert({email, name, phone, addons : multichoce[add_ons], ...options, yearly})
    .returning('*')
}