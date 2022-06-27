import React, { FunctionComponent } from 'react';
import Header from './Header.component';
import Nav from './Nav.component';

type Props = {
    children: any,
    deviceType: any
};

const Template: FunctionComponent<Props> = ({ children, deviceType }) => {

    return (
        <div>
            <Header />

            <Nav />

            <div>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Template