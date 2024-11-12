import { useState } from 'react'
import { LoadingSpinner } from '../../shared'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { useIssues } from '../hooks/useIssues'
import { State } from '../interfaces/issue'

export const ListView = () => {
  const [state, setState] = useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { issuesQuery } = useIssues({
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
          <IssueList
            issues={issues}
            handleStateChange={handleStateChange}
            currentState={state}
          />
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
