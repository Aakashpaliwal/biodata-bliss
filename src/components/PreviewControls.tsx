import { TemplateType } from '@/types/biodata';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Download, Link2, Sparkles } from 'lucide-react';

interface PreviewControlsProps {
  template: TemplateType;
  onTemplateChange: (t: TemplateType) => void;
  onDownload: () => void;
  onShare: () => void;
  onMatchKundli: () => void;
}

const PreviewControls = ({ template, onTemplateChange, onDownload, onShare, onMatchKundli }: PreviewControlsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <ToggleGroup
        type="single"
        value={template}
        onValueChange={(v) => v && onTemplateChange(v as TemplateType)}
        className="bg-muted rounded-lg p-0.5"
      >
        <ToggleGroupItem value="minimalist" className="text-xs px-3 py-1.5 rounded-md data-[state=on]:bg-card data-[state=on]:shadow-sm">
          Minimalist
        </ToggleGroupItem>
        <ToggleGroupItem value="traditional" className="text-xs px-3 py-1.5 rounded-md data-[state=on]:bg-card data-[state=on]:shadow-sm">
          Traditional
        </ToggleGroupItem>
        <ToggleGroupItem value="floral" className="text-xs px-3 py-1.5 rounded-md data-[state=on]:bg-card data-[state=on]:shadow-sm">
          Elegant Floral
        </ToggleGroupItem>
      </ToggleGroup>

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
