import {
  AddNewContact,
  getContacts,
  getContactWithID,
  UpdateContact,
  removeContact,
} from "../controllers/crmControler";

const routes = (app) => {
  app
    .route("/contact")
    // get all the contacts 
    .get((req, res, next) => {
      console.log(`Method : ${req.method} \n`);
      next();
    }, getContacts)
    // add a new contact
    .post(AddNewContact);
  
  app
    .route("/contact/:contactID")
    // get a specifique contact
    .get(getContactWithID)
    // modify a specifique contact
    .put(UpdateContact)
    // remove a specifique contact
    .delete(removeContact);  
}


export default routes;
