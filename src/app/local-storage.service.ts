import { Injectable } from '@angular/core';
declare var db: any;
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public storagename = 'Places';
  constructor() {}

  //add and update

  add(keyname: any, value: any) {
    return new Promise( async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .put(value, keyname);

        request.onsuccess = await function (event: { target: { result: any; }; }) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('error');
            resolve(false);
          }
        };
      }
    });
  }

  //get the data from index db
  get(keyname: any) {
    return new Promise( async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .get(keyname);

        request.onsuccess = await function (event: { target: { result: any; }; }) {
          if (event.target.result) {
            console.log('success');
            resolve(event.target.result);
          } else {
            console.log('error');
            resolve(false);
          }
        };
      }
    });
  }

    //get the data from index db
    getAll() {
      return new Promise( async (resolve, reject) => {
        if (db != undefined) {
          const request = await db
            .transaction([this.storagename], 'readwrite')
            .objectStore(this.storagename)
            .getAll();
  
          request.onsuccess = await function (event: { target: { result: any; }; }) {
            if (event.target.result) {
              console.log('success');
              resolve(event.target.result);
            } else {
              console.log('error');
              resolve(false);
            }
          };
        }
      });
    }

  delete(keyname: any) {
    return new Promise( async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .delete(keyname);

        request.onsuccess = await function (event: { target: { result: any; }; }) {
          if (event.target.result) {
            console.log('success');
            resolve('success');
          } else {
            console.log('error');
            resolve(false);
          }
        };
      }
    });
  }
}
