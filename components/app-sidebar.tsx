"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    ChevronRight,
    ChevronsUpDown, Warehouse,
    Command,
    CreditCard,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    LogOut,
    Map,
    MoreHorizontal,
    PieChart,
    Plus,
    Settings2,
    Sparkles,
    SquareTerminal,
    Trash2,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

// This is sample data matching your image structure
const data = {
    user: {
        name: "Account Admin",
        email: "accounts@company.com",
        avatar: "/avatars/admin.jpg",
    },

    teams: [
        {
            name: "Head Office",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Branch Office",
            logo: AudioWaveform,
            plan: "Standard",
        },
    ],

    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: SquareTerminal,
            isActive: false,
            items: [
                { title: "Overview", url: "/overview" }
            ],
        },

        {
            title: "Finance",
            // url: "/accounts",
            icon: BookOpen,
            items: [
                { title: "Chart of Accounts", url: "/finance/accounts" },
                { title: "Journal Entries", url: "/finance/journal" },
                { title: "Ledger", url: "/finance/ledger" },
                { title: "Opening Balances", url: "/finance/opening-balances" },
            ],
        },
        {
            title: "Stock Management",
            // url: "/accounts",
            icon: Warehouse,
            items: [
                { title: "Inventory", url: "/inventory" }

            ],
        },

        {
            title: "Sales",
            url: "/sales",
            icon: PieChart,
            items: [
                { title: "Customers", url: "/sales/customers" },
                { title: "Invoices", url: "/sales/invoices" },
                { title: "Credit Notes", url: "/sales/credit-notes" },
                { title: "Quotations", url: "/sales/quotations" },
            ],
        },

        {
            title: "Purchases",
            url: "/purchases",
            icon: Frame,
            items: [{ title: "Vendors", url: "/purchase/vendors" }],
        },

        // {
        //     title: "Banking",
        //     url: "/banking",
        //     icon: Map,
        //     items: [
        //         { title: "Bank Accounts", url: "/finance/accounts" },
        //         { title: "Bank Reconciliation", url: "/finance/reconciliation" },
        //         { title: "Cheque Management", url: "/finance/cheques" },
        //     ],
        // },

        {
            title: "Reports",
            url: "/reports",
            icon: Bot,
            items: [
                { title: "Trial Balance", url: "/reports/trial-balance" },
                { title: "Profit & Loss", url: "/reports/profit-loss" },
                { title: "Balance Sheet", url: "/reports/balance-sheet" },
                { title: "GST / VAT Reports", url: "/reports/tax" },
            ],
        },

        {
            title: "Settings",
            url: "/settings",
            icon: Settings2,
            items: [
                { title: "Company Profile", url: "/settings/company" },
                { title: "Financial Year", url: "/settings/financial-year" },
                { title: "Taxes", url: "/settings/taxes" },
                { title: "Users & Roles", url: "/settings/users" },
            ],
        },
    ],

    projects: [
        {
            name: "Financial Year 2025–26",
            url: "/projects/fy-2025",
            icon: Frame,
        },
        {
            name: "Internal Audit",
            url: "/projects/audit",
            icon: PieChart,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [activeTeam, setActiveTeam] = useState(data.teams[0]);
    const [mounted, setMounted] = useState(false);
    const { signOut } = useClerk();
    const router = useRouter();

    const handleSignout = () => {
        signOut(() => {
            toast.success("Successfully signed out");
            router.push("/");
        });
    };
    // This ensures the component only renders after the client has taken over
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a skeleton or null to prevent ID mismatch during hydration
        return null;
    }

    return (
        <Sidebar collapsible="icon" className="border-r" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <activeTeam.logo className="size-4" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {activeTeam.name}
                                        </span>
                                        <span className="truncate text-xs">{activeTeam.plan}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                align="start"
                                side="bottom"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="text-xs text-muted-foreground">
                                    Teams
                                </DropdownMenuLabel>
                                {data.teams.map((team, index) => (
                                    <DropdownMenuItem
                                        key={team.name}
                                        onClick={() => setActiveTeam(team)}
                                        className="gap-2 p-2"
                                    >
                                        <div className="flex size-6 items-center justify-center rounded-sm border">
                                            <team.logo className="size-4 shrink-0" />
                                        </div>
                                        {team.name}
                                        <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="gap-2 p-2">
                                    <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                        <Plus className="size-4" />
                                    </div>
                                    <div className="font-medium text-muted-foreground">
                                        Add team
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <Link href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.projects.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>
                                        {" "}
                                        <item.icon />
                                        <span>{item.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuAction showOnHover>
                                            <MoreHorizontal />
                                            <span className="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-48 rounded-lg"
                                        side="bottom"
                                        align="end"
                                    >
                                        <DropdownMenuItem>
                                            <Folder className="text-muted-foreground" />
                                            <span>View Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Forward className="text-muted-foreground" />
                                            <span>Share Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Trash2 className="text-muted-foreground" />
                                            <span>Delete Project</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        ))}
                        <SidebarMenuItem>
                            <SidebarMenuButton className="text-sidebar-foreground/70">
                                <MoreHorizontal className="text-sidebar-foreground/70" />
                                <span>More</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {data.user.name}
                                        </span>
                                        <span className="truncate text-xs">{data.user.email}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage
                                                src={data.user.avatar}
                                                alt={data.user.name}
                                            />
                                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">
                                                {data.user.name}
                                            </span>
                                            <span className="truncate text-xs">
                                                {data.user.email}
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleSignout}>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
