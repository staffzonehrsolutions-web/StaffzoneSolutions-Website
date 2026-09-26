import WebsiteForm from "./WebsiteForm";

type TallyEmbedProps = {
  formId?: string;
  title?: string;
  height?: number;
};

export default function TallyEmbed(_props?: TallyEmbedProps) {
  return <WebsiteForm />;
}
