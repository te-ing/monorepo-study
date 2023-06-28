"use client"

import { add } from "math-helpers";
import { useState } from "react";
import { Button, Header } from "ui";

export default function Page() {
  const [number, setNumber] = useState(1)
  const handleState = () => setNumber((prev) => add(prev, 1))
  return (
    <>
      <Header text="Web" />
      <Button />
      <h3>{number}</h3>
      <button onClick={handleState} >add + 1</button>
    </>
  );
}
