import { autenticarUsuario } from '../middlewares/autenticar.js';
import { SessionsRepository } from '../repository/sessions.repository.js';

export class SessionsService {
    async login({ email, password }) {
        try {
            const datosUsuario = await autenticarUsuario(email, password);
            return datosUsuario;
        } catch (error) {
            return res.failedLogin(); 
        }
    }

    async createSession(userData) {
        try {
            return await SessionsRepository.createSession({ userData });
        } catch (error) {
            return res.failedCreateSession(); 
        }
    }

    async findOneSession(_id) {
        try {
            return await SessionsRepository.findOneSession(_id);
        } catch (error) {
            throw new Error('Failed to get session');
        }
    }

    async deleteOneSession(_id) {
        try {
            return await SessionsRepository.deleteOneSession(_id);
        } catch (error) {
            return res.failedDeleteSession(); 
        }
    }
}
