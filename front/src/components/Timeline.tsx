import { Component, createSignal, For } from 'solid-js';
import dayjs from 'dayjs';
import { Calendar } from './Calendar';

type TimelineItem = {
  date: string;
  title: string;
};

export const Timeline: Component = () => {
  const [timelineItems] = createSignal<TimelineItem[]>([
    { date: '2022-05-02T07:00:00+09:00', title: '朝食' },
    { date: '2022-05-02T12:00:00+09:00', title: '昼食' },
    { date: '2022-05-02T18:00:00+09:00', title: '夕食' },
  ]);
  const [date, setDate] = createSignal(dayjs().format('YYYY-MM-DD'));

  const submitDate = () => {
    console.log(date());
  };

  return (
    <div class="flex gap-x-2">
      <div class="mr-10">
        <Calendar date={date()} setDate={setDate} submit={submitDate} />
      </div>
      <div>
        <div class="mt-4 text-lg">Menu of {date()}</div>
        <ul class="steps steps-vertical">
          <For each={timelineItems()}>
            {(item) => (
              <li data-content="" class="step">
                <div class="text-left py-4 pl-2">
                  <div>{dayjs(item.date).format('HH:mm')}</div>
                  <div class="text-xl mt-2">{item.title}</div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
      <div>
        <div>
          <input
            type="radio"
            id="aaa"
            name="hoge"
            hidden
            class="checked:bg-white"
          />
          <label>aaa</label>
        </div>
        <div>
          <input type="radio" id="bbb" name="hoge" />
          <label>bbb</label>
        </div>
      </div>
    </div>
  );
};
