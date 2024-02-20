import Link from "next/link";
import { ReactNode } from "react";

type TProps = { children: ReactNode; href: string; isActive?: boolean };

const MenuItem = ({ children, href, isActive = false }: TProps) => {
  return (
    <div className={`${isActive ? "active" : ""}`}>
      <Link href={href} className="flex gap-3 p-3 mb-2">
        {children}
      </Link>
    </div>
  );
};

export default MenuItem;
