import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  addDays,
  subDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  getHours,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container, Time } from './styles';
import api from '~/services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: {
          date,
        },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
            isEqual(getHours(parseISO(a.date)), getHours(compareDate))
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handleNextDate() {
    setDate(addDays(date, 1));
  }

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDate}>
          <MdChevronLeft color="#FFF" size={36} />
        </button>
        <strong>{formattedDate}</strong>
        <button type="button" onClick={handleNextDate}>
          <MdChevronRight color="#FFF" size={36} />
        </button>
      </header>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
