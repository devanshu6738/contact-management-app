const express = require("express");
const router = express.Router();
const contactList = require("./../models/contact");

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newContact = new contactList(data);
        const response = await newContact.save(); 
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Error saving contact", error });
    }
});

module.exports = router;
