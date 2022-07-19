import { Button } from "@mui/material";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled } from "@mui/material";
import { useState, useEffect  } from "react";
import { updateItem, getItem } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
//import user from "../../../node-finalproject-1/schema/user-schema";

const Container = styled(FormGroup)`
    width : 50%;
    margin : 10% auto 0 auto;
    & > div {
        margin-top : 40px
    }
`

const defaultValue = {
    item : ' '
}

const UpdateItems =() => {
    const [item, setItem] = useState(defaultValue);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadItemDetails();
    }, [])

    const loadItemDetails = async () => {
        const res = await getItem(id);
        setItem(res.data);
    }

const onValueChange = (e) => {
    setItem({ ...item, [e.target.name] : e.target.value })
}

const updateItemDetails = async () => {
    await updateItem(item, id);
    navigate('/all');
}

    return (
        <Container>
            <Typography variant="h4">Update Shopping Items</Typography>
            <FormControl>
                <InputLabel>Grocery Items</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="item" value={item.item} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => updateItemDetails()}>Update</Button>
            </FormControl>
        </Container>
    )
}

export default UpdateItems;