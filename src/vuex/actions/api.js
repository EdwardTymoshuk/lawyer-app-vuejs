import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU2OGI3ZGVhNWE4MzQxM2U0M2RjMTIiLCJpYXQiOjE1ODMwODU3NDN9.xX8_VysEZVWlYVLItbV-Azk88ZT772zjyn0PxyZ0x9Q'
    }
})

export default  {
    async GET_CASES({commit}) { 
        let cases = await instance.get('/cases').then(response => {
            return response.data         
        })
        commit('SET_CASES', cases)
        return cases
    },
    async GET_CASE_ELEMENT({commit}, caseId) {
        let caseElement = await instance.get('/cases/' + caseId).then(response => {
            return response.data
        })
        commit('SET_CASE_ELEMENT', caseElement)
            return caseElement
    },
    UPDATE_CASE_ELEMENT ({commit}, {caseId, caseElement}) {
        const {title, date, adress, firstName, secondName, dob, description} = caseElement
        instance.post('/cases/' + caseId, {title, date, adress, firstName, secondName, dob, description})
            commit('SET_CASE_ELEMENT', caseElement)
            return caseElement
    },
    async DELETE_CASE ({commit}, caseId) {
        let response = await instance.delete('/cases/' + caseId)
        try {
             if (response.status === 200) {
                commit('SET_DELETED')
                alert(`Your case ${caseId} was succesfully deleted`)
             }    
            
        } catch(err) {
            return err
        }
},
async ADD_CASE ({}, caseElement) {
    await instance.post('/cases', caseElement)
    }
}