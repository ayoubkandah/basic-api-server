"use strict"
const uuid=require("uuid").v4

class Clothes {

    constructor(){
        this.db=[] // data will store here   
    }
    create(obj){
        const saving={
id: uuid(),
data: obj
        }
        this.db.push(saving)
        return saving;
    }
    read(id){
        if(id){
            return this.db.find((saving) => saving.id === id);
        }else{
            return this.db
        }
    }
    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
          if (this.db[i].id === id) {
            this.db[i].data = obj;
            return this.db[i];
          }
        }
    }
    delete(id) {
        this.db = this.db.filter((person) => person.id !== id);
        return this.db;
      }
}

module.exports = Clothes;