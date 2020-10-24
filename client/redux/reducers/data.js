import axios from 'axios'

const initialState = {
  repoList: [],
  readme: '',
  img: {}
}

const REPOS = 'REPOS'
const README = 'README'
const IMG = 'IMG'

export default function (state = initialState, action) {
  switch (action.type) {
    case REPOS:
      return { ...state, repoList: action.repos }
    case README: {
      return { ...state, readme: action.read }
    }
    case IMG:
      return { ...state, img: action.img }

    default:
      return state
  }
}

export const getRepos = (userName) => {
  return (dispatch) => {
    const name = userName
    axios(`https://api.github.com/users/${name}/repos`).then(({ data: repos }) =>
      dispatch({ type: REPOS, repos })
    )
  }
}

export const getReadme = (userName, repoName) => {
  return (dispatch) => {
    const name = userName
    const repo = repoName
    axios(`https://api.github.com/repos/${name}/${repo}/readme`, {
      headers: { Accept: 'application/vnd.github.VERSION.raw' }
    }).then(({ data: read }) => dispatch({ type: README, read }))
  }
}

export const getImg = (userName) => {
  return (dispatch) => {
    const name = userName
    axios(`https://api.github.com/users/${name}`).then(({ data }) =>
      dispatch({ type: IMG, img: data.avatar_url })
    )
  }
}
