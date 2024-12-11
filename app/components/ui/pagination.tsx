// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
    
//     if (totalPages <= 7) {
//       return Array.from({ length: totalPages }, (_, i) => i + 1);
//     }

//     // Always show first page
//     pages.push(1);

//     if (currentPage > 3) {
//       pages.push('...');
//     }

//     // Show pages around current page
//     for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
//       pages.push(i);
//     }

//     if (currentPage < totalPages - 2) {
//       pages.push('...');
//     }

//     // Always show last page
//     if (totalPages > 1) {
//       pages.push(totalPages);
//     }

//     return pages;
//   };

//   return (
//     <div className="flex items-center justify-center space-x-2 mt-4">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="p-2 rounded border disabled:opacity-50 hover:bg-gray-50 disabled:hover:bg-transparent"
//       >
//         <ChevronLeft size={16} />
//       </button>
      
//       {getPageNumbers().map((page, index) => (
//         <button
//           key={index}
//           onClick={() => typeof page === 'number' ? onPageChange(page) : undefined}
//           className={`px-3 py-1 rounded ${
//             currentPage === page
//               ? 'bg-blue-500 text-white'
//               : page === '...'
//               ? 'cursor-default'
//               : 'border hover:bg-gray-50'
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="p-2 rounded border disabled:opacity-50 hover:bg-gray-50 disabled:hover:bg-transparent"
//       >
//         <ChevronRight size={16} />
//       </button>
//     </div>
//   );
// }


'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-end mt-4 items-center space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center px-4 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : undefined}
          disabled={typeof page === 'string'}
          className={`px-3 py-2 text-sm ${
            currentPage === page
              ? 'bg-blue-50 text-blue-600 font-semibold'
              : page === '...'
              ? 'text-gray-500 cursor-default'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center px-4 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}