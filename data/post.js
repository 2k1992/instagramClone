import { user_data } from "./users";

export const post_data = [
  {
    imageUrl:
      "https://highxtar.com/wp-content/uploads/2022/05/highxtar-instagram-permite-aceptar-nfts-como-foto-de-perfil-destacada.jpg",
    user: user_data[0].user,
    likes: "1,992",
    caption: "Making Instagram Clone App 📱 with REACT NATIVE ⚛️",
    profile_picture: user_data[0].image,
    comments: [
      {
        user: "balchaabanefso",
        comment:
          "Wow! This build looks fire. Super excited to see your next work",
      },
    ],
  },

  {
    imageUrl:
      "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: user_data[4].user,
    likes: "7,646",
    caption: "😍💋GOOD MORNING 😍💋",
    profile_picture: user_data[4].image,
    comments: [
      {
        user: "habtewold",
        comment: "Good morning to you.",
      },
    ],
  },
];
