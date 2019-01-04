import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lgScShow: false,
      lgShow: false,
    };
  }
  
  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let lgScClose = () => this.setState({ lgScShow: false });

    return (
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1300,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          alignItems: `baseline`,
          flex: `0 auto`,
          flexDirection: `row`
        }}
      >
        <h2 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {this.props.siteTitle}
          </Link>
        </h2>
        <Button
          style={{
            marginLeft: 40,
            color: `white`
          }}
          onClick={() => this.setState({ lgShow: true })}
        >
          Create Quote
        </Button>
        
        
      </div>

      <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={lgClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Create Quote
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="button"
              onClick={() => this.setState({ lgScShow: true, lgShow: false })}
              >
              Create Quote
            </Button>
            <Button variant="secondary" type="button" 
              style={{
                marginLeft: 30
              }}
              onClick={() => this.setState({ lgShow: false })}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          size="lg"
          show={this.state.lgScShow}
          onHide={lgScClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Success
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Quote <Link to='/quote?id=121'>#121</Link> created successfully.
          </Modal.Body>
          <Modal.Footer>
            <Button
            onClick={() => this.setState({ lgScShow: false })} 
            variant="primary" type="button" >
              View Quote
            </Button>
            <Button variant="secondary" type="button" 
            style={{
              marginLeft: 30
            }}
            onClick={() => this.setState({ lgScShow: false })}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}