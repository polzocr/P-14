export const selectEmployees = (state) => state.employees.map((obj, index) => ({
	...obj,
	id: index,
}));
