import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { sendMSG } from '../../actions'
import validation from '../../validation'
import { useLayoutEffect } from 'react'

const ChatForm = (props) => {
  const { sendMessage, usersMessages } = props

  const initialUserValues = {
    userName: '',
    userMessage: '',
  }

  const chat = usersMessages.map((e, index) => {
    return e.isCurrentUser ? (
      <article key={index} class="currentUser">
        <div>
          <span class="colorMessage">{e.userMessage}</span>
          <p class="colorDate">{e.date}</p>
        </div>
      </article>
    ) : (
      <article key={index} class="otherUser">
        <div class="userAvatar">
          <img src={e.img.userAva} alt="logo" />
        </div>
        <span class="userInfo">{e.userName}</span>
        <div>
          <span class="colorMessage">{e.userMessage}</span>
          <p class="colorDate2">{e.date}</p>
        </div>
      </article>
    )
  })

  const submitHandler = (value, formikBag) => {
    sendMessage(value)
    formikBag.resetForm()
  }

  const eMSG = usersMessages[0]
  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [usersMessages.length, eMSG])

  return (
    <>
      <div class="chat">{chat}</div>

      <Formik
        initialValues={initialUserValues}
        onSubmit={submitHandler}
        validation={validation}
      >
        {(formikProps) => {
          return (
            <Form>
              <Field
                name="userName"
                type="text"
                placeholder="Имя пользователя"
              />

              <ErrorMessage name="userName" />

              <Field
                name="userMessage"
                component="textarea"
                placeholder="Введите сообщение"
              />

              <ErrorMessage name="userMessage" />

              <label htmlFor="isCurrentUser">
                Для текущего пользователя
                <Field type="checkbox" name="isCurrentUser"></Field>
              </label>

              <button type="submit">Отправить</button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

const mapStateToProps = (state) => {
  return state.chatRreducer
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (data) => {
      dispatch(sendMSG(data))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatForm)
