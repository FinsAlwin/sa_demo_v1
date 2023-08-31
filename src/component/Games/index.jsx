"use client";

export default function Games({ url }) {
  return (
    <iframe
      src={url}
      title="Unity WebGL Game"
      width="800"
      height="600"
    ></iframe>
  );
}
