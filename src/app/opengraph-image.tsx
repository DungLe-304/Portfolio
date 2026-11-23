import { ImageResponse } from "next/og";
import { resume } from "@/content/resume";

export const alt = `${resume.name}: ${resume.headline.join(", ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const [school, internship] = resume.headline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f6f2e9",
          color: "#1b1916",
        }}
      >
        <div style={{ display: "flex", borderTop: "6px solid #1b1916", paddingTop: 18, fontSize: 24 }}>Portfolio</div>
        <div style={{ display: "flex", fontSize: 148, letterSpacing: "-0.05em", lineHeight: 1 }}>{resume.name}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 36, lineHeight: 1.25 }}>
          <div style={{ display: "flex" }}>{school}</div>
          <div style={{ display: "flex", color: "#a92e17" }}>{internship}</div>
        </div>
      </div>
    ),
    size,
  );
}
