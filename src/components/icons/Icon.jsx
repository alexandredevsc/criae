const iconFiles = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

// A máscara usa o contorno do SVG; a cor vem do CSS ou da propriedade color.
export default function Icon({
  name,
  size = 20,
  color = 'currentColor',
  label,
  style,
  ...props
}) {
  const source = iconFiles[`../../assets/icons/${name}.svg`]

  if (!source) {
    throw new Error(`Ícone não encontrado: ${name}`)
  }

  return (
    <span
      {...props}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flexShrink: 0,
        verticalAlign: 'middle',
        backgroundColor: color,
        maskImage: `url("${source}")`,
        WebkitMaskImage: `url("${source}")`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        ...style,
      }}
    />
  )
}
