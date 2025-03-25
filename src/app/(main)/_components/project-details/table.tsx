import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Minus, Plus } from "lucide-react";
import React from "react";
import type Project from "./interface";

export default function ProjectDetailsTable({
    projects,
}: {
    projects: Project[];
}) {
    const TestCounter = ({ value }: { value: number }) => {
        return (
            <div className="flex items-center justify-center gap-2 py-2 sm:gap-3">
                <button className="rounded-sm bg-red-500 px-0.5 py-0.5 text-white hover:bg-red-600">
                    <Minus />
                </button>
                <div className="mx-1 inline-block rounded-sm border border-gray-200 bg-white px-3.5 py-1">
                    {value}
                </div>
                <button className="rounded-sm bg-green-500 px-0.5 py-0.5 text-white hover:bg-green-600">
                    <Plus />
                </button>
            </div>
        );
    };

    const TestStatus = ({
        testsOnFile,
        balance,
    }: {
        testsOnFile: number;
        balance: number;
    }) => {
        return (
            <div className="">
                {balance === 0 ? (
                    <Badge
                        variant="default"
                        className="bg-green-50 px-5 py-1 text-green-700"
                    >
                        COMPLETE
                    </Badge>
                ) : testsOnFile === 0 ? (
                    <Badge
                        variant="default"
                        className="bg-red-200 px-2.5 py-1 text-red-600"
                    >
                        NOT STARTED
                    </Badge>
                ) : (
                    <Badge
                        variant="default"
                        className="bg-yellow-100 px-6 py-1 text-amber-600"
                    >
                        ONGOING
                    </Badge>
                )}
            </div>
        );
    };
    return (
        <div className="overflow-y-auto p-8">
            <Table className="border border-gray-200">
                <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead className="text-center">Item No.</TableHead>
                        <TableHead className="text-center">
                            Description/Materials
                        </TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-center">Unit</TableHead>
                        <TableHead className="text-center">
                            Tests Required
                        </TableHead>
                        <TableHead className="text-center">
                            No. of Test On File
                        </TableHead>
                        <TableHead className="text-center">Balance</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className="text-center">
                    {projects.map((project) => (
                        <React.Fragment key={project.id}>
                            {project.projectDetails.map((projectDetail) => (
                                <TableRow key={projectDetail.itemId}>
                                    <TableCell>
                                        {projectDetail.itemNo}
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            <li className="py-3.5 align-top">
                                                {projectDetail.description}
                                            </li>
                                            {projectDetail.materials.map(
                                                (material) => (
                                                    <li
                                                        key={material.id}
                                                        className="py-3.5"
                                                    >
                                                        {material.name}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            <li className="py-3.5">
                                                {projectDetail.quantity}
                                            </li>
                                            {projectDetail.materials.map(
                                                (material) => (
                                                    <li
                                                        key={material.id}
                                                        className="py-3.5"
                                                    >
                                                        {material.quantity}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            {projectDetail.itemTest.map(
                                                (test) => (
                                                    <li
                                                        className="py-3.5"
                                                        key={test.testId}
                                                    >
                                                        {test.unit}
                                                    </li>
                                                ),
                                            )}
                                            {projectDetail.materials.flatMap(
                                                (material) =>
                                                    material.materialTest.map(
                                                        (test) => (
                                                            <li
                                                                key={
                                                                    test.testId
                                                                }
                                                                className="py-3.5"
                                                            >
                                                                {test.unit}
                                                            </li>
                                                        ),
                                                    ),
                                            )}
                                        </ul>
                                    </TableCell>
                                    <TableCell>
                                        <ul className="scale-90 text-xs sm:scale-90 sm:text-xs md:scale-90 md:text-xs lg:scale-100 lg:text-sm">
                                            {projectDetail.itemTest.map(
                                                (test) => (
                                                    <li
                                                        className="py-2 sm:py-3.5"
                                                        key={test.testId}
                                                    >
                                                        {test.testRequired}
                                                    </li>
                                                ),
                                            )}
                                            {projectDetail.materials.flatMap(
                                                (material) =>
                                                    material.materialTest.map(
                                                        (test) => (
                                                            <li
                                                                key={
                                                                    test.testId
                                                                }
                                                                className="py-2 sm:py-3.5"
                                                            >
                                                                {
                                                                    test.testRequired
                                                                }
                                                            </li>
                                                        ),
                                                    ),
                                            )}
                                        </ul>
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            {projectDetail.itemTest.map(
                                                (test) => (
                                                    <TestCounter
                                                        key={test.testId}
                                                        value={test.testsOnFile}
                                                    />
                                                ),
                                            )}
                                            {projectDetail.materials.flatMap(
                                                (material) =>
                                                    material.materialTest.map(
                                                        (test) => (
                                                            <li
                                                                key={
                                                                    test.testId
                                                                }
                                                            >
                                                                <TestCounter
                                                                    value={
                                                                        test.testsOnFile
                                                                    }
                                                                />
                                                            </li>
                                                        ),
                                                    ),
                                            )}
                                        </ul>
                                    </TableCell>
                                    <TableCell>
                                        {projectDetail.itemTest.map((test) => (
                                            <div
                                                className="py-3.5"
                                                key={test.testId}
                                            >
                                                {test.balance}
                                            </div>
                                        ))}
                                        <ul>
                                            {projectDetail.materials.flatMap(
                                                (material) =>
                                                    material.materialTest.map(
                                                        (test) => (
                                                            <li
                                                                key={
                                                                    test.testId
                                                                }
                                                                className="py-3.5"
                                                            >
                                                                {test.balance}
                                                            </li>
                                                        ),
                                                    ),
                                            )}
                                        </ul>
                                    </TableCell>
                                    <TableCell>
                                        <ul>
                                            {projectDetail.itemTest.map(
                                                (test) => (
                                                    <TestStatus
                                                        key={test.testId}
                                                        testsOnFile={
                                                            test.testsOnFile
                                                        }
                                                        balance={test.balance}
                                                    />
                                                ),
                                            )}
                                            {projectDetail.materials.flatMap(
                                                (material) =>
                                                    material.materialTest.map(
                                                        (test) => (
                                                            <li
                                                                key={
                                                                    test.testId
                                                                }
                                                                className="mt-5.5"
                                                            >
                                                                <TestStatus
                                                                    testsOnFile={
                                                                        test.testsOnFile
                                                                    }
                                                                    balance={
                                                                        test.balance
                                                                    }
                                                                />
                                                            </li>
                                                        ),
                                                    ),
                                            )}
                                        </ul>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
