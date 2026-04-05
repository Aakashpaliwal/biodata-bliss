import { useState } from 'react';
import * as ashtakoot from 'ashtakoot';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Sparkles, RefreshCw, Heart } from 'lucide-react';

interface KundliMatchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RASHIS = [
  { id: 1, name: 'Mesh (Aries)' },
  { id: 2, name: 'Vrishabh (Taurus)' },
  { id: 3, name: 'Mithun (Gemini)' },
  { id: 4, name: 'Kark (Cancer)' },
  { id: 5, name: 'Simha (Leo)' },
  { id: 6, name: 'Kanya (Virgo)' },
  { id: 7, name: 'Tula (Libra)' },
  { id: 8, name: 'Vrishchik (Scorpio)' },
  { id: 9, name: 'Dhanu (Sagittarius)' },
  { id: 10, name: 'Makar (Capricorn)' },
  { id: 11, name: 'Kumbh (Aquarius)' },
  { id: 12, name: 'Meen (Pisces)' },
];

const NAKSHATRAS = [
  { id: 1, name: 'Ashwini' },
  { id: 2, name: 'Bharani' },
  { id: 3, name: 'Krittika' },
  { id: 4, name: 'Rohini' },
  { id: 5, name: 'Mrigashira' },
  { id: 6, name: 'Ardra' },
  { id: 7, name: 'Punarvasu' },
  { id: 8, name: 'Pushya' },
  { id: 9, name: 'Ashlesha' },
  { id: 10, name: 'Magha' },
  { id: 11, name: 'Purva Phalguni' },
  { id: 12, name: 'Uttara Phalguni' },
  { id: 13, name: 'Hasta' },
  { id: 14, name: 'Chitra' },
  { id: 15, name: 'Swati' },
  { id: 16, name: 'Vishakha' },
  { id: 17, name: 'Anuradha' },
  { id: 18, name: 'Jyeshtha' },
  { id: 19, name: 'Mula' },
  { id: 20, name: 'Purva Ashadha' },
  { id: 21, name: 'Uttara Ashadha' },
  { id: 22, name: 'Shravana' },
  { id: 23, name: 'Dhanishtha' },
  { id: 24, name: 'Shatabhisha' },
  { id: 25, name: 'Purva Bhadrapada' },
  { id: 26, name: 'Uttara Bhadrapada' },
  { id: 27, name: 'Revati' },
];

interface FormState {
  boyRashi: string;
  boyNakshatra: string;
  girlRashi: string;
  girlNakshatra: string;
}

interface ResultState {
  total: number;
  details: Record<string, number>;
}

const KundliMatchModal = ({ open, onOpenChange }: KundliMatchModalProps) => {
  const [form, setForm] = useState<FormState>({
    boyRashi: '',
    boyNakshatra: '',
    girlRashi: '',
    girlNakshatra: '',
  });
  const [result, setResult] = useState<ResultState | null>(null);

  const isFormComplete =
    form.boyRashi && form.boyNakshatra && form.girlRashi && form.girlNakshatra;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const boyNakshatraId = parseInt(form.boyNakshatra, 10);
    const boyRashiId = parseInt(form.boyRashi, 10);
    const girlNakshatraId = parseInt(form.girlNakshatra, 10);
    const girlRashiId = parseInt(form.girlRashi, 10);

    const points = ashtakoot.getGunMilanPoints(
      { nakshatra: girlNakshatraId, moonsign: girlRashiId },
      { nakshatra: boyNakshatraId, moonsign: boyRashiId }
    );

    const total =
      typeof points === 'number'
        ? points
        : typeof points === 'object' && points !== null
        ? Object.values(points as Record<string, number>).reduce((a, b) => a + b, 0)
        : 0;

    const details =
      typeof points === 'object' && points !== null && typeof points !== 'number'
        ? (points as Record<string, number>)
        : {};

    setResult({ total: Math.round(total * 10) / 10, details });
  };

  const handleRecalculate = () => {
    setResult(null);
    setForm({ boyRashi: '', boyNakshatra: '', girlRashi: '', girlNakshatra: '' });
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setResult(null);
      setForm({ boyRashi: '', boyNakshatra: '', girlRashi: '', girlNakshatra: '' });
    }
    onOpenChange(open);
  };

  const isCompatible = result !== null && result.total >= 18;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <Sparkles size={20} className="text-primary" />
            Kundli Matching
          </DialogTitle>
          <DialogDescription>
            Select Rashi and Nakshatra for both partners to calculate Ashtakoota compatibility.
          </DialogDescription>
        </DialogHeader>

        {result === null ? (
          <form onSubmit={handleCheck} className="space-y-5 pt-2">
            {/* Boy's Details */}
            <div className="rounded-lg border border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                Boy's Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Rashi (Moon Sign)</Label>
                  <Select
                    value={form.boyRashi}
                    onValueChange={(v) => setForm((f) => ({ ...f, boyRashi: v }))}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select Rashi" />
                    </SelectTrigger>
                    <SelectContent>
                      {RASHIS.map((r) => (
                        <SelectItem key={r.id} value={String(r.id)}>
                          {r.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Nakshatra</Label>
                  <Select
                    value={form.boyNakshatra}
                    onValueChange={(v) => setForm((f) => ({ ...f, boyNakshatra: v }))}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select Nakshatra" />
                    </SelectTrigger>
                    <SelectContent>
                      {NAKSHATRAS.map((n) => (
                        <SelectItem key={n.id} value={String(n.id)}>
                          {n.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Girl's Details */}
            <div className="rounded-lg border border-pink-200 bg-pink-50/50 dark:border-pink-900 dark:bg-pink-950/20 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-pink-700 dark:text-pink-400">
                Girl's Details
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Rashi (Moon Sign)</Label>
                  <Select
                    value={form.girlRashi}
                    onValueChange={(v) => setForm((f) => ({ ...f, girlRashi: v }))}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select Rashi" />
                    </SelectTrigger>
                    <SelectContent>
                      {RASHIS.map((r) => (
                        <SelectItem key={r.id} value={String(r.id)}>
                          {r.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs text-muted-foreground">Nakshatra</Label>
                  <Select
                    value={form.girlNakshatra}
                    onValueChange={(v) => setForm((f) => ({ ...f, girlNakshatra: v }))}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder="Select Nakshatra" />
                    </SelectTrigger>
                    <SelectContent>
                      {NAKSHATRAS.map((n) => (
                        <SelectItem key={n.id} value={String(n.id)}>
                          {n.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full gap-2" disabled={!isFormComplete}>
              <Sparkles size={16} /> Check Compatibility
            </Button>
          </form>
        ) : (
          <div className="space-y-5 pt-2">
            {/* Score display */}
            <div className="flex flex-col items-center gap-3 py-4">
              <div
                className={`flex h-28 w-28 items-center justify-center rounded-full border-4 shadow-lg ${
                  isCompatible
                    ? 'border-green-400 bg-green-50 dark:bg-green-950/30'
                    : 'border-yellow-400 bg-yellow-50 dark:bg-yellow-950/30'
                }`}
              >
                <div className="text-center">
                  <p
                    className={`text-3xl font-bold leading-none ${
                      isCompatible ? 'text-green-600' : 'text-yellow-600'
                    }`}
                  >
                    {result.total}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">out of 36</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Heart
                  size={16}
                  className={isCompatible ? 'text-green-500 fill-green-500' : 'text-yellow-500'}
                />
                <Badge
                  className={
                    isCompatible
                      ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/40 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900/40 dark:text-yellow-300'
                  }
                  variant="outline"
                >
                  {isCompatible ? 'Compatible' : 'Low Compatibility'}
                </Badge>
              </div>

              <p className="text-center text-sm text-muted-foreground max-w-xs">
                {isCompatible
                  ? 'Great news! The stars align well for this union.'
                  : 'The compatibility score is low. Consider consulting a Jyotishi.'}
              </p>
            </div>

            {/* Breakdown table */}
            {Object.keys(result.details).length > 0 && (
              <div className="rounded-lg border divide-y text-sm">
                {Object.entries(result.details).map(([koot, pts]) => (
                  <div key={koot} className="flex items-center justify-between px-3 py-2">
                    <span className="capitalize text-muted-foreground">{koot}</span>
                    <span className="font-medium">{pts}</span>
                  </div>
                ))}
              </div>
            )}

            <Button variant="outline" className="w-full gap-2" onClick={handleRecalculate}>
              <RefreshCw size={16} /> Recalculate
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default KundliMatchModal;
