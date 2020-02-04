import React from "react";
import { Field, reduxForm } from "redux-form";

import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";

class GetQuoteForm extends React.Component {
  renderMultiSelect = ({ input, name }) => {
    return (
      <div>
        <Multiselect
          {...input}
          name={name}
          data={[
            "Paving",
            "Patio",
            "Retaining Wall",
            "Fencing",
            "Decking",
            "Pool Area",
            "Water Feature",
            "New Lawn",
            "New Plants",
            "Tree Removal",
            "Rubbish Removal",
            "In Home Carpentry",
            "Walk in Robe"
          ]}
          onBlur={this.props.onBlur}
          value={input.value !== "[]" ? [...input.value] : "[]"}
        />
      </div>
    );
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h3>Name</h3>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <h3>Contact</h3>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <Field name="phone" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <h3>Address</h3>
        <div>
          <label htmlFor="streetAddress">Street Address</label>
          <Field name="streetAddress" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="suburb">Suburb</label>
          <Field name="suburb" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="suburb">Postcode</label>
          <Field name="postcode" component="input" type="text" />
        </div>
        <h3>Particulars</h3>

        <div>
          <label>Is this a Commercial or Residential Property?</label>
          <Field name="commercialOrResidential" component="select">
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </Field>
        </div>

        <div>
          <label>
            Are you currently in the planing phase, or ready to get started?
          </label>
          <Field name="planningOnlyOrReadyNow" component="select">
            <option value="Planning">Currently just planning</option>
            <option value="ReadyToGetStarted">Ready to get started</option>
          </Field>
        </div>

        <div>
          <label htmlFor="approxStartDate">
            What is your approximate start date?
          </label>
          <Field name="approxStartDate" component="input" type="date" />
        </div>

        <div>
          <label htmlFor="budget">Your Budget in $</label>
          <Field name="budget" component="input" type="number" />
        </div>

        <div>
          <label htmlFor="needFinance">I need finance</label>
          <Field name="needFinance" component="input" type="checkbox" />
        </div>

        <div>
          <label htmlFor="approxsizeSQM">
            Approximate size in square meters
          </label>
          <Field name="approxsizeSQM" component="input" type="number" />
        </div>

        <div>
          <label>Required Services</label>
          <Field name="serviceRequired" component={this.renderMultiSelect} />
        </div>

        <div>
          <label htmlFor="additionalDetails">Additional Details</label>
          <Field name="additionalDetails" component="input" type="text" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

GetQuoteForm = reduxForm({
  form: "getquoteform",
  initialValues: {
    commercialOrResidential: "residential",
    planningOnlyOrReadyNow: "Planning",
    needFinance: false
  }
})(GetQuoteForm);
export default GetQuoteForm;
