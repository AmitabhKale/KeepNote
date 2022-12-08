import React from "react";
import { Row, Col, Stack, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNote } from "../hooks/useNote";
import ReactMarkdown from "react-markdown";

const Note = () => {
  const note = useNote();
  return (
    <div>
      <Row className="align-items-center mb-4">
        <Col>
          <Stack
            gap={2}
            className="align-items-center justify-content-center h-100"
          >
            <h2>{note.title}</h2>
            {note.tags.length > 0 && (
              <Stack
                gap={1}
                direction="horizontal"
                className="justify-content-center flex-wrap"
              >
                {note.tags.map((tag) => (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </Stack>
            )}
          </Stack>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="outline-danger">Delete</Button>
            <Link to={".."}>
              <Button variant="outline-secondary">Back </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </div>
  );
};

export default Note;
