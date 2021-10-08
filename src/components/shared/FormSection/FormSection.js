import React from "react";
import { Form, Col, Row } from 'react-bootstrap'

const FormSection = ({ label, children, as, checkboxlabel, options, ...otherProps }) => {
  return <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="2">
      {label}
    </Form.Label>
    <Col sm="10">
      {as === 'checkbox' &&
        <Form.Check label={checkboxlabel} {...otherProps}></Form.Check>
      }
      {as === 'select' &&
        <Form.Control as={as} {...otherProps} >
          {options && options.map((o) => <option value={o}>{o}</option>)}
        </Form.Control>
      }
      {as !== 'select' && as !== 'checkbox' &&
        <Form.Control as={as} {...otherProps} />
      }

    </Col>
  </Form.Group >
    ;
};

export default FormSection;
