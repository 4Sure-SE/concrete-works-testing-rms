import type { Projects } from "@/lib/types/project";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import {
    Document,
    Page,
    pdf,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
    page: { padding: 30 },
    text: { fontSize: 11 },
    section: {
        margin: 10,
        padding: 10,
        display: "flex",
        alignItems: "flex-start",
    },

    tableContainer: {
        paddingHorizontal: 20,
        // flexWrap: "wrap",
        width: "100%",
    },

    tableHeaderText: {
        fontSize: 10,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 5,
    },

    tableHeaderPayItemNo: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tableHeaderDescription: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tableHeaderUnit: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tableHeaderQuantity: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tableHeaderNoOfTest: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },

    tdItemNo: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdDescription: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdUnit: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdQuantity: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdTestQuantity: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },

    contractContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    limitsContainer: {
        width: "75%",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingVertical: 4,
        paddingRight: 10,
    },

    locationContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingVertical: 4,
    },

    contactCostContainer: {
        width: "75%",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingVertical: 4,
        paddingRight: 10,
    },

    sourceContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingVertical: 4,
    },
});

const abbreviateUnit = (unit: string) => {
    switch (unit) {
        case "square meter":
            return "m²";
        case "cubic meter":
            return "m³";
        case "kilogram":
            return "kg";
        default:
            return unit;
    }
};

const MyDoc = (project: Projects) => (
    <Document>
        <Page
            size="A4"
            style={styles.page}
        >
            <View style={styles.section}>
                <Text style={styles.text}>Contract Id:</Text>
                <Text style={styles.text}>Contract Name:</Text>
                <View style={styles.contractContainer}>
                    <View style={styles.limitsContainer}>
                        <Text style={styles.text}>LIMITS:</Text>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: "#000",
                                marginLeft: 4,
                            }}
                        />
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.text}>LOCATION:</Text>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: "#000",
                                marginLeft: 4,
                            }}
                        />
                    </View>
                    <View style={styles.contactCostContainer}>
                        <Text style={styles.text}>
                            APPROPRIATION/CONTRACT COST:
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: "#000",
                                marginLeft: 4,
                            }}
                        />
                    </View>
                    <View style={styles.sourceContainer}>
                        <Text style={styles.text}>SOURCE:</Text>
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: "#000",
                                marginLeft: 4,
                            }}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.text}>A. Test TO BE PERFORMED:</Text>
                    <Text style={styles.text}>Date:</Text>
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
                            Unit
                        </TD>
                        <TD
                            style={styles.tableHeaderQuantity}
                            weighting={0.1}
                        >
                            Quantity
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
                            {pjwi.itemTest.map((cell, cellIndex) => (
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
                                        {cellIndex === 0 ? pjwi.quantity : ""}
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
                                    {material.materialTest.map(
                                        (matTest, mtIndex) => (
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
                                        ),
                                    )}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </Table>
            </View>
        </Page>
    </Document>
);

const downloadQCP = async (project: Projects) => {
    const blob = await pdf(<MyDoc {...project} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf";
    link.click();
    URL.revokeObjectURL(url);
};

export default downloadQCP;
