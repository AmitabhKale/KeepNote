import React from "react";
import { Form, Row, Stack, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

function NoteForm() {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect required />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={13}></Form.Control>
        </Form.Group>

        <Stack direction="horizontal" gap={3} className="justify-content-end">
          <Button>Save</Button>
          <Link to="..">
            <Button variant="secondary">Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}

export default NoteForm;
