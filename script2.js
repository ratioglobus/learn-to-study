function serializeForm(formNode) {
    return new FormData(formNode)
}


function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}
  
const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)

async function sendData(data) {
    return await fetch('/api/apply/', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
  }
  
  async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
  
    toggleLoader()
  
    const { status, error } = await sendData(data)
    toggleLoader()
  
    if (status === 200) {
      onSuccess(event.target)
    } else {
      onError(error)
    }
  }
  
  
  
  function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
  }

  function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
  }

  function onError(error) {
    alert(error.message)
  }
  
  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
  
    formNode.querySelector('button').disabled = !isValid
  }
  
  applicantForm.addEventListener('input', checkValidity)
  
  