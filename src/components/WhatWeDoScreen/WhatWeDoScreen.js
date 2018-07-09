import React from 'react'

import './WhatWeDeScreen.css'
import image from '../../assets/images/services.jpeg'


const WhatWeDoScreen = () => (
  <div className="content">
    <main className="container services">
      <section className="services__section">
        <article className="services__article">
          <h2 className="services__title">شبکه‌های اجتماعی</h2>
          <p>
            شاید بشه گفت الان دیگه مهمترین جایی که یک برند یا بیزینس باید توش حضور هدفمند و مؤثری داشته باشه شبکه‌های اجتماعی هستند.
             شبکه‌هایی که زندگی اکثر آدم‌هارو هر چند خیلی کوتاه هم که شده در طول شبانه روز به خودش مشغول کرده.
          </p>
          <p>
            ولی ما در غالب یک بیزینس چطور باید اونجا حضور داشته باشیم، ما میگیم:
          </p>
          <ul>
            <li>
              اول باید استراتژی مناسب داشت.
            </li>
            <li>
              حالا این استراتژی نیاز به تحقیقات درباره ماهیت فعالیت،‌ مخاطب و اهداف داره.
            </li>
            <li>
              سومین قدم اینه تو هر بستری چه محتوایی داشته باشیم.
            </li>
            <li>
              حالا باید این محتوا رو به بهترین شکل ایجاد کنیم.
            </li>
          </ul>
          <p>
            خوب حالا که به یک محتوای خوب رسیدیم در شروع کار باید یک برنامه‌ریزی رسانه خوب داشته باشیم تا محتوامون رو به بهترین شکل به مخاطبین نشون بدیم.
          </p>
          <p>
            اینا دقیقا کارهایی هستن که ما مرحله به مرحله و با دقت براتون انجامش میدیم
          </p>
        </article>
        <img className="services__image" src={image} alt="Digital Marketing" />
      </section>
      <section className="services__section">
        <article className="services__article">
          <h2 className="services__title">رویداد</h2>
          <p>
            توی فرآیند دیجیتال بعضی موقع‌ها هم باید حضور فیزیکی داشت. مثلا یک جایی مخاطبامون رو دور هم جمع کنیم و برنامه خاصی رو اجرا کنیم. از این جمع شدنه باید نهایت استفاده رو تو فضای دیجیتال هم ببریم.
          </p>
          <p>
            ما با شناختی که نسبت به فضای دیجیتال داریم میخواهیم بهترین این برنامه‌ها رو طراحی و اجرا کنیم تا به یک نتیجه قابل اندازه‌گیری و مطلوب برسیم. 
          </p>
        </article>
        <img className="services__image" src={image} alt="Digital Marketing" />
      </section>
      <section className="services__section">
        <article className="services__article">
          <h2 className="services__title">طراحی و تولید</h2>
          <div>
            محتوا باید عالی باشه!
          </div>
          <div>
            نه فقط محتوا، همه عوامل بصری باید بهترین باشند!
          </div>
          <div>
            ولی بهترین معنیش فقط زیبایی نیست. زیبایی که متناسب خودمون، کارمون، مخاطبمون و جایی که هستیم باشه. ما از این ساختن و طراحی کردن لذت می‌بریم.
          </div>
        </article>
        <img className="services__image" src={image} alt="Digital Marketing" />
      </section>
      <section className="services__section">
        <article className="services__article">
          <h2 className="services__title">طراحی و توسعه وب‌سایت و اپلیکیشن موبایل</h2>
          <p>
            همه بیزینس‌ها یک وب سایت میخوان حتی بعضیاشونم نیاز به اپلیکیشن موبایل دارن. ما میخوایم همه کارای مربوط به وب سایت و اپلیکیشن موبایل رو به بهترین شکل براتون انجام بدیم.
          </p>
        </article>
        <img className="services__image" src={image} alt="Digital Marketing" />
      </section>
    </main>
    <br />
  </div>
)

export { WhatWeDoScreen }
