import type { ClientConfig } from '../types';

import { ActionLink } from '../components/ActionLink';
import { Photo } from '../components/Photo';

export const Hero = ({ hero }: { hero: ClientConfig['hero'] }) => (
  <section className="ev-hero" aria-labelledby="hero-title">
    <div className="ev-hero-media">
      {hero.image && <Photo image={hero.image} priority />}

      <div className="ev-hero-overlay" />
    </div>

    <div className="ev-hero-content container">
      <div className="ev-hero-topline">
        <span className="ev-hero-index">01</span>

        <span className="eyebrow">
          {hero.eyebrow}
        </span>

        {hero.locationLabel && (
          <span className="ev-hero-location">
            {hero.locationLabel}
          </span>
        )}
      </div>

      <div className="ev-hero-main">
        <div className="ev-hero-title-wrap">
          <h1 id="hero-title">
            {hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}

            {hero.emphasis && (
              <em>{hero.emphasis}</em>
            )}
          </h1>
        </div>

        <div className="ev-hero-info">
          {hero.description && (
            <p className="hero-description">
              {hero.description}
            </p>
          )}

          {hero.note && (
            <p className="hero-note">
              {hero.note}
            </p>
          )}

          <div className="hero-actions">
            <ActionLink action={hero.primaryAction} />

            {hero.secondaryAction && (
              <ActionLink
                action={hero.secondaryAction}
                secondary
              />
            )}
          </div>
        </div>
      </div>

      <div className="ev-hero-bottom">
        <div>
          <span>PURE ELECTRIC</span>
        </div>

        <div>
          <span>ZERO EMISSIONS</span>
        </div>

        <div>
          <span>INTELLIGENT PERFORMANCE</span>
        </div>

        <div className="ev-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="ev-scroll-line" />
        </div>
      </div>
    </div>
  </section>
);
