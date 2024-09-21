import { fastify } from 'fastify'
import { Database } from './database.js'

const server = fastify();
const database = new Database;

server.get('/', async () => {
    return await database.get();
})
//adiciona dados de um novo lutador
server.post('/new-lutador', async (request) => {
    return await database.post(request.body);
})
//altera os dados do lutador
server.put('/alter-lutador/:alan', async (request) => {
    return await database.put(request.params.alan, request.body);
})
//apaga os dados do lutador 
server.delete('/delete-lutador/:alan', async (request) => {
    return await database.delete(request.params.alan, request.body);
})



server.listen({
    port: 3333
});