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

  return (
    <iframe
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
