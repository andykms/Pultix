import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import { FilmPage } from "./FilmPage";
import { useState } from "react";


const meta = {
  title: "Pages/FilmPage",
  component: FilmPage,
  tags: ["autodocs"],
  parameters: {
  },
} satisfies Meta<typeof FilmPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    const [isInFavourites, setIsInFavourites] = useState(false);

    const onChangeFavourites = ()=> {
      setIsInFavourites(!isInFavourites);
    }


    return <MemoryRouter><FilmPage {...{...args, isInFavourites, onChangeFavourites}}></FilmPage></MemoryRouter>;
  },
  args: {
    onChangeFavourites: ()=>{},
    isInFavourites: false,
    film: {
      _id: "196855",
      title: "Кит",
      posterUrl:
        "https://image.openmoviedb.com/kinopoisk-images/1946459/60d0b635-9b35-4e2e-bd6e-bbe337836613/600x900",
      raiting: 7.62,
      year: 2008,
      genres: ["Драма", "Мелодрама"],
      description:
        "В класс к семнадцатилетней Натали приходит новый ученик Кит Зеттерстром. Поначалу ничего, кроме раздражения, молодой человек в Натали не вызывает, к тому же он становится её партнером по лабораторным работам. Постепенно девушка влюбляется, и Кит отвечает ей взаимностью, но начавшимся отношениям может помешать темная тайна, которую скрывает Кит...",
      actors: [
        {
          _id: 223471,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_223471.jpg",
          name: "Джесси МакКартни",
          description: "Keith (в титрах: Jesse Mccartney)",
        },
        {
          _id: 28189,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_28189.jpg",
          name: "Элизабет Арнуа",
          description: "Natalie",
        },
        {
          _id: 675041,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_675041.jpg",
          name: "Игнасио Серричио",
          description: "Raff",
        },
        {
          _id: 265560,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_265560.jpg",
          name: "Марго Харшман",
          description: "Brooke",
        },
        {
          _id: 655717,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_655717.jpg",
          name: "Табита Браунстоун",
          description: "Cynthia",
        },
        {
          _id: 22067,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_22067.jpg",
          name: "Майкл МакГрэйди",
          description: "Pete (в титрах: Michael Mcgrady)",
        },
        {
          _id: 2410,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2410.jpg",
          name: "Дженнифер Грей",
          description: "Caroline",
        },
        {
          _id: 56172,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_56172.jpg",
          name: "Тим Халлиган",
          description: "Father",
        },
        {
          _id: 10217,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10217.jpg",
          name: "Майкл О’Киф",
          description: "Alan Ascher",
        },
        {
          _id: 31703,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_31703.jpg",
          name: "Итэн Филлипс",
          description: "Mr. Miles",
        },
        {
          _id: 1091293,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1091293.jpg",
          name: "Эрик Паркер",
          description: "Travis",
        },
        {
          _id: 663393,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_663393.jpg",
          name: "Джесси Шрэм",
          description: "Courtney",
        },
        {
          _id: 693281,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_693281.jpg",
          name: "Мика Хенсон",
          description: "Shane",
        },
        {
          _id: 77571,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_77571.jpg",
          name: "Йен Нельсон",
          description: "Brian",
        },
        {
          _id: 1012132,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1012132.jpg",
          name: "Сэм Мерфи",
          description: "Zach",
        },
        {
          _id: 56349,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_56349.jpg",
          name: "Сара Зинссер",
          description: "Office Lady",
        },
        {
          _id: 1007524,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1007524.jpg",
          name: "Рон Карлсон",
          description: "English Teacher",
        },
        {
          _id: 1012131,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1012131.jpg",
          name: "Меган Хаббелл",
          description: "Officious Girl",
        },
        {
          _id: 462168,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_462168.jpg",
          name: "Кортни Хэлверсон",
          description: "Junior Girl",
        },
        {
          _id: 101725,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_101725.jpg",
          name: "Джэнис Кент",
          description: "Woman",
        },
        {
          _id: 1054345,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1054345.jpg",
          name: "Зак Рокфеллер",
          description: "Billy (в титрах: Zach Rockefeller)",
        },
      ],
      filmCrew: [
        {
          _id: 610132,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_610132.jpg",
          name: "Три Адамс",
          description: null,
        },
        {
          _id: 43573,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_43573.jpg",
          name: "Кристан Эндрюс",
          description: null,
        },
        {
          _id: 43573,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_43573.jpg",
          name: "Кристан Эндрюс",
          description: null,
        },
        {
          _id: 1994383,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1994383.jpg",
          name: "Рэйчел Сэйдж Кьюнин",
          description: null,
        },
        {
          _id: 1456434,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1456434.jpg",
          name: "Брайан Венегас",
          description: null,
        },
        {
          _id: 1007523,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1007523.jpg",
          name: "Тодд Кесслер",
          description: null,
        },
        {
          _id: 2004718,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2004718.jpg",
          name: "Кристофер Кролл",
          description: null,
        },
        {
          _id: 1987561,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987561.jpg",
          name: "Кара Силверман",
          description: null,
        },
        {
          _id: 82348,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_82348.jpg",
          name: "Дарко Сувак",
          description: null,
        },
        {
          _id: 1007525,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1007525.jpg",
          name: "Ребекка Голдштейн",
          description: null,
        },
        {
          _id: 1007523,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1007523.jpg",
          name: "Тодд Кесслер",
          description: null,
        },
        {
          _id: 14670,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_14670.jpg",
          name: "Джефф Джеффрэй",
          description: null,
        },
        {
          _id: 17109,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_17109.jpg",
          name: "Дэвид Грэйс",
          description: null,
        },
        {
          _id: 517742,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_517742.jpg",
          name: "Дэвид Забель",
          description: null,
        },
        {
          _id: 1007523,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1007523.jpg",
          name: "Тодд Кесслер",
          description: null,
        },
        {
          _id: 1007524,
          photoUrl:
            "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1007524.jpg",
          name: "Рон Карлсон",
          description: null,
        },
      ],
      facts: [
        {
          value:
            'Фильм снят по мотивам рассказа <a href="/name/1007524/" class="all">Рона Карлсона</a> &laquo;Кит&raquo; (Keith, 1997).',
          spoiler: false,
        },
        {
          value:
            'Фильм был выпущен после одного из концертов <a href="/name/223471/" class="all">Джесси МакКартни</a>, 13 сентября 2008 года, в 19:30.',

          spoiler: false,
        },
        {
          value:
            'По сюжету фильма, Натали и Кит — ровесники. Однако в жизни <a href="/name/28189/" class="all">Элизабет Арнуа</a> на восемь лет старше своего экранного возлюбленного — <a href="/name/223471/" class="all">Джесси МакКартни</a>.',

          spoiler: false,
        },
      ],
      filmDistribution: {
        fees: [
          {
            country: "США",
            value: 94320,
            currency: "USD",
          },
          {
            country: "Великобритания",
            value: 74242,
            currency: "USD",
          },
          {
            country: "Россия",
            value: 992423,
            currency: "RUB",
          },
        ],
        budget: {
          value: 489284423,
          currency: "$",
        },
        premierWorld: new Date("2008-04-11T00:00:00.000Z").toLocaleDateString(),
      },
      trailerUrl: "https://www.youtube.com/embed/Fi4P5ksvBLo",
      movieLength: 95,
      similarMovies: [
        {
          _id: "875",
          title: "Спеши любить",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1629390/5e353568-a599-47f8-a26b-a9e0e0e70274/orig",
          rating: 7.915,
          year: 2002,
        },
        {
          _id: "3561",
          title: "Дневник памяти",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1898899/c48824e7-89fc-4d6f-a55a-57a8fa05d38c/orig",
          rating: 8.252,
          year: 2004,
        },
        {
          _id: "3795",
          title: "Сладкий ноябрь",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/4716873/5f2efb41-3fe7-49e6-8833-993addbbb028/orig",
          rating: 7.738,
          year: 2001,
        },
        {
          _id: "461782",
          title: "Помни меня",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1900788/988016a7-7fbb-4aa0-badb-6f3bee02dc68/orig",

          rating: 7.635,
          year: 2010,
        },
        {
          _id: "23275",
          title: "Если только",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/4483445/2ba0977b-4ea2-4a4d-b197-e2446ab83744/orig",

          rating: 7.606,
          year: 2003,
        },
        {
          _id: "463695",
          title: "Любовь и другие лекарства",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1704946/ad874c23-a328-4668-8f44-a28ffafbe299/orig",

          rating: 6.871,
          year: 2010,
        },
        {
          _id: "594778",
          title: "Сейчас самое время",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1704946/3a50170f-17a3-4a8b-a060-73820215137a/orig",

          rating: 7.525,
          year: 2012,
        },
        {
          _id: "724703",
          title: "Виноваты звезды",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1773646/ebd2268f-f0cc-4de5-95aa-1c1013597aa5/orig",

          rating: 7.81,
          year: 2014,
        },
        {
          _id: "394453",
          title: "История странного подростка",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1773646/f7ac553b-8ea2-4673-8dde-ea1994f67d04/orig",

          rating: 7.707,
          year: 2009,
        },
        {
          _id: "16953",
          title: "Осень в Нью-Йорке",
          posterUrl:
            "https://image.openmoviedb.com/kinopoisk-images/1898899/28483477-666e-4233-b4ac-460e13053c02/orig",

          rating: 7.336,
          year: 2000,
        },
      ],
      ageRaiting: 16,
    },
  },
};
