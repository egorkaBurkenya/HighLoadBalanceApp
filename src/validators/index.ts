export function validateUpdateBalanceInput(data: any): string[] {
    const errors: string[] = []
    if (typeof data.userId !== 'number') {
        errors.push('userId must be a number.')
    }
    if (typeof data.amount !== 'number') {
        errors.push('amount must be a number.')
    }
    return errors
}
