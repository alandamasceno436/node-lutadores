import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class Database {
    async get() {
        return await sql`select * from lutadores`
    }


    async post(lutador) {
         await sql`insert into lutadores (id, name, categoria, peso) 
        values (${randomUUID()}, ${lutador.name},${lutador.categoria}, ${lutador.peso})`
      
        return await this.get();
    }
    
  
        
    async put(id, lutador) {
         await sql `UPDATE lutadores SET 
         name = ${lutador.name},
         categoria = ${lutador.categoria},
         peso = ${lutador.peso}
         WHERE id = ${id}`
         return await this.get();
}
  async delete(id){
    await sql `DELETE FROM lutadores 
    WHERE id = ${id}` 
   
    return await this.get();
}
}

