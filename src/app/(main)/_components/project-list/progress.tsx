interface ProgressBarProps {
    percentage: number
  }
  
  export function ProgressBar({ percentage }: ProgressBarProps) {
    return (
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    )
  }
  
  