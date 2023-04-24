import { buttonExitModal, buttonPre, modal, modalText } from '../modules/domElements'

//ACTUALIZAR EL TEXTO DEL MODAL Y MOSTRARLO
export const updateModal = (text: string, accion?: Function) => {
  modalText.textContent = text
  modal.showModal() //MOSTRAR EL MODAL

  if (accion) {

    buttonPre.textContent = 'Jugar otra vez'
    buttonPre.onclick = () => {
      accion()
      modal.close()
    }

    buttonPre.classList.remove('boton--novisible')
  } else{
    buttonPre.classList.add('boton--novisible')
  }
}

//SALIR DEL MODAL
buttonExitModal?.addEventListener('click', () => {
  modal.close() //OCULTAR MODAL
})


