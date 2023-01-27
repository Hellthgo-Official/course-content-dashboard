import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from 'react-bootstrap';
import courseUpload from '../../assets/images/course-upload.svg';
import imageSvg from '../../assets/images/image.svg';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { ImageFill } from 'react-bootstrap-icons';
import CourseSection from './CourseSection';
import { useState } from 'react';

function SingleUpload() {
  const [sections, setSections] = useState([0]);

  const addItem = () => {
    setSections([...sections, sections]);
  };

  return (
    <Container className="">
      <div className="text-primary my-5 d-flex ">
        <Image
          width={50}
          src={courseUpload}
          className=""
          style={{ margin: '0 20px 10px 0' }}
        />
        <h3 className="text-primary">Course Upload</h3>
      </div>
      <div>
        <Card className="no-border">
          <Card.Body className="">
            <Form>
              <div className="row d-flex ">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Course Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="border-default bg-primary"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-3" style={{marginTop:"30px"}} controlId="formBasicEmail">
                  {/* <Form.Label>Pricing</Form.Label> */}
                  <BootstrapSwitchButton
                    checked={true}
                    width={150}
                    onlabel="Free"
                    offlabel="Paid"
                    onstyle="success"
                    style={{color:"white"}}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                  <Form.Label className="text-end">Price in #</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="border-default bg-primary"
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Course Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="border-default bg-primary"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>About the Instruction (Your Bio)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="border-default bg-primary"
                />
              </Form.Group>

              {sections.map((item, i) => (
                <CourseSection />
              ))}

              <div className="row">
                <div className="col-6 mt-4 d-flex justify-content-around">
                  <Button size="" className="btn btn-default" onClick={addItem}>
                    Add new section
                  </Button>
                  <Button size="" className="btn btn-default">
                    Save changes
                  </Button>
                </div>
                <div className="col-6 mt-4">
                  <Button size="lg" className="btn btn-primary border-default " disabled>
                    Upload Course
                  </Button>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default SingleUpload;
