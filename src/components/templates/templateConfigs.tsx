import { BiodataFormData, TemplateType } from '@/types/biodata';

export interface TemplateConfig {
  wrapper: string;
  titleClass: string;
  fontFamily: string;
  header: (data: BiodataFormData) => React.ReactNode;
  photoBorder: string;
  photoSize: 'sm' | 'md' | 'lg';
  photoPosition: 'header-right' | 'header-center' | 'none';
  decor: React.ReactNode;
}

export const configs: Record<TemplateType, TemplateConfig> = {
  /* ═══════════════════════════════════════════════
     ORIGINAL 9 TEMPLATES
     ═══════════════════════════════════════════════ */
  minimalist: {
    wrapper: 'bg-white text-gray-800',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400 mb-1.5 pb-1 border-b border-gray-100',
    fontFamily: "'Montserrat', sans-serif",
    photoBorder: 'rgba(0,0,0,0.08)',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3 border-b border-gray-100">
        <p className="text-[9px] tracking-[0.4em] uppercase text-gray-300 mb-1">Biodata</p>
        <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: null,
  },

  traditional: {
    wrapper: 'bg-[#FFF8F0] text-[#5C2D0E]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B] mb-1.5 pb-1 border-b border-[#E8D5B7]',
    fontFamily: "'Playfair Display', serif",
    photoBorder: '#B8860B',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4">
        <div className="text-[#B8860B] text-lg leading-none">☸</div>
        <p className="text-[10px] text-[#B8860B] tracking-wider mt-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>॥ श्री गणेशाय नमः ॥</p>
        <h1 className="text-xl font-bold text-[#8B1A1A] mt-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.3" transform={`rotate(${i * 15} 100 100)`} />
          ))}
        </svg>
      </div>
    ),
  },

  royal: {
    wrapper: 'bg-[#FFFDF5] text-[#3D2B1F]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-[#8B0000] mb-1.5 bg-[#8B0000]/8 px-2 py-0.5 rounded-sm',
    fontFamily: "'Cormorant Garamond', serif",
    photoBorder: '#DAA520',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DAA520]/50 to-transparent" />
          <span className="text-[#DAA520] text-sm">❖</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DAA520]/50 to-transparent" />
        </div>
        <p className="text-[10px] text-[#8B0000] tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>॥ श्री गणेशाय नमः ॥</p>
        <h1 className="text-xl font-bold text-[#8B0000] mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B0000] via-[#DAA520] to-[#8B0000]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B0000] via-[#DAA520] to-[#8B0000]" />
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#DAA520]/40" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#DAA520]/40" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#DAA520]/40" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#DAA520]/40" />
      </div>
    ),
  },

  'modern-teal': {
    wrapper: 'bg-white text-[#2C3E50]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.18em] text-[#008080] mb-1.5 border-b-2 border-[#008080]/25 pb-1',
    fontFamily: "'Poppins', sans-serif",
    photoBorder: '#008080',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px flex-1 bg-[#008080]/20" />
          <div className="w-5 h-5 rounded-full border-2 border-[#008080]/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#008080]/40" />
          </div>
          <div className="h-px flex-1 bg-[#008080]/20" />
        </div>
        <div className="text-center">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#008080]/60">Biodata</p>
          <h1 className="text-xl font-bold text-[#2C3E50] mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>{data.name || 'Your Name'}</h1>
        </div>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#008080]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#008080]" />
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#008080]/15" />
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-[#008080]/15" />
      </div>
    ),
  },

  'elegant-maroon': {
    wrapper: 'bg-[#FFF9F5] text-[#3D1F1F]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-white bg-[#800020] px-2 py-1 rounded-sm mb-1.5',
    fontFamily: "'Libre Baskerville', serif",
    photoBorder: '#800020',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4">
        <p className="text-[11px] text-[#800020]" style={{ fontFamily: "'Libre Baskerville', serif" }}>☙ श्री गणेशाय नमः ❧</p>
        <h1 className="text-xl font-bold text-[#800020] mt-1.5" style={{ fontFamily: "'Libre Baskerville', serif" }}>{data.name || 'Your Name'}</h1>
        {data.location && <p className="text-[9px] text-[#800020]/50 mt-0.5">{data.location}</p>}
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-2 border border-[#800020]/15 rounded-sm" />
        <div className="absolute inset-[14px] border border-[#800020]/8 rounded-sm" />
      </div>
    ),
  },

  floral: {
    wrapper: 'bg-[#FDF6F9] text-[#4A3040]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C08497] mb-1.5 pb-1 border-b border-[#F0D5E0]',
    fontFamily: "'Lora', serif",
    photoBorder: '#C08497',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <p className="text-[10px] tracking-[0.25em] text-[#C08497]">✿ Biodata ✿</p>
        <h1 className="text-xl font-bold text-[#8B4567] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        {['top-0 right-0', 'bottom-0 left-0 rotate-180'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-24 h-24 opacity-[0.06]`}>
            <svg viewBox="0 0 100 100" fill="#8B4567">
              {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
                <ellipse key={a} cx="50" cy="20" rx="10" ry="22" transform={`rotate(${a} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="8" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },

  'sunset-glow': {
    wrapper: 'bg-gradient-to-br from-[#FFF5EB] to-[#FFF0F5] text-[#4A3728]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#C0392B] mb-1.5 pb-1 border-b border-[#E74C3C]/15',
    fontFamily: "'Cormorant Garamond', serif",
    photoBorder: '#E74C3C',
    photoSize: 'lg',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <div className="inline-flex items-center gap-2 mb-1">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#E74C3C]/40" />
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#E74C3C]/60" fill="currentColor">
            <path d="M12 2L15 9L22 9.5L17 14.5L18.5 22L12 18L5.5 22L7 14.5L2 9.5L9 9Z" />
          </svg>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#E74C3C]/40" />
        </div>
        <h1 className="text-xl font-bold text-[#C0392B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#E74C3C]/40 mt-0.5">Marriage Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E74C3C]" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E74C3C]" />
        <div className="absolute top-3 left-3 opacity-[0.05]">
          <svg viewBox="0 0 60 60" className="w-14 h-14" fill="#E74C3C">
            {[0, 60, 120, 180, 240, 300].map(a => (<ellipse key={a} cx="30" cy="12" rx="8" ry="16" transform={`rotate(${a} 30 30)`} />))}
            <circle cx="30" cy="30" r="6" />
          </svg>
        </div>
        <div className="absolute bottom-3 right-3 opacity-[0.05] rotate-180">
          <svg viewBox="0 0 60 60" className="w-14 h-14" fill="#E74C3C">
            {[0, 60, 120, 180, 240, 300].map(a => (<ellipse key={a} cx="30" cy="12" rx="8" ry="16" transform={`rotate(${a} 30 30)`} />))}
            <circle cx="30" cy="30" r="6" />
          </svg>
        </div>
      </div>
    ),
  },

  'navy-classic': {
    wrapper: 'bg-[#F8F9FC] text-[#1B2A4A]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B3A5C] mb-1.5 pb-1 border-b-2 border-[#1B3A5C]/20',
    fontFamily: "'Montserrat', sans-serif",
    photoBorder: '#1B3A5C',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3 border-b border-[#1B3A5C]/10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#1B3A5C] flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">B</span>
          </div>
          <div className="h-px flex-1 bg-[#1B3A5C]/10" />
        </div>
        <h1 className="text-xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#1B3A5C]/40 mt-0.5">Marriage Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#1B3A5C]" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1B3A5C]/30" />
        <div className="absolute top-2 left-0 w-full h-px bg-[#C9A84C]/30" />
        <div className="absolute top-2 bottom-0 left-0 w-0.5 bg-[#1B3A5C]/8" />
      </div>
    ),
  },

  'sage-botanical': {
    wrapper: 'bg-[#F7F9F5] text-[#3A4A3A]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5B7B5B] mb-1.5 pb-1 border-b border-[#5B7B5B]/15',
    fontFamily: "'Lora', serif",
    photoBorder: '#5B7B5B',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <div className="inline-flex items-center gap-2 mb-1">
          <svg viewBox="0 0 30 20" className="w-6 h-4 text-[#5B7B5B]/30" fill="currentColor">
            <path d="M15 18C15 18 2 12 2 6C2 2 6 0 10 3C12 5 14 8 15 12C16 8 18 5 20 3C24 0 28 2 28 6C28 12 15 18 15 18Z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-[#3A5A3A]" style={{ fontFamily: "'Lora', serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#5B7B5B]/40 mt-0.5">Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-3 border border-[#5B7B5B]/10 rounded-lg" />
        {['top-4 left-4', 'top-4 right-4 -scale-x-100', 'bottom-4 left-4 -scale-y-100', 'bottom-4 right-4 -scale-x-100 -scale-y-100'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} opacity-[0.06]`}>
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="#5B7B5B">
              <path d="M5 35C5 35 5 15 20 5C35 15 35 35 35 35C25 30 15 30 5 35Z" />
              <line x1="20" y1="5" x2="20" y2="35" stroke="#5B7B5B" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },

  /* ═══════════════════════════════════════════════
     ELEGANT TRADITIONAL (5)
     ═══════════════════════════════════════════════ */
  sanskriti: {
    wrapper: 'bg-[#FFFAF3] text-[#4A2C2A]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B1A1A] mb-1.5 pb-1 border-b border-[#D4A574]/30',
    fontFamily: "'Playfair Display', serif",
    photoBorder: '#8B1A1A',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4">
        <p className="text-[11px] text-[#8B1A1A]/70 tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>॥ श्री गणेशाय नमः ॥</p>
        <div className="flex items-center justify-center gap-3 my-1.5">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A574]/50" />
          <span className="text-[#D4A574] text-xs">✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A574]/50" />
        </div>
        <h1 className="text-xl font-bold text-[#8B1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-2 border border-[#D4A574]/20 rounded" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1A1A] via-[#D4A574] to-[#8B1A1A]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1A1A] via-[#D4A574] to-[#8B1A1A]" />
      </div>
    ),
  },

  veda: {
    wrapper: 'bg-white text-[#3D2B1F]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.18em] text-[#D4760A] mb-1.5 pb-1 border-b border-[#F5DEB3]/60',
    fontFamily: "'Crimson Pro', serif",
    photoBorder: '#D4760A',
    photoSize: 'lg',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-4">
        <div className="inline-block px-6 py-1 bg-[#FFF5E6] rounded-sm mb-2">
          <p className="text-[10px] text-[#D4760A] tracking-[0.3em]" style={{ fontFamily: "'Crimson Pro', serif" }}>॥ श्री गणेशाय नमः ॥</p>
        </div>
        <h1 className="text-xl font-bold text-[#8B4513]" style={{ fontFamily: "'Crimson Pro', serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#D4760A]/40 mt-0.5">Shubh Vivah Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4760A]" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#D4760A]" />
        <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#F5DEB3]/40" />
      </div>
    ),
  },

  parampara: {
    wrapper: 'bg-[#FBF8F4] text-[#4A3728]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-[#A0522D] mb-1.5 pb-1 border-b border-[#A0522D]/15',
    fontFamily: "'Source Serif 4', serif",
    photoBorder: '#A0522D',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4">
        <p className="text-[10px] text-[#A0522D]/60 tracking-wider">॥ शुभ विवाह ॥</p>
        <h1 className="text-xl font-bold text-[#6B3A2A] mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%]" fill="none" stroke="#A0522D">
          <circle cx="100" cy="100" r="95" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="65" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
          {[...Array(36)].map((_, i) => (
            <line key={i} x1="100" y1="5" x2="100" y2="195" strokeWidth="0.2" transform={`rotate(${i * 5} 100 100)`} />
          ))}
        </svg>
      </div>
    ),
  },

  mangalam: {
    wrapper: 'bg-[#FFFCF0] text-[#4A3D20]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B] mb-1.5 pb-1 border-b border-[#DAA520]/20',
    fontFamily: "'Playfair Display', serif",
    photoBorder: '#DAA520',
    photoSize: 'lg',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-4">
        <div className="text-[#DAA520] text-lg mb-0.5">🙏</div>
        <p className="text-[10px] text-[#B8860B]/70 tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>॥ शुभ मंगल ॥</p>
        <h1 className="text-xl font-bold text-[#8B6914] mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{data.name || 'Your Name'}</h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#DAA520]/40" />
          <span className="text-[#DAA520]/60 text-[8px]">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#DAA520]/40" />
        </div>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DAA520]/40 via-[#FFD700]/60 to-[#DAA520]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DAA520]/40 via-[#FFD700]/60 to-[#DAA520]/40" />
      </div>
    ),
  },

  aaradhya: {
    wrapper: 'bg-[#FFF9F5] text-[#3D2B1F]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-[#6B3A2A] mb-1.5 pb-1 border-b-2 border-[#6B3A2A]/20',
    fontFamily: "'Libre Baskerville', serif",
    photoBorder: '#6B3A2A',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3 border-b-2 border-double border-[#6B3A2A]/20">
        <p className="text-[10px] text-[#6B3A2A]/50 tracking-wider text-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>॥ श्री गणेशाय नमः ॥</p>
        <h1 className="text-xl font-bold text-[#6B3A2A] text-center mt-1" style={{ fontFamily: "'Libre Baskerville', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-1.5 border-2 border-double border-[#6B3A2A]/12" />
        <div className="absolute inset-3 border border-[#6B3A2A]/8" />
      </div>
    ),
  },

  /* ═══════════════════════════════════════════════
     MODERN MINIMALIST (5)
     ═══════════════════════════════════════════════ */
  lumina: {
    wrapper: 'bg-white text-[#334155]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.25em] text-[#64748B] mb-1.5 pb-1 border-b border-[#E2E8F0]',
    fontFamily: "'Raleway', sans-serif",
    photoBorder: '#94A3B8',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3 border-b border-[#E2E8F0]">
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#94A3B8] mb-1">Biodata</p>
        <h1 className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: "'Raleway', sans-serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: null,
  },

  nova: {
    wrapper: 'bg-[#F8FAFC] text-[#1E293B]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F4C75] mb-1.5 pb-1 border-b-2 border-[#0F4C75]/20',
    fontFamily: "'Montserrat', sans-serif",
    photoBorder: '#0F4C75',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-[#0F4C75]" />
          <div className="w-2 h-2 rotate-45 border-2 border-[#0F4C75]/50" />
        </div>
        <h1 className="text-xl font-bold text-[#0F4C75]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#0F4C75]/40 mt-0.5">Marriage Biodata</p>
        <div className="h-px bg-[#0F4C75]/10 mt-3" />
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0F4C75]" />
        <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-[#0F4C75]/30" />
      </div>
    ),
  },

  ekant: {
    wrapper: 'bg-white text-[#374151]',
    titleClass: 'text-[11px] font-light uppercase tracking-[0.35em] text-[#9CA3AF] mb-2',
    fontFamily: "'Josefin Sans', sans-serif",
    photoBorder: 'rgba(0,0,0,0.06)',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-6 mt-2">
        <h1 className="text-2xl font-light text-[#111827] tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#D1D5DB] mt-1">Biodata</p>
      </div>
    ),
    decor: null,
  },

  aura: {
    wrapper: 'bg-[#F8FAFC] text-[#475569]',
    titleClass: 'text-[11px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] mb-1.5 pb-1',
    fontFamily: "'Poppins', sans-serif",
    photoBorder: '#CBD5E1',
    photoSize: 'md',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3">
        <h1 className="text-xl font-semibold text-[#334155]" style={{ fontFamily: "'Poppins', sans-serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#CBD5E1] mt-0.5">Marriage Biodata</p>
        <div className="h-px bg-gradient-to-r from-[#CBD5E1]/50 to-transparent mt-3" />
      </div>
    ),
    decor: null,
  },

  anya: {
    wrapper: 'bg-white text-[#1F2937]',
    titleClass: 'text-[10px] font-bold uppercase tracking-[0.3em] text-[#6B7280] mb-1.5 pb-1 border-b border-[#E5E7EB]',
    fontFamily: "'Raleway', sans-serif",
    photoBorder: '#D1D5DB',
    photoSize: 'sm',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4 pb-3 border-b border-[#E5E7EB]">
        <div className="grid grid-cols-[1fr_auto] items-end">
          <div>
            <p className="text-[8px] tracking-[0.4em] uppercase text-[#9CA3AF]">Marriage Biodata</p>
            <h1 className="text-lg font-bold text-[#111827] mt-0.5" style={{ fontFamily: "'Raleway', sans-serif" }}>{data.name || 'Your Name'}</h1>
          </div>
        </div>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#E5E7EB]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E5E7EB]" />
      </div>
    ),
  },

  /* ═══════════════════════════════════════════════
     ROYAL & PREMIUM (5)
     ═══════════════════════════════════════════════ */
  rajwada: {
    wrapper: 'bg-[#FAFDF7] text-[#2D3B2D]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B5E20] mb-1.5 bg-[#1B5E20]/8 px-2 py-0.5 rounded-sm',
    fontFamily: "'Cormorant Garamond', serif",
    photoBorder: '#2E7D32',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
          <span className="text-[#C9A84C] text-sm">❖</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
        </div>
        <p className="text-[10px] text-[#2E7D32]/60 tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>॥ श्री गणेशाय नमः ॥</p>
        <h1 className="text-xl font-bold text-[#1B5E20] mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1B5E20] via-[#C9A84C] to-[#1B5E20]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1B5E20] via-[#C9A84C] to-[#1B5E20]" />
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/40" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]/40" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]/40" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/40" />
      </div>
    ),
  },

  patrika: {
    wrapper: 'bg-[#FFF8F2] text-[#4E342E]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-[#5D4037] mb-1.5 bg-[#5D4037]/8 px-2 py-0.5 rounded-sm',
    fontFamily: "'Playfair Display', serif",
    photoBorder: '#5D4037',
    photoSize: 'lg',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-4">
        <div className="inline-block border-2 border-[#8D6E63]/20 px-6 py-2 rounded-sm">
          <p className="text-[10px] text-[#8D6E63] tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>✧ शुभ विवाह पत्रिका ✧</p>
          <h1 className="text-xl font-bold text-[#4E342E] mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{data.name || 'Your Name'}</h1>
        </div>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-2 border border-[#8D6E63]/15 rounded" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#5D4037]" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#5D4037]" />
      </div>
    ),
  },

  saanjh: {
    wrapper: 'bg-[#FAF7F2] text-[#3E3E3E]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#A0522D] mb-1.5 pb-1 border-b border-[#D4A574]/20',
    fontFamily: "'Cormorant Garamond', serif",
    photoBorder: '#A0522D',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-0.5 bg-[#A0522D]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
        </div>
        <h1 className="text-xl font-bold text-[#4A3728]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#A0522D]/40 mt-0.5">Marriage Biodata</p>
        <div className="h-px bg-[#D4A574]/20 mt-3" />
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A0522D] via-[#D4A574] to-[#C19A6B]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C19A6B] via-[#D4A574] to-[#A0522D]" />
      </div>
    ),
  },

  amaya: {
    wrapper: 'bg-[#F5F7FA] text-[#2C3E50]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A237E] mb-1.5 bg-[#1A237E]/8 px-2 py-0.5 rounded-sm',
    fontFamily: "'Montserrat', sans-serif",
    photoBorder: '#C9A84C',
    photoSize: 'lg',
    photoPosition: 'header-right',
    header: (data) => (
      <div className="text-center mb-4 bg-[#1A237E] mx-[-20px] sm:mx-[-28px] mt-[-20px] sm:mt-[-28px] px-5 sm:px-7 py-4">
        <p className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C]/80">Marriage Biodata</p>
        <h1 className="text-xl font-bold text-white mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{data.name || 'Your Name'}</h1>
        <div className="flex items-center justify-center gap-3 mt-1.5">
          <div className="h-px w-10 bg-[#C9A84C]/40" />
          <span className="text-[#C9A84C] text-[10px]">✦</span>
          <div className="h-px w-10 bg-[#C9A84C]/40" />
        </div>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A84C]" />
      </div>
    ),
  },

  kavya: {
    wrapper: 'bg-[#FBF5F9] text-[#3D1F3D]',
    titleClass: 'text-[11px] font-bold uppercase tracking-[0.12em] text-[#6A1B5B] mb-1.5 pb-1 border-b border-[#6A1B5B]/15',
    fontFamily: "'Crimson Pro', serif",
    photoBorder: '#6A1B5B',
    photoSize: 'lg',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-4">
        <p className="text-[10px] text-[#6A1B5B]/50 tracking-wider" style={{ fontFamily: "'Crimson Pro', serif" }}>❧ Biodata ❧</p>
        <h1 className="text-xl font-bold text-[#6A1B5B] mt-1" style={{ fontFamily: "'Crimson Pro', serif" }}>{data.name || 'Your Name'}</h1>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#6A1B5B]/25" />
          <div className="w-1 h-1 rounded-full bg-[#6A1B5B]/30" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#6A1B5B]/25" />
        </div>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#6A1B5B]/30" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6A1B5B]/30" />
        <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-[#6A1B5B]/10" />
        <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-[#6A1B5B]/10" />
      </div>
    ),
  },

  /* ═══════════════════════════════════════════════
     SOFT & FLORAL (5)
     ═══════════════════════════════════════════════ */
  aarambh: {
    wrapper: 'bg-[#FFF5F7] text-[#4A3040]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[#DB7093] mb-1.5 pb-1 border-b border-[#FFD1DC]/60',
    fontFamily: "'Lora', serif",
    photoBorder: '#DB7093',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <p className="text-[10px] tracking-[0.3em] text-[#DB7093]/60">❀ Biodata ❀</p>
        <h1 className="text-xl font-bold text-[#C2185B] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-3 border border-[#FFD1DC]/40 rounded-lg" />
        <div className="absolute top-4 right-4 w-16 h-16 opacity-[0.06]">
          <svg viewBox="0 0 60 60" fill="#DB7093">
            {[0, 72, 144, 216, 288].map(a => (<ellipse key={a} cx="30" cy="12" rx="7" ry="14" transform={`rotate(${a} 30 30)`} />))}
            <circle cx="30" cy="30" r="5" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 w-16 h-16 opacity-[0.06] rotate-180">
          <svg viewBox="0 0 60 60" fill="#DB7093">
            {[0, 72, 144, 216, 288].map(a => (<ellipse key={a} cx="30" cy="12" rx="7" ry="14" transform={`rotate(${a} 30 30)`} />))}
            <circle cx="30" cy="30" r="5" />
          </svg>
        </div>
      </div>
    ),
  },

  pallav: {
    wrapper: 'bg-[#F5F9F5] text-[#3A4A3A]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B8E6B] mb-1.5 pb-1 border-b border-[#A8D5A8]/30',
    fontFamily: "'Lora', serif",
    photoBorder: '#6B8E6B',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <div className="inline-flex items-center gap-2 mb-1">
          <svg viewBox="0 0 30 20" className="w-5 h-3 text-[#6B8E6B]/40 -scale-x-100" fill="currentColor">
            <path d="M15 18C15 18 2 12 2 6C2 2 6 0 10 3C12 5 14 8 15 12C16 8 18 5 20 3C24 0 28 2 28 6C28 12 15 18 15 18Z" />
          </svg>
          <span className="text-[#6B8E6B]/50 text-[10px]">✿</span>
          <svg viewBox="0 0 30 20" className="w-5 h-3 text-[#6B8E6B]/40" fill="currentColor">
            <path d="M15 18C15 18 2 12 2 6C2 2 6 0 10 3C12 5 14 8 15 12C16 8 18 5 20 3C24 0 28 2 28 6C28 12 15 18 15 18Z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-[#3A5A3A]" style={{ fontFamily: "'Lora', serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-3 border border-[#6B8E6B]/10 rounded-lg" />
        {['top-3 left-3', 'top-3 right-3 -scale-x-100', 'bottom-3 left-3 -scale-y-100', 'bottom-3 right-3 -scale-x-100 -scale-y-100'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} opacity-[0.05]`}>
            <svg viewBox="0 0 40 40" className="w-8 h-8" fill="#6B8E6B">
              <path d="M5 35C5 35 5 15 20 5C35 15 35 35 35 35C25 30 15 30 5 35Z" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },

  meher: {
    wrapper: 'bg-[#FFF8F2] text-[#5D4037]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E8937A] mb-1.5 pb-1 border-b border-[#FFDAB9]/40',
    fontFamily: "'Poppins', sans-serif",
    photoBorder: '#E8937A',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <div className="inline-block bg-[#FFF0E5] rounded-full px-5 py-2 mb-1">
          <h1 className="text-lg font-semibold text-[#D4714E]" style={{ fontFamily: "'Poppins', sans-serif" }}>{data.name || 'Your Name'}</h1>
        </div>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#E8937A]/50">Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-4 border border-[#FFDAB9]/30 rounded-2xl" />
      </div>
    ),
  },

  ananda: {
    wrapper: 'bg-[#F8F5FF] text-[#4A3D6B]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C6BC4] mb-1.5 pb-1 border-b border-[#D8D0F0]/50',
    fontFamily: "'Nunito', sans-serif",
    photoBorder: '#9B8EC4',
    photoSize: 'md',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <p className="text-[10px] tracking-[0.25em] text-[#9B8EC4]/60">✦ Biodata ✦</p>
        <h1 className="text-xl font-bold text-[#5B4A8A] mt-0.5" style={{ fontFamily: "'Nunito', sans-serif" }}>{data.name || 'Your Name'}</h1>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-3 border border-[#D8D0F0]/30 rounded-xl" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B39DDB]/40 via-[#9575CD]/60 to-[#B39DDB]/40 rounded-t" />
      </div>
    ),
  },

  suvarna: {
    wrapper: 'bg-[#FFFDF5] text-[#4A3D28]',
    titleClass: 'text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8860B] mb-1.5 pb-1 border-b border-[#F5DEB3]/40',
    fontFamily: "'Lora', serif",
    photoBorder: '#D4A76A',
    photoSize: 'lg',
    photoPosition: 'header-center',
    header: (data) => (
      <div className="text-center mb-3">
        <div className="flex items-center justify-center gap-3 mb-1">
          <div className="h-px w-10 bg-[#D4A76A]/30" />
          <span className="text-[#D4A76A]/60 text-xs">☀</span>
          <div className="h-px w-10 bg-[#D4A76A]/30" />
        </div>
        <h1 className="text-xl font-bold text-[#8B6914]" style={{ fontFamily: "'Lora', serif" }}>{data.name || 'Your Name'}</h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4A76A]/40 mt-0.5">Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-3 border border-[#F5DEB3]/30 rounded" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4A76A]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4A76A]/30 to-transparent" />
      </div>
    ),
  },
};

/* ── Template list for dropdown ── */
export const templateList: { value: TemplateType; label: string; group: string }[] = [
  // Original
  { value: 'minimalist', label: '✦ Minimalist', group: 'Classic' },
  { value: 'traditional', label: '☸ Traditional', group: 'Classic' },
  { value: 'royal', label: '❖ Royal Gold', group: 'Classic' },
  { value: 'modern-teal', label: '◉ Modern Teal', group: 'Classic' },
  { value: 'elegant-maroon', label: '☙ Elegant Maroon', group: 'Classic' },
  { value: 'floral', label: '✿ Elegant Floral', group: 'Classic' },
  { value: 'sunset-glow', label: '★ Sunset Glow', group: 'Classic' },
  { value: 'navy-classic', label: '■ Navy Classic', group: 'Classic' },
  { value: 'sage-botanical', label: '♧ Sage Botanical', group: 'Classic' },
  // Elegant Traditional
  { value: 'sanskriti', label: '🪷 Sanskriti', group: 'Elegant Traditional' },
  { value: 'veda', label: '🕉 Veda', group: 'Elegant Traditional' },
  { value: 'parampara', label: '☸ Parampara', group: 'Elegant Traditional' },
  { value: 'mangalam', label: '🙏 Mangalam', group: 'Elegant Traditional' },
  { value: 'aaradhya', label: '📜 Aaradhya', group: 'Elegant Traditional' },
  // Modern Minimalist
  { value: 'lumina', label: '○ Lumina', group: 'Modern Minimalist' },
  { value: 'nova', label: '◇ Nova', group: 'Modern Minimalist' },
  { value: 'ekant', label: '— Ekant', group: 'Modern Minimalist' },
  { value: 'aura', label: '◌ Aura', group: 'Modern Minimalist' },
  { value: 'anya', label: '▪ Anya', group: 'Modern Minimalist' },
  // Royal & Premium
  { value: 'rajwada', label: '♛ Rajwada', group: 'Royal & Premium' },
  { value: 'patrika', label: '♜ Patrika', group: 'Royal & Premium' },
  { value: 'saanjh', label: '♞ Saanjh', group: 'Royal & Premium' },
  { value: 'amaya', label: '♕ Amaya', group: 'Royal & Premium' },
  { value: 'kavya', label: '♚ Kavya', group: 'Royal & Premium' },
  // Soft & Floral
  { value: 'aarambh', label: '❀ Aarambh', group: 'Soft & Floral' },
  { value: 'pallav', label: '🌿 Pallav', group: 'Soft & Floral' },
  { value: 'meher', label: '🍑 Meher', group: 'Soft & Floral' },
  { value: 'ananda', label: '💜 Ananda', group: 'Soft & Floral' },
  { value: 'suvarna', label: '☀ Suvarna', group: 'Soft & Floral' },
];
