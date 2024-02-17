"use client";

import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { Logo } from '@/components/logo';

const headerNav = [
    // {
    //     id: 1,
    //     name: "Blog",
    //     link: "./blog"
    // },
    // {
    //     id: 2,
    //     name: "About",
    //     link: "./about"
    // }
];

function MobileNavigation() {
    return (
        <Popover>
            {({ open, close }) => (
                <>
                    <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
                        <span className="sr-only">Toggle Navigation</span>
                        <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 overflow-visible stroke-white"
                            fill="none"
                            strokeWidth={2}
                            strokeLinecap="round"
                        >
                            <path
                                d="M0 1H14M0 7H14M0 13H14"
                                className={clsx('origin-center transition', {
                                    'scale-90 opacity-0': open,
                                })}
                            />
                            <path
                                d="M2 2L12 12M12 2L2 12"
                                className={clsx('origin-center transition', {
                                    'scale-90 opacity-0': !open,
                                })}
                            />
                        </svg>
                    </Popover.Button>
                    <Transition.Root>
                        <Transition.Child
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="duration-150 ease-in"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Popover.Overlay className="fixed inset-0 bg-background/80" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                as="ul"
                                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-background p-6 text-lg tracking-tight text-primary-foreground shadow-xl ring-1 ring-slate-900/5"
                            >
                                {
                                    headerNav.map((e,i) => {
                                        return(
                                            <li key={e.id}>
                                                <Link href={e.link} className="block w-full" onClick={() => close()}>
                                                    {e.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <li className="border-t border-slate-300/40 pt-4">
                                    <Link href="/login" className="block w-full">Sign in
                                    </Link>
                                </li>
                            </Popover.Panel>
                        </Transition.Child>
                    </Transition.Root>
                </>
            )}
        </Popover>
    );
}

export function Header() {
    return (
        <header className="py-10">
            <Container>
                <nav className="relative z-50 text-sm">
                    <ul className="flex items-center justify-between">

                        <li>
                            <Link href="#">

                                <span className="sr-only">Home</span>
                                <Logo className="h-10 w-auto" />
                            </Link>
                        </li>
                        <div className='flex items-centre '>

                            {
                                headerNav.map((e, i) => {
                                    return (
                                        <li
                                            key={e.id}
                                            className='space-y-4 items-centre my-auto  hidden md:block'
                                        >
                                            <Link
                                                href={e.link}
                                                className="rounded-lg h-8 my-auto py-2 px-4 text-foreground-primary hover:bg-secondary/20 "
                                            >
                                                {e.name}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                            <li className="ml-auto md:ml-8">
                                <Button>
                                    <span>
                                        Launch Dapp
                                    </span>
                                </Button>
                            </li>
                            <li className="ml-5 -mr-1 md:hidden">
                                <MobileNavigation />
                            </li>
                        </div>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}