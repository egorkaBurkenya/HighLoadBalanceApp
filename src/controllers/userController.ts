import { updateBalance } from '@services/userService'
import { validateUpdateBalanceInput } from '@validators'
import { NextFunction, Request, Response, Router } from 'express'
import { validate } from '../middlewares/validate'

const router = Router()

router.post(
    '/updateBalance',
    validate(validateUpdateBalanceInput),
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { userId, amount } = req.body
        try {
            const result = await updateBalance(userId, amount)
            if (!result.success) {
                res.status(400).json({ error: result.error })
                return
            }
            res.json({ balance: result.balance })
        } catch (err) {
            console.error('Error in updateBalance:', err)
            res.status(500).json({ error: 'Internal server error.' })
        }
    },
)

export default router
