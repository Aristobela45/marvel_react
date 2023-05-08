import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material';
import { MarvelForm } from '../MarvelForm'



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: true,
    },
    {
        field: 'comics_appeared_in',
        headerName: 'Comics Appeared In',
        width: 110,
        editable: true,
        type: 'number'
    },
    {
        field: 'super_power',
        headerName: 'Super Power',
        width: 160
    },

    {
        field: 'date_created',
        headerName: 'Date Created',
        width: 110,
        editable: true
    },

    {
        field: 'user_token',
        headerName: 'User Token',
        width: 110,
        editable: true,
    },

    {
        field: 'character',
        headerName: 'Character',
        width: 110,
        editable: true,
    },
   
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () =>{
    let { marvelData, getData } = useGetData()
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridRowSelectionModel>([])

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // list of ids' from checked rows

    const MyAuth = localStorage.getItem('myAuth')
    console.log(MyAuth)

    if (MyAuth == 'true') {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h2>Marvel Character</h2>
            <DataGrid
                rows={marvelData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange= {(newSelectionModel) => {setData(newSelectionModel)}}
                {...marvelData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id="form-dialog-title">Update marvel</DialogTitle>
                <DialogContent>

                </DialogContent>
            </Dialog>
        </Box>
    )} else {
        return (
        <div>
            <h3>Please Sign In to View Your Character</h3>
        </div>
    )}
}