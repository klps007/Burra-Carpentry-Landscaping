import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

class CustomInput extends React.Component {
  render() {
    const {
      input: { value, onChange },
      label,
      type
    } = this.props;
    return (
      <Form.Group as={Col}>
		<Form.Label>{label}</Form.Label>
        <Form.Control
          defaultValue={value}
          type={type}
          onChange={event => {
            onChange(event.target.value);
          }}
        />
      </Form.Group>
    );
  }
}

class CustomCheckbox extends React.Component {
  render() {
    const {
      input: { value, onChange },
      label,
      type
    } = this.props;
    return (
      <>
        <Form.Check
          defaultValue={value}
          type={type}
          onChange={event => {
            onChange(event.target.checked);
          }}
        />
        <Form.Label>{label}</Form.Label>
      </>
    );
  }
}

class CustomSelect extends React.Component {
  render() {
    const {
      input: { value, onChange },
      label,
      options
    } = this.props;
    return (
      <Form.Group controlId='exampleForm.ControlSelect1'>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as='select'
          defaultValue={value}
          onChange={event => {
            onChange(event.target.value);
          }}
        >
          {options.map(option => (
            <option>{option}</option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
}

class BootstrapForm extends React.Component {
  renderMultiSelect = ({ input, name }) => {
    return (
      <div>
        <Multiselect
          {...input}
          name={name}
          data={[
            'Paving',
            'Patio',
            'Retaining Wall',
            'Fencing',
            'Decking',
            'Pool Area',
            'Water Feature',
            'New Lawn',
            'New Plants',
            'Tree Removal',
            'Rubbish Removal',
            'In Home Carpentry',
            'Walk in Robe'
          ]}
          onBlur={this.props.onBlur}
          value={input.value !== '[]' ? [...input.value] : '[]'}
        />
      </div>
    );
  };

  render() {
    return (
      <div className='col-md-8'>
        <Form>
          <Form.Row>
            <Field
              name='firstName'
              component={CustomInput}
              props={{ label: 'First Name', type: 'text' }}
            />
            <Field
              name='lastName'
              component={CustomInput}
              props={{ label: 'Last Name', type: 'text' }}
            />
          </Form.Row>
          <Form.Row>
            <Field
              name='phone'
              component={CustomInput}
              props={{ label: 'Phone Number', type: 'text' }}
            />
            <Field
              name='email'
              component={CustomInput}
              props={{ label: 'Email', type: 'email' }}
            />
          </Form.Row>
          <Form.Row>
            <Field
              name="preferred"
              component={CustomSelect}
              props={{
                label: "How would you prefer to be contacted?",
                options: ["  ", "email", "phone"]
              }}
            />
          </Form.Row>
          <Form.Row>
            <Field
              name="streetAddress"
              component={CustomInput}
              props={{ label: 'Street Address', type: 'text' }}
            />
            <Field
              name='suburb'
              component={CustomInput}
              props={{ label: 'Suburb', type: 'text' }}
            />
            <Field
              name='postcode'
              component={CustomInput}
              props={{ label: 'Post Code', type: 'text' }}
            />
          </Form.Row>
          <Field
            name='commercialOrResidential'
            component={CustomSelect}
            props={{
              label: 'Is this a Commercial or Residential Property?',
              options: ['Residential', 'Commercial']
            }}
          />
          <Field
            name='planningOnlyOrReadyNow'
            component={CustomSelect}
            props={{
              label:
                'Are you currently in the planing phase, or ready to get started?',
              options: ['Ready to get started', 'Currently just planning']
            }}
          />
          <Form.Row>
            <Field
              name='approxStartDate'
              component={CustomInput}
              props={{
                label: 'What is your approximate start date?',
                type: 'date'
              }}
            />
          </Form.Row>
          <Form.Row>
            <Field
              name='budget'
              component={CustomInput}
              props={{ label: 'Your Budget in $', type: 'number' }}
            />

            <Field
              name='approxsizeSQM'
              component={CustomInput}
              props={{
                label: 'Approximate size in square meters',
                type: 'number'
              }}
            />
          </Form.Row>

          <Form.Row>
            <Field
              name='needFinance'
              component={CustomCheckbox}
              props={{ label: 'I need finance', type: 'checkbox' }}
            />
          </Form.Row>
          <div>
            <label>Required Services</label>
            <Field name='serviceRequired' component={this.renderMultiSelect} />
          </div>
          <br></br>
          <Form.Row>
            <Field
              name='additionalDetails'
              component={CustomInput}
              props={{ label: 'Additional Details', type: 'textarea' }}
            />
          </Form.Row>
          <Button onClick={this.props.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

BootstrapForm = reduxForm({
  form: 'getquoteform',
  initialValues: {
    commercialOrResidential: 'residential',
    planningOnlyOrReadyNow: 'Planning',
    needFinance: false
  }
})(BootstrapForm);

export default BootstrapForm;
