import { NextPage } from 'next';
import Image from 'next/image';

import MyIcon from '../public/images/myicon.jpeg';

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/myicon.jpeg" alt="アイコン" />
            <p>Imageコンポーネントで表示した場合</p>
            <Image src={MyIcon} alt="icon" placeholder='blur'/>
            <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
        </div>
    )
};

export default ImageSample;