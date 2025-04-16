import type { Meta, StoryObj } from "@storybook/react"
import { ProjectStats } from "./stats"

const meta = {
    title: "Main/Components/ProjectStats",
    component: ProjectStats,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
  } satisfies Meta<typeof ProjectStats>

  export default meta
  type Story = StoryObj<typeof meta>
  
  export const Default: Story = {
    args: {
        total: 20,
        ongoing: 5, 
        completed: 15,
      },
    }
  
  export const Ongoing: Story = {
    args: {
        total: 30,
        ongoing: 20,
        completed: 10,
      },
    }
 
    export const Started: Story = {
        args: {
            total: 20,
            ongoing: 3,
            completed: 0,
          },
        }
    export const Completed: Story = {
        args: {
            total: 10,
            ongoing: 0,
            completed: 10,
          },
        }




     
  
  