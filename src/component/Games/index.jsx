"use client";

export default function Games({ url }) {
  return (
    <iframe
      src={url}
      title="Unity WebGL Game"
      width="1400"
      height="800"
      allow="microphone; camera"
    ></iframe>
  );
}
