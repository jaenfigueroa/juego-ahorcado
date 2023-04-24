import { buttonExitModal, modal, modalText } from '../modules/domElements'

//ACTUALIZAR EL TEXTO DEL MODAL Y MOSTRARLO
export const updateModal = (text: string) => {
  modal.showModal() //MOSTRAR EL MODAL
  modalText.textContent = text
}

//SALIR DEL MODAL
buttonExitModal?.addEventListener('click', () => {
  modal.close() //OCULTAR MODAL
})


