import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

function Search(props) {
    const [search, setSearch] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'email', headerName: 'Email', width: 240 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quntity', headerName: 'Quntity', width: 130 }
    ];

    const rows = [
        { id: 1174, name: "Air Freight", email: "manish@gamil.com", price: "9999", quntity: "2" },
        { id: 5923, name: "Ocean Freight", email: "mansi@gmail.com", price: "8888", quntity: "3" },
        { id: 8527, name: " Land Transport", email: "arpit@gmail.com", price: "9899", quntity: "2" },
        { id: 9210, name: "Cargo Storage", email: "bhumi@gamil.com", price: "6666", quntity: "4" },
        { id: 1487, name: "Logistics Services", email: "bansi@gmail.com", price: "8989", quntity: "2" }
    ];

    const handleSerach = (val) => {
        let sData = rows.filter((s) => (
            s.id.toString().includes(val) ||
            s.name.toLowerCase().includes(val.toLowerCase()) ||
            s.email.toLowerCase().includes(val.toLowerCase()) ||
            s.price.toString().includes(val) ||
            s.quntity.toString().includes(val)
        ))
        setSearch(sData)
        console.log(sData);
    }

    const finalData = search.length > 0 ? search : rows;

    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <TextField
                            margin="dense"
                            name='serach'
                            label="Medicine Serach"
                            type="serach"
                            fullWidth
                            variant="standard"
                            onChange={(e) => handleSerach(e.target.value)}
                        />
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={finalData}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;