import React from 'react'
import './ContactList.css'

function ContactList({ contacts, totalCount }) {
  if (contacts.length === 0) {
    return (
      <div className="no-contacts">
        <p>No contacts found. Try adjusting your search.</p>
      </div>
    )
  }

  return (
    <div className="contact-list">
      <div className="contact-count">
        <div className="count-indicator"></div>
        <span>Showing {contacts.length} of {totalCount} contacts</span>
      </div>
      <div className="contacts-grid">
        {contacts.map(contact => (
          <div key={contact.id} className="contact-card">
            <div className="contact-avatar">
              <i className="fas fa-user avatar-icon"></i>
            </div>
            <div className="contact-info">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-email">
                <i className="far fa-envelope contact-icon"></i> {contact.email}
              </p>
              <p className="contact-phone">
                <i className="fas fa-phone contact-icon"></i> {contact.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactList

