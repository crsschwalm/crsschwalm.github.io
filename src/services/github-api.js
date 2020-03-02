import { githubGQL } from './github-client'

export const fetchProjects = async () => {
    const res = await githubGQL(`{ 
    viewer {
        repositoriesContributedTo(first: 100, includeUserRepositories: true) {
            totalCount
            pageInfo {
            endCursor
            hasNextPage
            }
            nodes{
                name      
            }    
        }
    }
}`)

    return res.viewer.repositoriesContributedTo.nodes
}

export const fetchContributions = async ({ from, to }) => {
    const res = await githubGQL(`
    {
        viewer {     
            contributionsCollection( to:"${to}", from: "${from}") {
                totalCommitContributions
            
                totalRepositoriesWithContributedCommits
            
                pullRequestReviewContributions(first:1){
                  totalCount
                }
                pullRequestContributions(first:1) {
                        totalCount
                }
            }   
        }
    }
    `)


    const { totalCommitContributions: commits,
        totalRepositoriesWithContributedCommits: projectsCommittedTo,
        pullRequestReviewContributions: { totalCount: reviews },
        pullRequestContributions: { totalCount: pullRequests } } = res.viewer.contributionsCollection;

    return {
        commits,
        projectsCommittedTo,
        reviews,
        pullRequests
    }
}