export default {
    SET_CASES: (state, cases) => {
        state.cases = cases
    },
    SET_CASE_ELEMENT: (state, caseElement) => {
        state.caseElement = caseElement
    },
    SET_DELETED: (state) => {
        state.isDeleted = !state.isDeleted
    },

    SET_AUTH_LOGIN_DATA: (state, name, email) => {
        state.authMe.name = name,
        state.authMe.email = email,
        state.authMe.isAuth = true
    },
    SET_REGISTER_VALIDATE: (state) => {
        state.isRegisterValidate = true
    },
    SET_LOGOUT: (state) => {
        state.authMe.name = null,
        state.authMe.email = null,
        state.authMe.isAuth = false
    }
}