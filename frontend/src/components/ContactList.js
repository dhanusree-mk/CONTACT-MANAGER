import React from "react";

export function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <ul>
      {contacts.map((c) => (
        <li key={c._id}>
          {c.name} - {c.email} - {c.phone}
          <button onClick={() => onEdit(c)}>Edit</button>
          <button onClick={() => onDelete(c._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
