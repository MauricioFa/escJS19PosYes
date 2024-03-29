import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputEmail = (props) => {
  const { label, variant } = props;
  const [value, setValue] = React.useState({ email: '' });

  const handleChange = (event) => {
    setValue({ ...value, email: event.target.value });
  };

  return (
    <TextField
      type='email'
      name='email'
      autoComplete='email'
      margin='normal'
      className='component-inputEmail'
      required={true}
      label={label}
      variant={variant}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton color='primary'>
              <FontAwesomeIcon icon={['fas', 'user-circle']} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputEmail;
