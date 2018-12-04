import { Reducer } from 'redux'
import {
  MARK_SOLVED,
  NEXT_PAGE,
  PageActionType,
  PREV_PAGE,
} from './pageActions'

interface IpageState {
  currentPageIndex: number
}

const intitialState: IpageState = {
  currentPageIndex: 0,
}

export const pageReducer: Reducer<IpageState, PageActionType> = (
  state = intitialState,
  action,
) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, pageIndex: state.currentPageIndex + 1 }
    case PREV_PAGE:
      return { ...state, pageIndex: Math.max(state.currentPageIndex - 1, 0) }
    case MARK_SOLVED:
      return state
  }
}
