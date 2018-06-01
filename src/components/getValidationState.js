export default ({ touched, error }) => {
  if (!touched) {
    return null
  }

  if (!error) {
    return 'success'
  }

  return 'error'
}
