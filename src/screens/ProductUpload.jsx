import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row
} from "react-bootstrap";
import productUpload from "../assets/images/product-upload.svg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import ImageUpload from "../components/ImageUpload";
import { useState, createContext } from "react";

export const ImageContext = createContext([])
function ProductUpload() {
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productUri, setProductUri] = useState();
  const [productImages, setProductImages] = useState([]);


  const [files, setFiles] = useState()
  console.log(files)

  return (
    <ImageContext.Provider value={{files, setFiles}} >
    <Container className="">
      <div className="text-primary my-5 d-flex ">
        <Image
          width={50}
          src={productUpload}
          className=""
          style={{ margin: "0 20px 10px 0" }}
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
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="border-default bg-primary"
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-3"
                  style={{ marginTop: "30px" }}
                  controlId="formBasicEmail"
                ></Form.Group>
                <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                  <Form.Label className="text-end">Price in #</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="border-default bg-primary"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="border-default bg-primary"
                  onChange={(e) => {
                    setProductDescription(e.target.value);
                  }}
                />
              </Form.Group>

              <div className="row d-flex ">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Product Images</Form.Label>
                  <div className="bg-white p-3">
                    <ImageUpload />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Product URI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="border-default bg-primary"
                    onChange={(e) => {
                      setProductUri(e.target.value);
                    }}
                  />
                </Form.Group>
              </div>

              <div className="mt-4">
                <Button
                  size="lg"
                  className="border-default"
                  onClick={() =>
                    console.log([productName, price, productDescription])
                  }
                >
                  Upload Product
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
    </ImageContext.Provider>
  );
}

export default ProductUpload;
