import React from "react";
import { useState } from "react";
import { NodeItems } from "./components/items";
import { Node } from "./types";

export default function App() {
  const [nodes, setNodes] = useState<Node[]>([]);

  return (
    <div contentEditable>
      <svg
        onClick={({ clientX, clientY }) => {
          setNodes(
            nodes.concat([
              {
                text: "New Item",
                clientX,
                clientY,
              },
            ])
          );
        }}
      >
        <NodeItems nodes={nodes} setNodes={setNodes} />
      </svg>
    </div>
  );
}
