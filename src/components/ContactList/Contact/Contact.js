import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { getRandomHexColor, upFirst } from 'utils/index';
import { selectOperation } from 'redux/selectors';
import { LoaderContact } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactWrapper,
  Text,
  Avatar,
  Button,
} from 'components/ContactList/Contact/Contact.styled.js';

export const Contact = ({ contact: { id, name, number } }) => {
  const operation = useSelector(selectOperation);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

   return (
     <>
       <ContactWrapper>
         <Avatar color={getRandomHexColor()}>{upFirst(name)}</Avatar>

         <Text>
           {name}
           <span>Number: {number}</span>
         </Text>

         <Button type="button" onClick={handleDelete}>
           {operation === id ? (
             <LoaderContact
               loading={operation === id}
               color={'#003b8e'}
               size={18}
             />
           ) : (
             <RiDeleteBin5Fill size={28} color={'#dd6722'} />
           )}
         </Button>
       </ContactWrapper>
     </>
   );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

