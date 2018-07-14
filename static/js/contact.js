const url = 'https://h1ut990ogj.execute-api.us-east-1.amazonaws.com/dev/email/send'
const form = document.getElementById('contactForm')
const name = form.name
const email = form.email
const content = form.content
const success = document.getElementById('success')
const submit = document.getElementById('submit')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  success.innerHTML = 'Sending'
  submit.disabled = true

  const payload = {
    name: name.value,
    email: email.value,
    content: content.value
  }

  $.post(url, payload, () => {
    success.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you ASAP. :)'
    submit.disabled = false
  })
  .fail(() => {
    success.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
    submit.disabled = false
  })
})
