import React, { useState } from 'react'
import ContactList from './components/ContactList'
import SearchBar from './components/SearchBar'
import AddContactForm from './components/AddContactForm'
import './App.css'


const initialContacts = [
  { id: 1, name: 'Shivtej Ghatage', email: 'ssg@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Gulshan Kumar', email: 'gksept@example.com', phone: '234-567-8901' },
  { id: 3, name: 'Mradul Sonkar', email: 'ms@example.com', phone: '345-678-9012' },
  { id: 4, name: 'Jayesh Verma', email: 'jj@example.com', phone: '456-789-0123' },
  { id: 5, name: 'Ved Patil', email: 'vp@example.com', phone: '567-890-1234' },
  { id: 6, name: 'Parth Gupta', email: 'pg@example.com', phone: '523-456-7890' },
  { id: 7, name: 'Madhur Sonkar', email: 'ms@example.com', phone: '634-567-8901' },
  { id: 8, name: 'Abdul Alan T', email: 'aat@example.com', phone: '745-678-9012' },
  { id: 9, name: 'Shiv Narang', email: 'sn@example.com', phone: '856-789-0123' }
]

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  const [searchTerm, setSearchTerm] = useState('')


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  
  const addContact = (newContact) => {
    const contact = {
      id: contacts.length + 1,
      ...newContact
    }
    setContacts([...contacts, contact])
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-container">
          <i className="fas fa-users logo-icon"></i>
          <span className="logo-text">ContactSpace</span>
        </div>
        <h1 className="main-title">Your Contact List</h1>
        <p className="subtitle">Manage, search, and organize all your contacts in one place.</p>
      </header>
      
      <main className="app-main">
        <div className="search-add-container">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
          />
          
          <AddContactForm onAddContact={addContact} />
        </div>
        
        <ContactList 
          contacts={filteredContacts} 
          totalCount={contacts.length}
        />
      </main>
    </div>
  )
}

export default App

