function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
  
    console.log(data)
}
 

function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
}
  
const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)
  