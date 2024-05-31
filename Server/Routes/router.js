const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/", (req, res) => {
//   console.log("connect....");
// });

router.post("/register", async (req, res) => {
  const { fname, email, pass, mno, address } = req.body;

  if (!fname || !email || !pass || !mno || !address) {
    res.status(404).json("plz fill all data...");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(404).json("user already exist..");
    } else {
      const adduser = new users({
        fname,
        email,
        pass,
        mno,
        address,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//------------------ get all data -----------------------------

router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(404).json(error);
  }
});

// ----------------------- get individual data -------------------------

router.get("/getdata/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const individualData = await users.findById({ _id: id });
    console.log(individualData);
    res.status(201).json(individualData);
  } catch (error) {
    res.status(404).json(error);
  }
});

//-------------------- update data ----------------------

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedata = await users.findByIdAndUpdate(id, req.body);
    console.log(updatedata);

    res.status(201).json(updatedata);
  } catch (error) {
    res.status(404).json(error);
  }
});

// -------------- delete user ------------------------------

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteusers = await users.findByIdAndDelete({ _id: id });
    console.log(deleteusers);

    res.status(201).json(deleteusers);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
