/** Coloured section banner with bobbing ↓↓ markers. */
export function Banner({ tone, id, children }: { tone: 'red' | 'green' | 'yellow' | 'purple' | 'blue'; id?: string; children: string }) {
  return (
    <div className={`banner b-${tone} reveal`}>
      <span className="dd" aria-hidden="true">
        ↓↓
      </span>
      <h2 id={id}>{children}</h2>
      <span className="dd" aria-hidden="true">
        ↓↓
      </span>
    </div>
  );
}
