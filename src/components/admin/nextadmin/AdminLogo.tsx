import Image from "next/image";
import Link from "next/link";

type AdminLogoProps = {
  href?: string;
  onClick?: () => void;
};

export function AdminLogo({ href = "/admin", onClick }: AdminLogoProps) {
  const content = (
    <div className="relative h-8 w-[10.847rem]">
      <Image
        src="/admin-nextadmin/logos/main.svg"
        fill
        className="object-contain object-left dark:hidden"
        alt="DijitalERP"
        priority
      />
      <Image
        src="/admin-nextadmin/logos/dark.svg"
        fill
        className="hidden object-contain object-left dark:block"
        alt="DijitalERP"
        priority
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block py-2.5">
        {content}
      </Link>
    );
  }

  return <div className="inline-block py-2.5">{content}</div>;
}
