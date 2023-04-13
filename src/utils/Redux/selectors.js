export const selectEmployees = (state) => state.employees.map((obj, index) => {
    return {
        ...obj,
        id: index
    }
})