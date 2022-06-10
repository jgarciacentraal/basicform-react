import * as React from "react";

const formStyle = {
  fontSize: "20px",
  fontFamily: "Arial, Helvetica, sans-serif",
  width: "auto",
  display: "flex",
  flexDirection: "column"
};

const ButtonStyle = {
  margin: "15px 0px",
  padding: "5px",
  backgroundColor: "gray",
  color: "white",
  fontFamily: "Arial, Helvetica, sans-serif",
  borderStyle: "none",
  borderRadius: "50px",
  cursor: "pointer"
};

export default function Form({ inputs, handleInputs, handleSubmit }) {
  return (
    <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
      <h1>Info </h1>
      <label id="name">Name: </label>
      <input
        htmlFor="name"
        name="name"
        value={inputs.name}
        onChange={(e) => handleInputs(e)}
      />
      <label id="email">Email: </label>
      <input
        htmlFor="email"
        name="email"
        value={inputs.email}
        onChange={(e) => handleInputs(e)}
      />
      <label id="phone">Phone: </label>
      <input
        htmlFor="phone"
        name="phone"
        value={inputs.phone}
        onChange={(e) => handleInputs(e)}
      />
      <button style={ButtonStyle} type="submit">
        Send
      </button>
    </form>
  );
}
