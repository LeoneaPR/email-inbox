import React from 'react';
import s from './ProfileInfo.module.css'

const Profileinfo = () => {

    return (
        <div>
            <div className={s.background}>
                <img alt='background'
                     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionblock}>
                <h2>Avatar + Description</h2>
            </div>
        </div>
    )
}
export default Profileinfo