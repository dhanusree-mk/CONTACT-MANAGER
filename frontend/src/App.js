import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ContactForm from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const saveContact = async (contact) => {
    if (contact._id) {
      await axios.put(`http://localhost:5000/contacts/${contact._id}`, contact);
    } else {
      await axios.post("http://localhost:5000/contacts", contact);
    }
    fetchContacts();
    setEditContact(null);
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);

    fetchContacts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Manager</h2>
      <ContactForm contact={editContact} onSave={saveContact} />
      <ContactList
        contacts={contacts}
        onEdit={setEditContact}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;
