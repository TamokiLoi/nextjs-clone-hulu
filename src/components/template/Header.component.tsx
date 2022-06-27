import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import HeaderItem from '../template/HeaderItem.component';

const HEADER_MENUS = [
    { title: 'HOME', ICON: HomeIcon },
    { title: 'TRENDING', ICON: LightningBoltIcon },
    { title: 'VERIFIED', ICON: BadgeCheckIcon },
    { title: 'COLLECCTIONS', ICON: CollectionIcon },
    { title: 'SEARCH', ICON: SearchIcon },
    { title: 'ACCOUNT', ICON: UserIcon },
]

function Header() {

    const renderMenu = () => {
        return (
            HEADER_MENUS.map((menu) =>
                <HeaderItem key={menu.title} title={menu.title} Icon={menu.ICON} />
            )
        )
    }

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {renderMenu()}
            </div>
            <Image
                className="object-contain"
                width={200}
                height={100}
                src="https://links.papareact.com/ua6"
                alt="logo-hulu"
            />
        </header>
    )
}

export default Header;