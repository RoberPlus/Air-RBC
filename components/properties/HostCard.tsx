import Image from "next/image";
import { Separator } from "../ui/separator";
import Title from "./Title";
import { Cake, BriefcaseBusiness } from "lucide-react";

type UserInfoProps = {
  profile: {
    profileImage: string;
    firstName: string;
  };
};

function HostCard({ profile: { profileImage, firstName } }: UserInfoProps) {
  return (
    <div>
      <Separator className="my-4" />
      <Title text="Meet your Host" />
      <article className="my-5 flex w-1/2 rounded-2xl p-5 shadow-xl">
        <div className="flex w-2/3 -translate-x-3 flex-col items-center justify-center space-y-2 text-center">
          <div className="relative h-32 w-32">
            <Image
              src={profileImage}
              alt={firstName}
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-1 right-0 rounded-full bg-primary p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-label="Verified Host"
                role="img"
                focusable="false"
                className="h-5 w-5"
                fill="white"
              >
                <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z"></path>
              </svg>
            </div>
          </div>
          <div>
            <p>
              <span className="text-xl font-bold"> {firstName}</span>
            </p>
            <p className="font-light text-muted-foreground">Superhost</p>
          </div>
        </div>

        <div className="flex w-1/3 flex-col space-y-2">
          <div>
            <p className="text-lg font-bold">38</p>
            <p className="text-sm">Reviews</p>
            <Separator className="mt-4" />
          </div>

          <div>
            <p className="text-lg font-bold">4.79</p>
            <p className="text-sm">Rating</p>
            <Separator className="mt-4" />
          </div>

          <div>
            <p className="text-lg font-bold">2</p>
            <p className="text-sm">Years hosting</p>
          </div>
        </div>
      </article>
      <div className="flex flex-col space-y-3">
        <p className="flex space-x-2">
          <Cake /> <span>Born in the 90s</span>
        </p>
        <p className="flex space-x-2">
          <BriefcaseBusiness /> <span>My work: Finance</span>
        </p>
        <p>
          I am Maxi, a very responsible person who trained in Argentina, Buenos
          Aires, as administrator at the UBA. I worked both in relation to
          belonging and personal projects ensuring the sustainability and
          sustainability
        </p>
      </div>
      <Separator className="mt-4" />
    </div>
  );
}

export default HostCard;
