import { TemplateType } from '@/types/biodata';
import { Button } from '@/components/ui/button';
import { Download, Link2, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { templateList } from '@/components/templates/templateConfigs';

interface PreviewControlsProps {
  template: TemplateType;
  onTemplateChange: (t: TemplateType) => void;
  onDownload: () => void;
  onShare: () => void;
  onMatchKundli: () => void;
}

const groupedTemplates = templateList.reduce((acc, t) => {
  if (!acc[t.group]) acc[t.group] = [];
  acc[t.group].push(t);
  return acc;
}, {} as Record<string, typeof templateList>);

const PreviewControls = ({ template, onTemplateChange, onDownload, onShare, onMatchKundli }: PreviewControlsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <Select value={template} onValueChange={(v) => onTemplateChange(v as TemplateType)}>
        <SelectTrigger className="w-[220px] text-xs">
          <SelectValue placeholder="Select template" />
        </SelectTrigger>
        <SelectContent className="max-h-[400px]">
          {Object.entries(groupedTemplates).map(([group, items]) => (
            <SelectGroup key={group}>
              <SelectLabel className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{group}</SelectLabel>
              {items.map(t => (
                <SelectItem key={t.value} value={t.value} className="text-xs">{t.label}</SelectItem>
              ))}
            </SelectGroup>
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
