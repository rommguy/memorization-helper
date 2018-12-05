import { find } from 'lodash/fp'
import exampleData from '../exampleData.json'
import { SinglePageState, ThunkAction } from '../stateTypes'

export const NEXT_PAGE = 'nextPage'
export const PREV_PAGE = 'prevPage'
export const MARK_SOLVED = 'markSolved'
export const SET_PAGE_DATA = 'setPageData'

export const nextPage = () => ({
  type: NEXT_PAGE as typeof NEXT_PAGE,
})
type NextPageAction = ReturnType<typeof nextPage>

export const prevPage = () => ({
  type: PREV_PAGE as typeof PREV_PAGE,
})
type PrevPageAction = ReturnType<typeof prevPage>

export const markSolved = (pageId: string) => ({
  type: MARK_SOLVED as typeof MARK_SOLVED,
  pageId,
})
type MarkSolvedAction = ReturnType<typeof markSolved>

const setPageDataAction = (pageData: SinglePageState) => ({
  type: SET_PAGE_DATA as typeof SET_PAGE_DATA,
  pageData,
})
type SetPageDataAction = ReturnType<typeof setPageDataAction>

export const fetchPageData: (pageId: string) => ThunkAction = pageId => (
  dispatch,
  getState,
) => {
  const pagesExampleData = exampleData.pages as object[]
  const pageDataToAdd = find({ pageId }, pagesExampleData) as SinglePageState
  dispatch(setPageDataAction(pageDataToAdd))
}

export type PageActionType =
  | NextPageAction
  | PrevPageAction
  | MarkSolvedAction
  | SetPageDataAction
