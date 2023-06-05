export function getStorageEmployees() {
	return JSON.parse(localStorage.getItem('employees')) || []
}

export function saveStorageEmployee(formData) {
	const employees = getStorageEmployees()
	const employee = {
		firstName: formData.firstName,
		lastName: formData.lastName,
		birth_date: formData.birth_date,
		starter_date: formData.starter_date,
		department: formData.department,
		adress: formData.adress,
		city: formData.city,
		state: formData.state,
		zip_code: formData.zip_code,
	}
	employees.push(employee)
	localStorage.setItem('employees', JSON.stringify(employees))
}
