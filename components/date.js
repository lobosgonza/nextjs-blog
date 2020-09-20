import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale'

function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "d' de 'LLLL",{ locale: es })}</time>
}

export default Date;