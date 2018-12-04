import { Reducer } from 'redux'
import { SET_MODE, TRAINING_MODE, trainingAction } from './trainingActions'

interface ItrainingState {
  trainingMode: TRAINING_MODE
}

const intitialState: ItrainingState = {
  trainingMode: TRAINING_MODE.WORDS,
}

export const trainingReducer: Reducer<ItrainingState, trainingAction> = (
  state = intitialState,
  action,
) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, trainingMode: action.mode }
  }
}
