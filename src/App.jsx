import ContactForm from "./components/partsOfPage/contactForm/ContactForm";
import Filter from "./components/partsOfPage/Filter";
import ContactList from "./components/partsOfPage/ContactList";
import { Title, TitleSection } from "./components/styled/style";
import Section from "./components/partsOfPage/Section";
import Container from "./components/partsOfPage/Container";

const App = () => {

  // const { filter } = useSelector((state) => state.filter)
  // const dispatch = useDispatch()
  // const { contacts } = useSelector((state) => state.contacts)
  // const dispatch = useDispatch()

  // const filterContacts = ({target: {value}}) => {
  //   dispatch(setFilter(value))
  // }

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // })

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])
  
     
  // const handlerSubmit = (data) => {
  //   console.log('data', data)
  //   const foundUser = contacts.find(contact =>
  //     contact.name?.toLowerCase() === data.name.toLowerCase() 
  //   ) 
       
  //   if (foundUser) {
  //     alert(`${data.name} is already in contacts`)
  //     return;
  //   } 
   
  //   const addContactToThePhonebook = (data) => {
  //     dispatch(addContacts(data))
  //   }
  
      // setContacts(prev => [...prev, newContact])
    // }    
  // const handelerDelete = (id) => setContacts((prev)=> prev.filter(el=> el.id !== id))
  
  return (   
    
    <main>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm />
        </Container>
      </Section>

      <Section>
        <Container>
          <TitleSection>Contacts</TitleSection>
          <Filter title={'Find contacts by name'} />
          

            <ContactList />
        </Container>
      </Section>
    </main>
  )
};

export default App