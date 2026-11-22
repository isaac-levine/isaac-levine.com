"use client";
import { Blog } from "@/types/blog";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { format } from "date-fns";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="flex flex-col space-y-1">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            delay: Math.min(index * 0.04, 0.24),
            ease: "easeOut",
          }}
        >
          <Link
            href={`/blog/${blog.slug}`}
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-6
              rounded-lg transition-colors duration-200 px-4 py-3 no-underline"
            style={{ color: "var(--text-primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--card-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <h2
              className="min-w-0 text-base md:text-lg font-medium leading-snug"
              style={{
                color: "var(--text-primary)",
                viewTransitionName: `blog-title-${blog.slug}`,
              }}
            >
              {blog.title}
            </h2>

            <div className="flex shrink-0 items-center whitespace-nowrap">
              <span
                className="mt-1 sm:mt-0 text-sm tabular-nums transition-colors duration-200 [color:var(--text-secondary)] group-hover:[color:var(--text-primary)]"
              >
                {format(new Date(`${blog.date}T12:00:00Z`), "MMMM d, yyyy")}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
