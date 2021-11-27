import * as yup from 'yup'

const validation = yup.object({
  userName: yup
    .string()
    .matches(/^[a-z0-9_-]{3,16}$/)
    .required(),
  userMessage: yup
    .string()
    .matches(/^[a-z0-9_-]{1,160}$/)
    .required(),
})
export default validation
