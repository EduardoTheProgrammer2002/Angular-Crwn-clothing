import { Injectable } from '@angular/core';
import Imodal from '../interfaces/IModal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals:Imodal[] = []

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((el) => el.id !== id)
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((ele) => ele.id === id)?.visible
  }

  toggleModal(id: string) {
    const modal = this.modals.find((ele) => ele.id === id)
    
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
