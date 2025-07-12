export type TBlock = {
  title: string;
  description?: string;
}

export interface BlockInfoProps {
  title: string;
  blocks: TBlock[];
}