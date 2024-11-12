import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../action/actions/get-issues'
import { State } from '../interfaces/issue'

interface Props {
  state: State
  selectedLabels: string[]
}

export const useIssues = ({ state, selectedLabels }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels),
    staleTime: 1000 * 60,
  })

  return {
    issuesQuery,
  }
}
