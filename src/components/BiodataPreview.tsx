import { BiodataFormData, TemplateType } from '@/types/biodata';
import { User } from 'lucide-react';
import { configs } from '@/components/templates/templateConfigs';

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
