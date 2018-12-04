export enum TRAINING_MODE {
  WORDS,
  LINES,
  SECTIONS,
  PAGE,
}

export const SET_MODE = 'changeTrainingMode'

export const setModeAction = (mode: TRAINING_MODE) => ({
  type: SET_MODE as typeof SET_MODE,
  mode,
})

type SetModeActionType = ReturnType<typeof setModeAction>
export type trainingAction = SetModeActionType
