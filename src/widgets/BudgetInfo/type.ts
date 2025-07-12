export type TFees = {
  country: string;
  value: number;
  currency: string;
}

export type TBudget = {
  value: number;
  currency: string;
}

export interface BudgetInfoProps {
  fees: TFees[];
  budget: TBudget;
  premierWorld?: string;
  premierRussia?: string;
}