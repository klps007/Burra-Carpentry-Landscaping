import React, { Component } from "react";
import "../styles/ReviewCard2.css";
import Card from "react-bootstrap/Card";

export class AdminQuoteCard extends Component {
  render() {
    const { firstname, lastname, phone, email, streetAddress, suburb, postcode, needFinance, commercialOrResidential, planningOnlyOrReadyNow, serviceRequired, approxStartDate, budget, approxsizeSQM, additionalDetails } = this.props.data;
console.log(serviceRequired)
    return (
	
      <div className="quote-body">
        <Card className="a-quote-card" style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Text>
              <h3>{firstname}</h3>
			  <h3>{lastname}</h3>
            </Card.Text>
			<Card.Text>
              <h4>{phone}</h4>
			  <h4>{email}</h4>
            </Card.Text>
			<Card.Text>
              <h5>{streetAddress}</h5>
			  <h4>{suburb}</h4>
			  <h5>{postcode}</h5>
            </Card.Text>
			<Card.Text>
              <h5>{needFinance}</h5>
			  <h5>{commercialOrResidential}</h5>
			  <h5>{planningOnlyOrReadyNow}</h5>
			  <h5>{approxsizeSQM}</h5>
			  <h5>{budget}</h5>
			  <h5>{approxStartDate}</h5>
            </Card.Text>
			  <h5>{serviceRequired.map( (service, index) =>
				{ return(
					<div key={index}>
						<p>{service}</p>
					
					{/*}
						<p>Service Required {service.serviceRequired}</p>
						
						{(service.paving == true) ?
						<p>Is paving {service.paving}</p> : <p></p>}

						{(service.rubbishRemoval == true) ?
						<p>Is Rubbish Removal {service.rubbishRemoval}</p> : <p></p>}
						
						{(service.newPlants == true) ?
						<p>Is New Plants {service.newPlants}</p> : <p></p>}
						
						{(service.newLawn == true) ?
						<p>Is New Lawn {service.newLawn}</p> : <p></p>}
						
						{(service.waterFeature == true) ? 
						<p>Is Water Feature {service.waterFeature}</p> : <p></p>}

						{(service.fencing == true) ?
						<p>Is Fencing {service.fencing}</p> : <p></p>}

						{(service.decking == true) ?
						<p>Is Decking {service.decking}</p> : <p></p>}

						{(service.poolArea == true) ?
						<p>Is Pool Area {service.poolArea}</p> : <p></p>}

						{(service.retainingWall == true) ?
						<p>Is Retaining Wall {service.retainingWall}</p> : <p></p>}
						
						{(service.walkInRobe == true) ?
						<p>Is Walk in Robe {service.walkInRobe}</p> : <p></p>}

						{(service.inHomeCarpentry == true) ?
						<p>Is In Home Carpentry {service.inHomeCarpentry}</p> : <p></p>}

						{(service.patio == true) ?
						<p>Is Patio {service.patio}</p> : <p></p>}

						{(service.treeRemoval == true) ?
						<p>Is Tree Removal {service.treeRemoval}</p> : <p></p>}	
						*/}
					</div>
			  		)})}</h5>
			   <Card.Text>
			   <h5>{additionalDetails}</h5>
			   </Card.Text>
			   </Card.Body>
        </Card>
      </div>
    );
  }
}
export default AdminQuoteCard;

