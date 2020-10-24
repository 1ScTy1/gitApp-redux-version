import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {getRepos, getReadme, getImg} from '../redux/reducers/data'

import Repo from './repo'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const { userName, repoName } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepos(userName))
    if (repoName !== undefined) {
      dispatch(getReadme(userName, repoName))
    }
  }, [])
  useEffect(() => {
    dispatch(getImg(userName))
  }, [])
  return (
    <div>
      <Header userName={userName} />
      <div className="container m-auto">
        <Route exact path="/:userName" component={() => <Repo />} />
        <Route exact path="/:userName/:repoName" component={() => <Readme />} />
      </div>
    </div>
  )
}

export default Home
