import { Typography, Card } from "@material-tailwind/react";
import { Footertw } from "./Footertw";
import { Navbartw } from "./Navbartw";
//import { TimeAvatar } from "./TimeAvatar";
//import { Akordion } from "./Akordion";

export default function App() {
  return (
    
    <div className="relative grid min-h-[100vh] w-screen p-5">

    <Navbartw />
      
      <div className="flex-col gap-2 pt-56 pb-40 text-center">
        <Typography variant="h1" color="blue-gray">
          Modie UI - React
        </Typography>
        <Typography variant="lead" color="blue-gray" className="opacity-70">
        the template is pretty when an idea was coming to you.
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-4 self-end md:grid-cols-2 lg:grid-cols-4">

        <a
          href="https://modie-ui.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
              Theme Modie-UI
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
             Template Blogger Modifikasi Plus UI.
            </Typography>
          </Card>
        </a>

        <a
          href="https://modie-lp.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
              Landing Page
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
             Template Blogger Modifikasi Plus UI + LandingPage.
            </Typography>
          </Card>
        </a>

        <a
          href="https://modieplusbootstrap.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
              Bootstrap
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
              Template Blogger Plus UI + Bootstrap.
            </Typography>
          </Card>
        </a>

        <a
          href="https://modiemega.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            shadow={false}
            className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
          >
            <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
              Mega Menu
            </Typography>
            <Typography color="blue-gray" className="font-normal opacity-70">
              Template Blogger Plus UI + Bootstrap mega menu.
            </Typography>
          </Card>
        </a>
      </div>
    <Footertw />
    </div>
  );
}
