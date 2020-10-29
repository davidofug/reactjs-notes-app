import React from 'react'
import {
    useRouteMatch,
    useParams
} from 'react-router-dom'

const NoteItem = () => {

    let match = useRouteMatch()
    let { noteid } = useParams()

    return (
      <div>
          {noteid}
      </div>
    )
}

export default NoteItem
