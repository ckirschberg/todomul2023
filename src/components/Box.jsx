export default function Box(props) {
  console.log(props.message);

  return (
    <div
      style={{
        backgroundColor: props.color,
      }}
      className="box"
    >
      {props.message}
    </div>
  );
}
