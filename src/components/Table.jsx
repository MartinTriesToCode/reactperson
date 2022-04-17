import { useState, useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';





function Table() {
    const [people, setPeople] = useState([]);
    const [order, setOrder] = useState('ASC');
    

    useEffect(() => {
        fetch('/api/React', {
            headers: {
                accepts: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setPeople(data));
    }, []);



    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...people].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setPeople(sorted);
            setOrder('DSC');
        }
        if (order === 'DSC') {
            const sorted = [...people].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setPeople(sorted);
            setOrder('ASC');
        }
    };

    return (
        <div>
            <h3>People</h3>
            <Link to="/Create" state={{hej:people}}>
                        <button>Create Person</button>
                    </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th><button className="sortBtn" onClick={() => sorting('Name')}>Name</button></th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((row) => (
                        <tr key={row.PersonId}>
                            <td>{row.PersonId}</td>
                            <td>{row.Name}</td>
                            <td>
                                <Link
                                    to={{
                                        pathname: `/Details/${row.PersonId}`,
                                      
                                    }}
                                >
                                    <button className="btn btn-primary">
                                        Details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}
export default Table;
