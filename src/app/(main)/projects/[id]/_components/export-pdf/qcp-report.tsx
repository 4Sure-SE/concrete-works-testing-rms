import type { Projects } from "@/lib/types/project";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import { Document, Page, pdf, Text, View } from "@react-pdf/renderer";
import React from "react";
import { styles } from "./qcp-pdf-styles";

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
                        marginBottom: 30,
                        width: "100%",
                    }}
                >
                    <Text style={{ fontSize: 10, fontWeight: 700 }}>
                        QUALITY CONTROL PROGRAM
                    </Text>
                </View>
                <View style={styles.contractContainer}>
                    {/* CONTRACT ID */}
                    <View style={styles.contractIdContainer}>
                        <Text style={[styles.text, { fontWeight: 700 }]}>
                            CONTRACT ID:{" "}
                        </Text>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, { marginLeft: 6 }]}>
                                {project.contractId ?? "N/A"}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                    marginLeft: 6,
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
                                width: "90%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, { marginLeft: 4 }]}>
                                {project.contractName ?? "N/A"}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                    marginLeft: 4,
                                }}
                            />
                        </View>
                    </View>

                    {/* LIMITS */}
                    <View style={styles.limitsContainer}>
                        <Text style={[styles.text, { fontWeight: 700 }]}>
                            LIMITS:{" "}
                        </Text>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, { marginLeft: 4 }]}>
                                {project.limits === "" ? "N/A" : project.limits}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                    marginLeft: 4,
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
                                width: "75%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, { marginLeft: 4 }]}>
                                {project.location === ""
                                    ? "N/A"
                                    : project.location}
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                    marginLeft: 4,
                                }}
                            />
                        </View>
                    </View>

                    {/* APPROPRIATION/CONTRACT COST */}
                    <View style={styles.contractCostContainer}>
                        <Text style={[styles.text, { fontWeight: "700" }]}>
                            APPROPRIATION/CONTRACT COST:
                        </Text>
                        <View
                            style={{
                                width: "65%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, { marginLeft: 4 }]}>
                                {project.contractCost === 0
                                    ? "N/A"
                                    : `PHP ${new Intl.NumberFormat("en-PH", {
                                          minimumFractionDigits: 0,
                                          maximumFractionDigits: 2,
                                      }).format(
                                          Number(
                                              project.contractCost.toFixed(2),
                                          ),
                                      )}`}
                            </Text>

                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",
                                    marginLeft: 4,
                                }}
                            />
                        </View>
                    </View>

                    {/* SOURCE */}
                    <View style={styles.sourceContainer}>
                        <Text
                            style={[
                                styles.text,
                                {
                                    marginLeft: 7,
                                    fontWeight: 700,
                                },
                            ]}
                        >
                            SOURCE:{" "}
                        </Text>
                        <View
                            style={{
                                width: "75%",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Text style={[styles.text, { marginLeft: 4 }]}>
                                {/* {project.source ?? "N/A"} */}
                                N/A
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#000",

                                    marginLeft: 4,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            paddingVertical: 4,
                        }}
                    >
                        <View style={{ width: "12%" }}></View>
                        <View style={{ width: "65%" }}>
                            <Text style={[styles.text, { fontWeight: 700 }]}>
                                A. Test TO BE PERFORMED:
                            </Text>
                        </View>
                        <View
                            style={{
                                width: "23%",
                                marginLeft: 44,
                            }}
                        >
                            <Text style={styles.text}>
                                <Text style={{ fontWeight: "700" }}>
                                    DATE:{" "}
                                </Text>
                                {new Date().toLocaleDateString()}
                            </Text>
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
                            weighting={0.1}
                        >
                            Pay Item {"  "}No.
                        </TD>
                        <TD
                            style={styles.tableHeaderDescription}
                            weighting={0.4}
                        >
                            Description
                        </TD>
                        <TD
                            style={styles.tableHeaderUnit}
                            weighting={0.1}
                        >
                            UNIT
                        </TD>
                        <TD
                            style={styles.tableHeaderQuantity}
                            weighting={0.1}
                        >
                            QUANTITY
                        </TD>
                        <TD
                            style={styles.tableHeaderNoOfTest}
                            weighting={0.3}
                        >
                            No. OF TEST (MIN.)
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
                                            weighting={0.1}
                                        >
                                            {cellIndex === 0 ? pjwi.itemNo : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdDescription}
                                            weighting={0.4}
                                        >
                                            {cellIndex === 0
                                                ? pjwi.description
                                                : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdUnit}
                                            weighting={0.1}
                                        >
                                            {cellIndex === 0
                                                ? abbreviateUnit(pjwi.unit)
                                                : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdQuantity}
                                            weighting={0.1}
                                        >
                                            {cellIndex === 0
                                                ? pjwi.quantity
                                                : ""}
                                        </TD>
                                        <TD
                                            style={styles.tdTestQuantity}
                                            weighting={0.3}
                                        >
                                            {cell.testQuantity} -{" "}
                                            {cell.testRequired}
                                        </TD>
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
                                                    weighting={0.1}
                                                ></TD>
                                                <TD
                                                    style={styles.tdDescription}
                                                    weighting={0.4}
                                                >
                                                    {mtIndex === 0
                                                        ? material.name
                                                        : ""}
                                                </TD>
                                                <TD
                                                    style={styles.tdUnit}
                                                    weighting={0.1}
                                                >
                                                    {mtIndex === 0
                                                        ? abbreviateUnit(
                                                              material.unit,
                                                          )
                                                        : ""}
                                                </TD>
                                                <TD
                                                    style={styles.tdQuantity}
                                                    weighting={0.1}
                                                >
                                                    {mtIndex === 0
                                                        ? material.quantity
                                                        : ""}
                                                </TD>
                                                <TD
                                                    style={
                                                        styles.tdTestQuantity
                                                    }
                                                    weighting={0.3}
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
                    marginTop: 30,
                }}
                wrap={false}
            >
                <Text style={[styles.text, { marginBottom: 20 }]}>
                    Prepared By:
                </Text>
                <Text
                    style={[styles.text, { fontWeight: 700, marginBottom: 15 }]}
                >
                    {project.materialsEngineer}
                </Text>

                <Text style={[styles.text, { marginBottom: 5 }]}>
                    Materials Engineer
                </Text>

                <Text style={[styles.text, { marginBottom: 15 }]}>DPWH</Text>
            </View>
        </Page>
    </Document>
);

const downloadQCP = async (project: Projects) => {
    const blob = await pdf(<MyDoc project={project} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${project.contractId}-QCP.pdf`;
    link.click();
    URL.revokeObjectURL(url);
};

export default downloadQCP;
