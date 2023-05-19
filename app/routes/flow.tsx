import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import { useCallback } from 'react'
// import { ClientOnly } from 'remix-utils'

/* React Flow Deps */
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow'
import type { BackgroundVariant } from 'reactflow'
import styles from 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '2' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: V2_MetaFunction = () => {
  return [{ title: 'React Flow Demo' }]
}

export default function ReactFlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: any) => setEdges(eds => addEdge(params, eds)), [setEdges])

  return (
    <div className="p-6">
      <h1 className="text-3xl text-red-500">Flow Here</h1>
      <div style={{ width: '70vw', height: '70vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background gap={12} size={1} variant={'dots' as BackgroundVariant} />
        </ReactFlow>
      </div>

      {/* Wasn't sure if react flow would have trouble being SSR'd, might need to put in render function of client only if troubles arise */}
      {/* <ClientOnly fallback={<div className="text-3xl text-green-300">Fallback...</div>}>
        {() => <div>hello client only</div>}
      </ClientOnly> */}
    </div>
  )
}
