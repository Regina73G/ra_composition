interface Body {
  title: string;
  text: string;
  link: string;
}

export default function CardBody({title, text, link}: Body) {
  return (
    <>
      <h5 className="card_title">{title}</h5>
      <p className="card_text">{text}</p>
      <a className="card_link-btn" href="#">{link}</a>
    </>
  )
}