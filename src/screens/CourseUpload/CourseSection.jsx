import React from "react";
import { Button, Form } from "react-bootstrap";
import ImageUploader from "../../components/ImageUploader";

function CourseSection() {
  return (
    <div>
      <h4 className="text-primary">Section 1</h4>
      <div className="bg-primary p-4 border-default rounded-4 row">
        <Form.Group className="mb-3 col-8" controlId="formBasicEmail">
          <Form.Label>Topic 1</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="border-default bg-primary"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Learning Images for Topic 1</Form.Label>
          <div className="bg-white p-3">
            <ImageUploader />
          </div>
        </Form.Group>
        <div className="col-4 mt-1">
          <Button className="btn btn-default">Add new topic</Button>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
