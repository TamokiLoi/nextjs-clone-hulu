import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { UtilHelper } from '@@helpers';

type Props = {
    title: string;
    description: string;
    canonical?: string;
    css?: string;
    image?: string;
};

const DOMAIN_NAME = "Access Control";
const DOMAIN_HTTPS = `https://${DOMAIN_NAME}`;
const IMAGE_LOGO_LINK = "";

const Meta: FunctionComponent<Props> = ({
    title,
    description,
    canonical,
    css,
    image,
}) => {

    const router = useRouter();

    return (
        <Head>
            <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
            <title>{title}</title>
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={UtilHelper.htmlToText(description)} />
            <meta name="description" content={UtilHelper.htmlToText(description)} />
            <meta property="og:site_name" content={DOMAIN_NAME} />
            <meta property="og:url" content={`${DOMAIN_HTTPS}${router.asPath}`} />
            <meta name="twitter:card" content={DOMAIN_NAME} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={UtilHelper.htmlToText(description)} />
            <meta name="twitter:site" content={DOMAIN_NAME} />
            <meta name="twitter:creator" content={DOMAIN_NAME} />
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            {css && <link rel="stylesheet" href={`${css}`} />}
            {image ? (
                <meta property="og:image" content={`${image}`} />
            ) : (
                <meta property="og:image" content={IMAGE_LOGO_LINK} />
            )}
            {image && <meta name="twitter:image" content={`${image}`} />}
            {canonical && <link rel="canonical" href={`${canonical}`} />}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Meta