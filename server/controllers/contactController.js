import db from '../models';

const { Contact } = db;

/**
 * Create a contact
 */
const createContact = (request, response) => {
  const { body } = request;

  Contact.create({
    firstName: body.firstName,
    lastName: body.lastName,
    phoneNumber: body.phoneNumber,
  })
    .then(user => {
      response.status(201).json({
        user,
        message: 'User created successfully!',
      })
    })
    .catch(() => {
      response.status(500).json({
        error: 'Unexpected error. User not created!',
      });
    });
};


export { createContact };
