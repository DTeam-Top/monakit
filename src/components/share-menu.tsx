import { Link, Share2 } from "lucide-react";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SITE_TITLE } from "@/consts";
import { cn, truncateText } from "@/lib/utils";

interface ShareMenuProps {
  name: string;
  description?: string;
  url: string;
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
  customTrigger?: React.ReactNode;
}

export const ShareMenu: React.FC<ShareMenuProps> = ({
  name,
  description,
  url,
  size,
  customTrigger,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [truncatedDescription] = useState(
    description ? truncateText(description) : "",
  );
  const [title] = useState(`${SITE_TITLE} - ${name} `);

  const handleShareClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    toast.success("Copied successfully!");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        onClick={handleShareClick}
        className="focus:outline-none"
        asChild={!!customTrigger}
      >
        {customTrigger || (
          <div
            className={cn(
              "rounded-full text-muted-foreground text-xs flex items-center gap-2 cursor-pointer hover:bg-gray-200 justify-center p-2 border-muted-foreground  h-8 font-bold  dark:text-white  hover:bg-accent hover:text-emerald-400 group",
              size !== "sm" ? "w-20 border" : "",
            )}
          >
            <Share2 className="w-4 h-4 text-muted-foreground  dark:text-white group-hover:text-emerald-400" />
            {size !== "sm" && "Share"}
          </div>
        )}
      </DropdownMenuTrigger>
      {isMenuOpen && (
        <DropdownMenuContent className="mt-2 w-48 bg-white border border-teahouse-secondary rounded-md shadow-lg text-black">
          <DropdownMenuItem
            onClick={(e) => handleCopyLink(e)}
            className="flex items-center gap-2 duration-200 cursor-pointer "
          >
            <div className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center">
              <Link className="w-3 h-3" />
            </div>
            Copy link
          </DropdownMenuItem>
          <DropdownMenuItem className="transition-colors duration-200 cursor-pointer">
            <TwitterShareButton
              url={url}
              title={name}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                {" "}
                <TwitterIcon round className="w-6 h-6 size-6" />
                Share to X
              </div>
            </TwitterShareButton>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
            <LinkedinShareButton
              url={url}
              title={name}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-48 flex items-center gap-2">
                {" "}
                <LinkedinIcon className="w-6 h-6 size-6" round />
                Share to LinkedIn
              </div>
            </LinkedinShareButton>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 transition-colors duration-200 cursor-pointer">
            <EmailShareButton
              url={url}
              subject={title}
              body={`${SITE_TITLE}：${name} -${truncatedDescription}`}
              blankTarget={true}
            >
              <div className="w-48 flex items-center gap-2">
                <EmailIcon className="w-6 h-6 size-6" round />
                Email share
              </div>
            </EmailShareButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
