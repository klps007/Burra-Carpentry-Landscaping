import React, { Component } from 'react'
import { Button, Modal} from 'react-bootstrap'
import AddEditForm from './AddEditForm'

 class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''

    //   if(label === 'Edit'){
    //     button = <Button
    //               color="warning"
    //               onClick={this.toggle}
    //               style={{float: "left", marginRight:"5px"}}>{label}
    //             </Button>
    //     title = 'Edit Item'
    //   } else {
    //     button = <Button
    //               color="success"
    //               onClick={this.toggle}
    //               style={{float: "left", marginRight:"5px"}}>{label}
    //             </Button>
    //     title = 'Add New Item'
    //   }


      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <Modal.Header toggle={this.toggle} close={closeBtn}>{title}</Modal.Header>
          <Modal.Body>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ModalForm