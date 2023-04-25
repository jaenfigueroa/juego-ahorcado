import { buttonExitModal, modal, modalText } from '../utils/domElements.utils'

//ACTUALIZAR EL TEXTO DEL MODAL Y MOSTRARLO
export const updateModal = (text: string, buttonText:string) => {
  modal.showModal() //MOSTRAR EL MODAL
  modalText.textContent = text

  buttonExitModal.textContent = buttonText
}

//SALIR DEL MODAL
buttonExitModal?.addEventListener('click', () => {
  modal.close() //OCULTAR MODAL
})


