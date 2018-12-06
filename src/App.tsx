import React, { Component } from 'react'
import './App.scss'
import { ProcedurePage } from './components/ProcedurePage'

export class App extends Component {
  static displayName = 'app-root'
  render() {
    return (
      <div className="App">
        <ProcedurePage pageId="f16I_red_5" />
      </div>
    )
  }
}
