import Button from "./Button"

const ContactsListItem = ({ contacts, onClick }) => {

   return (
    <>
        {contacts.map(contact => (
            <li key={contact.id} id={contact.id}>
                <span>{contact.name +': '+ contact.number}</span>
                <Button type='button' text={"Delete"}
                    onClick={() => onClick(contact.id)}
                />  
            </li>))
        }
    </>
  )
}

export default ContactsListItem