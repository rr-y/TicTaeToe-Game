import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, Toast, toast } from "react-toastify";
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
let itemArr = new Array(9).fill("empty");
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArr.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArr[0] === itemArr[1] &&
      itemArr[0] === itemArr[2] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} Won`);
    } else if (
      itemArr[3] === itemArr[4] &&
      itemArr[3] === itemArr[5] &&
      itemArr[3] !== "empty"
    ) {
      setWinMessage(`${itemArr[3]} Won`);
    } else if (
      itemArr[6] === itemArr[7] &&
      itemArr[6] === itemArr[8] &&
      itemArr[6] !== "empty"
    ) {
      setWinMessage(`${itemArr[6]} Won`);
    } else if (
      itemArr[0] === itemArr[3] &&
      itemArr[0] === itemArr[6] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} Won`);
    } else if (
      itemArr[1] === itemArr[4] &&
      itemArr[1] === itemArr[7] &&
      itemArr[1] !== "empty"
    ) {
      setWinMessage(`${itemArr[1]} Won`);
    } else if (
      itemArr[2] === itemArr[5] &&
      itemArr[2] === itemArr[8] &&
      itemArr[2] !== "empty"
    ) {
      setWinMessage(`${itemArr[2]} Won`);
    } else if (
      itemArr[0] === itemArr[4] &&
      itemArr[0] === itemArr[8] &&
      itemArr[0] !== "empty"
    ) {
      setWinMessage(`${itemArr[0]} Won`);
    } else if (
      itemArr[2] === itemArr[4] &&
      itemArr[2] === itemArr[6] &&
      itemArr[2] !== "empty"
    ) {
      setWinMessage(`${itemArr[2]} Won`);
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArr[itemNumber] === "empty") {
      itemArr[itemNumber] = isCross ? "cross" : "circle";
      console.log(itemArr[itemNumber]);
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="danger" block onClick={reloadGame}>
                Reload Game{" "}
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} Turn
            </h1>
          )}
          <div className="grid">
            {itemArr.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
