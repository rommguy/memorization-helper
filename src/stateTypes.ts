import { Action } from 'redux'
import { ThunkAction, ThunkDispatch as ThunkDispatchGeneric } from 'redux-thunk'

export enum TRAINING_MODE {
  WORDS,
  LINES,
  SECTIONS,
  PAGE,
}

interface SectionItem {
  memorized: boolean
  segments: [
    {
      text: string
      memorized: boolean
    }
  ]
  subSection?: PageSection
}

interface PageSection {
  sectionType: string
  sectionTitle: string
  memorized: boolean
  items: SectionItem[]
}

export interface SinglePageState {
  readonly pageId: string
  readonly isSolved: boolean
  readonly pageType: string
  readonly content: {
    readonly pageTitle: string
    sections: ReadonlyArray<PageSection>
  }
}

export interface PagesState {
  readonly currentPageIndex: number
  pagesOrder: ReadonlyArray<string>
  readonly pagesData: {
    [pageId: string]: SinglePageState
  }
}

export interface ServerPageData {
  pageId: string
  pageType: string
  pageTitle: string
  sections: PageSection[]
}

export interface TrainingState {
  readonly trainingMode: TRAINING_MODE
}

export interface RootState {
  training: TrainingState
  pages: PagesState
}

type extraArg = void

export type ThunkDispatch = ThunkDispatchGeneric<RootState, extraArg, Action>
export type ThunkResult<R> = ThunkAction<R, RootState, extraArg, Action>
