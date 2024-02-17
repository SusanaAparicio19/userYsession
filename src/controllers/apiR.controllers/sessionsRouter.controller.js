import { SessionsService } from '../../service/sessions.service.js';


const sessionsService = new SessionsService();

export async function postSessionController(req, res, next) {
    try {
        const { email, password } = req.body;
        const datosUsuario = await sessionsService.login(email, password);
        req.session.user = datosUsuario;
        res.status(200).json(datosUsuario);
    } catch (error) {
        next(error);
    }
}


export async function deleteCurrentSessionController(req, res, next) {
    try {
        await sessionsService.deleteOneSession({ userData: req.session.user });
        req.session.destroy
        res.status(200).json(); 
    } catch (error) {
        next(error);
    }
}

export async function getCurrentSessionController(req, res, next) {
    try {
        const sessionData = await sessionsService.findOneSession({ userData: req.session.user });
        return res.json(sessionData);
    } catch (error) {
        next(error);
    }
}

export async function createSessionController(req, res, next) {
    try {
        const userData = req.body.userData;
        const newSession = await sessionsService.createOneSession(userData);
        res.status(201).json(newSession);
    } catch (error) {
        next(error);
    }
}


