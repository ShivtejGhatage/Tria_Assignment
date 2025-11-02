import React from 'react'
import './SearchBar.css'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search contacts by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  )
}

export default SearchBar

