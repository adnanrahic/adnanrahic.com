const url = 'https://h1ut990ogj.execute-api.us-east-1.amazonaws.com/dev/email/send'
const form = document.getElementById('contactForm')
const name = form.name
const email = form.email
const content = form.content
const toast = document.getElementById('toast')
const submit = document.getElementById('submit')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  toast.innerHTML = 'Sending'
  submit.disabled = true

  const payload = {
    name: name.value,
    email: email.value,
    content: content.value
  }

  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(payload),
    success: success,
    error: error,
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })

  function success (data) {
    toast.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you ASAP. :)'
    submit.disabled = false
    submit.blur()
    name.value = ''
    email.value = ''
    content.value = ''
    name.focus()
  }

  function error (err) {
    toast.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
    submit.disabled = false
    console.log(err)
  }
})
