import { RootState } from '../stateTypes'

export const selectPagesOrder = (state: RootState) => state.pages.pagesOrder
export const selectPageData = (state: RootState, pageId: string) =>
  state.pages.pagesData[pageId]
