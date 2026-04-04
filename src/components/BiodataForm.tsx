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
import { User, Briefcase, Users, Star, Heart } from 'lucide-react';

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
  const update = (field: keyof BiodataFormData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-2">
      <Accordion type="multiple" defaultValue={['personal']} className="space-y-2">
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
              <Field label="Father's Occupation">
                <Input value={data.fatherOccupation} onChange={e => update('fatherOccupation', e.target.value)} placeholder="Occupation" />
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
