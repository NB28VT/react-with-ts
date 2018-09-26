import * as React from "react";


// This is essentially defining a new type
export interface Props {
  // enthusiasmLevel ends with a "?" because it's optional
  name: string,
  enthusiasmLevel?: number
}

// Note use of Props typing for this function
// This is a STATELESS FUNCTION COMPONENT
// Classes not really necessary unless we're handling lifecycle hooks/managing state
function Hello({name, enthusiasmLevel=1}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic");
  }

  return (
    <div className="Hello">
      <div className="Greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

function getExclamationMarks(numChars: number) {
  return Array(numChars+1).join("!");
}

export default Hello;
