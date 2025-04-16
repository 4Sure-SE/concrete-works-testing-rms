import type { Meta, StoryObj } from "@storybook/react"
import { ProjectGrid } from "./grid"

const meta = {
    title: "Main/Components/ProjectGrid",
    component: ProjectGrid,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
  } satisfies Meta<typeof ProjectGrid>

  export default meta
  type Story = StoryObj<typeof meta>
  
  export const Default: Story = {
    args: {
        projects: [
          {
            id: "CT-2024-001",
            title: "Highway Bridge Renovation",
            stats: {
              total: 20,
              ongoing: 5,
              completed: 15,
            },
          },
          {
            id: "CT-2024-002",
            title: "Commercial Complex Foundation",
            stats: {
              total: 60,
              ongoing: 25,
              completed: 35,
            },
          },
          {
            id: "CT-2024-003",
            title: "Residential Tower Construction",
            stats: {
              total: 45,
              ongoing: 25,
              completed: 20,
            },
          },
          {
            id: "CT-2024-004",
            title: "Municipal Infrastructure Project",
            stats: {
              total: 15,
              ongoing: 5,
              completed: 10,
            },
          },
        ],
      },
    }
    
    export const EmptyGrid: Story = {
      args: {
        projects: [],
      },
    }
    
    export const SpecificProject: Story = {
      args: {
        projects: [
          {
            id: "CT-2024-001",
            title: "Highway Bridge Renovation",
            stats: {
              total: 20,
              ongoing: 5,
              completed: 15,
            },
          },
        ],
      },
    }
    
    export const FilteredProjects: Story = {
      args: {
        projects: [
          {
            id: "CT-2024-002",
            title: "Commercial Complex Foundation",
            stats: {
              total: 60,
              ongoing: 25,
              completed: 35,
            },
          },
          {
            id: "CT-2024-003",
            title: "Residential Tower Construction",
            stats: {
              total: 45,
              ongoing: 25,
              completed: 20,
            },
          },
        ],
      },
    }
    
    