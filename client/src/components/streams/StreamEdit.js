import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchStream, editStream } from "../../actions"
import StreamForm from "./StreamForm"
export class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  onSubmit = formvalues => {
    this.props.editStream(this.props.stream.id,formvalues)
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    if(!this.props.userId){
      return <div>You are not authorized</div>
    }
    if(this.props.userId && this.props.userId !== this.props.stream.userId){
      return <div>You are not authorized</div>
    }
    return (
      <div>
        <h3>Дамжуулалтыг засах</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title:this.props.stream.title,
            description:this.props.stream.description,
          }}  
        />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id],
          userId: state.auth.userId}
}
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit)
