import { Button } from "@mui/material";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled } from "@mui/material";
import { useState  } from "react";
import { addItems } from "../services/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width : 50%;
    margin : 10% auto 0 auto;
    & > div {
        margin-top : 40px
    }
`

const defaultValue = {
    id : '',
    item : ' '
}

const AddItems =() => {
    const [item, setItem] = useState(defaultValue);

    const navigate = useNavigate();

const onValueChange = (e) => {
    setItem({ ...item, [e.target.name] : e.target.value })
}

const addItemDetails = async () => {
    await addItems(item);
    navigate('/all');
}

    return (
        <Container>
            <center><Typography variant="h3">Monthly Grocery Planning App</Typography></center><br /><br /><br />
            <Typography variant="h4">Add Shopping Items</Typography>
            <FormControl>
                <InputLabel>Grocery Items</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="item" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addItemDetails()}>Add</Button>
            </FormControl>
        </Container>
    )
}

export default AddItems;