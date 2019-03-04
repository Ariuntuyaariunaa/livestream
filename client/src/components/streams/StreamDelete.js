import React from "react"
import Modal from "../Modal"
import history from "../../history"

const StreamDelete = () => {
  const actions = (
    <>
      {/*Similar to <React.Fragment>*/}
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  )
  return (
    <Modal
      title="Delete Stream"
      content="Are you sure you want to delete this stream ?"
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  )
}

export default StreamDelete
