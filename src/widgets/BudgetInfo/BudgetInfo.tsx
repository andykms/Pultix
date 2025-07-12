import styles from "./BudgetInfo.module.scss";
import type { BudgetInfoProps } from "./type";
import { BlockInfo } from "../../shared/ui/BlockInfo/BlockInfo";
import { forwardRef } from "react";

export const BudgetInfo: React.FC<BudgetInfoProps> = forwardRef(({
  fees,
  budget,
  premierRussia,
  premierWorld,
}: BudgetInfoProps, ref?: React.ForwardedRef<HTMLDivElement>) => {
  const blocks = fees.map((fee) => ({
    title: `${fee.currency} ${fee.value}`,
    description: fee.country,
  }));

  if (budget) {
    blocks.push({
      title: `${budget.currency} ${budget.value}`,
      description: "Общий бюджет",
    });
  }

  const premiers = [];
  if (premierRussia) {
    premiers.push({
      title: premierRussia,
      description: "В России",
    });
  }
  if (premierWorld) {
    premiers.push({
      title: premierWorld,
      description: "В мире",
    });
  }

  return (
    <div className={styles.rental} ref={ref}>
      <BlockInfo title="Сборы" blocks={blocks}></BlockInfo>
      {premiers.length > 0 && (
        <BlockInfo title="Премьера" blocks={premiers}></BlockInfo>
      )}
    </div>
  );
});
