import { List } from 'components/styled/style'
import ContactsListItem from './ContactsListItem'

import { useDispatch, useSelector } from 'react-redux'
import { removeContact } from 'store/sliceContacts'

const ContactList = () => {

    const { contacts } = useSelector((state) => state.contacts)
    const { filter } = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const listOfFilteredContacts = contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
 
    const handlerClick = (id) => {
        dispatch(removeContact(id))
    }
    return (
        <List>
            <ContactsListItem contacts={filter ? listOfFilteredContacts : contacts}
                onClick={handlerClick}
            />    
        </List>
    )
}

export default ContactList