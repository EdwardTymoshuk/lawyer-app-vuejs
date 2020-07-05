import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://historic-zion-50119.herokuapp.com/',
    headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU2OGI3ZGVhNWE4MzQxM2U0M2RjMTIiLCJpYXQiOjE1ODMwODU3NDN9.xX8_VysEZVWlYVLItbV-Azk88ZT772zjyn0PxyZ0x9Q'
    }
})

export default {
    async GET_CASES({ commit }) {
        let cases = await instance.get('/cases').then(response => {
            return response.data
        })
        commit('SET_CASES', cases)
        return cases
    },
    async GET_CASE_ELEMENT({ commit }, caseId) {
        let caseElement
        if (caseId) {
            caseElement = await instance.get('/cases/' + caseId).then(response => {
                return response.data
            })
        }
        commit('SET_CASE_ELEMENT', caseElement)
        return caseElement
    },
    async UPDATE_CASE_ELEMENT({ commit }, { caseId, caseElement }) {
        const { title, date, adress, firstName, secondName, dob, description } = caseElement
        await instance.post('/cases/' + caseId, { title, date, adress, firstName, secondName, dob, description })
        commit('SET_CASE_ELEMENT', caseElement)
        return caseElement
    },
    async DELETE_CASE({ commit }, caseId) {
        try {
            let response = await instance.delete('/cases/' + caseId)
            let cases = await instance.get('/cases').then(response => {
                return response.data
            })
            commit('SET_CASES', cases)

            if (response.status === 200) {
                commit('SET_DELETED')
                alert(`Your case ${caseId} was succesfully deleted`)

            }
        } catch (err) {
            alert(err.response.data)
        }
    },
    async ADD_CASE({ commit }, caseElement) {
        await instance.post('/cases', caseElement).then(response => {
            return response.data
        })
        let cases = await instance.get('/cases').then(response => {
            return response.data
        })
        commit('SET_CASES', cases)
        return cases
    },
    async SEARCH_CASE({ commit }, searchingElement) {
        let cases = await instance.get('/cases').then(response => {
            return response.data
        })
        commit('SET_CASES', cases.filter(item => {
            if (item.firstName.toLowerCase().includes(searchingElement.toLowerCase())
                || item.secondName.toLowerCase().includes(searchingElement.toLowerCase())
                || item.title.toLowerCase().includes(searchingElement.toLowerCase())) {
                return item
            } else {
                return ''
            }
        }))
        return cases
    },
    async LOGIN_ME({commit}, email, password) {
        try {
            let loginData = await instance.post(('/users/login'), {email, password})
            commit('SET_AUTH_LOGIN_DATA', loginData.data.name, loginData.data.email)
            localStorage.setItem('user-token', JSON.stringify(loginData.data));
            alert(`${loginData.data.name}, You've been successfully logged in!`)
        } catch(err) {
            alert(err.response.data)
        }
    },
    async REGISTER_ME({commit}, name, email, password) {
        try {
            let response = await instance.post(('/users/register'), name, email, password)
            commit('SET_REGISTER_VALIDATE')
            alert(`${response.data.name}, Your account was successfully registered`)
        } catch(err) {
            alert(err.response.data)
        }
    }
}
