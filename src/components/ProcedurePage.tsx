import React, { Component } from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { fetchPageData } from '../pagesState/pageActions'
import { selectPageData } from '../pagesState/pageSelectors'
import { RootState, ThunkDispatch } from '../stateTypes'

interface OwnProps {
  pageId: string
}
interface StateProps {
  pageData: ReturnType<typeof selectPageData>
}
interface DispatchProps {
  fetchPageData: (pageId: string) => void
}

type Props = DispatchProps & StateProps & OwnProps

export class ProcedurePageInner extends Component<Props> {
  static displayName = 'ProcedurePage'
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    if (!this.props.pageData) {
      this.props.fetchPageData(this.props.pageId)
    }
  }

  render() {
    return (
      <div className="procedure-page">
        <h3 className="page-title">{this.props.pageData.content.pageTitle}</h3>
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = (
  state: RootState,
  ownProps: { pageId: string },
) => ({
  pageData: selectPageData(state, ownProps.pageId),
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  fetchPageData: (pageId: string) => dispatch(fetchPageData(pageId)),
})

export const ProcedurePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProcedurePageInner)
