import "./Calendar.css"
import { DateCalendar } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



export default function Calendar(){
    return(
        <section className="calendar-section" >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className="calendar" focusedView={'month'} />
           </LocalizationProvider>
           <div>
                <div className="quadrado1"></div><p>Marcado</p>
                <div className="quadrado2"></div><p>Selecionado</p>
                <div className="quadrado3"></div><p>Recesso</p>
            </div>
        </section>
    )
}