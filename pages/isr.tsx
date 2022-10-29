import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRprops = {
    message: string;
};

//ISRpropsを受け取るNextPageの型
const ISR: NextPage<ISRprops> = (props) => {
    const {message} = props;

    const router = useRouter();

    //フォールバックのページを返す
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>このページはISRによってビルド時に生成されたページです。</p>
                <p>{message}</p>
            </main>
        </div>
    )
};

export const getStaticProps: GetStaticProps<ISRprops> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にこのページのgetStaticPropsが実行されました`;

    return {
        props: {
            message,
        },
        // ページの有効期限を秒単位で指定
        revalidate: 60,
    }
}

export default ISR