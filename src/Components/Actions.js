function Action({ ActionType }) {
  return <div className={`Action Action__${ActionType}`}>{ActionType}</div>;
}

export function ActionsHorizontal() {
  return (
    <div className="ActionsHorizontal">
      <Action ActionType="AC" />
      <Action ActionType="/" />
      <Action ActionType="*" />
    </div>
  );
}
export function ActionsVertical() {
  return <div className="ActionsVertical">ActionsVertical</div>;
}
