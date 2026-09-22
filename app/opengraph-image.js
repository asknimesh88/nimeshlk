import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nimesh Madushanka, Lecturer and Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const photo = await readFile(join(process.cwd(), "public/nimesh-madushanka.jpg"), "base64");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#14213d", color: "#fff" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 70, width: 700 }}>
          <div style={{ fontSize: 30, color: "#ffc43d", marginBottom: 20 }}>Lecturer & Web Developer</div>
          <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 1 }}>Nimesh Madushanka</div>
          <div style={{ fontSize: 30, color: "#c9d3e6", marginTop: 30 }}>Livestock Production, Sabaragamuwa University. Top Rated WordPress & server expert on Upwork</div>
        </div>
        <div style={{ display: "flex", width: 500, background: "#ff6b1a" }}>
          <img src={`data:image/jpeg;base64,${photo}`} width={500} height={630} style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    size
  );
}
