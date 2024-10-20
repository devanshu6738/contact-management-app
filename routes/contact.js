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

router.get('/',async(req,res)=>{
    try {
        const data=await contactList.find();
        console.log("data fetched")
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Internal server error"})
    }
})
router.put('/:id',async(req,res)=>{
    try {
        const data=req.params.id;
        const updateData=req.body;
        const response=await contactList.findByIdAndUpdate(data,updateData,{
            new:true,
            runValidators:true,
    })
    if(!updateData){
        return res.status(404).json({error:"person not found"})
    }
    console.log("contact updated")
    res.status(200).json(response);
} catch (error) {
        console.log(error)
        res.status(500).json({error:"Interbal Server Error"})
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const data=req.params.id;
        const deletedContact = await contactList.findByIdAndDelete(data);
        if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
