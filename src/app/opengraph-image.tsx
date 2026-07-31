import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(0,240,255,0.25), transparent 45%), radial-gradient(circle at 75% 75%, rgba(255,46,136,0.22), transparent 45%)",
        }}
      >
        <span
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ffd23f",
            marginBottom: 24,
          }}
        >
          Player One
        </span>
        <span
          style={{
            fontSize: 108,
            fontWeight: 700,
            color: "#00f0ff",
            letterSpacing: 2,
          }}
        >
          JP
        </span>
        <span
          style={{
            fontSize: 32,
            color: "#ff2e88",
            marginTop: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Media Buyer &amp; Software Developer
        </span>
      </div>
    ),
    { ...size }
  );
}
