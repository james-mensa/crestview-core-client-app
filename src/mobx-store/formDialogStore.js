import { makeAutoObservable } from "mobx";

class FormDialogStore {
  isOpen = false;
  isFullScreen = false;
  component = null;
  hasHeader = true;
  headerTitle = "";

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Open the form dialog.
   * @param {React.ReactNode} component - The component to render in the dialog.
   * @param {boolean} isFullScreen - Whether the dialog should be fullscreen.
   * @param {boolean} hasHeader - Whether the dialog should have a header.
   * @param {string} headerTitle - The title to display in the header.
   */
  open(
    component,
    isFullScreen = false,
    hasHeader = true,
    headerTitle = "",
  ) {
    this.isOpen = true;
    this.component = component;
    this.isFullScreen = isFullScreen;
    this.hasHeader = hasHeader;
    this.headerTitle = headerTitle;
  }
 

  close() {
    this.isOpen = false;
    this.isFullScreen = false;
    this.component = null;
    this.hasHeader = true;
    this.headerTitle = "";
    this.inProgress = false;
    this.requestResponse = null;
  }
}

export const formDialogStore = new FormDialogStore();
