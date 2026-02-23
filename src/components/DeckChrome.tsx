import { BrandLogo } from './BrandLogo';

type DeckChromeProps = {
  page: number;
  total: number;
  topRightLabel: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function DeckChrome({ page, total, topRightLabel, children, footer }: DeckChromeProps) {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '1.25rem',
        border: '1px solid transparent',
        boxSizing: 'border-box',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0) 35%, rgba(0, 255, 255, 0.08) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          gap: '0.85rem',
        }}
      >
        <header
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          <BrandLogo />
          <p style={{ justifySelf: 'center', margin: 0 }}>{topRightLabel}</p>
          <p style={{ justifySelf: 'end', margin: 0 }}>
            {String(page).padStart(3, '0')} / {String(total).padStart(3, '0')}
          </p>
        </header>

        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>{children}</div>

        {footer ? <footer style={{ textAlign: 'center', opacity: 0.85 }}>{footer}</footer> : null}
      </div>
    </section>
  );
}

