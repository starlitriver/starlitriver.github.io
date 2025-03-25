import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Root } from "mdast"

export const RemoveAnkiCodeBlocks: QuartzTransformerPlugin = () => ({
  name: "RemoveAnkiCodeBlocks",
  markdownPlugins() {
    return [
      () => (tree: Root, _file) => {
        visit(tree, "code", (node, index, parent) => {
          if (node.lang?.toLowerCase() === "anki") {
            // Remove the code block while maintaining AST integrity
            parent?.children.splice(index, 1)
            
            // Adjust the index after removal and skip further processing
            return [visit.SKIP, index]
          }
        })
      }
    ]
  }
})