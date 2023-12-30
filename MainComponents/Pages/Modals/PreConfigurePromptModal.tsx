import HeadingTag from "@/MainComponents/elements/Heading";
import { PreConfigureTabData } from "@/components/PreConfigureTabData";
import { CapIcon } from "@/components/icons/CapIcon";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function PreConfigurePromptModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            //@ts-ignore
            as={"button"}
            className=""
          >
            <CapIcon />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="mb-3">
            <HeadingTag>Pre-configured Prompts</HeadingTag>
          </div>
          <PreConfigureTabData maxHeight={"h-[55vh]"} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
