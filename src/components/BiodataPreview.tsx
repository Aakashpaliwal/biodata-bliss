import { BiodataFormData, TemplateType } from '@/types/biodata';
import { User } from 'lucide-react';

interface BiodataPreviewProps {
  data: BiodataFormData;
  template: TemplateType;
}

/* ── Row renderers ── */
const TableRow = ({ label, value }: { label: string; value: string }) => {
  if (!value) return null;
  return (
    <tr>
      <td className="py-[3px] pr-2 whitespace-nowrap align-top opacity-70">{label}</td>
      <td className="py-[3px] px-1 align-top opacity-40">:</td>
      <td className="py-[3px] pl-1 align-top font-medium">{value}</td>
    </tr>
  );
};

/* ── Circular Photo ── */
const CircularPhoto = ({ photo, size = 'md', borderColor = 'rgba(0,0,0,0.1)' }: {
  photo: string; size?: 'sm' | 'md' | 'lg'; borderColor?: string;
}) => {
  const sizes = { sm: 'w-16 h-16', md: 'w-20 h-20', lg: 'w-24 h-24' };
  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden flex items-center justify-center shrink-0`}
      style={{ border: `2px solid ${borderColor}`, background: 'rgba(0,0,0,0.03)' }}
    >
      {photo ? (
        <img src={photo} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <User className="w-6 h-6 opacity-15" />
      )}
    </div>
  );
};

/* ── Section ── */
const Section = ({ title, children, titleClass }: {
  title: string; children: React.ReactNode; titleClass: string;
}) => (
  <div className="mb-3">
    <h2 className={titleClass}>{title}</h2>
    <table className="w-full text-[10px] sm:text-[11px]">
      <tbody>{children}</tbody>
    </table>
  </div>
);

/* ── Shared data rows ── */
const PersonalRows = ({ data, includeAstro }: { data: BiodataFormData; includeAstro: boolean }) => (
  <>
    <TableRow label="Name" value={data.name} />
    <TableRow label="Date of Birth" value={data.dateOfBirth} />
    <TableRow label="Time of Birth" value={data.timeOfBirth} />
    <TableRow label="Place of Birth" value={data.placeOfBirth} />
    <TableRow label="Age" value={data.age} />
    <TableRow label="Height" value={data.height} />
    <TableRow label="Blood Group" value={data.bloodGroup} />
    <TableRow label="Complexion" value={data.complexion} />
    <TableRow label="Location" value={data.location} />
    {includeAstro && (
      <>
        <TableRow label="Rashi" value={data.rashi} />
        <TableRow label="Nakshatra" value={data.nakshatra} />
        <TableRow label="Manglik" value={data.manglikStatus} />
        <TableRow label="Gotra" value={data.gotra} />
      </>
    )}
  </>
);

const FamilyRows = ({ data }: { data: BiodataFormData }) => (
  <>
    <TableRow label="Father's Name" value={data.fatherName} />
    <TableRow label="Father's Occupation" value={data.fatherOccupation} />
    <TableRow label="Mother's Name" value={data.motherName} />
    <TableRow label="Mother's Occupation" value={data.motherOccupation} />
    <TableRow label="Siblings" value={data.siblings} />
    <TableRow label="Family Type" value={data.familyType} />
    <TableRow label="Native Place" value={data.nativePlace} />
  </>
);

const ContactRows = ({ data }: { data: BiodataFormData }) => (
  <>
    <TableRow label="Contact Person" value={data.contactPerson} />
    <TableRow label="Contact Number" value={data.contactNumber} />
    <TableRow label="Email ID" value={data.email} />
    <TableRow label="Address" value={data.address} />
  </>
);

const ProfessionalRows = ({ data }: { data: BiodataFormData }) => (
  <>
    <TableRow label="Education" value={data.education} />
    <TableRow label="Occupation" value={data.occupation} />
    <TableRow label="Company" value={data.company} />
    {data.income && <TableRow label="Income" value={data.income} />}
  </>
);

const PartnerRows = ({ data }: { data: BiodataFormData }) => (
  <>
    <TableRow label="Age Range" value={data.preferredAgeRange} />
    <TableRow label="Height" value={data.preferredHeight} />
    <TableRow label="Education" value={data.preferredEducation} />
    <TableRow label="Profession" value={data.preferredProfession} />
  </>
);

/* ── Template configs ── */
interface TemplateConfig {
  wrapper: string;
  titleClass: string;
  fontFamily: string;
  header: (data: BiodataFormData) => React.ReactNode;
  photoBorder: string;
  photoSize: 'sm' | 'md' | 'lg';
  photoPosition: 'header-right' | 'header-center' | 'none';
  decor: React.ReactNode;
}

const configs: Record<TemplateType, TemplateConfig> = {
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
        <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {data.name || 'Your Name'}
        </h1>
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
        <p className="text-[10px] text-[#B8860B] tracking-wider mt-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
          ॥ श्री गणेशाय नमः ॥
        </p>
        <h1 className="text-xl font-bold text-[#8B1A1A] mt-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
          {data.name || 'Your Name'}
        </h1>
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
        <p className="text-[10px] text-[#8B0000] tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          ॥ श्री गणेशाय नमः ॥
        </p>
        <h1 className="text-xl font-bold text-[#8B0000] mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {data.name || 'Your Name'}
        </h1>
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
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#008080]/60" style={{ fontFamily: "'Poppins', sans-serif" }}>Biodata</p>
          <h1 className="text-xl font-bold text-[#2C3E50] mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {data.name || 'Your Name'}
          </h1>
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
        <h1 className="text-xl font-bold text-[#800020] mt-1.5" style={{ fontFamily: "'Libre Baskerville', serif" }}>
          {data.name || 'Your Name'}
        </h1>
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
        <h1 className="text-xl font-bold text-[#8B4567] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
          {data.name || 'Your Name'}
        </h1>
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
        <h1 className="text-xl font-bold text-[#C0392B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {data.name || 'Your Name'}
        </h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#E74C3C]/40 mt-0.5">Marriage Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E74C3C]" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E74C3C]" />
        {/* Subtle corner roses */}
        <div className="absolute top-3 left-3 opacity-[0.05]">
          <svg viewBox="0 0 60 60" className="w-14 h-14" fill="#E74C3C">
            {[0, 60, 120, 180, 240, 300].map(a => (
              <ellipse key={a} cx="30" cy="12" rx="8" ry="16" transform={`rotate(${a} 30 30)`} />
            ))}
            <circle cx="30" cy="30" r="6" />
          </svg>
        </div>
        <div className="absolute bottom-3 right-3 opacity-[0.05] rotate-180">
          <svg viewBox="0 0 60 60" className="w-14 h-14" fill="#E74C3C">
            {[0, 60, 120, 180, 240, 300].map(a => (
              <ellipse key={a} cx="30" cy="12" rx="8" ry="16" transform={`rotate(${a} 30 30)`} />
            ))}
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
            <span className="text-white text-[8px] font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>B</span>
          </div>
          <div className="h-px flex-1 bg-[#1B3A5C]/10" />
        </div>
        <h1 className="text-xl font-bold text-[#1B3A5C]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {data.name || 'Your Name'}
        </h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#1B3A5C]/40 mt-0.5">Marriage Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#1B3A5C]" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1B3A5C]/30" />
        <div className="absolute top-2 left-0 w-full h-px bg-[#C9A84C]/30" />
        {/* Side accent */}
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
        <h1 className="text-xl font-bold text-[#3A5A3A]" style={{ fontFamily: "'Lora', serif" }}>
          {data.name || 'Your Name'}
        </h1>
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#5B7B5B]/40 mt-0.5">Biodata</p>
      </div>
    ),
    decor: (
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-3 border border-[#5B7B5B]/10 rounded-lg" />
        {/* Leaf corners */}
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
};

const BiodataPreview = ({ data, template }: BiodataPreviewProps) => {
  const c = configs[template];

  const hasPersonal = data.name || data.age || data.height || data.dateOfBirth;
  const hasProfessional = data.education || data.occupation;
  const hasFamily = data.fatherName || data.fatherOccupation || data.motherName || data.motherOccupation || data.siblings;
  const hasAstro = data.rashi || data.nakshatra || data.manglikStatus || data.gotra;
  const hasContact = data.contactPerson || data.contactNumber || data.email || data.address;
  const hasPartner = data.preferredAgeRange || data.preferredHeight;
  const isEmpty = !hasPersonal && !hasProfessional && !hasFamily && !hasAstro && !hasContact && !hasPartner;

  return (
    <div className={`relative a4-ratio w-full overflow-hidden rounded-sm shadow-2xl ${c.wrapper}`} style={{ fontFamily: c.fontFamily }}>
      {c.decor}
      <div className="relative z-10 p-5 sm:p-7 h-full overflow-y-auto scrollbar-thin text-[10px] sm:text-[11px] leading-relaxed">
        
        {/* Header + Photo */}
        {c.photoPosition === 'header-center' ? (
          <>
            {c.header(data)}
            {data.photo && (
              <div className="flex justify-center mb-3">
                <CircularPhoto photo={data.photo} size={c.photoSize} borderColor={c.photoBorder} />
              </div>
            )}
          </>
        ) : c.photoPosition === 'header-right' ? (
          <div className="flex items-start gap-4">
            <div className="flex-1">{c.header(data)}</div>
            {data.photo && <CircularPhoto photo={data.photo} size={c.photoSize} borderColor={c.photoBorder} />}
          </div>
        ) : (
          c.header(data)
        )}

        {isEmpty && (
          <div className="flex items-center justify-center h-48 text-center opacity-40">
            <p>Start filling in the form to see<br />your biodata come to life.</p>
          </div>
        )}

        <div className="space-y-1">
          {hasPersonal && (
            <Section title="Personal Details" titleClass={c.titleClass}>
              <PersonalRows data={data} includeAstro={!!hasAstro} />
            </Section>
          )}
          {hasProfessional && (
            <Section title="Professional & Education" titleClass={c.titleClass}>
              <ProfessionalRows data={data} />
            </Section>
          )}
          {hasFamily && (
            <Section title="Family Details" titleClass={c.titleClass}>
              <FamilyRows data={data} />
            </Section>
          )}
          {hasContact && (
            <Section title="Contact Details" titleClass={c.titleClass}>
              <ContactRows data={data} />
            </Section>
          )}
          {hasPartner && (
            <Section title="Partner Preferences" titleClass={c.titleClass}>
              <PartnerRows data={data} />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodataPreview;
