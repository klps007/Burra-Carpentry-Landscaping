import React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
	suburb: '',
	postcode: ' ',
	needFinance: '',
	commercialOrResidential: '', 
	planningOnlyOrReadyNow: '',
	approxsizeSQM: '',
	budget: '',
	approxStartDate: '',
	serviceRequired: '',
	additionalDetail: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/admin/quotes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
		id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phone: this.state.phone,
		streetAddress: this.state.streetAddress,
		suburb: this.state.suburb,
		postcode: this.state.postcode,
		needFinance: this.state.needFinance,
		commercialOrResidential: this.state.commercialOrResidential,
		planningOnlyOrReadyNow: this.state.planningOnlyOrReadyNow,
		approxsizeSQM: this.state.approxsizeSQM,
		budget: this.state.budget,
		approxStartDate: this.state.approxStartDate,
		serviceRequired: this.state.serviceRequire,
		additionalDetails: this.state.additionalDetails	
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/admin', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phone: this.state.phone,
		streetAddress: this.state.streetAddress,
		suburb: this.state.suburb,
		postcode: this.state.postcode,
		needFinance: this.state.needFinance,
		commercialOrResidential: this.state.commercialOrResidential,
		planningOnlyOrReadyNow: this.state.planningOnlyOrReadyNow,
		approxsizeSQM: this.state.approxsizeSQM,
		budget: this.state.budget,
		approxStartDate: this.state.approxStartDate,
		serviceRequired: this.state.serviceRequire,
		additionalDetails: this.state.additionalDetails		   

      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, firstName, lastName, email, phone, streetAddress, suburb, postcode, needFinance,
		commercialOrResidential, planningOnlyOrReadyNow, approxsizeSQM, budget, approxStartDate,
		serviceRequired, additionalDetail} 
 = this.props.item
      this.setState( id, firstName, lastName, email, phone, streetAddress, suburb, postcode, needFinance,
		commercialOrResidential, planningOnlyOrReadyNow, approxsizeSQM, budget, approxStartDate,
		serviceRequired, additionalDetail )
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Form.Label for="firstName">First Name</Form.Label>
          <Form.Control type="text" name="firstName" id="firstName" onChange={this.onChange} value={this.state.firstName === null ? '' : this.state.firstName} />
        </FormGroup>
        <FormGroup>
		<Form.Label for="lastName">Last Name</Form.Label>
		<Form.Control type="text" name="lastName" id="lastName" onChange={this.onChange} value={this.state.lastName === null ? '' : this.state.lastName}  />
        </FormGroup>
        <FormGroup>
        <Form.Label for="email">Email</Form.Label>
		<Form.Control type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
        <FormGroup>
		<Form.Label for="phone">Phone</Form.Label>
		<Form.Control type="text" name="phone" id="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone}  placeholder="0433 333 333" />
        </FormGroup>
        <FormGroup>
		<Form.Label for="streeAddress">Street Address</Form.Label>
		<Form.Control type="text" name="streeAddress"id="streeAddress" onChange={this.onChange} value={this.state.streetAddresss === null ? '' : this.state.streetAddress}  placeholder="Street name and number" />
        </FormGroup>
        <FormGroup>
		<Form.Label for="suburb">Suburb</Form.Label>
		<Form.Control type="text" name="suburb" id="suburb"onChange={this.onChange} value={this.state.suburb === null ? '' : this.state.suburb}    />
        </FormGroup>
		<FormGroup>
		<Form.Label for="postcode">Postcode</Form.Label>
		<Form.Control type="text" name="postcode" id="postcode"onChange={this.onChange} value={this.state.postcode === null ? '' : this.state.postcodee}   />
        </FormGroup>
		<FormGroup>
		<Form.Label for="approxStartDate">Approx Start Date</Form.Label>
		<Form.Control type="text" name="approxStartDate" id="approxStartDate"onChange={this.onChange} value={this.state.approxStartDate === null ? '' : this.state.approxStartDate}    />
        </FormGroup>
		<FormGroup>
		<Form.Label for="needFinance">Need Finance</Form.Label>
		<Form.Control type="text" name="needFinance" id="needFinance"onChange={this.onChange} value={this.state.needFinance === null ? '' : this.state.needFinance}   />
        </FormGroup>
		<FormGroup>
		<Form.Label for="approxsizeSQM">Approx Size SQM</Form.Label>
		<Form.Control type="text" name="approxsizeSQM" id="approxsizeSQM"onChange={this.onChange} value={this.state.approxsizeSQM === null ? '' : this.state.approxsizeSQM}   />
        </FormGroup>
		<FormGroup>
		<Form.Label for="planningOnlyOrReadyNow"> Planning Only Or Ready Now</Form.Label>
		<Form.Control type="text" name="planningOnlyOrReadyNow" id="planningOnlyOrReadyNow"onChange={this.onChange} value={this.state.planningOnlyOrReadyNow === null ? '' : this.state.planningOnlyOrReadyNow}  />
		</FormGroup>
		<FormGroup>
		<Form.Label for="commercialOrResidential">Commercial Or Residential</Form.Label>
		<Form.Control type="text" name="commercialOrResidential" id="commercialOrResidential"onChange={this.onChange} value={this.state.commercialOrResidential === null ? '' : this.state.commercialOrResidential}   />
        </FormGroup>
		<FormGroup>
		<Form.Label for="budget">Budget</Form.Label>
		<Form.Control type="text" name="budget" id="budget"onChange={this.onChange} value={this.state.budget === null ? '' : this.state.budget}    />
        </FormGroup>
		<FormGroup>
		<Form.Label for="serviceRequired">Service Required</Form.Label>
		<Form.Control type="text" name="serviceRequired" id="serviceRequired"onChange={this.onChange} value={this.state.serviceRequired === null ? '' : this.state.serviceRequired}     />
        </FormGroup>	
		<FormGroup>
		<Form.Label for="additionalDetails">Additional Details</Form.Label>
		<Form.Control type="text" name="additionalDetails" id="additionalDetails"onChange={this.onChange} value={this.state.additionalDetail === null ? '' : this.state.additionalDetail}     />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
	);
	
  }
}

export default AddEditForm