import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiodataFormData, TemplateType } from '@/types/biodata';
import BiodataPreview from '@/components/BiodataPreview';
import { templateList } from '@/components/templates/templateConfigs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

const sampleData: BiodataFormData = {
  photo: '',
  name: 'Priya Sharma',
  age: '26',
  height: "5'4\"",
  bloodGroup: 'A+',
  complexion: 'Fair',
  location: 'Mumbai, Maharashtra',
  education: 'B.Tech Computer Science',
  occupation: 'Software Engineer',
  company: 'Infosys Ltd.',
  income: '8 LPA',
  fatherName: 'Ramesh Sharma',
  fatherOccupation: 'Government Employee',
  motherName: 'Sunita Sharma',
  motherOccupation: 'Homemaker',
  siblings: '1 Brother (Married)',
  familyType: 'Nuclear',
  nativePlace: 'Jaipur, Rajasthan',
  dateOfBirth: '15 March 1998',
  timeOfBirth: '10:30 AM',
  placeOfBirth: 'Jaipur, Rajasthan',
  rashi: 'Meen',
  nakshatra: 'Revati',
  manglikStatus: 'Non-Manglik',
  gotra: 'Kashyap',
  contactPerson: 'Ramesh Sharma (Father)',
  contactNumber: '+91 98765 43210',
  email: 'priya.sharma@email.com',
  address: '12, Rose Garden Colony, Mumbai - 400001',
  preferredAgeRange: '27–32',
  preferredHeight: "5'6\"–6'0\"",
  preferredEducation: 'Graduate or above',
  preferredProfession: 'Any reputed profession',
};

const groups = Array.from(new Set(templateList.map((t) => t.group)));

const TemplateCard = ({
  template,
  selected,
  onSelect,
}: {
  template: (typeof templateList)[0];
  selected: boolean;
  onSelect: () => void;
}) => {
  const PREVIEW_W = 480;
  const CARD_W = 220;
  const scale = CARD_W / PREVIEW_W;
  const PREVIEW_H = 680;
  const cardH = PREVIEW_H * scale;

  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer rounded-xl border-2 overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1 group ${
        selected
          ? 'border-primary shadow-lg ring-2 ring-primary/30'
          : 'border-border hover:border-primary/50'
      }`}
      style={{ width: CARD_W }}
    >
      {/* Preview thumbnail */}
      <div
        className="relative overflow-hidden bg-muted"
        style={{ height: cardH }}
      >
        <div
          style={{
            width: PREVIEW_W,
            height: PREVIEW_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <BiodataPreview data={sampleData} template={template.value as TemplateType} />
        </div>
        {/* Hover / selected overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-200 ${
            selected ? 'bg-primary/10 opacity-100' : 'bg-black/0 group-hover:bg-black/5 opacity-100'
          }`}
        />
        {selected && (
          <div className="absolute top-2 right-2">
            <CheckCircle2 size={20} className="text-primary fill-primary/20" />
          </div>
        )}
      </div>

      {/* Template name */}
      <div
        className={`px-3 py-2 text-xs font-semibold border-t transition-colors duration-200 ${
          selected ? 'bg-primary/5 border-primary/20 text-primary' : 'bg-card border-border text-foreground'
        }`}
      >
        {template.label}
      </div>
    </div>
  );
};

const TemplateSelect = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<TemplateType>('traditional');
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const displayed =
    activeGroup === 'all'
      ? templateList
      : templateList.filter((t) => t.group === activeGroup);

  const handleContinue = () => {
    navigate(`/create?template=${selected}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">B</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-base leading-tight">Biodata Maker</h1>
              <p className="text-[10px] text-muted-foreground leading-tight">& Kundli Matcher</p>
            </div>
          </div>
          <Button onClick={handleContinue} className="gap-2 text-sm" size="sm">
            Use This Template <ChevronRight size={16} />
          </Button>
        </div>
      </header>

      {/* Hero text */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium mb-4">
          <Sparkles size={12} /> Step 1 of 3 — Choose a Template
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Pick your biodata design</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          {templateList.length} beautiful templates across {groups.length} styles. Preview with real data, pick your favourite.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveGroup('all')}
            className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors ${
              activeGroup === 'all'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
            }`}
          >
            All ({templateList.length})
          </button>
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors ${
                activeGroup === g
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {g} ({templateList.filter((t) => t.group === g).length})
            </button>
          ))}
        </div>
      </div>

      {/* Template grid */}
      <div className="max-w-7xl mx-auto px-4 pb-32 flex-1">
        <div className="flex flex-wrap gap-5 justify-center">
          {displayed.map((t) => (
            <TemplateCard
              key={t.value}
              template={t}
              selected={selected === t.value}
              onSelect={() => setSelected(t.value as TemplateType)}
            />
          ))}
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-card/95 backdrop-blur-sm border-t shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Selected:</span>
            <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
              {templateList.find((t) => t.value === selected)?.label ?? selected}
            </Badge>
          </div>
          <Button size="lg" onClick={handleContinue} className="gap-2 w-full sm:w-auto">
            Continue with this template <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelect;
