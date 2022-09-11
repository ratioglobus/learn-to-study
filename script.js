
// const encrypt  = (str) => {
//     let result = '';
//     let i = 0;
  
//     while (i < str.length) {
//         result = `${result}${str[i + 1]}${str[i]}`;
//         i += 2
//     }
//     return result.replace(/undefined/,'');
//   };

function serializeForm(formNode) {
    console.log(formNode.elements)
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }
  
  const applicantForm = document.getElementById('mars-once')
  applicantForm.addEventListener('submit', handleFormSubmit)
