import { makeAutoObservable } from "mobx";

class NotificationStore {
  isOpen = false;
  text = '';
  type = 'SUCCESS'; 

  constructor() {
    makeAutoObservable(this);
  }

  open(type, text) {
    this.isOpen = true;
    this.type = type;
    this.text = text;
  }

  close() {
    this.isOpen = false;
  }
}

export const notificationStore = new NotificationStore();
