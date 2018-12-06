import { set } from 'lodash/fp'
import { Reducer } from 'redux'
import { PagesState } from '../stateTypes'
import {
  MARK_SOLVED,
  NEXT_PAGE,
  PageActionType,
  PREV_PAGE,
  SET_PAGE_DATA,
} from './pageActions'

const initialState: PagesState = {
  currentPageIndex: 0,
  pagesOrder: [],
  pagesData: {},
}

export const pageReducer: Reducer<PagesState, PageActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, pageIndex: state.currentPageIndex + 1 }
    case PREV_PAGE:
      return { ...state, pageIndex: Math.max(state.currentPageIndex - 1, 0) }
    case MARK_SOLVED:
      return state
    case SET_PAGE_DATA:
      return set(`pagesData.${action.pageData.pageId}`, action.pageData, state)
    default:
      return initialState
  }
}
