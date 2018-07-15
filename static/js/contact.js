const form = document.getElementById('contactForm')
const url = 'https://h1ut990ogj.execute-api.us-east-1.amazonaws.com/dev/email/send'
const name = form.name
const email = form.email
const content = form.content
const toast = document.getElementById('toast')
const submit = document.getElementById('submit')


function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  toast.innerHTML = 'Sending'
  submit.disabled = true

  const payload = {
    name: name.value,
    email: email.value,
    content: content.value
  }
  post(url, payload, (err, res) => {
    if (err) { return error(err) }
    success()
  })

  function success () {
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
