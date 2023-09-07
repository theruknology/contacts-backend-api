const express = require("express");
const router = express.Router();
const {getContacts, getContact, updateContact, createContact, delContact} = require('../controllers/contactController.js')

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(delContact);

module.exports = router;
