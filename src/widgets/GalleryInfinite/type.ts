import type { ReactNode } from "react";


export interface TInfiniteScrollProps {
  dataLength: number;
  next: ()=> void;
  hasMore: boolean;
  loader: ReactNode;
  endMessage?: ReactNode;
}

export interface GalleryInfiniteProps {
  CardType: React.ElementType;
  cardProps: React.ComponentProps<React.ElementType>[];
  title: string;
  InfiniteScrollProps: TInfiniteScrollProps;
}