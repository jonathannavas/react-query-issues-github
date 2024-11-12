import { useState } from 'react'
import { LoadingSpinner } from '../../shared'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { useIssuesInfinite } from '../hooks/useIssuesInfinite'
import { State } from '../interfaces/issue'

export const ListViewInfinite = () => {
  const [state, setState] = useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { issuesQuery, page } = useIssuesInfinite({
    state,
    selectedLabels,
  })

  const issues = issuesQuery.data ?? []
  const handleStateChange = (state: State) => {
    setState(state)
  }
  const handleSelectedLabels = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label))
    } else {
      setSelectedLabels([...selectedLabels, label])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col justify-center">
            <IssueList
              issues={issues}
              handleStateChange={handleStateChange}
              currentState={state}
            />
            <button className="p-2 bg-blue-500 rounded-md hover:bg-blue-500 transition-all">
              Cargar más ....
            </button>
          </div>
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          handleSelectedLabels={handleSelectedLabels}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  )
}
