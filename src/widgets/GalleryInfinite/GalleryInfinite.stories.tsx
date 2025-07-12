import type { Meta, StoryObj } from "@storybook/react-vite";

import { GalleryInfinite } from "./GalleryInfinite";
import { FilmCardUI } from "../../shared/ui/FilmCard/FilmCard";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Widgets/GalleryInfinite",
  component: GalleryInfinite,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GalleryInfinite>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    _id: "1",
    title: "Film 1",
    maxRaiting: 10,
    raiting: 6.7,
    year: 2019,
  },
  {
    _id: "2",
    title: "Film 2",
    maxRaiting: 10,
    raiting: 7.3,
    year: 2020,
  },
  {
    _id: "3",
    title: "Film 3",
    maxRaiting: 10,
    raiting: 8.1,
    year: 2021,
  },
  {
    _id: "4",
    title: "Film 4",
    maxRaiting: 10,
    raiting: 9.2,
    year: 2022,
  },
  {
    _id: "5",
    title: "Film 5",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2023,
  },
  {
    _id: "6",
    title: "Film 6",
    maxRaiting: 10,
    raiting: 9.5,
    year: 2024,
  },
  {
    _id: "7",
    title: "Film 7",
    maxRaiting: 10,
    raiting: 9.7,
    year: 2025,
  },
  {
    _id: "8",
    title: "Film 8",
    maxRaiting: 10,
    raiting: 9.8,
    year: 2026,
  },
  {
    _id: "9",
    title: "Film 9",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2027,
  },
  {
    _id: "10",
    title: "Film 10",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2028,
  },
  {
    _id: "11",
    title: "Film 11",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2029,
  },
  {
    _id: "12",
    title: "Film 12",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2030,
  },
  {
    _id: "13",
    title: "Film 13",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2031,
  },
  {
    _id: "14",
    title: "Film 14",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2032,
  },
  {
    _id: "15",
    title: "Film 15",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2033,
  },
  {
    _id: "16",
    title: "Film 16",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2034,
  },
  {
    _id: "17",
    title: "Film 17",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2035,
  },
  {
    _id: "18",
    title: "Film 18",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2036,
  },
  {
    _id: "19",
    title: "Film 19",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2037,
  },
  {
    _id: "20",
    title: "Film 20",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2038,
  },
  {
    _id: "21",
    title: "Film 21",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2039,
  },
  {
    _id: "22",
    title: "Film 22",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2040,
  },
  {
    _id: "23",
    title: "Film 23",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2041,
  },
  {
    _id: "24",
    title: "Film 24",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2042,
  },
  {
    _id: "25",
    title: "Film 25",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2043,
  },
  {
    _id: "26",
    title: "Film 26",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2044,
  },
  {
    _id: "27",
    title: "Film 27",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2045,
  },
  {
    _id: "28",
    title: "Film 28",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2046,
  },
  {
    _id: "29",
    title: "Film 29",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2047,
  },
  {
    _id: "30",
    title: "Film 30",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2048,
  },
  {
    _id: "31",
    title: "Film 31",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2049,
  },
  {
    _id: "32",
    title: "Film 32",
    maxRaiting: 10,
    raiting: 9.9,
    year: 2050,
  },
];

export const Base: Story = {
  render: () => {
    const [films, setFilms] = useState(data.slice(0, 16));
    const [hasMore, setHasMore] = useState(true);

    const onNext = () => {
      if (films.length >= data.length) {
        setHasMore(false);
      } else {
        setTimeout(() => setFilms(data.slice(0, films.length + 8)), 1000);
      }
    };

    return (
      <MemoryRouter>
        <div style={{ width: "80vw" }}>
          <GalleryInfinite
            title="Рекомендуемое"
            cardProps={films}
            CardType={FilmCardUI}
            InfiniteScrollProps={{
              dataLength: films.length,
              next: onNext,
              hasMore: hasMore,
              loader: <h3>Loading...</h3>,
            }}
          />
        </div>
      </MemoryRouter>
    );
  },
  args: {
    title: "Рекомендуемое",
    cardProps: data,
    CardType: FilmCardUI,
    InfiniteScrollProps: {
      dataLength: data.length,
      next: () => {},
      hasMore: false,
      loader: <h3>Loading...</h3>,
    },
  },
};
