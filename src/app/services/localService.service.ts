import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private isLocalStorageAvailable: boolean;

  constructor() {
    this.isLocalStorageAvailable =
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined';
  }

  public saveData(key: string, value: unknown) {
    if (!this.isLocalStorageAvailable) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    if (!this.isLocalStorageAvailable) return;
    let data = localStorage.getItem(key);
    return data;
  }
  public removeData(key: string) {
    if (!this.isLocalStorageAvailable) return;
    localStorage.removeItem(key);
  }

  public clearData() {
    if (!this.isLocalStorageAvailable) return;
    localStorage.clear();
  }
}
