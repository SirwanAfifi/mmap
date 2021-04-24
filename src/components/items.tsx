import React from "react";
import { Node } from "../types";
import { NodeItem } from "./node_item";

type Props = {
  nodes: Node[];
  setNodes: (nodes: Node[]) => void;
};

export const NodeItems = ({ nodes, setNodes }: Props) => {
  return (
    <>
      {nodes.map((node, idx) => {
        return (
          <>
            <NodeItem
              key={idx}
              node={node}
              onTabPressed={(newNode) => {
                setNodes(
                  nodes.concat([
                    {
                      text: `${newNode.text} > New`,
                      clientX: newNode.clientX + 200,
                      clientY: newNode.clientY + -10,
                    },
                  ])
                );
              }}
            />
          </>
        );
      })}
    </>
  );
};
