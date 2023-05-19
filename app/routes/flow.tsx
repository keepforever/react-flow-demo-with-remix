import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import { ClientOnly } from 'remix-utils'

import ReactFlow from 'reactflow'
import styles from 'reactflow/dist/style.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: V2_MetaFunction = () => {
  return [{ title: 'React Flow Demo' }]
}

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export default function ReactFlowDemo() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-red-500">Flow Here</h1>
      <div style={{ width: '80vw', height: '90vh' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>

      {/* Wasn't sure if react flow would have trouble being SSR'd, might need to put in render function of client only if troubles arise */}
      <ClientOnly fallback={<div className="text-3xl text-green-300">Fallback...</div>}>
        {() => <div>hello client only</div>}
      </ClientOnly>
    </div>
  )
}
