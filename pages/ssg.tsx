// 型のために導入
import { GetStaticProps, NextPage } from "next";
// Next.jsの組み込みのコンポーネント
import Head from "next/head";

// ページコンポーネントのpropsの型定義
type SSGProps = {
    message: string;
};

// SSG向けのページ実装
// NextPageはNext.jsのPages向けの型
// NextPage<props>はmessage: stringのみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props;
    return (
        <div>
            {/* Headコンポーネントで囲むと、その要素は<head>タグに配置される */}
            <Head>
                <title>Sgtatic Site Generation</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>
                    このページは静的サイト生成（Static Site Generation）によってビルド時に生成されたページです。
                </p>
                <p>{message}</p>
            </main>
        </div>
    );
};

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
// エクスポートする必要があるため、非同期関数としてasyncとともに定義する必要がある

//GetStaticPropsの雛形　引数にcontextが与えられる
/**
 * 
 * export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
 *    return {
 *       props: {}
 *    }
 * }    
 */

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にgetStaticPropsが実行されました`;
    const contextParams = `${context.params}`
    console.log(contextParams);
    console.log(message);
    return {
        // ここで返したpropsを元にページコンポーネントを描画する
        props: {
            message,
        },
    };
};

// ページコンポーネントはexport defaultでエクスポートする
export default SSG;