import type { Meta, StoryObj } from "@storybook/react"
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { ProjectCard } from "./card"

const meta = {
    title: "Main/Components/ProjectCard",
    component: ProjectCard,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
  } satisfies Meta<typeof ProjectCard>

  export default meta
  type Story = StoryObj<typeof meta>
  
  export const HighCompletion: Story = {
    args: {
      id: "CT-2024-001",
      title: "Highway Bridge Renovation",
      stats: {
        total: 20,
        ongoing: 5,
        completed: 15,
      },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText("CT-2024-001")).toBeInTheDocument();
        await expect(canvas.getByText("Highway Bridge Renovation")).toBeInTheDocument();
        await expect(canvas.getByText("75%")).toBeInTheDocument();
      },    
    };

  
  export const MediumCompletion: Story = {
    args: {
      id: "CT-2024-002",
      title: "Commercial Complex Foundation",
      stats: {
        total: 60,
        ongoing: 22,
        completed: 38,
      },
    },
  }
  
  export const LowCompletion: Story = {
    args: {
      id: "CT-2024-003",
      title: "Residential Tower Construction",
      stats: {
        total: 45,
        ongoing: 27,
        completed: 18,
      },
    },
  }
  
  export const Completed: Story = {
    args: {
      id: "CT-2024-004",
      title: "Municipal Infrastructure Project",
      stats: {
        total: 15,
        ongoing: 0,
        completed: 15,
      },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        
        // Verify 100% completion
        await expect(canvas.getByText("100%")).toBeInTheDocument();
        
        // Verify "Ongoing" is displayed
        await expect(canvas.getByText("Ongoing")).toBeInTheDocument();
      }
    };
  
  
  
  