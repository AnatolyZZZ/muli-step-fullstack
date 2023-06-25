import {db} from '../config/db.js'

export const checkUser = async (email) => {
    // console.log(email)
    return db('allusers')
    .select('email')
    .where({'email' : email})
}