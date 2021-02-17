import React, { useEffect } from "react";
import _ from "lodash";
import CheerfulUser from "./CheerfulUser";
import "./ourCheerful.scss";
import { connect } from "react-redux";
import usersOperation from "../../redux/getUsers/users.operation";

function OurCheerful({ getUsers, data }) {
  //переменная хранит в себе значение экран больше 768 или нет
  let largeWidth;

  //при первом рендере проверяет какая ширина экрана и делает соответственный запрос (либо на 3 либо на 6 элементов)
  useEffect(() => {
    if (innerWidth < 768) {
      getUsers(1, 3);
    } else {
      getUsers(1, 6);
    }
  }, []);

  //функция которая отслеживает ширину и перезаписывает переменную largeWidth
  const width = _.debounce(() => {
    if (innerWidth >= 768) {
      return (largeWidth = true);
    } else if (innerWidth < 768) {
      return (largeWidth = false);
    }
  }, 250);

  //ивент для отслеживания ширины в реальном времени
  window.addEventListener("resize", width);

  //событие при нажатии на кнопку load more, смотрит на ширину экрана и делает запрос на следующую страницу объектов
  const handleLoadMore = () => {
    let localCount;
    let localPage = data.page;
    if (innerWidth < 768) {
      localCount = 3;
    } else {
      localCount = 6;
    }
    const step = () => {
      localPage = localPage += 1;
    };
    step();
    getUsers(localPage, localCount);
  };

  // логика такова что на первом рендере largeWidth = undefined
  // и если так то просто рендерим все элементы users, так как
  // по умолчанию useEffect проверит ширину и сделает запрос с
  // нужным кол-вом элементов, после чего нужно будет сделать
  // проверку на largeWidth и по результатам рендерить либо 6
  // элементов либо 3 (useEffect так же не должен дать погрешность)
  // однако если у нас уже есть три элемента а экран перевернули то рендерить только 3
  // и при следующем запросе отрендерится 6
  // вывод: проблема только в том что при наличии 3-х элементов заполнить всю сетку не получится
  // решение: подгружать все что есть в добавок к старому, а не менять старое на новое

  return (
    <div className="ourCheerful">
      <div className="ourCheerful__grid">
        <h2 className="ourCheerful__title" title="Our cheerful users">
          Our cheerful users
        </h2>
        <p className="ourCheerful__text">
          Attention! Sorting users by registration date
        </p>
        <div className="ourCheerful__users-block">
          {data
            ? data.users.map((user) => (
                <div className="ourCheerful__item" key={user.id}>
                  <CheerfulUser
                    img={user.photo}
                    name={user.name}
                    profile={user.position}
                    number={user.phone}
                    email={user.email}
                  />
                </div>
              ))
            : ""}
        </div>
        <div className="ourCheerful__button-block">
          <button
            disabled={data.totalPages === data.page ? true : false}
            onClick={handleLoadMore}
            className="ourCheerful__button"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  getUsers: usersOperation.getUsers,
};

const mapStateToProps = (state) => ({
  data: state.dataOfUsers,
});

export default connect(mapStateToProps, mapDispatchToProps)(OurCheerful);

// const width = _.debounce(() => {
//     setCurrentWidth(innerWidth)
// }, 150)

// window.addEventListener("resize", width);

// useEffect(() => {
//     setTimeout(() => {
//         if(currentWidth < 768) {
//             setCount(3);
//         }else {
//             setCount(6)
//         }
//     }, 200)

//     console.log('after', currentWidth)
//     console.log('count', count)
// }, [currentWidth])
