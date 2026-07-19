import Link from 'next/link';

type DijitalErpLogoProps = {
    href?: string;
    /** dark = açık zemin, light = koyu zemin */
    variant?: 'dark' | 'light';
    className?: string;
    /** header | offcanvas | footer */
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
};

/**
 * ERP programının kendi logosu (masaüstü panel / login ile aynı):
 * iki üçgenli mark (cyan + mavi) + DijitalERP yazısı
 */
const DijitalErpLogo = ({
    href = '/',
    variant = 'dark',
    className = '',
    size = 'md',
    onClick,
}: DijitalErpLogoProps) => {
    const fontSize = size === 'lg' ? '1.55rem' : size === 'sm' ? '1rem' : '1.2rem';
    const markHeight = size === 'lg' ? 32 : size === 'sm' ? 20 : 26;
    const markWidth = Math.round((markHeight * 39) / 32);
    const textColor = variant === 'light' ? '#FFFFFF' : '#141414';

    return (
        <Link
            href={href}
            onClick={onClick}
            aria-label="DijitalERP"
            className={`dijitalerp-logo dijitalerp-logo--${variant} ${className}`.trim()}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                lineHeight: 1,
            }}
        >
            <svg
                width={markWidth}
                height={markHeight}
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                style={{ flexShrink: 0, display: 'block' }}
            >
                <path d="M9.25098 12.9638L36.0982 32L38.9732 3.56842L9.25098 12.9638Z" fill="#00CAE3" />
                <path d="M16.7537 0L0 28.1475L31.8218 23.5148L16.7537 0Z" fill="#0F79F3" />
            </svg>
            <span
                style={{
                    fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
                    fontSize,
                    fontWeight: 700,
                    letterSpacing: '-0.045em',
                    lineHeight: 1,
                    color: textColor,
                    whiteSpace: 'nowrap',
                }}
            >
                DijitalERP
            </span>
        </Link>
    );
};

export default DijitalErpLogo;
