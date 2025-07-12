export type TTab = {
  id: string;
  title: string;
  component: React.ReactNode;
}

export interface TabsProps {
  tabs: TTab[];
  initialActiveId: string;
}