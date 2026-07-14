import Link from 'next/link';

type DijitalErpLogoProps = {
    href?: string;
    /** dark = açık zemin, light = koyu zemin */
    variant?: 'dark' | 'light';
    className?: string;
    /** header | offcanvas | footer */
    size?: 'sm' | 'md' | 'lg';
};

/**
 * ERP programının kendi logosu (splash / login / hakkında):
 * DijitalERP + lime nokta (#A0FF27)
 */
const DijitalErpLogo = ({
    href = '/',
    variant = 'dark',
    className = '',
    size = 'md',
}: DijitalErpLogoProps) => {
    const fontSize = size === 'lg' ? '1.55rem' : size === 'sm' ? '1rem' : '1.2rem';
    const textColor = variant === 'light' ? '#FFFFFF' : '#141414';

    return (
        <Link
            href={href}
            aria-label="DijitalERP"
            className={`dijitalerp-logo dijitalerp-logo--${variant} ${className}`.trim()}
            style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                textDecoration: 'none',
                lineHeight: 1,
            }}
        >
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
                <em
                    style={{
                        fontStyle: 'normal',
                        color: '#A0FF27',
                        marginLeft: '1px',
                    }}
                >
                    .
                </em>
            </span>
        </Link>
    );
};

export default DijitalErpLogo;
