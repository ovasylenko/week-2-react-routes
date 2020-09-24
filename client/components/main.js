import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
      >
        Main
        <div>
          <Link to="/dashboard/">Go To Root</Link>
        </div>
        <div>
          <Link to="/dashboard/profile/385666b1-bff5-11e9-95ba-1bf845c18f8d">Go To Profile</Link>{' '}
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
