import { Dispatch } from 'redux'

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
  readonly pageData: {
    readonly pageTitle: string
    sections: ReadonlyArray<PageSection>
  }
}

export interface PagesState {
  readonly currentPageIndex: number
  pagesOrder: ReadonlyArray<string>
  readonly pages: {
    [pageId: string]: SinglePageState
  }
}

export interface TrainingState {
  readonly trainingMode: TRAINING_MODE
}

export interface IRootState {
  training: TrainingState
  pages: PagesState
}

export type GetState = () => IRootState
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void
