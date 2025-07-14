import styles from './BlockInfo.module.scss';
import type { BlockInfoProps } from './type';

export const BlockInfo: React.FC<BlockInfoProps> = ({ title, blocks }: BlockInfoProps) => {
  return (
    <div className={styles.info}>
      <span className={'buttonTitle'}>{title}</span>
      <div className={styles.fees}>
        {blocks.map((block) =>
          block.title || block.description ? (
            <div key={block.title} className={styles.fee}>
              <span className={'text'} style={{ fontWeight: 800 }}>
                {block.title}
              </span>
              <span className={'description'}>{block.description}</span>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};
