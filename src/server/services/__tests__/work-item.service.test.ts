import * as workItemAdapter from "@/lib/adapters/work-item";
import type { WorkItemDefinitionDTO } from "@/lib/types/work-item";
import * as workItemDataAccess from "@/server/data-access/work-item";
import type { WorkItemPayload } from "@/server/data-access/work-item/work-item.payloads";
import { describe, expect, it, vi } from "vitest";
import { WorkItemService } from "../work-item.service";

describe("getWorkItemDefinitionList", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should successfully retrieve and convert work item definitions to DTOs", async () => {
        // Act
        const result = await WorkItemService.getWorkItemDefinitionList();

        // Assert
        expect(result).toBeDefined();
        expect(Array.isArray(result)).toBe(true);

        // Verify each item is a valid WorkItemDefinitionDTO
        result.forEach((dto: WorkItemDefinitionDTO) => {
            expect(dto).toHaveProperty("id");
            expect(dto).toHaveProperty("itemNo");
            expect(dto).toHaveProperty("description");
            expect(dto).toHaveProperty("unitAbbreviation");
        });
    });

    it("should return an empty array when no work item definitions exist", async () => {
        // Arrange - mock empty result from data access
        vi.spyOn(workItemDataAccess, "getWorkItemList").mockResolvedValueOnce(
            [],
        );

        // Act
        const result = await WorkItemService.getWorkItemDefinitionList();

        // Assert
        expect(result).toEqual([]);
    });

    it("should filter out null DTOs from adapter conversion", async () => {
        // Arrange - Mock data access with valid data
        const mockWorkItemPayload: WorkItemPayload = {
            id: "valid-id",
            itemNo: "Item 1",
            description: "Test Description",
            unitId: "unit-1",
            createdAt: new Date(),
            unit: {
                abbreviation: "sq.m.",
                isWholeNumber: false,
            },
        };

        vi.spyOn(workItemDataAccess, "getWorkItemList").mockResolvedValueOnce([
            mockWorkItemPayload,
        ]);

        vi.spyOn(workItemAdapter, "workItemToDTO").mockImplementationOnce(
            () => null,
        );

        // Act
        const result = await WorkItemService.getWorkItemDefinitionList();

        // Assert
        expect(result).toBeDefined();
        expect(result.length).toBe(0); // All items filtered out due to null return
    });

    it("should handle database errors gracefully", async () => {
        // Arrange
        const mockError = new Error("Database connection failed");
        vi.spyOn(workItemDataAccess, "getWorkItemList").mockRejectedValueOnce(
            mockError,
        );

        // Act & Assert
        await expect(
            WorkItemService.getWorkItemDefinitionList(),
        ).rejects.toThrow("Database connection failed");
    });

    it("should handle adapter conversion errors", async () => {
        // Arrange
        const mockWorkItemPayload: WorkItemPayload = {
            id: "test-id",
            itemNo: "Item 1",
            description: "Test Description",
            unitId: "unit-1",
            createdAt: new Date(),
            unit: {
                abbreviation: "sq.m.",
                isWholeNumber: false,
            },
        };

        vi.spyOn(workItemDataAccess, "getWorkItemList").mockResolvedValueOnce([
            mockWorkItemPayload,
        ]);

        // Mock adapter to throw error
        vi.spyOn(workItemAdapter, "workItemToDTO").mockImplementationOnce(
            () => {
                throw new Error("Adapter conversion failed");
            },
        );

        // Act & Assert
        await expect(
            WorkItemService.getWorkItemDefinitionList(),
        ).rejects.toThrow("Adapter conversion failed");
    });
});
