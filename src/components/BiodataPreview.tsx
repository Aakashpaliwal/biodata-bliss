import { BiodataFormData, TemplateType } from '@/types/biodata';
import { User } from 'lucide-react';

interface BiodataPreviewProps {
  data: BiodataFormData;
  template: TemplateType;
}

/* ── Row renderers ── */
const TableRow = ({ label, value, sep = ':', labelClass = '', valueClass = '' }: {
  label: string; value: string; sep?: string; labelClass?: string; valueClass?: string;
}) => {
  if (!value) return null;
  return (
    <tr>
      <td className={`py-[3px] pr-2 whitespace-nowrap align-top ${labelClass}`}>{label}</td>
      <td className="py-[3px] px-1 align-top">{sep}</td>
      <td className={`py-[3px] pl-1 align-top ${valueClass}`}>{value}</td>
    </tr>
  );
};

const PhotoPlaceholder = ({ photo, className = '' }: { photo: string; className?: string }) => (
  <div className={`overflow-hidden flex items-center justify-center bg-black/5 ${className}`}>
    {photo ? (
      <img src={photo} alt="Profile" className="w-full h-full object-cover" />
    ) : (
      <User className="w-8 h-8 opacity-20" />
    )}
  </div>
);

/* ── Section component ── */
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

/* ── Template configs ── */
interface TemplateConfig {
  wrapper: string;
  titleClass: string;
  headerContent: (data: BiodataFormData) => React.ReactNode;
  showPhotoInHeader: boolean;
  photoPosition: 'right' | 'left' | 'center' | 'none';
  borderDecor: React.ReactNode;
}

const getTemplateConfig = (template: TemplateType): TemplateConfig => {
  switch (template) {
    case 'minimalist':
      return {
        wrapper: 'bg-white text-gray-800 font-body',
        titleClass: 'text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1.5 border-b border-gray-200 pb-1',
        showPhotoInHeader: true,
        photoPosition: 'right',
        headerContent: (data) => (
          <div className="text-center mb-4 pb-3 border-b border-gray-200">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-1">Biodata</p>
            <h1 className="text-xl font-body font-bold text-gray-900">{data.name || 'Your Name'}</h1>
          </div>
        ),
        borderDecor: null,
      };

    case 'traditional':
      return {
        wrapper: 'bg-[#FFF8F0] text-[#5C2D0E] font-display',
        titleClass: 'text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#B8860B] mb-1.5 border-b border-[#E8D5B7] pb-1',
        showPhotoInHeader: true,
        photoPosition: 'right',
        headerContent: (data) => (
          <div className="text-center mb-4">
            <div className="text-[#B8860B] text-lg mb-0.5">☸</div>
            <p className="text-[10px] text-[#B8860B] font-display tracking-wider">॥ श्री गणेशाय नमः ॥</p>
            <h1 className="text-xl font-display font-bold text-[#8B1A1A] mt-1">{data.name || 'Your Name'}</h1>
          </div>
        ),
        borderDecor: (
          <>
            <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                {[...Array(12)].map((_, i) => (
                  <line key={i} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.3" transform={`rotate(${i * 15} 100 100)`} />
                ))}
              </svg>
            </div>
          </>
        ),
      };

    case 'royal':
      return {
        wrapper: 'bg-[#FFFDF5] text-[#3D2B1F] font-display',
        titleClass: 'text-[11px] font-display font-bold uppercase tracking-[0.12em] text-[#8B0000] mb-1.5 bg-[#8B0000]/10 px-2 py-0.5 rounded-sm',
        showPhotoInHeader: true,
        photoPosition: 'right',
        headerContent: (data) => (
          <div className="text-center mb-4">
            <div className="text-[#8B0000] text-base mb-0.5">❖</div>
            <p className="text-[10px] text-[#8B0000] font-display tracking-wider uppercase">॥ श्री गणेशाय नमः ॥</p>
            <h1 className="text-xl font-display font-bold text-[#8B0000] mt-1">{data.name || 'Your Name'}</h1>
          </div>
        ),
        borderDecor: (
          <div className="absolute inset-0 pointer-events-none select-none">
            {/* Corner ornaments */}
            <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-[#8B0000]/30 rounded-tl-sm" />
            <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-[#8B0000]/30 rounded-tr-sm" />
            <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-[#8B0000]/30 rounded-bl-sm" />
            <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-[#8B0000]/30 rounded-br-sm" />
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B0000] via-[#DAA520] to-[#8B0000]" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B0000] via-[#DAA520] to-[#8B0000]" />
          </div>
        ),
      };

    case 'modern-teal':
      return {
        wrapper: 'bg-white text-[#2C3E50] font-body',
        titleClass: 'text-[11px] font-bold uppercase tracking-[0.15em] text-[#008080] mb-1.5 border-b-2 border-[#008080]/30 pb-1',
        showPhotoInHeader: true,
        photoPosition: 'right',
        headerContent: (data) => (
          <div className="text-center mb-4">
            <div className="flex justify-center gap-2 items-center mb-1">
              <div className="h-px flex-1 bg-[#008080]/30" />
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#008080]" fill="currentColor">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M20 5 L20 35 M5 20 L35 20" stroke="currentColor" strokeWidth="0.5"/>
                {[0,45,90,135].map(a => <ellipse key={a} cx="20" cy="10" rx="4" ry="8" transform={`rotate(${a} 20 20)`} opacity="0.3"/>)}
              </svg>
              <div className="h-px flex-1 bg-[#008080]/30" />
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#008080]">Biodata</p>
            <h1 className="text-xl font-body font-bold text-[#2C3E50] mt-0.5">{data.name || 'Your Name'}</h1>
          </div>
        ),
        borderDecor: (
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#008080]" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#008080]" />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#008080]/10" />
            <div className="absolute top-0 right-0 w-1.5 h-full bg-[#008080]/10" />
          </div>
        ),
      };

    case 'elegant-maroon':
      return {
        wrapper: 'bg-[#FFF9F5] text-[#3D1F1F] font-display',
        titleClass: 'text-[11px] font-display font-bold uppercase tracking-[0.12em] text-white bg-[#800020] px-2 py-1 rounded-sm mb-1.5',
        showPhotoInHeader: true,
        photoPosition: 'right',
        headerContent: (data) => (
          <div className="text-center mb-4">
            <div className="text-[#800020] text-sm mb-0.5 font-display">☙ श्री गणेशाय नमः ❧</div>
            <h1 className="text-xl font-display font-bold text-[#800020] mt-1">{data.name || 'Your Name'}</h1>
            {data.location && <p className="text-[9px] text-[#800020]/60 mt-0.5">{data.location}</p>}
          </div>
        ),
        borderDecor: (
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute inset-2 border border-[#800020]/20 rounded-sm" />
            <div className="absolute inset-3.5 border border-[#800020]/10 rounded-sm" />
          </div>
        ),
      };

    case 'floral':
      return {
        wrapper: 'bg-[#FDF6F9] text-[#4A3040] font-body',
        titleClass: 'text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C08497] mb-1.5 border-b border-[#F0D5E0] pb-1',
        showPhotoInHeader: true,
        photoPosition: 'center',
        headerContent: (data) => (
          <div className="text-center mb-4">
            <p className="text-[10px] tracking-[0.2em] text-[#C08497]">✿ Biodata ✿</p>
            <h1 className="text-xl font-display font-bold text-[#8B4567] mt-0.5">{data.name || 'Your Name'}</h1>
          </div>
        ),
        borderDecor: (
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-28 h-28 opacity-[0.07]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                  <ellipse key={angle} cx="50" cy="20" rx="12" ry="25" transform={`rotate(${angle} 50 50)`} />
                ))}
                <circle cx="50" cy="50" r="10" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-28 h-28 opacity-[0.07] rotate-180">
              <svg viewBox="0 0 100 100" fill="currentColor">
                {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                  <ellipse key={angle} cx="50" cy="20" rx="12" ry="25" transform={`rotate(${angle} 50 50)`} />
                ))}
                <circle cx="50" cy="50" r="10" />
              </svg>
            </div>
          </div>
        ),
      };
  }
};

const BiodataPreview = ({ data, template }: BiodataPreviewProps) => {
  const config = getTemplateConfig(template);

  const hasPersonal = data.name || data.age || data.height || data.dateOfBirth;
  const hasProfessional = data.education || data.occupation;
  const hasFamily = data.fatherName || data.fatherOccupation || data.motherName || data.motherOccupation || data.siblings;
  const hasAstro = data.rashi || data.nakshatra || data.manglikStatus || data.gotra;
  const hasContact = data.contactPerson || data.contactNumber || data.email || data.address;
  const hasPartner = data.preferredAgeRange || data.preferredHeight;

  const isEmpty = !hasPersonal && !hasProfessional && !hasFamily && !hasAstro && !hasContact && !hasPartner;

  const photoEl = (data.photo || true) && config.showPhotoInHeader ? (
    <PhotoPlaceholder
      photo={data.photo}
      className={`rounded border border-current/10 ${
        config.photoPosition === 'center' ? 'w-20 h-24 mx-auto mb-3' : 'w-[72px] h-[90px] shrink-0'
      }`}
    />
  ) : null;

  return (
    <div className={`relative a4-ratio w-full overflow-hidden rounded-sm shadow-2xl ${config.wrapper}`}>
      {config.borderDecor}
      <div className="relative z-10 p-5 sm:p-7 h-full overflow-y-auto scrollbar-thin text-[10px] sm:text-[11px] leading-relaxed">
        {/* Header with optional photo */}
        {config.photoPosition === 'center' ? (
          <>
            {config.headerContent(data)}
            {data.photo && photoEl}
          </>
        ) : (
          <div className="flex items-start gap-3">
            <div className="flex-1">{config.headerContent(data)}</div>
            {data.photo && photoEl}
          </div>
        )}

        {isEmpty && (
          <div className="flex items-center justify-center h-48 text-center opacity-40">
            <p>Start filling in the form to see<br />your biodata come to life.</p>
          </div>
        )}

        <div className="space-y-1">
          {hasPersonal && (
            <Section title="Personal Details" titleClass={config.titleClass}>
              <TableRow label="Name" value={data.name} />
              <TableRow label="Date of Birth" value={data.dateOfBirth} />
              <TableRow label="Time of Birth" value={data.timeOfBirth} />
              <TableRow label="Place of Birth" value={data.placeOfBirth} />
              <TableRow label="Age" value={data.age} />
              <TableRow label="Height" value={data.height} />
              <TableRow label="Blood Group" value={data.bloodGroup} />
              <TableRow label="Complexion" value={data.complexion} />
              <TableRow label="Location" value={data.location} />
              {hasAstro && (
                <>
                  <TableRow label="Rashi" value={data.rashi} />
                  <TableRow label="Nakshatra" value={data.nakshatra} />
                  <TableRow label="Manglik Status" value={data.manglikStatus} />
                  <TableRow label="Gotra" value={data.gotra} />
                </>
              )}
            </Section>
          )}

          {hasProfessional && (
            <Section title="Professional & Education" titleClass={config.titleClass}>
              <TableRow label="Education" value={data.education} />
              <TableRow label="Occupation" value={data.occupation} />
              <TableRow label="Company" value={data.company} />
              {data.income && <TableRow label="Income" value={data.income} />}
            </Section>
          )}

          {hasFamily && (
            <Section title="Family Details" titleClass={config.titleClass}>
              <TableRow label="Father's Name" value={data.fatherName} />
              <TableRow label="Father's Occupation" value={data.fatherOccupation} />
              <TableRow label="Mother's Name" value={data.motherName} />
              <TableRow label="Mother's Occupation" value={data.motherOccupation} />
              <TableRow label="Siblings" value={data.siblings} />
              <TableRow label="Family Type" value={data.familyType} />
              <TableRow label="Native Place" value={data.nativePlace} />
            </Section>
          )}

          {hasContact && (
            <Section title="Contact Details" titleClass={config.titleClass}>
              <TableRow label="Contact Person" value={data.contactPerson} />
              <TableRow label="Contact Number" value={data.contactNumber} />
              <TableRow label="Email ID" value={data.email} />
              <TableRow label="Residential Address" value={data.address} />
            </Section>
          )}

          {hasPartner && (
            <Section title="Partner Preferences" titleClass={config.titleClass}>
              <TableRow label="Age Range" value={data.preferredAgeRange} />
              <TableRow label="Height" value={data.preferredHeight} />
              <TableRow label="Education" value={data.preferredEducation} />
              <TableRow label="Profession" value={data.preferredProfession} />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodataPreview;
