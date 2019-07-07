import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function handleSaveQuestion(info) {
  return _saveQuestion(info)
}

export function handleQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer(authedUser, qid, answer)
}
let selectUser = null

export function _getSelectUser() {
  return new Promise((res, rej) => {
    setTimeout(() => res(selectUser), 1000)
  })
}

export function _saveSelectedUser(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      selectUser = user;
      res(user)
    }, 1000)
  })
}
