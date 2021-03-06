import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);


// add New Contact to databse 
export const AddNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.send(contact);
  });
}

// Get All the contacts form the database

export const getContacts = (req, res) => {

  Contact.find({},(err, contact) => {
    if (err) {
      res.send(err);
    }
    res.send(contact);
  });
};


// Get COntact by ID 
export const getContactWithID = (req, res) => {

  Contact.findById(req.params.contactID ,(err, contact) => {
    if (err) {
      res.send(err);
    }
    res.send(contact);
  });
};

// Update Contact
export const UpdateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify:false} ,(err, contact) => {
    if (err) {
      res.send(err);
    }
    res.send(contact);
  });
};

// Delete Contact
export const removeContact = (req, res) => {
  Contact.remove(
    { _id: req.params.contactID },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.send({message:'successfully deleted contact !!'});
    }
  );
};