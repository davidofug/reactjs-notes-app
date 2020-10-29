import React from 'react'
import {
    useRouteMatch,
    useParams
} from 'react-router-dom'

const Note = () => {

    let match = useRouteMatch()
    let { note } = useParams()

    return (
      <div>
          {note}
      </div>
    )
}

export default Note
