import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from 'react-bootstrap';
import productUpload from '../assets/images/product-upload.svg';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function ProductUpload() {
  return (
    <Container className="">
      <div className="text-primary my-5 d-flex ">
        <Image
          width={50}
          src={productUpload}
          className=""
          style={{ margin: '0 20px 10px 0' }}
        />
        <h3 className="text-primary">Product Upload</h3>
      </div>
      <div>
        <Card className="no-border">
          <Card.Body className="">
            <Form>
              <div className="row d-flex ">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                  <Form.Label>Pricing</Form.Label>
                  <BootstrapSwitchButton
                    checked={true}
                    width={150}
                    onlabel="Free"
                    offlabel="Paid"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                  <Form.Label className="text-end">Price in #</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Images</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <div className="mt-4">
                <Button size="lg" className="">
                  Upload Product
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default ProductUpload;
