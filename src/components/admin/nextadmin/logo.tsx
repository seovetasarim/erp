import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        src="/admin-nextadmin/logos/main.svg"
        fill
        className="object-contain object-left dark:hidden"
        alt="NextAdmin"
        priority
      />
      <Image
        src="/admin-nextadmin/logos/dark.svg"
        fill
        className="hidden object-contain object-left dark:block"
        alt="NextAdmin"
        priority
      />
    </div>
  );
}
