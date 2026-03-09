import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const colorMap: Record<string, string> = {
  "Negro": "#000000",
  "Verde Oliva": "#556B2F",
  "Beige/Azul": "linear-gradient(45deg, #F5F5DC 50%, #0000FF 50%)",
  "Black": "#000000",
  "White": "#FFFFFF",
  "Verde": "#008000",
  "Beige": "#F5F5DC",
  "Azul": "#0000FF",
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)
  const isColor = title.toLowerCase() === "color"

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm font-semibold uppercase tracking-wider">
        {title === "Color" ? "Color" : title === "Talla" || title === "Size" ? "Talla" : title}
      </span>
      <div
        className="flex flex-wrap gap-3"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          const colorValue = colorMap[v]

          if (isColor && colorValue) {
            return (
              <button
                onClick={() => updateOption(option.id, v)}
                key={v}
                className={clx(
                  "h-10 w-10 rounded-full border-2 transition-all duration-200 relative",
                  {
                    "border-black scale-110": v === current,
                    "border-transparent hover:border-grey-30": v !== current,
                  }
                )}
                style={{
                  background: colorValue,
                }}
                disabled={disabled}
                title={v}
              >
                <span className="sr-only">{v}</span>
                {v === current && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className={clx("h-2 w-2 rounded-full", v === "Negro" || v === "Black" ? "bg-white" : "bg-black")}></span>
                  </span>
                )}
              </button>
            )
          }

          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              className={clx(
                "border-ui-border-base bg-white border text-small-regular min-w-[50px] h-10 rounded-lg p-2 transition-all duration-200",
                {
                  "border-black bg-black text-white": v === current,
                  "hover:border-black": v !== current,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
