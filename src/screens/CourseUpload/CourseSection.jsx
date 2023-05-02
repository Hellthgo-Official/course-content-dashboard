import React from "react";
import { Button, Form, Alert, } from "react-bootstrap";
import ImageUploader from "../../components/ImageUploader";

function CourseSection() {
  return (
    <div>
      <h4 className="text-primary mt-5">Section </h4>
      <div className="bg-primary p-4 border-default rounded-4 row">
        <Form.Group className="mb-3 col-8" controlId="formBasicEmail">
          <Form.Label>Topic </Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            className="border-default bg-white"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold", width: "100%" }}>
            <Alert key={"warning"} variant={"warning"}>
              Upload 1 Image
            </Alert>
          </Form.Label>
          <Form.Label>Images for Topic </Form.Label>
          <div className="bg-white p-3">
            <ImageUploader />
          </div>
        </Form.Group>
      </div>
    </div>
  );
}

export default CourseSection;
