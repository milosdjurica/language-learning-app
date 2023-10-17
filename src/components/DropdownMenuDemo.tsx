import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitchButton } from "./ThemeSwitchButton";
import { signOut, useSession } from "next-auth/react";

export function DropdownMenuDemo() {
  // ! useSession returns object with Data, Status, Update, we access only Data property as Session
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {session?.user?.name || session?.user?.email}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48">
        <div className="flex justify-between">
          <ThemeSwitchButton />
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem> */}
          <DropdownMenuItem className="flex justify-between">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>

          {/* <DropdownMenuItem> */}
          <DropdownMenuItem className="flex justify-between">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
          </DropdownMenuItem>

          {/* <DropdownMenuItem> */}
          <DropdownMenuItem className="flex justify-between">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
