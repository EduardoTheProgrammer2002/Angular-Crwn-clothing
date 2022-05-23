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
    console.log(this.modals)
  }

  isModalOpen() {
    return true
  }

  toggleModal() {
    // this.visible = !this.visible;
  }
}
