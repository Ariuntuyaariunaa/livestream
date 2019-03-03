import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchStreams } from "../../actions"
export class StreamList extends Component {
  componentDidMount(){
    this.props.fetchStreams()
  }
  render() {
    return <div>Strem List</div>
  }
}

export default connect(null,{fetchStreams})(StreamList)
