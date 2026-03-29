import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface DateRangePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(date: Date, start: Date | null, end: Date | null) {
  if (!start || !end) return false;
  const t = date.getTime();
  return t > start.getTime() && t < end.getTime();
}

function formatDate(date: Date) {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function DateRangePicker({ value, onChange, placeholder }: DateRangePickerProps) {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const handleDayClick = (day: number) => {
    const clicked = new Date(viewYear, viewMonth, day);
    if (!startDate || (startDate && endDate)) {
      setStartDate(clicked);
      setEndDate(null);
    } else {
      if (clicked < startDate) {
        setEndDate(startDate);
        setStartDate(clicked);
      } else {
        setEndDate(clicked);
      }
    }
  };

  const confirmSelection = () => {
    if (startDate && endDate) {
      onChange(`${formatDate(startDate)} → ${formatDate(endDate)}`);
    } else if (startDate) {
      onChange(formatDate(startDate));
    }
    setOpen(false);
  };

  const clearSelection = () => {
    setStartDate(null);
    setEndDate(null);
    onChange("");
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const effectiveEnd = endDate ?? hoverDate;

  return (
    <div className="relative" ref={containerRef}>
      {/* Input trigger */}
      <div
        className="flex items-center gap-2 border-b border-white/20 py-2 cursor-pointer group"
        onClick={() => setOpen(o => !o)}
      >
        <Calendar size={14} className="text-white/30 group-hover:text-amber-400 transition-colors flex-shrink-0" />
        <span
          className={`text-sm flex-1 ${value ? "text-white" : "text-white/30"}`}
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {value || placeholder}
        </span>
        {value && (
          <button
            type="button"
            onClick={e => { e.stopPropagation(); clearSelection(); }}
            className="text-white/30 hover:text-white/60 text-xs transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Calendar dropdown */}
      {open && (
        <div className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

          {/* Month nav */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
            <button
              type="button"
              onClick={prevMonth}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/8 text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={15} />
            </button>
            <span
              className="text-white text-sm"
              style={{ fontFamily: "'Noto Serif SC', serif", letterSpacing: "0.04em" }}
            >
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/8 text-white/50 hover:text-white transition-colors"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 px-3 pt-3 pb-1">
            {DAYS.map(d => (
              <div
                key={d}
                className="text-center text-white/25 pb-1"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.65rem", letterSpacing: "0.05em" }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 px-3 pb-3 gap-y-0.5">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(viewYear, viewMonth, day);
              const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const isStart = startDate && isSameDay(date, startDate);
              const isEnd = endDate && isSameDay(date, endDate);
              const inRange = isInRange(date, startDate, effectiveEnd);
              const isToday = isSameDay(date, today);

              let cellClass = "relative flex items-center justify-center h-8 text-xs cursor-pointer select-none transition-colors rounded-full ";

              if (isPast) {
                cellClass += "text-white/15 cursor-not-allowed";
              } else if (isStart || isEnd) {
                cellClass += "bg-amber-400 text-black";
              } else if (inRange) {
                cellClass += "bg-amber-400/15 text-white rounded-none";
              } else if (isToday) {
                cellClass += "text-amber-400 hover:bg-white/8";
              } else {
                cellClass += "text-white/60 hover:bg-white/8 hover:text-white";
              }

              // Range edge rounding
              let rangeEdgeClass = "";
              if (inRange) {
                if (startDate && isSameDay(new Date(viewYear, viewMonth, day - 1), startDate)) rangeEdgeClass = "rounded-l-none";
                if (endDate && isSameDay(new Date(viewYear, viewMonth, day + 1), endDate)) rangeEdgeClass = "rounded-r-none";
              }

              return (
                <div
                  key={day}
                  className={`${cellClass} ${rangeEdgeClass}`}
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                  onClick={() => !isPast && handleDayClick(day)}
                  onMouseEnter={() => startDate && !endDate && !isPast && setHoverDate(date)}
                  onMouseLeave={() => setHoverDate(null)}
                >
                  {(isStart || isEnd) && (
                    <span className="absolute inset-0 rounded-full bg-amber-400" />
                  )}
                  <span className="relative z-10">{day}</span>
                </div>
              );
            })}
          </div>

          {/* Selected range display */}
          <div className="px-5 pb-3">
            <p
              className="text-center text-amber-400/60 mb-3"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.7rem" }}
            >
              {startDate && endDate
                ? `${formatDate(startDate)} → ${formatDate(endDate)}`
                : startDate
                ? `${formatDate(startDate)} → ?`
                : "Select arrival date"}
            </p>
            <button
              type="button"
              onClick={confirmSelection}
              disabled={!startDate}
              className="w-full py-2 rounded-xl text-xs transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-amber-400 text-black hover:bg-amber-300"
              style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
