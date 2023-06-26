import { insertAnswer } from "../modules/Answers.js";

export const _insertAnswer = async (req, res) => {
    try {
        // console.log('req.body',req.body)
        const answer = await insertAnswer ({...req.body});
        // console.log('answer', answer)
        if (answer.length > 0) {
            res.status(200).json({msg : "information added"})
        } else {
            res.status(500).json({msg: 'database error'})
        }
    } catch (err) {
        // console.log('error =>',err)
        res.status(500).json({msg: 'database error'})
    }
}