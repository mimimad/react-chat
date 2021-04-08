import {CONFIG_API} from './constants';

class MainApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    login(roomId, userName) {
        return fetch(`${this._baseUrl}/rooms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomId,
                userName: userName,
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })

    }

    getUsersAndMessages(roomId) {
        return fetch(`${this._baseUrl}/rooms/${roomId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })

    }

}

const mainApi = new MainApi(CONFIG_API);
export default mainApi;