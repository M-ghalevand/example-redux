import Head from "next/head";

import { Navbar_app, Nav } from "../../components/SiteMe";

const Home = () => {
  return (
    <>
      <Head>
        <title>Example react,redux-toolkit,next</title>
      </Head>
      <Nav app="active" />
      <div className="mr-200 bg-light text-body">
        <Navbar_app />
        <div>
          <ul className="app-ul rtl">
            <li className="app-ul-li">
              <p className="fw-bolder">Todo App</p>
              <p>
                state با redux مدیریت شده است که از دو بخش todos و filter تشکلیل
                .شده است
              </p>
              <ul>
                <li>
                  /todos
                  <ul>
                    <li>
                      todos/todoAdded: با وارد کردن موضوع و زدن Enter یک
                      dispatch اتفاق می افتد که همراه Actions یک object که id,
                      text, completed دارد.
                    </li>
                    <li>
                      todos/colorChange: با انتخاب یکی از رنگها یک dispatch
                      انجام میشود که همرا Actions یک نام رنگ دارد, این نام رنگ
                      به object مورد نظر اضافه می شود یا تغییر میدهد.
                    </li>
                    <li>
                      todos/todoToggled: با هر بار زدن تیک یا برداشتن یک
                      dispatch انجام میشود که همرا این Action یک false, true
                      دارد, که object مورد نظر را اگر false باشد true میکند یا
                      بلعکس.
                    </li>
                    <li>
                      todos/todoDeleted: که با هربار کلیک کردیک dispatch انجام
                      میشود که همرا object یک id دارد که object مورد نظر پاک
                      میکند.
                    </li>
                    <li>
                      todos/markAllCompleted: باکلیک روی Mark All Completed یک
                      dispatch انجام میشود که همرا Actions چیزی ندارد فقط یک
                      حلقه انجام میشود که تمام object ها completed: true میشود.
                    </li>
                    <li>
                      todos/clearCompleted: با کلیک روی دکمه Clear Completed یک
                      dispatch انجام میشود که همرا خود چیزی ندارد فقط یک حلقه
                      انجام میشود که تمام object ها را پاک می کند.
                    </li>
                  </ul>
                </li>
                <li>
                  /filter
                  <ul>
                    <li>
                      filter/changedColorFilter: با انتخاب یکی از رنگها, یک
                      dispatch انجام میشود همراه Actions یک نام رنگ و یک add,
                      remove دارد که نام این رنگ به فیلتر اضافه می کند.
                    </li>
                    <li>
                      filter/changeStatusFilter: ,با انتخاب یکی از این سه مورد
                      یک dispatch انجام میشودکه همرا Actions یک All, Active,
                      Completed دارد که به فیلتر اضافه میکند.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="app-ul-li">
              <p className="fw-bolder">Post App</p>
              <p>
                state با redux مدیریت شده است که دو بخش دارد posts, users تشکیل
                شده است.
              </p>
              <ul>
                <li>
                  /posts
                  <ul>
                    <li>
                      post/fetchPosts/fulfilled: با وارد شدن به صفحه post_app یک
                      dispatch انجام میشود که این dispatch با استفاده از
                      middleware reduxTunk است که اطلاعات مورد نیاز post از سایت
                      json placeholder می خواند.
                    </li>
                    <li>
                      posts/addNewPost: با کلیک بروی save post یک dispatch انجام
                      میشود که همرا Action یک object که id, userId, title, body
                      ارسال میشود
                    </li>
                    <li>
                      posts/addReactions: با کلیک بر روی هر یک از reaction یک
                      dispatch انجام میشود که این dispatch یک object که state
                      local هست را همراه Action ارسال میکند و داخل پست مورد نظر
                      اضافه میکند.
                    </li>
                    <li>
                      posts/addTime: که ۲ کار انجام میدهد یکی post که تاریخ
                      ندارند و دیگری با هربار پست save کردن یک dispatch انجام
                      میشود که id , data همرا با Actions ارسال می شود که این
                      تاریخ به id مورد نظر اضافه میکند.
                    </li>
                  </ul>
                </li>
                <li>
                  /users
                  <ul>
                    <li>
                      users/fetchusers/fulfilled:با وارد شدن به صفحه post_app یک
                      dispatch انجام میشود که این dispatch با استفاده از
                      middleware reduxTunk است که اطلاعات مورد نیاز user از سایت
                      json placeholder می خواند.
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

export default Home;
