import { useState } from "react";
import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import { Circle } from "./nodes";
import "./styles.css";

const index = ({ history }) => {
  const [selectedData, setSelectedData] = useState("");

  const initialSchema = createSchema({
    nodes: [
      {
        id: "node-1",
        content: "hola/n \n2",
        coordinates: [250, 60],
        render: Circle,
        data: {
          name: "Luis Armando Castro Cota 2",
          percent: 10,
          amount: 1000,
          img: "https://docapdev.test.sml.mx/static/media/logo2.e9e34c1a.svg",
          clickHandler: (e) => console.log(e),
        },
      },
      {
        id: "node-2",
        content: "Node 2",
        coordinates: [100, 200],
        render: Circle,
        data: {
          name: "Eduardo",
          percent: 10,
          amount: 1000,
          img: "https://docapdev.test.sml.mx/static/media/logo2.e9e34c1a.svg",
          clickHandler: (e) => console.log(e),
        },
      },
      {
        id: "node-3",
        content: "Node 3",
        coordinates: [250, 220],
        render: Circle,
        data: {
          name: "Gerardo",
          percent: 10,
          amount: 1000,
          img: "https://docapdev.test.sml.mx/static/media/logo2.e9e34c1a.svg",
          clickHandler: (e) => console.log(e),
        },
      },
      {
        id: "node-4",
        content: "Node 4",
        coordinates: [400, 200],
        render: Circle,
        data: {
          name: "Gerardo",
          percent: 10,
          amount: 1000,
          img: "https://docapdev.test.sml.mx/static/media/logo2.e9e34c1a.svg",
          clickHandler: (e) => console.log(e),
        },
      },
    ],
    links: [
      { input: "node-1", output: "node-2" },
      { input: "node-1", output: "node-3" },
      { input: "node-1", output: "node-4" },
    ],
  });

  const UncontrolledDiagram = () => {
    // create diagrams schema
    const [schema, { onChange }] = useSchema(initialSchema);
    console.log(onChange);
    return (
      <div style={{ height: "22.5rem" }}>
        <Diagram schema={schema} onChange={onChange} />
      </div>
    );
  };
  return <UncontrolledDiagram />;
};
export default index;
