import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const handleChange = ({ values, setValues }, prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = ({ values, setValues }) => (event) => {
  event.preventDefault();
  setValues({ ...values, showPassword: !values.showPassword });
};

export const PasswordFC = (props) => {
  const [textPlaceholder] = props;
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  return (
    <FormControl className='password-component'>
      <InputLabel htmlFor='adornment-password'>{textPlaceholder}</InputLabel>
      <Input
        required={true}
        error={false}
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        variant='outlined'
        onChange={handleChange({ values, setValues }, 'password')}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword({ values, setValues })}
            >
              {values.showPassword ? (
                <FontAwesomeIcon icon={['fas', 'eye']} />
              ) : (
                <FontAwesomeIcon icon={['fas', 'eye-slash']} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export const PasswordTF = (props) => {
  const { textPlaceholder, helperText } = props;
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  return (
    <TextField
      required={true}
      error={false}
      className='component-password'
      variant='outlined'
      type={values.showPassword ? 'text' : 'password'}
      label={textPlaceholder}
      value={values.password}
      helperText={helperText}
      onChange={handleChange({ values, setValues }, 'password')}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              aria-label='toggle password visibility'
              color='primary'
              onClick={handleClickShowPassword({ values, setValues })}
            >
              {values.showPassword ? (
                <FontAwesomeIcon icon={['fas', 'eye']} />
              ) : (
                <FontAwesomeIcon icon={['fas', 'eye-slash']} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
