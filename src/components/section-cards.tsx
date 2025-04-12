import {
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import blue from "../assets/blue.svg";
import red from "../assets/red.svg";
import green from "../assets/green.svg";
import orange from "../assets/orange.svg";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 bg-[#333FE866] rounded-2xl lg:p-14 p-8 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid gap-4 px-0 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 grid-cols-2 lg:grid-cols-4">
      <div className="@container/card border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <Image src={blue} alt="logo" width={50} height={50} />
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Reviews 
          </div>
          <div className="text-muted-foreground">13 new reports</div>
        </CardFooter>
      </div>

      <div className="@container/card  border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <Image src={green} alt="logo" width={50} height={50} />
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            True Claims 
          </div>
          <div className="text-muted-foreground">13 new reports</div>
        </CardFooter>
      </div>

      <div className="@container/card border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <Image src={red} alt="logo" width={50} height={50} />
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
          False Claims 
          </div>
          <div className="text-muted-foreground">13 new reports</div>
        </CardFooter>
      </div>

      <div className="@container/card border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            <Image src={orange} alt="logo" width={50} height={50} />
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Unverified 
          </div>
          <div className="text-muted-foreground">13 new reports</div>
        </CardFooter>
      </div>
    </div>
  );
}
