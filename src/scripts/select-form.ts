const formPrivato = document.querySelector('#form-privato')
const formAzienda = document.querySelector('#form-azienda')

const radioPrivato = document.querySelector('#radio-privato')
const radioAzienda = document.querySelector('#radio-azienda')

const labelPrivato = document.querySelector('.label-radio-privato')
const labelAzienda = document.querySelector('.label-radio-azienda')

if (
  radioPrivato &&
  radioAzienda &&
  formPrivato &&
  formAzienda &&
  labelPrivato &&
  labelAzienda
) {
  radioPrivato.addEventListener('click', () => {
    formAzienda.classList.remove('selected')
    labelAzienda.classList.remove('selected')
    formPrivato.classList.add('selected')
    labelPrivato.classList.add('selected')
  })

  radioAzienda.addEventListener('click', () => {
    formAzienda.classList.add('selected')
    formPrivato.classList.remove('selected')
    labelAzienda.classList.add('selected')
    labelPrivato.classList.remove('selected')
  })
}
