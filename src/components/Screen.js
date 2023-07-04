import "./Styles/Screen.css";

function Screen(props) {
  return (
    <section className="screen">
      <div className="textBox">{props.screenText}</div>
    </section>
  );
}

export default Screen;
