export default function SparklesIcon({ size = 18, color = 'currentColor', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M14 6.5 16.1 12.1 21.5 14 16.1 16.1 14 21.5 11.9 16.1 6.5 14 11.9 12.1 14 6.5Z" />
      <path d="M6 2 7.15 5.1 10.25 6.25 7.15 7.4 6 10.5 4.85 7.4 1.75 6.25 4.85 5.1 6 2Z" />
      <path d="m19.5 1.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  )
}
