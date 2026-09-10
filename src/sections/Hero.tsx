import type { ClientConfig } from '../types';
import { ActionLink } from '../components/ActionLink';
import { Photo } from '../components/Photo';

export const Hero = ({ hero }: { hero: ClientConfig['hero'] }) => (
  <section className="hero electric-hero container" aria-labelledby="hero-title">
    <div className="electric-kicker"><p className="eyebrow">{hero.eyebrow}</p>{hero.locationLabel && <span>{hero.locationLabel}</span>}</div>
    <div className="hero-copy"><h1 id="hero-title">{hero.title.map((line) => <span key={line}>{line}</span>)}{hero.emphasis && <em>{hero.emphasis}</em>}</h1></div>
    {hero.image && <figure className="hero-photo"><Photo image={hero.image} priority />{hero.imageCaption && <figcaption>{hero.imageCaption}</figcaption>}</figure>}
    <div className="electric-footer"><div><p className="hero-description">{hero.description}</p>{hero.note && <p className="hero-note">{hero.note}</p>}</div>
      <div className="hero-actions"><ActionLink action={hero.primaryAction} />{hero.secondaryAction && <ActionLink action={hero.secondaryAction} secondary />}</div>
    </div>
    <div className="hero-highlights">{hero.highlights.map((item) => <div key={item.title}><h2>{item.title}</h2><p>{item.description}</p></div>)}</div>
  </section>
);
