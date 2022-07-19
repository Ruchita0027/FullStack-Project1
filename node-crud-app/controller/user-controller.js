import { response } from "express";
import User from "../schema/user-schema.js";

export const addItems = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message : err.message });
    }
}    

export const getItems = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}

export const getItem = async (req, res) => {
    console.log(req.params.id);
    try {
        const user = await User.findById(req. params.id);
     // const user = await User.find({ _id: req.params.id });
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}

export const updateItem = async (req, res) => {
    let item = req.body;
    const updateItem = new User(item);
    try {
        await User. updateOne({ _id: req.params.id }, updateItem);
        res.status(201).json(updateItem);
    } catch (err) {
        res.status(409).json({ message : err.message });
    }
}

export const deleteItem = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        response.status(200).json({ message : "Item deleted Successfully"});
    } catch (err) {
        res.status(409).json({ message : err.message });
    }
}