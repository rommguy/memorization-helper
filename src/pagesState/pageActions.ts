export const NEXT_PAGE = 'nextPage'
export const PREV_PAGE = 'prevPage'
export const MARK_SOLVED = 'markSolved'

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

export type PageActionType = NextPageAction | PrevPageAction | MarkSolvedAction
