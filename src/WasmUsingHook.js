import { useWasm } from "react-wasm";

export const WasmUsingHook = () => {
  const {
    loading,
    error,
    data
  } = useWasm({
    url: '/add.wasm'
  });

  if (loading) return "Loading...";
  if (error) return "An error has occurred";

  const { instance } = data;
  const operand1 = 5;
  const operand2 = 11;
  return <div>{operand1} + {operand2} = {instance.exports.add(operand1, operand2)}</div>;
};