import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles } from 'lucide-react';

interface KundliMatchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const KundliMatchModal = ({ open, onOpenChange }: KundliMatchModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Sparkles size={20} className="text-primary" />
            Kundli Matching
          </DialogTitle>
          <DialogDescription>
            Enter the partner's birth details to check Kundli compatibility (Ashtakoota Matching).
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Partner's Name</Label>
              <Input placeholder="Full name" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Date of Birth</Label>
              <Input type="date" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Time of Birth</Label>
              <Input type="time" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-muted-foreground">Place of Birth</Label>
              <Input placeholder="City" />
            </div>
          </div>
          <div className="rounded-lg bg-muted p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Compatibility results will appear here after matching.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              (This is a placeholder — full Kundli API coming soon)
            </p>
          </div>
          <Button className="w-full gap-2">
            <Sparkles size={16} /> Check Compatibility
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KundliMatchModal;
