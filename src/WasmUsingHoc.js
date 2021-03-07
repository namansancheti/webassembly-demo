import { withWasm } from "react-wasm";

const Add = ({ loading, error, data }) => {
  if (loading) return "Loading...";
  if (error) return "An error has occurred";

  const { instance } = data;
  const operand1 = 5;
  const operand2 = 17;
  return <div>{operand1} + {operand2} = {instance.exports.add(operand1, operand2)}</div>;
};

export const WasmUsingHoc = withWasm({ url: "/add.wasm " })(Add);