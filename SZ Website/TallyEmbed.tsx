import { useEffect } from "react";

type TallyEmbedProps = {
  formId: string;
  title: string;
  height?: number;
};

export default function TallyEmbed({
  formId,
  title,
  height = 720,
}: TallyEmbedProps) {
  const url = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    // Re-trigger Tally embed scanner when React component mounts
    if (typeof (window as any).Tally !== "undefined") {
      (window as any).Tally.loadEmbeds();
    } else {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        if (typeof (window as any).Tally !== "undefined") {
          (window as any).Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    }
  }, [formId]);

  return (
    <iframe
      src={url}
      data-tally-src={url}
      loading="lazy"
      width="100%"
      height={height}
      frameBorder="0"
      title={title}
      style={{ border: 0, width: "100%" }}
    />
  );
}
