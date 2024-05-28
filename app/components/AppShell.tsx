"use client";

import { AppShell as MantineAppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { ReactNode } from "react";

export const AppShell = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <MantineAppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="flex justify-around w-full gap-4">
            <Link className="mr-auto" href={"/"}>
              Tommy MARTIN
            </Link>
            <Link href="/about">About me</Link>
            <Link
              href="https://www.linkedin.com/in/tommy-martin-72956b1ab/"
              target="_blank"
            >
              Linkedin
            </Link>
            <Link href="https://github.com/mlfcnt" target="_blank">
              Github
            </Link>
            <Link
              href="https://vercel.com/tommy-martins-projects"
              target="_blank"
            >
              Vercel
            </Link>
          </div>
        </Group>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar p="md">
        <Link href={"/"}>Home</Link>
        <Link href={"why"}>Why did I make this?</Link>
        <Link href={"/code"}>Code highlights</Link>
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
};
