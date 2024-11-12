import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getIssues } from '../action/actions/get-issues'
import { State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
}

export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {
  const [page, setPage] = useState(1)

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels, 1),
    staleTime: 1000 * 60,
  })

  return {
    issuesQuery,
    page,
  }
}
