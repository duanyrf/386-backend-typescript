import { Router } from 'express'

const alunoRouter = Router()

alunoRouter.get('/', (req, res) => res.json({ message: 'Hello World!' }))

export default alunoRouter