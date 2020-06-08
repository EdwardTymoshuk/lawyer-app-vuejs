export default {
    SET_CASES: (state, cases) => {
        state.cases = cases
    },
    SET_CASE_ELEMENT: (state, caseElement) => {
        state.caseElement = caseElement
    },
    SET_DELETED: (state) => {
        state.isDeleted = !state.isDeleted
    }
}