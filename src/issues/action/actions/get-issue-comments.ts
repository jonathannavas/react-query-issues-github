import { githubApi } from '../../../api/github.api'
import { sleep } from '../../../helpers'
import { GithubIssue } from '../../interfaces/issue'

export const getIssueComments = async (
  issueNumber: number
): Promise<GithubIssue[]> => {
  await sleep(1500)
  const { data } = await githubApi.get<GithubIssue[]>(
    '/issues/' + issueNumber + '/comments'
  )
  return data
}
