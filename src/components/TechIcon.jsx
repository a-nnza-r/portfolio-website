const style = {
  padding: "8px 16px",
  borderRadius: "20px",
  display: "inline-block",
  color: "white",
};

function TechIcon(props) {
  return (
    <span
      className="rounded-text"
      style={{
        backgroundColor: props.color,
        borderRadius: "5px",
        padding: "5px",
        marginRight: "3px",
        marginBottom: "3px",
      }}
    >
      {props.name}
    </span>
  );
}

export default function TechIconContainer(props) {
  const { dataList } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      {dataList.map((data, index) => (
        <TechIcon key={index} color={data.color} name={data.name} />
      ))}
    </div>
  );
}
