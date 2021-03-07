import Wasm from "react-wasm";

export const WasmUsingRenderProp = () => (
  <Wasm url="/add.wasm">
	{({ loading, error, data }) => {
	  if (loading) return "Loading...";
	  if (error) return "An error has occurred";

	  const { instance } = data;
	  const operand1 = 5;
		const operand2 = 25;
	  return <div>{operand1} + {operand2} = {instance.exports.add(operand1, operand2)}</div>;
	}}
  </Wasm>
);