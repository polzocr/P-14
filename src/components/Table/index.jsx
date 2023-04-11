import BootstrapTable from 'react-bootstrap-table-next'
import { useSelector } from 'react-redux'
import paginationFactory from 'react-bootstrap-table2-paginator'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

export default function Table(){

    // const { SearchBar } = Search;
    const employees = useSelector((state) => state.employees)
    //employees.forEach((obj, index) => obj.id = index)

    function dateFormatter(data, row){
        return <>

        </>
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
            text: 'Date début',
            sort: true,
            formatter : dateFormatter
        },
        {
            dataField: 'department',
            text: 'Département',
            sort: true,
        },
        {
            dataField: 'birth_date',
            text: 'Date de naissance',
            sort: true,
            formatter: dateFormatter
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
            text: 'Code postal',
            sort: true,
        },
    ]

    return (
        <div>
            {/* <ToolkitProvider
                keyField="id"
                data={employees}
                columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <h3>Input something at below input field:</h3>
                            <SearchBar />
                            <hr />
                            <BootstrapTable
                                {...props.baseProps}
                            />
                        </div>
                    )
                }
            </ToolkitProvider> */}

            <BootstrapTable 
                keyField='firstName'
                data={employees}
                columns={columns}
                striped
                hover
                condensed
                pagination={paginationFactory()}
            />
        </div>
    )
}