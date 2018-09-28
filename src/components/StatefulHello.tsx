import * as React from "react";

export interface Props {
  name: string,
  enthusiasmLevel?: number;
}

// How is this necessary?
export interface State {
  currentEnthusiasm: number;
}

class StatefulHello extends React.Component <Props, State> {
  // Don't get how state works here (I think it recognizes the interface):
  // See how props arg is set to interface
  constructor(props: Props) {
    super(props)
    this.state = { currentEnthusiasm: (props.enthusiasmLevel || 1)}
  }

  // Why no type?
  // These are class property initializers
  // Create
  onIncrement = ()=> this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = ()=> this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  updateEnthusiasm = (enthusiasm: number)=> this.setState({currentEnthusiasm: enthusiasm});

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

}

function getExclamationMarks(numChars: number) {
  return Array(numChars+1).join("!");
}


export default StatefulHello;
