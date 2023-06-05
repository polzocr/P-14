import { Outlet } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { getStorageEmployees } from '../../services/storage'
import { saving } from '../../features/employees'

export default function Layout() {
	const dispatch = useDispatch()

	useEffect(() => {
		const employees = getStorageEmployees()
		employees.forEach((employee) => {
			dispatch(saving(employee))
		})
	}, [])

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
