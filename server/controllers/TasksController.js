import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { taskService } from '../services/TaskService'



//PUBLIC
export class TasksController extends BaseController {
    constructor() {
        super("api/tasks")
        this.router
            .use(auth0provider.getAuthorizedUserInfo)
            .get('/:id/comments', this.getComments)
            .get('/:id', this.getById)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }


    async getComments(req, res, next) {
        try {
            let data = await taskService.getComments(req.params.id, req.userInfo.email)
            return res.send(data)
        }
        catch (err) { next(err) }
    }

    async getById(req, res, next) {
        try {
            let data = await taskService.getById(req.params.id, req.userInfo.email)
            return res.send(data)
        } catch (error) { next(error) }
    }

    async create(req, res, next) {
        try {
            req.body.creatorEmail = req.userInfo.email
            let data = await taskService.create(req.body)
            return res.status(201).send(data)
        } catch (error) { next(error) }
    }

    async edit(req, res, next) {
        try {
            let data = await taskService.edit(req.params.id, req.userInfo.email, req.body)
            return res.send(data)
        } catch (error) { next(error) }
    }

    async delete(req, res, next) {
        try {
            await taskService.delete(req.params.id, req.userInfo.email)
            return res.send("Successfully deleted")
        } catch (error) { next(error) }
    }
}


