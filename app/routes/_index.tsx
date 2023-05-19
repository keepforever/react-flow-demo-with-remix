import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix AppZ' }]
}

export default function Index() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-red-500">Welcome to Remix</h1>
    </div>
  )
}
