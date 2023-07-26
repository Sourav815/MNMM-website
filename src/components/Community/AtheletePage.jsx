import { Link, graphql } from "gatsby";
import React from "react";

function AchivementCard() {
  return (
    <div className="bg-slate-900 p-5 rounded-lg flex flex-col gap-3 mx-3">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="fill-gray-300 bg-slate-700 p-1 rounded-md"
        >
          <path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"></path>
        </svg>
        <div className="pl-3">
          <h2 className="text-xl font-bold">Lorem Ipsum</h2>
          <h3 className="text-lg font-bold text-gray-300">Ipsum lorem</h3>
        </div>
      </div>
      <p className="text-sm ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eum
        earum tenetur praesentium quasi adipisci, nostrum doloremque sit
        voluptas aut vel! Minima enim pariatur ratione dolorum voluptates soluta
        atque sunt?
      </p>
    </div>
  );
}

export default function AtheletePage({ althletes }) {
  console.log(althletes);
  const athelete = {
    imageUrl:
      "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
  };
  return (
    <div className="flex flex-col items-center gap-10 py-10 bg-slate-800 text-white">
      <div className="flex flex-col items-center gap-4">
        <img
          alt="profile picture"
          src={athelete.imageUrl}
          className="h-48 w-48 rounded-full bg-slate-500"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Lorem Ipsum</h2>
          <h3 className="text-xl font-bold text-gray-300">Powerlifter</h3>
        </div>
      </div>

      <div className="h-0.5 w-3/4  bg-gray-600" />

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold">My Story</h3>
        <p className="px-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo
          neque repellat, odit natus delectus eos cupiditate sunt
          exercitationem, ex maxime est doloremque rem nesciunt doloribus,
          itaque omnis quibusdam et. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Tempore illo deserunt odio animi dicta eveniet
          accusamus, quaerat, facilis incidunt, reprehenderit eaque vitae maxime
          repellendus perspiciatis porro fugit sapiente asperiores blanditiis.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold pb-3">My Achivements</h3>

        <AchivementCard />
        <AchivementCard />
        <AchivementCard />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl font-bold">Follow Me</h3>
        <div className="flex scale-150 mb-5 gap-10 md:mr-7 mr-0 mt-5">
          <div className="scale-125 cursor-pointer">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-gray-400"
                viewBox="0 0 24 24"
                data-darkreader-inline-fill=""
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
              </svg>
            </Link>
          </div>
          <div className="scale-125 cursor-pointer">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-400"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </Link>
          </div>
          <div className="scale-125 cursor-pointer">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-400"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query Athletes($slug: String!) {
    allStrapiAthlete(filter: { id: { eq: $slug } }) {
      nodes {
        id
        name
        sport
        bio
        profilePicture {
          url
        }
      }
    }
  }
`;
