import { GithubIssue, State } from '../interfaces/issue'
import { IssueItem } from './IssueItem'

interface Props {
  issues: GithubIssue[]
  handleStateChange: (state: State) => void
  currentState: State
}

export const IssueList = ({
  issues,
  handleStateChange,
  currentState,
}: Props) => {
  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => handleStateChange(State.All)}
          className={`btn ${currentState === State.All ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => handleStateChange(State.Open)}
          className={`btn ${currentState === State.Open ? 'active' : ''}`}
        >
          Open
        </button>
        <button
          onClick={() => handleStateChange(State.Close)}
          className={`btn ${currentState === State.Close ? 'active' : ''}`}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  )
}
