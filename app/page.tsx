import Image from 'next/image';

const COLORS = [
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Ink Black', hex: '#000000' },
  { name: 'Deep Charcoal', hex: '#1A1A1A' },
  { name: 'Warm Gray', hex: '#B8B6B1' },
  { name: 'Technical Silver', hex: '#D0D3D8' },
  { name: 'Soft Gold', hex: '#C6A15B' },
];

export default function Page() {
  return (
    <main>
      <header className="brand-hero">
        <div className="kicker">ITAFCOUTURE ? Brandboard</div>
        <div className="wordmark" aria-label="ITAFCOUTURE wordmark">
          <span className="serif">ITAF</span>
          <span className="sans hairline">COUTURE</span>
        </div>
        <div className="row">
          <span className="pill">Timeless Luxury</span>
          <span className="pill">Minimalist Couture</span>
          <span className="pill">Fashion-Tech Precision</span>
        </div>
      </header>

      <section aria-labelledby="logo">
        <h2 id="logo">Primary Logo</h2>
        <div className="sub">Modern Didot ? sleek sans hybrid; ultra-thin hairlines with couture contrast.</div>
        <div className="grid cols-3">
          <div className="card">
            <h3>Wordmark ? Light on White</h3>
            <div style={{ padding: 12 }}>
              <div className="wordmark">
                <span className="serif">ITAF</span>
                <span className="sans hairline">COUTURE</span>
              </div>
            </div>
          </div>
          <div className="card dark">
            <h3>Wordmark ? Light on Black</h3>
            <div style={{ padding: 12 }}>
              <div className="wordmark" style={{ color: '#f2f2f2' }}>
                <span className="serif">ITAF</span>
                <span className="sans hairline">COUTURE</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Wordmark ? Gold Foil</h3>
            <div style={{ padding: 12 }}>
              <div className="wordmark" style={{ background: 'linear-gradient(135deg,#f9f4e6,#eed9a3,#caa85e,#b18e45,#f0d99a,#fff3c9)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                <span className="serif">ITAF</span>
                <span className="sans hairline">COUTURE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="monogram">
        <h2 id="monogram">Monogram</h2>
        <div className="sub">?IC? in a luxury geometric style, precision-balanced for embossing and favicon usage.</div>
        <div className="monogram-wrap">
          <div className="badge">
            <div className="inset">
              <Image src="/monogram-ic.svg" width={84} height={84} alt="IC Monogram, dark" priority />
            </div>
          </div>
          <div>
            <div className="row" style={{ marginBottom: 12 }}>
              <span className="pill">Emboss-ready</span>
              <span className="pill">Geometric Optics</span>
              <span className="pill">Ultra-thin Detail</span>
            </div>
            <div className="row">
              <div className="badge light">
                <div className="inset">
                  <Image src="/monogram-ic.svg" width={84} height={84} alt="IC Monogram, light" />
                </div>
              </div>
              <div className="badge gold">
                <div className="inset">
                  <Image src="/monogram-ic.svg" width={84} height={84} alt="IC Monogram, gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="palette">
        <h2 id="palette">Color Palette</h2>
        <div className="sub">Six premium tones for timeless couture and technical clarity.</div>
        <div className="grid cols-6">
          {COLORS.map((c) => (
            <div className="card" key={c.name}>
              <div className="swatch" style={{ background: c.hex }} />
              <div className="swatch-meta">
                <div className="name">{c.name}</div>
                <div className="hex">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="type">
        <h2 id="type">Typography System</h2>
        <div className="sub">Serif for titles: Bodoni/Didot lineage. Sans for body: modern, calm Swiss.</div>
        <div className="grid cols-3">
          <div className="card">
            <h3>Serif ? High-Fashion</h3>
            <div className="type-stack">
              <div className="type-title">The Line of Couture Precision</div>
              <div className="meta">Family: Bodoni Moda ? 600 ? Tracking +4%</div>
              <p className="type-body" style={{ fontFamily: '"Bodoni Moda", ui-serif, Georgia, "Times New Roman", serif' }}>
                Title sample shows couture contrast, elevated forms, and timeless rhythm. Use for H1?H3.
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Sans-Serif ? Modern</h3>
            <div className="type-stack">
              <div className="type-title" style={{ fontFamily: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                Technical Elegance in Motion
              </div>
              <div className="meta">Family: Helvetica Neue / Inter ? 300 ? Tracking +2%</div>
              <p className="type-body">
                Body sample leverages neutral forms, clarity, and comfort. Use for paragraphs, UI, and specs.
              </p>
            </div>
          </div>
          <div className="card">
            <h3>Pairing & Scale</h3>
            <div className="type-stack">
              <div className="meta">H1 42 / 46 ? H2 28 / 34 ? Body 16 / 27</div>
              <p className="type-body">
                Titles in serif, body in sans. Keep generous letter spacing and whitespace for a calm, museum-like feel.
              </p>
              <p className="type-body">
                Numerics and specs prefer the sans for precision. Avoid italics; prefer small caps where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="textures">
        <h2 id="textures">Textures & Materials</h2>
        <div className="sub">Matte paper, gold foil emboss, technical grid, micro pattern lines, couture stitching.</div>
        <div className="grid cols-4">
          <div className="card">
            <h3>Matte Paper</h3>
            <div className="swatch tx-matte" />
            <div className="meta">Soft diffusion, low glare, museum-grade calm</div>
          </div>
          <div className="card">
            <h3>Gold Foil Emboss</h3>
            <div className="swatch tx-foil" />
            <div className="meta">Warm metallic gradient with bevel depth</div>
          </div>
          <div className="card">
            <h3>Technical Grid</h3>
            <div className="swatch tx-grid" />
            <div className="meta">CAD alignment and measurement harmony</div>
          </div>
          <div className="card">
            <h3>Micro Pattern Lines</h3>
            <div className="swatch tx-microlines" />
            <div className="meta">Ultra-thin strokes for textile subtlety</div>
          </div>
        </div>
        <div className="grid cols-3" style={{ marginTop: 16 }}>
          <div className="card">
            <h3>Couture Stitching</h3>
            <div className="swatch tx-stitch" />
            <div className="meta">Minimal dashed construction motif</div>
          </div>
          <div className="card">
            <h3>Foil + Stitch Hybrid</h3>
            <div className="swatch" style={{ position: 'relative' }}>
              <div className="tx-foil" style={{ position: 'absolute', inset: 0, opacity: 0.9 }} />
              <div className="tx-stitch" style={{ position: 'absolute', inset: 0, mixBlendMode: 'multiply', opacity: 0.45 }} />
            </div>
            <div className="meta">Event packaging / limited editions</div>
          </div>
          <div className="card">
            <h3>Grid + Lines Hybrid</h3>
            <div className="swatch" style={{ position: 'relative' }}>
              <div className="tx-grid" style={{ position: 'absolute', inset: 0 }} />
              <div className="tx-microlines" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
            </div>
            <div className="meta">Technical sheets / spec overviews</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="patterns">
        <h2 id="patterns">Brand Patterns</h2>
        <div className="sub">Ultra-thin patternline motifs inspired by CAD sewing patterns ? abstract and minimal.</div>
        <div className="grid cols-3">
          <div className="pattern-tile">
            <div className="canvas" />
            <div className="meta">CAD Lines A ? arcs, darts, notches</div>
          </div>
          <div className="pattern-tile">
            <div className="canvas alt" />
            <div className="meta">Micro Arcs ? graded curve families</div>
          </div>
          <div className="pattern-tile">
            <div className="canvas" style={{ backgroundPosition: 'left center', backgroundSize: '160% auto', opacity: 0.9 }} />
            <div className="meta">Detail Crop ? ultra-thin contrast</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="imagery">
        <h2 id="imagery">Imagery Direction</h2>
        <div className="sub">Black & white editorial photos and technical garment close-ups layered with pattern lines.</div>
        <div className="imagery">
          <div className="img-card overlay-lines">
            <Image
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop"
              alt="Editorial portrait ? couture minimal direction"
              width={800}
              height={1000}
            />
          </div>
          <div className="grid">
            <div className="img-card">
              <Image
                src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1200&auto=format&fit=crop"
                alt="Technical fabric close-up ? weave and sheen"
                width={1200}
                height={600}
              />
            </div>
            <div className="img-card overlay-lines">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
                alt="Runway silhouette ? structural elegance"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />
      <footer className="row" style={{ justifyContent: 'space-between' }}>
        <div className="kicker">ITAFCOUTURE ? Digital Maison</div>
        <div className="meta">v1.0 ? Brandboard ? {new Date().getFullYear()}</div>
      </footer>
    </main>
  );
}

