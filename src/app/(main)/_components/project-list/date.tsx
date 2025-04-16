"use client"

import { Input } from "@/components/ui/input"

interface DateRangeFilterProps {
  startDate: string
  endDate: string
  onStartDateChange: (date: string) => void
  onEndDateChange: (date: string) => void
}

export function DateRangeFilter({ startDate, endDate, onStartDateChange, onEndDateChange }: DateRangeFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 rounded-md p-2">
        <span className="text-sm font-medium text-muted-foreground">FROM</span>
        <Input
          type="date"
          className="h-9 w-[140px] text-muted-foreground uppercase"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        <span className="text-sm font-medium text-muted-foreground">TO</span>
        <Input
          type="date"
          className="h-9 w-[140px] text-muted-foreground uppercase"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>
    </div>
  )
}

