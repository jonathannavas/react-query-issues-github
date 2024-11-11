import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../action/actions/get-issues'

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: getIssues,
    staleTime: 1000 * 60,
  })

  return {
    issuesQuery,
  }
}
