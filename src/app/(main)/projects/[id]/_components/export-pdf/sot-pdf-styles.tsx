import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: { padding: 35 },
    text: { fontSize: 8 },
    section: {
        display: "flex",
        alignItems: "flex-start",
    },

    tableContainer: {
        width: "100%",
        marginTop: 15,
    },

    tableHeaderPayItemNo: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tableHeaderDescription: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tableHeaderContractQuantity: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tableHeaderUnit: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },

    tableHeaderNoOfTest: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "auto",
    },

    tableHeaderMinNumberTotalRequred: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tableHeaderTestPerformed: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },

    tableHeaderOnFile: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tableHeaderBalance: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tableHeaderPercentOfWorkAccomplished: {
        fontSize: 8,
        fontWeight: 700,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },

    tdItemNo: {
        fontSize: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tdDescription: {
        fontSize: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tdContractQuantity: {
        fontSize: 8,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tdUnit: {
        fontSize: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textAlignVertical: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
        flexDirection: "column",
    },

    tdMinNumberTotalRequired: {
        fontSize: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tdOnFile: {
        fontSize: 8,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tdBalance: {
        fontSize: 8,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },
    tdPercentOfWorkAccomplished: {
        fontSize: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 4,
    },

    contractContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    contractIdContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: 1,
    },
    contractNameContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: 1,
    },

    locationContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: 1,
    },

    contractorContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: 1,
    },
});
