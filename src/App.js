import * as React from "react";

import Form from "./Form";
import DisplayInfo from "./DisplayInfo";

import "./styles.css";

export default function App() {
  const [showInfo, setShowInfo] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowInfo(true);
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Form
          inputs={inputs}
          handleInputs={handleInputs}
          handleSubmit={handleSubmit}
        />

        {inputs.name && inputs.email && inputs.phone && showInfo ? (
          <DisplayInfo inputs={inputs} />
        ) : null}
      </div>
    </>
  );
}
