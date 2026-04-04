import { BiodataFormData } from '@/types/biodata';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { User, Briefcase, Users, Star, Heart, Camera, Phone } from 'lucide-react';
import { useRef } from 'react';

interface BiodataFormProps {
  data: BiodataFormData;
  onChange: (data: BiodataFormData) => void;
}

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</Label>
    {children}
  </div>
);

const BiodataForm = ({ data, onChange }: BiodataFormProps) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const update = (field: keyof BiodataFormData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update('photo', reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <Accordion type="multiple" defaultValue={['personal']} className="space-y-2">
        {/* Photo Upload */}
        <AccordionItem value="photo" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Camera size={16} className="text-primary" /> Photo (Optional)
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="flex items-center gap-4">
              <div
                className="w-20 h-24 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center cursor-pointer overflow-hidden bg-muted/30 hover:border-primary/50 transition-colors"
                onClick={() => fileRef.current?.click()}
              >
                {data.photo ? (
                  <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <Camera size={20} className="text-muted-foreground/50" />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-xs text-muted-foreground">Upload a passport-size photo. It will appear on templates that support photos.</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Choose Photo
                  </button>
                  {data.photo && (
                    <button
                      type="button"
                      onClick={() => update('photo', '')}
                      className="text-xs px-3 py-1.5 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="personal" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <User size={16} className="text-primary" /> Personal Details
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <Field label="Full Name">
                  <Input value={data.name} onChange={e => update('name', e.target.value)} placeholder="Enter full name" />
                </Field>
              </div>
              <Field label="Age">
                <Input value={data.age} onChange={e => update('age', e.target.value)} placeholder="e.g. 28" />
              </Field>
              <Field label="Height">
                <Input value={data.height} onChange={e => update('height', e.target.value)} placeholder="e.g. 5'8&quot;" />
              </Field>
              <Field label="Blood Group">
                <Select value={data.bloodGroup} onValueChange={v => update('bloodGroup', v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                      <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Complexion">
                <Select value={data.complexion} onValueChange={v => update('complexion', v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {['Fair', 'Wheatish', 'Dusky', 'Dark'].map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <div className="col-span-2">
                <Field label="Location">
                  <Input value={data.location} onChange={e => update('location', e.target.value)} placeholder="City, State" />
                </Field>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="professional" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Briefcase size={16} className="text-primary" /> Professional & Education
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <Field label="Education">
                  <Select value={data.education} onValueChange={v => update('education', v)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      {['High School', 'Diploma', 'Bachelor\'s', 'Master\'s', 'PhD', 'Other'].map(e => (
                        <SelectItem key={e} value={e}>{e}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field label="Occupation">
                <Input value={data.occupation} onChange={e => update('occupation', e.target.value)} placeholder="e.g. Software Engineer" />
              </Field>
              <Field label="Company">
                <Input value={data.company} onChange={e => update('company', e.target.value)} placeholder="Company name" />
              </Field>
              <div className="col-span-2">
                <Field label="Annual Income (Optional)">
                  <Input value={data.income} onChange={e => update('income', e.target.value)} placeholder="e.g. 10-15 LPA" />
                </Field>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="family" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Users size={16} className="text-primary" /> Family Background
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Father's Name">
                <Input value={data.fatherName} onChange={e => update('fatherName', e.target.value)} placeholder="Father's name" />
              </Field>
              <Field label="Father's Occupation">
                <Input value={data.fatherOccupation} onChange={e => update('fatherOccupation', e.target.value)} placeholder="Occupation" />
              </Field>
              <Field label="Mother's Name">
                <Input value={data.motherName} onChange={e => update('motherName', e.target.value)} placeholder="Mother's name" />
              </Field>
              <Field label="Mother's Occupation">
                <Input value={data.motherOccupation} onChange={e => update('motherOccupation', e.target.value)} placeholder="Occupation" />
              </Field>
              <Field label="Siblings">
                <Input value={data.siblings} onChange={e => update('siblings', e.target.value)} placeholder="e.g. 1 Brother, 1 Sister" />
              </Field>
              <Field label="Family Type">
                <Select value={data.familyType} onValueChange={v => update('familyType', v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nuclear">Nuclear</SelectItem>
                    <SelectItem value="Joint">Joint</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <div className="col-span-2">
                <Field label="Native Place">
                  <Input value={data.nativePlace} onChange={e => update('nativePlace', e.target.value)} placeholder="Village/Town, District" />
                </Field>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="astro" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Star size={16} className="text-primary" /> Astrological Details
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Date of Birth">
                <Input type="date" value={data.dateOfBirth} onChange={e => update('dateOfBirth', e.target.value)} />
              </Field>
              <Field label="Time of Birth">
                <Input type="time" value={data.timeOfBirth} onChange={e => update('timeOfBirth', e.target.value)} />
              </Field>
              <Field label="Place of Birth">
                <Input value={data.placeOfBirth} onChange={e => update('placeOfBirth', e.target.value)} placeholder="City" />
              </Field>
              <Field label="Rashi">
                <Select value={data.rashi} onValueChange={v => update('rashi', v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {['Mesh (Aries)', 'Vrishabh (Taurus)', 'Mithun (Gemini)', 'Kark (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)', 'Tula (Libra)', 'Vrishchik (Scorpio)', 'Dhanu (Sagittarius)', 'Makar (Capricorn)', 'Kumbh (Aquarius)', 'Meen (Pisces)'].map(r => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Nakshatra">
                <Input value={data.nakshatra} onChange={e => update('nakshatra', e.target.value)} placeholder="e.g. Ashwini" />
              </Field>
              <Field label="Manglik Status">
                <Select value={data.manglikStatus} onValueChange={v => update('manglikStatus', v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="Partial">Partial (Anshik)</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <div className="col-span-2">
                <Field label="Gotra">
                  <Input value={data.gotra} onChange={e => update('gotra', e.target.value)} placeholder="Gotra name" />
                </Field>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contact" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Phone size={16} className="text-primary" /> Contact Details
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Contact Person">
                <Input value={data.contactPerson} onChange={e => update('contactPerson', e.target.value)} placeholder="e.g. Father's name" />
              </Field>
              <Field label="Contact Number">
                <Input value={data.contactNumber} onChange={e => update('contactNumber', e.target.value)} placeholder="+91 XXXXXXXXXX" />
              </Field>
              <Field label="Email ID">
                <Input type="email" value={data.email} onChange={e => update('email', e.target.value)} placeholder="email@example.com" />
              </Field>
              <div className="col-span-2">
                <Field label="Residential Address">
                  <Input value={data.address} onChange={e => update('address', e.target.value)} placeholder="Full address" />
                </Field>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="partner" className="border rounded-lg px-4 bg-card">
          <AccordionTrigger className="hover:no-underline py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Heart size={16} className="text-primary" /> Partner Preferences
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Desired Age Range">
                <Input value={data.preferredAgeRange} onChange={e => update('preferredAgeRange', e.target.value)} placeholder="e.g. 25-30" />
              </Field>
              <Field label="Desired Height">
                <Input value={data.preferredHeight} onChange={e => update('preferredHeight', e.target.value)} placeholder="e.g. 5'2&quot; - 5'6&quot;" />
              </Field>
              <Field label="Desired Education">
                <Input value={data.preferredEducation} onChange={e => update('preferredEducation', e.target.value)} placeholder="e.g. Graduate+" />
              </Field>
              <Field label="Desired Profession">
                <Input value={data.preferredProfession} onChange={e => update('preferredProfession', e.target.value)} placeholder="e.g. Any Professional" />
              </Field>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BiodataForm;
