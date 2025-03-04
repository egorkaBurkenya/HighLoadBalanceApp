import { User } from '@models';
import { sequelize } from '../models';
import { Op } from 'sequelize';

interface UpdateResult {
  success: boolean;
  balance?: number;
  error?: string;
}

export async function updateBalance(
  userId: number,
  amount: number
): Promise<UpdateResult> {
  if (amount < 0) {
    const absAmount = Math.abs(amount);
    const [updatedCount] = await User.update(
      { balance: sequelize.literal(`balance + (${amount})`) },
      {
        where: {
          id: userId,
          balance: { [Op.gte]: absAmount },
        },
      }
    );
    if (updatedCount === 0) {
      return { success: false, error: 'Insufficient funds' };
    }
  } else {
    await User.update(
      { balance: sequelize.literal(`balance + (${amount})`) },
      {
        where: { id: userId },
      }
    );
  }
  const user = await User.findByPk(userId);
  if (user) {
    return { success: true, balance: user.getDataValue('balance') as number };
  } else {
    return { success: false, error: 'User not found' };
  }
}