import React, { useState } from "react";
import { Node } from "../types";

const width = 150;
const height = 60;

type NodeProps = {
  node: Node;
  onTabPressed: (currentNode: Node) => void;
};

export const NodeItem = ({ node, onTabPressed }: NodeProps) => {
  const [label, setLabel] = useState(node.text);

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 9) {
        event.preventDefault();
        onTabPressed(node);
      }
    });
  }, []);

  return (
    <>
      <rect
        onClick={(e) => e.stopPropagation()}
        fill="transparent"
        stroke="tomato"
        strokeWidth={3}
        x={node.clientX}
        width={width}
        height={height}
        y={node.clientY}
      />

      <foreignObject
        onClick={(e) => e.stopPropagation()}
        x={node.clientX}
        y={node.clientY}
        width={width}
        height={height}
      >
        <input
          style={{
            height: "100%",
            textAlign: "center",
            outline: "none",
            border: "none",
            background: "transparent",
            wordBreak: "break-word",
          }}
          type="text"
          value={label}
          onChange={(e) => {
            setLabel(e.target.value);
          }}
        />
      </foreignObject>
    </>
  );
};
