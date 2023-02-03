function Action({ type, tag = type }) {
  return <div className={`Key Action Action__${type}`}>{tag}</div>;
}

function ActionsHorizontal() {
  return (
    <div className="ActionsHorizontal">
      <Action type="AC" />
      <Action type="Division" tag="/" />
      <Action type="Multiplication" tag="*" />
    </div>
  );
}
function ActionsVertical() {
  return (
    <div className="ActionsVertical">
      <Action type="Subtraction" tag="-" />
      <Action type="Addition" tag="+" />
      <Action type="Equals" tag="=" />
    </div>
  );
}

export default function Actions() {
  return (
    <>
      <ActionsHorizontal />
      <ActionsVertical />
    </>
  );
}
