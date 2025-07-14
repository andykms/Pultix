export interface ModalProps {
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  withoutModalHeader?: boolean;
}
