import { SessionDao } from "../dao/sessions.dao.js";

export class SessionsRepository {
    async createSession(sessionData) {
        try {
            return await SessionDao.createSession(sessionData);
        } catch (error) {
            throw new Error('Failed to create session');
        }
    }

    async findOneSession(_id) {
        try {
            return await SessionModel.findOneSession(_id);
        } catch (error) {
            throw new Error('Failed to find session');
        }
    }

    async deleteOneSession(_id) {
        try {
            return await SessionModel.deleteOneSession(_id);
        } catch (error) {
            throw new Error('Failed to delete session');
        }
    }
}
