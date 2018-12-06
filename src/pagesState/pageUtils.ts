import { pick } from 'lodash/fp'
import { ServerPageData, SinglePageState } from '../stateTypes'

export const parsePageData = (pageData: ServerPageData): SinglePageState => {
  // const res = {
  //   pageId: pageData.pageId,
  //     pageType: pageData.pageType
  // }
  const res = pick(['pageId', 'pageType'], pageData)
  return {
    ...res,
    isSolved: false,
    content: {
      pageTitle: pageData.pageTitle,
      sections: pageData.sections,
    },
  }
}
