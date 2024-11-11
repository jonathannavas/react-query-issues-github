import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../action/actions'

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['getLabels'],
    queryFn: getLabels,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60, //1 hora que se va a mantener como fresh
    placeholderData: [
      {
        id: 69105383,
        node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
        url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
        name: 'Browser: IE',
        color: 'c7def8',
        default: false,
      },
    ],
  })

  return {
    labelsQuery,
  }
}
