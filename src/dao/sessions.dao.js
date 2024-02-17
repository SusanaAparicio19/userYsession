import { SessionModel } from '../models/sessions.model.js';


export class SessionDao {
    async createSession(sessionData) {
        try {
            return await SessionModel.create(sessionData);
        } catch (error) {
            res.failedCreateSession();
        }
    }

    async findOneSession(_id) {
        try {
            return await SessionModel.findOne(_id);
        } catch (error) {
            res.failedFindSession();
        }
    }

    async deleteOneSession(_id) {
        try {
            return await SessionModel.deleteOne(_id);
        } catch (error) {
            res.failedDeleteSession();
        }
    }
}
/* TRAIDO DE USER MODEL ESTABA MAL UBICADO VER COMO IMPLEMENTARLO ACA
        buscarSession: function (req, res) {
            if (req.session['user']) {
                return res.json(req.session['user']);
            }
            res.failedGet();
        },

        deleteSession: function (req, res) {
            req.session.destroy(err => {
                if (err) {
                    return res.failedDeleteSession();
                }
                res.successfullLogout();
            });
        }*/