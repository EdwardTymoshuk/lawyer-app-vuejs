import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU2OGI3ZGVhNWE4MzQxM2U0M2RjMTIiLCJpYXQiOjE1ODMwODU3NDN9.xX8_VysEZVWlYVLItbV-Azk88ZT772zjyn0PxyZ0x9Q'
    }
})

export default  {
    GET_CASES({commit}) {
        return instance.get('/cases').then(response => {
            let cases = response.data
            commit('SET_CASES', cases)
            return cases
        })
    }
}