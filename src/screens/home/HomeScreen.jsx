import "./HomeScreen.css"

function HomeScreen(props) {
  const {h1Style, pText, imgSrc, imgAlt} = props;
  return (
    <>
    <div>
      <h1 className={h1Style}>Le titre de la page</h1>
      <p>{pText}</p>
      <img src={imgSrc} alt={imgAlt} /><br />
    </div>
    </>
  );
}

export default HomeScreen;