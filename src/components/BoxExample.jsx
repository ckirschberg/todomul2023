import Box from "./components/Box";

export default function BoxExample() {
  const data = [
    { message: "Hejsa", color: "green" },
    { message: "Hejsa igen", color: "orange" },
    { message: "alt for mange punkter", color: "purple" },
    { message: "Farvel", color: "blue" },
    { message: "ALLER SIDSTE KASSE", color: "aqua" },
  ];

  return (
    <div>
      {data.map((x) => {
        // En mere
        return <Box message={x.message} color={x.color} />;
      })}
    </div>
  );
}
