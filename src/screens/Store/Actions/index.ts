
import { Types } from '../Action-Types/index'

interface DepositAction {
    type: Types.DEPOSIT
    payload: number
}

interface WithdrawAction {
    type: Types.WITHDRAW
    payload: number
}

interface GetStoriesAction {
    type: Types.GET_STORIES,
    payload: Object
}

export type Action = DepositAction | WithdrawAction | GetStoriesAction;