import db from '../models';

const { Sms, Contact } = db;

const createSms = (request, response) => {
  const { body } = request;

  return Sms.create({
    contactId: body.contactId,
    receiverId: body.receiverId,
    message: body.message,
    smsStatus: 'sent',
  })
    .then(sms => {
      response.status(201).json({
        sms,
        message: 'SMS sent successfully!',
      })
    })
    .catch(() => {
      response.status(500).json({
        error: 'Unexpected error. SMS not sent!',
      });
    });
};

const getSms = (request, response) => {
  const {
    params: {
      contactId,
      receiverId
    }
  } = request;

  return Sms.findOne({
    where: {
      contactId: contactId,
      receiverId: receiverId,
    }
  })
    .then(sms => {
      if (!sms) {
        return response
          .status(404)
          .json({ message: 'SMS not found!' });
      }

      return response
        .status(200)
        .json({
          message: sms.message,
        })
    })
    .catch(() => {
      response.status(500).json({
        error: 'An unexpected error. SMS not retrieved.',
      });
    });
};

const deleteSms = (request, response) => {
  const {
    params: {
      contactId
    }
  } = request;
  return Contact.findOne({
    where: { id: contactId }
  })
    .then(contact => {
      if (!contact) {
        return response
          .status(404)
          .json({ message: 'Contact not found!' });
      }

      return contact
        .destroy()
        .then(() => {
          return response
            .status(200)
            .json({ message: 'Contact deleted!' });
        })
        .catch(() => {
          response.status(500).json({
            error: 'An unexpected error. Contact not deleted!',
          });
        });
    });
};

export { createSms, getSms, deleteSms };
