import dayjs from 'dayjs';
import {
  Component,
  createEffect,
  createSignal,
  For,
  onMount,
  Setter,
} from 'solid-js';
import { Svg } from './Svg';

interface ICalendar {
  date: string;
  setDate: Setter<string>;
  submit: () => void;
}

export const Calendar: Component<ICalendar> = (props) => {
  const [selectedMonth, setSelectedMonth] = createSignal<string>();
  const [dates, setDates] = createSignal<string[]>([]);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const selectDate = (date: string) => {
    if (date === props.date) return;
    props.setDate(date);
    props.submit();
  };

  const moveMonth = (direction: 'prev' | 'next') => {
    switch (direction) {
      case 'prev':
        setSelectedMonth((p) =>
          dayjs(p).subtract(1, 'month').format('YYYY-MM-01')
        );
        break;
      case 'next':
        setSelectedMonth((p) => dayjs(p).add(1, 'month').format('YYYY-MM-01'));
        break;
      default:
        break;
    }
  };

  onMount(() => {
    setSelectedMonth(dayjs(props.date).format('YYYY-MM-01'));
  });

  createEffect(() => {
    // init selectedMonth
    if (!selectedMonth()) {
      return;
    }

    const ds = [];
    const startDate = dayjs(selectedMonth());
    const endDate = startDate.endOf('month');
    const startDateDayOfWeek = startDate.get('day');
    const daysInMonth = endDate.endOf('month').get('date');

    // set blank days
    for (let i = 0; i < startDateDayOfWeek; i++) {
      ds.push('');
    }

    // set days in select month
    for (let i = 0; i < daysInMonth; i++) {
      ds.push(startDate.add(i, 'day').format('YYYY-MM-DD'));
    }

    setDates(ds);
  });

  return (
    <>
      <div class="card w-72 bg-zinc-800 rounded-md z-50 mt-1 p-1 pb-3">
        <div class="card-body p-0">
          <div class="card-title pt-1 pl-3 pr-1 flex justify-between">
            <div class="text-lg">
              {dayjs(selectedMonth() || '').format('YYYY / MM')}
            </div>
            <div class="flex space-x-2">
              <button
                class="btn btn-circle btn-info btn-sm no-animation p-0 bg-zinc-800 hover:bg-zinc-600 border-0 text-zinc-200"
                onClick={() => moveMonth('prev')}
              >
                <Svg name="chevronLeft" />
              </button>
              <button
                class="btn btn-circle btn-info btn-sm no-animation p-0 bg-zinc-800 hover:bg-zinc-600 border-0 text-zinc-200"
                onClick={() => moveMonth('next')}
              >
                <Svg name="chevronRight" />
              </button>
            </div>
          </div>
          <div class="flex flex-wrap px-1 mt-1">
            <For each={days}>
              {(day) => <div class="w-1/7 text-center mb-1">{day}</div>}
            </For>
            <For each={dates()}>
              {(date) => (
                <div class="w-1/7 px-1 my-1">
                  <div
                    class={`cursor-pointer text-center rounded-full transition ease-in-out leading-loose duration-100 ${
                      date === props.date
                        ? 'bg-zinc-400 text-zinc-800'
                        : 'hover:bg-zinc-600'
                    }`}
                    onClick={() => selectDate(date)}
                  >
                    {date ? dayjs(date).format('DD') : ''}
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
};
