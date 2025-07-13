import { FilmModal } from "../../widgets/FilmModal/FilmModal";
import type { FilmModalPageProps } from "./type";

export const FilmModalPage: React.FC<FilmModalPageProps> = (props: FilmModalPageProps) => {
  return (
    <FilmModal {...props}></FilmModal>
  )
}