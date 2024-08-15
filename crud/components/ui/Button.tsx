"use client";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi"

interface buttonProps {
  type?: "button" | "submit" | "reset"
  text: string | ReactNode
  onClick?: () => void
  actionButton?: boolean
}
import clsx from "clsx";
const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(actionButton && "bg-orange-700 rounded-full p-2 text-white"
          ,"bg-orange-700 px-2 text-white"
        )}
      >
        {text}
      </button>
    </>
  )
}

export default Button 
