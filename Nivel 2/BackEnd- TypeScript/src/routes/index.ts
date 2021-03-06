import { Router } from 'express'
import appointmentsRouter from'./appointments.routes'
import usersRouter from'./user.routes'
import sessionsRouter from'./sessions.routes'

const routes = Router()

routes.use('/appoitments', appointmentsRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)


export default routes