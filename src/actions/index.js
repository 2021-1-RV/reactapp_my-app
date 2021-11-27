import ACTION_TYPES from './actionsType'

export const sendMSG = (data) => {
  return {
    type: ACTION_TYPES.SEND_MESSAGE,
    data: data,
  }
}
