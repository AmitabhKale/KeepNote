import React from "react";
import { Row, Col, Stack, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "../hooks/useNote";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDelete: (id: string) => void;
};

const Note = ({ onDelete }: NoteProps) => {
  const note = useNote();

  const navigate = useNavigate();
  return (
    <div>
      <Row className="mb-4">
        <Col>
          <Stack gap={2} className=" h-100">
            <h2>{note.title}</h2>
            {note.tags.length > 0 && (
              <Stack gap={1} direction="horizontal" className="flex-wrap">
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
            <Button
              onClick={() => {
                alert("You Sure You want to delete?");
                onDelete(note.id);
                navigate("/");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
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
