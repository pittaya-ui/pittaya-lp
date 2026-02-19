import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pittaya - Brutal tools for brutal problems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  // Load logo image as base64
  const logoData = await fetch(
    new URL("../../../public/PITTAYA-LOGO.PNG", import.meta.url),
  ).then(async (res) => {
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    return `data:image/png;base64,${base64}`;
  });

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
              linear-gradient(to right, #e5e5e5 1px, transparent 1px),
              linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
            `,
          backgroundSize: "40px 40px",
          opacity: 0.5,
          display: "flex",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #eb6f5f, #f08d7f)",
          display: "flex",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 10,
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoData} alt="Pittaya Logo" width="65" height="80" />
          <div
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#252525",
              letterSpacing: "-0.04em",
              display: "flex",
            }}
          >
            Pittaya
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "36px",
            color: "#525252",
            maxWidth: "900px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          {messages.metadata.description}
        </div>
      </div>

      {/* Bottom section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
          zIndex: 10,
        }}
      >
        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#a3a3a3",
            display: "flex",
            fontWeight: "500",
          }}
        >
          Refining Digital Excellence
        </div>

        {/* Accent box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#eb6f5f",
              borderRadius: "999px",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              color: "#525252",
              display: "flex",
              flexDirection: "column",
              fontFamily: "monospace",
            }}
          >
            pittaya.org
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
