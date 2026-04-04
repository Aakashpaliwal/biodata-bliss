import { useState } from 'react';
import { BiodataFormData, TemplateType, defaultBiodata } from '@/types/biodata';
import BiodataForm from '@/components/BiodataForm';
import BiodataPreview from '@/components/BiodataPreview';
import PreviewControls from '@/components/PreviewControls';
import KundliMatchModal from '@/components/KundliMatchModal';
import { Button } from '@/components/ui/button';
import { Eye, PenLine } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [data, setData] = useState<BiodataFormData>(defaultBiodata);
  const [template, setTemplate] = useState<TemplateType>('traditional');
  const [kundliOpen, setKundliOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'form' | 'preview'>('form');

  const handleDownload = () => {
    toast.info('PDF download feature coming soon!', {
      description: 'This will generate and download your biodata as a PDF.',
    });
  };

  const handleShare = () => {
    toast.info('Share link copied!', {
      description: 'Shareable link generation coming soon.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Pane — Builder */}
          <div className={`lg:w-[420px] shrink-0 ${mobileView === 'preview' ? 'hidden lg:block' : ''}`}>
            <div className="sticky top-20">
              <h2 className="text-sm font-semibold text-muted-foreground mb-3">Fill Your Details</h2>
              <div className="max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin pr-1">
                <BiodataForm data={data} onChange={setData} />
              </div>
            </div>
          </div>

          {/* Right Pane — Preview */}
          <div className={`flex-1 min-w-0 ${mobileView === 'form' ? 'hidden lg:block' : ''}`}>
            <PreviewControls
              template={template}
              onTemplateChange={setTemplate}
              onDownload={handleDownload}
              onShare={handleShare}
              onMatchKundli={() => setKundliOpen(true)}
            />
            <div className="flex justify-center">
              <div className="w-full max-w-[480px]">
                <BiodataPreview data={data} template={template} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile toggle button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-40">
        <Button
          onClick={() => setMobileView(mobileView === 'form' ? 'preview' : 'form')}
          className="rounded-full shadow-lg gap-2 px-6"
          size="lg"
        >
          {mobileView === 'form' ? (
            <><Eye size={18} /> View Preview</>
          ) : (
            <><PenLine size={18} /> Edit Details</>
          )}
        </Button>
      </div>

      <KundliMatchModal open={kundliOpen} onOpenChange={setKundliOpen} />
    </div>
  );
};

export default Index;
