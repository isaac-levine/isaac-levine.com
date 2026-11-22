"use client";
import React, { useState } from "react";
import { Link } from "next-view-transitions";
import { IconChevronDown } from "@tabler/icons-react";
import { Heading } from "./Heading";

export const HomeSection = ({
  title,
  href,
  linkLabel,
  children,
  more,
  moreCount = 0,
}: {
  title: string;
  href: string;
  linkLabel: string;
  children: React.ReactNode;
  more?: React.ReactNode;
  moreCount?: number;
}) => {
  const [open, setOpen] = useState(false);
  const canExpand = moreCount > 0 && Boolean(more);
  const linkClass =
    "text-sm no-underline transition-colors duration-200 [color:var(--text-secondary)] hover:[color:var(--text-primary)]";

  return (
    <section className="mt-12">
      <div
        className="flex items-baseline justify-between mb-4 pb-2 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <Heading as="h2" className="font-black text-xl md:text-2xl lg:text-2xl">
          {title}
        </Heading>
        <Link href={href} className={linkClass}>
          {linkLabel} →
        </Link>
      </div>
      {children}
      {canExpand && open && <div className="mt-6">{more}</div>}
      {canExpand && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mx-auto mt-6 flex items-center gap-1.5 rounded-full border bg-transparent px-4 py-2 text-sm font-medium transition-colors duration-200 hover:[background-color:var(--card-hover)]"
          style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
        >
          {open ? "Show less" : `Show ${moreCount} more`}
          <IconChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </section>
  );
};
