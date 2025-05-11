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
}

export default function CustomPagination(props: CustomPaginationProps) {
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(props.currentPage - halfVisible, 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, props.totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
    );

    const handlePrevious = () => {
        if (props.currentPage !== 1) props.paginate(props.currentPage - 1);
    };

    const handleNext = () => {
        if (props.currentPage !== props.totalPages)
            props.paginate(props.currentPage + 1);
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={handlePrevious}
                        isActive={props.currentPage !== 1}
                        className={
                            props.currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                        }
                    />
                </PaginationItem>
                {startPage > 1 && (
                    <>
                        <PaginationItem className="cursor-pointer">
                            <PaginationLink onClick={() => props.paginate(1)}>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        {startPage > 2 && <PaginationEllipsis />}
                    </>
                )}
                {pageNumbers.map((number) => (
                    <PaginationItem
                        key={number}
                        className="cursor-pointer"
                    >
                        <PaginationLink
                            onClick={() => props.paginate(number)}
                            isActive={props.currentPage === number}
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {endPage < props.totalPages && (
                    <>
                        {endPage < props.totalPages - 1 && (
                            <PaginationEllipsis />
                        )}
                        <PaginationItem className="cursor-pointer">
                            <PaginationLink
                                onClick={() => props.paginate(props.totalPages)}
                            >
                                {props.totalPages}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}
                <PaginationItem>
                    <PaginationNext
                        onClick={handleNext}
                        isActive={props.currentPage !== props.totalPages}
                        className={
                            props.currentPage === props.totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
