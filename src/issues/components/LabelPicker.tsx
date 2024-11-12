import { LoadingSpinner } from '../../shared'
import { useLabels } from '../hooks/useLabels'
import { GithubLabel } from '../interfaces'

interface Props {
  handleSelectedLabels: (label: string) => void
  selectedLabels: string[]
}

export const LabelPicker = ({
  handleSelectedLabels,
  selectedLabels,
}: Props) => {
  const { labelsQuery } = useLabels()

  if (labelsQuery.isLoading)
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </div>
    )
  if (!labelsQuery.data) return <h2>no hay data</h2>

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data.map((label: GithubLabel) => {
        return (
          <span
            role="none"
            className={`px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white animate-fadeIn 
              ${selectedLabels.includes(label.name) ? 'selected-label' : ''}
              `}
            style={{ border: `1px solid #${label.color}`, color: '#ffccd3' }}
            key={label.id}
            onClick={() => handleSelectedLabels(label.name)}
          >
            {label.name}
          </span>
        )
      })}
    </div>
  )
}
