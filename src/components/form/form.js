import React from 'react';

import { Formik, Field, Form } from 'formik';
import { BasicTextFields } from '../textField/textField';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Basic = () => (
  <div>
    
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        
        <TextField label='firstName' type='text' />
        <br></br>
        
        <TextField id="lastName" name="lastName" placeholder="Doe" />
        <br></br>
        
        <TextField
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br></br>
        <Button type="submit"> Submit </Button>
      </Form>
    </Formik>
  </div>
);