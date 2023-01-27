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
import ImageUploader from "../components/ImageUploader";
import { useState } from "react";
import Moralis from "moralis";

function ProductUpload() {
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productUri, setProductUri] = useState();
  const [productImages, setProductImages] = useState([]);

  // const { saveFile, moralisFile } = useMoralisFile();
  const runMoralis = async () => {
    await Moralis.start({
      apiKey: "ZwLmrB0MLyLCcDP89Z5MJ9e81Xm4kJ0jiNhhyDDwrSCXuLGYACXRXVSPy1PB0ckb"
    });
    const abi = [
      {
        path: "metadata.json",
        content: {
          name: "NFT Name",
          description: "This will be the NFT description.",
          image:
            "ipfs://bafybeihewi4brhhmjqvquwdqnlzhnamfh26txwmw2fe4nfswfckpthowna/brandResoursesMage2.svg",
          attributes: [
            {
              trait_type: "Base",
              value: "Starfish"
            },
            {
              trait_type: "Eyes",
              value: "Big"
            },
            {
              trait_type: "Mouth",
              value: "Surprised"
            }
          ]
        }
      }
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

    console.log(response.toJSON());
  };

  return (
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
                    <ImageUploader />
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
                  onClick={async () => {
                    console.log([productName, price, productDescription]);
                    await runMoralis();
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
  );
}

export default ProductUpload;
