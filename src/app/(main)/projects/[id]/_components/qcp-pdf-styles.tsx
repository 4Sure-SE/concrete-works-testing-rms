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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdDescription: {
        fontSize: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdUnit: {
        fontSize: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdQuantity: {
        fontSize: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },
    tdTestQuantity: {
        fontSize: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0.5,
        paddingHorizontal: 5,
    },

    contractContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    contractIdContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 4,
    },
    contractNameContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 4,
    },

    limitsContainer: {
        width: "75%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 4,
        paddingRight: 10,
    },

    locationContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 4,
    },

    contractCostContainer: {
        width: "75%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 4,
        paddingRight: 10,
    },

    sourceContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 4,
    },
});
