import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { deleteUser } from '@/models/User'

import type { IUserForm } from '@/types'

export const columns: ColumnDef<IUserForm>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => {
      const _id = row.original._id

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate = useNavigate()

      const handleDelete = async () => {
        const result = await deleteUser(_id!)
        if (result.status === 200) {
          redirect(_id!)
        }
      }

      const redirect = (id: string) => {
        return navigate(`/deleted-user/${id}`)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-destructive"
              onClick={handleDelete}
            >
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-yellow-400">
              <Link to="">Update</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Link to={`/user/${_id}`}>View</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
