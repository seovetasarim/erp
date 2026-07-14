import React from 'react';

type IconProps = { className?: string };

/** Stok / depo / kutu */
export const StockFeatureIcon = ({ className }: IconProps) => (
    <svg className={className} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="14" y="38" width="68" height="40" rx="8" fill="#F2A8E4" />
        <path d="M14 48h68" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M48 38v40" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 28h40l6 10H22l6-10Z" fill="#C45FB0" />
        <rect x="36" y="18" width="24" height="12" rx="4" fill="#9B3A8A" />
    </svg>
);

/** Cari / müşteri-tedarikçi */
export const CariFeatureIcon = ({ className }: IconProps) => (
    <svg className={className} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="36" cy="34" r="14" fill="#7B8CFF" />
        <circle cx="62" cy="38" r="11" fill="#A8B4FF" />
        <path d="M14 74c0-12.15 9.85-22 22-22s22 9.85 22 22" fill="#5A6AE8" />
        <path d="M48 74c1.2-9.4 8.4-16.8 17.6-18.6 7.2 2.8 12.4 9.8 12.4 18.6" fill="#8B9AFF" />
    </svg>
);

/** Fatura / belge */
export const InvoiceFeatureIcon = ({ className }: IconProps) => (
    <svg className={className} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M28 14h30l16 16v48a8 8 0 0 1-8 8H28a8 8 0 0 1-8-8V22a8 8 0 0 1 8-8Z" fill="#F5A0D4" />
        <path d="M58 14v14a4 4 0 0 0 4 4h14" fill="#E078B8" />
        <rect x="30" y="42" width="28" height="4" rx="2" fill="#fff" />
        <rect x="30" y="52" width="36" height="4" rx="2" fill="#fff" />
        <rect x="30" y="62" width="22" height="4" rx="2" fill="#fff" />
        <circle cx="64" cy="64" r="12" fill="#D94F9E" />
        <path d="M59 64h10M64 59v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

/** Kasa / nakit */
export const CashFeatureIcon = ({ className }: IconProps) => (
    <svg className={className} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="16" y="28" width="64" height="46" rx="10" fill="#6B9BFF" />
        <rect x="24" y="36" width="48" height="22" rx="6" fill="#EAF1FF" />
        <circle cx="48" cy="47" r="8" fill="#3D74E8" />
        <path d="M48 43v8M45 47h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="64" width="12" height="4" rx="2" fill="#fff" />
        <rect x="44" y="64" width="24" height="4" rx="2" fill="#B8D0FF" />
        <path d="M30 28V22a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v6" stroke="#3D74E8" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

/** Rapor / grafik */
export const ReportFeatureIcon = ({ className }: IconProps) => (
    <svg className={className} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="18" y="18" width="60" height="60" rx="12" fill="#F2A8E4" />
        <rect x="30" y="54" width="10" height="14" rx="3" fill="#fff" />
        <rect x="44" y="42" width="10" height="26" rx="3" fill="#fff" />
        <rect x="58" y="32" width="10" height="36" rx="3" fill="#C45FB0" />
        <path d="M30 36l12 8 12-14 10 6" stroke="#9B3A8A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="64" cy="30" r="4" fill="#9B3A8A" />
    </svg>
);
