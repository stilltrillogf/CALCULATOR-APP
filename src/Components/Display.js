export default function Display({ operation, currentNumbers }) {
  return (
    <div className="Display">
      <div className="Display__Operation">{operation}</div>
      <div className="Display__CurrentNumbers">{currentNumbers}</div>
    </div>
  );
}
