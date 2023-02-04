function Number({ value, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`Key Numpad__Key Numpad__Number Numpad__Number__${value}`}
    >
      {value}
    </div>
  );
}

function Zero({ onClick }) {
  return (
    <div onClick={onClick} className="Key Numpad__Key Numpad__Zero">
      0
    </div>
  );
}

function Decimal({ onClick }) {
  return (
    <div onClick={onClick} className="Key Numpad__Key Numpad__Decimal">
      .
    </div>
  );
}

export default function Numpad({ onClick }) {
  return (
    <div className="Numpad">
      <Number onClick={onClick} value={7} />
      <Number onClick={onClick} value={8} />
      <Number onClick={onClick} value={9} />
      <Number onClick={onClick} value={4} />
      <Number onClick={onClick} value={5} />
      <Number onClick={onClick} value={6} />
      <Number onClick={onClick} value={1} />
      <Number onClick={onClick} value={2} />
      <Number onClick={onClick} value={3} />
      <Zero onClick={onClick} />
      <Decimal onClick={onClick} />
    </div>
  );
}
