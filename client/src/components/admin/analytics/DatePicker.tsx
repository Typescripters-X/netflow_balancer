"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/UI/button"
import { Calendar } from "@/components/UI/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover"

type DatePickerProps = {
    date?: Date
    setDate: (date: Date) => void
    }

export function DatePicker(
    { date, setDate }: DatePickerProps
) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => date && setDate(format(date, "yyyy-MM-dd") as any)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
