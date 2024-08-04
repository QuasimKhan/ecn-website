import { Breadcrumbs } from "@material-tailwind/react";

export function BreadcrumbsWithIcon({ items }) {
  return (
    <Breadcrumbs className="bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 rounded-md">
      <a href="/" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 dark:text-gray-100 dark:hover:text-blue-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>
      {items.map((item, index) => (
        <a 
          href={item.link} 
          className={`${
            index !== items.length - 1 
              ? "opacity-60 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400" 
              : "dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
          }`} 
          key={index}
        >
          {item.name}
        </a>
      ))}
    </Breadcrumbs>
  );
}
