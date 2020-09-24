import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'
//
const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
      >
        Profile
        <div>
          <Link to="/dashboard/">Go To Root</Link>
        </div>
        <div>
          <Link to="/dashboard/main">Go to Main</Link>
        </div>
        <div id="username">{user}</div>
      </div>
    </div>
    //
  )
}

Profile.propTypes = {}

export default Profile

/*
Внутри должно быть четыре элемента

ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"
ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
div с id="title" и текстом Profile
div c id="username" и текстом, которые берется из параметра роута(см лекцию)
надо использовать

import { useParams } from 'react-router-dom'  

const { username } = useParams()  
*/
