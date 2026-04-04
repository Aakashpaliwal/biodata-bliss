import { BiodataFormData, TemplateType } from '@/types/biodata';

interface BiodataPreviewProps {
  data: BiodataFormData;
  template: TemplateType;
}

const SectionRow = ({ label, value }: { label: string; value: string }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between py-1 border-b border-current/5 last:border-0">
      <span className="opacity-70">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
};

const templateStyles: Record<TemplateType, {
  wrapper: string;
  heading: string;
  sectionTitle: string;
  divider: string;
  watermark: React.ReactNode;
}> = {
  minimalist: {
    wrapper: 'bg-white text-gray-800 font-body',
    heading: 'text-2xl font-body font-bold tracking-tight text-gray-900',
    sectionTitle: 'text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2',
    divider: 'border-gray-100',
    watermark: null,
  },
  traditional: {
    wrapper: 'bg-[#FFF8F0] text-[#5C2D0E] font-display',
    heading: 'text-2xl font-display font-bold text-[#8B1A1A]',
    sectionTitle: 'text-xs font-display font-semibold uppercase tracking-[0.15em] text-[#B8860B] mb-2',
    divider: 'border-[#E8D5B7]',
    watermark: (
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-[80%] h-[80%]" fill="currentColor">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.3"
              transform={`rotate(${i * 15} 100 100)`} />
          ))}
        </svg>
      </div>
    ),
  },
  floral: {
    wrapper: 'bg-[#FDF6F9] text-[#4A3040] font-body',
    heading: 'text-2xl font-display font-bold text-[#8B4567]',
    sectionTitle: 'text-xs font-semibold uppercase tracking-[0.15em] text-[#C08497] mb-2',
    divider: 'border-[#F0D5E0]',
    watermark: (
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.08] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
            <ellipse key={angle} cx="50" cy="20" rx="12" ry="25" transform={`rotate(${angle} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>
    ),
  },
};

const BiodataPreview = ({ data, template }: BiodataPreviewProps) => {
  const t = templateStyles[template];

  const hasPersonal = data.name || data.age || data.height;
  const hasProfessional = data.education || data.occupation;
  const hasFamily = data.fatherOccupation || data.motherOccupation || data.siblings;
  const hasAstro = data.dateOfBirth || data.manglikStatus || data.gotra;
  const hasPartner = data.preferredAgeRange || data.preferredHeight;

  const isEmpty = !hasPersonal && !hasProfessional && !hasFamily && !hasAstro && !hasPartner;

  return (
    <div className={`relative a4-ratio w-full overflow-hidden rounded-sm shadow-2xl ${t.wrapper}`}>
      {t.watermark}
      <div className="relative z-10 p-6 sm:p-8 h-full overflow-y-auto scrollbar-thin text-[11px] sm:text-xs leading-relaxed">
        {/* Header */}
        <div className="text-center mb-6">
          <p className={t.sectionTitle} style={{ marginBottom: '4px' }}>✦ Biodata ✦</p>
          <h1 className={t.heading}>{data.name || 'Your Name'}</h1>
          {data.location && <p className="mt-1 opacity-60 text-[10px]">{data.location}</p>}
        </div>

        {isEmpty && (
          <div className="flex items-center justify-center h-48 text-center opacity-40">
            <p>Start filling in the form to see<br />your biodata come to life.</p>
          </div>
        )}

        <div className="space-y-4">
          {hasPersonal && (
            <section>
              <h2 className={t.sectionTitle}>Personal Details</h2>
              <div className={`border-t ${t.divider}`}>
                <SectionRow label="Age" value={data.age} />
                <SectionRow label="Height" value={data.height} />
                <SectionRow label="Blood Group" value={data.bloodGroup} />
                <SectionRow label="Complexion" value={data.complexion} />
                <SectionRow label="Location" value={data.location} />
              </div>
            </section>
          )}

          {hasProfessional && (
            <section>
              <h2 className={t.sectionTitle}>Professional & Education</h2>
              <div className={`border-t ${t.divider}`}>
                <SectionRow label="Education" value={data.education} />
                <SectionRow label="Occupation" value={data.occupation} />
                <SectionRow label="Company" value={data.company} />
                {data.income && <SectionRow label="Income" value={data.income} />}
              </div>
            </section>
          )}

          {hasFamily && (
            <section>
              <h2 className={t.sectionTitle}>Family Background</h2>
              <div className={`border-t ${t.divider}`}>
                <SectionRow label="Father's Occupation" value={data.fatherOccupation} />
                <SectionRow label="Mother's Occupation" value={data.motherOccupation} />
                <SectionRow label="Siblings" value={data.siblings} />
                <SectionRow label="Family Type" value={data.familyType} />
                <SectionRow label="Native Place" value={data.nativePlace} />
              </div>
            </section>
          )}

          {hasAstro && (
            <section>
              <h2 className={t.sectionTitle}>Astrological Details</h2>
              <div className={`border-t ${t.divider}`}>
                <SectionRow label="Date of Birth" value={data.dateOfBirth} />
                <SectionRow label="Time of Birth" value={data.timeOfBirth} />
                <SectionRow label="Place of Birth" value={data.placeOfBirth} />
                <SectionRow label="Manglik Status" value={data.manglikStatus} />
                <SectionRow label="Gotra" value={data.gotra} />
              </div>
            </section>
          )}

          {hasPartner && (
            <section>
              <h2 className={t.sectionTitle}>Partner Preferences</h2>
              <div className={`border-t ${t.divider}`}>
                <SectionRow label="Age Range" value={data.preferredAgeRange} />
                <SectionRow label="Height" value={data.preferredHeight} />
                <SectionRow label="Education" value={data.preferredEducation} />
                <SectionRow label="Profession" value={data.preferredProfession} />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodataPreview;
