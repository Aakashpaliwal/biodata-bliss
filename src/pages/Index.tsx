import { useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BiodataFormData, TemplateType, defaultBiodata } from '@/types/biodata';
import BiodataForm from '@/components/BiodataForm';
import BiodataPreview from '@/components/BiodataPreview';
import PreviewControls from '@/components/PreviewControls';
import KundliMatchModal from '@/components/KundliMatchModal';
import { Button } from '@/components/ui/button';
import { Eye, PenLine, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { toCanvas } from 'html-to-image';
import jsPDF from 'jspdf';

const Index = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTemplate = (searchParams.get('template') as TemplateType) || 'traditional';
  const [data, setData] = useState<BiodataFormData>(defaultBiodata);
  const [template, setTemplate] = useState<TemplateType>(initialTemplate);
  const [kundliOpen, setKundliOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'form' | 'preview'>('form');
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    const toastId = toast.loading('Generating PDF...');
    try {
      const wrapper = previewRef.current;

      // Target the actual constrained divs inside BiodataPreview
      const outerEl = wrapper.querySelector<HTMLDivElement>('.a4-ratio') ?? wrapper;
      const innerEl = outerEl.querySelector<HTMLDivElement>('.overflow-y-auto');

      // ── 1. Save & unlock outer (a4-ratio + overflow-hidden) ──
      const savedOuterAspect   = outerEl.style.aspectRatio;
      const savedOuterOverflow = outerEl.style.overflow;
      const savedOuterHeight   = outerEl.style.height;
      outerEl.style.aspectRatio = 'auto';
      outerEl.style.overflow    = 'visible';
      outerEl.style.height      = 'auto';

      // ── 2. Save & unlock inner scrollable div ──
      const savedInnerHeight    = innerEl?.style.height    ?? '';
      const savedInnerOverflow  = innerEl?.style.overflow  ?? '';
      const savedInnerMaxHeight = innerEl?.style.maxHeight ?? '';
      if (innerEl) {
        innerEl.style.height    = 'auto';
        innerEl.style.overflow  = 'visible';
        innerEl.style.maxHeight = 'none';
      }

      // ── 3. Two rAF ticks so the browser fully reflows ──
      await new Promise<void>(r => requestAnimationFrame(() => requestAnimationFrame(() => r())));

      const captureWidth  = outerEl.offsetWidth;
      const captureHeight = outerEl.scrollHeight;

      const canvas = await toCanvas(outerEl, {
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: captureWidth,
        height: captureHeight,
      });

      // ── 4. Restore styles ──
      outerEl.style.aspectRatio = savedOuterAspect;
      outerEl.style.overflow    = savedOuterOverflow;
      outerEl.style.height      = savedOuterHeight;
      if (innerEl) {
        innerEl.style.height    = savedInnerHeight;
        innerEl.style.overflow  = savedInnerOverflow;
        innerEl.style.maxHeight = savedInnerMaxHeight;
      }

      // ── 5. Build PDF (multi-page if content > one A4) ──
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf  = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();
      const imgH = (canvas.height * pdfW) / canvas.width;

      if (imgH <= pdfH) {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, imgH);
      } else {
        let offsetY = 0;
        let page = 0;
        while (offsetY < imgH) {
          if (page > 0) pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, -offsetY, pdfW, imgH);
          offsetY += pdfH;
          page++;
        }
      }

      pdf.save(`${data.name || 'biodata'}.pdf`);
      toast.success('PDF downloaded!', { id: toastId });
    } catch (err) {
      console.error('PDF generation error:', err);
      toast.error('Failed to generate PDF', { id: toastId });
    }
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
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-1.5 text-muted-foreground hover:text-foreground -ml-2"
            >
              <ArrowLeft size={15} /> Change Template
            </Button>
            <div className="w-px h-5 bg-border" />
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
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-primary font-medium">Step 2</span>
            <span>/</span>
            <span>Fill Details</span>
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
              <div className="w-full max-w-[480px]" ref={previewRef}>
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
