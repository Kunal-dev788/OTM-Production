import Image from "next/image";
import type { OutputItem } from "./why-choose-us-data";

type OutputCardProps = {
  output: OutputItem;
};

export function OutputCard({ output }: OutputCardProps) {
  return (
    <article className="output-card">
      <div className="output-card__image">
        <Image src={output.image} alt={output.alt} fill sizes="3rem" />
      </div>
      <div className="output-card__copy">
        <h3>{output.title}</h3>
        <p>{output.description}</p>
      </div>
    </article>
  );
}
