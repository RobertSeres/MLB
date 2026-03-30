import { ImageResponse } from "next/og";

// Image generation
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 18,
          background: "#0a3d0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#c8ff00",
          borderRadius: "8px",
          fontWeight: 900,
          fontStyle: "italic",
        }}
      >
        M
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
