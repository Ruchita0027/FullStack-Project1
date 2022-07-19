import { Table, TableHead, TableBody, TableCell, TableRow, styled, Button } from '@mui/material';
import { getItems } from '../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { deleteItem } from '../../../node-finalproject-1/controller/user-controller';
import { deleteItem } from '../services/api';

const StyledTable = styled(Table)`
    Width : 70%;
    margin : 70px auto 0 auto;
`

const Thead = styled(TableRow)`
    background : #000000;
    & > th {
        color : #fff;
        font-size : 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size : 20px;
    }
`

const AllItems = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllItems();
    }, []);

    const getAllItems = async () => {
        let res = await getItems();
        setUsers(res.data);
    }

    const deleteItemDetails = async (id) => {
        await deleteItem(id);
        getAllItems()
    }

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Added Shopping Items</TableCell>
                <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.item}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' style={{ marginRight : 40 }} component={Link} to={`/update/${user._id}`}>Purchased</Button>
                                <Button variant='contained' color='error' onClick={() => deleteItemDetails(user._id)}>X</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllItems;