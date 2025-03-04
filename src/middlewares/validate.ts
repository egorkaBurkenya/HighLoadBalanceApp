import { NextFunction, Request, Response } from 'express'

export function validate(validator: (data: any) => string[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
        const errors = validator(req.body)
        if (errors.length > 0) {
            res.status(400).json({ errors })
            return
        }
        next()
    }
}
