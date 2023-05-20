import React, { useMemo } from 'react'
import {
  HomeIcon,
  ArchiveBoxIcon,
  XCircleIcon,
  ArrowDownIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'
import { Handle, Position } from 'reactflow'

type Props = {}

const icons = [HomeIcon, ArchiveBoxIcon, XCircleIcon, ArrowDownIcon, ArrowDownTrayIcon, CalendarDaysIcon]
const colors = ['red', 'blue', 'green', 'yellow', 'slate', 'indigo']

export const IconNode: React.FC<Props> = props => {
  const randomIndex = useMemo(() => Math.floor(Math.random() * icons.length), [])
  const RandomIcon = useMemo(() => icons[randomIndex], [randomIndex])
  const randomColor = useMemo(() => colors[randomIndex], [randomIndex])

  return (
    <>
      <Handle type="target" position={Position.Left} id="a" />
      <div className={`bg-${randomColor}-400 p-1 rounded-md bg-indigo-400`}>
        <RandomIcon className="h-10 w-10" />
      </div>
      <Handle type="source" position={Position.Right} id="b" />
    </>
  )
}
