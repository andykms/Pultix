import type { GalleryProps } from "./type"

export const Gallery = (props: GalleryProps) => {
  const {CardProps, CardType} = props;
  return (
    <>
    {CardProps.map((props)=>{
      return <CardType {...props} key={props._id}></CardType>
    })}
    </>
  )
}