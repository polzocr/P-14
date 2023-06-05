export default (state) => state.employees.map((obj, index) => ({
	...obj,
	id: index,
}))
