const TaskModel = require("../models/task.model.js")
const fs = require('fs');

exports.getTasks = async (req, res) => {
  const userTelegramId = req.params.id;
  const taskResult = await TaskModel.getTaskByTelegramId(userTelegramId);
  res.send({
    message: taskResult.res,
    success: taskResult.error ? false : true
  })
}

exports.getAll = async (req, res) => {
  const userTelegramId = req.params.id;
  const taskResult = await TaskModel.getTasks();
  res.send({
    message: taskResult.res,
    success: taskResult.error ? false : true
  })
}

/**
 * 
 * @param {id, task_id} req 
 * @param {message, success} res 
 */
exports.createTaskStatus = async (req, res) => {
  const userTelegramId = req.body.id;
  const taskResult = await TaskModel.createStatus({telegram_user_id: userTelegramId, task_id: req.body.task_id, status: 1});
  console.log(taskResult)
  res.send({
    message: taskResult.error || taskResult.res,
    success: taskResult.error ? false : true
  })
}

/**
 * 
 * @param {name, bonus, image_url} req 
 * @param {message, success} res 
 */

exports.createTask = async (req, res) => {
  //save db
  const taskResult = await TaskModel.create({name: req.body.name, bonus: req.body.bonus, image_url: req.file.filename})
  res.send({
    message: taskResult.error || taskResult.res,
    success: taskResult.error ? false : true
  })
}


/**
 * 
 * @param {id} req 
 * @param {message, success} res 
 */

exports.delete = async (req, res) => {
  
  const taskResult = await TaskModel.delete(req.params.id)
  console.log(taskResult)
  res.send({
    message: taskResult.error || taskResult.res,
    success: taskResult.error ? false : true
  })
}
