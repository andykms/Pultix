export interface GalleryDemoProps {
  CardType: React.ElementType;
  cardProps: React.ComponentProps<React.ElementType>[];
  title: string;
  to: string;
  maxCount? : number;
  isWithoutButtonAll?: boolean
}