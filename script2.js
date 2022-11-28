function serializeForm(formNode) {
    return new FormData(formNode)
}
  
 
function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}
  
const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)
  