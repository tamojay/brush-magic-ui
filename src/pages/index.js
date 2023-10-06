import Menu from "@/components/Menu";
import Toolbox from "@/components/Toolbox";
import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            margin: "1rem",
            color: "#DD5A86",
          }}
        >
          Brush Magic
        </h2>
        <Menu />
      </div> */}
      <Menu />
      <Toolbox />
      <Board />
    </>
  );
}
