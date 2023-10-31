import Profile from "@/components/Profile";
import PersonalWriteUp from "@/components/PersonalWriteUp";

export default function Page() {
  return (
    <div
      style={{
        borderRadius: "10px",
      }}
    >
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
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/backGrdImg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.6, // Adjust this value to control the transparency level
            zIndex: -1,
          }}
        />
        <Profile />
      </div>
      <PersonalWriteUp />
    </div>
  );
}
