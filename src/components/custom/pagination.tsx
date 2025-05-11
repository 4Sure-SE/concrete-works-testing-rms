"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    // Always show pagination, even with just one page
    const effectiveTotalPages = Math.max(totalPages, 1);

    // Calculate which page numbers to show (max 5 pages)
    const getPageNumbers = () => {
        const maxPagesToShow = 5;

        if (effectiveTotalPages <= maxPagesToShow) {
            // Show all pages if total is less than max
            return Array.from({ length: effectiveTotalPages }, (_, i) => i + 1);
        }

        // Calculate start and end page numbers
        let startPage = Math.max(currentPage - 2, 1);
        let endPage = startPage + maxPagesToShow - 1;

        // Adjust if end page exceeds total pages
        if (endPage > effectiveTotalPages) {
            endPage = effectiveTotalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        return Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i,
        );
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="fixed right-0 bottom-4 left-0">
            <div className="flex items-center justify-between px-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="h-8 w-8"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center space-x-1">
                    {pageNumbers.map((page) => (
                        <Button
                            key={page}
                            variant={
                                currentPage === page ? "outline" : "outline"
                            }
                            size="icon"
                            onClick={() => onPageChange(page)}
                            aria-label={`Page ${page}`}
                            aria-current={
                                currentPage === page ? "page" : undefined
                            }
                        >
                            {page}
                        </Button>
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === effectiveTotalPages}
                    aria-label="Next page"
                    className="h-8 w-8"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
