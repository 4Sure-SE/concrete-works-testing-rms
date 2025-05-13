"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
    isDisabled?: boolean;
}

export default function CustomPagination({
    currentPage,
    paginate,
    totalPages,
    isDisabled = false,
}: CustomPaginationProps) {
    const maxVisiblePages = 4;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    // first page number to show based on the current page
    let startPage = Math.max(currentPage - halfVisible, 1);

    // last page number to show
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    // all page numbers to show
    const pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
    );

    const handlePrevious = () => {
        if (currentPage !== 1) paginate(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage !== totalPages) paginate(currentPage + 1);
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={handlePrevious}
                        isActive={currentPage !== 1}
                        className={
                            currentPage === 1 || isDisabled
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                        }
                    />
                </PaginationItem>
                {startPage > 1 && (
                    <>
                        <PaginationItem className="cursor-pointer">
                            <PaginationLink
                                onClick={() => paginate(1)}
                                className={
                                    isDisabled
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                            >
                                1
                            </PaginationLink>
                        </PaginationItem>
                        {startPage > 2 && <PaginationEllipsis />}
                    </>
                )}
                {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink
                            onClick={() => paginate(number)}
                            isActive={currentPage !== number}
                            className={
                                currentPage === number || isDisabled
                                    ? "pointer-events-none opacity-50"
                                    : "cursor-pointer"
                            }
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <PaginationEllipsis />}
                        <PaginationItem className="cursor-pointer">
                            <PaginationLink
                                onClick={() => paginate(totalPages)}
                                className={
                                    isDisabled
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                            >
                                {totalPages}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}
                <PaginationItem>
                    <PaginationNext
                        onClick={handleNext}
                        isActive={currentPage !== totalPages || !isDisabled}
                        className={
                            currentPage === totalPages || isDisabled
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
