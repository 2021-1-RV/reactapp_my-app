import ACTION_TYPES from '../actions/actionsType'
import { userAva } from '../components/img/index'
import moment from 'moment'
import 'moment/locale/ru'

const initialState = {
  usersMessages: [
    {
      userName: 'Слон',
      userMessage: 'Трынь-трынь',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: true,
    },
    {
      userName: 'Корней Иванович',
      userMessage: 'Кто говорит?',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: false,
    },
    {
      userName: 'Слон',
      userMessage: 'Слон.',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: true,
    },
    {
      userName: 'Корней Иванович',
      userMessage: 'Откуда?',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: false,
    },
    {
      userName: 'Слон',
      userMessage: 'От верблюда.',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: true,
    },
    {
      userName: 'Корней Иванович',
      userMessage: 'Что вам надо?',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: false,
    },
    {
      userName: 'Слон',
      userMessage: 'Шоколада.',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: true,
    },
    {
      userName: 'Корней Иванович',
      userMessage: 'Для кого?',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: false,
    },
    {
      userName: 'Слон',
      userMessage: 'Для сына моего.',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: true,
    },
    {
      userName: 'Корней Иванович',
      userMessage: 'А много ли прислать?',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: false,
    },
    {
      userName: 'Слон',
      userMessage: 'Да пудов этак пять',
      img: { userAva },
      date: moment().calendar(),
      isCurrentUser: true,
    },
  ],
}
const chatRreducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEND_MESSAGE:
      const { usersMessages } = state
      const { data } = action
      const newUserMessage = {
        ...data,
        img: { userAva },
        date: moment().calendar(),
      }
      const newUsersMessages = [...usersMessages, newUserMessage]
      return { usersMessages: newUsersMessages }

    default:
      return state
  }
}

export default chatRreducer
