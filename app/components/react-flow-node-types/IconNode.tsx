import React from 'react'
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

export const IconNode: React.FC<Props> = props => {
  const randomIndex = Math.floor(Math.random() * icons.length)
  const RandomIcon = icons[randomIndex]

  return (
    <>
      <Handle type="target" position={Position.Left} id="a" />
      <div className="bg-red-400 p-1 rounded-md nodrag">
        <RandomIcon className="h-10 w-10" />
      </div>
      <Handle type="source" position={Position.Right} id="b" />
    </>
  )
}
