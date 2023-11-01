import CustomTimeline from "@/components/CustomTimeline.jsx";
import educationData from "@/lib/education.js";

export default function Page() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/eduback.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.1, // Adjust this value to control the transparency level
          zIndex: -1,
        }}
      />
      <div style={{ alignSelf: "center" }}>
        <CustomTimeline data={educationData} />
      </div>
    </div>
  );
}
