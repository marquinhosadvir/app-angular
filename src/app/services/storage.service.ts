import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getItem(key: string) {
    const item = localStorage.getItem(key);
    return (item) ? JSON.parse(item) : null;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
  // getData(key: string): any {
  //   return JSON.parse(localStorage.getItem('key'));  
  // }
  // setData(key: string, data: any) {
  //   localStorage.setItem(key, JSON.stringify(data));
  // }
}
