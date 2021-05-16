import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
declare var db: any;

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public storagename = 'Places';
  //public  
  private dbs: Dexie | undefined; //

  constructor() {
   
    this.iniciarIndexedDb(); //
  }

   iniciarIndexedDb() {
    this.dbs = new Dexie("DexieDatabase");
    this.dbs.version(1).stores({
      places: "name,address,phone,website"
    });
    this.dbs.open();

    // this.dbs.places.add({
    //   name: 'Zlatan',
    //   address: 'ibra',
    //   phone: 'ejemplo',
    //   website: 'lol',
    // });
  }

  //add and update

  add(keyname: any, value: any) {
        

    // this.dbs.places.put({
    //   name: 'Zlatan',
    //   address: '1',
    //   phone: '1',
    //   website: '1',
    // });
    
    // this.dbs.places
    // .where("name").equalsIgnoreCase("zlatan")
    // .delete();



        return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .put(value, keyname);

        request.onsuccess = await function (event: {
          target: { result: any };
        }) {
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
   

    // this.dbs.places
    // .where("address").equalsIgnoreCase(keyname)
    // .each((place: any) => {
    //     console.log("Found ", place);
    // });


    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .get(keyname);

        request.onsuccess = await function (event: {
          target: { result: any };
        }) {
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
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .getAll();

        request.onsuccess = await function (event: {
          target: { result: any };
        }) {
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
  

  //delete
  delete(keyname: any) {


    //  db.logEntries
    // .where("name").below(oneWeekAgo)
    // .delete();

    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db
          .transaction([this.storagename], 'readwrite')
          .objectStore(this.storagename)
          .delete(keyname);

        request.onsuccess = await function (event: {
          target: { result: any };
        }) {
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
