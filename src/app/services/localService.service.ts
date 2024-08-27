import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  public saveData(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
