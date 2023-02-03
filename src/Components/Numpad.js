function Number({ value }) {
  return (
    // TODO: add dynamic class with value
    <div className={`Numpad__Number Numpad__Number__${value}`}>{value}</div>
  );
}

function Zero() {
  return <div className="Numpad__Zero">0</div>;
}

function Decimal() {
  return <div className="Numpad__Decimal">.</div>;
}

export default function Numpad() {
  return (
    <div className="Numpad">
      <Number value={7} />
      <Number value={8} />
      <Number value={9} />
      <Number value={4} />
      <Number value={5} />
      <Number value={6} />
      <Number value={1} />
      <Number value={2} />
      <Number value={3} />
      <Zero />
      <Decimal />
    </div>
  );
}
