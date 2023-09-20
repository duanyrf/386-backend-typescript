import express from 'express'
import alunoRouter from './routes/aluno.router'

const app = express()

app.use('/aluno', alunoRouter)

app.listen(3000, () => console.log('Example app listening on port 3000!'))