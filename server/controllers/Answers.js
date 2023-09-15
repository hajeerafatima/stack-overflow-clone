import mongoose from "mongoose";
import Questions from '../models/Questions.js'

export const postAnswer = async(req,res) => {
    const{ id:_id } = req.params;
    const { noOfAnswers, answerBody, userAnswered} = req.body;
    const userId = req.userId;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
      }
      updateNoOfQuestions(_id, noOfAnswers);
    try{
    const updateQuestion = await Questions.findByIdAndUpdate(_id, 
        { $addToSet: {'answer': [{answerBody, userAnswered, userId }]}})
        res.status(200).json(updateQuestion)
    }catch(error){
            res.status(400).json(' error in updating')
    }
}

const updateNoOfQuestions = async(_id,noOfAnswers) =>{
    try{
        await Questions.findByIdAndUpdate( _id, {$set: {'noOfAnswers' : noOfAnswers}})
    }catch(error){
        console.log()
    }
}

export const deleteAnswer = async ( req,res) =>{
    const { id:_id } = req.params;
    const { answerid, noOfAnswers} = req.body;

    
    if(mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }
     
    if(mongoose.Types.ObjectId.isValid(answerid)){
        return res.status(404).send('Answer unavailable...');
    }
    updateNoOfQuestions( _id, noOfAnswers)
    try{
        await Questions.updateOne(
            { _id },
            { $pull: { 'answer': { _id: answerid}}}
        )
        res.status(200).json({ message: 'successfully deleted...'})
    }catch(error){
        res.status(404).json(error)
    }

}