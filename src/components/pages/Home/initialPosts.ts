import { IPost } from "../../../types";

export const initialPosts: IPost[] = [
  {
    author: {
      _id: "3232",
      avatar:
        "https://cdnn21.img.ria.ru/images/07e5/07/1a/1742924675_0:65:1244:765_600x0_80_0_0_2585defb4996dcd50cf758dec906d256.jpg.webp",
      name: "Дуня Партизанова",
      isInNetwork: true,
    },

    createdAt: "2021-01-01",
    content: "Секретная новость! Зеленые человечики существуют! ",
    images: [
      "https://cdnn21.img.ria.ru/images/156047/94/1560479464_0:0:1200:676_1920x0_80_0_0_3628b06ed74f415ee9dfdc1f3896ccdc.jpg.webp",
      "https://cdnn21.img.ria.ru/images/07e5/04/1c/1730304713_0:213:3262:2048_1920x0_80_0_0_ed27582f7102ec5313191e4c30a1c874.jpg.webp",
    ],
  },
];
