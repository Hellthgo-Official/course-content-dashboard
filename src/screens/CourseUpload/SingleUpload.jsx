// import * as buffer from 'buffer';
// (window as any).Buffer = buffer.Buffer;
import ImageUploader from "../../components/ImageUploader";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Toast
} from "react-bootstrap";
import courseUpload from "../../assets/images/course-upload.svg";
import connectionConfig from "../../ConfigJson";
import imageSvg from "../../assets/images/image.svg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { ImageFill } from "react-bootstrap-icons";
import CourseSection from "./CourseSection";
import { useState, createContext, useEffect } from "react";
import base_url from "../Baseurl";
import axios from "axios";
import { useAlert } from "react-alert";

import * as nearAPI from "near-api-js";
// import { accountt } from "../../components/header/Header";

const {
  keyStores,
  connect,
  WalletConnection,
  ConnectedWalletAccount,
  utils,
  Contract
} = nearAPI;

export const ImgContext = createContext([]);

function SingleUpload() {
  const [sections, setSections] = useState([0]);
  const alert = useAlert();
  const addItem = () => {
    setSections([...sections, sections]);
  };

  const [files, setFiles] = useState();
  const [summary, setSummary] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [price, setPrice] = useState();
  let productUri;
  const [numberOfProducts, setNumberOfProducts] = useState();
  // console.log(files);

  const signedUser = async () => {
    const nearConnection = await connect(connectionConfig);
    const walletConnection = new WalletConnection(nearConnection);
    // setSignedIn(walletConnection.getAccountId() || "Connect Wallet");
    console.log(walletConnection.getAccountId());
    const account = await nearConnection.account(
      walletConnection.getAccountId()
    );

    const contract = new Contract(
      walletConnection.account(), // the account object that is connecting
      "healthgo-conrse.near",
      {
        // name of contract you're connecting to
        viewMethods: ["read_products"], // view methods do not change state but usually return a value
        changeMethods: ["create_product"] // change methods modify state
      }
    );

    const response = await contract.create_product({
      name: title,
      product_uri: productUri,
      amount_per_unit: price,
      product_type: "course",
      init_available_products: "50000"
    });
  };
  // signedUser();

  // const Process = async () => {
  //   const response = await contract
  //     .create_product({
  //       args: {
  //         name: title,
  //         amount_per_unit: price,
  //         product_uri: productUri,
  //         product_type: "course",
  //         init_available_product: "50000"
  //       }
  //     })
  //     .then((e) => {
  //       console.log(e.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <ImgContext.Provider value={{ files, setFiles }}>
      <Container className="">
        <div className="text-primary my-5 d-flex ">
          <Image
            width={50}
            src={courseUpload}
            className=""
            style={{ margin: "0 20px 10px 0" }}
          />
          <h3 className="text-primary">Course Upload</h3>
        </div>
        <div>
          <Card className="no-border">
            <Card.Body className="">
              <Form>
                <div className="row d-flex ">
                  <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                    <Form.Label>
                      <h4 className="text-primary">Course Title</h4>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="border-default bg-primary"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-3"
                    // style={{ marginTop: "30px" }}
                    controlId="formBasicEmail"
                  >
                    {/* <Form.Label className="text-end">
                      Amount of products
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="border-default bg-primary"
                      onChange={(e) => {
                        setNumberOfProducts(e.target.value);
                      }}
                    /> */}
                    {/* <Form.Label>Pricing</Form.Label> */}
                    {/* <BootstrapSwitchButton
                      checked={true}
                      width={150}
                      onlabel="Free"
                      offlabel="Paid"
                      onstyle="success"
                      style={{ color: "white" }}
                    /> */}
                  </Form.Group>
                  <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                    <Form.Label className="text-end">Price in Near</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="border-default bg-primary"
                      onChange={(e) => {
                        setPrice(utils.format.parseNearAmount(e.target.value));
                        console.log(price);
                      }}
                    />
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Course Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="border-default bg-primary"
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <h4 className="text-primary">Course Body</h4>
                  <Form.Control
                    as="textarea"
                    rows={14}
                    className="border-default bg-primary"
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  />
                </Form.Group>

                <div>
                  <br />
                  <h4 className="text-primary">Course Image</h4>
                  <div className="bg-primary p-4 border-default rounded-4 row">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ fontWeight: "bold", width: "100%" }}>
                        <Alert key={"warning"} variant={"warning"}>
                          Upload 1 Course Banner Image
                        </Alert>
                      </Form.Label>
                      <div className="bg-white p-3">
                        <ImageUploader />
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 mt-4">
                    <Button
                      size="lg"
                      className="btn btn-primary border-default "
                      // disabled
                      onClick={async () => {
                        console.log("pressed");
                        if (
                          title === undefined ||
                          files === [] ||
                          summary === undefined ||
                          body === undefined ||
                          price === undefined
                        ) {
                          alert.error("please fill all fields", {
                            position: "bottom right",
                            transition: "scale"
                          });
                        } else {
                          alert.removeAll();
                          alert.info("Hang on, it'll just be a while", {
                            position: "bottom right",
                            transition: "scale",
                            timeout: "100000"
                          });
                          const ipfs = await axios
                            .post(
                              `http://localhost:41816/ipfs/upload-course-to-ipfs`,
                              {
                                image1: files,
                                title: title,
                                body: body,
                                conclusion: summary
                              }
                            )
                            .then(async (res) => {
                              const stringed = JSON.stringify(res.data.message);
                              const responded = res.data.message;
                              productUri = stringed;
                              alert.removeAll();
                              alert.info("we're almost there, hang on", {
                                position: "bottom right",
                                transition: "scale"
                              });
                              console.log(res.data.message);

                              console.log(stringed);
                              console.log(productUri);

                              console.log("functioning");
                              setTimeout(async () => {
                                const response = await signedUser()
                                  .then((final) => {
                                    console.log("hold on");
                                  })
                                  .catch((error) => {
                                    console.log("error occured " + error);
                                  });
                              }, 2000);
                            })
                            .catch((err) => {
                              alert.removeAll();
                              alert.error("Something went wrong", {
                                position: "bottom right",
                                transition: "scale"
                              });
                              console.log("final error" + err);
                            });
                        }
                      }}
                    >
                      Upload Course
                    </Button>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </ImgContext.Provider>
  );
}

export default SingleUpload;
