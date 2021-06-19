import { useSelector } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ContactItem from '../ContactItem';
import popTransition from './pop.module.scss';

import styles from './ContactsList.module.scss';

// Компонент списка контактов
export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getfilteredContacts); // Селектор всех контактов

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={500}
          classNames={popTransition}
        >
          <ContactItem key={contact.id} contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
