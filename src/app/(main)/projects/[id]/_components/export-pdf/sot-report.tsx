import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import { Document, Page, pdf, Text, View } from "@react-pdf/renderer";
import React from "react";

import type { Projects } from "@/lib/types/project";
import { styles } from "./sot-pdf-styles";

const abbreviateUnit = (unit: string) => {
    switch (unit) {
        case "square meter":
            return "sq.m";
        case "cubic meter":
            return "cu.m";
        case "kilogram":
            return "kg";
        default:
            return unit;
    }
};

const today = new Date();
const monthName = today.toLocaleString("default", { month: "long" });
const year = today.getFullYear();
const statusText = "S T A T U S   O  F   T E S T";

const MyDoc = ({ project }: { project: Projects }) => (
    <Document>
        <Page
            size="LETTER"
            style={styles.page}
        >
            <View style={styles.section}>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 15,
                        width: "100%",
                        flexDirection: "column",
                    }}
                >
                    <Text style={[styles.text, { marginBottom: 10 }]}>
                        Republic of the Philippines
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            { fontWeight: 700, marginBottom: 10 },
                        ]}
                    >
                        DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            { fontWeight: 700, marginBottom: 10 },
                        ]}
                    >
                        Iloilo City District Engineering Office
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 10,
                        width: "100%",
                        flexDirection: "column",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            fontWeight: 700,
                            marginBottom: 10,
                        }}
                    >
                        {statusText}
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            paddingVertical: 4,
                        }}
                    >
                        <Text style={[styles.text, {}]}>As of </Text>
                        <Text style={[styles.text, {}]}>{monthName}</Text>

                        <Text style={[styles.text, {}]}>, {year}</Text>
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: "flex-end" }}>
                    <View style={{ width: "25%", alignItems: "flex-start" }}>
                        <Text style={[styles.text]}>
                            Physical Accomplishment:{"                     "}%
                        </Text>
                    </View>
                </View>

                <View style={styles.contractContainer}>
                    {/* CONTRACT ID */}
                    <View style={styles.contractIdContainer}>
                        <Text style={[styles.text, { fontWeight: 700 }]}>
                            CONTRACT ID:{" "}
                        </Text>
                        <View
                            style={{
                                width: "82%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, {}]}>
                                {project.contractId ?? "N/A"}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                }}
                            />
                        </View>
                    </View>

                    {/* CONTRACT NAME */}
                    <View style={styles.contractNameContainer}>
                        <Text style={[styles.text, { fontWeight: 700 }]}>
                            CONTRACT NAME:{" "}
                        </Text>
                        <View
                            style={{
                                width: "82%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, {}]}>
                                {project.contractName ?? "N/A"}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                }}
                            />
                        </View>
                    </View>

                    {/* LOCATION */}
                    <View style={styles.locationContainer}>
                        <Text style={[styles.text, { fontWeight: 700 }]}>
                            LOCATION:{" "}
                        </Text>
                        <View
                            style={{
                                width: "82%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, {}]}>
                                {project.location ?? "N/A"}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.contractorContainer}>
                        <Text style={[styles.text, { fontWeight: 700 }]}>
                            CONTRACTOR:{" "}
                        </Text>
                        <View
                            style={{
                                width: "82%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, {}]}>
                                {project.contractor ?? "N/A"}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.tableContainer}>
                <Table>
                    {/* Header Row */}
                    <TH>
                        <TD
                            style={styles.tableHeaderPayItemNo}
                            weighting={0.07}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text>Pay</Text>
                                <Text>Item</Text>
                                <Text>No.</Text>
                            </View>
                        </TD>
                        <TD
                            style={styles.tableHeaderDescription}
                            weighting={0.25}
                        >
                            Description/Materials
                        </TD>
                        <TD
                            style={styles.tableHeaderContractQuantity}
                            weighting={0.08}
                        >
                            Contract Quantity
                        </TD>
                        <TD
                            style={styles.tableHeaderUnit}
                            weighting={0.08}
                        >
                            Unit
                        </TD>
                        <TD
                            style={styles.tableHeaderMinNumberTotalRequred}
                            weighting={0.26}
                        >
                            Min. # Total Required
                        </TD>

                        <TD
                            style={styles.tableHeaderNoOfTest}
                            weighting={0.176}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    flex: 1,
                                }}
                            >
                                <View
                                    style={{
                                        borderBottom: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "50%",
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 9, fontWeight: 700 }}
                                    >
                                        No. of Test
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        height: "50%",
                                    }}
                                >
                                    <View
                                        style={{
                                            borderRight: 1,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "50.5%",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 9,
                                                fontWeight: 700,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            On File
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "49.5%",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 9,
                                                fontWeight: 700,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            Balance
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TD>
                        <TD
                            style={styles.tableHeaderPercentOfWorkAccomplished}
                            weighting={0.12}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text>% of Work</Text>
                                <Text>Accomplished</Text>
                            </View>
                        </TD>
                    </TH>

                    {/* Data Rows */}
                    {project.projectWorkItem?.map((pjwi, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {pjwi.itemTest
                                .sort((a, b) =>
                                    a.testRequired.localeCompare(
                                        b.testRequired,
                                    ),
                                )
                                .map((cell, cellIndex) => (
                                    <TR key={`test-${rowIndex}-${cellIndex}`}>
                                        <TD
                                            style={styles.tdItemNo}
                                            weighting={0.07}
                                        >
                                            {cellIndex === 0 ? pjwi.itemNo : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdDescription}
                                            weighting={0.25}
                                        >
                                            {cellIndex === 0
                                                ? pjwi.description
                                                : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdContractQuantity}
                                            weighting={0.08}
                                        >
                                            {cellIndex === 0
                                                ? pjwi.quantity
                                                : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdUnit}
                                            weighting={0.08}
                                        >
                                            <Text
                                                style={{ textAlign: "center" }}
                                            >
                                                {cellIndex === 0
                                                    ? abbreviateUnit(pjwi.unit)
                                                    : ""}
                                            </Text>
                                        </TD>
                                        <TD
                                            style={
                                                styles.tdMinNumberTotalRequired
                                            }
                                            weighting={0.26}
                                        >
                                            {cell.testQuantity} -{" "}
                                            {cell.testRequired}
                                        </TD>
                                        <TD
                                            style={styles.tdOnFile}
                                            weighting={0.07}
                                        >
                                            {cell.testsOnFile}
                                        </TD>
                                        <TD
                                            style={styles.tdBalance}
                                            weighting={0.07}
                                        >
                                            {cell.balance}
                                        </TD>
                                        <TD
                                            style={
                                                styles.tdPercentOfWorkAccomplished
                                            }
                                            weighting={0.12}
                                        ></TD>
                                    </TR>
                                ))}

                            {/* Materials */}
                            {pjwi.materials?.map((material, matIndex) => (
                                <React.Fragment
                                    key={`mat-${rowIndex}-${matIndex}`}
                                >
                                    {material.materialTest
                                        .sort((a, b) =>
                                            a.testRequired.localeCompare(
                                                b.testRequired,
                                            ),
                                        )
                                        .map((matTest, mtIndex) => (
                                            <TR
                                                key={`mat-test-${rowIndex}-${matIndex}-${mtIndex}`}
                                            >
                                                <TD
                                                    style={styles.tdItemNo}
                                                    weighting={0.07}
                                                ></TD>
                                                <TD
                                                    style={styles.tdDescription}
                                                    weighting={0.25}
                                                >
                                                    {mtIndex === 0
                                                        ? material.name
                                                        : ""}
                                                </TD>
                                                <TD
                                                    style={
                                                        styles.tdContractQuantity
                                                    }
                                                    weighting={0.08}
                                                >
                                                    {mtIndex === 0
                                                        ? material.quantity
                                                        : ""}
                                                </TD>
                                                <TD
                                                    style={styles.tdUnit}
                                                    weighting={0.08}
                                                >
                                                    {mtIndex === 0
                                                        ? abbreviateUnit(
                                                              material.unit,
                                                          )
                                                        : ""}
                                                </TD>
                                                <TD
                                                    style={
                                                        styles.tdMinNumberTotalRequired
                                                    }
                                                    weighting={0.26}
                                                >
                                                    {material.quantity /
                                                        matTest.unitsPerTest <
                                                    1
                                                        ? Math.ceil(
                                                              material.quantity /
                                                                  matTest.unitsPerTest,
                                                          )
                                                        : Math.round(
                                                              material.quantity /
                                                                  matTest.unitsPerTest,
                                                          )}{" "}
                                                    - {matTest.testRequired}
                                                </TD>
                                                <TD
                                                    style={styles.tdOnFile}
                                                    weighting={0.07}
                                                >
                                                    {matTest.testsOnFile}
                                                </TD>
                                                <TD
                                                    style={styles.tdBalance}
                                                    weighting={0.07}
                                                >
                                                    {matTest.balance}
                                                </TD>
                                                <TD
                                                    style={
                                                        styles.tdPercentOfWorkAccomplished
                                                    }
                                                    weighting={0.12}
                                                ></TD>
                                            </TR>
                                        ))}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </Table>
            </View>
            <View
                style={{
                    width: "100%",
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        width: "50%",
                        marginTop: 30,
                    }}
                    wrap={false}
                >
                    <Text style={[styles.text, { marginBottom: 20 }]}>
                        Prepared By:
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            { fontWeight: 700, marginBottom: 15 },
                        ]}
                    >
                        {project.materialsEngineer}
                    </Text>

                    <Text style={[styles.text, { marginBottom: 5 }]}>
                        Materials Engineer
                    </Text>

                    <Text style={[styles.text, { marginBottom: 15 }]}>
                        DPWH
                    </Text>
                </View>
                <View
                    style={{
                        width: "50%",
                        marginTop: 30,
                    }}
                    wrap={false}
                >
                    <Text style={[styles.text, { marginBottom: 20 }]}>
                        Submitted By:
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            { fontWeight: 700, marginBottom: 15 },
                        ]}
                    ></Text>
                    <Text style={[styles.text, { marginBottom: 5 }]}>
                        Chief of QAS/QAHD/Project Manager
                    </Text>
                    <Text style={[styles.text, { marginBottom: 15 }]}>
                        DPWH
                    </Text>
                </View>
            </View>
        </Page>
    </Document>
);

const downloadSOT = async (project: Projects) => {
    const blob = await pdf(<MyDoc project={project} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${project.contractId}-SOT.pdf`;
    link.click();
    URL.revokeObjectURL(url);
};

export default downloadSOT;
