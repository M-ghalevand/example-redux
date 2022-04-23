import Head from "next/head";

import {Navbar_app, Nav} from "../../components/siteMe";
const myFunc1 = () => {
    const x = document.getElementById("mynav");
    if (x.classList.item(2) === "XsBlock") {
        x.classList.remove("XsBlock");
        x.classList.add("XsHidden");
    }
};
const Index = () => {
    return (
        <>
            <Head>
                <title>Example react,redux-toolkit,next</title>
            </Head>
            <Nav app="active" nav={undefined} about={undefined} resume={undefined} blog={undefined}
                 conteact={undefined}/>
            <div className="bg-light text-body" onClick={myFunc1}>
                <Navbar_app/>
                <div className="md:mr-52 ml-4 sm:mr-4 my-10">
                    <ul className="app-ul rtl text-white mr-5">
                        <li className="app-ul-li ">
                            <p className=" text-sky-500 font-black text-2xl mt-5">Todo App</p>
                            <p className="mt-2 mr-3 text-gray-200">
                                state با redux مدیریت شده است که از دو بخش todos و filter تشکلیل شده است.
                            </p>
                            <ul className="mr-5 mt-1 text-gray-200">
                                <li className="mt-1">
                                    todos:
                                    <ul className="mr-7 list-disc mt-1">
                                        <li className="mt-1">
                                            todos/todoAdded: با وارد کردن موضوع و زدن Enter یک
                                            dispatch اتفاق می افتد که همراه Actions یک object که id,
                                            text, completed دارد.
                                        </li>
                                        <li className="mt-1">
                                            todos/colorChange: با انتخاب یکی از رنگها یک dispatch
                                            انجام میشود که همرا Actions یک نام رنگ دارد, این نام رنگ
                                            به object مورد نظر اضافه می شود یا تغییر میدهد.
                                        </li>
                                        <li className="mt-1">
                                            todos/todoToggled: با هر بار زدن تیک یا برداشتن یک
                                            dispatch انجام میشود که همرا این Action یک false, true
                                            دارد, که object مورد نظر را اگر false باشد true میکند یا
                                            بلعکس.
                                        </li>
                                        <li className="mt-1">
                                            todos/todoDeleted: که با هربار کلیک کردیک dispatch انجام
                                            میشود که همرا object یک id دارد که object مورد نظر پاک
                                            میکند.
                                        </li>
                                        <li className="mt-1">
                                            todos/markAllCompleted: باکلیک روی Mark All Completed یک
                                            dispatch انجام میشود که همرا Actions چیزی ندارد فقط یک
                                            حلقه انجام میشود که تمام object ها completed: true میشود.
                                        </li>
                                        <li className="mt-1">
                                            todos/clearCompleted: با کلیک روی دکمه Clear Completed یک
                                            dispatch انجام میشود که همرا خود چیزی ندارد فقط یک حلقه
                                            انجام میشود که تمام object ها را پاک می کند.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mt-1">
                                    filter:
                                    <ul className="mr-7 list-disc mt-1">
                                        <li className="mt-1">
                                            filter/changedColorFilter: با انتخاب یکی از رنگها, یک
                                            dispatch انجام میشود همراه Actions یک نام رنگ و یک add,
                                            remove دارد که نام این رنگ به فیلتر اضافه می کند.
                                        </li>
                                        <li className="mt-1">
                                            filter/changeStatusFilter: ,با انتخاب یکی از این سه مورد
                                            یک dispatch انجام میشودکه همرا Actions یک All, Active,
                                            Completed دارد که به فیلتر اضافه میکند.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="app-ul-li">
                            <p className=" text-sky-500 font-black text-2xl mt-5">Post App</p>
                            <p className="mt-2 mr-3 text-gray-200">
                                state با redux مدیریت شده است که از دو بخش posts, users تشکیل
                                شده است.
                            </p>
                            <ul className="mr-5 mt-1 text-gray-200">
                                <li className="mt-1">
                                    posts:
                                    <ul className="mr-7 list-disc mt-1">
                                        <li className="mt-1">
                                            post/fetchPosts/fulfilled: با وارد شدن به صفحه post_app یک
                                            dispatch انجام میشود که این dispatch با استفاده از
                                            middleware reduxTunk است که اطلاعات مورد نیاز post از سایت
                                            json placeholder می خواند.
                                        </li>
                                        <li className="mt-1">
                                            posts/addNewPost: با کلیک بروی save post یک dispatch انجام
                                            میشود که همرا Action یک object که id, userId, title, body
                                            ارسال میشود
                                        </li>
                                        <li className="mt-1">
                                            posts/addReactions: با کلیک بر روی هر یک از reaction یک
                                            dispatch انجام میشود که این dispatch یک object که state
                                            local هست را همراه Action ارسال میکند و داخل پست مورد نظر
                                            اضافه میکند.
                                        </li>
                                        <li className="mt-1">
                                            posts/addTime: که ۲ کار انجام میدهد یکی post که تاریخ
                                            ندارند و دیگری با هربار پست save کردن یک dispatch انجام
                                            میشود که id , data همرا با Actions ارسال می شود که این
                                            تاریخ به id مورد نظر اضافه میکند.
                                        </li>
                                    </ul>
                                </li>
                                <li className="mt-1">
                                    users:
                                    <ul className="mr-7 list-disc mt-1">
                                        <li className="mt-1">
                                            users/fetchusers/fulfilled:با وارد شدن به صفحه post_app یک
                                            dispatch انجام میشود که این dispatch با استفاده از
                                            middleware reduxTunk است که اطلاعات مورد نیاز user از سایت
                                            json placeholder می خواند.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="app-ul-li">
                            <p className=" text-sky-500 font-black text-2xl mt-5">Weather App</p>
                            <p className="mt-2 mr-3 text-gray-200">
                                state با خود react مدیریت شده است.
                            </p>
                            <ul className="mr-5 mt-1 text-gray-200">
                                <li className="mt-2 mr-3">
                                    <ul className="mr-5 list-disc mt-1">
                                        <li className="mt-1">
                                            APIاستفاده شده از سایت <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">openweathermap</a> است.
                                        </li>
                                        <li className="mt-1">
                                            در قسمت search نام مکان مورد نظر را میتوان به اکثر زبان های رایج دنیا تایپ
                                            کرد.
                                        </li>
                                        <li className="mt-1">
                                            بعد از submit شدن نام مکان, یک req به API مورد نظر فرستاده میشود که در res
                                            آن مختصات جغرافیای است.
                                        </li>
                                        <li className="mt-1">
                                            بعد از پیدا کردن مختصات, یک req دیگر فرستاده میشود که در res آن آب و هوای ۸
                                            روز آینده وجود دارد.
                                        </li>
                                        <li className="mt-1">
                                            برای دیدن آب و هوای تمام مکان ها روی لینک کلیک کنید
                                            <a href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=radar&lat=23.5640&lon=163.6523&zoom=3"
                                               target="_blank" rel="noreferrer"> https://openweathermap.org </a>
                                            و تمام این مکان ها در این سایت هم قابل مشاهده است.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Index;
