import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row
} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import productUpload from "../assets/images/product-upload.svg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import ImageUpload from "../components/ImageUpload";
import { useState, createContext, useEffect } from "react";
import { encode, decode } from "base64-arraybuffer";

import resizer from "image-resizer-js";

import { useAlert } from "react-alert";

import axios from "axios";

export const ImageContext = createContext([]);
function ProductUpload() {
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productUri, setProductUri] = useState();
  const [productImages, setProductImages] = useState([]);

  const [files, setFiles] = useState([]);
  console.log(files?.name);
  // files?.map((e) => console.log(e.name));
  const assignFiles = async () => {
    setImage1(files[0]);
    setImage2(files[1]);
    setImage3(files[2]);

    console.log(files[0]);
    console.log(files[1]);
    console.log(files[2]);

    // console.log(image1);
    // console.log(image2);
    // console.log(image3);
  };

  return (
    <ImageContext.Provider value={{ files, setFiles }}>
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
                    <Form.Label className="text-end">Price in Near</Form.Label>
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

                <div className="warning">
                  <Alert key={"warning"} variant={"warning"}>
                    Drag/Select to Upload Three (3) Images at the same time
                  </Alert>
                </div>
                <div className="row d-flex ">
                  <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                    <Form.Label>Product Images</Form.Label>
                    <div className="bg-white p-3">
                      <ImageUpload />
                    </div>
                  </Form.Group>
                  {/* <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                    <Form.Label>Product URI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="border-default bg-primary"
                      onChange={(e) => {
                        setProductUri(e.target.value);
                      }}
                    />
                  </Form.Group> */}
                </div>

                <div className="mt-4">
                  <Button
                    size="lg"
                    className="border-default"
                    onClick={async () => {
                      console.log("pressed");
                      const ipfs = await axios
                        .post(
                          `http://localhost:41816/ipfs/upload-product-to-ipfs`,
                          {
                            image1: files[0],
                            image2: files[1],
                            image3: files[2],
                            description: productDescription
                          }
                        )
                        .then((res) => {
                          console.log(res.data);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
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
