import type { ChangeEvent } from 'react'
import React, { useCallback } from 'react'
import { Handle, Position } from 'reactflow'

const handleStyle = { left: 10 }

type Props = {}

export const AlphaCustomNode: React.FC<Props> = props => {
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
  }, [])

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="bg-green-400 text-2xl p-6">
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
    </>
  )
}
