import { CheckCircle2, Zap, Shield, ScanBarcode } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type HeroBadge = { icon: LucideIcon; text: string };

export const defaultHeroBadges: HeroBadge[] = [
  { icon: CheckCircle2, text: 'Ücretsiz masaüstü sürümü' },
  { icon: ScanBarcode, text: 'Barkod okuyucu desteği' },
  { icon: Zap, text: 'İnternet gerektirmez' },
  { icon: Shield, text: 'Veriler bilgisayarınızda' },
];
