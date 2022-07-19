import express from "express";
//import { deleteItem } from "../../react-finalproject-1/src/services/api.js";
//import { updateItem } from "../../react-finalproject-1/src/services/api.js";
import { getItems } from "../controller/user-controller.js";
import { addItems } from '../controller/user-controller.js';
import { getItem } from "../controller/user-controller.js";
import { updateItem } from "../controller/user-controller.js";
import { deleteItem } from "../controller/user-controller.js";

const router = express.Router();

router.post('/add', addItems);
router.get('/all', getItems);
router.get('/:id', getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;

