import React, { memo, useEffect, useRef } from "react";

const TerminalInput = memo(
  ({
    value,
    setValue,
    onKeyDown,
    focused,
  }: {
    value: string;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    focused: boolean;
  }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (focused) inputRef.current?.focus();
      else inputRef.current?.blur();
    }, [focused]);

    return (
      <div className="bg-transperent text-primary min-w-24 max-w-sm cursor-text">
        <div className="flex items-center gap-1">
          <span className="text-neutral-400 select-none">$</span>
          <div className="relative w-full">
            {/* Invisible input for capturing keystrokes */}
            <input
              ref={inputRef}
              value={value}
              onChange={setValue}
              onKeyDown={onKeyDown}
              className="absolute inset-0 w-full bg-transparent text-transparent caret-transparent outline-none"
            />

            <div className="whitespace-pre break-all pl-0.5">
              {value}
              {focused && (
                <span className="inline-block relative top-[3px] w-1.5 h-[18px] bg-primary animate-blink" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default TerminalInput;
