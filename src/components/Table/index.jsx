/* eslint-disable react/prop-types */
import BootstrapTable from 'react-bootstrap-table-next'
import { useSelector } from 'react-redux'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'
import React from 'react'
import selectEmployees from '../../utils/Redux/selectors'

export default function Table() {
	const { SearchBar } = Search
	const employees = useSelector(selectEmployees)

	function dateFormatter(data) {
		return (
			<>
				{data.split('-').reverse().join('/')}
			</>
		)
	}

	const columns = [
		{
			dataField: 'firstName',
			text: 'Prénom',
			sort: true,
		},
		{
			dataField: 'lastName',
			text: 'Nom',
			sort: true,
		},
		{
			dataField: 'starter_date',
			text: 'Début',
			sort: true,
			formatter: dateFormatter,
		},
		{
			dataField: 'department',
			text: 'Fonction',
			sort: true,
		},
		{
			dataField: 'birth_date',
			text: 'Age',
			sort: true,
			formatter: dateFormatter,
		},
		{
			dataField: 'adress',
			text: 'Adresse',
			sort: true,
		},
		{
			dataField: 'city',
			text: 'Ville',
			sort: true,
		},
		{
			dataField: 'state',
			text: 'Etat',
			sort: true,
		},
		{
			dataField: 'zip_code',
			text: 'Zip',
			sort: true,
		},
	]

	const options = {
		paginationSize: 4,
		pageStartIndex: 1,
		alwaysShowAllBtns: true,
		withFirstAndLast: false,
		// hideSizePerPage: true,
		hidePageListOnlyOnePage: true,
		firstPageText: 'Premiere',
		prePageText: 'Précedente',
		nextPageText: 'Suivant',
		lastPageText: 'Derniere',
		nextPageTitle: 'Premiere',
		prePageTitle: 'Pre page',
		firstPageTitle: 'Page Suivante',
		lastPageTitle: 'Derniere Page',
		showTotal: false,
		disablePageTitle: true,
		sizePerPageList: [{
			text: '5', value: 5,
		}, {
			text: '10', value: 10,
		}, {
			text: 'Tout', value: employees.length,
		}],
	}

	return (
		<section className="mt-4">
			<ToolkitProvider
				keyField="id"
				data={employees}
				columns={columns}
				search
			>
				{
					(props) => (
						<div>
							<SearchBar {...props.searchProps} placeholder="Recherche" />
							<hr />
							<BootstrapTable
								keyField="id"
								data={employees}
								columns={columns}
								striped
								hover
								condensed
								pagination={paginationFactory(options)}
								{...props.baseProps}
							/>
						</div>
					)
				}
			</ToolkitProvider>
		</section>
	)
}
