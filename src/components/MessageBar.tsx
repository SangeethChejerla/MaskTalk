import { JSX, SVGProps } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";


export default function MessageBar() {
    return (
<div className="relative">
<Textarea
  placeholder="Type your message..."
  name="message"
  id="message"
  rows={1}
  className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
/>
<Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
  <ArrowUpIcon className="w-4 h-4" />
  <span className="sr-only">Send</span>
</Button>
</div>
    )
}

function ArrowUpIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    )
  }
  