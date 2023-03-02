import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import toast from 'react-hot-toast';
import { selectContacts, selectOperation } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
import { LoaderContact } from 'components/Loader/Loader';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function ContactForm({ onClose }) {
  const contacts = useSelector(selectContacts);

  const operation = useSelector(selectOperation);

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form;

    let value = {
      name: name.value,
      number: number.value,
    };
    // console.log(value);

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return toast(`${name.value} is already in contacts.`, {
        duration: 3000,
      });
    }

    const { error } = await dispatch(addContact(value));
    if (!error) {
      form.reset();
      onClose();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Typography component="h2" variant="30px" sx={{ color: '#fecb44' }}>
            New Contact
          </Typography>
          <Box
            component="form"
            // noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              '& label.Mui-focused': {
                color: '#f9ae17',
              },

              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#fecb44',
                },
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name contact"
                  name="name"
                  type="text"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  name="number"
                  label="Number"
                  type="tel"
                  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  autoComplete="new-tel"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={operation === 'add'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                mt: 3,
                mb: 2,
                bgcolor: '#fecb44',
                '&:hover': {
                  bgcolor: '#b13a18',
                  boxShadow: '0px 0px 5px #e75f28',
                },
                '&:focus': {
                  bgcolor: '#b13a18',
                  boxShadow: '0px 0px 5px #e75f28',
                },
              }}
            >
              {operation === 'add' ? (
                <>
                  <LoaderContact
                    color={'#f9ae17'}
                    size={20}
                  />
                  <span>Add ... </span>
                </>
              ) : (
                'Add your contact'
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
