export type TTab = {
  id: string;
  title: string;
}

export interface TabsProps {
  tabs: TTab[];
  activeId: string;
  portalId?: string;
  onClick: (id: string) => void;
}