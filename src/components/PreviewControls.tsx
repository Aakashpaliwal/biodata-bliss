import { TemplateType } from '@/types/biodata';
import { Button } from '@/components/ui/button';
import { Download, Link2, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PreviewControlsProps {
  template: TemplateType;
  onTemplateChange: (t: TemplateType) => void;
  onDownload: () => void;
  onShare: () => void;
  onMatchKundli: () => void;
}

const templates: { value: TemplateType; label: string }[] = [
  { value: 'minimalist', label: 'Minimalist' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'royal', label: 'Royal Gold' },
  { value: 'modern-teal', label: 'Modern Teal' },
  { value: 'elegant-maroon', label: 'Elegant Maroon' },
  { value: 'floral', label: 'Elegant Floral' },
];

const PreviewControls = ({ template, onTemplateChange, onDownload, onShare, onMatchKundli }: PreviewControlsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <Select value={template} onValueChange={(v) => onTemplateChange(v as TemplateType)}>
        <SelectTrigger className="w-[180px] text-xs">
          <SelectValue placeholder="Select template" />
        </SelectTrigger>
        <SelectContent>
          {templates.map(t => (
            <SelectItem key={t.value} value={t.value} className="text-xs">{t.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={onShare} className="text-xs gap-1.5">
          <Link2 size={14} /> Share
        </Button>
        <Button size="sm" variant="outline" onClick={onMatchKundli} className="text-xs gap-1.5">
          <Sparkles size={14} /> Match Kundli
        </Button>
        <Button size="sm" onClick={onDownload} className="text-xs gap-1.5">
          <Download size={14} /> Download PDF
        </Button>
      </div>
    </div>
  );
};

export default PreviewControls;
