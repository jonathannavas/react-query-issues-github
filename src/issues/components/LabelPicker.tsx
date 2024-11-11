import { LoadingSpinner } from '../../shared'
import { useLabels } from '../hooks/useLabels'
import { GithubLabel } from '../interfaces'

export const LabelPicker = () => {
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
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white animate-fadeIn"
            style={{ border: `1px solid #${label.color}`, color: '#ffccd3' }}
            key={label.id}
          >
            {label.name}
          </span>
        )
      })}
    </div>
  )
}
