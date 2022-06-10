import * as React from "react";

export default function DisplayInfo({ inputs }) {
  return <div>{JSON.stringify(inputs)}</div>;
}
