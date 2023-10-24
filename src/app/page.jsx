import Profile from "@/components/Profile";
import PersonalWriteUp from "@/components/PersonalWriteUp";

export default function Page() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/backgrounfImg5.jpg)", // Replace with your image path
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          borderRadius: "10px",
          margin: "5px auto",
        }}
      >
        <Profile />
      </div>
      <PersonalWriteUp />
    </div>
  );
}
