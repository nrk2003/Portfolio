/**
 * Greeked-wireframe primitives (NDA-safe figure kit) used to draw case-study
 * device screens. Class names match the original stylesheet one-to-one.
 */
import type { CSSProperties, ReactNode } from 'react';

type Width = 25 | 40 | 55 | 70 | 85 | 90 | 95;

/** A placeholder text line. Blurred ("greeked") by default. */
export function Ln({ w, blur = true, style }: { w: Width; blur?: boolean; style?: CSSProperties }) {
  return <i className={`ln${blur ? ' b' : ''} w${w}`} style={style} />;
}

export function MoodTag({ mood, children }: { mood: 'angry' | 'calm' | 'open'; children: ReactNode }) {
  return <span className={`moodtag mood-${mood}`}>{children}</span>;
}

export function ChatLine({
  side,
  face,
  children,
}: {
  side: 'them' | 'me';
  face: string;
  children: ReactNode;
}) {
  return (
    <div className={`chatline ${side}`}>
      <div className="who" aria-hidden="true">
        {face}
      </div>
      <div className="msg">{children}</div>
    </div>
  );
}

export function PCard({
  n,
  nStyle,
  variant,
  numAfter = false,
  style,
  children,
}: {
  n?: ReactNode;
  nStyle?: CSSProperties;
  variant?: 'bad' | 'good' | 'dim';
  numAfter?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const num =
    n !== undefined ? (
      <span className="pn" style={nStyle}>
        {n}
      </span>
    ) : null;
  return (
    <div className={`pcard${variant ? ` ${variant}` : ''}`} style={style}>
      {!numAfter && num}
      <div className="pl">{children}</div>
      {numAfter && num}
    </div>
  );
}

export function Hotspot({ n, style }: { n: string; style: CSSProperties }) {
  return (
    <div className="hotspot" style={style} aria-hidden="true">
      {n}
    </div>
  );
}

export function Step({ n, on = false, children }: { n: string; on?: boolean; children: ReactNode }) {
  return (
    <div className={`step ${on ? 'on' : 'off'}`}>
      <span className="sn">{n}</span> {children}
    </div>
  );
}

export function KillBtn({ killed, style, children }: { killed?: boolean; style?: CSSProperties; children: ReactNode }) {
  return (
    <span className={`killbtn${killed ? ' killed' : ''}`} style={style}>
      {children}
    </span>
  );
}

/** A centred display-font glyph between wireframe rows (↓, ↺, ⟷ …). */
export function Glyph({ size = 15, children }: { size?: number; children: ReactNode }) {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'var(--display)', fontSize: size }} aria-hidden="true">
      {children}
    </div>
  );
}

/** Bold inline label inside a PCard. */
export function CardText({ children, lh }: { children: ReactNode; lh?: number }) {
  return <b style={{ fontSize: '12.5px', lineHeight: lh }}>{children}</b>;
}
