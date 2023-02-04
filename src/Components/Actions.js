function Action({ type, tag = type, onClick }) {
  return (
    <div onClick={onClick} className={`Key Action Action__${type}`}>
      {tag}
    </div>
  );
}

function ActionsHorizontal({ onClick }) {
  return (
    <div className="ActionsHorizontal">
      <Action onClick={onClick} type="AC" />
      <Action onClick={onClick} type="Division" tag="/" />
      <Action onClick={onClick} type="Multiplication" tag="*" />
    </div>
  );
}
function ActionsVertical({ onClick }) {
  return (
    <div className="ActionsVertical">
      <Action onClick={onClick} type="Subtraction" tag="-" />
      <Action onClick={onClick} type="Addition" tag="+" />
      <Action onClick={onClick} type="Equals" tag="=" />
    </div>
  );
}

export default function Actions({ onClick }) {
  return (
    <>
      <ActionsHorizontal onClick={onClick} />
      <ActionsVertical onClick={onClick} />
    </>
  );
}
