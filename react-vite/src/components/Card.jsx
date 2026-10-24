export default function Card(props) {
  const { id, onClick, title, rating, isPremium, image, type } = props;

  return (
    <div className={`card-${type}`} onClick={() => onClick(id)}>
      {isPremium ? <span className="card-label body-small-bold">Premium</span> : <></>}
      <img className={`card-${type}-image`} src={image} alt="" />
      <div className={`card-${type}-gradient`} />
      <p className="heading-6">{title}</p>
      <span className="body-small-regular">{rating}/5</span>
    </div>
  );
}
